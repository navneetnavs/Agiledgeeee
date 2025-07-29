import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const Freqques = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  const faqData = [
    {
      id: 1,
      question: "What industries does Agiledge typically serve?",
      answer: "We work with startups, enterprises, and tech-driven companies across sectors like FinTech, HealthTech, E-commerce, and SaaS to deliver scalable DevOps and cloud infrastructure solutions.",
      icon: "🏢",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      question: "How does Agiledge ensure security and compliance in DevOps workflows?",
      answer: "Our DevOps practices include infrastructure-as-code, automated testing, and continuous monitoring with a strong focus on compliance standards like ISO, SOC 2, and GDPR.",
      icon: "🛡️",
      color: "from-green-500 to-green-600"
    },
    {
      id: 3,
      question: "Can Agiledge support multi-cloud and hybrid infrastructure setups?",
      answer: "Yes, we design and manage robust architectures across AWS, GCP, Azure, and hybrid environments, ensuring seamless orchestration and cost-efficiency.",
      icon: "☁️",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 4,
      question: "Do you offer post-deployment monitoring and support?",
      answer: "Absolutely. We provide 24/7 infrastructure monitoring, incident management, and performance optimization as part of our managed DevOps services.",
      icon: "📊",
      color: "from-orange-500 to-orange-600"
    },
    {
      id: 5,
      question: "How long does a typical DevOps transformation project take?",
      answer: "Project timelines vary based on scope, but most engagements range from 4 to 12 weeks, including assessment, setup, automation, and knowledge transfer.",
      icon: "⏱️",
      color: "from-red-500 to-red-600"
    },
    {
      id: 6,
      question: "Does Agiledge help automate CI/CD pipelines and deployments?",
      answer: "Yes, we specialize in automating CI/CD pipelines using tools like GitHub Actions, GitLab CI, Jenkins, and more, ensuring faster, safer, and more reliable deployments for your business.",
      icon: "🤖",
      color: "from-blue-400 to-green-400"
    }
  ]

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
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
          const card = entry.target
          const delay = index * 200
          
          setTimeout(() => {
            card.style.transform = 'translateY(0px)'
            card.style.opacity = '1'
          }, delay)
        } else {
          const card = entry.target
          card.style.transform = 'translateY(50px)'
          card.style.opacity = '0'
        }
      })
    }, observerOptions)

    cardsRef.current.forEach(card => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-green-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div 
            className={`inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 backdrop-blur-md shadow-lg transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></span>
              <span className="text-green-700 text-sm font-semibold tracking-wide">Frequently Asked Questions</span>
              <svg className="w-4 h-4 text-green-600 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          <h2 
            className={`text-4xl lg:text-5xl font-bold text-gray-900 mt-8 mb-6 leading-tight transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            Got Questions? We've Got <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600">Answers</span>
          </h2>
          
          <p 
            className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            Everything you need to know about our DevOps and cloud infrastructure services. 
            Can't find what you're looking for? <span className="text-green-600 font-semibold">Get in touch</span> with our team.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {faqData.map((faq, index) => (
              <div
                key={faq.id}
                ref={el => cardsRef.current[index] = el}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
                style={{
                  transform: 'translateY(50px)',
                  opacity: 0,
                  transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                {/* Background Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${faq.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Card Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${faq.color} rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {faq.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300 leading-tight">
                        {faq.question}
                      </h3>
                    </div>
                    {/* Arrow Icon */}
                    <div className={`w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-green-100 transition-all duration-300 transform group-hover:rotate-180`}>
                      <svg className="w-4 h-4 text-gray-600 group-hover:text-green-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Answer */}
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      hoveredIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {faq.answer}
                      </p>
                      
                      {/* Decorative Line */}
                      <div className="mt-6 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full w-0 group-hover:w-full transition-all duration-700"></div>
                    </div>
                  </div>

                  {/* Hover Indicator */}
                  <div className={`absolute bottom-4 right-4 w-2 h-2 bg-gradient-to-r ${faq.color} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-150`}></div>
                </div>

                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${faq.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div 
          className={`text-center mt-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl p-8 border border-green-500/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team of DevOps experts is here to help you understand how we can transform your infrastructure and accelerate your digital journey.
            </p>
            <div className="flex justify-center">
              <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Freqques 