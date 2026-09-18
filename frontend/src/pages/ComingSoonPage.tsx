import { type LucideIcon } from 'lucide-react'

interface ComingSoonPageProps {
  icon: LucideIcon
  title: string
  description: string
}

export default function ComingSoonPage({ icon: Icon, title, description }: ComingSoonPageProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 text-center">
      <div className="animate-fade-in-up flex flex-col items-center w-full max-w-md mx-auto">
        {/* Glowing icon container */}
        <div className="relative mb-6 w-20 h-20 flex-shrink-0">
          <div
            className="absolute inset-0 opacity-30"
            style={{ background: 'var(--color-brand)' }}
          />
          <div className="relative w-full h-full flex items-center justify-center">
            <Icon className="w-9 h-9 text-blue-600" strokeWidth={1.5} />
          </div>
        </div>

        {/* Text */}
        <h1 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">
          {title}
        </h1>
        <p className="text-sm text-text-secondary max-w-[280px] mx-auto leading-relaxed mb-8">
          {description}
        </p>

        {/* "Coming Soon" badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand" />
          </span>
          <span className="text-xs font-semibold text-brand-light uppercase tracking-widest">
            Coming Soon
          </span>
        </div>
      </div>
    </div>
  )
}
