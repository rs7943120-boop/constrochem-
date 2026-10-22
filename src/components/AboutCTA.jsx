import { ArrowRight, Handshake, Lightbulb, UserRoundCheck } from 'lucide-react'
import { Reveal, StaggerGroup, StaggerItem } from './AboutMotion'
import labImage from '../assets/hero imged.png'

const support = [
  { label: 'Professional Support', Icon: UserRoundCheck },
  { label: 'Customized Solutions', Icon: Lightbulb },
  { label: 'Long-Term Partnership', Icon: Handshake },
]

function AboutCTA() {
  return (
    <section id="contact" className="relative isolate overflow-hidden bg-[#348921] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div aria-hidden="true" className="absolute inset-0 -z-20 bg-cover bg-[center_55%] opacity-60" style={{ backgroundImage: `url("${labImage}")` }} />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(52,137,33,0.95),rgba(52,137,33,0.84))]" />
      <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
        <Reveal direction="left">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.23em] text-white">Let’s Create Value Together</p>
          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">Partner with Constrochem</h2>
          <p className="mt-5 max-w-[680px] text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
            Get in touch with our team to explore our products, discuss your requirements, or learn how we can support your business with reliable chemical solutions.
          </p>
          <a href="#contact" className="mt-7 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#348921] px-6 text-sm font-semibold text-white transition hover:bg-[#348921] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#348921]">
            Contact Us <ArrowRight size={16} />
          </a>
        </Reveal>
        <StaggerGroup className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
          {support.map(({ label, Icon }) => (
            <StaggerItem key={label} className="flex items-center gap-3 rounded-xl border border-white/15 bg-[#348921]/45 px-4 py-4 backdrop-blur-sm">
              <Icon size={19} strokeWidth={1.6} className="shrink-0 text-white" aria-hidden="true" />
              <span className="text-xs font-medium text-white/90">{label}</span>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}

export default AboutCTA


