import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import Footer from '../Footer'

const CloudNativeArchitectures = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Cloud Expertise
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Cloud-Native Architectures
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Design and implement scalable, resilient, and maintainable cloud-native applications that leverage the full power of modern cloud platforms.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                <span>Microservices Design</span>
              </div>
              <div className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                <span>Container Orchestration</span>
              </div>
              <div className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                <span>Serverless Computing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What are Cloud-Native Architectures?</h2>
              <p className="text-lg text-gray-700 mb-6">
                Cloud-native architectures are designed to take full advantage of cloud computing's distributed, scalable, and resilient nature. 
                These architectures are built around microservices, containers, and serverless computing, enabling organizations to develop, 
                deploy, and scale applications more efficiently.
              </p>
              <p className="text-lg text-gray-700">
                At Agiledge, we help organizations design and implement cloud-native architectures that are scalable, maintainable, 
                and aligned with modern development practices and cloud best practices.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Microservices Design</h3>
                <p className="text-gray-700">
                  Break down monolithic applications into smaller, independent services that can be developed, deployed, and scaled independently.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Container Orchestration</h3>
                <p className="text-gray-700">
                  Implement Kubernetes or similar platforms to manage containerized applications with automated scaling, load balancing, and service discovery.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Serverless Computing</h3>
                <p className="text-gray-700">
                  Leverage serverless platforms like AWS Lambda, Azure Functions, or Google Cloud Functions for event-driven, scalable computing.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">API-First Design</h3>
                <p className="text-gray-700">
                  Design applications with APIs as the primary interface, enabling better integration, testing, and maintainability.
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 mb-12 text-white">
              <h2 className="text-3xl font-bold mb-6">Benefits of Cloud-Native Architectures</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Scalability</h3>
                  <p className="text-indigo-100">
                    Scale applications horizontally and automatically based on demand, ensuring optimal performance and cost efficiency.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Resilience</h3>
                  <p className="text-indigo-100">
                    Build fault-tolerant systems that can handle failures gracefully and maintain high availability.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Agility</h3>
                  <p className="text-indigo-100">
                    Enable faster development cycles, continuous deployment, and rapid iteration on features.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Cost Efficiency</h3>
                  <p className="text-indigo-100">
                    Pay only for resources you use with serverless and containerized solutions, reducing infrastructure costs.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Approach */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Approach</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">1</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Architecture Assessment</h3>
                    <p className="text-gray-700">
                      Evaluate your current architecture and identify opportunities for cloud-native transformation, considering your business goals and technical constraints.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">2</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Design & Planning</h3>
                    <p className="text-gray-700">
                      Design a cloud-native architecture that aligns with your requirements, including microservices breakdown, data strategy, and deployment patterns.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">3</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Implementation & Migration</h3>
                    <p className="text-gray-700">
                      Implement the new architecture, migrate existing applications, and establish DevOps practices for continuous delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Go Cloud-Native?</h2>
              <p className="text-xl mb-8 text-green-100">
                Let us help you design and implement cloud-native architectures that scale with your business and drive innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="px-8 py-4 bg-white text-green-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300"
                >
                  Get Started
                </Link>
                <Link 
                  to="/services/cloud-expertise" 
                  className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-green-600 transition-colors duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CloudNativeArchitectures 