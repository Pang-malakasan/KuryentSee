import { Outlet } from 'react-router-dom'
import BottomNav from '@/components/BottomNav'

export default function Layout() {
  return (
    <div className="relative h-full w-full flex flex-col">
      {/* Page content */}
      <main className="flex-1 relative overflow-hidden">
        <Outlet />
      </main>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  )
}
