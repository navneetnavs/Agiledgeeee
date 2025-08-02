import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const CloudExpertise = () => {
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
              Cloud <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Expertise</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Leverage our deep cloud expertise to build scalable, secure, and cost-effective cloud solutions
            </p>
            <div className="flex justify-center mt-8">
              <div className="flex space-x-8 text-center">
                <div className="px-6 py-3 bg-white rounded-xl shadow-lg">
                  <div className="text-2xl font-bold text-indigo-600">40%</div>
                  <div className="text-sm text-gray-600">Cost Reduction</div>
                </div>
                <div className="px-6 py-3 bg-white rounded-xl shadow-lg">
                  <div className="text-2xl font-bold text-purple-600">60%</div>
                  <div className="text-sm text-gray-600">Performance Boost</div>
                </div>
                <div className="px-6 py-3 bg-white rounded-xl shadow-lg">
                  <div className="text-2xl font-bold text-blue-600">Zero</div>
                  <div className="text-sm text-gray-600">Compliance Issues</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Cloud Expertise?</h2>
            <p className="text-gray-700 mb-6">
              Cloud expertise encompasses deep knowledge and experience in designing, implementing, and managing cloud-based solutions across multiple platforms. At Agiledge, our cloud experts help organizations navigate the complex cloud landscape, from initial strategy and architecture design to ongoing optimization and management. We specialize in AWS, Azure, and Google Cloud Platform, providing vendor-agnostic solutions that best fit your business needs.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why Cloud Expertise is Critical</h3>
            <p className="text-gray-700 mb-6">
              The cloud landscape is constantly evolving with new services, pricing models, and best practices emerging regularly. Organizations need expert guidance to make informed decisions about cloud adoption, architecture design, and cost optimization. Our cloud expertise ensures you leverage the right services at the right time, avoiding common pitfalls and maximizing the value of your cloud investment.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Cloud Expertise Services</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-semibold text-cyan-600 mb-3">Cloud Strategy & Architecture</h4>
                <p className="text-gray-700">Design comprehensive cloud strategies and architectures that align with your business objectives, ensuring scalability, security, and cost-effectiveness.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-semibold text-blue-600 mb-3">Multi-Cloud Solutions</h4>
                <p className="text-gray-700">Implement and manage solutions across multiple cloud providers to optimize costs, improve reliability, and avoid vendor lock-in.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-semibold text-purple-600 mb-3">Cloud Security & Compliance</h4>
                <p className="text-gray-700">Implement robust security measures and ensure compliance with industry standards and regulations across your cloud infrastructure.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-semibold text-green-600 mb-3">Cost Optimization</h4>
                <p className="text-gray-700">Analyze and optimize cloud costs through right-sizing, reserved instances, and efficient resource management strategies.</p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Benefits</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>Expert Guidance:</strong> Navigate complex cloud decisions with confidence</li>
              <li><strong>Cost Optimization:</strong> Reduce cloud spending while improving performance</li>
              <li><strong>Security & Compliance:</strong> Implement enterprise-grade security measures</li>
              <li><strong>Scalability:</strong> Design architectures that grow with your business</li>
              <li><strong>Vendor Independence:</strong> Avoid lock-in and optimize across multiple providers</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Success Story: Enterprise Retailer's Cloud Transformation</h3>
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-xl mb-6">
              <p className="text-gray-700 mb-4">
                A major retail enterprise was struggling with legacy infrastructure that couldn't handle seasonal traffic spikes. They partnered with Agiledge to design and implement a comprehensive cloud strategy.
              </p>
              <p className="text-gray-700 mb-4">
                Our cloud experts designed a multi-cloud architecture that delivered impressive results:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>99.9% uptime during peak shopping seasons</li>
                <li>40% reduction in infrastructure costs</li>
                <li>Improved application performance by 60%</li>
                <li>Enhanced security posture with zero compliance violations</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Leverage Cloud Expertise?</h3>
            <p className="text-gray-700 mb-8">
              Whether you're just starting your cloud journey or looking to optimize existing cloud infrastructure, our team of cloud experts is here to help. We'll assess your current environment, design a tailored cloud strategy, and implement solutions that drive measurable business value while ensuring security, scalability, and cost-effectiveness.
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
              Ready to Harness Cloud Expertise?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Let's discuss how our cloud expertise can transform your business
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

export default CloudExpertise;