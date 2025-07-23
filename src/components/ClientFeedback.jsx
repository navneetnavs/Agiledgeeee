import React from 'react'
import { useTranslation } from 'react-i18next'

const feedbacks = [
  {
    name: 'Maria Silva',
    company: 'FinTech Solutions',
    feedback: 'Agiledge delivered our project on time with outstanding quality. Their team is highly professional and responsive.'
  },
  {
    name: 'John Doe',
    company: 'HealthTech Innovations',
    feedback: 'We saw a significant improvement in our cloud infrastructure thanks to Agiledge. Highly recommended!'
  },
  {
    name: 'Ana Pereira',
    company: 'E-commerce Pro',
    feedback: 'Excellent DevOps support and great communication throughout the project.'
  },
  {
    name: 'Carlos Mendes',
    company: 'SaaSify',
    feedback: 'The Agiledge team exceeded our expectations in every way.'
  },
  {
    name: 'Emily Zhang',
    company: 'RetailNext',
    feedback: 'Their cloud migration process was seamless and stress-free.'
  }
]

const ClientFeedback = () => {
  const { t } = useTranslation()
  // Duplicate feedbacks for seamless infinite scroll
  const carouselFeedbacks = [...feedbacks, ...feedbacks]
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
      <style>{`
        .carousel-track {
          display: flex;
          width: max-content;
          animation: scroll-x 30s linear infinite;
        }
        .carousel-container {
          overflow: visible !important;
          padding-top: 2.5rem;
          padding-bottom: 2.5rem;
        }
        .feedback-card {
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1), box-shadow 0.35s cubic-bezier(0.4,0,0.2,1), border 0.35s cubic-bezier(0.4,0,0.2,1);
          will-change: transform, box-shadow, border;
          z-index: 1;
        }
        .feedback-card:hover {
          transform: scale(1.04) translateY(-8px);
          box-shadow: 0 8px 32px 0 rgba(34,197,94,0.10), 0 2px 16px 0 rgba(59,130,246,0.10), 0 0 0 4px #22d3ee22;
          border: 1.5px solid #38bdf8;
          background: linear-gradient(135deg, rgba(255,255,255,0.85) 70%, rgba(59,130,246,0.10) 100%);
        }
        .feedback-card .avatar {
          box-shadow: 0 2px 8px 0 rgba(34,197,94,0.10);
        }
        .feedback-card:hover .avatar {
          box-shadow: 0 0 0 6px #38bdf844, 0 2px 8px 0 rgba(34,197,94,0.10);
        }
        @keyframes scroll-x {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('feedback.title', 'Voices From Our Clients')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('feedback.subtitle', 'Real feedback from our valued partners')}
          </p>
        </div>
        <div className="carousel-container relative">
          <div className="carousel-track">
            {carouselFeedbacks.map((item, idx) => (
              <div
                key={idx}
                className="feedback-card mx-4 min-w-[320px] max-w-xs bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-white/30"
                style={{
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 70%, rgba(59,130,246,0.06) 100%)',
                }}
              >
                <div className="avatar w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                  {item.name[0]}
                </div>
                <p className="text-gray-700 text-lg mb-4 italic">"{item.feedback}"</p>
                <div className="text-gray-900 font-semibold">{item.name}</div>
                <div className="text-gray-500 text-sm">{item.company}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientFeedback 