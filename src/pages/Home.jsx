import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Expertise from '../components/Expertise'
import Products from '../components/Products'
import Industries from '../components/Industries'
import WhyChooseUs from '../components/WhyChooseUs'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <Products />
        <Industries />
        <WhyChooseUs />
        <section id="about" className="sr-only" aria-label="About Constrochem" />
        <section id="strength" className="sr-only" aria-label="Our Strength" />
        <section id="sustainability" className="sr-only" aria-label="Sustainability" />
        <section id="contact" className="sr-only" aria-label="Contact Us" />
      </main>
      <Footer />
    </>
  )
}

export default Home

