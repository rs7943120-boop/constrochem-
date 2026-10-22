import { FlaskConical, Globe2, Settings, Truck } from 'lucide-react'

const expertiseItems = [
  { label: 'Global Sourcing', Icon: Globe2 },
  { label: 'Reliable Supply Chain', Icon: Truck },
  { label: 'Technical Expertise', Icon: FlaskConical },
  { label: 'Industry Solutions', Icon: Settings },
]

function Expertise() {
  return (
    <section aria-labelledby="expertise-heading" className="bg-[#FFFFFF] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 xl:gap-24">
        <div className="max-w-[570px]">
          <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.24em] text-[#348921]">Our Expertise</p>
          <h2 id="expertise-heading" className="text-5xl font-semibold leading-[1.02] tracking-[-0.055em] text-[#348921] sm:text-6xl lg:text-[4.25rem]">
            <span className="block">What <span className="text-[#348921]">We</span></span>
            <span className="block">Do?</span>
          </h2>
          <p className="mt-7 text-[15px] leading-7 text-[#348921] sm:text-base sm:leading-[1.9]">
            Constrochem specializes in importing and distributing high-quality products for a wide range of industries. With our extensive expertise in micronized wax, coatings, paints, adhesives, curing chemicals and resins, polypropylenes, and polymers, we are committed to delivering exceptional solutions that meet the diverse needs of our customers.
          </p>
        </div>

        <div className="flex min-h-[410px] items-center sm:min-h-[450px] lg:min-h-[470px]">
          <ul className="w-full divide-y divide-[#348921]/20 border-y border-[#348921]/20">
            {expertiseItems.map(({ label, Icon }) => (
              <li key={label} className="group flex min-h-[86px] items-center gap-4 py-4 transition-colors sm:min-h-[98px] sm:gap-5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-[#348921]/20 bg-white/80 text-[#348921] transition duration-200 group-hover:border-[#348921]/20 group-hover:bg-white sm:size-12">
                  <Icon size={21} strokeWidth={1.55} />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#348921] sm:text-xs sm:tracking-[0.19em]">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Expertise

