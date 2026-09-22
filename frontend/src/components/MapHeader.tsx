import { useState, useRef, useEffect, useMemo } from "react"
import { useMap } from "@/components/ui/map"
import { LOGO_SVG_URI } from "@/assets/logo"
import type { OutageLocation } from "@/data/outages"
import { 
  Search, 
  MapPin, 
  Building2, 
  X, 
  Activity, 
  AlertTriangle, 
  ShieldCheck,
  ZapOff,
  Wrench,
  CheckCircle2,
  Info,
  Home
} from "lucide-react"

export interface UserLocationInfo {
  coords: [number, number]
  accuracy: number
  matchedBarangay: OutageLocation | null
  closestBarangay: OutageLocation | null
  closestDistanceKm: number
  isNearBoundary?: boolean
  isManual?: boolean
  isHome?: boolean
}

interface MapHeaderProps {
  outages?: OutageLocation[]
  onSelectOutage?: (outageId: string) => void
  onSelectCity?: (city: string) => void
  onUserLocated?: (info: UserLocationInfo) => void
  hasRedAlert?: boolean
  hasYellowAlert?: boolean
  onToggleLegend?: () => void
  showLegend?: boolean
  homeLocation?: UserLocationInfo | null
  onClearHome?: () => void
  onClearSearch?: () => void
  onSearchOpenChange?: (isOpen: boolean) => void
}

interface SearchItem {
  id: string
  title: string
  subtitle: string
  type: "barangay" | "city"
  coordinates: [number, number]
  bounds?: [[number, number], [number, number]]
  status?: string
  outageId?: string
  outageCount?: number
}

export function MapHeader({
  outages = [],
  onSelectOutage,
  onSelectCity,
  onUserLocated,
  hasRedAlert = false,
  hasYellowAlert = false,
  onToggleLegend,
  homeLocation,
  onClearHome: _onClearHome,
  onClearSearch,
  onSearchOpenChange,
}: MapHeaderProps) {
  const { map, isLoaded } = useMap()
  const [query, setQuery] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  // Notify parent whenever search dropdown opens or closes
  useEffect(() => {
    onSearchOpenChange?.(isOpen)
  }, [isOpen, onSearchOpenChange])
  const [locationStatus, setLocationStatus] = useState<{
    type: "success" | "info" | "error"
    message: string
  } | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number>(-1)

  const inputRef = useRef<HTMLInputElement>(null)
  const searchContainerRef = useRef<HTMLDivElement>(null)

  // Deduplicate unique cities with centroids and outage statistics
  const cities = useMemo(() => {
    const cityMap = new Map<
      string,
      {
        city: string
        sumX: number
        sumY: number
        minLng: number
        maxLng: number
        minLat: number
        maxLat: number
        count: number
        outageCount: number
      }
    >()

    outages.forEach((o) => {
      const isOutage =
        o.status.toLowerCase().includes("brownout") ||
        o.status.toLowerCase().includes("blackout") ||
        o.status.toLowerCase().includes("maintenance")

      const entry = cityMap.get(o.city)
      if (!entry) {
        cityMap.set(o.city, {
          city: o.city,
          sumX: o.markerOffset[0],
          sumY: o.markerOffset[1],
          minLng: o.markerOffset[0],
          maxLng: o.markerOffset[0],
          minLat: o.markerOffset[1],
          maxLat: o.markerOffset[1],
          count: 1,
          outageCount: isOutage ? 1 : 0,
        })
      } else {
        entry.sumX += o.markerOffset[0]
        entry.sumY += o.markerOffset[1]
        entry.minLng = Math.min(entry.minLng, o.markerOffset[0])
        entry.maxLng = Math.max(entry.maxLng, o.markerOffset[0])
        entry.minLat = Math.min(entry.minLat, o.markerOffset[1])
        entry.maxLat = Math.max(entry.maxLat, o.markerOffset[1])
        entry.count += 1
        if (isOutage) entry.outageCount += 1
      }
    })

    return Array.from(cityMap.values()).map((c) => ({
      city: c.city,
      center: [c.sumX / c.count, c.sumY / c.count] as [number, number],
      bounds: [
        [c.minLng - 0.03, c.minLat - 0.03],
        [c.maxLng + 0.03, c.maxLat + 0.03],
      ] as [[number, number], [number, number]],
      count: c.count,
      outageCount: c.outageCount,
    }))
  }, [outages])

  // Filter search results for cities and barangays
  const results: SearchItem[] = useMemo(() => {
    const trimmed = query.trim().toLowerCase()
    if (!trimmed) return []

    const items: SearchItem[] = []

    // 1. Match Municipalities / Cities
    cities.forEach((c) => {
      if (c.city.toLowerCase().includes(trimmed)) {
        items.push({
          id: `city-${c.city}`,
          title: c.city,
          subtitle: `${c.count} barangays covered • ${c.outageCount > 0 ? `${c.outageCount} with interruptions` : "Normal power"}`,
          type: "city",
          coordinates: c.center,
          bounds: c.bounds,
          outageCount: c.outageCount,
        })
      }
    })

    // 2. Match Barangays
    outages.forEach((o) => {
      const cleanName = o.name.toLowerCase()
      const cleanCity = o.city.toLowerCase()
      if (cleanName.includes(trimmed) || (trimmed.length >= 3 && cleanCity.includes(trimmed))) {
        items.push({
          id: `outage-${o.id}`,
          title: o.name,
          subtitle: `${o.city} ${o.timeRemaining ? `• ${o.timeRemaining}` : ""}`,
          type: "barangay",
          coordinates: o.markerOffset,
          status: o.status,
          outageId: o.id,
        })
      }
    })

    // Limit to top 15 results for performance
    return items.slice(0, 15)
  }, [query, cities, outages])

  // Click outside to close results dropdown
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Keyboard shortcut Ctrl+K or / to focus search
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        inputRef.current?.focus()
        setIsOpen(true)
      } else if (e.key === "/" && document.activeElement !== inputRef.current) {
        e.preventDefault()
        inputRef.current?.focus()
        setIsOpen(true)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const handleSelect = (item: SearchItem) => {
    setQuery(item.title.replace(/^Barangay\s+/i, ""))
    setIsOpen(false)
    setSelectedIndex(-1)

    if (!map || !isLoaded) return

    // Cleanly cancel any existing flight so switching between searches is seamless and non-jarring
    map.stop()

    if (item.type === "city") {
      if (item.bounds) {
        map.fitBounds(item.bounds, {
          padding: 70,
          duration: 1800,
          maxZoom: 13.5,
          essential: true,
        })
      } else {
        map.flyTo({
          center: item.coordinates,
          zoom: 11.8,
          duration: 1800,
          curve: 1.3,
          essential: true,
        })
      }
      if (onSelectCity) {
        onSelectCity(item.title)
      }
    } else {
      // It's a barangay: calculate exact polygon bounds if available for optimal framing
      const outage = outages.find((o) => o.id === item.outageId)
      if (outage?.geoJson?.features) {
        let minLng = Infinity, minLat = Infinity, maxLng = -Infinity, maxLat = -Infinity
        for (const f of outage.geoJson.features) {
          const geom: any = f.geometry
          const rings = geom.type === "Polygon" ? geom.coordinates : geom.coordinates.flat(1)
          for (const ring of rings) {
            for (const pt of ring) {
              minLng = Math.min(minLng, pt[0])
              maxLng = Math.max(maxLng, pt[0])
              minLat = Math.min(minLat, pt[1])
              maxLat = Math.max(maxLat, pt[1])
            }
          }
        }

        if (minLng !== Infinity && minLat !== Infinity) {
          map.fitBounds([[minLng, minLat], [maxLng, maxLat]], {
            padding: 90,
            duration: 1900,
            maxZoom: 15.5,
            essential: true,
          })
        } else {
          map.flyTo({
            center: item.coordinates,
            zoom: 14.8,
            duration: 1900,
            curve: 1.3,
            essential: true,
          })
        }
      } else {
        map.flyTo({
          center: item.coordinates,
          zoom: 14.8,
          duration: 1900,
          curve: 1.3,
          essential: true,
        })
      }

      if (item.outageId && onSelectOutage) {
        onSelectOutage(item.outageId)
      }
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || results.length === 0) return

    if (e.key === "ArrowDown") {
      e.preventDefault()
      setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0))
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1))
    } else if (e.key === "Enter" && results.length > 0) {
      e.preventDefault()
      const target = selectedIndex >= 0 && selectedIndex < results.length ? results[selectedIndex] : results[0]
      handleSelect(target)
    } else if (e.key === "Escape") {
      setIsOpen(false)
    }
  }

  const handleSetAsMyLocation = (e: React.MouseEvent, item: SearchItem) => {
    e.stopPropagation()
    setQuery(item.title.replace(/^Barangay\s+/i, ""))
    setIsOpen(false)
    setSelectedIndex(-1)

    const outage = outages.find((o) => o.id === item.outageId) || null
    const coords = item.coordinates

    const info: UserLocationInfo = {
      coords,
      accuracy: 0,
      matchedBarangay: outage,
      closestBarangay: outage,
      closestDistanceKm: 0,
      isManual: true,
      isHome: true,
    }

    try {
      localStorage.setItem("kuryentsee_home_barangay", JSON.stringify({
        coords,
        barangayId: outage?.id,
        barangayName: item.title,
        cityName: outage?.city,
      }))
    } catch {
      // Ignore
    }

    if (onUserLocated) {
      onUserLocated(info)
    }

    if (map) {
      map.stop()
      map.flyTo({
        center: coords,
        zoom: 15.2,
        duration: 1900,
        curve: 1.3,
        essential: true,
      })
    }

    setLocationStatus({
      type: "success",
      message: `🏠 Saved as your Home Barangay: ${item.title}`,
    })
    setTimeout(() => setLocationStatus(null), 5000)
  }

  const handleFlyToHome = () => {
    if (!homeLocation || !map) return
    map.stop()
    map.flyTo({
      center: homeLocation.coords,
      zoom: 15.2,
      duration: 1900,
      curve: 1.3,
      essential: true,
    })
    if (onSelectOutage && homeLocation.matchedBarangay?.id) {
      onSelectOutage(homeLocation.matchedBarangay.id)
    }
  }

  const gridStatusLabel = hasRedAlert
    ? "Red Alert"
    : hasYellowAlert
    ? "Yellow Alert"
    : "Visayas Grid: Normal"

  const gridStatusColor = hasRedAlert
    ? "bg-red-50 text-red-700 border-red-200"
    : hasYellowAlert
    ? "bg-amber-50 text-amber-700 border-amber-200"
    : "bg-emerald-50 text-emerald-700 border-emerald-200"

  const gridDotColor = hasRedAlert
    ? "bg-red-500"
    : hasYellowAlert
    ? "bg-amber-500"
    : "bg-emerald-500"

  return (
    <header className={`absolute top-0 left-0 right-0 w-full flex items-center justify-between gap-2 md:gap-4 bg-white/95 px-3 md:px-6 py-2.5 shadow-sm border-b border-slate-200/80 backdrop-blur-md transition-all ${isOpen ? "z-50" : "z-30"}`}>
      {/* ── Left: Logo ── */}
      <div className="flex items-center shrink-0 z-20">
        <a 
          href="/" 
          onClick={(e) => {
            if (map) {
              e.preventDefault()
              setQuery("")
              setIsOpen(false)
              onClearSearch?.()
              map.stop()
              map.flyTo({
                center: [122.5, 12.5],
                zoom: 5.8,
                pitch: 0,
                bearing: 0,
                duration: 1600,
                essential: true,
              })
            }
          }}
          className="flex items-center gap-2 group outline-none"
          title="Reset to Philippines Map"
        >
          <img
            src={LOGO_SVG_URI}
            alt="KuryentSee Logo"
            className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105 drop-shadow-sm"
          />
        </a>
      </div>

      {/* ── Center: Search Bar & Geolocation ── */}
      <div 
        ref={searchContainerRef} 
        className="relative flex-1 max-w-sm mx-2 md:mx-0 md:absolute md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-md lg:max-w-lg z-50"
      >
        <div className="relative flex items-center">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
            <Search className="size-4" />
          </div>

          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setIsOpen(true)
              setSelectedIndex(-1)
            }}
            onFocus={() => setIsOpen(true)}
            onKeyDown={handleKeyDown}
            placeholder="Search barangay, city, or municipality..."
            className="w-full bg-slate-100/90 hover:bg-slate-100 focus:bg-white text-slate-800 text-xs md:text-sm pl-9 pr-9 py-2 rounded-full border border-slate-200/80 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none shadow-inner placeholder:text-slate-400"
          />

          {/* Right Action Icons in Input */}
          {query && (
            <div className="absolute inset-y-0 right-0 pr-2.5 flex items-center">
              <button
                type="button"
                onClick={() => {
                  setQuery("")
                  setIsOpen(false)
                  onClearSearch?.()
                  if (map) {
                    map.stop()
                    map.flyTo({
                      center: [122.5, 12.5],
                      zoom: 5.8,
                      pitch: 0,
                      bearing: 0,
                      duration: 1600,
                      essential: true,
                    })
                  }
                  inputRef.current?.focus()
                }}
                className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 transition-colors cursor-pointer"
                title="Clear search and reset view"
              >
                <X className="size-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* Location Status Feedback Banner */}
        {locationStatus && (
          <div
            className={`absolute top-full mt-2 left-0 right-0 text-xs rounded-xl px-3 py-2 shadow-lg z-50 flex items-center gap-2 animate-in fade-in slide-in-from-top-2 duration-200 border ${
              locationStatus.type === "success"
                ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                : locationStatus.type === "info"
                ? "bg-blue-50 border-blue-200 text-blue-800"
                : "bg-red-50 border-red-200 text-red-700"
            }`}
          >
            {locationStatus.type === "success" ? (
              <CheckCircle2 className="size-4 shrink-0 text-emerald-600" />
            ) : locationStatus.type === "info" ? (
              <Info className="size-4 shrink-0 text-blue-600" />
            ) : (
              <AlertTriangle className="size-4 shrink-0 text-red-600" />
            )}
            <span className="truncate">{locationStatus.message}</span>
          </div>
        )}

        {/* Search Results Dropdown */}
        {isOpen && (
          <div className="absolute top-full mt-2 left-0 right-0 bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden z-50 max-h-[380px] overflow-y-auto divide-y divide-slate-100 animate-in fade-in slide-in-from-top-2 duration-150">
            {query.trim().length > 0 && results.length === 0 ? (
              <div className="p-4 text-center text-xs text-slate-400">
                No matching barangay or municipality found for "{query}".
              </div>
            ) : (
              results.map((item, idx) => {
                const isSelected = idx === selectedIndex
                const isCity = item.type === "city"
                const isBrownout =
                  item.status?.toLowerCase().includes("brownout") ||
                  item.status?.toLowerCase().includes("emergency") ||
                  item.status?.toLowerCase().includes("blackout")
                const isMaintenance =
                  item.status?.toLowerCase().includes("maintenance") ||
                  item.status?.toLowerCase().includes("repair") ||
                  item.status?.toLowerCase().includes("scheduled")

                return (
                  <div
                    key={item.id}
                    onClick={() => handleSelect(item)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    role="button"
                    tabIndex={0}
                    className={`w-full px-3.5 py-2.5 flex items-center justify-between text-left transition-colors cursor-pointer group ${
                      isSelected ? "bg-blue-50/80" : "hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0 pr-2">
                      <div
                        className={`size-8 rounded-full flex items-center justify-center shrink-0 ${
                          isCity
                            ? "bg-slate-100 text-slate-600"
                            : isBrownout
                            ? "bg-red-50 text-red-600"
                            : isMaintenance
                            ? "bg-amber-50 text-amber-600"
                            : "bg-blue-50 text-blue-600"
                        }`}
                      >
                        {isCity ? (
                          <Building2 className="size-4" />
                        ) : isBrownout ? (
                          <ZapOff className="size-4" />
                        ) : isMaintenance ? (
                          <Wrench className="size-4" />
                        ) : (
                          <MapPin className="size-4" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs md:text-sm font-semibold text-slate-800 truncate">
                          {item.title}
                        </p>
                        <p className="text-[11px] text-slate-400 truncate">{item.subtitle}</p>
                      </div>
                    </div>

                    {/* Actions and Status Badge */}
                    <div className="shrink-0 flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={(e) => handleSetAsMyLocation(e, item)}
                        title="Save as your Home Barangay"
                        className="opacity-0 group-hover:opacity-100 focus:opacity-100 px-2 py-0.5 rounded-full text-[10.5px] font-semibold bg-blue-50 hover:bg-blue-100 text-blue-600 border border-blue-200 flex items-center gap-1 transition-all active:scale-95 shadow-xs"
                      >
                        <Home className="size-2.5 text-blue-600 fill-blue-200" />
                        <span>Set as Home</span>
                      </button>

                      {isCity ? (
                        <span
                          className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                            (item.outageCount ?? 0) > 0
                              ? "bg-amber-100/70 text-amber-800"
                              : "bg-emerald-100/70 text-emerald-800"
                          }`}
                        >
                          {(item.outageCount ?? 0) > 0
                            ? `${item.outageCount} Outages`
                            : "Normal"}
                        </span>
                      ) : (
                        <span
                          className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                            isBrownout
                              ? "bg-red-100 text-red-700"
                              : isMaintenance
                              ? "bg-amber-100 text-amber-700"
                              : "bg-emerald-100 text-emerald-700"
                          }`}
                        >
                          {item.status || "Normal"}
                        </span>
                      )}
                    </div>
                  </div>
                )
              })
            )}
          </div>
        )}
      </div>

      {/* ── Right: Home Barangay Shortcut & Live Grid Condition Chip ── */}
      <div className="flex items-center gap-2 shrink-0">
        {homeLocation && (
          <button
            type="button"
            onClick={handleFlyToHome}
            title={`Your Home: ${homeLocation.matchedBarangay?.name || "Home Barangay"}. Click to view power status.`}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50/90 hover:bg-blue-100 text-blue-700 border border-blue-200/90 text-xs font-semibold transition-all active:scale-95 shadow-2xs cursor-pointer"
          >
            <Home className="size-3.5 text-blue-600 fill-blue-200" />
            <span className="hidden md:inline truncate max-w-[120px]">
              {homeLocation.matchedBarangay?.name.replace(/^Barangay\s+/i, "") || "Home"}
            </span>
          </button>
        )}


        <button
          type="button"
          onClick={onToggleLegend}
          title="Click to toggle Grid Status details"
          className={`hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold shadow-xs transition-all hover:shadow-sm cursor-pointer ${gridStatusColor}`}
        >
          <div className="relative flex size-2.5 items-center justify-center">
            {hasRedAlert || hasYellowAlert ? (
              <>
                <span
                  className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${gridDotColor}`}
                />
                <span className={`relative inline-flex size-2 rounded-full ${gridDotColor}`} />
              </>
            ) : (
              <span className={`relative inline-flex size-2 rounded-full ${gridDotColor}`} />
            )}
          </div>
          <span>{gridStatusLabel}</span>
        </button>

        {/* Mobile-only compact dot indicator */}
        <button
          type="button"
          onClick={onToggleLegend}
          title={gridStatusLabel}
          className={`sm:hidden flex items-center justify-center size-8 rounded-full border ${gridStatusColor}`}
        >
          {hasRedAlert ? (
            <AlertTriangle className="size-4 text-red-600" />
          ) : hasYellowAlert ? (
            <Activity className="size-4 text-amber-600" />
          ) : (
            <ShieldCheck className="size-4 text-emerald-600" />
          )}
        </button>
      </div>
    </header>
  )
}
