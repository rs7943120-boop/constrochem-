import { motion, useReducedMotion } from 'framer-motion'
import { Reveal } from './AboutMotion'

const milestones = [
  { year: '2010', detail: 'Established Constrochem' },
  { year: '2013', detail: 'Expanded Product Portfolio' },
  { year: '2016', detail: 'Built Global Partnerships' },
  { year: '2019', detail: 'Served Diverse Industries' },
  { year: '2022', detail: 'Strengthened Supply Chain' },
  { year: 'Today', detail: 'Continuing to Grow Together' },
]

const mountainImage = 'https://images.unsplash.com/photo-1777137732939-919b55a91b80?auto=format&fit=crop&w=2200&q=80'

function CompanyJourney() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative isolate overflow-hidden bg-[#FFFFFF] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div aria-hidden="true" className="absolute inset-0 -z-20 bg-cover bg-center opacity-[0.18]" style={{ backgroundImage: `url("${mountainImage}")` }} />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(255,255,255,0.82))]" />
      <div className="mx-auto max-w-[1440px]">
        <Reveal className="text-center">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.23em] text-[#348921]">Milestones</p>
          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#348921] sm:text-5xl">Our Journey</h2>
          <p className="mt-4 text-sm text-[#348921] sm:text-base">A journey built on trust, quality and lasting partnerships.</p>
        </Reveal>

        <div className="relative mt-12 before:absolute before:bottom-5 before:left-[11px] before:top-5 before:w-px before:bg-[#348921]/25 sm:mt-16 sm:before:hidden 2xl:after:absolute 2xl:after:left-4 2xl:after:right-4 2xl:after:top-0 2xl:after:h-px 2xl:after:bg-[#348921]/20">
        <ol className="grid gap-5 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-3 lg:gap-x-7 lg:gap-y-10 2xl:grid-cols-6 2xl:gap-4">
          {milestones.map(({ year, detail }, index) => (
            <motion.li key={year} initial={reduceMotion ? false : { opacity: 0, y: 20 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: reduceMotion ? 0 : index * 0.07 }} className="relative ml-9 h-full rounded-xl border border-[#348921]/20 bg-white/85 p-5 shadow-[0_8px_24px_rgba(52,137,33,0.04)] backdrop-blur-sm sm:ml-0 sm:min-h-[150px] sm:p-5 lg:p-6">
                <span aria-hidden="true" className="absolute -left-[27px] top-6 size-3 rounded-full border-[3px] border-white bg-[#348921] ring-1 ring-[#348921]/20 sm:left-0 sm:top-[-7px]" />
                <p className="text-2xl font-semibold tracking-tight text-[#348921]">{year}</p>
                <p className="mt-2 text-sm font-medium leading-5 text-[#348921]">{detail}</p>
            </motion.li>
          ))}
        </ol>
        </div>
      </div>
    </section>
  )
}

export default CompanyJourney

