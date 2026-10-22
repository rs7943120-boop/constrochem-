import { AtSign, Building2, Link, MapPin, Phone, MessageCircle } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

const contactItems = [
  { title: 'Email Us', text: 'info@constrochem.co.in', href: 'mailto:info@constrochem.co.in', Icon: AtSign },
  { title: 'Call Us', text: 'Phone number not provided', Icon: Phone },
  { title: 'WhatsApp', text: 'Number not configured', Icon: MessageCircle },
  { title: 'Our Office', text: 'A-702, Business Park, Andheri East, Mumbai – 400093, India', Icon: MapPin },
]

function ContactInformation() {
  const reduceMotion = useReducedMotion()
  return (
    <section aria-labelledby="get-in-touch-heading" className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <motion.div initial={reduceMotion ? false : { opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#348921]">We’re here to help</p>
          <h2 id="get-in-touch-heading" className="text-3xl font-semibold tracking-[-0.04em] text-[#348921] sm:text-4xl">Get In <span className="text-[#348921]">Touch</span></h2>
          <p className="mt-5 max-w-[520px] text-sm leading-7 text-[#348921] sm:text-base">We are always happy to assist you. Reach out to our team for product inquiries, technical support, quotations or any other information. Our experts will get back to you promptly.</p>
          <div className="mt-7 flex items-center gap-3 border-t border-[#348921]/20 pt-5">
            <span className="flex size-11 items-center justify-center rounded-full bg-white text-[#348921]"><Link size={19} aria-hidden="true" /></span>
            <div><p className="text-xs font-semibold text-[#348921]">Follow Us</p><p className="mt-1 text-xs text-[#348921]">Company LinkedIn URL not configured</p></div>
          </div>
        </motion.div>
        <div className="grid gap-3 sm:grid-cols-2">
          {contactItems.map(({ title, text, href, Icon }, index) => {
            const content = <><span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-[#348921]"><Icon size={19} strokeWidth={1.7} aria-hidden="true" /></span><span className="min-w-0"><span className="block text-xs font-semibold text-[#348921]">{title}</span><span className="mt-1.5 block text-xs leading-5 text-[#348921]">{text}</span></span></>
            return <motion.div key={title} initial={reduceMotion ? false : { opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.06 }} className="flex min-h-[112px] items-start gap-3 rounded-2xl border border-[#348921]/20 bg-[#FFFFFF] p-4 sm:p-5">{href ? <a href={href} className="flex items-start gap-3 focus-visible:outline-2 focus-visible:outline-[#348921]">{content}</a> : content}</motion.div>
          })}
          <div className="flex min-h-[112px] items-start gap-3 rounded-2xl border border-[#348921]/20 bg-[#FFFFFF] p-4 sm:col-span-2 sm:p-5"><span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-[#348921]"><Building2 size={19} aria-hidden="true" /></span><span><span className="block text-xs font-semibold text-[#348921]">Regional Office</span><span className="mt-1.5 block text-xs leading-5 text-[#348921]">No regional office address provided</span></span></div>
        </div>
      </div>
    </section>
  )
}

export default ContactInformation

