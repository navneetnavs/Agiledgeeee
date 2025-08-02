import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import Footer from '../Footer'

const MonitoringObservability = () => {
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
              Monitoring & Observability
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive monitoring solutions that provide real-time insights into your cloud infrastructure, applications, and business metrics.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>Real-time Monitoring</span>
              </div>
              <div className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                <span>Advanced Analytics</span>
              </div>
              <div className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span>Proactive Alerts</span>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Monitoring & Observability?</h2>
              <p className="text-lg text-gray-700 mb-6">
                Monitoring and observability are critical components of modern cloud infrastructure that provide visibility into system performance, 
                health, and behavior. While monitoring focuses on collecting and analyzing metrics, observability goes deeper to understand 
                the internal state of systems through logs, traces, and metrics.
              </p>
              <p className="text-lg text-gray-700">
                At Agiledge, we implement comprehensive monitoring and observability solutions that help organizations detect issues before 
                they impact users, optimize performance, and make data-driven decisions about their infrastructure.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Real-time Metrics Collection</h3>
                <p className="text-gray-700">
                  Collect and analyze metrics from all layers of your infrastructure including CPU, memory, disk, network, and application-specific metrics.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4 19h6v-6H4v6zM4 5h6V4a1 1 0 00-1-1H5a1 1 0 00-1 1v1zm0 6h6V9H4v2zm0 4h6v-2H4v2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Distributed Tracing</h3>
                <p className="text-gray-700">
                  Track requests as they flow through your microservices architecture to identify bottlenecks and performance issues.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Proactive Alerting</h3>
                <p className="text-gray-700">
                  Set up intelligent alerts that notify your team before issues become critical, reducing downtime and improving reliability.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Centralized Logging</h3>
                <p className="text-gray-700">
                  Aggregate logs from all your applications and infrastructure components for easy searching, analysis, and troubleshooting.
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 mb-12 text-white">
              <h2 className="text-3xl font-bold mb-6">Benefits of Our Monitoring & Observability Solutions</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Improved Reliability</h3>
                  <p className="text-indigo-100">
                    Detect and resolve issues before they impact users, reducing downtime and improving system reliability.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Better Performance</h3>
                  <p className="text-indigo-100">
                    Identify performance bottlenecks and optimize your applications and infrastructure for better user experience.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Cost Optimization</h3>
                  <p className="text-indigo-100">
                    Monitor resource utilization to identify opportunities for cost savings and efficient resource allocation.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Data-Driven Decisions</h3>
                  <p className="text-indigo-100">
                    Make informed decisions about infrastructure scaling and application improvements based on real data.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Approach */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Approach</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">1</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Assessment & Planning</h3>
                    <p className="text-gray-700">
                      We start by understanding your current monitoring setup, identifying gaps, and designing a comprehensive observability strategy.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">2</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Implementation</h3>
                    <p className="text-gray-700">
                      Deploy monitoring agents, configure dashboards, set up alerting rules, and integrate with your existing tools and workflows.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">3</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Training & Optimization</h3>
                    <p className="text-gray-700">
                      Train your team on using the monitoring tools effectively and continuously optimize the setup based on your evolving needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Monitoring?</h2>
              <p className="text-xl mb-8 text-green-100">
                Let us help you build a comprehensive monitoring and observability solution that provides real-time insights into your infrastructure.
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

export default MonitoringObservability 