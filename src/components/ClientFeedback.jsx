import React from 'react'

const feedbacks = [
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

const ClientFeedback = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-10 text-center">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {feedbacks.map((f, i) => (
            <div
              key={i}
              className={`bg-gradient-to-br ${cardColors[i % cardColors.length]} rounded-2xl shadow-md p-8 flex flex-col items-center text-center border border-white/40 relative`}
              style={{ minHeight: 260 }}
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2">
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
    </section>
  )
}

export default ClientFeedback 