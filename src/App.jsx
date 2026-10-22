import { useEffect, useState } from 'react'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import ProductsPage from './pages/ProductsPage.jsx'
import Contact from './pages/Contact.jsx'
import IndustriesPage, { IndustryDetail } from './pages/IndustriesPage.jsx'
import SustainabilityPage from './pages/SustainabilityPage.jsx'

function App() {
  const [pathname, setPathname] = useState(window.location.pathname)

  useEffect(() => {
    const handleNavigation = () => setPathname(window.location.pathname)
    window.addEventListener('popstate', handleNavigation)
    return () => window.removeEventListener('popstate', handleNavigation)
  }, [])

  const route = pathname.replace(/\/$/, '')
  if (route === '/about') return <About />
  if (route === '/products') return <ProductsPage />
  if (route === '/contact') return <Contact />
  if (route === '/sustainability') return <SustainabilityPage />
  const industryMatch = route.match(/^\/industries\/([^/]+)$/)
  if (industryMatch) return <IndustryDetail slug={industryMatch[1]} />
  if (route === '/industries') return <IndustriesPage />
  return <Home />
}

export default App

