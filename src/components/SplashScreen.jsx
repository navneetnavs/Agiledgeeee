import React, { useState, useEffect } from 'react'
import Logo from './Logo'

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
          {/* Logo Background Glow */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-600 rounded-3xl blur-2xl opacity-0"
            style={{
              opacity: currentStep >= 2 ? 0.3 : 0,
              transform: `scale(${currentStep >= 2 ? 1.2 : 1})`,
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          />
          
          {/* Logo */}
          <div className="relative flex justify-center">
            <div 
              style={{
                transform: `scale(${currentStep >= 2 ? 1.1 : 1})`,
                transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                opacity: currentStep >= 1 ? 1 : 0,
                transform: `translateX(${currentStep >= 1 ? 0 : 50}px)`,
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <div className="w-16 h-16 relative">
                <svg 
                  viewBox="0 0 64 64" 
                  className="w-full h-full drop-shadow-lg"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Background with modern gradient */}
                  <rect 
                    x="4" y="4" width="56" height="56" rx="12" 
                    fill="url(#bgGradient)" 
                    stroke="url(#borderGradient)" 
                    strokeWidth="2"
                    filter="url(#shadow)"
                  />
                  
                  {/* Cloud shape - main element */}
                  <path 
                    d="M20 32C20 28.6863 22.6863 26 26 26C26.8 26 27.5 26.2 28.1 26.5C28.8 24.4 30.8 23 33 23C36.3 23 39 25.7 39 29C39 29.4 39 29.8 38.9 30.2C39.6 30 40.3 29.9 41 29.9C44.3 29.9 47 32.6 47 35.9C47 39.2 44.3 41.9 41 41.9H26C22.7 41.9 20 39.2 20 35.9V32Z" 
                    fill="url(#cloudGradient)" 
                    opacity="0.9"
                  />
                  
                  {/* Digital edge/innovation lines */}
                  <path d="M16 20L24 20" stroke="url(#lineGradient1)" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
                  <path d="M40 20L48 20" stroke="url(#lineGradient2)" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
                  <path d="M16 44L24 44" stroke="url(#lineGradient3)" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
                  <path d="M40 44L48 44" stroke="url(#lineGradient1)" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
                  

                  
                  {/* Innovation nodes */}
                  <circle cx="20" cy="20" r="2" fill="url(#nodeGradient1)" opacity="0.9" />
                  <circle cx="44" cy="20" r="2" fill="url(#nodeGradient2)" opacity="0.9" />
                  <circle cx="20" cy="44" r="2" fill="url(#nodeGradient3)" opacity="0.9" />
                  <circle cx="44" cy="44" r="2" fill="url(#nodeGradient1)" opacity="0.9" />
                  
                  {/* Digital wave/edge computing representation */}
                  <path d="M26 26L38 26" stroke="url(#waveGradient)" strokeWidth="1.5" opacity="0.6" strokeLinecap="round" />
                  <path d="M26 30L38 30" stroke="url(#waveGradient)" strokeWidth="1.5" opacity="0.6" strokeLinecap="round" />
                  <path d="M26 34L38 34" stroke="url(#waveGradient)" strokeWidth="1.5" opacity="0.6" strokeLinecap="round" />
                  <path d="M26 38L38 38" stroke="url(#waveGradient)" strokeWidth="1.5" opacity="0.6" strokeLinecap="round" />
                  
                  {/* Subtle inner glow for depth */}
                  <circle cx="32" cy="32" r="26" fill="none" stroke="url(#innerGlow)" strokeWidth="1" opacity="0.2" />
                  
                  {/* Gradients and Effects */}
                  <defs>
                    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="50%" stopColor="#F8FAFC" />
                      <stop offset="100%" stopColor="#F1F5F9" />
                    </linearGradient>
                    
                    <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="25%" stopColor="#1D4ED8" />
                      <stop offset="50%" stopColor="#059669" />
                      <stop offset="75%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#1D4ED8" />
                    </linearGradient>
                    
                    <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="50%" stopColor="#1D4ED8" />
                      <stop offset="100%" stopColor="#1E40AF" />
                    </linearGradient>
                    
                    <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#1D4ED8" />
                    </linearGradient>
                    
                    <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#059669" />
                      <stop offset="100%" stopColor="#047857" />
                    </linearGradient>
                    
                    <linearGradient id="lineGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#EA580C" />
                      <stop offset="100%" stopColor="#DC2626" />
                    </linearGradient>
                    

                    
                    <linearGradient id="nodeGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#1D4ED8" />
                    </linearGradient>
                    
                    <linearGradient id="nodeGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#059669" />
                      <stop offset="100%" stopColor="#047857" />
                    </linearGradient>
                    
                    <linearGradient id="nodeGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#EA580C" />
                      <stop offset="100%" stopColor="#DC2626" />
                    </linearGradient>
                    
                    <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#64748B" />
                      <stop offset="100%" stopColor="#94A3B8" />
                    </linearGradient>
                    
                    <linearGradient id="innerGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="50%" stopColor="#059669" />
                      <stop offset="100%" stopColor="#EA580C" />
                    </linearGradient>
                    
                    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#000000" floodOpacity="0.15"/>
                    </filter>
                    
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                      <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
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