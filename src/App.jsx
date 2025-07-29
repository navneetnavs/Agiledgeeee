import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'
import ServicesSection from './components/ServicesSection'
import Freqques from './components/Freqques'
import WhyChoose from './components/WhyChoose'
import SplashScreen from './components/SplashScreen'
// import ClientFeedback from './components/ClientFeedback'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Careers from './components/Careers'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

// Component to handle scroll to top on route changes
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  const [showSplash, setShowSplash] = useState(true)

  const handleSplashComplete = () => {
    setShowSplash(false)
  }

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/" element={
            <main>
              <HeroSection />
              <ServicesSection />
              <WhyChoose />
              {/* <ClientFeedback /> */}
              <Freqques />
            </main>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
