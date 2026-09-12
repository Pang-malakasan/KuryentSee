import { useState, useEffect } from "react"
import { Map, MapGeoJSON, MapMarker, MarkerContent, MapPopup } from "@/components/ui/map"
import { MapHeader } from "@/components/MapHeader"
import { ViewToggle } from "@/components/ViewToggle"
import { ZoomControls } from "@/components/ZoomControls"
import { Button } from "@/components/ui/button"
import { LightbulbOff } from "lucide-react"
import { mockOutages, OutageLocation } from "@/data/outages"

export default function MapView() {
  const [outages, setOutages] = useState<OutageLocation[]>(mockOutages)
  const [activePopup, setActivePopup] = useState<string | null>("marangog")
  const [zoom, setZoom] = useState(11.8) // slightly zoomed out to see all 5 locations

  useEffect(() => {
    fetch("/api/outages")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.data) && data.data.length > 0) {
          setOutages(data.data)
        }
      })
      .catch(() => {
        // Fallback gracefully to mockOutages when backend is not running
      })
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
        <ZoomControls />

        {outages.map((outage) => (
          <div key={`outage-group-${outage.id}`}>
            {/* Blackout / Dark Mode Area Overlay */}
            <MapGeoJSON
              data={outage.geoJson}
              fillPaint={{
                "fill-color": "#020617", // Deep midnight darkness simulating power blackout
                "fill-opacity": 0.75,     // Dims the map underneath into dark mode
              }}
              linePaint={{
                "line-color": outage.status.toLowerCase().includes("brownout") ? "#f97316" : "#ef4444",
                "line-width": 2,
                "line-opacity": 0.9,
              }}
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
