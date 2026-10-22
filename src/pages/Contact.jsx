
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactHero from '../components/ContactHero'
import ContactInformation from '../components/ContactInformation'
import ContactForm from '../components/ContactForm'
import OfficeLocations from '../components/OfficeLocations'
import ContactCTA from '../components/ContactCTA'

function Contact() {
  return (
    <>
      <Navbar activeSection="contact" />
      <main>
        <ContactHero />
        <ContactInformation />
        <ContactForm />
        <OfficeLocations />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}

export default Contact

