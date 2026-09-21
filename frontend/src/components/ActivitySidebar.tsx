import { useEffect, useState, useRef, useMemo } from "react";
import { X, MapPin } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

interface Advisory {
  _id: string;
  type: string;
  status: string;
  postContent: string;
  reason: string;
  affectedAreas: { cityOrMunicipality: string; barangays: string[] }[];
  datePosted: string;
  dateEffective: string;
  timeWindow: string;
}

function HighlightedText({ text, highlight }: { text: string; highlight: string }) {
  if (!highlight.trim()) return <span>{text}</span>;
  const regex = new RegExp(`(${highlight})`, "gi");
  const parts = text.split(regex);
  return (
    <span>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <span key={i} className="bg-yellow-200 text-yellow-900 font-medium rounded-sm px-0.5">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </span>
  );
}

type TabKey = "all" | "notices" | "reports";

export function ActivitySidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [advisories, setAdvisories] = useState<Advisory[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<TabKey>("all");
  const [headerHeight, setHeaderHeight] = useState(0);
  const [expandedAdvisoryId, setExpandedAdvisoryId] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string>("All");
  const [selectedProvider, setSelectedProvider] = useState<string>("All Providers");
  const [barangaySearch, setBarangaySearch] = useState<string>("");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [activeTab]);

  // Dynamically measure the MapHeader so sidebar always sits below it, even on zoom
  useEffect(() => {
    const measure = () => {
      const header = document.querySelector("header");
      if (header) {
        setHeaderHeight(header.getBoundingClientRect().height);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    // Re-measure periodically to catch zoom changes
    const interval = setInterval(measure, 500);
    return () => {
      window.removeEventListener("resize", measure);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      fetch("/api/advisories")
        .then(res => res.json())
        .then(data => {
          if (data.success) setAdvisories(data.data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [isOpen]);

  const now = new Date();
  const dateLabel = now.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
  const timeLabel = now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });

  const filteredAdvisories = useMemo(() => {
    // If a different provider is selected but we only have CEBECO II data for now
    if (selectedProvider !== "All Providers" && selectedProvider !== "CEBECO II") return [];
    
    let filtered = advisories;
    if (selectedCity !== "All") {
      filtered = filtered.filter(adv => 
        adv.affectedAreas.some(area => {
          const areaName = area.cityOrMunicipality.toLowerCase();
          const selected = selectedCity.toLowerCase();
          return selected.includes(areaName) || areaName.includes(selected);
        })
      );
    }

    if (barangaySearch.trim() !== "") {
      const search = barangaySearch.toLowerCase().trim();
      filtered = filtered.filter(adv => 
        adv.affectedAreas.some(area => 
          area.barangays && area.barangays.some(b => b.toLowerCase().includes(search))
        )
      );
    }

    return filtered;
  }, [advisories, selectedCity, selectedProvider, barangaySearch]);

  const tabs: { key: TabKey; label: string; count: number }[] = [
    { key: "all", label: "All", count: advisories.length },
    { key: "notices", label: "Notices", count: filteredAdvisories.length },
    { key: "reports", label: "Reports", count: 0 },
  ];

  const getStatusStyle = (status: string) => {
    if (status === "COMPLETED" || status === "RESOLVED") return "bg-emerald-50 text-emerald-700 ring-emerald-600/20";
    if (status === "UPCOMING") return "bg-blue-50 text-blue-700 ring-blue-600/20";
    return "bg-orange-50 text-orange-700 ring-orange-600/20";
  };


  // Sidebar panel animation
  const panelVariants: Variants = {
    hidden: { x: -440, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        damping: 28, 
        stiffness: 300,
        mass: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.04
      }
    },
    exit: { 
      x: -440, 
      opacity: 0,
      transition: { 
        type: "spring", 
        damping: 32, 
        stiffness: 350,
        mass: 0.6
      }
    }
  };

  // Card stagger animation
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 16, scale: 0.97 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", damping: 22, stiffness: 260 }
    },
    exit: { opacity: 0, y: -8, transition: { duration: 0.15 } }
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } }
  };

  // Snap directly below the header — no gap
  const sidebarTop = headerHeight;

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          key="activity-sidebar"
          variants={panelVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{ top: `${sidebarTop}px`, height: `calc(100vh - ${sidebarTop}px)` }}
          className="fixed left-0 w-[440px] z-40 flex flex-col bg-white border-r border-slate-200 shadow-xl overflow-hidden"
        >

          {/* ── Header ── */}
          <motion.div 
            className="shrink-0 flex items-center justify-between px-5 py-3.5 border-b border-slate-100"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
              Activity · {dateLabel}
            </h2>
            <motion.button 
              onClick={onClose} 
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="size-4" />
            </motion.button>
          </motion.div>

          {/* ── Tabs ── */}
          <div className="shrink-0 flex border-b border-slate-100 relative">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex-1 py-2.5 text-xs font-semibold transition-colors relative ${
                  activeTab === tab.key ? "text-blue-600" : "text-slate-400 hover:text-slate-600"
                }`}
              >
                {tab.label} ({tab.count})
                {activeTab === tab.key && (
                  <motion.span 
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 inset-x-4 h-0.5 bg-blue-600 rounded-full"
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* ── Scrollable Content ── */}
          <div ref={scrollContainerRef} className="flex-1 overflow-y-auto bg-slate-50 p-3 space-y-6">
            <AnimatePresence mode="wait">
              {activeTab === "reports" ? (
                <motion.div 
                  key="reports-tab"
                  className="pt-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ type: "spring", damping: 25, stiffness: 280 }}
                >
                  <h4 className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest mb-1 px-1">Community Reports</h4>
                  <p className="text-[11px] text-slate-400 mb-4 px-1">Updated {dateLabel}, {timeLabel}</p>
                  <motion.div 
                    className="border border-dashed border-slate-300 rounded-lg bg-white p-8 text-center space-y-3"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <p className="text-sm text-slate-500">No recent community reports in this view.</p>
                    <motion.button 
                      className="px-5 py-2 bg-blue-600 text-white text-sm font-semibold rounded-md hover:bg-blue-700 transition-colors"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Report a problem
                    </motion.button>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  key={`content-${activeTab}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ type: "spring", damping: 25, stiffness: 280 }}
                >
                  <div>
                    {activeTab === "notices" && (
                      <div className="mb-4">
                        <h4 className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest mb-3 px-1">Filter Notices</h4>
                        
                        <div className="flex flex-col gap-2 px-1">
                          <div className="flex items-center gap-2">
                        {/* Provider Filter */}
                        <div className="relative flex-1">
                          <select 
                            value={selectedProvider}
                            onChange={(e) => setSelectedProvider(e.target.value)}
                            className="w-full appearance-none bg-white border border-slate-200 text-slate-600 text-[11px] font-medium rounded-md pl-2 pr-6 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 cursor-pointer shadow-sm"
                          >
                            <option value="All Providers">All Providers</option>
                            <option value="CEBECO II">CEBECO II</option>
                            <option value="VECO">VECO</option>
                            <option value="MECO">MECO</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1.5 text-slate-400">
                            <svg className="size-3 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                            </svg>
                          </div>
                        </div>

                        {/* Area Filter */}
                        <div className="relative flex-1">
                          <select 
                            value={selectedCity}
                            onChange={(e) => setSelectedCity(e.target.value)}
                            className="w-full appearance-none bg-white border border-slate-200 text-slate-600 text-[11px] font-medium rounded-md pl-2 pr-6 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 cursor-pointer shadow-sm"
                          >
                            <option value="All">All Areas</option>
                            <option value="Danao">Danao City</option>
                            <option value="Bogo City / City of Bogo">Bogo City / City of Bogo</option>
                            <option value="Borbon">Borbon</option>
                            <option value="Carmen">Carmen</option>
                            <option value="Catmon">Catmon</option>
                            <option value="Compostela">Compostela</option>
                            <option value="Daanbantayan">Daanbantayan</option>
                            <option value="Medellin">Medellin</option>
                            <option value="San Remigio">San Remigio</option>
                            <option value="Sogod">Sogod</option>
                            <option value="Tabogon">Tabogon</option>
                            <option value="Tabuelan">Tabuelan</option>
                            <option value="Tuburan">Tuburan</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1.5 text-slate-400">
                            <svg className="size-3 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Barangay Filter */}
                      <div className="px-1 mt-2">
                        <input
                          type="text"
                          placeholder="Search for a specific barangay..."
                          value={barangaySearch}
                          onChange={(e) => setBarangaySearch(e.target.value)}
                          className="w-full bg-white border border-slate-200 text-slate-600 text-[11px] font-medium rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 shadow-sm placeholder:font-normal"
                        />
                      </div>
                    </div>
                  </div>
                )}

                  {(() => {
                    const currentAdvisories = activeTab === "all" ? advisories : filteredAdvisories;
                    
                    if (loading) {
                      return (
                        <div className="flex items-center justify-center py-12 text-sm text-slate-400">
                          <motion.span 
                            className="inline-block size-4 border-2 border-slate-300 border-t-blue-500 rounded-full mr-2"
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                          />
                          Loading...
                        </div>
                      );
                    }

                    if (currentAdvisories.length === 0) {
                      return (
                        <motion.div 
                          className="bg-white border border-dashed border-slate-300 rounded-lg p-6 text-center text-sm text-slate-400"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                        >
                          No provider notices found.
                        </motion.div>
                      );
                    }

                    return (
                      <motion.div 
                        className="space-y-3"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        {currentAdvisories.map((advisory, index) => (
                          <motion.div
                            key={advisory._id}
                            variants={cardVariants}
                            whileHover={{ 
                              y: -2, 
                              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                              transition: { duration: 0.2 }
                            }}
                            whileTap={{ scale: 0.995 }}
                            className="bg-white rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-shadow p-4 cursor-pointer"
                          >
                            {/* Row 1: Type and Status */}
                            <div className="flex items-center justify-between gap-2 mb-2.5">
                              <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                                advisory.type.includes("RED") || advisory.type.includes("EMERGENCY") 
                                  ? "bg-red-50 text-red-600" 
                                  : advisory.type.includes("YELLOW") 
                                    ? "bg-amber-50 text-amber-600" 
                                    : advisory.type.includes("POWER_RESUMED") 
                                      ? "bg-emerald-50 text-emerald-600" 
                                      : advisory.type.includes("GRID") 
                                        ? "bg-violet-50 text-violet-600" 
                                        : advisory.type.includes("SCHEDULED") 
                                          ? "bg-blue-50 text-blue-600"
                                          : "bg-slate-100 text-slate-600"
                              }`}>
                                {advisory.type.replaceAll("_", " ")}
                              </span>
                              <motion.span 
                                className={`text-[9px] font-semibold uppercase px-2 py-0.5 rounded-md ${getStatusStyle(advisory.status)}`}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.1 + index * 0.03 }}
                              >
                                {advisory.status.replaceAll("_", " ")}
                              </motion.span>
                            </div>

                            {/* Row 2: Date & Time (most important) */}
                            <div className="mb-3">
                              <h3 className="text-[13px] font-bold text-slate-800 leading-tight mb-0.5 flex items-center gap-1.5">
                                <span>
                                  {new Date(advisory.dateEffective || advisory.datePosted).toLocaleString("en-US", {
                                    month: "short", day: "numeric", year: "numeric",
                                  })}
                                </span>
                                {advisory.timeWindow && advisory.timeWindow !== "None" && (
                                  <>
                                    <span className="text-slate-300">·</span>
                                    <span>{advisory.timeWindow === "Unknown" ? "No Specified Time" : advisory.timeWindow}</span>
                                  </>
                                )}
                              </h3>
                              <p className="text-[11px] text-slate-400">
                                <span className="text-slate-500 font-medium">Provider:</span> CEBECO II
                              </p>
                              <p className="text-[10.5px] text-slate-400 italic mt-1">
                                {advisory.reason && advisory.reason !== 'No reason specified' 
                                  ? advisory.reason 
                                  : advisory.type.includes("RED") ? "High demand on the power grid — rotating outages may occur."
                                  : advisory.type.includes("YELLOW") ? "Power reserves are running low — conservation is advised."
                                  : advisory.type.includes("EMERGENCY") ? "Unexpected outage due to equipment failure or line damage."
                                  : advisory.type.includes("SCHEDULED") ? "Planned maintenance to improve or repair power lines."
                                  : advisory.type.includes("MANUAL_LOAD") ? "Intentional load reduction to prevent grid overload."
                                  : advisory.type.includes("POWER_RESUMED") ? "Electricity has been restored in the affected areas."
                                  : advisory.type.includes("GRID") ? "General update on current power grid conditions."
                                  : "Power advisory from your electricity provider."
                                }
                              </p>
                            </div>

                            {/* Row 3: Affected Areas */}
                            {advisory.affectedAreas && advisory.affectedAreas.length > 0 && (() => {
                              const isSearching = activeTab === "notices" && barangaySearch.trim() !== "";
                              const isExpanded = isSearching || expandedAdvisoryId === advisory._id;
                              
                              return (
                                <div className="flex items-start gap-2 pt-2.5 border-t border-slate-100">
                                  <MapPin className="size-3.5 text-slate-300 shrink-0 mt-0.5" />
                                  <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                      <p className="text-[11px] text-slate-500 leading-snug line-clamp-1">
                                        {advisory.affectedAreas.map(a => a.cityOrMunicipality).join(", ")}
                                      </p>
                                      {!isSearching && (
                                        <button 
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            setExpandedAdvisoryId(prev => prev === advisory._id ? null : advisory._id);
                                          }}
                                          className="text-[10px] font-medium text-blue-500 hover:text-blue-600 ml-2 whitespace-nowrap"
                                        >
                                          {expandedAdvisoryId === advisory._id ? "Less" : "More"}
                                        </button>
                                      )}
                                    </div>
                                    
                                    <AnimatePresence>
                                      {isExpanded && (
                                        <motion.div 
                                          initial={{ height: 0, opacity: 0 }}
                                          animate={{ height: "auto", opacity: 1 }}
                                          exit={{ height: 0, opacity: 0 }}
                                          className="overflow-hidden"
                                        >
                                          <div className="pt-2 pb-1 space-y-1.5 mt-1">
                                            {advisory.affectedAreas.map((area, i) => (
                                              <div key={i} className="text-[11px]">
                                                <span className="font-medium text-slate-600 block mb-0.5">{area.cityOrMunicipality}</span>
                                                <span className="text-slate-400 leading-relaxed">
                                                  {area.barangays && area.barangays.length > 0 
                                                    ? <HighlightedText text={area.barangays.join(", ")} highlight={isSearching ? barangaySearch : ""} />
                                                    : "All barangays"}
                                                </span>
                                              </div>
                                            ))}
                                          </div>
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </div>
                                </div>
                              );
                            })()}
                          </motion.div>
                        ))}
                      </motion.div>
                    );
                  })()}
                  </div>

                  {/* Community reports at bottom of All tab */}
                  {activeTab === "all" && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, type: "spring", damping: 20 }}
                      className="mt-6"
                    >
                      <h4 className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest mb-1 px-1">Community Reports</h4>
                      <p className="text-[11px] text-slate-400 mb-3 px-1">Updated {dateLabel}, {timeLabel}</p>
                      <div className="border border-dashed border-slate-300 rounded-lg bg-white p-6 text-center space-y-3">
                        <p className="text-sm text-slate-500">No recent community reports in this view.</p>
                        <motion.button 
                          className="px-5 py-2 bg-blue-600 text-white text-sm font-semibold rounded-md hover:bg-blue-700 transition-colors"
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          Report a problem
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
