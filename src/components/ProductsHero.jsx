import { ArrowDown, Globe2, PackageCheck, ShieldCheck, Truck } from 'lucide-react'
import ChemicalMotion from './ChemicalMotion'
import { motion, useReducedMotion } from 'framer-motion'
import labImage from '../assets/hero imged.png'

const trustItems = [
  { label: 'Global Sourcing', Icon: Globe2 },
  { label: 'Consistent Quality', Icon: ShieldCheck },
  { label: 'Wide Product Range', Icon: PackageCheck },
  { label: 'Reliable Supply Chain', Icon: Truck },
]

function ProductsHero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative isolate overflow-hidden bg-[#348921] text-white">
      <div aria-hidden="true" className="absolute inset-0 -z-20 bg-cover bg-[center_55%]" style={{ backgroundImage: `url("${labImage}")` }} />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(52,137,33,0.96)_0%,rgba(52,137,33,0.88)_52%,rgba(52,137,33,0.48)_100%)]" />
      <ChemicalMotion />
      <div className="mx-auto grid min-h-[510px] max-w-[1440px] items-center gap-10 px-5 pb-14 pt-20 sm:px-8 sm:pb-16 lg:min-h-[570px] lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        <motion.div initial={reduceMotion ? false : { opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="max-w-[740px]">
          <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.25em] text-white">Our Products</p>
          <h1 className="text-4xl font-semibold leading-[1.06] tracking-[-0.045em] sm:text-5xl lg:text-6xl">High-Quality Chemical Materials for <span className="text-white">Diverse Industries</span></h1>
          <p className="mt-6 max-w-[660px] text-sm leading-7 text-white/80 sm:text-base sm:leading-8">At Constrochem, we import and distribute premium chemical products from trusted global partners, delivering consistent quality, reliability, and innovative solutions for a wide range of industrial applications.</p>
          <a href="#product-categories" className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#348921] px-6 text-sm font-semibold text-white transition hover:bg-[#348921] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#348921]">Explore Categories <ArrowDown size={17} /></a>
        </motion.div>
        <div aria-hidden="true" className="hidden min-h-[270px] items-end justify-end lg:flex">
          <div className="max-w-[285px] border-l border-[#348921]/20 pl-5 text-xs uppercase leading-6 tracking-[0.22em] text-white/75">Thoughtfully sourced materials<br /><span className="text-white">for performance that lasts</span></div>
        </div>
      </div>
      <div className="border-t border-white/10 bg-white text-[#348921]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-x-4 gap-y-5 px-5 py-6 sm:px-8 md:grid-cols-4 lg:px-10">
          {trustItems.map(({ label, Icon }) => <div key={label} className="flex items-center gap-3"><Icon size={20} strokeWidth={1.7} className="shrink-0 text-[#348921]" aria-hidden="true" /><span className="text-xs font-semibold sm:text-sm">{label}</span></div>)}
        </div>
      </div>
    </section>
  )
}

export default ProductsHero



