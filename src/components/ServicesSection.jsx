import React, { useEffect, useRef, useState } from 'react'

const ServicesSection = () => {
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

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600">Services</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We provide comprehensive technology solutions to help your business thrive in the digital age. 
                From custom software development to cloud transformation, we've got you covered.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Custom Solutions</h3>
                  <p className="text-gray-600">Tailored to your specific business needs</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Fast Delivery</h3>
                  <p className="text-gray-600">Agile methodology for rapid development</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🛡️</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Enterprise Security</h3>
                  <p className="text-gray-600">Bank-grade security and compliance</p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/contact';
                }
              }}
              className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Free Consultation
            </button>
          </div>

          {/* Right Side - Animated Cards */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  ref={el => cardsRef.current[index] = el}
                  className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                  style={{
                    transform: scrollDirection === 'down' ? 'translateX(100px)' : 'translateX(-100px)',
                    opacity: 0,
                    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  {/* Card Header */}
                  <div className="mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center text-2xl`}>
                      {service.icon}
                    </div>
                  </div>

                  {/* Card Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
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
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection 