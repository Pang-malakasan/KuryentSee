import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import BottomNav from '@/components/BottomNav'
import { ActivitySidebar } from '@/components/ActivitySidebar'

export default function Layout() {
  const [isActivityOpen, setIsActivityOpen] = useState(false)

  return (
    <div className="relative h-full w-full flex flex-col">
      <ActivitySidebar isOpen={isActivityOpen} onClose={() => setIsActivityOpen(false)} />
      
      {/* Page content */}
      <main className="flex-1 relative overflow-hidden">
        <Outlet />
      </main>

      {/* Bottom Navigation */}
      <BottomNav 
        onActivityClick={() => setIsActivityOpen(!isActivityOpen)} 
        isActivityActive={isActivityOpen} 
      />
    </div>
  )
}
