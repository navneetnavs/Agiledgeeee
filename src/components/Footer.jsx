import React, { useEffect, useRef, useState } from 'react'
import AgiledgeLogo from './AgiledgeLogo'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false)
  const footerRef = useRef(null)
  const columnsRef = useRef([])
  const location = useLocation();
  const navigate = useNavigate();

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
      <div className="relative z-10 container mx-auto px-6 py-16 border-t border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Logo Section */}
          <div 
            ref={el => columnsRef.current[0] = el}
            className="md:col-span-1"
            style={{
              transform: 'translateY(30px)',
              opacity: 0,
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <div className="flex items-center mb-6">
              <div className="flex items-center">
                <AgiledgeLogo size="large" />
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
            className="md:col-span-1"
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
              <li><a href="/#services" onClick={(e) => {
                e.preventDefault();
                if (location.pathname !== '/') {
                  localStorage.setItem('scrollToServices', 'true');
                  navigate('/');
                } else {
                  const element = document.getElementById('services');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }} className="text-gray-400 hover:text-green-400 transition-all duration-300 flex items-center group">
                <span className="w-1 h-1 bg-green-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                Software Development
              </a></li>
              <li><a href="/#services" onClick={(e) => {
                e.preventDefault();
                if (location.pathname !== '/') {
                  localStorage.setItem('scrollToServices', 'true');
                  navigate('/');
                } else {
                  const element = document.getElementById('services');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }} className="text-gray-400 hover:text-green-400 transition-all duration-300 flex items-center group">
                <span className="w-1 h-1 bg-green-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                Cloud Solutions
              </a></li>
              <li><a href="/#services" onClick={(e) => {
                e.preventDefault();
                if (location.pathname !== '/') {
                  localStorage.setItem('scrollToServices', 'true');
                  navigate('/');
                } else {
                  const element = document.getElementById('services');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }} className="text-gray-400 hover:text-green-400 transition-all duration-300 flex items-center group">
                <span className="w-1 h-1 bg-green-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                DevOps & Automation
              </a></li>

              <li><a href="/#services" onClick={(e) => {
                e.preventDefault();
                if (location.pathname !== '/') {
                  localStorage.setItem('scrollToServices', 'true');
                  navigate('/');
                } else {
                  const element = document.getElementById('services');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }} className="text-gray-400 hover:text-green-400 transition-all duration-300 flex items-center group">
                <span className="w-1 h-1 bg-green-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                Digital Transformation
              </a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div 
            ref={el => columnsRef.current[2] = el}
            className="md:col-span-1"
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
              <li><Link to="/about" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-green-400 transition-all duration-300 flex items-center group">
                <span className="w-1 h-1 bg-green-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                About Us
              </Link></li>
              <li><Link to="/careers" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-green-400 transition-all duration-300 flex items-center group">
                <span className="w-1 h-1 bg-green-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                Careers
              </Link></li>
            </ul>
          </div>



          {/* Contact Us Section */}
          <div 
            ref={el => columnsRef.current[3] = el}
            className="md:col-span-1"
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
                  <p className="text-gray-300 font-medium">Office</p>
                  <p className="text-gray-400 text-sm">
                  R. de Augusto Rosa 79, 4000-098 Porto, Portugal
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
                  <a href="mailto:info@agiledge.eu" className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm">
                    info@agiledge.eu
                  </a>
                </div>
              </div>



              {/* Social Media */}
              <div className="mt-6">
                <p className="text-gray-300 font-medium mb-3">Follow Us</p>
                <div className="flex space-x-3">
                  {[
                    { 
                      icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z", 
                      name: "LinkedIn",
                      href: "https://www.linkedin.com/company/agiledge/"
                    }
                  ].map((social, index) => (
                    <a 
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
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

      {/* Bottom Section - Copyright */}
      <div className="relative z-10 border-t border-gray-800 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-6">
          <div className="flex justify-center items-center">
            <div className="text-gray-400 text-sm text-center">
              © 2025 <span className="text-green-400 font-semibold">Agiledge LDA</span>. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 