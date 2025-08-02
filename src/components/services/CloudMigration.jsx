import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const CloudMigration = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);

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
              Cloud <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Migration</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Seamlessly transition your infrastructure to the cloud with our proven migration strategies
            </p>
            <div className="flex justify-center mt-8">
              <div className="flex space-x-8 text-center">
                <div className="px-6 py-3 bg-white rounded-xl shadow-lg">
                  <div className="text-2xl font-bold text-indigo-600">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime</div>
                </div>
                <div className="px-6 py-3 bg-white rounded-xl shadow-lg">
                  <div className="text-2xl font-bold text-purple-600">40%</div>
                  <div className="text-sm text-gray-600">Cost Reduction</div>
                </div>
                <div className="px-6 py-3 bg-white rounded-xl shadow-lg">
                  <div className="text-2xl font-bold text-blue-600">Zero</div>
                  <div className="text-sm text-gray-600">Downtime</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Cloud Migration?</h2>
            <p className="text-gray-700 mb-6">
              Cloud migration is the process of moving digital business operations into the cloud. This includes transferring data, applications, and IT processes from on-premises infrastructure to cloud-based solutions. At Agiledge, we specialize in creating seamless migration strategies that minimize downtime and maximize efficiency.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why Cloud Migration Matters</h3>
            <p className="text-gray-700 mb-6">
              In today's digital landscape, cloud migration is not just an option—it's a necessity for businesses looking to scale, reduce costs, and improve operational efficiency. Cloud migration enables organizations to leverage the power of scalable infrastructure, enhanced security, and improved performance while reducing capital expenditures on hardware and maintenance.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Migration Approach</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-semibold text-blue-600 mb-3">Assessment & Planning</h4>
                <p className="text-gray-700">We begin with a comprehensive analysis of your current infrastructure, identifying workloads suitable for migration and creating a detailed roadmap.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-semibold text-purple-600 mb-3">Strategy Development</h4>
                <p className="text-gray-700">Our experts design a migration strategy tailored to your business needs, considering factors like cost, performance, and security requirements.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-semibold text-green-600 mb-3">Execution & Testing</h4>
                <p className="text-gray-700">We execute the migration with minimal disruption, ensuring all systems are thoroughly tested and validated before going live.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-semibold text-orange-600 mb-3">Optimization & Support</h4>
                <p className="text-gray-700">Post-migration, we optimize performance and provide ongoing support to ensure your cloud infrastructure runs at peak efficiency.</p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Benefits</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>Cost Reduction:</strong> Eliminate capital expenditures on hardware and reduce operational costs</li>
              <li><strong>Scalability:</strong> Easily scale resources up or down based on demand</li>
              <li><strong>Enhanced Security:</strong> Benefit from enterprise-grade security features and compliance</li>
              <li><strong>Improved Performance:</strong> Access to high-performance infrastructure and global CDN</li>
              <li><strong>Disaster Recovery:</strong> Built-in backup and recovery solutions</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Success Story: TechCorp's Migration Journey</h3>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl mb-6">
              <p className="text-gray-700 mb-4">
                TechCorp, a mid-sized software company, was struggling with outdated on-premises infrastructure that was limiting their growth. They approached Agiledge for a comprehensive cloud migration solution.
              </p>
              <p className="text-gray-700 mb-4">
                Our team implemented a phased migration approach, starting with their development and testing environments, followed by production systems. The migration resulted in:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>40% reduction in infrastructure costs</li>
                <li>60% improvement in application performance</li>
                <li>Zero downtime during migration</li>
                <li>Enhanced security and compliance posture</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Start Your Cloud Migration?</h3>
            <p className="text-gray-700 mb-8">
              Whether you're looking to migrate a single application or your entire infrastructure, our team of cloud experts is here to help. We'll work closely with you to understand your unique requirements and create a migration plan that aligns with your business goals.
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
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Let's discuss how cloud migration can benefit your business
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

export default CloudMigration;