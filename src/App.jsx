import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'
import ServicesSection from './components/ServicesSection'
import WhyChoose from './components/WhyChoose'

function App() {
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
      </main>
      
      <Footer />
    </div>
  )
}

export default App
