import { ArrowDown, Handshake, Headset, MessageCircleMore, Network } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import labImage from '../assets/hero imged.png'

const points = [
  { label: 'Quick Response', Icon: MessageCircleMore },
  { label: 'Expert Support', Icon: Headset },
  { label: 'Global Network', Icon: Network },
  { label: 'Long-Term Partnership', Icon: Handshake },
]

function ContactHero() {
  const reduceMotion = useReducedMotion()
  return (
    <section className="relative isolate overflow-hidden bg-[#FFFFFF]">
      <div className="mx-auto grid min-h-[530px] max-w-[1440px] items-center gap-10 px-5 pb-12 pt-16 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:pb-16 lg:pt-20">
        <motion.div initial={reduceMotion ? false : { opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65 }} className="relative z-10 max-w-[720px]">
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#348921]">Contact Us</p>
          <h1 className="text-4xl font-semibold leading-[1.06] tracking-[-0.045em] text-[#348921] sm:text-5xl lg:text-6xl">Let’s Build a <span className="text-[#348921]">Stronger Tomorrow</span> Together</h1>
          <p className="mt-6 max-w-[650px] text-sm leading-7 text-[#348921] sm:text-base sm:leading-8">Partner with Constrochem for high-quality chemical solutions. We are here to answer your queries, discuss your requirements and support your business with reliable products and expertise.</p>
          <a href="#contact-form" className="mt-7 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#348921] px-6 text-sm font-semibold text-white transition hover:bg-[#348921] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#348921]">Send an Inquiry <ArrowDown size={16} /></a>
        </motion.div>
        <div className="relative min-h-[280px] overflow-hidden rounded-[1.75rem] bg-[#348921] shadow-xl sm:min-h-[350px] lg:min-h-[410px]">
          <img src={labImage} alt="Laboratory glassware containing green chemical liquid" className="absolute inset-0 h-full w-full object-cover object-[65%_center]" />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#348921]/10 via-[#348921]/10 to-[#348921]/35" />
          <div className="absolute right-0 top-0 max-w-[210px] rounded-bl-2xl bg-[#348921]/85 px-5 py-5 text-[10px] font-semibold uppercase leading-5 tracking-[0.19em] text-white backdrop-blur-sm sm:max-w-[245px] sm:px-7 sm:py-6 sm:text-xs sm:leading-6">Chemicals for a safer, stronger tomorrow</div>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-5 border-t border-[#348921]/20 pt-6 sm:grid-cols-4 lg:col-span-2 lg:gap-5">
          {points.map(({ label, Icon }) => <div key={label} className="flex items-center gap-2.5 sm:gap-3"><span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white text-[#348921]"><Icon size={17} strokeWidth={1.7} aria-hidden="true" /></span><span className="text-xs font-semibold text-[#348921] sm:text-sm">{label}</span></div>)}
        </div>
      </div>
    </section>
  )
}

export default ContactHero

