import { useLocation, useNavigate } from 'react-router-dom'
import {
  Map,
  Activity,
  Plus,
  CalendarDays,
  Info,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface NavItem {
  path: string
  label: string
  icon: LucideIcon
  isFab?: boolean
}

const NAV_ITEMS: NavItem[] = [
  { path: '/', label: 'Map', icon: Map },
  { path: '/activity', label: 'Activity', icon: Activity },
  { path: '/report', label: 'Report', icon: Plus, isFab: true },
  { path: '/schedule', label: 'Schedule', icon: CalendarDays },
  { path: '/about', label: 'About', icon: Info },
]

export default function BottomNav() {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none w-[calc(100%-2rem)] max-w-[420px] md:max-w-[500px]">
      <div
        className="w-full rounded-[28px] border border-slate-200/50 bg-white/90 px-3 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-xl pointer-events-auto"
      >
        <div className="flex items-center justify-between">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path
            const Icon = item.icon

            if (item.isFab) {
              return (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className="relative -mt-8 flex flex-col items-center group outline-none px-2"
                  aria-label={item.label}
                >
                  <div
                    className="relative flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-[0_4px_16px_rgba(37,99,235,0.4)] transition-transform duration-200 hover:scale-105 active:scale-95 ring-4 ring-white"
                  >
                    <Icon className="h-6 w-6" strokeWidth={2.5} />
                  </div>
                  <span className="mt-1.5 text-[11px] font-bold tracking-wide text-blue-600">
                    {item.label}
                  </span>
                </button>
              )
            }

            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className="group relative flex w-16 flex-col items-center justify-center gap-1 outline-none"
                aria-label={item.label}
              >
                <div
                  className={`relative flex items-center justify-center rounded-xl p-2 transition-colors duration-200 ${
                    isActive
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
                  }`}
                >
                  <Icon className="h-6 w-6" strokeWidth={isActive ? 2.5 : 2} />
                  {isActive && (
                    <span className="absolute -top-1 h-1.5 w-1.5 rounded-full bg-blue-600" />
                  )}
                </div>
                <span
                  className={`text-[11px] font-semibold tracking-wide transition-colors duration-200 ${
                    isActive ? 'text-blue-600' : 'text-slate-500 group-hover:text-slate-700'
                  }`}
                >
                  {item.label}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
