import { motion, useReducedMotion } from 'framer-motion'
import { FlaskConical, Layers3, PackageCheck, Truck } from 'lucide-react'
import heroImage from '../assets/hero imged.png'

const facilityImage = 'https://images.unsplash.com/photo-1769778674824-e69f58d7c55d?auto=format&fit=crop&w=2400&q=85'

const benefits = [
  { title: 'High-Quality Products', description: 'Sourced from trusted global partners.', Icon: PackageCheck },
  { title: 'Wide Industry Applications', description: 'Serving multiple industries with diverse needs.', Icon: Layers3 },
  { title: 'Reliable Supply Chain', description: 'Consistent availability and timely delivery.', Icon: Truck },
  { title: 'Technical Expertise', description: 'In-depth product knowledge and support.', Icon: FlaskConical },
]

const headingReveal = {
  hidden: { opacity: 0, x: -38 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const cardList = {
  hidden: {},
  show: { transition: { delayChildren: 0.15, staggerChildren: 0.12 } },
}

const cardReveal = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

function WhyChooseUs() {
  const reduceMotion = useReducedMotion()
  const initialState = reduceMotion ? false : 'hidden'

  return (
    <section aria-labelledby="why-choose-heading" className="relative isolate flex min-h-[710px] flex-col overflow-hidden bg-[#348921] px-5 py-14 text-white sm:min-h-[680px] sm:px-8 sm:py-16 lg:min-h-[660px] lg:justify-between lg:px-10 lg:py-20">
      <div aria-hidden="true" className="absolute inset-0 -z-20 bg-cover bg-[center_48%]" style={{ backgroundImage: `url("${facilityImage}"), url("${heroImage}")` }} />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(52,137,33,0.91)_0%,rgba(52,137,33,0.78)_49%,rgba(52,137,33,0.68)_100%)]" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(52,137,33,0.92)_0%,transparent_58%)]" />

      <div className="mx-auto w-full max-w-[1440px]">
        <motion.div
          variants={headingReveal}
          initial={initialState}
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="max-w-[850px]"
        >
          <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.25em] text-white">Why Choose Constrochem</p>
          <h2 id="why-choose-heading" className="max-w-[820px] text-4xl font-semibold leading-[1.06] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
            Your Trusted Partner in <span className="text-white">Chemical Solutions</span>
          </h2>
          <p className="mt-5 max-w-[590px] text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
            We go beyond supply. We deliver value through quality, expertise and long-term partnerships.
          </p>
        </motion.div>
      </div>

      <motion.div
        variants={cardList}
        initial={initialState}
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
        className="mx-auto mt-12 grid w-full max-w-[1440px] grid-cols-1 gap-3 min-[480px]:grid-cols-2 sm:mt-14 sm:gap-4 lg:mt-16 lg:grid-cols-4"
      >
        {benefits.map(({ title, description, Icon }) => (
          <motion.article
            key={title}
            variants={cardReveal}
            whileHover={reduceMotion ? undefined : { y: -5, borderColor: 'rgba(52,137,33, 0.55)' }}
            className="rounded-xl border border-white/15 bg-[#348921]/50 p-5 shadow-[0_12px_35px_rgba(52,137,33,0.14)] backdrop-blur-md transition-colors duration-300 sm:p-6"
          >
            <Icon size={24} strokeWidth={1.6} className="mb-5 text-white" aria-hidden="true" />
            <h3 className="text-sm font-semibold leading-snug text-white sm:text-base">{title}</h3>
            <p className="mt-2 text-xs leading-5 text-white/70 sm:text-sm sm:leading-6">{description}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}

export default WhyChooseUs


