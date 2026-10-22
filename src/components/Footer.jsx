import { ArrowRight, ChevronRight } from 'lucide-react'
import logo from '../assets/logo.png'

const navigationLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Expertise', href: '/#strength' },
  { label: 'Sustainability', href: '/sustainability' },
]

const solutionLinks = [
  { label: 'Our Products', href: '/products' },
  { label: 'Industries We Serve', href: '/industries' },
  { label: 'Micronized Wax', href: '/products#products' },
  { label: 'Coatings, Adhesives & Resins', href: '/products#products' },
]

function Footer() {
  return (
    <footer className="bg-white text-[#348921]">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-14 sm:px-8 sm:py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.9fr_1fr] lg:gap-12 lg:px-10 lg:py-20">
        <div className="max-w-sm">
          <a href="/#home" aria-label="Constrochem home" className="inline-flex items-center gap-3">
            <img src={logo} alt="Constrochem" className="h-14 w-auto object-contain" />
          </a>
          <p className="mt-5 text-sm leading-6 text-[#348921]">
            Reliable material solutions and specialty chemicals that help businesses innovate, create, and grow.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#348921]">Explore</h2>
          <ul className="mt-5 space-y-3">
            {navigationLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="group inline-flex items-center gap-1 text-sm text-[#348921] transition-colors hover:text-[#348921]">
                  <ChevronRight size={14} className="-ml-4 opacity-0 transition-all group-hover:ml-0 group-hover:opacity-100" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Products and industries">
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#348921]">Solutions</h2>
          <ul className="mt-5 space-y-3">
            {solutionLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="group inline-flex items-center gap-1 text-sm text-[#348921] transition-colors hover:text-[#348921]">
                  <ChevronRight size={14} className="-ml-4 opacity-0 transition-all group-hover:ml-0 group-hover:opacity-100" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="rounded-2xl border border-[#348921]/20 bg-white/70 p-5 sm:p-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#348921]">Let’s work together</p>
          <h2 className="mt-3 text-xl font-semibold leading-snug text-[#348921]">Looking for the right material solution?</h2>
          <p className="mt-2 text-sm leading-6 text-[#348921]">Our team can help you find the right products for your application.</p>
          <a href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#348921] transition-colors hover:text-[#348921]">
            Get in touch <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <div className="border-t border-[#348921]/20">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-2 px-5 py-5 text-xs text-[#348921] sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <p>© {new Date().getFullYear()} Constrochem. All rights reserved.</p>
          <p>Building better chemistry.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer




