import { ArrowRight, Building2, Globe2, Mail, MapPin } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

function DottedWorld() {
  return <svg viewBox="0 0 500 330" role="img" aria-label="Pale green dotted illustration of a world map" className="h-auto w-full text-[#348921]/20"><defs><pattern id="world-dots" width="12" height="12" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.7" fill="currentColor" /></pattern></defs><path fill="url(#world-dots)" d="M37 84l23-23 43-12 29 10 13 22-12 15-27 3-15 17-26-4-14 23-22-10-13-18 8-23zm83 71 24-18 31 3 13 17-7 29-13 20-8 33-21 18-16-27-2-36-13-20zm85-109 35-22 42 7 16 18 40 6 25 23-8 16-30 3-18 17-25-3-15 19-24-8-13-25-25-3-20-22zm62 91 23-17 38 8 25 23 3 32-22 20-29-8-18 19-18-16-21-8-7-28zm89 42 23-12 33 7 15 21-11 20-27 3-25-13z" /></svg>
}

const locations = [
  { eyebrow: 'Head Office', title: 'India', description: 'Constrochem', address: 'A-702, Business Park, Andheri East, Mumbai – 400093, India', Icon: Building2, email: true },
  { eyebrow: 'Regional Office', title: 'New Delhi', description: 'Address and contact details not provided', address: 'Regional office details to be confirmed.', Icon: MapPin },
  { eyebrow: 'International Sales', title: 'Global Inquiries', description: 'For global partnerships and export inquiries.', address: 'Contact details can be configured when available.', Icon: Globe2 },
]

function OfficeLocations() {
  const reduceMotion = useReducedMotion()
  return (
    <section aria-labelledby="locations-heading" className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-12">
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.23em] text-[#348921]">Find our offices</p>
            <h2 id="locations-heading" className="text-3xl font-semibold tracking-[-0.04em] text-[#348921] sm:text-4xl">Our Locations</h2>
            <p className="mt-4 max-w-[480px] text-sm leading-7 text-[#348921]">Constrochem serves customers across India and around the world. Our strategic presence enables efficient service and strong partnerships.</p>
            <button type="button" disabled aria-label="View on Google Maps; map link not configured" className="mt-6 inline-flex min-h-10 w-fit cursor-not-allowed items-center gap-2 rounded-full border border-[#348921]/20 px-4 text-xs font-semibold text-[#348921]/70">View on Google Maps <ArrowRight size={15} /></button>
            <p className="mt-2 text-[11px] text-[#348921]">Map link not configured.</p>
            <div className="mt-5 max-w-[520px]"><DottedWorld /></div>
          </div>
          <div className="grid gap-3">
            {locations.map(({ eyebrow, title, description, address, Icon, email }, index) => <motion.article key={title} initial={reduceMotion ? false : { opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.42, delay: index * 0.07 }} className="group flex gap-4 rounded-2xl border border-[#348921]/20 bg-[#FFFFFF] p-5 transition hover:-translate-y-0.5 hover:border-[#348921]/20 hover:shadow-lg sm:p-6"><span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-[#348921]"><Icon size={19} strokeWidth={1.7} aria-hidden="true" /></span><div><p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#348921]">{eyebrow}</p><h3 className="mt-1 text-base font-semibold text-[#348921]">{title}</h3><p className="mt-1 text-xs text-[#348921]">{description}</p><p className="mt-2 text-xs leading-5 text-[#348921]">{address}</p>{email && <a href="mailto:info@constrochem.co.in" className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-[#348921] hover:text-[#348921]"><Mail size={14} />info@constrochem.co.in</a>}</div></motion.article>)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OfficeLocations

