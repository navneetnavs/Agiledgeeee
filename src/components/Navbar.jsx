import React, { useState, useEffect, useRef } from 'react'
import Logo from './Logo'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const countryDropdownRef = useRef(null)

  const servicesData = [
    {
      title: "Cloud & DevOps",
      items: [
        { name: "Cloud Migration", link: "https://www.akamai.com/blog/cloud/cloud-migration-strategy?utm_source=chatgpt.com" },
        { name: "DevOps Automation", link: "https://medium.com/pickme-engineering-blog/optimizing-devops-pipelines-mastering-kubernetes-docker-ci-cd-automation-a304e3df00c6" },
        { name: "Kubernetes & Docker", link: "https://medium.com/pickme-engineering-blog/optimizing-devops-pipelines-mastering-kubernetes-docker-ci-cd-automation-a304e3df00c6" },
        { name: "CI/CD Pipeline Setup", link: "https://medium.com/@vinoji2005/day-25-kubernetes-ci-cd-pipelines-a432dfdb6e96" }
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
        // setIsCountryOpen(false) // This line is removed
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const { t } = useTranslation()

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
              <div className="relative">
                <Link to="/">
                  <Logo size="default" />
                </Link>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            
            {/* Home */}
            <Link to="/" className="px-4 py-2 rounded-lg text-gray-700 hover:text-green-600 font-medium transition-all duration-300 hover:bg-green-50">Home</Link>
            
            {/* About Us */}
            <Link to="/about" className="px-4 py-2 rounded-lg text-gray-700 hover:text-green-600 font-medium transition-all duration-300 hover:bg-green-50">{t('About Us')}</Link>
            
            {/* Contact Us
            <Link to="/contact" className="px-4 py-2 rounded-lg text-gray-700 hover:text-green-600 font-medium transition-all duration-300 hover:bg-green-50">Contact</Link> */}
            
            {/* Careers */}
            <Link to="/careers" className="px-4 py-2 rounded-lg text-gray-700 hover:text-green-600 font-medium transition-all duration-300 hover:bg-green-50">Careers</Link>
            
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
                                href={item.link || "#"}
                                target={item.link ? "_blank" : "_self"}
                                rel={item.link ? "noopener noreferrer" : ""}
                                className="text-gray-700 hover:text-green-600 text-sm transition-all duration-200 flex items-center group/item"
                              >
                                <span className="w-1 h-1 bg-gray-300 rounded-full mr-3 group-hover/item:bg-green-500 transition-colors duration-200"></span>
                                {item.name}
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
            

            
          </div>

          {/* Right Side - Country Selector & CTA */}
          <div className="flex items-center space-x-4">
            
            {/* CTA Button */}
            <Link to="/contact" className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ml-4">Contact Us</Link>

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
              <Link to="/" className="block px-4 py-2 text-gray-700 hover:text-green-600 font-medium">Home</Link>
              <Link to="/about" className="block px-4 py-2 text-gray-700 hover:text-green-600 font-medium">About Us</Link>
              <Link to="/contact" className="block px-4 py-2 text-gray-700 hover:text-green-600 font-medium">Contact</Link>
              <Link to="/careers" className="block px-4 py-2 text-gray-700 hover:text-green-600 font-medium">Careers</Link>
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