import { ArrowRight, Globe2, Handshake, PackageCheck, UsersRound } from 'lucide-react'
import { Reveal, StaggerGroup, StaggerItem } from './AboutMotion'
import heroImage from '../assets/hero imged.png'

const facilityImage = 'https://images.unsplash.com/photo-1769778674824-e69f58d7c55d?auto=format&fit=crop&w=1600&q=85'
const stats = [
  { value: '20+', label: 'Global Partners', Icon: Globe2 },
  { value: '100+', label: 'Product Range', Icon: PackageCheck },
  { value: '500+', label: 'Satisfied Customers', Icon: UsersRound },
  { value: '15+', label: 'Industries Served', Icon: Handshake },
]

function CompanyOverview() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal direction="left">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.23em] text-[#348921]">Our Company</p>
          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#348921] sm:text-5xl">Who We Are</h2>
          <p className="mt-6 text-sm leading-7 text-[#348921] sm:text-base sm:leading-8">
            Constrochem is a trusted importer and distributor of premium chemical products, serving diverse industries with a focus on quality, reliability, and long-term partnerships. With extensive expertise in micronized wax, coatings, paints, adhesives, curing chemicals and resins, polypropylenes, and polymers, we deliver exceptional solutions that meet the evolving needs of our customers.
          </p>
          <a href="#products" className="mt-7 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#348921] px-6 text-sm font-semibold text-white transition hover:bg-[#348921] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#348921]">
            Our Products <ArrowRight size={16} />
          </a>
        </Reveal>
        <Reveal direction="right" className="overflow-hidden rounded-2xl shadow-[0_20px_55px_rgba(52,137,33,0.14)]">
          <img src={facilityImage} alt="Modern industrial facility with glass architecture and landscaped greenery" onError={(event) => { event.currentTarget.src = heroImage }} className="aspect-[1.35/1] w-full object-cover transition-transform duration-700 hover:scale-[1.025]" />
        </Reveal>
      </div>

      <StaggerGroup className="mx-auto mt-14 grid max-w-[1280px] grid-cols-2 divide-x divide-y divide-[#348921]/20 border-y border-[#348921]/20 sm:grid-cols-4 sm:divide-y-0">
        {stats.map(({ value, label, Icon }) => (
          <StaggerItem key={label} className="flex flex-col items-center px-3 py-6 text-center sm:py-8">
            <Icon size={21} strokeWidth={1.6} className="mb-3 text-[#348921]" aria-hidden="true" />
            <span className="text-3xl font-semibold tracking-tight text-[#348921] sm:text-4xl">{value}</span>
            <span className="mt-1 text-[11px] font-medium text-[#348921] sm:text-xs">{label}</span>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  )
}

export default CompanyOverview

