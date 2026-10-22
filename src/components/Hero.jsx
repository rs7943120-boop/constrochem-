import { ArrowRight, Globe2, Handshake, Leaf, ShieldCheck } from 'lucide-react'
import ChemicalMotion from './ChemicalMotion'
import heroImage from '../assets/hero imged.png'

const trustFeatures = [
  { label: 'Global\nSourcing', Icon: Globe2 },
  { label: 'Consistent\nQuality', Icon: ShieldCheck },
  { label: 'Trusted\nPartnerships', Icon: Handshake },
  { label: 'Sustainable\nGrowth', Icon: Leaf },
]

function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[780px] overflow-hidden bg-[#FFFFFF] text-[#348921] sm:min-h-[800px] lg:min-h-[600px] lg:h-[min(760px,calc(100svh-76px))] lg:max-h-[720px]">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-[center_42%] lg:bg-[center_48%]"
        style={{ backgroundImage: `url("${heroImage}")` }}
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.94)_39%,rgba(255,255,255,0.78)_68%,rgba(255,255,255,0.8)_100%)] lg:bg-[linear-gradient(90deg,#FFFFFF_0%,rgba(255,255,255,0.98)_30%,rgba(255,255,255,0.89)_44%,rgba(255,255,255,0.28)_64%,rgba(52,137,33,0.08)_100%)]" />
      <div aria-hidden="true" className="absolute inset-y-0 right-0 -z-10 hidden w-[34%] bg-gradient-to-l from-emerald-950/25 to-transparent lg:block" />

      <ChemicalMotion light />
      <div className="relative mx-auto flex min-h-[780px] max-w-[1440px] flex-col px-5 pb-7 pt-10 sm:min-h-[800px] sm:px-8 sm:pt-14 lg:h-full lg:min-h-0 lg:px-10 lg:pb-6 lg:pt-12 xl:px-14">
        <div className="max-w-[700px] lg:max-w-[59%] xl:max-w-[58%]">
          <p className="mb-3 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#348921] sm:text-xs">
            <span className="h-px w-8 bg-[#348921]" />
            Specialty Chemicals <span className="text-[#348921]">·</span> Material Solutions
          </p>
          <h1 className="max-w-[700px] text-[clamp(2.7rem,8.4vw,4rem)] font-bold leading-[0.99] tracking-[-0.055em] text-[#348921] sm:text-6xl lg:text-[clamp(3.2rem,5.25vw,5rem)]">
            Building a<br />Stronger Tomorrow<br />with <span className="text-[#348921]">Better Chemicals</span>
          </h1>
          <p className="mt-5 max-w-[570px] text-sm leading-6 text-[#348921] sm:mt-6 sm:text-base sm:leading-7">
            Constrochem specializes in importing and distributing high-quality products for a wide range of industries, offering reliable material solutions that help businesses innovate, create, and grow.
          </p>
          <div className="mt-6 flex flex-col gap-3 min-[420px]:flex-row sm:mt-7">
            <a href="#products" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#348921] px-6 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(52,137,33,0.16)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#348921] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#348921]">
              Explore Our Products <ArrowRight size={17} strokeWidth={1.8} />
            </a>
            <a href="#about" className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#348921]/20 bg-white/55 px-6 text-sm font-semibold text-[#348921] transition duration-200 hover:border-[#348921]/20 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#348921]">
              About Constrochem
            </a>
          </div>
        </div>

        <aside aria-label="Our commitment" className="mt-8 w-fit max-w-[225px] self-end rounded-bl-2xl border border-white/15 bg-[#348921]/85 px-5 py-5 text-white shadow-xl backdrop-blur-md sm:mt-9 sm:px-6 sm:py-6 lg:absolute lg:right-0 lg:top-0 lg:mt-0 lg:w-[205px] lg:rounded-bl-2xl lg:rounded-br-none lg:rounded-tl-none xl:w-[225px]">
          <p className="text-[13px] font-semibold uppercase leading-[1.65] tracking-[0.16em] sm:text-sm">Chemicals<br />for a cleaner<br />safer and<br />stronger<br />tomorrow</p>
          <div className="mt-4 flex items-center gap-3 text-[#348921]">
            <span className="h-px w-9 bg-white/80" />
            <ArrowRight size={19} strokeWidth={1.5} />
          </div>
        </aside>

        <div className="mt-auto grid grid-cols-2 gap-x-4 gap-y-5 border-t border-[#348921]/20 pt-6 min-[520px]:grid-cols-4 sm:gap-x-6 lg:w-[62%] lg:gap-x-7 lg:border-0 lg:pt-0 xl:w-[58%]">
          {trustFeatures.map(({ label, Icon }) => (
            <div key={label} className="flex items-center gap-2.5 sm:gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/65 text-[#348921] ring-1 ring-[#348921]/10 sm:size-10">
                <Icon size={19} strokeWidth={1.7} />
              </span>
              <span className="whitespace-pre-line text-[11px] font-semibold leading-[1.35] text-[#348921] sm:text-xs">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero


