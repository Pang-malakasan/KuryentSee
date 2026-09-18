import { useEffect, useState, useCallback } from "react"
import { useMap } from "@/components/ui/map"
import { Plus, Minus } from "lucide-react"

export function ZoomControls() {
  const { map, isLoaded } = useMap()
  const [currentZoom, setCurrentZoom] = useState(11.8)
  const [headerHeight, setHeaderHeight] = useState(0)

  useEffect(() => {
    const measure = () => {
      const header = document.querySelector("header")
      if (header) setHeaderHeight(header.getBoundingClientRect().height)
    }
    measure()
    window.addEventListener("resize", measure)
    const interval = setInterval(measure, 500)
    return () => {
      window.removeEventListener("resize", measure)
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    if (!map || !isLoaded) return

    const updateZoom = () => {
      setCurrentZoom(map.getZoom())
    }

    updateZoom()
    map.on("zoom", updateZoom)
    return () => {
      map.off("zoom", updateZoom)
    }
  }, [map, isLoaded])

  const handleZoomIn = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      if (!map) return
      map.zoomTo(map.getZoom() + 1, { duration: 250 })
    },
    [map]
  )

  const handleZoomOut = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      if (!map) return
      map.zoomTo(map.getZoom() - 1, { duration: 250 })
    },
    [map]
  )

  if (!isLoaded) return null

  const isMaxZoom = currentZoom >= 20
  const isMinZoom = currentZoom <= 2

  // Position: 16px below header + ~48px for ViewToggle button + 8px gap
  const topOffset = headerHeight + 72

  return (
    <div
      className="absolute right-4 z-20 flex flex-col items-center bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-1 gap-1"
      style={{ top: `${topOffset}px` }}
      onPointerDown={(e) => e.stopPropagation()}
      onTouchStart={(e) => e.stopPropagation()}
      aria-label="Map Zoom Controls"
    >
      <button
        type="button"
        onClick={handleZoomIn}
        disabled={isMaxZoom}
        title="Zoom In"
        aria-label="Zoom In"
        className="group relative flex size-9 items-center justify-center rounded-xl text-slate-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 active:scale-90 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
      >
        <Plus className="size-4.5 stroke-[2.5] transition-transform duration-200 group-hover:scale-110" />
      </button>

      <div className="h-px w-5 bg-slate-200/80" />

      <button
        type="button"
        onClick={handleZoomOut}
        disabled={isMinZoom}
        title="Zoom Out"
        aria-label="Zoom Out"
        className="group relative flex size-9 items-center justify-center rounded-xl text-slate-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 active:scale-90 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
      >
        <Minus className="size-4.5 stroke-[2.5] transition-transform duration-200 group-hover:scale-110" />
      </button>
    </div>
  )
}
