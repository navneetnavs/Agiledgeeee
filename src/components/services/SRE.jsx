import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const SRE = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-indigo-50 to-purple-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10"></div>
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full text-white font-semibold text-sm mb-8">
              <span className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></span>
              Cloud & DevOps Services
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              24x7 <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">SRE</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ensure your systems run reliably around the clock with our comprehensive Site Reliability Engineering services
            </p>
            <div className="flex justify-center mt-8">
              <div className="flex space-x-8 text-center">
                <div className="px-6 py-3 bg-white rounded-xl shadow-lg">
                  <div className="text-2xl font-bold text-indigo-600">99.99%</div>
                  <div className="text-sm text-gray-600">Uptime</div>
                </div>
                <div className="px-6 py-3 bg-white rounded-xl shadow-lg">
                  <div className="text-2xl font-bold text-purple-600">90%</div>
                  <div className="text-sm text-gray-600">Faster Response</div>
                </div>
                <div className="px-6 py-3 bg-white rounded-xl shadow-lg">
                  <div className="text-2xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-gray-600">Monitoring</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is 24x7 SRE?</h2>
            <p className="text-gray-700 mb-6">
              Site Reliability Engineering (SRE) is a discipline that combines software engineering and operations to create scalable and highly reliable software systems. Our 24x7 SRE services ensure your applications and infrastructure are monitored, maintained, and optimized around the clock, providing peace of mind and preventing costly downtime.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why 24x7 SRE is Essential</h3>
            <p className="text-gray-700 mb-6">
              In today's digital-first world, system downtime can cost businesses millions in lost revenue and damage to reputation. Our 24x7 SRE services provide continuous monitoring, proactive issue detection, and rapid response to ensure your systems maintain optimal performance and availability at all times. This is especially critical for businesses serving global customers across different time zones.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our SRE Services</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-semibold text-orange-600 mb-3">24/7 Monitoring</h4>
                <p className="text-gray-700">Comprehensive monitoring of applications, infrastructure, and business metrics with real-time alerting and automated response systems.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-semibold text-red-600 mb-3">Incident Response</h4>
                <p className="text-gray-700">Rapid incident detection, escalation, and resolution with dedicated on-call engineers available 24/7 to handle emergencies.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-semibold text-purple-600 mb-3">Performance Optimization</h4>
                <p className="text-gray-700">Continuous analysis and optimization of system performance, capacity planning, and scalability improvements.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-semibold text-green-600 mb-3">Reliability Engineering</h4>
                <p className="text-gray-700">Implementation of SRE best practices including error budgets, SLIs/SLOs, and reliability-focused development practices.</p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Benefits</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>99.9%+ Uptime:</strong> Ensure your systems are available when your customers need them</li>
              <li><strong>Proactive Issue Detection:</strong> Identify and resolve problems before they impact users</li>
              <li><strong>Rapid Response:</strong> 24/7 on-call support with guaranteed response times</li>
              <li><strong>Performance Optimization:</strong> Continuous improvement of system performance and efficiency</li>
              <li><strong>Cost Reduction:</strong> Prevent costly downtime and optimize resource utilization</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Success Story: E-Commerce Platform's Reliability Journey</h3>
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl mb-6">
              <p className="text-gray-700 mb-4">
                A leading e-commerce platform was experiencing frequent outages during peak shopping periods, resulting in significant revenue loss and customer dissatisfaction. They partnered with Agiledge to implement comprehensive 24x7 SRE services.
              </p>
              <p className="text-gray-700 mb-4">
                Our team implemented advanced monitoring, automated alerting, and incident response procedures. The results were transformative:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>99.99% uptime during peak shopping seasons</li>
                <li>90% reduction in incident response time</li>
                <li>Zero revenue loss due to system downtime</li>
                <li>Improved customer satisfaction scores</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ready for 24x7 Reliability?</h3>
            <p className="text-gray-700 mb-8">
              Whether you're looking to implement SRE practices from scratch or enhance your existing reliability engineering capabilities, our team of SRE experts is here to help. We'll assess your current systems, implement comprehensive monitoring and response procedures, and ensure your applications run reliably around the clock.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready for 24x7 Reliability?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Let's discuss how SRE can ensure your systems never sleep
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
              Contact Us Today
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SRE;