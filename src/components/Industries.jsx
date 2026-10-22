import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import heroImage from '../assets/hero imged.png'

const industries = [
  {
    title: 'Paints & Coatings',
    image: 'https://images.unsplash.com/photo-1525909002-1b05e0c869d8?auto=format&fit=crop&w=900&q=82',
    alt: 'Paint rollers in several colours, including green',
  },
  {
    title: 'Adhesives & Sealants',
    image: 'https://images.unsplash.com/photo-1646183524128-52ec1d41905c?auto=format&fit=crop&w=900&q=82',
    alt: 'Adhesive material ready for precise application',
  },
  {
    title: 'Plastics & Polymers',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Polypropylene_Pellets_-_DPLA_-_f7c2fa29d14525ce21219452f4a1a316.jpg',
    alt: 'White polypropylene plastic granules',
  },
  {
    title: 'Construction Chemicals',
    image: 'https://images.unsplash.com/photo-1761896171748-ca4e9c81b5de?auto=format&fit=crop&w=900&q=82',
    alt: 'Modern construction site with tower cranes',
  },
  {
    title: 'Inks & Printing',
    image: 'https://images.unsplash.com/photo-1758183961426-88d64eb5f787?auto=format&fit=crop&w=900&q=82',
    alt: 'Industrial printing press with colourful ink rollers',
  },
  {
    title: 'Automotive',
    image: 'https://images.unsplash.com/photo-1762949857793-a62a1540d3eb?auto=format&fit=crop&w=900&q=82',
    alt: 'Modern premium car outside a contemporary building',
  },
  {
    title: 'Industrial Applications',
    image: 'https://images.unsplash.com/photo-1777915627530-fc3decb749cf?auto=format&fit=crop&w=900&q=82',
    alt: 'Large industrial refinery complex',
  },
]

const cards = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.12 } },
}

const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

function WorldMap() {
  return (
    <svg viewBox="0 0 1000 420" className="h-full w-full" aria-hidden="true">
      <g fill="currentColor">
        <path d="m91 106 33-27 53-10 32 14 17 27-18 19-3 24-30 15-12 29-22 3-10-22-21-4-5-23-28-8-5-18-22-5 10-14-8-16 19-4 4-10 16 10Zm91 120 20 8 15 24-5 23 18 21 1 23-16 20-9 36-18 20-15-25 2-27-13-26 4-25-15-20 6-23 15-10Zm186-128 23-17 38-7 23 12 12 22-17 10-24-5-18 10-25-7-19-18 7-10Zm75 38 28-25 47-2 28 14 29-6 34 16 35-8 30 13 39-5 30 16-17 18-41 4-18 17-27-8-24 18-15 25-26-2-15 21-31-9-10-22-25-12-4-21-29-6-21-17-32 7-15-18-29-3-21-18 10-15Zm50 93 27 7 18 18 25 11 16 26-4 37-19 14-8 29-18 25-16-16-4-37-15-19-4-27-21-20 7-25 16-23Zm193-7 27-11 38 6 19 20-14 18-33 8-30-11-20-16 13-14Zm74 94 23-12 25 5 17 23-12 23-25 6-22-17-6-28Z" />
      </g>
      <g fill="none" stroke="currentColor" strokeOpacity=".28" strokeWidth="1">
        <path d="M50 210h900M500 24v372M215 35c53 96 53 254 0 350m570-350c-53 96-53 254 0 350" />
        <ellipse cx="500" cy="210" rx="420" ry="178" />
      </g>
    </svg>
  )
}

function Industries() {
  const reduceMotion = useReducedMotion()
  const initialState = reduceMotion ? false : 'hidden'

  return (
    <section id="industries" aria-labelledby="industries-heading" className="relative isolate overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-40 -z-10 h-[300px] w-[760px] -translate-x-1/2 text-[#348921] opacity-[0.10] sm:top-28 sm:h-[360px] sm:w-[920px] lg:top-20 lg:h-[420px] lg:w-[1080px]">
        <WorldMap />
      </div>

      <div className="mx-auto max-w-[1760px]">
        <motion.div
          initial={initialState}
          whileInView="show"
          variants={{ hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
          viewport={{ once: true, amount: 0.35 }}
          className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.24em] text-[#348921]">Industries We Serve</p>
            <h2 id="industries-heading" className="max-w-[760px] text-3xl font-semibold leading-[1.1] tracking-[-0.04em] text-[#348921] sm:text-4xl lg:text-5xl">
              Powering Progress Across <span className="text-[#348921]">Industries</span>
            </h2>
            <p className="mt-4 max-w-[650px] text-sm leading-6 text-[#348921] sm:text-base sm:leading-7">
              Our chemical solutions are used across a wide range of industries, enabling innovation, performance, and sustainability.
            </p>
          </div>
          <motion.a
            href="#industries"
            whileHover={reduceMotion ? undefined : { color: '#348921' }}
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#348921] transition-colors focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#348921]"
          >
            Explore All Industries
            <motion.span className="transition-transform group-hover:translate-x-1" whileHover={reduceMotion ? undefined : { x: 4 }} transition={{ type: 'spring', stiffness: 300, damping: 18 }}>
              <ArrowRight size={17} />
            </motion.span>
          </motion.a>
        </motion.div>

        <motion.div
          variants={cards}
          initial={initialState}
          whileInView="show"
          viewport={{ once: true, amount: 0.08 }}
          className="grid grid-cols-1 gap-x-4 gap-y-7 min-[420px]:grid-cols-2 sm:gap-x-5 sm:gap-y-8 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-7 2xl:gap-x-4"
        >
          {industries.map(({ title, image, alt }) => (
            <motion.article
              key={title}
              variants={card}
              whileHover={reduceMotion ? undefined : { y: -5, boxShadow: '0 16px 28px rgba(52,137,33, 0.12)' }}
              className="group overflow-hidden rounded-xl bg-white p-1.5 transition-shadow focus-within:ring-2 focus-within:ring-[#348921]"
            >
              <div className="aspect-[1.18/1] overflow-hidden rounded-lg bg-white sm:aspect-[1.22/1]">
                <motion.img
                  src={image}
                  alt={alt}
                  loading="lazy"
                  onError={(event) => { event.currentTarget.src = heroImage }}
                  whileHover={reduceMotion ? undefined : { scale: 1.045 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="flex min-h-[58px] items-center justify-center px-2 text-center text-[13px] font-semibold leading-snug text-[#348921] sm:text-sm">{title}</h3>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Industries

