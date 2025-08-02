import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ServicesSection = () => {
  const navigate = useNavigate();
  const [scrollDirection, setScrollDirection] = useState('down')
  const [lastScrollY, setLastScrollY] = useState(0)
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  const services = [
    {
      id: 1,
      title: "Software Development",
      description: "Custom web and mobile applications built with cutting-edge technologies",
      icon: "💻",
      color: "from-blue-500 to-blue-600",
      features: ["React/Next.js", "Node.js", "Python", "Mobile Apps"]
    },
    {
      id: 2,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services",
      icon: "☁️",
      color: "from-purple-500 to-purple-600",
      features: ["AWS", "Azure", "GCP", "DevOps"]
    },
    {
      id: 3,
      title: "DevOps & Automation",
      description: "CI/CD pipelines and infrastructure automation",
      icon: "⚙️",
      color: "from-green-500 to-green-600",
      features: ["Kubernetes", "Docker", "Jenkins", "Terraform"]
    },
    {
      id: 4,
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by AI and data science",
      icon: "🤖",
      color: "from-red-500 to-red-600",
      features: ["Data Engineering", "ML Models", "NLP", "Computer Vision"]
    },
    {
      id: 5,
      title: "ServiceNow Solutions",
      description: "Enterprise service management and workflow automation",
      icon: "🔄",
      color: "from-orange-500 to-orange-600",
      features: ["Custom Apps", "Integration", "Consulting", "Support"]
    },
    {
      id: 6,
      title: "Digital Transformation",
      description: "End-to-end digital transformation consulting",
      icon: "🚀",
      color: "from-indigo-500 to-indigo-600",
      features: ["Strategy", "Implementation", "Training", "Support"]
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const direction = currentScrollY > lastScrollY ? 'down' : 'up'
      setScrollDirection(direction)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const card = entry.target
          const delay = index * 100
          
          setTimeout(() => {
            card.style.transform = scrollDirection === 'down' 
              ? 'translateX(0px)' 
              : 'translateX(0px)'
            card.style.opacity = '1'
          }, delay)
        } else {
          const card = entry.target
          card.style.transform = scrollDirection === 'down' 
            ? 'translateX(100px)' 
            : 'translateX(-100px)'
          card.style.opacity = '0'
        }
      })
    }, observerOptions)

    cardsRef.current.forEach(card => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [scrollDirection])

  // Add this useEffect to handle scrolling to services section
  useEffect(() => {
    if (localStorage.getItem('scrollToServices') === 'true') {
      const element = document.getElementById('services');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      localStorage.removeItem('scrollToServices');
    }
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          
          {/* Left Side - Content */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600">Services</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                We provide comprehensive technology solutions to help your business thrive in the digital age. 
                From custom software development to cloud transformation, we've got you covered.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lg sm:text-2xl">🎯</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">Custom Solutions</h3>
                  <p className="text-sm sm:text-base text-gray-600">Tailored to your specific business needs</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lg sm:text-2xl">⚡</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">Fast Delivery</h3>
                  <p className="text-sm sm:text-base text-gray-600">Agile methodology for rapid development</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lg sm:text-2xl">🛡️</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">Enterprise Security</h3>
                  <p className="text-sm sm:text-base text-gray-600">Bank-grade security and compliance</p>
                </div>
              </div>
            </div>

            {/* Cloud & DevOps Services */}
            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl border border-blue-200">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Cloud & DevOps Services</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <button 
                  onClick={() => navigate('/services/cloud-migration')}
                  className="text-left p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-200 group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs sm:text-sm">☁️</span>
                    </div>
                    <span className="font-medium text-sm sm:text-base text-gray-800 group-hover:text-blue-600">Cloud Migration</span>
                  </div>
                </button>
                
                <button 
                  onClick={() => navigate('/services/automation')}
                  className="text-left p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-200 group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs sm:text-sm">⚙️</span>
                    </div>
                    <span className="font-medium text-sm sm:text-base text-gray-800 group-hover:text-green-600">Automation</span>
                  </div>
                </button>
                
                <button 
                  onClick={() => navigate('/services/24x7-sre')}
                  className="text-left p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-200 group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs sm:text-sm">🛡️</span>
                    </div>
                    <span className="font-medium text-sm sm:text-base text-gray-800 group-hover:text-orange-600">24x7 SRE</span>
                  </div>
                </button>
                
                <button 
                  onClick={() => navigate('/services/devops')}
                  className="text-left p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-200 group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs sm:text-sm">🔄</span>
                    </div>
                    <span className="font-medium text-sm sm:text-base text-gray-800 group-hover:text-purple-600">DevOps</span>
                  </div>
                </button>
                
                <button 
                  onClick={() => navigate('/services/cloud-expertise')}
                  className="text-left p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-200 group sm:col-span-2"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs sm:text-sm">💡</span>
                    </div>
                    <span className="font-medium text-sm sm:text-base text-gray-800 group-hover:text-cyan-600">Cloud Expertise</span>
                  </div>
                </button>
              </div>
            </div>

            <button 
              onClick={() => navigate('/contact')}
              className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
            >
              Get Free Consultation
            </button>
          </div>

          {/* Right Side - Animated Cards */}
          <div className="relative order-1 lg:order-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  ref={el => cardsRef.current[index] = el}
                  className="group relative bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                  style={{
                    transform: scrollDirection === 'down' ? 'translateX(100px)' : 'translateX(-100px)',
                    opacity: 0,
                    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  {/* Card Header */}
                  <div className="mb-3 sm:mb-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center text-lg sm:text-2xl`}>
                      {service.icon}
                    </div>
                  </div>

                  {/* Card Content */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-green-600 transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-1 sm:space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
                        <span className="text-xs text-gray-500 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-28 h-28 sm:w-40 sm:h-40 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection 