import React, { useState, useEffect } from 'react'
import AgiledgeLogo from './AgiledgeLogo'

const SplashScreen = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const steps = [
      { duration: 400, action: () => setCurrentStep(1) }, // Logo appears
      { duration: 600, action: () => setCurrentStep(2) }, // Logo scales and glows
      { duration: 400, action: () => setCurrentStep(3) }, // Text appears
      { duration: 800, action: () => setCurrentStep(4) }, // Loading animation
      { duration: 200, action: () => setCurrentStep(5) }, // Fade out
      { duration: 150, action: () => {
        setIsVisible(false)
        onComplete()
      }}
    ]

    let currentTime = 0
    steps.forEach((step, index) => {
      setTimeout(() => {
        step.action()
      }, currentTime)
      currentTime += step.duration
    })
  }, [onComplete])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 flex items-center justify-center overflow-hidden">
      <style>
        {`
          @keyframes textShine {
            0% {
              background-position: -200% center;
            }
            50% {
              background-position: 200% center;
            }
            100% {
              background-position: -200% center;
            }
          }
        `}
      </style>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <div 
          className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-blue-500/30 to-purple-600/30 rounded-full blur-2xl animate-pulse"
          style={{
            animationDelay: '0.2s',
            transform: `scale(${currentStep >= 1 ? 1 : 0})`,
            transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        />
        <div 
          className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-emerald-400/40 to-cyan-500/40 rounded-full blur-xl animate-pulse"
          style={{
            animationDelay: '0.4s',
            transform: `scale(${currentStep >= 2 ? 1 : 0})`,
            transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        />
        <div 
          className="absolute bottom-40 left-1/4 w-28 h-28 bg-gradient-to-r from-violet-500/35 to-fuchsia-500/35 rounded-full blur-lg animate-pulse"
          style={{
            animationDelay: '0.6s',
            transform: `scale(${currentStep >= 3 ? 1 : 0})`,
            transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
            backgroundSize: '60px 60px',
            transform: `scale(${currentStep >= 1 ? 1 : 0})`,
            transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
          }} />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        
        {/* Logo Container */}
        <div 
          className="relative mb-8"
          style={{
            transform: `scale(${currentStep >= 1 ? 1 : 0}) rotate(${currentStep >= 1 ? 0 : 180}deg)`,
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          {/* New Agiledge Logo */}
          <div 
            className="flex justify-center"
            style={{
              transform: `scale(${currentStep >= 2 ? 1.1 : 1})`,
              transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              opacity: currentStep >= 1 ? 1 : 0,
              transform: `translateX(${currentStep >= 1 ? 0 : 50}px)`,
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <AgiledgeLogo size="xlarge" />
          </div>
        </div>

        {/* Tagline */}
        <div 
          className="mb-12"
          style={{
            opacity: currentStep >= 3 ? 1 : 0,
            transform: `translateY(${currentStep >= 3 ? 0 : 30}px)`,
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <h3 className="text-2xl lg:text-3xl font-bold leading-tight text-white">
            <span 
              className="text-transparent bg-clip-text"
              style={{
                background: 'linear-gradient(90deg, #4ade80, #60a5fa, #4ade80)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: currentStep >= 3 ? 'textShine 3s ease-in-out infinite' : 'none'
              }}
            >
              Fast, Flexible and Future-Ready
            </span>
            <br />
            <span 
              className="text-transparent bg-clip-text"
              style={{
                background: 'linear-gradient(90deg, #60a5fa, #a855f7, #60a5fa)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: currentStep >= 3 ? 'textShine 3s ease-in-out infinite 0.5s' : 'none'
              }}
            >
              Cloud Solutions
            </span>
          </h3>
        </div>

        {/* Loading Animation */}
        <div 
          className="flex items-center justify-center space-x-2"
          style={{
            opacity: currentStep >= 4 ? 1 : 0,
            transform: `scale(${currentStep >= 4 ? 1 : 0})`,
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>

        {/* Loading Text */}
        <div 
          className="mt-4 text-slate-300 text-sm"
          style={{
            opacity: currentStep >= 4 ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out'
          }}
        >
          Loading your digital experience...
        </div>
      </div>

      {/* Fade Out Overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950"
        style={{
          opacity: currentStep >= 5 ? 0 : 1,
          transition: 'opacity 0.2s ease-in-out'
        }}
      />
    </div>
  )
}

export default SplashScreen 