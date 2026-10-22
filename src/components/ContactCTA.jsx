import { ArrowRight, Globe2, Handshake, Leaf, Truck } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

const strengths = [
  { label: 'Sustainable Solutions', Icon: Leaf },
  { label: 'Reliable Supply Chain', Icon: Truck },
  { label: 'Technical Expertise', Icon: Handshake },
  { label: 'Global Presence', Icon: Globe2 },
]

function ContactCTA() {
  const reduceMotion = useReducedMotion()
  return (
    <section className="relative isolate overflow-hidden bg-[#348921] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div aria-hidden="true" className="absolute inset-0 -z-20 bg-cover bg-[center_55%] opacity-35" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2000&q=85)' }} />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(52,137,33,0.97),rgba(52,137,33,0.87))]" />
      <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-14">
        <motion.div initial={reduceMotion ? false : { opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.23em] text-white">Partner with Constrochem</p>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl">Together for a Sustainable Future</h2>
          <p className="mt-5 max-w-[650px] text-sm leading-7 text-white/75 sm:text-base">Get in touch today and discover how our chemical solutions can add value to your business.</p>
          <a href="/contact#contact-form" className="group mt-7 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#348921] px-6 text-sm font-semibold text-white transition hover:bg-[#348921] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#348921]">Contact Us <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></a>
        </motion.div>
        <div className="grid grid-cols-2 gap-3">{strengths.map(({ label, Icon }, index) => <motion.div key={label} initial={reduceMotion ? false : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.06 }} className="flex min-h-[72px] items-center gap-3 rounded-xl border border-white/15 bg-[#348921]/40 px-3 backdrop-blur-sm sm:px-4"><Icon size={18} className="shrink-0 text-white" aria-hidden="true" /><span className="text-xs font-medium text-white/90 sm:text-sm">{label}</span></motion.div>)}</div>
      </div>
    </section>
  )
}

export default ContactCTA


