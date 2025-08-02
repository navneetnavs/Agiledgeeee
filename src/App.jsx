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
import CloudMigration from './components/services/CloudMigration'
import Automation from './components/services/Automation'
import SRE from './components/services/SRE'
import DevOps from './components/services/DevOps'
import CloudExpertise from './components/services/CloudExpertise'
import LogoDemo from './components/LogoDemo'
import GlobeLogoDemo from './components/GlobeLogoDemo'
import TechLogoDemo from './components/TechLogoDemo'
import MonitoringObservability from './components/blog/MonitoringObservability'
import CloudNativeArchitectures from './components/blog/CloudNativeArchitectures'
import CloudCostManagement from './components/blog/CloudCostManagement'
import CloudSecurity from './components/blog/CloudSecurity'
import WellArchitectedReview from './components/blog/WellArchitectedReview'
import AgiledgeLogoDemo from './components/AgiledgeLogoDemo'
import TrinityLogoDemo from './components/TrinityLogoDemo'
import CircleLogoDemo from './components/CircleLogoDemo'
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
          <Route path="/services/cloud-migration" element={<CloudMigration />} />
          <Route path="/services/automation" element={<Automation />} />
          <Route path="/services/24x7-sre" element={<SRE />} />
          <Route path="/services/devops" element={<DevOps />} />
          <Route path="/services/cloud-expertise" element={<CloudExpertise />} />
          <Route path="/services/cloud-expertise/monitoring" element={<MonitoringObservability />} />
          <Route path="/services/cloud-expertise/architectures" element={<CloudNativeArchitectures />} />
          <Route path="/services/cloud-expertise/cost-management" element={<CloudCostManagement />} />
          <Route path="/services/cloud-expertise/security" element={<CloudSecurity />} />
          <Route path="/services/cloud-expertise/well-architected" element={<WellArchitectedReview />} />
          <Route path="/logo-demo" element={<LogoDemo />} />
          <Route path="/globe-logo-demo" element={<GlobeLogoDemo />} />
          <Route path="/tech-logo-demo" element={<TechLogoDemo />} />
          <Route path="/agiledge-logo-demo" element={<AgiledgeLogoDemo />} />
          <Route path="/trinity-logo-demo" element={<TrinityLogoDemo />} />
          <Route path="/circle-logo-demo" element={<CircleLogoDemo />} />
          <Route path="/" element={
            <main>
              <HeroSection />
              <ServicesSection />
              <WhyChoose />
              {/* <ClientFeedback /> */}
              <Freqques />
            </main>
          } />
          <Route path="*" element={
            <div className="flex items-center justify-center min-h-screen">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
                <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
                <button 
                  onClick={() => window.history.back()}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Go Back
                </button>
              </div>
            </div>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
