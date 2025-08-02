import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Automation = () => {
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Automation</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Streamline your operations with intelligent automation solutions that drive efficiency and innovation
            </p>
            <div className="flex justify-center mt-8">
              <div className="flex space-x-8 text-center">
                <div className="px-6 py-3 bg-white rounded-xl shadow-lg">
                  <div className="text-2xl font-bold text-indigo-600">70%</div>
                  <div className="text-sm text-gray-600">Time Saved</div>
                </div>
                <div className="px-6 py-3 bg-white rounded-xl shadow-lg">
                  <div className="text-2xl font-bold text-purple-600">95%</div>
                  <div className="text-sm text-gray-600">Error Reduction</div>
                </div>
                <div className="px-6 py-3 bg-white rounded-xl shadow-lg">
                  <div className="text-2xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-gray-600">Operations</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Automation?</h2>
            <p className="text-gray-700 mb-6">
              Automation is the use of technology to perform tasks with minimal human intervention. In the context of modern business operations, automation encompasses everything from simple task automation to complex workflow orchestration and intelligent process automation. At Agiledge, we help organizations leverage automation to increase efficiency, reduce errors, and focus human resources on high-value activities.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why Automation is Critical</h3>
            <p className="text-gray-700 mb-6">
              In today's fast-paced digital economy, automation is no longer a luxury—it's a competitive necessity. Organizations that embrace automation can reduce operational costs by up to 60%, improve accuracy by eliminating human error, and accelerate time-to-market for new products and services. Automation also enables businesses to scale operations efficiently without proportional increases in headcount.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Automation Services</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-semibold text-green-600 mb-3">Process Automation</h4>
                <p className="text-gray-700">Automate repetitive business processes using RPA (Robotic Process Automation) and workflow automation tools to improve efficiency and reduce manual errors.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-semibold text-blue-600 mb-3">Infrastructure Automation</h4>
                <p className="text-gray-700">Automate infrastructure provisioning, configuration management, and deployment processes using Infrastructure as Code (IaC) and DevOps practices.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-semibold text-purple-600 mb-3">CI/CD Automation</h4>
                <p className="text-gray-700">Implement automated build, test, and deployment pipelines that accelerate software delivery while maintaining quality and security standards.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-semibold text-orange-600 mb-3">Monitoring & Alerting</h4>
                <p className="text-gray-700">Set up automated monitoring systems that detect issues proactively and trigger appropriate responses without human intervention.</p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Benefits</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>Cost Reduction:</strong> Reduce operational costs by automating repetitive tasks</li>
              <li><strong>Improved Accuracy:</strong> Eliminate human error in data processing and decision-making</li>
              <li><strong>Faster Delivery:</strong> Accelerate development and deployment cycles</li>
              <li><strong>24/7 Operations:</strong> Enable round-the-clock processing and monitoring</li>
              <li><strong>Scalability:</strong> Handle increased workloads without proportional resource increases</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Success Story: FinTech Solutions' Automation Journey</h3>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl mb-6">
              <p className="text-gray-700 mb-4">
                FinTech Solutions, a financial services company, was struggling with manual data processing that was causing delays and errors in their reporting systems. They partnered with Agiledge to implement comprehensive automation solutions.
              </p>
              <p className="text-gray-700 mb-4">
                Our team implemented automated data processing workflows, CI/CD pipelines, and monitoring systems. The results were impressive:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>70% reduction in manual processing time</li>
                <li>95% reduction in data entry errors</li>
                <li>50% faster software deployment cycles</li>
                <li>24/7 automated monitoring and alerting</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Automate Your Operations?</h3>
            <p className="text-gray-700 mb-8">
              Whether you're looking to automate specific processes or implement a comprehensive automation strategy, our team of automation experts is here to help. We'll assess your current operations, identify automation opportunities, and implement solutions that drive measurable results.
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
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Let's discuss how automation can transform your operations
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

export default Automation;