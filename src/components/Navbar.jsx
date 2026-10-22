
import { useState } from 'react'
import logo from '../assets/logo.png'
import {
  ArrowDownRight,
  ArrowRight,

  ChevronDown,
  Menu,
  Search,
  X,
  FlaskConical,
  Layers3,
  Factory,
} from 'lucide-react'

const links = [
  { label: 'Home', href: '/#home', id: 'home' },
  { label: 'About Us', href: '/about', id: 'about' },
  { label: 'Products', href: '/products', id: 'products', dropdown: true },
  { label: 'Industries', href: '/industries', id: 'industries', dropdown: true },
  { label: 'Our Strength', href: '/#strength', id: 'strength' },
  { label: 'Sustainability', href: '/sustainability', id: 'sustainability' },
]

const productItems = [
  {
    title: 'Micronized Waxes',
    desc: 'Precision-engineered wax solutions',
    icon: Layers3,
    href: '/products#products',
  },
  {
    title: 'Specialty Chemicals',
    desc: 'Advanced performance additives',
    icon: FlaskConical,
    href: '/products#products',
  },
  {
    title: 'Industrial Solutions',
    desc: 'Chemistry for modern industries',
    icon: Factory,
    href: '/industries',
  },
]

const industries = [
  'Inks, Coatings & Adhesives',
  'Plastics & Polymers',
  'Construction Chemicals',
  'Automotive',
  'Electronics & Electrical',
  'Packaging',
  'Textile',
  'Rubber',
  'General Industrial Applications',
]

function Navbar({
  activeSection = 'home',
  onSectionChange = () => {},
}) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  const selectLink = (id) => {
    onSectionChange(id)
    setMenuOpen(false)
    setActiveDropdown(null)
    setSearchOpen(false)
  }

  const linkClass = (id) =>
    `relative inline-flex items-center gap-1.5 py-3 text-[13px] font-medium tracking-wide transition-colors duration-200 ${
      activeSection === id
        ? 'text-[#348921]'
        : 'text-[#348921] hover:text-[#348921]'
    }`

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#348921]/20 bg-white/90 backdrop-blur-xl">
      {/* Main navbar */}
      <div className="mx-auto flex min-h-[82px] max-w-[1440px] items-center justify-between gap-5 px-5 sm:px-8 lg:px-10">

        {/* Brand */}
        <a
          href="/"
          onClick={() => selectLink('home')}
          aria-label="Constrochem home"
          className="group flex shrink-0 items-center gap-3"
        >
          <img src={logo} alt="Constrochem" className="h-40 w-auto object-contain" />
        </a>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-5 xl:flex 2xl:gap-7"
        >
          {links.map((link) => (
            <div
              key={link.id}
              className="relative"
              onMouseEnter={() =>
                link.dropdown && setActiveDropdown(link.id)
              }
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href={link.href}
                onClick={() => selectLink(link.id)}
                className={linkClass(link.id)}
                aria-expanded={
                  link.dropdown
                    ? activeDropdown === link.id
                    : undefined
                }
              >
                {link.label}
                {link.dropdown && (
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      activeDropdown === link.id ? 'rotate-180' : ''
                    }`}
                  />
                )}
                {activeSection === link.id && (
                  <span className="absolute -bottom-[1px] left-0 h-[2px] w-full rounded-full bg-[#348921]" />
                )}
              </a>

              {/* Products mega menu */}
              {link.id === 'products' &&
                activeDropdown === 'products' && (
                  <div className="absolute left-1/2 top-full w-[420px] -translate-x-1/2 pt-4">
                    <div className="rounded-2xl border border-[#348921]/20 bg-white p-5 shadow-2xl shadow-slate-900/10">
                      <div className="mb-4">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#348921]">
                          Our expertise
                        </p>
                        <h3 className="mt-1 text-lg font-bold text-[#348921]">
                          Products & Solutions
                        </h3>
                      </div>

                      <div className="space-y-1">
                        {productItems.map((item) => {
                          const Icon = item.icon

                          return (
                            <a
                              key={item.title}
                              href={item.href}
                              onClick={() => selectLink('products')}
                              className="group flex items-center gap-3 rounded-xl p-3 transition hover:bg-white"
                            >
                              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#348921]">
                                <Icon size={20} />
                              </span>
                              <span className="min-w-0 flex-1">
                                <span className="block text-sm font-semibold text-[#348921]">
                                  {item.title}
                                </span>
                                <span className="mt-1 block text-xs text-[#348921]">
                                  {item.desc}
                                </span>
                              </span>
                              <ArrowRight
                                size={16}
                                className="text-[#348921] transition group-hover:translate-x-1 group-hover:text-[#348921]"
                              />
                            </a>
                          )
                        })}
                      </div>

                      <a
                        href="/products#products"
                        onClick={() => selectLink('products')}
                        className="mt-3 flex items-center justify-between border-t border-[#348921]/20 pt-4 text-xs font-semibold text-[#348921]"
                      >
                        Explore all products
                        <ArrowDownRight size={16} />
                      </a>
                    </div>
                  </div>
                )}

              {/* Industries dropdown */}
              {link.id === 'industries' &&
                activeDropdown === 'industries' && (
                  <div className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-4">
                    <div className="rounded-2xl border border-[#348921]/20 bg-white p-3 shadow-2xl shadow-slate-900/10">
                      {industries.map((industry) => (
                        <a
                          key={industry}
                          href={`/industries/${industry.toLowerCase().replaceAll('&', '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}
                          onClick={() => selectLink('industries')}
                          className="block rounded-xl px-4 py-3 text-sm text-[#348921] transition hover:bg-white hover:text-[#348921]"
                        >
                          {industry}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
            </div>
          ))}

          <a
            href="/contact"
            onClick={() => selectLink('contact')}
            className={linkClass('contact')}
          >
            Contact Us
          </a>
        </nav>

        {/* Desktop actions */}
        <div className="hidden shrink-0 items-center gap-3 xl:flex">
          <button
            type="button"
            aria-label="Toggle search"
            aria-expanded={searchOpen}
            onClick={() => setSearchOpen(!searchOpen)}
            className="flex size-10 items-center justify-center rounded-full text-[#348921] transition hover:bg-white hover:text-[#348921]"
          >
            {searchOpen ? <X size={19} /> : <Search size={19} />}
          </button>

          <a
            href="/contact"
            onClick={() => selectLink('contact')}
            className="group inline-flex items-center gap-3 rounded-full bg-[#348921] px-5 py-3.5 text-[13px] font-semibold text-white shadow-md shadow-emerald-900/10 transition hover:bg-[#348921]"
          >
            Get In Touch
            <span className="flex size-6 items-center justify-center rounded-full bg-white/15 transition group-hover:translate-x-0.5">
              <ArrowRight size={14} />
            </span>
          </a>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 xl:hidden">
          <button
            type="button"
            aria-label="Toggle search"
            aria-expanded={searchOpen}
            onClick={() => setSearchOpen(!searchOpen)}
            className="flex size-10 items-center justify-center rounded-full text-[#348921] hover:bg-white hover:text-[#348921]"
          >
            <Search size={19} />
          </button>

          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex size-11 items-center justify-center rounded-xl bg-white text-[#348921] transition hover:bg-white"
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>

      {/* Expandable search */}
      {searchOpen && (
        <form
          role="search"
          onSubmit={(event) => {
            event.preventDefault()
            const query = searchQuery.trim()
            if (query) {
              window.location.href = `/products#products`
              selectLink('products')
            }
          }}
          className="border-t border-[#348921]/20 bg-white px-5 py-4 sm:px-8 lg:px-10"
        >
          <div className="mx-auto flex max-w-3xl items-center gap-3 rounded-2xl border border-[#348921]/20 bg-white px-4">
            <Search size={19} className="shrink-0 text-[#348921]" />
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search products and chemical solutions..."
              className="w-full bg-transparent py-4 text-sm text-[#348921] outline-none placeholder:text-[#348921]"
            />
            <button
              type="submit"
              className="rounded-xl bg-[#348921] px-4 py-2 text-xs font-semibold text-white hover:bg-[#348921]"
            >
              Search
            </button>
          </div>
        </form>
      )}

      {/* Mobile navigation */}
      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-[#348921]/20 bg-white px-5 pb-6 pt-3 shadow-xl xl:hidden sm:px-8"
        >
          <div className="mx-auto max-w-[1440px]">
            {links.map((link) => (
              <div key={link.id}>
                <div className="flex items-center justify-between border-b border-[#348921]/20">
                  <a
                    href={link.href}
                    onClick={() => selectLink(link.id)}
                    className={`flex-1 py-4 text-sm font-medium transition ${
                      activeSection === link.id
                        ? 'text-[#348921]'
                        : 'text-[#348921] hover:text-[#348921]'
                    }`}
                  >
                    {link.label}
                  </a>

                  {link.dropdown && (
                    <button
                      type="button"
                      aria-label={`Toggle ${link.label} submenu`}
                      aria-expanded={activeDropdown === link.id}
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === link.id ? null : link.id
                        )
                      }
                      className="p-3 text-[#348921] hover:text-[#348921]"
                    >
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${
                          activeDropdown === link.id ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  )}
                </div>

                {link.dropdown && activeDropdown === link.id && (
                  <div className="space-y-1 bg-white p-2">
                    {(link.id === 'products'
                      ? productItems.map((item) => item.title)
                      : industries
                    ).map((item) => (
                      <a
                        key={item}
                        href={link.id === 'industries'
                          ? `/industries/${item.toLowerCase().replaceAll('&', '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`
                          : link.href}
                        onClick={() => selectLink(link.id)}
                        className="block rounded-lg px-4 py-3 text-sm text-[#348921] transition hover:bg-white hover:text-[#348921]"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <a
              href="/contact"
              onClick={() => selectLink('contact')}
              className="mt-5 flex items-center justify-center gap-2 rounded-full bg-[#348921] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#348921]"
            >
              Get In Touch
              <ArrowRight size={17} />
            </a>
          </div>  
        </nav>
      )}
    </header>
  )
}

export default Navbar





