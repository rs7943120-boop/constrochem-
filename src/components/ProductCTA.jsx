import { ArrowRight, BadgeCheck, Headset, Layers3, Truck } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

const benefits = [
  { label: 'Wide Product Range', Icon: Layers3 },
  { label: 'Technical Support', Icon: Headset },
  { label: 'Competitive Pricing', Icon: BadgeCheck },
  { label: 'Reliable Delivery', Icon: Truck },
]

function ProductCTA() {
  const reduceMotion = useReducedMotion()
  return (
    <section className="relative isolate overflow-hidden bg-[#348921] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div aria-hidden="true" className="absolute inset-0 -z-20 bg-cover bg-[center_52%] opacity-35" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2000&q=85)' }} />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(105deg,rgba(52,137,33,0.97),rgba(52,137,33,0.86))]" />
      <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
        <motion.div initial={reduceMotion ? false : { opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.24em] text-white">Let’s find the right fit</p>
          <h2 className="max-w-[740px] text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">Looking for a Specific Chemical Solution?</h2>
          <p className="mt-5 max-w-[680px] text-sm leading-7 text-white/75 sm:text-base">Get in touch with our team to discuss your requirements. We are committed to providing the right products and support for your business.</p>
          <a href="/about#contact" className="mt-7 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#348921] px-6 text-sm font-semibold text-white transition hover:bg-[#348921] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#348921]">Contact Us <ArrowRight size={17} /></a>
        </motion.div>
        <div className="grid grid-cols-2 gap-3">
          {benefits.map(({ label, Icon }, index) => <motion.div key={label} initial={reduceMotion ? false : { opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.07 }} className="flex min-h-[74px] items-center gap-3 rounded-xl border border-white/15 bg-[#348921]/35 px-3 backdrop-blur-sm sm:px-4"><Icon size={19} className="shrink-0 text-white" strokeWidth={1.7} aria-hidden="true" /><span className="text-xs font-medium text-white/90 sm:text-sm">{label}</span></motion.div>)}
        </div>
      </div>
    </section>
  )
}

export default ProductCTA


