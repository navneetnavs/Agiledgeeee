import React, { useState, useEffect, useRef } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [selectedCountry, setSelectedCountry] = useState('🇺🇸 United States')
  const [isCountryOpen, setIsCountryOpen] = useState(false)
  const countryDropdownRef = useRef(null)

  const countries = [
    { name: '🇺🇸 United States', flag: '🇺🇸' },
    { name: '🇮🇳 India', flag: '🇮🇳' },
    { name: '🇦🇺 Australia', flag: '🇦🇺' },
    { name: '🇨🇦 Canada', flag: '🇨🇦' },
    { name: '🇬🇧 United Kingdom', flag: '🇬🇧' }
  ]

  const servicesData = [
    {
      title: "Software Development",
      items: [
        "Custom Web Applications",
        "Mobile App Development",
        "E-commerce Solutions",
        "API Development & Integration"
      ]
    },
    {
      title: "Cloud & DevOps",
      items: [
        "Cloud Migration",
        "DevOps Automation",
        "Kubernetes & Docker",
        "CI/CD Pipeline Setup"
      ]
    },
    {
      title: "AI & Data",
      items: [
        "Machine Learning Solutions",
        "Data Analytics",
        "Business Intelligence",
        "Predictive Analytics"
      ]
    },
    {
      title: "Digital Transformation",
      items: [
        "Legacy System Modernization",
        "Process Automation",
        "Digital Strategy Consulting",
        "Technology Assessment"
      ]
    }
  ]

  const hireData = [
    {
      title: "Development Team",
      items: [
        "Full-Stack Developers",
        "Frontend Specialists",
        "Backend Engineers",
        "Mobile Developers"
      ]
    },
    {
      title: "Expertise Areas",
      items: [
        "React & Next.js",
        "Node.js & Python",
        "AWS & Azure",
        "DevOps & Automation"
      ]
    },
    {
      title: "Project Types",
      items: [
        "MVP Development",
        "Enterprise Solutions",
        "Startup Support",
        "Legacy Migration"
      ]
    }
  ]

  const resourcesData = [
    {
      title: "Learning",
      items: [
        "Technical Blog",
        "Case Studies",
        "Webinars",
        "Documentation"
      ]
    },
    {
      title: "Tools & Resources",
      items: [
        "Development Tools",
        "API Libraries",
        "Code Snippets",
        "Best Practices"
      ]
    },
    {
      title: "Support",
      items: [
        "Knowledge Base",
        "Community Forum",
        "Technical Support",
        "Training Programs"
      ]
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target)) {
        setIsCountryOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-blue-500/5 to-purple-500/5 opacity-0 transition-opacity duration-500"
           style={{ opacity: isScrolled ? 1 : 0 }}></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              {/* Animated Logo Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              
              {/* Logo Container */}
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-3 shadow-lg border border-gray-700 group-hover:border-green-500 transition-all duration-300">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">A</span>
                  </div>
                  <div className="text-white font-bold text-xl">giledge</div>
                </div>
              </div>
            </div>
            

          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            
            {/* Hire Us Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setActiveDropdown('hire')}
                onMouseLeave={() => setActiveDropdown(null)}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 hover:text-green-600 font-medium transition-all duration-300 hover:bg-green-50 group"
              >
                <span>Hire Us</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {activeDropdown === 'hire' && (
                <div
                  onMouseEnter={() => setActiveDropdown('hire')}
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 p-6 opacity-100 scale-100 transition-all duration-200"
                >
                  <div className="space-y-4">
                    {hireData.map((section, index) => (
                      <div key={index} className="space-y-3">
                        <h3 className="text-green-600 font-semibold text-sm flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                          {section.title}
                        </h3>
                        <ul className="space-y-2">
                          {section.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <a
                                href="#"
                                className="text-gray-700 hover:text-green-600 text-sm transition-all duration-200 flex items-center group/item"
                              >
                                <span className="w-1 h-1 bg-gray-300 rounded-full mr-3 group-hover/item:bg-green-500 transition-colors duration-200"></span>
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 hover:text-green-600 font-medium transition-all duration-300 hover:bg-green-50 group"
              >
                <span>Services</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {activeDropdown === 'services' && (
                <div
                  onMouseEnter={() => setActiveDropdown('services')}
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="absolute top-full left-0 mt-2 w-96 bg-white rounded-xl shadow-2xl border border-gray-100 p-6 opacity-100 scale-100 transition-all duration-200"
                >
                  <div className="grid grid-cols-2 gap-6">
                    {servicesData.map((service, index) => (
                      <div key={index} className="space-y-3">
                        <h3 className="text-green-600 font-semibold text-sm flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                          {service.title}
                        </h3>
                        <ul className="space-y-2">
                          {service.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <a
                                href="#"
                                className="text-gray-700 hover:text-green-600 text-sm transition-all duration-200 flex items-center group/item"
                              >
                                <span className="w-1 h-1 bg-gray-300 rounded-full mr-3 group-hover/item:bg-green-500 transition-colors duration-200"></span>
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Resources Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setActiveDropdown('resources')}
                onMouseLeave={() => setActiveDropdown(null)}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 hover:text-green-600 font-medium transition-all duration-300 hover:bg-green-50 group"
              >
                <span>Resources</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {activeDropdown === 'resources' && (
                <div
                  onMouseEnter={() => setActiveDropdown('resources')}
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 p-6 opacity-100 scale-100 transition-all duration-200"
                >
                  <div className="space-y-4">
                    {resourcesData.map((section, index) => (
                      <div key={index} className="space-y-3">
                        <h3 className="text-green-600 font-semibold text-sm flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                          {section.title}
                        </h3>
                        <ul className="space-y-2">
                          {section.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <a
                                href="#"
                                className="text-gray-700 hover:text-green-600 text-sm transition-all duration-200 flex items-center group/item"
                              >
                                <span className="w-1 h-1 bg-gray-300 rounded-full mr-3 group-hover/item:bg-green-500 transition-colors duration-200"></span>
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* About Us */}
            <a href="#" className="px-4 py-2 rounded-lg text-gray-700 hover:text-green-600 font-medium transition-all duration-300 hover:bg-green-50">
              About Us
            </a>
            
            {/* Career */}
            <a href="#" className="px-4 py-2 rounded-lg text-gray-700 hover:text-green-600 font-medium transition-all duration-300 hover:bg-green-50">
              Careers
            </a>
          </div>

          {/* Right Side - Country Selector & CTA */}
          <div className="flex items-center space-x-4">
            
            {/* Country Selector */}
            <div className="relative" ref={countryDropdownRef}>
              <button
                onClick={() => setIsCountryOpen(!isCountryOpen)}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium transition-all duration-300 group"
              >
                <span className="text-lg">{selectedCountry.split(' ')[0]}</span>
                <span className="text-sm hidden sm:block">{selectedCountry.split(' ').slice(1).join(' ')}</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
                              {isCountryOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 opacity-100 scale-100 transition-all duration-200">
                  {countries.map((country, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedCountry(country.name)
                        setIsCountryOpen(false)
                      }}
                      className="w-full px-4 py-2 text-left text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-200 flex items-center space-x-3"
                    >
                      <span className="text-lg">{country.flag}</span>
                      <span className="text-sm">{country.name.split(' ').slice(1).join(' ')}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <button className="hidden sm:flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <span>Get Started</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 py-4 opacity-100 scale-100 transition-all duration-200">
            <div className="space-y-4">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:text-green-600 font-medium">Hire Us</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:text-green-600 font-medium">Services</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:text-green-600 font-medium">Resources</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:text-green-600 font-medium">About Us</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:text-green-600 font-medium">Career</a>
              <button className="w-full mx-4 px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-xl">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar 