import { ArrowRight, BadgeCheck, ShieldCheck, Truck } from 'lucide-react'
import { Reveal, StaggerGroup, StaggerItem } from './AboutMotion'

const features = [
  { label: 'Trusted Manufacturers', Icon: BadgeCheck },
  { label: 'Consistent Quality', Icon: ShieldCheck },
  { label: 'Reliable Supply Chain', Icon: Truck },
]

function DottedWorld() {
  const dots = []
  const regions = [
    { x: 28, y: 27, rx: 17, ry: 11 },
    { x: 36, y: 54, rx: 8, ry: 19 },
    { x: 54, y: 27, rx: 10, ry: 7 },
    { x: 58, y: 48, rx: 8, ry: 17 },
    { x: 72, y: 31, rx: 19, ry: 12 },
    { x: 80, y: 57, rx: 7, ry: 5 },
  ]

  for (let y = 7; y <= 89; y += 4.5) {
    for (let x = 8; x <= 92; x += 3.8) {
      if (regions.some((region) => ((x - region.x) / region.rx) ** 2 + ((y - region.y) / region.ry) ** 2 <= 1)) {
        dots.push(<circle key={`${x}-${y}`} cx={x} cy={y} r="0.72" />)
      }
    }
  }

  return <svg viewBox="0 0 100 100" className="h-full w-full fill-[#348921]/35" role="img" aria-label="Pale green dotted world map">{dots}</svg>
}

function GlobalSourcing() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal direction="left">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.23em] text-[#348921]">Global Reach</p>
          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#348921] sm:text-5xl">Global Sourcing Network</h2>
          <p className="mt-6 text-sm leading-7 text-[#348921] sm:text-base sm:leading-8">
            We collaborate with leading manufacturers and suppliers worldwide to source high-quality chemical products, ensuring consistent supply, competitive pricing, and the best materials for our customers.
          </p>
          <a href="#contact" className="mt-7 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#348921] px-6 text-sm font-semibold text-white transition hover:bg-[#348921] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#348921]">
            Our Global Partners <ArrowRight size={16} />
          </a>
        </Reveal>
        <Reveal direction="right" className="relative mx-auto w-full max-w-[580px]">
          <div className="absolute inset-0 rounded-full bg-white/50 blur-3xl" />
          <div className="relative mx-auto aspect-[1.45/1] w-full max-w-[520px] p-5 sm:p-8"><DottedWorld /></div>
          <StaggerGroup className="relative grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-3">
            {features.map(({ label, Icon }) => (
              <StaggerItem key={label} className="flex items-center gap-2 rounded-lg border border-[#348921]/20 bg-white/90 px-3 py-3 shadow-sm sm:flex-col sm:justify-center sm:gap-2 sm:px-2 sm:text-center">
                <Icon size={18} strokeWidth={1.6} className="shrink-0 text-[#348921]" aria-hidden="true" />
                <span className="text-[11px] font-semibold leading-4 text-[#348921]">{label}</span>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Reveal>
      </div>
    </section>
  )
}

export default GlobalSourcing

