import { ArrowRight, Atom, Boxes, Building2, CarFront, Check, CircleDot, Cpu, Factory, FlaskConical, Globe2, Layers3, Leaf, Package, Paintbrush, ShieldCheck, Shirt, Truck } from 'lucide-react'
import ChemicalMotion from '../components/ChemicalMotion'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import heroImage from '../assets/hero imged.png'

const industries = [
  { slug: 'inks-coatings-adhesives', title: 'Inks, Coatings & Adhesives', description: 'Our waxes, resins, UV chemicals and additives enhance performance, durability and finish in paints, coatings, inks and adhesives.', image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1000&q=85', alt: 'Colorful paint cans and brushes in a paint studio', Icon: Paintbrush },
  { slug: 'plastics-polymers', title: 'Plastics & Polymers', description: 'Our products improve processing, provide desired properties and enhance the performance of a wide range of polymer applications.', image: 'https://images.unsplash.com/photo-1605600659873-d808a13e4d9a?auto=format&fit=crop&w=1000&q=85', alt: 'Plastic polymer pellets ready for processing', Icon: Boxes },
  { slug: 'construction-chemicals', title: 'Construction Chemicals', description: 'Our specialty chemicals support high-performance construction materials, offering durability, workability and long-term reliability.', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=85', alt: 'Modern building under construction', Icon: Building2 },
  { slug: 'automotive', title: 'Automotive', description: 'Our chemical materials are used in coatings, adhesives, plastics and rubber applications to deliver performance, safety and sustainability.', image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1000&q=85', alt: 'Premium modern automobile in a dramatic setting', Icon: CarFront },
  { slug: 'electronics-electrical', title: 'Electronics & Electrical', description: 'Our specialty chemicals support insulation, encapsulation, coatings and advanced materials for the electronics and electrical industry.', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=85', alt: 'Circuit board with electronic components', Icon: Cpu },
  { slug: 'packaging', title: 'Packaging', description: 'Our polymers, resins and additives help create high-performance and sustainable packaging solutions with improved strength and barrier properties.', image: 'https://images.unsplash.com/photo-1607166452427-7e4477079cb9?auto=format&fit=crop&w=1000&q=85', alt: 'Packaging materials arranged for production', Icon: Package },
  { slug: 'textile', title: 'Textile', description: 'Our chemical solutions are used in textile processing, finishing and coatings to enhance quality, durability and performance.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1000&q=85', alt: 'Colorful textile yarns and fabric', Icon: Shirt },
  { slug: 'rubber', title: 'Rubber', description: 'Our additives and specialty chemicals improve processing, durability and performance in a wide range of rubber applications.', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1000&q=85', alt: 'Close-up of a premium automotive tire and wheel', Icon: CircleDot },
  { slug: 'general-industrial-applications', title: 'General Industrial Applications', description: 'Our wide range of chemical products supports various industrial applications with consistent quality, reliability and technical support.', image: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1000&q=85', alt: 'Large chemical processing refinery at sunset', Icon: Factory },
]

const serviceFeatures = [
  { title: 'Application Expertise', description: 'Solutions tailored for industry needs', Icon: FlaskConical },
  { title: 'Consistent Quality', description: 'Reliable and high-performance materials', Icon: ShieldCheck },
  { title: 'Global Sourcing', description: 'Access to trusted manufacturers worldwide', Icon: Globe2 },
  { title: 'Sustainable Growth', description: 'Innovative solutions for a greener future', Icon: Leaf },
]

function Eyebrow({ children, light = false }) {
  return <p className={`mb-4 text-[10px] font-bold uppercase tracking-[0.24em] ${light ? 'text-white' : 'text-[#348921]'}`}>{children}</p>
}

function MapTexture() {
  return <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-[0.045]" style={{ backgroundImage: 'radial-gradient(ellipse at 28% 44%, #348921 0 1px, transparent 2px), radial-gradient(ellipse at 68% 52%, #348921 0 1px, transparent 2px)', backgroundSize: '19px 17px, 24px 20px', maskImage: 'radial-gradient(ellipse at center, black, transparent 72%)' }} />
}

function IndustriesPage() {
  return <>
    <Navbar activeSection="industries" />
    <main>
      <section className="relative isolate min-h-[670px] overflow-hidden bg-[#348921] text-white lg:min-h-[610px]">
        <div aria-hidden="true" className="absolute inset-0 -z-20 bg-cover bg-[center_48%]" style={{ backgroundImage: `url("${heroImage}")` }} />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(52,137,33,.96)_0%,rgba(52,137,33,.92)_42%,rgba(52,137,33,.56)_72%,rgba(52,137,33,.28)_100%)]" />
        <ChemicalMotion />
        <div className="mx-auto flex min-h-[670px] max-w-[1440px] flex-col justify-center px-5 py-14 sm:px-8 lg:min-h-[610px] lg:px-12 lg:py-16">
          <div className="max-w-[760px]">
            <Eyebrow light>Industries We Serve</Eyebrow>
            <h1 className="text-[clamp(2.9rem,6vw,5.7rem)] font-semibold leading-[.99] tracking-[-.055em]">Chemicals that<br />Power Progress<br /><span className="text-white">Across Industries</span></h1>
            <p className="mt-6 max-w-[650px] text-sm leading-7 text-white/80 sm:text-base">At Constrochem, we provide high-quality chemical materials that enable innovation, performance and sustainability across a wide range of industries. Our products are trusted by global partners to meet the evolving needs of modern applications.</p>
            <div className="mt-8 grid max-w-[700px] grid-cols-2 gap-x-5 gap-y-4 sm:grid-cols-4">
              {[['Wide Range of Applications', Layers3], ['High Performance Materials', Atom], ['Reliable Supply Chain', Truck], ['Sustainable Solutions', Leaf]].map(([label, Icon]) => <div key={label} className="flex items-center gap-2.5 text-xs font-medium leading-snug text-white/90"><span className="grid size-9 shrink-0 place-items-center rounded-full border border-white/20 bg-white/10 text-white"><Icon size={17} /></span>{label}</div>)}
            </div>
          </div>
        </div>
        <a href="#industry-focus" aria-label="Explore industries" className="absolute bottom-0 right-0 hidden h-36 w-24 flex-col items-center justify-center gap-3 bg-[#348921] text-[9px] font-semibold uppercase tracking-[.22em] text-white transition hover:bg-[#348921] lg:flex"><span className="[writing-mode:vertical-rl]">Chemistry for progress</span><ArrowRight size={18} className="rotate-90" /></a>
      </section>

      <section id="industry-focus" className="relative isolate overflow-hidden bg-[#FFFFFF] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <MapTexture />
        <div className="mx-auto max-w-[1280px]">
          <div className="mx-auto mb-11 max-w-[760px] text-center sm:mb-14"><Eyebrow>Our Industry Focus</Eyebrow><h2 className="text-3xl font-semibold leading-[1.08] tracking-[-.045em] text-[#348921] sm:text-5xl">Diverse Industries.<br /><span className="text-[#348921]">One Trusted Partner.</span></h2><p className="mx-auto mt-5 max-w-[720px] text-sm leading-7 text-[#348921] sm:text-base">Our chemical solutions are used across a wide range of industries, enabling our customers to improve performance, enhance durability, reduce costs, and create sustainable products for a better tomorrow.</p></div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {industries.map(({ slug, title, description, image, alt, Icon }) => <article key={slug} id={slug} className="group overflow-hidden rounded-2xl border border-[#348921]/20 bg-white shadow-[0_8px_26px_rgba(52,137,33,.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(52,137,33,.13)]">
              <a href={`/industries/${slug}`} aria-label={`Learn more about ${title}`} className="block focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#348921]">
                <div className="relative h-[220px] overflow-hidden bg-[#FFFFFF] sm:h-[230px]"><img src={image} alt={alt} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.045]" /><span className="absolute -bottom-7 left-6 grid size-[62px] place-items-center rounded-full border border-[#348921]/20 bg-white text-[#348921] shadow-lg"><Icon size={24} strokeWidth={1.6} /></span></div>
                <div className="flex min-h-[234px] flex-col px-6 pb-5 pt-10"><h3 className="text-[19px] font-semibold tracking-[-.02em] text-[#348921]">{title}</h3><p className="mt-3 text-sm leading-6 text-[#348921]">{description}</p><span className="mt-auto flex items-center justify-between pt-5 text-sm font-semibold text-[#348921]">Learn More <span className="grid size-9 place-items-center rounded-full border border-[#348921]/30 transition group-hover:bg-[#348921] group-hover:text-white"><ArrowRight size={17} /></span></span></div>
              </a>
            </article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#348921] px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-10 lg:py-[76px]">
        <div className="mx-auto grid max-w-[1280px] items-center gap-9 lg:grid-cols-[.9fr_1.5fr] lg:gap-14">
          <div><Eyebrow light>Why Choose Constrochem</Eyebrow><h2 className="text-3xl font-semibold leading-[1.06] tracking-[-.04em] sm:text-4xl">Delivering Value<br /><span className="text-white">Across Every Industry</span></h2><p className="mt-5 max-w-[450px] text-sm leading-6 text-white/75">We work closely with our customers to provide customized chemical solutions that improve performance, enhance durability and support sustainable growth.</p></div>
          <div className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 sm:gap-4">{serviceFeatures.map(({ title, description, Icon }) => <article key={title} className="rounded-xl border border-white/70 bg-white p-5 text-[#348921] shadow-[0_10px_24px_rgba(52,137,33,.12)] sm:p-6"><Icon size={23} className="mb-4 text-[#348921]" strokeWidth={1.7} /><h3 className="text-sm font-semibold">{title}</h3><p className="mt-2 text-xs leading-5 text-[#348921]">{description}</p></article>)}</div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"><MapTexture /><div className="mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-[1fr_.95fr] lg:gap-16"><div><Eyebrow>Let’s Build Together</Eyebrow><h2 className="max-w-[650px] text-3xl font-semibold leading-[1.08] tracking-[-.045em] text-[#348921] sm:text-5xl">Looking for a Chemical Solution<br /><span className="text-[#348921]">for Your Industry?</span></h2><p className="mt-5 max-w-[590px] text-sm leading-7 text-[#348921] sm:text-base">Get in touch with our team to discuss your requirements. We are committed to providing the right products and support for your business.</p><a href="/contact" className="mt-7 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#348921] px-6 text-sm font-semibold text-white shadow-lg shadow-emerald-900/10 transition hover:-translate-y-0.5 hover:bg-[#348921] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#348921]">Contact Us <ArrowRight size={17} /></a></div><div className="relative h-[290px] overflow-hidden rounded-[28px] bg-[#FFFFFF] sm:h-[360px]"><img src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1400&q=85" alt="Green landscape at golden hour, symbolizing sustainable growth" loading="lazy" className="h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-tr from-[#348921]/45 via-transparent to-white/10" /><div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-full border border-white/40 bg-white/85 px-4 py-2.5 text-xs font-semibold text-[#348921] backdrop-blur"><Check size={16} className="text-[#348921]" /> Partnership for a better tomorrow</div></div></div></section>
    </main>
    <Footer />
  </>
}

function IndustryDetail({ slug }) {
  const item = industries.find((industry) => industry.slug === slug)
  if (!item) return <IndustriesPage />
  const Icon = item.Icon
  return <><Navbar activeSection="industries" /><main><section className="relative isolate flex min-h-[520px] items-end overflow-hidden bg-[#348921] px-5 py-16 text-white sm:px-8 lg:min-h-[590px] lg:px-12"><img src={item.image} alt={item.alt} className="absolute inset-0 -z-20 h-full w-full object-cover" /><div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#348921]/95 via-[#348921]/75 to-[#348921]/25" /><div className="mx-auto w-full max-w-[1280px]"><a href="/industries" className="mb-8 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"><ArrowRight size={16} className="rotate-180" /> All Industries</a><Eyebrow light>Industry Solutions</Eyebrow><h1 className="max-w-[850px] text-4xl font-semibold leading-[1.02] tracking-[-.045em] sm:text-6xl">{item.title}</h1><p className="mt-5 max-w-[650px] text-base leading-7 text-white/85">{item.description}</p><a href="/contact" className="mt-7 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#348921] px-6 text-sm font-semibold text-white transition hover:bg-white">Discuss your application <ArrowRight size={17} /></a></div></section><section className="bg-[#FFFFFF] px-5 py-16 sm:px-8 lg:px-10 lg:py-20"><div className="mx-auto grid max-w-[1100px] gap-8 sm:grid-cols-[auto_1fr] sm:items-start"><span className="grid size-16 place-items-center rounded-2xl bg-white text-[#348921]"><Icon size={30} /></span><div><Eyebrow>How We Help</Eyebrow><h2 className="text-3xl font-semibold tracking-tight text-[#348921]">Chemical solutions made for your application</h2><p className="mt-4 max-w-[760px] text-base leading-7 text-[#348921]">{item.description} Our team works with trusted global manufacturers to source dependable materials and provide the product knowledge, quality and supply support your operation needs.</p><a href="/contact" className="mt-6 inline-flex items-center gap-2 font-semibold text-[#348921] hover:text-[#348921]">Talk to our team <ArrowRight size={17} /></a></div></div></section><section className="bg-[#348921] px-5 py-12 text-center text-white sm:px-8"><h2 className="text-2xl font-semibold sm:text-3xl">Explore more industries with Constrochem</h2><a href="/industries" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-white">View all industries <ArrowRight size={17} /></a></section></main><Footer /></>
}

export { IndustryDetail }
export default IndustriesPage



