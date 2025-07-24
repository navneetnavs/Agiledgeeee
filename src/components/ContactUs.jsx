import React from 'react'

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

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex flex-col">
      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-80 flex items-end justify-start overflow-hidden rounded-b-3xl shadow-lg mb-12">
        <img
          src="https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&w=1200&q=80"
          alt="Contact Agiledge Cloud"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{filter: 'brightness(0.7)'}}
        />
        <div className="relative z-10 p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-black text-white drop-shadow-lg">Contact Us</h1>
        </div>
      </div>

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
        <div className="flex-1 bg-white/80 rounded-2xl shadow-lg p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h3>
          <p className="text-gray-600 mb-4 text-sm">Define your goals and identify areas where Agiledge can add value to your business.</p>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Full name" className="px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-400 outline-none bg-white/90" />
            <input type="email" placeholder="Email" className="px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-400 outline-none bg-white/90" />
            <input type="text" placeholder="Subject" className="px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-400 outline-none bg-white/90" />
            <textarea placeholder="Message" rows={4} className="px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-400 outline-none bg-white/90" />
            <button type="submit" className="mt-2 px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg shadow hover:from-green-600 hover:to-blue-700 transition-all">Send a message</button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-lg mb-16">
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
    </div>
  )
}

export default ContactUs 