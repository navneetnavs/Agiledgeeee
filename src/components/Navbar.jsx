import React, { useState, useEffect, useRef } from 'react'
import AgiledgeLogo from './AgiledgeLogo'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [isServicesClicked, setIsServicesClicked] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const countryDropdownRef = useRef(null)
  const location = useLocation()

  const servicesData = [
    {
      name: "Cloud Migration",
      link: "/services/cloud-migration"
    },
    {
      name: "24X7 SRE",
      link: "/services/24x7-sre"
    },
    {
      name: "DevOps",
      link: "/services/devops"
    },
    {
      name: "Cloud Expertise",
      hasSubmenu: true,
      submenu: [
        { name: "Monitoring & Observability", link: "/services/cloud-expertise/monitoring" },
        { name: "Cloud-Native Architectures", link: "/services/cloud-expertise/architectures" },
        { name: "Cloud Cost Management", link: "/services/cloud-expertise/cost-management" },
        { name: "Cloud Security", link: "/services/cloud-expertise/security" },
        { name: "Well-Architected Review", link: "/services/cloud-expertise/well-architected" }
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

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setMobileServicesOpen(false)
    setActiveDropdown(null)
    setIsServicesClicked(false)
  }, [location])

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

  // Handle mobile navigation link clicks
  const handleMobileNavClick = () => {
    setIsMobileMenuOpen(false)
    setMobileServicesOpen(false)
    setActiveDropdown(null)
    setIsServicesClicked(false)
  }

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
                <Link to="/" className="flex items-center" onClick={handleMobileNavClick}>
                  <AgiledgeLogo size="medium" />
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
                onMouseEnter={() => !isServicesClicked && setActiveDropdown('services')}
                onMouseLeave={() => !isServicesClicked && setActiveDropdown(null)}
                onClick={() => {
                  setIsServicesClicked(!isServicesClicked)
                  setActiveDropdown(isServicesClicked ? null : 'services')
                }}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 hover:text-green-600 font-medium transition-all duration-300 hover:bg-green-50 group"
              >
                <span>Services</span>
                <svg className={`w-4 h-4 transition-transform duration-300 ${(activeDropdown === 'services' || isServicesClicked) ? 'rotate-180' : 'group-hover:rotate-180'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {(activeDropdown === 'services' || isServicesClicked) && (
                <div
                  onMouseEnter={() => setActiveDropdown('services')}
                  onMouseLeave={() => !isServicesClicked && setActiveDropdown(null)}
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 p-4 opacity-100 scale-100 transition-all duration-200"
                >
                  <div className="space-y-2">
                    {servicesData.map((service, index) => (
                      <div key={index} className="relative group/item">
                        {service.hasSubmenu ? (
                          <div className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                            <span className="text-gray-700 text-sm font-medium">{service.name}</span>
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            
                            {/* Submenu */}
                            <div className="absolute left-full top-0 ml-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 p-4 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200">
                              <div className="space-y-2">
                                {service.submenu.map((subItem, subIndex) => (
                                  <Link
                                    key={subIndex}
                                    to={subItem.link}
                                    className="block py-2 px-3 text-gray-700 hover:text-green-600 text-sm rounded-lg hover:bg-gray-50 transition-all duration-200"
                                    onClick={() => {
                                      setActiveDropdown(null)
                                      setIsServicesClicked(false)
                                    }}
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <Link
                            to={service.link}
                            className="block py-2 px-3 text-gray-700 hover:text-green-600 text-sm rounded-lg hover:bg-gray-50 transition-all duration-200"
                            onClick={() => {
                              setActiveDropdown(null)
                              setIsServicesClicked(false)
                            }}
                          >
                            {service.name}
                          </Link>
                        )}
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
            <div className="space-y-4 px-4">
              <Link to="/" className="block py-2 text-gray-700 hover:text-green-600 font-medium" onClick={handleMobileNavClick}>Home</Link>
              <Link to="/about" className="block py-2 text-gray-700 hover:text-green-600 font-medium" onClick={handleMobileNavClick}>About Us</Link>
              <Link to="/contact" className="block py-2 text-gray-700 hover:text-green-600 font-medium" onClick={handleMobileNavClick}>Contact</Link>
              <Link to="/careers" className="block py-2 text-gray-700 hover:text-green-600 font-medium" onClick={handleMobileNavClick}>Careers</Link>
              
              {/* Mobile Services */}
              <div>
                <button 
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-green-600 font-medium"
                >
                  <span className="text-sm font-semibold">Services</span>
                  <svg className={`w-4 h-4 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {mobileServicesOpen && (
                  <div className="space-y-2 mt-2">
                    <Link to="/services/cloud-migration" className="block py-2 text-gray-700 hover:text-green-600 text-sm" onClick={handleMobileNavClick}>Cloud Migration</Link>
                    <Link to="/services/24x7-sre" className="block py-2 text-gray-700 hover:text-green-600 text-sm" onClick={handleMobileNavClick}>24X7 SRE</Link>
                    <Link to="/services/devops" className="block py-2 text-gray-700 hover:text-green-600 text-sm" onClick={handleMobileNavClick}>DevOps</Link>
                    
                    {/* Cloud Expertise with sub-items */}
                    <div className="py-2">
                      <div className="text-gray-700 text-sm font-medium mb-2">Cloud Expertise</div>
                      <div className="pl-4 space-y-1">
                        <Link to="/services/cloud-expertise/monitoring" className="block py-1 text-gray-600 hover:text-green-600 text-sm" onClick={handleMobileNavClick}>Monitoring & Observability</Link>
                        <Link to="/services/cloud-expertise/architectures" className="block py-1 text-gray-600 hover:text-green-600 text-sm" onClick={handleMobileNavClick}>Cloud-Native Architectures</Link>
                        <Link to="/services/cloud-expertise/cost-management" className="block py-1 text-gray-600 hover:text-green-600 text-sm" onClick={handleMobileNavClick}>Cloud Cost Management</Link>
                        <Link to="/services/cloud-expertise/security" className="block py-1 text-gray-600 hover:text-green-600 text-sm" onClick={handleMobileNavClick}>Cloud Security</Link>
                        <Link to="/services/cloud-expertise/well-architected" className="block py-1 text-gray-600 hover:text-green-600 text-sm" onClick={handleMobileNavClick}>Well-Architected Review</Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <button className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
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