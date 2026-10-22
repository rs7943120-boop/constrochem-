import { BadgeCheck, FlaskConical, ShieldCheck } from 'lucide-react'
import { Reveal, StaggerGroup, StaggerItem } from './AboutMotion'

const scientistImage = 'https://images.unsplash.com/photo-1748182448174-30c6b83443b9?auto=format&fit=crop&w=1500&q=85'
const assurances = [
  { label: 'Stringent Quality Control', Icon: FlaskConical },
  { label: 'International Standards', Icon: BadgeCheck },
  { label: 'Trusted Supply Partners', Icon: ShieldCheck },
]

function QualityAssurance() {
  return (
    <section className="bg-[#FFFFFF] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal direction="left" className="overflow-hidden rounded-2xl shadow-[0_20px_55px_rgba(52,137,33,0.12)]">
          <img src={scientistImage} alt="Laboratory scientist carefully filtering a sample" className="aspect-[1.3/1] w-full object-cover transition-transform duration-700 hover:scale-[1.03]" />
        </Reveal>
        <Reveal direction="right">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.23em] text-[#348921]">Our Commitment</p>
          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#348921] sm:text-5xl">Quality <span className="text-[#348921]">Assurance</span></h2>
          <p className="mt-6 text-sm leading-7 text-[#348921] sm:text-base sm:leading-8">
            We ensure that all our products meet applicable quality standards through stringent quality control and trusted supplier partnerships. Our focus is on delivering consistent quality, performance, and reliability to every customer.
          </p>
          <StaggerGroup className="mt-7 grid gap-3 sm:grid-cols-3">
            {assurances.map(({ label, Icon }) => (
              <StaggerItem key={label} className="flex items-center gap-3 rounded-xl border border-[#348921]/20 bg-white px-4 py-4 sm:flex-col sm:items-start sm:gap-3 sm:px-3">
                <Icon size={21} strokeWidth={1.6} className="shrink-0 text-[#348921]" aria-hidden="true" />
                <span className="text-xs font-semibold leading-5 text-[#348921]">{label}</span>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Reveal>
      </div>
    </section>
  )
}

export default QualityAssurance

