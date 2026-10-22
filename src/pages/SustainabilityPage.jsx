import { ArrowDown, ArrowRight, Droplets, Leaf, Recycle, ShieldCheck, Sprout } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const commitments = [
  {
    number: '01',
    title: 'Responsible sourcing',
    description: 'We work with trusted suppliers and make thoughtful choices across our sourcing network, with care for the people and places behind every material.',
    Icon: Leaf,
  },
  {
    number: '02',
    title: 'Smarter material choices',
    description: 'We help customers explore products and formulations that meet performance needs while making more considered use of resources.',
    Icon: Recycle,
  },
  {
    number: '03',
    title: 'Safety in every step',
    description: 'Clear product information, careful handling and a strong focus on quality support safer work across the industries we serve.',
    Icon: ShieldCheck,
  },
]

function SustainabilityPage() {
  return (
    <>
      <Navbar activeSection="sustainability" />
      <main>
        <section className="relative isolate overflow-hidden bg-[#14251b] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-10 lg:py-40">
          <div aria-hidden="true" className="absolute inset-0 -z-20 bg-[url('https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=2200&q=85')] bg-cover bg-center" />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-[#10231b]/95 via-[#10231b]/75 to-[#10231b]/25" />
          <div className="mx-auto max-w-[1280px]">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#c5e6b1]">Progress with purpose</p>
            <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.04] tracking-[-0.045em] sm:text-6xl lg:text-7xl">A more thoughtful way to grow.</h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">Sustainability is part of how we build relationships, source materials and support the businesses shaping a better future.</p>
            <a href="#our-approach" className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#348921] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#286d1b]">Explore our approach <ArrowDown size={17} /></a>
          </div>
          <div className="pointer-events-none absolute bottom-0 right-0 hidden translate-x-[16%] translate-y-[32%] text-white/[0.08] lg:block"><Sprout size={440} strokeWidth={0.7} /></div>
        </section>

        <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
          <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#348921]">Our perspective</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#18251b] sm:text-5xl">Better chemistry begins with better choices.</h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-slate-600">
              <p>As a partner to manufacturers and growing businesses, we understand that progress depends on the materials we choose and the way we use them. We aim to make those choices more considered, practical and responsible.</p>
              <p>Our sustainability journey is ongoing. We keep learning with our customers and suppliers, looking for opportunities to improve how we work and support solutions that contribute to a more resource-conscious future.</p>
            </div>
          </div>
        </section>

        <section id="our-approach" className="bg-[#f4f7f1] px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
          <div className="mx-auto max-w-[1280px]">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#348921]">Our approach</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#18251b] sm:text-5xl">Small decisions. Lasting impact.</h2>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {commitments.map(({ number, title, description, Icon }) => (
                <article key={number} className="group rounded-2xl border border-[#dce5d7] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#17351e]/[0.07] sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-[0.18em] text-[#86a27d]">{number}</span>
                    <span className="flex size-12 items-center justify-center rounded-full bg-[#edf5e9] text-[#348921]"><Icon size={21} strokeWidth={1.7} /></span>
                  </div>
                  <h3 className="mt-8 text-xl font-semibold text-[#18251b]">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
          <div className="mx-auto grid max-w-[1280px] overflow-hidden rounded-3xl bg-[#163c27] text-white lg:grid-cols-[1fr_0.8fr]">
            <div className="p-8 sm:p-12 lg:p-16">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b8dda8]">Moving forward together</p>
              <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">Building progress into every partnership.</h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/75 sm:text-base">Have a sustainability goal or a material challenge? Let’s talk about the right next step for your business.</p>
              <a href="/contact" className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold text-[#163c27] transition hover:bg-[#e8f2e3]">Talk to our team <ArrowRight size={17} /></a>
            </div>
            <div aria-hidden="true" className="relative min-h-56 overflow-hidden lg:min-h-full">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=85')] bg-cover bg-center opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#163c27] via-[#163c27]/20 to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-[#163c27]/10 lg:to-[#163c27]/20" />
              <div className="absolute bottom-7 left-7 flex items-center gap-3 rounded-full border border-white/20 bg-[#163c27]/45 px-4 py-3 text-xs font-medium text-white backdrop-blur"><Droplets size={16} /> A journey of continuous improvement</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default SustainabilityPage
