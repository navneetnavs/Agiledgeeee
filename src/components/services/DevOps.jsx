import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const DevOps = () => {
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">DevOps</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Bridge the gap between development and operations with our comprehensive DevOps solutions
            </p>
            <div className="flex justify-center mt-8">
              <div className="flex space-x-8 text-center">
                <div className="px-6 py-3 bg-white rounded-xl shadow-lg">
                  <div className="text-2xl font-bold text-indigo-600">90%</div>
                  <div className="text-sm text-gray-600">Faster Delivery</div>
                </div>
                <div className="px-6 py-3 bg-white rounded-xl shadow-lg">
                  <div className="text-2xl font-bold text-purple-600">80%</div>
                  <div className="text-sm text-gray-600">Fewer Incidents</div>
                </div>
                <div className="px-6 py-3 bg-white rounded-xl shadow-lg">
                  <div className="text-2xl font-bold text-blue-600">10x</div>
                  <div className="text-sm text-gray-600">More Deployments</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is DevOps?</h2>
            <p className="text-gray-700 mb-6">
              DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to shorten the development lifecycle while delivering features, fixes, and updates frequently in close alignment with business objectives. At Agiledge, we help organizations implement DevOps practices to improve collaboration, automate processes, and accelerate delivery while maintaining quality and security.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why DevOps Matters</h3>
            <p className="text-gray-700 mb-6">
              In today's competitive digital landscape, organizations need to deliver software faster, more reliably, and with higher quality. DevOps enables teams to break down silos, automate manual processes, and create a culture of continuous improvement. Organizations that embrace DevOps can deploy code up to 30 times more frequently, with 50% fewer failures and 60% faster recovery times.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our DevOps Services</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-semibold text-indigo-600 mb-3">CI/CD Pipelines</h4>
                <p className="text-gray-700">Design and implement automated continuous integration and continuous deployment pipelines that accelerate software delivery while maintaining quality standards.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-semibold text-purple-600 mb-3">Infrastructure as Code</h4>
                <p className="text-gray-700">Implement infrastructure automation using tools like Terraform, Ansible, and CloudFormation to ensure consistent, reproducible deployments.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-semibold text-blue-600 mb-3">Container Orchestration</h4>
                <p className="text-gray-700">Deploy and manage containerized applications using Kubernetes, Docker, and other container technologies for scalable, portable deployments.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-semibold text-green-600 mb-3">DevOps Culture</h4>
                <p className="text-gray-700">Foster a collaborative DevOps culture through training, process improvement, and the implementation of best practices across development and operations teams.</p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Benefits</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>Faster Delivery:</strong> Deploy code more frequently with shorter lead times</li>
              <li><strong>Improved Quality:</strong> Catch and fix issues earlier in the development cycle</li>
              <li><strong>Better Collaboration:</strong> Break down silos between development and operations</li>
              <li><strong>Increased Reliability:</strong> Reduce deployment failures and improve recovery times</li>
              <li><strong>Cost Efficiency:</strong> Optimize resource utilization and reduce manual overhead</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Success Story: SaaS Platform's DevOps Transformation</h3>
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl mb-6">
              <p className="text-gray-700 mb-4">
                A growing SaaS platform was struggling with slow deployment cycles and frequent production issues. They partnered with Agiledge to implement a comprehensive DevOps transformation.
              </p>
              <p className="text-gray-700 mb-4">
                Our team implemented automated CI/CD pipelines, container orchestration, and monitoring systems. The transformation delivered remarkable results:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>90% reduction in deployment time</li>
                <li>80% fewer production incidents</li>
                <li>10x increase in deployment frequency</li>
                <li>Improved team collaboration and morale</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Transform Your Development Process?</h3>
            <p className="text-gray-700 mb-8">
              Whether you're starting your DevOps journey or looking to optimize existing practices, our team of DevOps experts is here to help. We'll assess your current processes, design a tailored DevOps strategy, and implement the tools and practices that will accelerate your software delivery while improving quality and reliability.
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
              Ready to Accelerate Your Delivery?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Let's discuss how DevOps can transform your development process
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

export default DevOps; 