import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ServicesMain from './pages/services/ServicesMain'
import FinancialSector from './pages/services/FinancialSector'
import CommercialBuildings from './pages/services/CommercialBuildings'
import ResidentialProjects from './pages/services/ResidentialProjects'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'

/* Scroll to top on route change */
function ScrollReset() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollReset />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesMain />} />
        <Route path="/services/financial-sector" element={<FinancialSector />} />
        <Route path="/services/commercial-buildings" element={<CommercialBuildings />} />
        <Route path="/services/residential-projects" element={<ResidentialProjects />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}
