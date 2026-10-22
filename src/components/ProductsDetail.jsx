import { ArrowRight, Check } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import labImage from '../assets/hero imged.png'

const details = [
  { id: 'wax-products', title: 'Wax Products', description: 'A wide range of micronized waxes, dispersions, emulsions and commodity waxes for high-performance industrial applications.', image: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&w=900&q=82', alt: 'Fine white wax powder in a laboratory', items: ['Micronized Polyethylene Wax', 'Micronized Fisher-Tropsch Wax', 'Micronized PTFE Wax', 'Micronized Amide Wax', 'Micronized Hybrid Wax', 'Micronized PTFE Modified PE Wax', 'Micronized PTFE Modified FT Wax', 'Micronized Carnauba-Paraffin Wax', 'Wax Dispersion', 'Wax Emulsion', 'Other Commodity Wax'] },
  { id: 'uv-products', title: 'UV Products', description: 'Specialized UV raw materials for coatings, inks, adhesives and advanced materials.', image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=82', alt: 'Glass laboratory equipment for UV materials', items: ['Monomers', 'Oligomers', 'Photoinitiators', 'UV Absorbers', 'UV Light Stabilizers'] },
  { id: 'carbon-black', title: 'Carbon Black ASTM Grade', description: 'High-quality carbon black grades for various industrial applications.', image: 'https://images.unsplash.com/photo-1615485925763-867862f9e8c5?auto=format&fit=crop&w=900&q=82', alt: 'Fine black carbon powder', items: ['N-220', 'N-330', 'N-326', 'N-339', 'N-550', 'N-660'] },
  { id: 'antioxidant', title: 'Antioxidant', description: 'Reliable antioxidant solutions for enhanced stability and performance.', image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=900&q=82', alt: 'Amber chemical liquid in glassware', items: ['BHT — Butylated Hydroxytoluene', 'Antioxidant 1010', 'Antioxidant 1076'] },
  { id: 'speciality-grade', title: 'Speciality Grade', description: 'High-performance speciality chemicals for advanced industrial needs.', image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=900&q=82', alt: 'Scientific molecular model in a laboratory', items: ['Silanes', 'Specialty Peroxide'] },
  { id: 'soda-ash', title: 'Soda Ash', description: 'Quality soda ash for a wide range of industrial applications.', image: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&w=900&q=82', alt: 'White soda ash granules', items: ['Soda Ash Light', 'Soda Ash Dense'] },
  { id: 'curing-agents', title: 'Curing Agents', description: 'High-performance curing agents for coatings, adhesives and composites.', image: 'https://images.unsplash.com/photo-1581093458791-9d42e3c5e1a7?auto=format&fit=crop&w=900&q=82', alt: 'Blue liquid in laboratory glassware', items: ['Polyether Amine — MA 223', 'Polyether Amine — MA 240'] },
  { id: 'other-products', title: 'Other Products', description: 'A range of specialty chemical products for various industrial applications.', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Polypropylene_Pellets_-_DPLA_-_f7c2fa29d14525ce21219452f4a1a316.jpg', alt: 'White polymer pellets', items: ['Chlorinated Polypropylene Ester Soluble', 'Chlorinated Polypropylene Co-solvent Soluble', 'Chlorinated Ethylene Vinyl Acetate', 'MP-45 Copolymer of Vinyl Chloride and Vinyl Isobutyl Ether', 'Hydrocarbon Resin C5 Resin & C9 Resin', 'Thermoplastic Acrylic Resin', 'Dispersing Agent', 'Gum Rosin'] },
]

function ProductsDetail() {
  const reduceMotion = useReducedMotion()
  return (
    <section aria-labelledby="product-detail-heading" className="bg-[#FFFFFF] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14"><p className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#348921]">Carefully selected materials</p><h2 id="product-detail-heading" className="text-3xl font-semibold tracking-[-0.04em] text-[#348921] sm:text-4xl">Our Products <span className="text-[#348921]">in Detail</span></h2><p className="mt-4 text-sm leading-7 text-[#348921] sm:text-base">We offer a wide range of high-quality chemical products to meet the diverse requirements of our customers. Each product category is carefully sourced and selected for its performance, consistency, and reliability.</p></div>
        <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
          {details.map((product, index) => <motion.article id={product.id} key={product.id} initial={reduceMotion ? false : { opacity: 0, x: index % 2 ? 22 : -22, y: 12 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: 0.5 }} className={`scroll-mt-24 overflow-hidden rounded-2xl border border-[#348921]/20 bg-white shadow-sm ${product.id === 'wax-products' || product.id === 'other-products' ? 'lg:col-span-2' : ''}`}>
            <div className={`grid h-full ${product.id === 'wax-products' || product.id === 'other-products' ? 'md:grid-cols-[1.25fr_0.75fr]' : 'md:grid-cols-[1fr_0.8fr]'}`}>
              <div className="p-5 sm:p-7 lg:p-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#348921]">{String(index + 1).padStart(2, '0')} / Product category</p>
                <h3 className="mt-2 text-xl font-semibold tracking-[-0.025em] text-[#348921] sm:text-2xl">{product.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#348921]">{product.description}</p>
                <ul className={`mt-5 grid gap-x-4 gap-y-2.5 ${product.id === 'wax-products' || product.id === 'other-products' ? 'sm:grid-cols-2' : ''}`}>
                  {product.items.map((item) => <li key={item} className="flex items-start gap-2 text-xs leading-5 text-[#348921]"><Check size={14} className="mt-0.5 shrink-0 text-[#348921]" aria-hidden="true" />{item}</li>)}
                </ul>
                <a href="/about#contact" className="mt-6 inline-flex min-h-10 items-center gap-2 rounded-full bg-[#348921] px-5 text-xs font-semibold text-white transition hover:bg-[#348921] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#348921]">Enquire Now <ArrowRight size={15} /></a>
              </div>
              <div className={`min-h-[220px] overflow-hidden bg-white ${product.id === 'wax-products' || product.id === 'other-products' ? 'md:min-h-full' : 'md:min-h-[320px]'} ${index % 2 ? 'md:order-first' : ''}`}><img src={product.image} alt={product.alt} loading="lazy" onError={(event) => { event.currentTarget.src = labImage }} className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]" /></div>
            </div>
          </motion.article>)}
        </div>
      </div>
    </section>
  )
}

export default ProductsDetail

