import { useState, useMemo } from "react"
import type * as GeoJSON from "geojson"
import { Map, MapGeoJSON, MapMarker, MarkerContent, MapPopup } from "@/components/ui/map"
import { MapHeader } from "@/components/MapHeader"
import { ViewToggle } from "@/components/ViewToggle"
import { Button } from "@/components/ui/button"
import { LightbulbOff, Plus, Minus } from "lucide-react"

interface OutageLocation {
  id: string
  name: string
  city: string
  status: string
  timeRemaining: string
  coordinates: [number, number]
  markerOffset: [number, number]
  radius: number
}

const mockOutages: OutageLocation[] = [
  {
    id: "marangog",
    name: "Barangay Marangog",
    city: "Bogo City, Cebu",
    status: "Brownout ari dawg",
    timeRemaining: "2h 15m left",
    coordinates: [124.0259, 11.0100], // [lng, lat]
    markerOffset: [124.0286, 11.0075],
    radius: 0.85,
  },
  {
    id: "malingin",
    name: "Barangay Malingin",
    city: "Bogo City, Cebu",
    status: "Brownout ari dawg",
    timeRemaining: "1h 45m left",
    coordinates: [123.982248, 11.018050], // [lng, lat]
    markerOffset: [123.9849, 11.0155],
    radius: 0.85,
  },
  {
    id: "cayang",
    name: "Barangay Cayang",
    city: "Bogo City, Cebu",
    status: "Line Maintenance",
    timeRemaining: "45m left",
    coordinates: [123.958715, 11.0451851], // [lng, lat]
    markerOffset: [123.9614, 11.0427], // Offset slightly for the marker
    radius: 0.6,
  },
  {
    id: "lamintak-sur",
    name: "Lamintak Sur",
    city: "Medellin, Cebu",
    status: "Transformer Repair",
    timeRemaining: "3h 10m left",
    coordinates: [123.9664, 11.0924],
    markerOffset: [123.9691, 11.0899],
    radius: 1.1,
  },
  {
    id: "curva",
    name: "Barangay Curva",
    city: "Medellin, Cebu",
    status: "Scheduled Outage",
    timeRemaining: "4h 00m left",
    coordinates: [124.0019, 11.1375], // [lng, lat]
    markerOffset: [124.0046, 11.1350],
    radius: 1.2,
  },
]

// Helper to generate a smooth GeoJSON circle polygon
function createGeoJSONCircle(center: [number, number], radiusInKm = 0.9, points = 64): GeoJSON.FeatureCollection {
  const [lng, lat] = center
  const coords: [number, number][] = []
  const distanceX = radiusInKm / (111.32 * Math.cos((lat * Math.PI) / 180))
  const distanceY = radiusInKm / 110.574

  for (let i = 0; i < points; i++) {
    const theta = (i / points) * (2 * Math.PI)
    const x = lng + distanceX * Math.cos(theta)
    const y = lat + distanceY * Math.sin(theta)
    coords.push([x, y])
  }
  coords.push(coords[0]) // Close polygon ring

  return {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Polygon",
          coordinates: [coords],
        },
      },
    ],
  }
}

export default function MapView() {
  const [activePopup, setActivePopup] = useState<string | null>("marangog")
  const [zoom, setZoom] = useState(11.8) // slightly zoomed out to see all 5 locations

  // Pre-compute GeoJSON data for all outages
  const outageAreas = useMemo(() => {
    return mockOutages.map((outage) => ({
      ...outage,
      geoJson: createGeoJSONCircle(outage.coordinates, outage.radius),
    }))
  }, [])

  return (
    <div className="relative inset-0 w-full h-full">
      <Map 
        center={[123.9923, 11.0737]} // Centered around the new locations including Curva
        zoom={11.8} // slightly zoomed out since locations are further apart now
        onViewportChange={(v) => setZoom(v.zoom)}
        theme="light"
      >
        <MapHeader />
        <ViewToggle />

        {/* Zoom Controls */}
        <div 
          className="absolute right-5 top-[132px] z-20 flex flex-col bg-white/90 backdrop-blur shadow-lg rounded-xl overflow-hidden border border-slate-200/60"
          onPointerDown={(e) => e.stopPropagation()}
          onTouchStart={(e) => e.stopPropagation()}
        >
          <button 
            className="p-2 hover:bg-slate-100 text-slate-700 transition-colors active:bg-slate-200 cursor-pointer"
            onClick={(e) => { e.stopPropagation(); setZoom(prev => Math.min(prev + 1, 20)) }}
            title="Zoom In"
          >
            <Plus className="size-5 pointer-events-none" />
          </button>
          <div className="h-px bg-slate-200/80 w-full" />
          <button 
            className="p-2 hover:bg-slate-100 text-slate-700 transition-colors active:bg-slate-200 cursor-pointer"
            onClick={(e) => { e.stopPropagation(); setZoom(prev => Math.max(prev - 1, 1)) }}
            title="Zoom Out"
          >
            <Minus className="size-5 pointer-events-none" />
          </button>
        </div>

        {outageAreas.map((outage) => (
          <div key={`outage-group-${outage.id}`}>
            {/* Translucent circular GeoJSON polygon layer */}
            <MapGeoJSON
              data={outage.geoJson}
              fillPaint={{ "fill-color": "#0f172a", "fill-opacity": 0.35 }}
              linePaint={false}
            />

            {/* Clickable Point / Marker shifted away from text label */}
            <MapMarker
              longitude={outage.markerOffset[0]}
              latitude={outage.markerOffset[1]}
              onClick={() => setActivePopup((prev) => (prev === outage.id ? null : outage.id))}
            >
              <MarkerContent>
                <div className="flex flex-col items-center gap-1 hover:scale-105 transition-all active:scale-95 cursor-pointer">
                  <div className="flex items-center justify-center size-9 bg-slate-900 rounded-full  shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
                    <LightbulbOff className="size-4 text-white fill-white animate-pulse" />
                  </div>
                  <div 
                    className="mt-1 px-3 py-1 text-[11px] font-bold text-white whitespace-nowrap bg-slate-900/85 backdrop-blur-md rounded-full border border-slate-700/80 shadow-[0_4px_12px_rgba(0,0,0,0.2)] transition-all duration-300 origin-top"
                    style={{
                      transform: `scale(${Math.max(0, Math.min(1, (zoom - 10.5) / 2))})`,
                      opacity: Math.max(0, Math.min(1, (zoom - 10.5) / 1.5)),
                      pointerEvents: zoom > 10.5 ? "auto" : "none"
                    }}
                  >
                    {outage.timeRemaining}
                  </div>
                </div>
              </MarkerContent>
            </MapMarker>

            {/* Marker Popup */}
            {activePopup === outage.id && (
              <MapPopup
                longitude={outage.markerOffset[0]}
                latitude={outage.markerOffset[1]}
                offset={16}
                onClose={() => setActivePopup(null)}
                closeButton
                focusAfterOpen={false}
                closeOnClick={false}
                className="p-0 border-0 bg-transparent shadow-none"
              >
                <div className="w-64 p-4 bg-white/95 text-slate-900 border border-slate-200/90 backdrop-blur-xl shadow-2xl rounded-2xl space-y-3">
                  {/* Header Info */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-extrabold text-sm text-slate-900 tracking-tight">{outage.name}</h3>
                      <p className="text-xs font-medium text-slate-500 flex items-center gap-1 mt-0.5">
                        <span>{outage.city}</span>
                      </p>
                    </div>
                    <div className="size-7 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-white shrink-0 shadow-sm">
                      <LightbulbOff className="size-4 text-white fill-white" />
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-rose-50 border border-rose-100/80">
                    <span className="relative flex size-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75" />
                      <span className="relative inline-flex size-2 rounded-full bg-rose-500" />
                    </span>
                    <span className="text-[11px] font-bold text-rose-700">{outage.status}</span>
                  </div>

                  {/* Action Button */}
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full text-xs font-bold h-8 rounded-xl border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-all active:scale-95"
                    onClick={() => setActivePopup(null)}
                  >
                    Close Info
                  </Button>
                </div>
              </MapPopup>
            )}
          </div>
        ))}
      </Map>
    </div>
  )
}
