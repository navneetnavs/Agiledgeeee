import React, { useEffect, useRef, useState } from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'

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
                const element = document.getElementById('services');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }} className="text-gray-400 hover:text-green-400 transition-all duration-300 flex items-center group">
                <span className="w-1 h-1 bg-green-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                Software Development
              </a></li>
              <li><a href="/#services" onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('services');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }} className="text-gray-400 hover:text-green-400 transition-all duration-300 flex items-center group">
                <span className="w-1 h-1 bg-green-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                Cloud Solutions
              </a></li>
              <li><a href="/#services" onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('services');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }} className="text-gray-400 hover:text-green-400 transition-all duration-300 flex items-center group">
                <span className="w-1 h-1 bg-green-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                DevOps & Automation
              </a></li>
              <li><a href="/#services" onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('services');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }} className="text-gray-400 hover:text-green-400 transition-all duration-300 flex items-center group">
                <span className="w-1 h-1 bg-green-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                AI & Machine Learning
              </a></li>
              <li><a href="/#services" onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('services');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
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
              <li><a href="https://www.linkedin.com/company/agiledge/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-all duration-300 flex items-center group">
                <span className="w-1 h-1 bg-green-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                Our Expertise
              </a></li>
              <li><a href="https://medium.com/pickme-engineering-blog/optimizing-devops-pipelines-mastering-kubernetes-docker-ci-cd-automation-a304e3df00c6" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-all duration-300 flex items-center group">
                <span className="w-1 h-1 bg-green-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                DevOps Insights
              </a></li>
              <li><a href="https://www.akamai.com/blog/cloud/cloud-migration-strategy?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-all duration-300 flex items-center group">
                <span className="w-1 h-1 bg-green-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                Cloud Migration
              </a></li>
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
                  <p className="text-gray-300 font-medium">Our Office</p>
                  <p className="text-gray-400 text-sm">
                  Rua Augusto Rosa 79<br />
                  Porto 4000-098, Portugal
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
                      icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z", 
                      name: "Instagram",
                      href: "#"
                    },
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
              © 2025 <span className="text-green-400 font-semibold">Agiledge Technologies</span>. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 