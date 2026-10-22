import { ArrowRight, Globe2, Leaf, Recycle } from 'lucide-react'
import { Reveal, StaggerGroup, StaggerItem } from './AboutMotion'

const earthImage = 'https://images.unsplash.com/photo-1719825523711-eda3221c111c?auto=format&fit=crop&w=2200&q=85'
const highlights = [
  { label: 'Responsible Sourcing', Icon: Globe2 },
  { label: 'Eco-Friendly Solutions', Icon: Recycle },
  { label: 'Sustainable Growth', Icon: Leaf },
]

function Sustainability() {
  return (
    <section id="sustainability" className="relative isolate overflow-hidden bg-[#348921] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div aria-hidden="true" className="absolute inset-0 -z-20 bg-cover bg-[center_48%]" style={{ backgroundImage: `url("${earthImage}")` }} />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(52,137,33,0.94)_0%,rgba(52,137,33,0.82)_52%,rgba(52,137,33,0.45)_100%)]" />
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <Reveal direction="left">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.23em] text-white">A Greener Tomorrow</p>
          <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl">Our Commitment to <span className="text-white">Sustainability</span></h2>
          <p className="mt-6 max-w-[650px] text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
            We believe in responsible growth. By working with trusted partners and sustainable practices, we aim to contribute to a cleaner, safer and greener future for the industries we serve and the communities we are part of.
          </p>
          <a href="#sustainability" className="mt-7 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#348921] px-6 text-sm font-semibold text-white transition hover:bg-[#348921] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#348921]">
            Learn About Our Approach <ArrowRight size={16} />
          </a>
        </Reveal>
        <StaggerGroup className="grid gap-3 min-[480px]:grid-cols-3 lg:grid-cols-1">
          {highlights.map(({ label, Icon }) => (
            <StaggerItem key={label} className="flex items-center gap-3 rounded-xl border border-white/15 bg-[#348921]/40 p-4 backdrop-blur-sm sm:p-5">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#348921]/20 text-[#348921]"><Icon size={19} strokeWidth={1.6} /></span>
              <span className="text-xs font-semibold text-white sm:text-sm">{label}</span>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}

export default Sustainability


