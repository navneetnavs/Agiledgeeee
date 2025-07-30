import React, { useEffect, useRef, useState } from 'react'
import Footer from './Footer'
import CloudJourneyModal from './CloudJourneyModal'

const impactStats = [
  { label: 'Cloud Migrations', value: '50+' },
  { label: 'Client Satisfaction', value: '99%' },
  { label: 'Uptime Guarantee', value: '99.99%' },
  { label: 'Years Experience', value: '10+' },
]

const offerCards = [
  {
    icon: '☁️',
    title: 'Cloud Infrastructure',
    desc: 'Design, optimize, and secure your cloud for agility and cost efficiency.'
  },
  {
    icon: '🔄',
    title: 'DevOps Automation',
    desc: 'Accelerate delivery with CI/CD, automated testing, and deployment.'
  },
  {
    icon: '🐳',
    title: 'Kubernetes & Containers',
    desc: 'Orchestrate, scale, and manage containers for resilient, portable workloads.'
  },
  {
    icon: '💻',
    title: 'Infrastructure as Code',
    desc: 'Automate provisioning and management for repeatability and control.'
  },
  {
    icon: '📊',
    title: 'Monitoring & SRE',
    desc: 'Gain visibility, reliability, and cost control with proactive monitoring.'
  },
  {
    icon: '🔒',
    title: 'Cloud Security & Compliance',
    desc: 'Protect your data and ensure regulatory compliance with robust cloud security solutions.'
  },
]

const workStages = [
  { icon: '🧭', stage: 'Discovery', what: 'Understand your goals, challenges, and current systems.' },
  { icon: '🛠️', stage: 'Design', what: 'Create tailored cloud and infrastructure strategies.' },
  { icon: '🚀', stage: 'Implementation', what: 'Set up CI/CD, automate deployments, and migrate workloads.' },
  { icon: '⚡', stage: 'Optimization', what: 'Continuously monitor and enhance performance, cost, and scalability.' },
  { icon: '🤝', stage: 'Partnership', what: 'Act as an extension of your team, not just a vendor.' },
]

const whyAgiledge = [
  'Cloud-native experts with real-world experience',
  'End-to-end partnership, not just a vendor',
  'Proven results for startups and enterprises',
]

function useScrollReveal(refs, className = 'reveal') {
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(className)
          } else {
            entry.target.classList.remove(className)
          }
        })
      },
      { threshold: 0.15 }
    )
    refs.forEach(ref => {
      if (ref && ref.current) observer.observe(ref.current)
    })
    return () => {
      refs.forEach(ref => {
        if (ref && ref.current) observer.unobserve(ref.current)
      })
    }
  }, [refs, className])
}

const AboutUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const heroRef = useRef(null)
  const whoRef = useRef(null)
  const offerRef = useRef(null)
  const workRef = useRef(null)
  const ctaRef = useRef(null)
  const offerCardRefs = offerCards.map(() => useRef(null))

  useScrollReveal([heroRef, whoRef, offerRef, workRef, ctaRef, ...offerCardRefs])

  return (
    <>
      <style>{`
        .fade-slide {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1);
        }
        .reveal {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .card-anim {
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1), box-shadow 0.35s cubic-bezier(0.4,0,0.2,1);
        }
        .card-anim:hover {
          transform: scale(1.045) translateY(-8px);
          box-shadow: 0 8px 32px 0 rgba(34,197,94,0.13), 0 2px 16px 0 rgba(59,130,246,0.13);
        }
        .impact-anim {
          animation: impact-bounce 1.2s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes impact-bounce {
          0% { opacity: 0; transform: scale(0.8) translateY(30px); }
          60% { opacity: 1; transform: scale(1.08) translateY(-8px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .stepper-dot {
          width: 1.25rem; height: 1.25rem; border-radius: 9999px; background: linear-gradient(90deg,#38bdf8,#22d3ee); display: inline-block; margin-right: 0.75rem;
        }
        .floating-shape {
          position: absolute; z-index: 0; opacity: 0.12; filter: blur(2px); animation: floatShape 8s ease-in-out infinite alternate;
        }
        @keyframes floatShape {
          0% { transform: translateY(0) scale(1); }
          100% { transform: translateY(-30px) scale(1.08); }
        }
        .offer-card {
          transition: transform 0.7s cubic-bezier(0.22,0.61,0.36,1), background 0.7s cubic-bezier(0.22,0.61,0.36,1), box-shadow 0.7s cubic-bezier(0.22,0.61,0.36,1);
          will-change: transform, background, box-shadow;
        }
        .offer-card:hover {
          transform: scale(1.12) translateY(-16px) rotateZ(2deg);
          box-shadow: 0 32px 80px 0 rgba(34,197,94,0.12), 0 8px 32px 0 rgba(59,130,246,0.10);
          z-index: 3;
        }
        .offer-card[data-offer='0']:hover {
          background: linear-gradient(135deg, #e0f2fe 0%, #d1fae5 100%) !important;
        }
        .offer-card[data-offer='1']:hover {
          background: linear-gradient(135deg, #d1fae5 0%, #e0f2fe 100%) !important;
        }
        .offer-card[data-offer='2']:hover {
          background: linear-gradient(135deg, #fce7f3 0%, #fef9c3 100%) !important;
        }
        .offer-card[data-offer='3']:hover {
          background: linear-gradient(135deg, #fef9c3 0%, #d1fae5 100%) !important;
        }
        .offer-card[data-offer='4']:hover {
          background: linear-gradient(135deg, #ede9fe 0%, #fce7f3 100%) !important;
        }
        .offer-card[data-offer='5']:hover {
          background: linear-gradient(135deg, #fef3c7 0%, #e0f2fe 100%) !important;
        }
      `}</style>
      <div className="bg-gradient-to-br from-blue-50 via-white to-green-50 min-h-screen flex flex-col relative overflow-x-hidden">
        {/* Animated Gradient/Floating Shapes */}
        <div className="floating-shape left-10 top-10 w-40 h-40 bg-gradient-to-br from-blue-400 to-green-300 rounded-full"></div>
        <div className="floating-shape right-10 top-32 w-32 h-32 bg-gradient-to-br from-green-400 to-blue-200 rounded-full"></div>
        <div className="floating-shape left-1/2 top-1/2 w-96 h-96 bg-gradient-to-br from-blue-200 to-green-100 rounded-full"></div>

        {/* Hero Section */}
        <section className="pt-24 pb-16 px-6 md:px-0 relative fade-slide z-10" ref={heroRef}>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-4">Cloud Innovation, Engineered for You</h1>
            <p className="text-xl md:text-2xl text-gray-700 font-light mb-6 max-w-2xl mx-auto">Agiledge helps you unlock the full potential of the cloud with fast, flexible, and future-ready digital infrastructure.</p>
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              {impactStats.map((stat, i) => (
                <div key={i} className="bg-white/80 rounded-xl shadow-lg px-8 py-6 m-2 flex flex-col items-center impact-anim" style={{animationDelay: `${i * 0.2 + 0.2}s`}}>
                  <span className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</span>
                  <span className="text-gray-700 text-sm font-medium">{stat.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 text-lg text-blue-700 font-semibold tracking-wide">Trusted by startups & enterprises worldwide</div>
          </div>
        </section>

        {/* Who We Are Split Section */}
        <section className="py-16 px-6 md:px-0 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center fade-slide z-10" ref={whoRef}>
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4 tracking-tight leading-tight">Who We Are</h2>
                            <p className="font-inter text-gray-700 mb-4">Agiledge is a cloud-first engineering company headquartered in Porto, Portugal. We empower teams to build with confidence by providing modern solutions in cloud engineering, DevOps automation, and scalable infrastructure.</p>
            <ul className="list-disc pl-6 text-blue-700 font-inter font-medium space-y-1">
              <li>Cloud-native experts with real-world experience</li>
              <li>End-to-end partnership, not just a vendor</li>
              <li>Proven results for startups and enterprises</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=400&q=80" alt="Team" className="w-64 h-48 object-cover rounded-2xl shadow-lg border-4 border-white" />
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" alt="Tech Collaboration" className="w-40 h-32 object-cover rounded-2xl shadow-lg border-4 border-white" />
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-12 px-6 md:px-0 max-w-6xl mx-auto fade-slide z-10" ref={offerRef}>
          <div className="text-center mb-8">
            <span className="text-2xl"></span>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-blue-700 tracking-tight leading-tight uppercase mt-2 mb-2">What We Offer</h2>
            <div className="mx-auto w-16 h-1 bg-gradient-to-r from-blue-500 to-green-400 rounded-full mb-4"></div>
            <p className="font-inter text-lg text-gray-700 mt-2">Our core services help you build, automate, and scale with confidence.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {offerCards.map((card, i) => (
              <div key={i} data-offer={i} className={`offer-card bg-gradient-to-br ${card.color || 'from-white to-white'} rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-white/30`}>
                <div className="text-4xl mb-4">{card.icon}</div>
                <h4 className="font-heading text-xl font-semibold text-gray-900 mb-2">{card.title}</h4>
                <p className="font-inter text-gray-600 text-base">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Agiledge Insights Section (before CTA) */}
        <section className="py-20 px-4 md:px-0 max-w-6xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-3 text-center">Agiledge Insights for Your Cloud Success</h2>
          <p className="text-lg text-gray-700 mb-12 text-center max-w-2xl">Track your cloud performance, benchmark with industry leaders, and plan your next deployment—all in one place.</p>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            {/* Progress Card */}
            <div className="bg-gradient-to-br from-blue-100 to-white rounded-2xl shadow-xl p-6 w-80 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
              <div className="text-blue-700 font-semibold mb-2">Cloud Uptime</div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl font-bold text-blue-600">99.99%</span>
                <span className="text-gray-500">last 30 days</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <div>
                  <div className="font-bold text-green-600">0</div>
                  <div>Incidents</div>
                </div>
                <div>
                  <div className="font-bold text-blue-600">24/7</div>
                  <div>Monitoring</div>
                </div>
              </div>
            </div>
            {/* Success Metrics Card */}
            <div className="bg-gradient-to-br from-pink-100 to-white rounded-2xl shadow-xl p-6 w-80 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="text-pink-700 font-semibold mb-2">Success Metrics</div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-blue-400 flex items-center justify-center text-white font-bold">✓</span> More Uptime Achieved</li>
                <li className="flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center text-white font-bold">✓</span>  Cost Reduction</li>
                <li className="flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-purple-400 flex items-center justify-center text-white font-bold">✓</span>  Faster Deployments</li>
                <li className="flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center text-white font-bold">✓</span> Zero Security Incidents</li>
              </ul>
            </div>
            {/* Service Pipeline Card */}
            <div className="bg-gradient-to-br from-yellow-100 to-white rounded-2xl shadow-xl p-6 w-80 transform rotate-6 hover:rotate-0 transition-transform duration-300">
              <div className="text-yellow-700 font-semibold mb-2">Service Pipeline</div>
              <div className="bg-white rounded-xl shadow p-4">
                <div className="text-gray-700 font-bold mb-2">Current Projects</div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">Cloud Migration</span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">DevOps Automation</span>
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold">Kubernetes Setup</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Let's Build Together CTA */}
        <section className="py-16 px-6 md:px-0 max-w-3xl mx-auto fade-slide text-center z-10" ref={ctaRef}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Let’s Build Together</h2>
          <p className="text-gray-700 mb-6">We help businesses turn cloud challenges into competitive advantages. Whether you're just starting your cloud journey or managing complex, multi-cloud deployments — Agiledge has the tools, talent, and trust to take you further.</p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="inline-block px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            Start Your Cloud Journey
          </button>
        </section>
      </div>
      
      {/* Cloud Journey Modal */}
      <CloudJourneyModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  )
}

export default AboutUs 