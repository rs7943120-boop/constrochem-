import { Compass, HeartHandshake, ShieldCheck, FlaskConical } from 'lucide-react'
import { Reveal, StaggerGroup, StaggerItem } from './AboutMotion'
import labImage from '../assets/hero imged.png'

const cards = [
  { title: 'Our Mission', description: 'To provide high-quality chemical products and reliable solutions that empower industries to innovate and grow.', Icon: Compass },
  { title: 'Our Vision', description: 'To be a globally trusted partner in chemical distribution, recognized for quality, integrity and sustainable growth.', Icon: FlaskConical },
  { title: 'Our Values', values: ['Quality & Reliability', 'Customer Focus', 'Innovation', 'Integrity', 'Sustainability'], Icon: HeartHandshake },
]

function MissionVisionValues() {
  return (
    <section className="bg-[#FFFFFF] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <Reveal direction="left" className="relative overflow-hidden rounded-2xl shadow-[0_20px_55px_rgba(52,137,33,0.12)]">
          <img src={labImage} alt="Scientific glassware in a modern laboratory" className="aspect-[1.15/1] w-full object-cover transition-transform duration-700 hover:scale-[1.03]" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#348921]/75 to-transparent p-6 pt-16 text-white sm:p-8 sm:pt-20">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#348921]">Our purpose</p>
            <p className="mt-2 max-w-sm text-lg font-medium leading-snug sm:text-2xl">Building trust through chemistry.</p>
          </div>
        </Reveal>
        <div>
          <Reveal direction="right">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.23em] text-[#348921]">Our Purpose</p>
            <h2 className="mb-7 text-3xl font-semibold tracking-[-0.04em] text-[#348921] sm:text-4xl">Our Mission, Vision &amp; Values</h2>
          </Reveal>
          <StaggerGroup className="space-y-3 sm:space-y-4">
            {cards.map(({ title, description, values, Icon }) => (
              <StaggerItem key={title} className="rounded-xl border border-[#348921]/20 bg-white p-5 shadow-[0_8px_24px_rgba(52,137,33,0.035)] transition-shadow hover:shadow-md sm:p-6">
                <div className="flex gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#348921]"><Icon size={20} strokeWidth={1.65} /></span>
                  <div>
                    <h3 className="font-semibold text-[#348921]">{title}</h3>
                    {description && <p className="mt-2 text-sm leading-6 text-[#348921]">{description}</p>}
                    {values && <ul className="mt-3 flex flex-wrap gap-2">{values.map((value) => <li key={value} className="rounded-full bg-white px-3 py-1 text-[11px] font-medium text-[#348921]">{value}</li>)}</ul>}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  )
}

export default MissionVisionValues

