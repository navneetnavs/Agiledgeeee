import React, { useState } from 'react'
import { motion } from 'framer-motion'

const icons = {
  phone: (
    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.3 1.2a2 2 0 01-.45 1.95l-.7.7a16.001 16.001 0 006.586 6.586l.7-.7a2 2 0 011.95-.45l1.2.3A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C7.163 23 1 16.837 1 9V8a2 2 0 012-2z" /></svg>
  ),
  location: (
    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4.5 8-10A8 8 0 104 12c0 5.5 8 10 8 10z" /></svg>
  ),
  email: (
    <svg className="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0l-4-4m4 4l-4 4" /></svg>
  ),
  linkedin: (
    <svg className="w-5 h-5 text-blue-700" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.38v4.59h-3v-9h2.89v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v4.74z" /></svg>
  ),
  twitter: (
    <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482c-4.086-.205-7.713-2.164-10.141-5.144a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.209c9.058 0 14.009-7.496 14.009-13.986 0-.21 0-.423-.015-.634A10.025 10.025 0 0024 4.557z" /></svg>
  ),
  github: (
    <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z" /></svg>
  ),
}

const ContactHero = () => (
  <section className="relative flex items-center justify-center min-h-[60vh] w-full overflow-hidden px-4">
    {/* Floating Gradient Blobs */}
    <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-tr from-blue-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse" />
    <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-green-300/30 to-cyan-400/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
    <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-tr from-pink-400/20 to-indigo-400/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s', transform: 'translate(-50%, -50%)' }} />
    {/* Content */}
    <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-stretch gap-10 md:gap-16 py-16">
      {/* Images */}
      <div className="flex flex-row gap-6 md:gap-8 items-center md:w-1/2 w-full justify-center mb-8 md:mb-0">
        <motion.img
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
          alt="Agiledge Team Collaboration"
          className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-2xl border-4 border-white relative z-10"
        />
        <motion.img
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80"
          alt="Modern Workspace"
          className="w-32 h-32 md:w-44 md:h-44 object-cover rounded-2xl border-4 border-white -ml-8 md:-ml-12 relative z-0"
        />
      </div>
      {/* Text Content */}
      <div className="flex-1 flex flex-col justify-center items-start text-left">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6"
        >
          Let’s Build Something Smart, Together.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl"
        >
          Reach out to Agiledge for cloud engineering, DevOps automation, and digital transformation solutions tailored to your business.
        </motion.p>
        <motion.a
          href="#contact-form"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-green-400 text-white font-bold text-lg hover:scale-105 hover:shadow-2xl transition-transform transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Talk to Our Team
        </motion.a>
      </div>
    </div>
  </section>
)

const ContactUs = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('')
    setSuccess('')
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!form.name || !form.email || !form.subject || !form.message) {
      setError('All details are required')
      return
    }
    // Here you would send to Google Sheets or your backend
    setSuccess('Message sent!')
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white via-blue-50 to-cyan-100 flex flex-col">
      <ContactHero />
      {/* Main Content */}
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row gap-10 px-4 md:px-0 mb-12 items-center md:items-stretch">
        {/* Left: Info */}
        <div className="flex-1 flex flex-col justify-center md:justify-between mt-20 mr-12 h-full">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">We are always ready to help you and answer your questions</h2>
            <p className="text-gray-600 mb-8">Reach out to Agiledge for cloud, automation, and digital transformation support. Our team is here to help you move faster and build smarter.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex items-start">
                {icons.phone}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Call Center</h4>
                  <p className="text-gray-600 text-sm">+351 220 000 000<br/>+351 910 000 000</p>
                </div>
              </div>
              <div className="flex items-start">
                {icons.location}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Our Location</h4>
                  <p className="text-gray-600 text-sm">Rua Augusto Rosa 79<br/>Porto 4000-098, Portugal</p>
                </div>
              </div>
              <div className="flex items-start">
                {icons.email}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                  <p className="text-gray-600 text-sm">contact@agiledge.eu</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex flex-col gap-1 mt-1">
                  <h4 className="font-semibold text-gray-800 mb-1">Social network</h4>
                  <div className="flex gap-3 mt-1">
                    <a href="#" className="hover:scale-110 transition-transform" title="LinkedIn">{icons.linkedin}</a>
                    <a href="#" className="hover:scale-110 transition-transform" title="Twitter">{icons.twitter}</a>
                    <a href="#" className="hover:scale-110 transition-transform" title="GitHub">{icons.github}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Form */}
        <div className="flex-1 rounded-2xl p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h3>
          <p className="text-gray-600 mb-4 text-sm">Define your goals and identify areas where Agiledge can add value to your business.</p>
          {error && <div className="mb-4 text-red-600 font-semibold text-center">{error}</div>}
          {success && <div className="mb-4 text-green-600 font-semibold text-center">{success}</div>}
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input name="name" value={form.name} onChange={handleChange} type="text" placeholder="Full name" className="px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-400 outline-none bg-white/90" />
            <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email" className="px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-400 outline-none bg-white/90" />
            <input name="subject" value={form.subject} onChange={handleChange} type="text" placeholder="Subject" className="px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-400 outline-none bg-white/90" />
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" rows={4} className="px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-400 outline-none bg-white/90" />
            <button type="submit" className="mt-2 px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-700 transition-all">Send a message</button>
          </form>
        </div>
      </div>
      {/* Map Section */}
      <div className="w-full max-w-6xl mx-auto rounded-2xl overflow-hidden mb-16">
        <iframe
          title="Agiledge Porto Office Map"
          src="https://www.google.com/maps?q=Rua+Augusto+Rosa+79+Porto+4000-098&output=embed"
          width="100%"
          height="320"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      {/* Footer (if present) will also use the same background */}
    </div>
  )
}

export default ContactUs 