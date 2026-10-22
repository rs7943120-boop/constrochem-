import { ArrowUpRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import labImage from '../assets/hero imged.png'

const categories = [
  ['wax-products', 'Wax Products', 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&w=800&q=82', 'Fine white micronized wax powder'],
  ['uv-products', 'UV Products', 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=82', 'Laboratory glassware and UV materials'],
  ['carbon-black', 'Carbon Black ASTM Grade', 'https://images.unsplash.com/photo-1615485925763-867862f9e8c5?auto=format&fit=crop&w=800&q=82', 'Fine black carbon powder'],
  ['antioxidant', 'Antioxidant', 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=800&q=82', 'Amber chemical liquid in glassware'],
  ['speciality-grade', 'Speciality Grade', 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=82', 'Scientific molecular model in a laboratory'],
  ['soda-ash', 'Soda Ash', 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&w=800&q=82', 'White soda ash granules'],
  ['curing-agents', 'Curing Agents', 'https://images.unsplash.com/photo-1581093458791-9d42e3c5e1a7?auto=format&fit=crop&w=800&q=82', 'Blue liquid in laboratory glassware'],
  ['other-products', 'Other Products', 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Polypropylene_Pellets_-_DPLA_-_f7c2fa29d14525ce21219452f4a1a316.jpg', 'White polymer granules'],
]

function ProductCategories() {
  const reduceMotion = useReducedMotion()
  return (
    <section id="product-categories" aria-labelledby="category-heading" className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#348921]">Explore our range</p>
          <h2 id="category-heading" className="text-3xl font-semibold tracking-[-0.04em] text-[#348921] sm:text-4xl">Product Categories</h2>
          <p className="mt-4 text-sm leading-7 text-[#348921] sm:text-base">Explore our comprehensive range of high-performance chemical products, sourced globally to meet the evolving needs of various industries.</p>
        </motion.div>
        <div className="grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {categories.map(([id, title, image, alt], index) => <motion.a key={id} href={`#${id}`} initial={reduceMotion ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.45, delay: index % 4 * 0.06 }} className="group overflow-hidden rounded-2xl border border-[#348921]/20 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#348921]">
            <div className="aspect-[1.55/1] overflow-hidden bg-white"><img src={image} alt={alt} loading="lazy" onError={(event) => { event.currentTarget.src = labImage }} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div>
            <div className="flex min-h-[74px] items-center justify-between gap-3 px-4 py-4 sm:px-5"><h3 className="text-sm font-semibold leading-snug text-[#348921]">{title}</h3><span aria-hidden="true" className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-[#348921] transition group-hover:bg-[#348921] group-hover:text-white"><ArrowUpRight size={16} /></span></div>
          </motion.a>)}
        </div>
      </div>
    </section>
  )
}

export default ProductCategories

