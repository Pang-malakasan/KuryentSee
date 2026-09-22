import type { OutageLocation } from "@/data/outages"

/**
 * Standard ray-casting algorithm to test if [longitude, latitude] is inside a polygon ring
 */
export function isPointInRing(point: [number, number], ring: number[][]): boolean {
  const [x, y] = point
  let inside = false

  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const xi = ring[i][0]
    const yi = ring[i][1]
    const xj = ring[j][0]
    const yj = ring[j][1]

    const intersect = yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi
    if (intersect) inside = !inside
  }

  return inside
}

/**
 * Check if [longitude, latitude] is inside a GeoJSON Polygon or MultiPolygon geometry
 */
export function isPointInGeometry(point: [number, number], geometry: any): boolean {
  if (!geometry || !geometry.coordinates) return false

  if (geometry.type === "Polygon") {
    // coordinates is [outerRing, ...holes]
    const outerRing = geometry.coordinates[0]
    if (!outerRing || !isPointInRing(point, outerRing)) return false

    // Check holes (if inside any hole, it's not in the polygon)
    for (let h = 1; h < geometry.coordinates.length; h++) {
      if (isPointInRing(point, geometry.coordinates[h])) {
        return false
      }
    }
    return true
  }

  if (geometry.type === "MultiPolygon") {
    // coordinates is [ [outerRing, ...holes], ... ]
    for (const poly of geometry.coordinates) {
      const outerRing = poly[0]
      if (outerRing && isPointInRing(point, outerRing)) {
        let insideHole = false
        for (let h = 1; h < poly.length; h++) {
          if (isPointInRing(point, poly[h])) {
            insideHole = true
            break
          }
        }
        if (!insideHole) return true
      }
    }
  }

  return false
}

/**
 * Calculate distance between two lat/lng coordinates in kilometers (Haversine formula)
 */
export function calculateDistanceKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371 // Earth radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180
  const dLon = ((lon2 - lon1) * Math.PI) / 180
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

/**
 * Shortest distance in kilometers from a point [lng, lat] to a line segment [lngA, latA] -> [lngB, latB]
 */
export function distanceToSegmentKm(
  point: [number, number],
  segA: number[],
  segB: number[]
): number {
  const [px, py] = point
  const [ax, ay] = segA
  const [bx, by] = segB

  const dx = bx - ax
  const dy = by - ay
  const lenSq = dx * dx + dy * dy

  if (lenSq === 0) {
    return calculateDistanceKm(py, px, ay, ax)
  }

  // Projection scalar clamped to [0, 1]
  const t = Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / lenSq))
  const closestX = ax + t * dx
  const closestY = ay + t * dy

  return calculateDistanceKm(py, px, closestY, closestX)
}

/**
 * Minimum distance in kilometers from a point [lng, lat] to any edge of a polygon ring
 */
export function minDistanceToRingKm(point: [number, number], ring: number[][]): number {
  let minDistance = Infinity
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const dist = distanceToSegmentKm(point, ring[j], ring[i])
    if (dist < minDistance) {
      minDistance = dist
    }
  }
  return minDistance
}

/**
 * Minimum distance in kilometers from a point to any boundary of a Polygon or MultiPolygon
 */
export function minDistanceToGeometryBoundaryKm(point: [number, number], geometry: any): number {
  if (!geometry || !geometry.coordinates) return Infinity

  let minDistance = Infinity

  if (geometry.type === "Polygon") {
    for (const ring of geometry.coordinates) {
      const d = minDistanceToRingKm(point, ring)
      if (d < minDistance) minDistance = d
    }
  } else if (geometry.type === "MultiPolygon") {
    for (const poly of geometry.coordinates) {
      for (const ring of poly) {
        const d = minDistanceToRingKm(point, ring)
        if (d < minDistance) minDistance = d
      }
    }
  }

  return minDistance
}

export interface GeolocationMatchResult {
  exactMatch: OutageLocation | null
  closest: OutageLocation | null
  closestDistanceKm: number
  isNearBoundary?: boolean
}

/**
 * Find exact matching barangay via Point-In-Polygon,
 * with near-boundary tolerance (~250m) for coastal / border points,
 * or fallback to closest barangay by boundary / centroid.
 */
export function matchCoordinatesToBarangays(
  coords: [number, number],
  outages: OutageLocation[]
): GeolocationMatchResult {
  const [lng, lat] = coords

  // 1. Exact Point-in-Polygon containment
  for (const outage of outages) {
    if (outage.geoJson && outage.geoJson.features) {
      for (const feature of outage.geoJson.features) {
        if (isPointInGeometry(coords, feature.geometry)) {
          return {
            exactMatch: outage,
            closest: outage,
            closestDistanceKm: 0,
            isNearBoundary: false,
          }
        }
      }
    }
  }

  // 2. Near-boundary tolerance match (e.g. 0.25 km / 250 meters)
  // Accounts for GPS jitter, coastline simplification, and border roads
  const BOUNDARY_TOLERANCE_KM = 0.25
  let closestBoundaryOutage: OutageLocation | null = null
  let minBoundaryDistance = Infinity

  for (const outage of outages) {
    if (outage.geoJson && outage.geoJson.features) {
      for (const feature of outage.geoJson.features) {
        const boundaryDist = minDistanceToGeometryBoundaryKm(coords, feature.geometry)
        if (boundaryDist < minBoundaryDistance) {
          minBoundaryDistance = boundaryDist
          closestBoundaryOutage = outage
        }
      }
    }
  }

  if (closestBoundaryOutage && minBoundaryDistance <= BOUNDARY_TOLERANCE_KM) {
    return {
      exactMatch: closestBoundaryOutage,
      closest: closestBoundaryOutage,
      closestDistanceKm: minBoundaryDistance,
      isNearBoundary: true,
    }
  }

  // 3. If outside direct coverage, find closest barangay
  // Prefer boundary distance if available, otherwise centroid distance
  let closest: OutageLocation | null = closestBoundaryOutage
  let minDistance = minBoundaryDistance

  if (!closest || minDistance === Infinity) {
    for (const outage of outages) {
      const dist = calculateDistanceKm(lat, lng, outage.markerOffset[1], outage.markerOffset[0])
      if (dist < minDistance) {
        minDistance = dist
        closest = outage
      }
    }
  }

  return {
    exactMatch: null,
    closest,
    closestDistanceKm: minDistance,
    isNearBoundary: false,
  }
}

/**
 * Generate a GeoJSON Polygon circle for visual GPS accuracy radius
 */
export function createAccuracyCircleGeoJSON(
  center: [number, number],
  radiusMeters: number,
  points: number = 48
): any {
  const [lng, lat] = center
  if (!radiusMeters || radiusMeters <= 0) return null

  // Earth radius in meters
  const earthRadius = 6371000
  const latRad = (lat * Math.PI) / 180
  const dLat = (radiusMeters / earthRadius) * (180 / Math.PI)
  const dLng = dLat / Math.cos(latRad)

  const coordinates: number[][] = []
  for (let i = 0; i <= points; i++) {
    const angle = (i * 2 * Math.PI) / points
    const x = lng + dLng * Math.cos(angle)
    const y = lat + dLat * Math.sin(angle)
    coordinates.push([Number(x.toFixed(6)), Number(y.toFixed(6))])
  }

  return {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          radius: radiusMeters,
        },
        geometry: {
          type: "Polygon",
          coordinates: [coordinates],
        },
      },
    ],
  }
}

/**
 * Extracts the outer perimeter boundary and full fill of an entire municipality/city
 * by computing the topological outer boundary edges (segments appearing exactly once).
 */
export function getMunicipalityBoundary(outagesInCity: OutageLocation[]) {
  if (!outagesInCity || outagesInCity.length === 0) return null

  const edgeMap = new Map<string, { p1: [number, number]; p2: [number, number]; count: number }>()
  let minLng = Infinity, minLat = Infinity, maxLng = -Infinity, maxLat = -Infinity

  function coordKey(c: [number, number]) {
    return `${c[0].toFixed(5)},${c[1].toFixed(5)}`
  }

  for (const o of outagesInCity) {
    for (const f of o.geoJson.features) {
      const geom: any = f.geometry
      const rings = geom.type === "Polygon" ? geom.coordinates : geom.coordinates.flat(1)
      for (const ring of rings) {
        for (let i = 0; i < ring.length - 1; i++) {
          const p1 = ring[i] as [number, number]
          const p2 = ring[i + 1] as [number, number]

          minLng = Math.min(minLng, p1[0])
          maxLng = Math.max(maxLng, p1[0])
          minLat = Math.min(minLat, p1[1])
          maxLat = Math.max(maxLat, p1[1])

          const k1 = coordKey(p1)
          const k2 = coordKey(p2)
          if (k1 === k2) continue
          const key = k1 < k2 ? `${k1}|${k2}` : `${k2}|${k1}`
          const existing = edgeMap.get(key)
          if (existing) {
            existing.count++
          } else {
            edgeMap.set(key, { p1, p2, count: 1 })
          }
        }
      }
    }
  }

  const outerSegments: [number, number][][] = []
  for (const val of edgeMap.values()) {
    if (val.count === 1) {
      outerSegments.push([val.p1, val.p2])
    }
  }

  return {
    bounds: [[minLng, minLat], [maxLng, maxLat]] as [[number, number], [number, number]],
    perimeterGeoJson: {
      type: "FeatureCollection" as const,
      features: [
        {
          type: "Feature" as const,
          properties: { city: outagesInCity[0]?.city },
          geometry: {
            type: "MultiLineString" as const,
            coordinates: outerSegments,
          },
        },
      ],
    },
    fillGeoJson: {
      type: "FeatureCollection" as const,
      features: outagesInCity.flatMap((o) => o.geoJson.features),
    },
  }
}

