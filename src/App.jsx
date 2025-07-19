import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ServicesSection from './components/ServicesSection'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Main Content with top padding to account for fixed navbar */}
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-6">
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Agiledge</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Your trusted partner for innovative software solutions and digital transformation
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md font-medium transition-colors duration-200">
              Get Started
            </button>
          </div>
        </section>

        {/* Animated Services Section */}
        <ServicesSection />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
