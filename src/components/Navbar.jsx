import { useState, useEffect, useRef } from 'react'

const Navbar = () => {
  const [isHireOpen, setIsHireOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  const [isCountryOpen, setIsCountryOpen] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState('India')
  const countryDropdownRef = useRef(null)

  const hireData = [
    {
      title: "Hiring Models",
      items: [
        "Dedicated Team",
        "Project-Based",
        "Hourly Consulting",
        "Fixed Price"
      ]
    },
    {
      title: "Team Sizes",
      items: [
        "1-5 Developers",
        "6-10 Developers", 
        "11-20 Developers",
        "20+ Developers"
      ]
    },
    {
      title: "Technologies",
      items: [
        "React/Node.js",
        "Python/Django",
        "Java/Spring",
        "Mobile (iOS/Android)"
      ]
    }
  ]

  const servicesData = [
    {
      title: "Software Product Engineering",
      items: [
        "Web Application Development",
        "Mobile Application Development", 
        "Product Modernization & Maintenance",
        "QA & Test Engineering"
      ]
    },
    {
      title: "Cloud",
      items: [
        "Cloud Consulting",
        "Cloud Migration",
        "Cloud Security",
        "Managed Services"
      ]
    },
    {
      title: "DevOps",
      items: [
        "Kubernetes & Container Adoption",
        "CI/CD & Infra Automation"
      ],
      subSection: {
        title: "Data Engineering & ML",
        items: [
          "Data Engineering & Pipeline",
          "AI/ML"
        ]
      }
    },
    {
      title: "ServiceNow Consultation",
      items: [
        "ServiceNow Support",
        "ServiceNow Customization",
        "Custom ServiceNow App Development",
        "ServiceNow Testing"
      ]
    }
  ]

  const resourcesData = [
    {
      title: "Documentation",
      items: [
        "API Documentation",
        "Technical Guides",
        "Best Practices",
        "Case Studies"
      ]
    },
    {
      title: "Learning",
      items: [
        "Tutorials",
        "Webinars",
        "Blog Posts",
        "Video Courses"
      ]
    },
    {
      title: "Tools",
      items: [
        "Development Tools",
        "Testing Tools",
        "Deployment Tools",
        "Monitoring Tools"
      ]
    },
    {
      title: "Support",
      items: [
        "Knowledge Base",
        "FAQ",
        "Community Forum",
        "Contact Support"
      ]
    }
  ]

  const countries = [
    { name: 'Liberia', flag: '🇱🇷' },
    { name: 'Australia', flag: '🇦🇺' },
    { name: 'Iceland', flag: '🇮🇸' },
    { name: 'India', flag: '🇮🇳' },
    { name: 'United States', flag: '🇺🇸' }
  ]

  // Close country dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target)) {
        setIsCountryOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-green-600">{'{ag}'}</span>
              <div className="ml-2">
                <div className="text-lg font-bold text-gray-900">Agiledge</div>
                <div className="text-xs text-gray-600">Technologies Pvt. Ltd.</div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Hire us Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsHireOpen(true)}
                onMouseLeave={() => setIsHireOpen(false)}
                className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 flex items-center"
              >
                Hire us
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Hire us Dropdown Menu */}
              {isHireOpen && (
                <div
                  onMouseEnter={() => setIsHireOpen(true)}
                  onMouseLeave={() => setIsHireOpen(false)}
                  className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-lg shadow-xl border border-gray-200 p-6"
                >
                  <div className="grid grid-cols-3 gap-6">
                    {hireData.map((section, index) => (
                      <div key={index} className="space-y-3">
                        <h3 className="text-green-600 font-semibold text-sm">
                          {section.title}
                        </h3>
                        <ul className="space-y-2">
                          {section.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <a
                                href="#"
                                className="text-gray-700 hover:text-green-600 text-sm transition-colors duration-200 block"
                              >
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
            <div className="relative">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 flex items-center"
              >
                Services
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Services Dropdown Menu */}
              {isServicesOpen && (
                <div
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="absolute top-full left-0 mt-2 w-[800px] bg-white rounded-lg shadow-xl border border-gray-200 p-6"
                >
                  <div className="grid grid-cols-4 gap-6">
                    {servicesData.map((service, index) => (
                      <div key={index} className="space-y-3">
                        <h3 className="text-green-600 font-semibold text-sm">
                          {service.title}
                        </h3>
                        <ul className="space-y-2">
                          {service.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <a
                                href="#"
                                className="text-gray-700 hover:text-green-600 text-sm transition-colors duration-200 block"
                              >
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                        {service.subSection && (
                          <div className="mt-4 pt-3 border-t border-gray-100">
                            <h4 className="text-green-600 font-semibold text-sm mb-2">
                              {service.subSection.title}
                            </h4>
                            <ul className="space-y-2">
                              {service.subSection.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                  <a
                                    href="#"
                                    className="text-gray-700 hover:text-green-600 text-sm transition-colors duration-200 block"
                                  >
                                    {item}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
                className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 flex items-center"
              >
                Resources
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Resources Dropdown Menu */}
              {isResourcesOpen && (
                <div
                  onMouseEnter={() => setIsResourcesOpen(true)}
                  onMouseLeave={() => setIsResourcesOpen(false)}
                  className="absolute top-full left-0 mt-2 w-[800px] bg-white rounded-lg shadow-xl border border-gray-200 p-6"
                >
                  <div className="grid grid-cols-4 gap-6">
                    {resourcesData.map((section, index) => (
                      <div key={index} className="space-y-3">
                        <h3 className="text-green-600 font-semibold text-sm">
                          {section.title}
                        </h3>
                        <ul className="space-y-2">
                          {section.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <a
                                href="#"
                                className="text-gray-700 hover:text-green-600 text-sm transition-colors duration-200 block"
                              >
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
            <a href="#about" className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200">
              About Us
            </a>
            <a href="#career" className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200">
              Career
            </a>
          </div>

          {/* Country Dropdown */}
          <div className="hidden md:block relative" ref={countryDropdownRef}>
            <button
              onClick={() => setIsCountryOpen(!isCountryOpen)}
              className="flex items-center space-x-2 text-gray-700 hover:text-green-600 font-medium transition-colors duration-200"
            >
              <span className="text-lg">
                {countries.find(country => country.name === selectedCountry)?.flag || '🇮🇳'}
              </span>
              <span>{selectedCountry}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Country Dropdown Menu */}
            {isCountryOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                {countries.map((country, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedCountry(country.name)
                      setIsCountryOpen(false)
                    }}
                    className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="text-lg">{country.flag}</span>
                    <span className="text-gray-700">{country.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-green-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 