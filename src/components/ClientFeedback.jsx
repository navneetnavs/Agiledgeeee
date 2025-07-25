import React from 'react'

const feedbacks = [
  // Existing feedbacks
  {
    name: 'Maria Silva',
    role: 'Cloud Architect, BetaSoft',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
    feedback: 'Agiledge helped us migrate to the cloud with zero downtime. Their expertise and support were outstanding!'
  },
  {
    name: 'John Doe',
    role: 'DevOps Lead, Acme Corp',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    feedback: 'The automation and monitoring solutions from Agiledge have made our deployments faster and more reliable.'
  },
  {
    name: 'Ana Pereira',
    role: 'CTO, Cloudify',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
    feedback: 'We appreciate the partnership approach. Agiledge feels like an extension of our own team.'
  },
  {
    name: 'Carlos Mendes',
    role: 'SRE Manager, DataEdge',
    img: 'https://randomuser.me/api/portraits/men/65.jpg',
    feedback: 'Their 24/7 monitoring and proactive support have been a game changer for our uptime.'
  },
  {
    name: 'Emily Zhang',
    role: 'Product Manager, BetaSoft',
    img: 'https://randomuser.me/api/portraits/women/43.jpg',
    feedback: 'The team at Agiledge is responsive, knowledgeable, and always delivers on time.'
  },
  {
    name: 'Ravi Kumar',
    role: 'Founder, InnovateX',
    img: 'https://randomuser.me/api/portraits/men/76.jpg',
    feedback: 'We saw a 30% cost reduction after Agiledge optimized our cloud infrastructure.'
  },
  // Additional feedbacks for dynamic flow
  {
    name: 'Sofia Lee',
    role: 'IT Director, CloudNova',
    img: 'https://randomuser.me/api/portraits/women/50.jpg',
    feedback: 'Agiledge delivered our project ahead of schedule and exceeded our expectations.'
  },
  {
    name: 'Michael Brown',
    role: 'Lead Engineer, TechSphere',
    img: 'https://randomuser.me/api/portraits/men/45.jpg',
    feedback: 'Their technical expertise and proactive support are unmatched.'
  },
  {
    name: 'Priya Singh',
    role: 'Cloud Consultant, SkyTech',
    img: 'https://randomuser.me/api/portraits/women/65.jpg',
    feedback: 'We trust Agiledge for all our cloud and DevOps needs.'
  },
  {
    name: 'Alex Kim',
    role: 'Solutions Architect, DataBridge',
    img: 'https://randomuser.me/api/portraits/men/23.jpg',
    feedback: 'Their solutions are robust, scalable, and easy to maintain.'
  },
  {
    name: 'Linda Green',
    role: 'VP Engineering, NextGen',
    img: 'https://randomuser.me/api/portraits/women/12.jpg',
    feedback: 'Agiledge is a true partner in our digital transformation journey.'
  },
  {
    name: 'David Park',
    role: 'CTO, CloudWorks',
    img: 'https://randomuser.me/api/portraits/men/56.jpg',
    feedback: 'Their team is always available and ready to help.'
  }
]

const cardColors = [
  'from-blue-50 to-white',
  'from-green-50 to-white',
  'from-yellow-50 to-white',
  'from-pink-50 to-white',
  'from-purple-50 to-white',
  'from-gray-50 to-white',
]

const ROW_SIZE = Math.ceil(feedbacks.length / 2)
const topRow = feedbacks.slice(0, ROW_SIZE)
const bottomRow = feedbacks.slice(ROW_SIZE)

const ClientFeedback = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-10 text-center">What Our Clients Say</h2>
        <div className="space-y-10">
          {/* Top Row: right-to-left */}
          <div className="overflow-hidden w-full h-[320px]">
            <div className="flex gap-6 px-2 animate-scroll-left group hover:[animation-play-state:paused]" style={{animationDuration: '50s'}}>
              {[...topRow, ...topRow].map((f, i) => (
                <div
                  key={i}
                  className={`bg-gradient-to-br ${cardColors[i % cardColors.length]} rounded-2xl shadow-md p-8 pt-16 flex flex-col items-center text-center border border-white/40 relative min-w-[280px] max-w-[320px] transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl hover:scale-105 hover:shadow-2xl`}
                  style={{ minHeight: 260 }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2">
                    <img src={f.img} alt={f.name} className="w-20 h-20 rounded-full border-4 border-white shadow-lg object-cover bg-white" />
                  </div>
                  <div className="mt-12">
                    <p className="text-gray-700 text-base mb-4">“{f.feedback}”</p>
                    <div className="font-bold text-blue-700">{f.name}</div>
                    <div className="text-sm text-gray-500">{f.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Bottom Row: left-to-right */}
          <div className="overflow-hidden w-full h-[320px]">
            <div className="flex gap-6 px-2 animate-scroll-right group hover:[animation-play-state:paused]" style={{animationDuration: '50s'}}>
              {[...bottomRow, ...bottomRow].map((f, i) => (
                <div
                  key={i}
                  className={`bg-gradient-to-br ${cardColors[i % cardColors.length]} rounded-2xl shadow-md p-8 pt-16 flex flex-col items-center text-center border border-white/40 relative min-w-[280px] max-w-[320px] transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl hover:scale-105 hover:shadow-2xl`}
                  style={{ minHeight: 260 }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2">
                    <img src={f.img} alt={f.name} className="w-20 h-20 rounded-full border-4 border-white shadow-lg object-cover bg-white" />
                  </div>
                  <div className="mt-12">
                    <p className="text-gray-700 text-base mb-4">“{f.feedback}”</p>
                    <div className="font-bold text-blue-700">{f.name}</div>
                    <div className="text-sm text-gray-500">{f.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right linear infinite;
        }
        .group:hover .animate-scroll-left,
        .group:hover .animate-scroll-right {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

export default ClientFeedback 