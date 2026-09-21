import { useState, useEffect, useMemo } from "react"
import { Map, MapGeoJSON, MapMarker, MarkerContent, MapPopup } from "@/components/ui/map"
import { MapHeader } from "@/components/MapHeader"
import { ViewToggle } from "@/components/ViewToggle"
import { ZoomControls } from "@/components/ZoomControls"
import { Button } from "@/components/ui/button"
import { LightbulbOff, AlertTriangle, X, Activity, UtilityPole, Building2 } from "lucide-react"
import { mockOutages, OutageLocation } from "@/data/outages"

interface Advisory {
  _id: string;
  type: string;
  status: string;
}

export default function MapView() {
  const [outages, setOutages] = useState<OutageLocation[]>(mockOutages)
  const [activePopup, setActivePopup] = useState<string | null>("marangog")
  const [zoom, setZoom] = useState(7.5) // slightly zoomed out to see all 5 locations
  const [advisories, setAdvisories] = useState<Advisory[]>([])
  const [showLegend, setShowLegend] = useState(true)

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

    fetch("/api/advisories/grid-alerts")
      .then(res => res.json())
      .then(data => {
        if (data.success && Array.isArray(data.data)) {
          setAdvisories(data.data);
        }
      })
      .catch(() => {})
  }, [])

  const hasRedAlert = advisories.some(a => a.type === 'RED_ALERT');
  const hasYellowAlert = advisories.some(a => a.type === 'YELLOW_ALERT');

  const ZOOM_THRESHOLD = 11;

  const cityGroups = useMemo(() => {
    const groups = outages.reduce((acc, outage) => {
      if (!acc[outage.city]) {
        acc[outage.city] = {
          city: outage.city,
          markerOffset: [...outage.markerOffset],
          count: 1,
          barangays: [outage.name]
        };
      } else {
        acc[outage.city].markerOffset[0] += outage.markerOffset[0];
        acc[outage.city].markerOffset[1] += outage.markerOffset[1];
        acc[outage.city].count += 1;
        if (!acc[outage.city].barangays.includes(outage.name)) {
          acc[outage.city].barangays.push(outage.name);
        }
      }
      return acc;
    }, {} as Record<string, { city: string, markerOffset: [number, number], count: number, barangays: string[] }>);

    Object.values(groups).forEach(group => {
      group.markerOffset[0] /= group.count;
      group.markerOffset[1] /= group.count;
    });

    return Object.values(groups);
  }, [outages]);

  const combinedGeoJson = useMemo(() => {
    return {
      type: "FeatureCollection",
      features: outages.flatMap((outage) => {
        return outage.geoJson.features.map(f => ({
          ...f,
          properties: {
            ...f.properties,
            fillColor: outage.status.toLowerCase().includes("brownout") ? "#334155" : "#ef4444",
            fillOpacity: outage.status.toLowerCase().includes("brownout") ? 0.4 : 0.2,
          }
        }))
      })
    };
  }, [outages]);

  return (
    <div className="relative inset-0 w-full h-full">
      <Map 
        center={[123.6000, 11.3000]} // Centered on the Visayan Sea (center of Visayas region)
        zoom={7.5} // Zoomed out significantly to see all of Visayas
        onViewportChange={(v) => setZoom(v.zoom)}
        theme="light"
      >
        <MapHeader />
        <ViewToggle />

        {/* Zoom Controls */}
        <ZoomControls />

        {/* Grid Status Legend Toggle (When closed) */}
        {!showLegend && (
          <div className="absolute top-24 left-6 z-10 pointer-events-auto animate-in fade-in slide-in-from-top-4 duration-500">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setShowLegend(true)}
              className="bg-white/95 backdrop-blur-xl border border-slate-200/80 shadow-md rounded-md h-10 px-4 flex items-center gap-2 hover:bg-white transition-all active:scale-95 group"
            >
              <div className="relative flex size-3 items-center justify-center">
                {hasRedAlert ? (
                   <>
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex size-3 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]"></span>
                   </>
                ) : hasYellowAlert ? (
                   <>
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-75"></span>
                    <span className="relative inline-flex size-3 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.5)]"></span>
                   </>
                ) : (
                    <span className="relative inline-flex size-3 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                )}
              </div>
              <span className="text-[14px] font-bold text-slate-700 tracking-wide group-hover:text-slate-900 transition-colors">Grid Status</span>
            </Button>
          </div>
        )}

        {/* Enhanced Grid Status Legend */}
        {showLegend && (
          <div className="absolute top-24 left-6 z-10 pointer-events-auto">
            <div className="bg-white/95 backdrop-blur-md border border-slate-200 shadow-md rounded-md p-5 w-72 animate-in fade-in slide-in-from-top-4 duration-300 relative">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className={`p-1.5 rounded-md flex items-center justify-center border border-slate-100 ${hasRedAlert ? 'bg-red-50 text-red-500' : hasYellowAlert ? 'bg-yellow-50 text-yellow-600' : 'bg-emerald-50 text-emerald-500'}`}>
                    <Activity className="size-4" />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-800 tracking-tight">Visayas Grid Status</h3>
                </div>
                <button 
                  onClick={() => setShowLegend(false)}
                  className="p-1.5 rounded-md hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-all cursor-pointer"
                >
                  <X className="size-4" />
                </button>
              </div>
              
              <div className="space-y-1 relative z-10">
                <div className={`flex items-center gap-3 p-2.5 rounded-md transition-all border ${hasRedAlert ? 'bg-red-50/50 border-red-100' : 'border-transparent hover:bg-slate-50'}`}>
                  <div className="relative flex size-3 items-center justify-center">
                    {hasRedAlert ? (
                       <>
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex size-3 rounded-full bg-red-500"></span>
                       </>
                    ) : (
                        <span className="relative inline-flex size-3 rounded-full bg-slate-200"></span>
                    )}
                  </div>
                  <span className={`text-sm font-medium ${hasRedAlert ? 'text-red-700' : 'text-slate-600'}`}>
                    Red Alert
                  </span>
                </div>
                
                <div className={`flex items-center gap-3 p-2.5 rounded-md transition-all border ${hasYellowAlert ? 'bg-yellow-50/50 border-yellow-100' : 'border-transparent hover:bg-slate-50'}`}>
                  <div className="relative flex size-3 items-center justify-center">
                    {hasYellowAlert ? (
                       <>
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-75"></span>
                        <span className="relative inline-flex size-3 rounded-full bg-yellow-500"></span>
                       </>
                    ) : (
                        <span className="relative inline-flex size-3 rounded-full bg-slate-200"></span>
                    )}
                  </div>
                  <span className={`text-sm font-medium ${hasYellowAlert ? 'text-yellow-700' : 'text-slate-600'}`}>
                    Yellow Alert
                  </span>
                </div>
                
                <div className={`flex items-center gap-3 p-2.5 rounded-md transition-all border ${!hasRedAlert && !hasYellowAlert ? 'bg-emerald-50/50 border-emerald-100' : 'border-transparent hover:bg-slate-50'}`}>
                  <div className="relative flex size-3 items-center justify-center">
                    {!hasRedAlert && !hasYellowAlert ? (
                        <span className="relative inline-flex size-3 rounded-full bg-emerald-500"></span>
                    ) : (
                        <span className="relative inline-flex size-3 rounded-full bg-slate-200"></span>
                    )}
                  </div>
                  <span className={`text-sm font-medium ${!hasRedAlert && !hasYellowAlert ? 'text-emerald-700' : 'text-slate-600'}`}>
                    Normal Condition
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Grid Alert Pulse Marker at Visayan Sea */}
        {(hasRedAlert || hasYellowAlert) && (
          <MapMarker longitude={123.6000} latitude={11.3000} pitchAlignment="map" rotationAlignment="map">
            <MarkerContent>
              <div className="relative flex items-center justify-center group cursor-pointer" onClick={() => setActivePopup('grid-alert')}>
                {/* Massive, slow pulse covering the Visayas */}
                <span 
                  className={`absolute inline-flex rounded-full opacity-30 ${hasRedAlert ? 'bg-red-500' : 'bg-yellow-500'}`} 
                  style={{ width: '450px', height: '450px', animation: 'ping 4s cubic-bezier(0, 0, 0.2, 1) infinite' }}
                />
                <span className={`relative inline-flex size-10 items-center justify-center rounded-full border-2 border-white shadow-2xl ${hasRedAlert ? 'bg-red-600' : 'bg-yellow-500'}`}>
                  <AlertTriangle className="size-5 text-white" />
                </span>
              </div>
            </MarkerContent>
          </MapMarker>
        )}

        {/* Grid Alert Popup */}
        {activePopup === 'grid-alert' && (
          <MapPopup
            longitude={123.6000}
            latitude={11.3000}
            offset={24}
            onClose={() => setActivePopup(null)}
            closeButton
            focusAfterOpen={false}
            closeOnClick={false}
          >
            <div className="space-y-2">
              <h3 className="text-foreground font-semibold">Grid Alert Active</h3>
              <p className="text-muted-foreground text-sm">
                The Visayas Grid is currently under a {hasRedAlert ? 'Red' : 'Yellow'} Alert. Manual load dropping or temporary power interruptions may occur in your area.
              </p>
              <Button
                size="sm"
                variant="outline"
                className="w-full"
                onClick={() => setActivePopup(null)}
              >
                Close
              </Button>
            </div>
          </MapPopup>
        )}

        {/* City-level clustered markers when zoomed out */}
        {zoom < ZOOM_THRESHOLD && cityGroups.map((group) => (
          <div key={`city-cluster-group-${group.city}`}>
            <MapMarker
              longitude={group.markerOffset[0]}
              latitude={group.markerOffset[1]}
              onClick={() => setActivePopup((prev) => (prev === `city-${group.city}` ? null : `city-${group.city}`))}
            >
              <MarkerContent>
                <div className="flex flex-col items-center gap-1 hover:scale-105 transition-all active:scale-95 cursor-pointer">
                  <div className="flex items-center justify-center size-10 bg-white border-2 border-slate-700 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
                    <Building2 className="size-5 text-slate-700" />
                  </div>
                </div>
              </MarkerContent>
            </MapMarker>

            {/* City Popup */}
            {activePopup === `city-${group.city}` && (
              <MapPopup
                longitude={group.markerOffset[0]}
                latitude={group.markerOffset[1]}
                offset={20}
                onClose={() => setActivePopup(null)}
                closeButton
                focusAfterOpen={false}
                closeOnClick={false}
              >
                <div className="space-y-3 min-w-[200px]">
                  <h3 className="text-foreground font-bold text-base">{group.city}</h3>
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Covered Barangays ({group.count})</p>
                    <ul className="text-sm text-slate-700 space-y-1 max-h-32 overflow-y-auto pr-2">
                      {group.barangays.map(b => (
                        <li key={b} className="flex items-center gap-1.5">
                          <span className="size-1.5 rounded-full bg-slate-400 shrink-0"></span>
                          <span className="truncate">{b.replace('Barangay ', '')}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full text-xs h-8 mt-2"
                    onClick={() => setActivePopup(null)}
                  >
                    Close
                  </Button>
                </div>
              </MapPopup>
            )}
          </div>
        ))}

        {/* Render all polygons in a single layer for massive performance boost */}
        <MapGeoJSON
          data={combinedGeoJson as any}
          fillPaint={{
            "fill-color": ["get", "fillColor"],
            "fill-opacity": ["get", "fillOpacity"]
          }}
          linePaint={{
            "line-width": 0,
            "line-opacity": 0,
          }}
        />

        {zoom >= ZOOM_THRESHOLD && outages.map((outage) => (
          <div key={`outage-group-${outage.id}`}>
            {/* Individual Barangay Outage Markers (visible when zoomed in) */}
            <MapMarker
              longitude={outage.markerOffset[0]}
              latitude={outage.markerOffset[1]}
              onClick={() => setActivePopup((prev) => (prev === outage.id ? null : outage.id))}
            >
              <MarkerContent>
                <div className="flex flex-col items-center gap-1 hover:scale-105 transition-all active:scale-95 cursor-pointer">
                  {outage.status.toLowerCase().includes("brownout") ? (
                    <div className="flex items-center justify-center size-9 bg-slate-900 border-[2.5px] border-slate-900 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
                      <LightbulbOff className="size-4 text-slate-400 animate-pulse" />
                    </div>
                  ) : (
                    <div className="flex items-center justify-center size-9 bg-white border-[2.5px] border-slate-700 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
                      <UtilityPole className="size-4 text-slate-700" />
                    </div>
                  )}
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
              >
                <div className="space-y-2">
                  <h3 className="text-foreground font-semibold">{outage.name}</h3>
                  <p className="text-muted-foreground text-sm">
                    {outage.city} - {outage.status}
                  </p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full"
                    onClick={() => setActivePopup(null)}
                  >
                    Close
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
