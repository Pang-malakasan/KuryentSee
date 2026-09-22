import { useState, useEffect, useMemo, useRef } from "react";
import {
  Map,
  MapGeoJSON,
  MapMarker,
  MarkerContent,
  MapPopup,
  useMap,
} from "@/components/ui/map";
import { MapHeader, type UserLocationInfo } from "@/components/MapHeader";
import { ViewToggle } from "@/components/ViewToggle";
import { ZoomControls } from "@/components/ZoomControls";
import { Button } from "@/components/ui/button";
import {
  LightbulbOff,
  AlertTriangle,
  X,
  Activity,
  UtilityPole,
  Home,
  Trash2,
  CheckCircle2,
  Wrench,
  ChevronDown,
  Building2,
  Search,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { mockOutages, OutageLocation } from "@/data/outages";
import { matchCoordinatesToBarangays, getMunicipalityBoundary } from "@/lib/geo";

export function getOutageStatusCategory(
  status: string,
): "brownout" | "maintenance" | "normal" {
  const s = status.toLowerCase();
  if (
    s.includes("brownout") ||
    s.includes("emergency") ||
    s.includes("blackout")
  ) {
    return "brownout";
  }
  if (
    s.includes("maintenance") ||
    s.includes("repair") ||
    s.includes("scheduled")
  ) {
    return "maintenance";
  }
  return "normal";
}

interface Advisory {
  _id: string;
  type: string;
  status: string;
  timeWindow?: string;
  reason?: string;
  rawText?: string;
  dateEffective?: string;
}



interface MunicipalityBarangayDropdownProps {
  selectedCity: string;
  outages: OutageLocation[];
  onSelectBarangay: (id: string) => void;
  onCloseCity: () => void;
}

function MunicipalityBarangayDropdown({
  selectedCity,
  outages,
  onSelectBarangay,
  onCloseCity,
}: MunicipalityBarangayDropdownProps) {
  const { map } = useMap();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState<"all" | "affected" | "normal">("all");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const cityOutages = useMemo(() => {
    return outages.filter(
      (o) => o.city.toLowerCase() === selectedCity.toLowerCase(),
    );
  }, [outages, selectedCity]);

  const brownoutCount = useMemo(() => {
    return cityOutages.filter(
      (o) => getOutageStatusCategory(o.status) === "brownout",
    ).length;
  }, [cityOutages]);

  const maintCount = useMemo(() => {
    return cityOutages.filter(
      (o) => getOutageStatusCategory(o.status) === "maintenance",
    ).length;
  }, [cityOutages]);

  const totalAffected = brownoutCount + maintCount;
  const normalCount = cityOutages.length - totalAffected;

  // Filter and sort barangays (affected first, then alphabetical)
  const filteredBarangays = useMemo(() => {
    return cityOutages
      .filter((b) => {
        const cat = getOutageStatusCategory(b.status);
        const matchesFilter =
          filterType === "all"
            ? true
            : filterType === "affected"
            ? cat !== "normal"
            : cat === "normal";

        const matchesSearch = b.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

        return matchesFilter && matchesSearch;
      })
      .sort((a, b) => {
        const catA = getOutageStatusCategory(a.status);
        const catB = getOutageStatusCategory(b.status);
        const priority = { brownout: 0, maintenance: 1, normal: 2 };
        if (priority[catA] !== priority[catB]) {
          return priority[catA] - priority[catB];
        }
        return a.name.localeCompare(b.name);
      });
  }, [cityOutages, filterType, searchQuery]);

  const handleBarangayClick = (outage: OutageLocation) => {
    if (map) {
      map.flyTo({
        center: outage.markerOffset,
        zoom: 14.2,
        duration: 1200,
        curve: 1.2,
        essential: true,
      });
    }
    onSelectBarangay(outage.id);
    setIsOpen(false);
  };

  return (
    <div
      ref={dropdownRef}
      className="absolute top-20 left-1/2 -translate-x-1/2 z-20 pointer-events-auto flex flex-col items-center"
    >
      {/* Interactive Floating Pill */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-md rounded-full border border-blue-200 shadow-lg hover:shadow-xl text-xs font-semibold text-slate-800 transition-all hover:scale-102 active:scale-98 cursor-pointer group"
      >
        <span
          className={cn(
            "size-2 rounded-full",
            brownoutCount > 0
              ? "bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.6)]"
              : maintCount > 0
              ? "bg-amber-500 animate-pulse shadow-[0_0_8px_rgba(245,158,11,0.5)]"
              : "bg-emerald-500",
          )}
        />
        <span className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
          {selectedCity}
        </span>

        {/* Status Badge */}
        {totalAffected > 0 ? (
          <span
            className={cn(
              "px-2 py-0.5 rounded-full text-[10px] font-extrabold",
              brownoutCount > 0
                ? "bg-red-100/90 text-red-700 border border-red-200"
                : "bg-amber-100/90 text-amber-700 border border-amber-200",
            )}
          >
            {totalAffected} Affected · {cityOutages.length} Barangays
          </span>
        ) : (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-200">
            All {cityOutages.length} Normal
          </span>
        )}

        <ChevronDown
          className={cn(
            "size-3.5 text-slate-400 group-hover:text-slate-600 transition-transform duration-200",
            isOpen && "rotate-180 text-blue-600",
          )}
        />

        <div
          role="button"
          tabIndex={0}
          onClick={(e) => {
            e.stopPropagation();
            onCloseCity();
            setIsOpen(false);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.stopPropagation();
              onCloseCity();
              setIsOpen(false);
            }
          }}
          className="ml-1 p-0.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
          title="Clear municipality view"
        >
          <X className="size-3.5" />
        </div>
      </button>

      {/* Expanded Barangays Dropdown Card */}
      {isOpen && (
        <div className="mt-2 w-[340px] sm:w-[380px] bg-white/95 backdrop-blur-xl border border-slate-200 shadow-2xl rounded-2xl p-3.5 flex flex-col gap-2.5 animate-in fade-in slide-in-from-top-2 duration-200">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <div className="flex items-center gap-1.5">
              <Building2 className="size-4 text-blue-600" />
              <h4 className="text-xs font-bold text-slate-900">
                {selectedCity} Barangays
              </h4>
              <span className="text-[11px] font-medium text-slate-400">
                ({cityOutages.length})
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            >
              <X className="size-3.5" />
            </button>
          </div>

          {/* Quick Filter Tabs */}
          <div className="flex items-center gap-1.5 p-0.5 bg-slate-100/80 rounded-lg text-[11px]">
            <button
              type="button"
              onClick={() => setFilterType("all")}
              className={cn(
                "flex-1 py-1 px-2 rounded-md font-medium transition-all text-center",
                filterType === "all"
                  ? "bg-white text-slate-900 shadow-xs font-bold"
                  : "text-slate-500 hover:text-slate-800",
              )}
            >
              All ({cityOutages.length})
            </button>
            {totalAffected > 0 && (
              <button
                type="button"
                onClick={() => setFilterType("affected")}
                className={cn(
                  "flex-1 py-1 px-2 rounded-md font-medium transition-all text-center flex items-center justify-center gap-1",
                  filterType === "affected"
                    ? "bg-white text-red-700 shadow-xs font-bold"
                    : "text-red-600 hover:text-red-700",
                )}
              >
                <span className="size-1.5 rounded-full bg-red-500" />
                Affected ({totalAffected})
              </button>
            )}
            <button
              type="button"
              onClick={() => setFilterType("normal")}
              className={cn(
                "flex-1 py-1 px-2 rounded-md font-medium transition-all text-center flex items-center justify-center gap-1",
                filterType === "normal"
                  ? "bg-white text-emerald-700 shadow-xs font-bold"
                  : "text-slate-500 hover:text-slate-800",
              )}
            >
              Normal ({normalCount})
            </button>
          </div>

          {/* Mini Search Filter */}
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 size-3.5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search ${cityOutages.length} barangays...`}
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50/80 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 rounded-lg outline-none transition-all placeholder:text-slate-400"
            />
          </div>

          {/* Scrollable Barangay List */}
          <div className="max-h-[260px] overflow-y-auto space-y-1 pr-1 overscroll-contain">
            {filteredBarangays.length === 0 ? (
              <div className="text-center py-6 text-xs text-slate-400">
                No barangays matching &ldquo;{searchQuery}&rdquo;
              </div>
            ) : (
              filteredBarangays.map((b) => {
                const cat = getOutageStatusCategory(b.status);
                const isBrownout = cat === "brownout";
                const isMaintenance = cat === "maintenance";

                return (
                  <div
                    key={`bgy-${b.id}`}
                    onClick={() => handleBarangayClick(b)}
                    className={cn(
                      "flex items-center justify-between p-2 rounded-xl border text-xs transition-all cursor-pointer group",
                      isBrownout
                        ? "bg-red-50/40 border-red-100 hover:bg-red-50 hover:border-red-300"
                        : isMaintenance
                        ? "bg-amber-50/40 border-amber-100 hover:bg-amber-50 hover:border-amber-300"
                        : "bg-slate-50/30 border-slate-100 hover:bg-slate-50 hover:border-blue-200",
                    )}
                  >
                    <div className="flex items-center gap-2 min-w-0 pr-2">
                      {isBrownout ? (
                        <div className="size-2 rounded-full bg-red-500 animate-pulse shrink-0 shadow-[0_0_6px_rgba(239,68,68,0.5)]" />
                      ) : isMaintenance ? (
                        <div className="size-2 rounded-full bg-amber-500 shrink-0 shadow-[0_0_6px_rgba(245,158,11,0.5)]" />
                      ) : (
                        <CheckCircle2 className="size-3 text-emerald-500 shrink-0" />
                      )}
                      <span className="font-semibold text-slate-800 truncate group-hover:text-blue-600 transition-colors">
                        {b.name}
                      </span>
                    </div>

                    <div className="shrink-0 flex items-center gap-1.5">
                      {isBrownout ? (
                        <span className="px-1.5 py-0.5 rounded-md text-[10px] font-extrabold bg-red-100 text-red-700">
                          {b.timeRemaining ? b.timeRemaining : "Brownout"}
                        </span>
                      ) : isMaintenance ? (
                        <span
                          className={`px-1.5 py-0.5 rounded-md text-[10px] font-extrabold ${
                            b.isUpcoming
                              ? "bg-amber-100/90 text-amber-800 border border-amber-300"
                              : "bg-amber-100 text-amber-700"
                          }`}
                        >
                          {b.isUpcoming
                            ? `⚠️ ${b.timeRemaining}`
                            : b.timeRemaining
                            ? b.timeRemaining
                            : "Maintenance"}
                        </span>
                      ) : (
                        <span className="text-[10px] text-slate-400 font-medium">
                          Normal
                        </span>
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function MapView() {
  const [outages, setOutages] = useState<OutageLocation[]>(mockOutages);
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [userLocation, setUserLocation] = useState<UserLocationInfo | null>(null);
  const [zoom, setZoom] = useState(5.8); // Default to full Philippine map view
  const [advisories, setAdvisories] = useState<Advisory[]>([]);
  const [showLegend, setShowLegend] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const refreshOutages = () => {
    fetch("/api/outages")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.data) && data.data.length > 0) {
          setOutages(data.data);
        }
      })
      .catch(() => {});
  };

  useEffect(() => {
    refreshOutages();

    fetch("/api/advisories/grid-alerts")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.data)) {
          setAdvisories(data.data);
        }
      })
      .catch(() => {});
  }, []);

  const hasRedAlert = advisories.some((a) => a.type === "RED_ALERT");
  const hasYellowAlert = advisories.some((a) => a.type === "YELLOW_ALERT");
  const activeGridAlert = advisories.find((a) => a.type === "RED_ALERT" || a.type === "YELLOW_ALERT");

  const ZOOM_THRESHOLD = 11.2;




  const selectedCityBoundary = useMemo(() => {
    if (!selectedCity) return null;
    const cityOutages = outages.filter(
      (o) => o.city.toLowerCase() === selectedCity.toLowerCase(),
    );
    return getMunicipalityBoundary(cityOutages);
  }, [outages, selectedCity]);

  const selectedOutage = useMemo(() => {
    if (!activePopup) return null;
    return outages.find((o) => o.id === activePopup) || null;
  }, [outages, activePopup]);

  const selectedCategory = selectedOutage
    ? getOutageStatusCategory(selectedOutage.status)
    : null;

  const combinedGeoJson = useMemo(() => {
    return {
      type: "FeatureCollection",
      features: outages.flatMap((outage) => {
        const cat = getOutageStatusCategory(outage.status);
        let fillColor = "#10b981";
        let fillOpacity = 0;

        if (cat === "brownout") {
          fillColor = "#ef4444";
          fillOpacity = 0.3;
        } else if (cat === "maintenance") {
          fillColor = "#f59e0b";
          fillOpacity = 0.22;
        }

        let strokeColor = "#475569";
        if (cat === "brownout") {
          strokeColor = "#dc2626";
        } else if (cat === "maintenance") {
          strokeColor = "#d97706";
        }

        return outage.geoJson.features.map((f) => ({
          ...f,
          properties: {
            ...f.properties,
            outageId: outage.id,
            fillColor,
            fillOpacity,
            strokeColor,
            statusCategory: cat,
          },
        }));
      }),
    };
  }, [outages]);

  const HOME_STORAGE_KEY = "kuryentsee_home_barangay";

  // Restore saved home barangay on mount / outages load
  useEffect(() => {
    try {
      const raw = localStorage.getItem(HOME_STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw);
        if (saved && saved.coords && Array.isArray(saved.coords)) {
          const match = matchCoordinatesToBarangays(saved.coords, outages);
          setUserLocation({
            coords: saved.coords,
            accuracy: 0,
            matchedBarangay: match.exactMatch,
            closestBarangay: match.closest,
            closestDistanceKm: match.closestDistanceKm,
            isNearBoundary: match.isNearBoundary,
            isManual: true,
            isHome: true,
          });
        }
      }
    } catch {
      // Ignore
    }
  }, [outages]);

  const handleSaveHome = (info?: UserLocationInfo) => {
    const target = info || userLocation;
    if (!target) return;
    try {
      localStorage.setItem(
        HOME_STORAGE_KEY,
        JSON.stringify({
          coords: target.coords,
          barangayId: target.matchedBarangay?.id,
          barangayName: target.matchedBarangay?.name,
          cityName: target.matchedBarangay?.city,
        }),
      );
      setUserLocation({
        ...target,
        isHome: true,
      });
    } catch {
      // Ignore
    }
  };

  const handleClearHome = () => {
    try {
      localStorage.removeItem(HOME_STORAGE_KEY);
      if (userLocation) {
        setUserLocation({
          ...userLocation,
          isHome: false,
        });
      }
    } catch {
      // Ignore
    }
  };

  return (
    <div className="relative inset-0 w-full h-full">
      <Map
        center={[122.5, 12.5]} // Centered on entire Philippine archipelago
        zoom={5.8} // Clean framing of Luzon, Visayas, and Mindanao
        onViewportChange={(v) => setZoom(v.zoom)}
        theme="light"
      >
        <MapHeader
          outages={outages}
          onSelectOutage={(id) => {
            setActivePopup(id);
            setSelectedCity(null);
          }}
          onSelectCity={(city) => {
            setSelectedCity(city);
            setActivePopup(null);
          }}
          onUserLocated={(info) => {
            setUserLocation(info);
            if (info.matchedBarangay?.id) {
              setActivePopup(info.matchedBarangay.id);
              setSelectedCity(null);
            }
          }}
          hasRedAlert={hasRedAlert}
          hasYellowAlert={hasYellowAlert}
          onToggleLegend={() => setShowLegend(!showLegend)}
          showLegend={showLegend}
          homeLocation={userLocation?.isHome ? userLocation : null}
          onClearHome={handleClearHome}
          onClearSearch={() => {
            setSelectedCity(null);
            setActivePopup(null);
          }}
          onSearchOpenChange={(open) => setIsSearchOpen(open)}
        />
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
              <span className="text-[14px] font-bold text-slate-700 tracking-wide group-hover:text-slate-900 transition-colors">
                Grid Status
              </span>
            </Button>
          </div>
        )}

        {/* Enhanced Grid Status Legend */}
        {showLegend && (
          <div className="absolute top-24 left-6 z-10 pointer-events-auto">
            <div className="bg-white/95 backdrop-blur-md border border-slate-200 shadow-md rounded-md p-5 w-72 animate-in fade-in slide-in-from-top-4 duration-300 relative">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div
                    className={`p-1.5 rounded-md flex items-center justify-center border border-slate-100 ${hasRedAlert ? "bg-red-50 text-red-500" : hasYellowAlert ? "bg-yellow-50 text-yellow-600" : "bg-emerald-50 text-emerald-500"}`}
                  >
                    <Activity className="size-4" />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-800 tracking-tight">
                    Visayas Grid Status
                  </h3>
                </div>
                <button
                  onClick={() => setShowLegend(false)}
                  className="p-1.5 rounded-md hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-all cursor-pointer"
                >
                  <X className="size-4" />
                </button>
              </div>

              <div className="space-y-1 relative z-10">
                <div
                  className={`flex items-center gap-3 p-2.5 rounded-md transition-all border ${hasRedAlert ? "bg-red-50/50 border-red-100" : "border-transparent hover:bg-slate-50"}`}
                >
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
                  <span
                    className={`text-sm font-medium ${hasRedAlert ? "text-red-700" : "text-slate-600"}`}
                  >
                    Red Alert
                  </span>
                </div>

                <div
                  className={`flex items-center gap-3 p-2.5 rounded-md transition-all border ${hasYellowAlert ? "bg-yellow-50/50 border-yellow-100" : "border-transparent hover:bg-slate-50"}`}
                >
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
                  <span
                    className={`text-sm font-medium ${hasYellowAlert ? "text-yellow-700" : "text-slate-600"}`}
                  >
                    Yellow Alert
                  </span>
                </div>

                <div
                  className={`flex items-center gap-3 p-2.5 rounded-md transition-all border ${!hasRedAlert && !hasYellowAlert ? "bg-emerald-50/50 border-emerald-100" : "border-transparent hover:bg-slate-50"}`}
                >
                  <div className="relative flex size-3 items-center justify-center">
                    {!hasRedAlert && !hasYellowAlert ? (
                      <span className="relative inline-flex size-3 rounded-full bg-emerald-500"></span>
                    ) : (
                      <span className="relative inline-flex size-3 rounded-full bg-slate-200"></span>
                    )}
                  </div>
                  <span
                    className={`text-sm font-medium ${!hasRedAlert && !hasYellowAlert ? "text-emerald-700" : "text-slate-600"}`}
                  >
                    Normal Condition
                  </span>
                </div>
              </div>

              {/* Area Outage Status Indicators */}
              <div className="border-t border-slate-100 my-3 pt-3">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                  Map Indicators
                </span>
                <div className="space-y-1.5 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center justify-center size-5 rounded-full bg-red-600 text-white shrink-0 shadow-xs">
                      <LightbulbOff className="size-3" />
                    </span>
                    <span className="font-semibold text-slate-900">Active Brownout</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="flex items-center justify-center size-5 rounded-full bg-amber-500 text-white shrink-0 shadow-xs">
                      <Wrench className="size-3" />
                    </span>
                    <span>Scheduled Maintenance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="flex items-center justify-center size-5 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300 shrink-0 font-bold text-[10px]">
                      ✓
                    </span>
                    <span>Normal Power</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Grid Alert Pulse Marker at Central Visayas */}
        {(hasRedAlert || hasYellowAlert) && (
          <MapMarker
            longitude={123.6}
            latitude={11.1}
            pitchAlignment="map"
            rotationAlignment="map"
          >
            <MarkerContent>
              <div
                className="relative flex items-center justify-center group cursor-pointer"
                onClick={() => setActivePopup("grid-alert")}
                title="Click to view Visayas Grid Alert details"
              >
                {/* Contained pulse covering only the Visayas region */}
                <span
                  className={`absolute inline-flex rounded-full opacity-20 ${hasRedAlert ? "bg-red-500" : "bg-amber-400"}`}
                  style={{
                    width: "110px",
                    height: "110px",
                    animation: "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite",
                  }}
                />
                <span
                  className={`absolute inline-flex rounded-full opacity-30 ${hasRedAlert ? "bg-red-500" : "bg-amber-400"}`}
                  style={{
                    width: "56px",
                    height: "56px",
                    animation: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
                  }}
                />
                <span
                  className={`relative inline-flex size-9 items-center justify-center rounded-full border-2 border-white shadow-lg transition-transform group-hover:scale-110 ${hasRedAlert ? "bg-red-600 shadow-red-500/40" : "bg-amber-500 shadow-amber-500/40"}`}
                >
                  <AlertTriangle className="size-4.5 text-white" />
                </span>
              </div>
            </MarkerContent>
          </MapMarker>
        )}

        {/* Grid Alert Popup */}
        {activePopup === "grid-alert" && (
          <MapPopup
            longitude={123.6}
            latitude={11.1}
            offset={20}
            onClose={() => setActivePopup(null)}
            closeButton
            focusAfterOpen={false}
            closeOnClick={false}
          >
            <div className="space-y-2.5 max-w-[280px]">
              <div className="flex items-center gap-2">
                <span
                  className={`size-2.5 rounded-full ${
                    hasRedAlert ? "bg-red-500 animate-pulse" : "bg-yellow-500 animate-pulse"
                  }`}
                />
                <h3 className="text-slate-900 font-bold text-sm">
                  {hasRedAlert ? "Visayas Grid Red Alert" : "Visayas Grid Yellow Alert"}
                </h3>
              </div>

              {activeGridAlert?.timeWindow && (
                <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-slate-50 border border-slate-100 text-[11px]">
                  <span className="text-slate-500 font-medium">Alert Window</span>
                  <span className="font-bold text-slate-800">{activeGridAlert.timeWindow}</span>
                </div>
              )}

              <p className="text-slate-600 text-xs leading-relaxed">
                {activeGridAlert?.reason ||
                  "The transmission grid is experiencing a thin operating margin. Standby reserves are below contingency requirements."}
              </p>

              <div className="flex items-center justify-between pt-1 border-t border-slate-100 text-[10px]">
                <span className="text-slate-500 font-medium">Source: NGCP / CEBECO II</span>
                <a
                  href="https://www.facebook.com/cebeco2.official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold hover:underline inline-flex items-center gap-0.5"
                >
                  Advisory <ExternalLink className="size-2.5" />
                </a>
              </div>
            </div>
          </MapPopup>
        )}

        {/* Active Selected City/Municipality floating indicator & Interactive Barangays Dropdown */}
        {selectedCity && !isSearchOpen && (
          <MunicipalityBarangayDropdown
            selectedCity={selectedCity}
            outages={outages}
            onSelectBarangay={(id) => {
              setActivePopup(id);
            }}
            onCloseCity={() => {
              setSelectedCity(null);
              setActivePopup(null);
            }}
          />
        )}


        {/* Render outage fills without global wireframe borders */}
        <MapGeoJSON
          data={combinedGeoJson as any}
          fillPaint={{
            "fill-color": ["get", "fillColor"],
            "fill-opacity": ["get", "fillOpacity"],
          }}
          linePaint={false}
          interactive={true}
          onClick={(e) => {
            const id = (e.feature?.properties as any)?.outageId;
            if (id) {
              setActivePopup(id);
              setSelectedCity(null);
            }
          }}
        />

        {/* Whole Municipality / City Bold Outer Border & Subtle Tint */}
        {selectedCityBoundary && (
          <>
            <MapGeoJSON
              key={`city-fill-${selectedCity}`}
              id="selected-city-fill"
              data={selectedCityBoundary.fillGeoJson as any}
              fillPaint={{
                "fill-color": "#2563eb",
                "fill-opacity": 0.08,
              }}
              linePaint={{
                "line-color": "#3b82f6",
                "line-width": 1,
                "line-opacity": 0.35,
              }}
            />

            {/* Extra Bold Outer Perimeter of the Municipality */}
            <MapGeoJSON
              key={`city-outer-border-${selectedCity}`}
              id="selected-city-outer-border"
              data={selectedCityBoundary.perimeterGeoJson as any}
              fillPaint={false}
              linePaint={{
                "line-color": "#1d4ed8",
                "line-width": 5, // Extra bold border around the whole municipality!
                "line-opacity": 1,
              }}
            />
          </>
        )}

        {/* Bolder Highlighted Border for the Searched / Active Barangay */}
        {selectedOutage && (
          <MapGeoJSON
            key={`selected-border-${selectedOutage.id}`}
            id="selected-barangay-bold-border"
            data={selectedOutage.geoJson as any}
            fillPaint={{
              "fill-color":
                selectedCategory === "brownout"
                  ? "#ef4444"
                  : selectedCategory === "maintenance"
                  ? "#f59e0b"
                  : "#2563eb",
              "fill-opacity":
                selectedCategory === "brownout"
                  ? 0.42
                  : selectedCategory === "maintenance"
                  ? 0.32
                  : 0.12,
            }}
            linePaint={{
              "line-color":
                selectedCategory === "brownout"
                  ? "#dc2626"
                  : selectedCategory === "maintenance"
                  ? "#d97706"
                  : "#2563eb",
              "line-width": 4.5,
              "line-opacity": 1,
            }}
          />
        )}

        {outages.map((outage) => {
          const category = getOutageStatusCategory(outage.status);
          const isAffected = category !== "normal";
          const isSelected = activePopup === outage.id;

          // Clutter-free: always show actively selected/searched barangay; only show affected pins when zoomed in
          if (!isSelected && (zoom < ZOOM_THRESHOLD || !isAffected)) {
            return null;
          }

            return (
              <div key={`outage-group-${outage.id}`}>
                {/* Individual Barangay Outage Markers (visible when zoomed in) */}
                <MapMarker
                  longitude={outage.markerOffset[0]}
                  latitude={outage.markerOffset[1]}
                  onClick={() =>
                    setActivePopup((prev) =>
                      prev === outage.id ? null : outage.id,
                    )
                  }
                >
                  <MarkerContent>
                    <div className="flex flex-col items-center gap-1 hover:scale-105 transition-all active:scale-95 cursor-pointer">
                      {category === "brownout" ? (
                        <div className="relative flex items-center justify-center size-9 bg-red-600 border-2 border-white rounded-full shadow-[0_4px_14px_rgba(239,68,68,0.45)]">
                          <span className="absolute -inset-1 rounded-full bg-red-500/30 animate-ping pointer-events-none" />
                          <LightbulbOff className="size-4 text-white" />
                        </div>
                      ) : category === "maintenance" ? (
                        <div className="relative flex items-center justify-center size-9 bg-amber-500 border-2 border-white rounded-full shadow-[0_4px_14px_rgba(245,158,11,0.4)]">
                          <Wrench className="size-4 text-white" />
                        </div>
                      ) : (
                        <div className="relative flex items-center justify-center size-9 bg-emerald-600 border-2 border-white rounded-full shadow-[0_4px_14px_rgba(16,185,129,0.35)]">
                          <UtilityPole className="size-4 text-white" />
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
                    closeButton={false}
                    focusAfterOpen={false}
                    closeOnClick={false}
                  >
                    <div className="space-y-2.5 min-w-[220px]">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-slate-900 font-bold text-sm leading-snug">
                            {outage.name}
                          </h3>
                          <p className="text-slate-500 text-xs font-medium">
                            {outage.city}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => setActivePopup(null)}
                          className="size-6 -mr-1 -mt-1 rounded-md inline-flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer shrink-0"
                          aria-label="Close"
                        >
                          <X className="size-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between py-1.5 px-2.5 rounded-lg bg-slate-50 border border-slate-100">
                        <span className="text-xs font-medium text-slate-600">
                          Power Status
                        </span>
                        <span
                          className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-bold ${
                            outage.isUpcoming
                              ? "bg-amber-100 text-amber-800 border border-amber-300"
                              : outage.status.toLowerCase().includes("brownout") ||
                                outage.status.toLowerCase().includes("emergency") ||
                                outage.status.toLowerCase().includes("blackout")
                              ? "bg-red-100 text-red-700"
                              : outage.status
                                    .toLowerCase()
                                    .includes("maintenance")
                                ? "bg-amber-100 text-amber-700"
                                : "bg-emerald-100 text-emerald-700"
                          }`}
                        >
                          <span
                            className={`size-1.5 rounded-full ${
                              outage.isUpcoming
                                ? "bg-amber-500"
                                : outage.status.toLowerCase().includes("brownout") ||
                                  outage.status.toLowerCase().includes("emergency") ||
                                  outage.status.toLowerCase().includes("blackout")
                                ? "bg-red-500"
                                : outage.status
                                      .toLowerCase()
                                      .includes("maintenance")
                                  ? "bg-amber-500"
                                  : "bg-emerald-500"
                            }`}
                          />
                          {outage.isUpcoming ? "⚠️ Incoming Outage" : outage.status}
                        </span>
                      </div>

                      {outage.timeRemaining && outage.timeRemaining !== "Normal" && outage.timeRemaining !== "Operational" && (
                        <div className="flex items-center justify-between py-1.5 px-2.5 rounded-lg bg-slate-50 border border-slate-100 text-[11px] gap-2">
                          <span className="text-slate-500 font-medium shrink-0">
                            {outage.isUpcoming ? "Scheduled Time" : "Time Window / Left"}
                          </span>
                          <span className="font-bold text-slate-800 text-right">
                            {outage.timeRemaining}
                          </span>
                        </div>
                      )}

                      {outage.duration && (
                        <div className="flex items-center justify-between py-1.5 px-2.5 rounded-lg bg-slate-50 border border-slate-100 text-[11px]">
                          <span className="text-slate-500 font-medium">Total Duration</span>
                          <span className="font-bold text-slate-800">{outage.duration}</span>
                        </div>
                      )}

                      {outage.reason ? (
                        <div className="p-2.5 rounded-lg bg-red-50/70 border border-red-100 text-[11px] text-slate-700 leading-relaxed">
                          <span className="font-bold text-red-800 block mb-1">CEBECO II Notice:</span>
                          <p className="text-slate-700 leading-normal">{outage.reason}</p>
                          <div className="flex items-center justify-between pt-2 mt-2 border-t border-red-200/70 text-[10px]">
                            <span className="text-slate-500 font-medium">
                              Source: <span className="font-semibold text-slate-700">CEBECO II Official</span>
                            </span>
                            <a
                              href="https://www.facebook.com/cebeco2.official"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-semibold hover:underline"
                            >
                              Facebook Advisory <ExternalLink className="size-2.5" />
                            </a>
                          </div>
                        </div>
                      ) : (
                        outage.status !== "Normal Power" && (
                          <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-slate-50 border border-slate-100 text-[10px]">
                            <span className="text-slate-500 font-medium">
                              Source: <span className="font-semibold text-slate-700">CEBECO II Official</span>
                            </span>
                            <a
                              href="https://www.facebook.com/cebeco2.official"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-semibold hover:underline"
                            >
                              Facebook Page <ExternalLink className="size-2.5" />
                            </a>
                          </div>
                        )
                      )}

                      <div className="pt-0.5">
                        {userLocation?.isHome &&
                        userLocation.matchedBarangay?.id === outage.id ? (
                          <div className="flex items-center justify-between py-1 text-xs">
                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
                              <CheckCircle2 className="size-3.5" />
                              Saved as Your Home
                            </span>
                            <button
                              type="button"
                              onClick={handleClearHome}
                              className="text-[11px] text-slate-400 hover:text-red-600 font-medium inline-flex items-center gap-1 transition-colors cursor-pointer hover:underline"
                            >
                              <Trash2 className="size-3" />
                              Remove
                            </button>
                          </div>
                        ) : (
                          <Button
                            size="sm"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold h-8 rounded-lg flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                            onClick={() => {
                              const locInfo: UserLocationInfo = {
                                coords: outage.markerOffset,
                                accuracy: 0,
                                matchedBarangay: outage,
                                closestBarangay: outage,
                                closestDistanceKm: 0,
                                isManual: true,
                                isHome: true,
                              };
                              setUserLocation(locInfo);
                              handleSaveHome(locInfo);
                              setActivePopup(outage.id);
                            }}
                          >
                            <Home className="size-3.5 fill-current" />
                            Set as Home Barangay
                          </Button>
                        )}
                      </div>
                    </div>
                  </MapPopup>
                )}
              </div>
            );
          })}
      </Map>
    </div>
  );
}
