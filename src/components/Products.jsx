import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  Boxes,
  FlaskConical,
  Package,
  PaintBucket,
  Shapes,
  Sparkles,
} from 'lucide-react'
import heroImage from '../assets/hero imged.png'

const products = [
  { title: 'Micronized Wax', description: 'High-performance waxes for multiple industrial applications.', image: 'https://images.unsplash.com/photo-1750639096812-6f2b5e6c024b?auto=format&fit=crop&w=720&q=82', alt: 'Fine white micronized powder', Icon: Sparkles },
  { title: 'Coatings & Paints', description: 'Speciality raw materials for durable and high-quality finishes.', image: 'https://images.unsplash.com/photo-1769173129390-a57de2512782?auto=format&fit=crop&w=720&q=82', alt: 'Green paint can for coating and finishing work', Icon: PaintBucket },
  { title: 'Adhesives', description: 'Advanced solutions for strong and reliable bonding.', image: 'https://images.unsplash.com/photo-1646183524128-52ec1d41905c?auto=format&fit=crop&w=720&q=82', alt: 'Adhesive glue prepared for precise application', Icon: Package },
  { title: 'Curing Chemicals & Resins', description: 'Chemicals and resins for high-performance applications.', image: 'https://images.unsplash.com/photo-1709660628820-cfdde9b6b634?auto=format&fit=crop&w=720&q=82', alt: 'Amber liquid in laboratory glassware', Icon: FlaskConical },
  { title: 'Polypropylenes', description: 'High-grade polypropylene materials for industrial use.', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Polypropylene_Pellets_-_DPLA_-_f7c2fa29d14525ce21219452f4a1a316.jpg', alt: 'Small white polypropylene pellets', Icon: Boxes },
  { title: 'Polymers', description: 'A wide range of polymers to meet diverse industry needs.', image: 'https://images.unsplash.com/photo-1561104125-683f1bb4d7a3?auto=format&fit=crop&w=720&q=82', alt: 'Close-up of fine white polymer material', Icon: Shapes },
]

const sectionReveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

const listReveal = {
  hidden: {},
  show: { transition: { delayChildren: 0.12, staggerChildren: 0.1 } },
}

const cardReveal = {
  hidden: (index) => ({ opacity: 0, y: 34, x: index % 2 === 0 ? -18 : 18 }),
  show: { opacity: 1, x: 0, y: 0, transition: { type: 'spring', stiffness: 85, damping: 18 } },
}

function Products() {
  const reduceMotion = useReducedMotion()
  const initialState = reduceMotion ? false : 'hidden'

  return (
    <section id="products" aria-labelledby="products-heading" className="relative isolate overflow-hidden bg-[#FFFFFF] px-5 pb-12 pt-14 sm:px-8 sm:pb-16 sm:pt-16 lg:px-10 lg:pt-20">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-20 h-[520px] bg-cover bg-[center_44%] sm:h-[490px] lg:h-[520px] 2xl:h-[440px]" style={{ backgroundImage: `url("${heroImage}")` }} />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-[linear-gradient(110deg,rgba(52,137,33,0.97)_0%,rgba(52,137,33,0.92)_52%,rgba(52,137,33,0.94)_100%)] sm:h-[490px] lg:h-[520px] 2xl:h-[440px]" />

      <div className="mx-auto max-w-[1640px]">
        <motion.div variants={sectionReveal} initial={initialState} whileInView="show" viewport={{ once: true, amount: 0.35 }} className="grid gap-7 text-white md:grid-cols-[1.1fr_0.9fr] md:items-end md:gap-10 lg:gap-20">
          <div>
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.24em] text-[#348921]">Our Products</p>
            <h2 id="products-heading" className="max-w-[760px] text-3xl font-semibold leading-[1.1] tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
              High-Quality Materials for <span className="text-[#348921]">Diverse Industries</span>
            </h2>
          </div>
          <div className="flex flex-col items-start gap-5 md:items-end">
            <p className="max-w-[480px] text-sm leading-6 text-[#348921]/75 sm:text-base sm:leading-7 md:text-right">
              We import and distribute premium chemical products from trusted global partners, ensuring consistent quality, reliability, and performance.
            </p>
            <motion.a href="#products" whileHover={reduceMotion ? undefined : { scale: 1.025 }} whileTap={reduceMotion ? undefined : { scale: 0.98 }} className="group inline-flex min-h-11 items-center gap-3 rounded-full bg-[#348921] px-5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#348921] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#348921]">
              View All Products <motion.span className="transition-transform group-hover:translate-x-1" whileHover={reduceMotion ? undefined : { x: 4 }} transition={{ type: 'spring', stiffness: 300, damping: 18 }}><ArrowRight size={17} /></motion.span>
            </motion.a>
          </div>
        </motion.div>

        <motion.div variants={listReveal} initial={initialState} whileInView="show" viewport={{ once: true, amount: 0.08 }} className="relative mt-10 grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 sm:mt-12 sm:gap-5 lg:grid-cols-3 2xl:grid-cols-6 2xl:gap-4">
          {products.map(({ title, description, image, alt, Icon }, index) => (
            <motion.a key={title} href="#contact" aria-label={`${title}: contact us for product information`} custom={index} variants={cardReveal} whileHover={reduceMotion ? undefined : { y: -7, boxShadow: '0 22px 40px rgba(52,137,33,0.20)' }} whileTap={reduceMotion ? undefined : { scale: 0.99 }} className="group flex min-w-0 flex-col overflow-hidden rounded-xl border border-[#348921]/20 bg-white text-[#348921] shadow-[0_10px_28px_rgba(52,137,33,0.14)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#348921]">
              <div className="aspect-[1.28/1] overflow-hidden bg-white">
                <motion.img src={image} alt={alt} loading="lazy" onError={(event) => { event.currentTarget.src = heroImage }} whileHover={reduceMotion ? undefined : { scale: 1.04 }} transition={{ duration: 0.45, ease: 'easeOut' }} className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-1 flex-col p-4 sm:p-5 2xl:p-4">
                <Icon size={21} strokeWidth={1.7} className="mb-3 text-[#348921]" aria-hidden="true" />
                <h3 className="text-[15px] font-semibold leading-snug text-[#348921] 2xl:text-sm">{title}</h3>
                <p className="mt-2 flex-1 text-xs leading-[1.65] text-[#348921]">{description}</p>
                <span className="mt-4 flex size-8 items-center justify-center self-end rounded-full border border-[#348921]/20 text-[#348921] transition duration-200 group-hover:translate-x-1 group-hover:border-[#348921] group-hover:bg-[#348921] group-hover:text-white"><ArrowRight size={15} strokeWidth={1.8} /></span>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <p className="mx-auto mt-7 max-w-[1640px] text-[10px] leading-4 text-[#348921]">
          Polypropylene pellet image: <a className="underline underline-offset-2 hover:text-[#348921]" href="https://commons.wikimedia.org/wiki/File:Polypropylene_Pellets_-_DPLA_-_f7c2fa29d14525ce21219452f4a1a316.jpg" target="_blank" rel="noreferrer">Science History Institute, CC BY 4.0</a>.
        </p>
      </div>
    </section>
  )
}

export default Products

