import React, { useEffect, useRef, useState } from 'react'

const WhyChoose = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  const timelineRef = useRef(null)
  const cardsRef = useRef([])

  const reasons = [
    {
      id: 1,
      title: "Hands-on expertise",
      description: "Our team brings years of hands-on experience in software development, cloud solutions, and digital transformation. We don't just consult - we build, deploy, and maintain solutions that drive real business value.",
      icon: "🎯",
      color: "border-black",
      bgColor: "bg-gray-50"
    },
    {
      id: 2,
      title: "Fast delivery",
      description: "We understand that time is money. Our agile methodology and streamlined processes ensure rapid development cycles without compromising quality. Get your solutions to market faster with our efficient delivery approach.",
      icon: "⚡",
      color: "border-green-500",
      bgColor: "bg-green-50"
    },
    {
      id: 3,
      title: "Long-term partnerships",
      description: "We believe in building lasting relationships with our clients. Beyond project delivery, we become your trusted technology partner, providing ongoing support, maintenance, and strategic guidance for your digital journey.",
      icon: "🤝",
      color: "border-black",
      bgColor: "bg-gray-50"
    },
    {
      id: 4,
      title: "Cost-optimized solution",
      description: "We deliver maximum value while minimizing costs through efficient resource utilization, cloud optimization, and smart technology choices. Our solutions are designed to provide the best ROI while maintaining high quality and performance standards.",
      icon: "💰",
      color: "border-green-500",
      bgColor: "bg-green-50"
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const sectionHeight = rect.height
      
      // Calculate scroll progress within the section
      const sectionTop = rect.top
      const sectionBottom = rect.bottom
      
      if (sectionTop < windowHeight && sectionBottom > 0) {
        const progress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight)))
        setScrollProgress(progress)
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const card = entry.target
          const delay = index * 300
          
          setTimeout(() => {
            card.style.transform = 'translateX(0px)'
            card.style.opacity = '1'
          }, delay)
        } else {
          const card = entry.target
          const isEven = index % 2 === 0
          card.style.transform = isEven ? 'translateX(-100px)' : 'translateX(100px)'
          card.style.opacity = '0'
        }
      })
    }, observerOptions)

    cardsRef.current.forEach(card => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  // Calculate line height based on scroll progress
  const lineHeight = `${Math.min(100, scrollProgress * 100)}%`

  return (
    <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600">Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine technical excellence with business acumen to deliver solutions that drive real results
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full">
            {/* Animated Line */}
            <div 
              ref={timelineRef}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-green-500 to-blue-600 transition-all duration-1000 ease-out"
              style={{ 
                height: lineHeight,
                boxShadow: '0 0 20px rgba(34, 197, 94, 0.3)'
              }}
            />
          </div>

          {/* Timeline Cards */}
          <div className="relative">
            {reasons.map((reason, index) => {
              const isEven = index % 2 === 0
              const isLast = index === reasons.length - 1
              
              return (
                <div key={reason.id} className="relative mb-16 last:mb-0">
                  
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 z-10">
                    <div className="w-6 h-6 bg-white border-4 border-green-500 rounded-full shadow-lg relative">
                      {/* Animated pulse effect */}
                      <div className="absolute inset-0 w-6 h-6 bg-green-500 rounded-full animate-ping opacity-20"></div>
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    ref={el => cardsRef.current[index] = el}
                    className={`relative ${
                      isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    } md:w-1/2 ${isEven ? 'md:text-right' : 'md:text-left'}`}
                    style={{
                      transform: isEven ? 'translateX(-100px)' : 'translateX(100px)',
                      opacity: 0,
                      transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  >
                    <div className={`p-8 rounded-xl border-2 ${reason.color} ${reason.bgColor} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden`}>
                      
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-4 right-4 text-6xl">{reason.icon}</div>
                      </div>

                      {/* Card Content */}
                      <div className="relative z-10">
                        {/* Icon */}
                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-blue-600 text-white text-2xl mb-6 ${isEven ? 'md:ml-auto' : ''}`}>
                          {reason.icon}
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          {reason.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed">
                          {reason.description}
                        </p>

                        {/* Decorative Line */}
                        <div className={`mt-6 h-1 bg-gradient-to-r ${isEven ? 'from-transparent via-green-500 to-green-500' : 'from-green-500 via-green-500 to-transparent'} rounded-full`}></div>
                      </div>

                      {/* Hover Effect Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Connection Line to Timeline */}
                    <div className={`absolute top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-gray-300 ${isEven ? 'right-0' : 'left-0'}`}>
                      <div className={`w-full h-full bg-gradient-to-r ${isEven ? 'from-green-500 to-gray-300' : 'from-gray-300 to-green-500'} transition-all duration-1000`} 
                           style={{ width: isVisible ? '100%' : '0%' }}></div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom Connection Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-1 bg-gradient-to-b from-green-500 to-transparent h-8"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  )
}

export default WhyChoose 