import { Reveal } from './AboutMotion'
import ChemicalMotion from './ChemicalMotion'
import labImage from '../assets/hero imged.png'

function AboutHero() {
  return (
    <section id="about" className="relative isolate flex min-h-[540px] items-center overflow-hidden bg-[#348921] px-5 py-20 text-white sm:min-h-[590px] sm:px-8 lg:min-h-[640px] lg:px-10">
      <div aria-hidden="true" className="absolute inset-0 -z-20 bg-cover bg-[center_42%]" style={{ backgroundImage: `url("${labImage}")` }} />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(52,137,33,0.88)_0%,rgba(52,137,33,0.74)_52%,rgba(52,137,33,0.2)_100%)]" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#348921]/45 to-transparent" />
      <ChemicalMotion />
      <div className="mx-auto w-full max-w-[1440px]">
        <span id="home" aria-hidden="true" className="absolute top-0" />
        <Reveal direction="left" className="max-w-[780px]">
          <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.25em] text-white">About Constrochem</p>
          <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
            Reliable Chemical Solutions for a <span className="text-white">Better Tomorrow</span>
          </h1>
          <span className="mt-7 block h-px w-16 bg-white/80" />
        </Reveal>
      </div>
    </section>
  )
}

export default AboutHero



