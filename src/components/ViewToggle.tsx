import { useEffect, useState } from "react"
import { useMap } from "@/components/ui/map"
import { Box, Compass } from "lucide-react"

export function ViewToggle() {
  const { map, isLoaded } = useMap()
  const [pitch, setPitch] = useState(0)

  useEffect(() => {
    if (!map || !isLoaded) return

    const handleMove = () => {
      setPitch(Math.round(map.getPitch()))
    }

    map.on("move", handleMove)
    return () => {
      map.off("move", handleMove)
    }
  }, [map, isLoaded])

  if (!isLoaded) return null

  const is3D = pitch > 10

  const handleToggle = () => {
    if (is3D) {
      map?.easeTo({ pitch: 0, bearing: 0, duration: 1200 })
    } else {
      map?.easeTo({ pitch: 62, bearing: -25, duration: 1200 })
    }
  }

  return (
    <div className="absolute top-20 right-5 z-20">
      <button
        onClick={handleToggle}
        title={is3D ? "Reset to flat 2D view" : "Switch to interactive 3D view"}
        className={`group relative flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs md:text-sm font-bold tracking-wider transition-all duration-300 backdrop-blur-md border shadow-md active:scale-95 hover:shadow-lg ${
          is3D
            ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white border-blue-400/50 shadow-blue-500/30 scale-105"
            : "bg-white/95 text-slate-700 border-slate-200/90 hover:bg-slate-50 hover:text-slate-900"
        }`}
      >
        {is3D ? (
          <Compass className="size-4 animate-spin text-cyan-300" />
        ) : (
          <Box className="size-4 text-blue-600 group-hover:rotate-12 transition-transform duration-300" />
        )}
        <span>{is3D ? "3D Mode" : "3D View"}</span>
       
      </button>
    </div>
  )
}
