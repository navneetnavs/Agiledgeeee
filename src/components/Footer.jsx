import React, { useEffect, useRef, useState } from 'react'
import Logo from './Logo'

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false)
  const footerRef = useRef(null)
  const columnsRef = useRef([])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      })
    }, observerOptions)

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const column = entry.target
          const delay = index * 150
          
          setTimeout(() => {
            column.style.transform = 'translateY(0px)'
            column.style.opacity = '1'
          }, delay)
        } else {
          const column = entry.target
          column.style.transform = 'translateY(30px)'
          column.style.opacity = '0'
        }
      })
    }, observerOptions)

    columnsRef.current.forEach(column => {
      if (column) observer.observe(column)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <footer ref={footerRef} className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          
          {/* Logo Section */}
          <div 
            ref={el => columnsRef.current[0] = el}
            className="lg:col-span-1"
            style={{
              transform: 'translateY(30px)',
              opacity: 0,
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <div className="flex items-center mb-6">
              <div className="flex items-center">
                <Logo size="large" className="text-white mr-3" />
                <div>
                  <div className="text-xs text-gray-400"></div>
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your trusted partner for innovative software solutions and digital transformation. 
              We deliver excellence through technology.
            </p>
            <div className="flex space-x-4">
              <div className="w-3 h-8 bg-gradient-to-b from-red-500 to-red-600 rounded-sm"></div>
              <div className="w-3 h-8 bg-gradient-to-b from-orange-500 to-orange-600 rounded-sm"></div>
              <div className="w-3 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-sm"></div>
            </div>
          </div>

          {/* Services Column */}
          <div 
            ref={el => columnsRef.current[1] = el}
            className="lg:col-span-1"
            style={{
              transform: 'translateY(30px)',
              opacity: 0,
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
              <span className="w-8 h-0.5 bg-gradient-to-r from-green-500 to-blue-500 mr-3"></span>
              Services
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-all duration-300 flex items-center group">
                <span className="w-1 h-1 bg-green-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                Software Development
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-all duration-300 flex items-center group">
                <span className="w-1 h-1 bg-green-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                Cloud Solutions
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-all duration-300 flex items-center group">
                <span className="w-1 h-1 bg-green-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                DevOps & Automation
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-all duration-300 flex items-center group">
                <span className="w-1 h-1 bg-green-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                AI & Machine Learning
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-all duration-300 flex items-center group">
                <span className="w-1 h-1 bg-green-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                Digital Transformation
              </a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div 
            ref={el => columnsRef.current[2] = el}
            className="lg:col-span-1"
            style={{
              transform: 'translateY(30px)',
              opacity: 0,
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
              <span className="w-8 h-0.5 bg-gradient-to-r from-green-500 to-blue-500 mr-3"></span>
              Company
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-all duration-300 flex items-center group">
                <span className="w-1 h-1 bg-green-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                About Us
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-all duration-300 flex items-center group">
                <span className="w-1 h-1 bg-green-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                Careers
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-all duration-300 flex items-center group">
                <span className="w-1 h-1 bg-green-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                Our Team
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-all duration-300 flex items-center group">
                <span className="w-1 h-1 bg-green-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                Case Studies
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-all duration-300 flex items-center group">
                <span className="w-1 h-1 bg-green-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                News & Updates
              </a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div 
            ref={el => columnsRef.current[3] = el}
            className="lg:col-span-1"
            style={{
              transform: 'translateY(30px)',
              opacity: 0,
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
              <span className="w-8 h-0.5 bg-gradient-to-r from-green-500 to-blue-500 mr-3"></span>
              Resources
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-all duration-300 flex items-center group">
                <span className="w-1 h-1 bg-green-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                Blog
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-all duration-300 flex items-center group">
                <span className="w-1 h-1 bg-green-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                Documentation
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-all duration-300 flex items-center group">
                <span className="w-1 h-1 bg-green-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                API Reference
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-all duration-300 flex items-center group">
                <span className="w-1 h-1 bg-green-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                Support Center
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-all duration-300 flex items-center group">
                <span className="w-1 h-1 bg-green-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                Community
              </a></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div 
            ref={el => columnsRef.current[4] = el}
            className="lg:col-span-2"
            style={{
              transform: 'translateY(30px)',
              opacity: 0,
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
              <span className="w-8 h-0.5 bg-gradient-to-r from-green-500 to-blue-500 mr-3"></span>
              Get In Touch
            </h3>
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300 font-medium">Our Office</p>
                  <p className="text-gray-400 text-sm">
                  Av. da Liberdade, 245, 6º Andar<br />
                  1250-143 Lisboa, Portugal
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300 font-medium">Email Us</p>
                  <a href="mailto:support@agiledge.com" className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm">
                    info@agiledge.eu
                  </a>
                </div>
              </div>

              {/* Subscribe */}
              <div className="mt-6">
                <p className="text-gray-300 font-medium mb-3">Stay Updated</p>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors duration-300"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-medium rounded-r-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-6">
                <p className="text-gray-300 font-medium mb-3">Follow Us</p>
                <div className="flex space-x-3">
                  {[
                    { icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z", name: "Facebook" },
                    { icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z", name: "Twitter" },
                    { icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z", name: "LinkedIn" },
                    { icon: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z", name: "Pinterest" }
                  ].map((social, index) => (
                    <a 
                      key={index}
                      href="#" 
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-110"
                      title={social.name}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d={social.icon}/>
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright and Legal Links */}
      <div className="relative z-10 border-t border-gray-800 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 <span className="text-green-400 font-semibold">Agiledge Technologies</span>. All Rights Reserved.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              {[
                { name: "Privacy Policy", href: "#" },
                { name: "Terms of Use", href: "#" },
                { name: "Sales and Refunds", href: "#" },
                { name: "Legal", href: "#" },
                { name: "Site Map", href: "#" }
              ].map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 