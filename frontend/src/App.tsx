import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Activity, CalendarDays, Info, FileWarning } from 'lucide-react'
import Layout from '@/components/Layout'
import MapView from '@/pages/MapView'
import ComingSoonPage from '@/pages/ComingSoonPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MapView />} />
          <Route
            path="/activity"
            element={
              <ComingSoonPage
                icon={Activity}
                title="Activity Feed"
                description="Track real-time power outage updates and restoration activity in your area."
              />
            }
          />
          <Route
            path="/report"
            element={
              <ComingSoonPage
                icon={FileWarning}
                title="Report Outage"
                description="Report a power outage in your area and help your community stay informed."
              />
            }
          />
          <Route
            path="/schedule"
            element={
              <ComingSoonPage
                icon={CalendarDays}
                title="Maintenance Schedule"
                description="View planned power interruptions and scheduled maintenance in your area."
              />
            }
          />
          <Route
            path="/about"
            element={
              <ComingSoonPage
                icon={Info}
                title="About KuryentSee"
                description="Learn more about KuryentSee and how it helps track electricity outages across the Philippines."
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
