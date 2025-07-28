import React, { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Header from './components/Header'
import About from './components/About'
import Education from './components/Education'
import Interests from './components/Interests'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Projects from './components/Projects'
import CaseStudies from './components/CaseStudies'
import Contact from './components/Contact'
import Spinner from './components/Spinner'
import BackToTop from './components/BackToTop'
import Footer from './components/Footer'

function App() {
  const [loading, setLoading] = useState(true)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen)
  }

  return (
    <div className="App">
      <Spinner show={loading} />
      
      {/* Mobile nav toggle button */}
      <button 
        className="mobile-nav-toggle d-lg-none"
        onClick={toggleMobileNav}
      >
        <i className="fas fa-bars"></i>
      </button>

      <Navigation isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
      
      <div className="main-content">
        <Header />
        <About />
        <Education />
        <Interests />
        <Skills />
        <Certifications />
        <Projects />
        <CaseStudies />
        <Contact />
        <Footer /> 
      </div>

      <BackToTop />
    </div>
  )
}

export default App
