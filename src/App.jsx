import React, { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'
import ServicesSection from './components/ServicesSection'
import Freqques from './components/Freqques'
import WhyChoose from './components/WhyChoose'
import SplashScreen from './components/SplashScreen'
import ClientFeedback from './components/ClientFeedback'

function App() {
  const [showSplash, setShowSplash] = useState(true)

  const handleSplashComplete = () => {
    setShowSplash(false)
  }

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />
        {/* Animated Services Section */}
        <ServicesSection />
        {/* Why Choose Us Timeline Section */}
        <WhyChoose />
        {/* Client Feedback Section */}
        <ClientFeedback />
        {/* FAQ Section */}
        <Freqques />
      </main>
      <Footer />
    </div>
  )
}

export default App
