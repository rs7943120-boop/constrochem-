import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutHero from '../components/AboutHero'
import CompanyOverview from '../components/CompanyOverview'
import MissionVisionValues from '../components/MissionVisionValues'
import CompanyJourney from '../components/CompanyJourney'
import GlobalSourcing from '../components/GlobalSourcing'
import QualityAssurance from '../components/QualityAssurance'
import Sustainability from '../components/Sustainability'
import AboutCTA from '../components/AboutCTA'

function About() {
  return (
    <>
      <Navbar activeSection="about" />
      <main>
        <AboutHero />
        <CompanyOverview />
        <MissionVisionValues />
        <CompanyJourney />
        <GlobalSourcing />
        <QualityAssurance />
        <Sustainability />
        <AboutCTA />
      </main>
      <Footer />
    </>
  )
}

export default About

