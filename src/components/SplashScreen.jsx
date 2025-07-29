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
                  
                  {/* Main "A" with sharp, modern styling */}
                  <path 
                    d="M20 48L32 16L44 48M26 36H38" 
                    stroke="url(#mainGradient)" 
                    strokeWidth="4" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    filter="url(#glow)"
                  />
                  
                  {/* Cloud infrastructure elements */}
                  <path 
                    d="M16 28C16 24.6863 18.6863 22 22 22C22.8 22 23.5 22.2 24.1 22.5C24.8 20.4 26.8 19 29 19C32.3 19 35 21.7 35 25C35 25.4 35 25.8 34.9 26.2C35.6 26 36.3 25.9 37 25.9C40.3 25.9 43 28.6 43 31.9C43 35.2 40.3 37.9 37 37.9H22C18.7 37.9 16 35.2 16 31.9V28Z" 
                    fill="url(#cloudGradient)" 
                    opacity="0.7"
                  />
                  
                  {/* DevOps automation circuit patterns */}
                  <path d="M22 20L42 20" stroke="url(#lineGradient1)" strokeWidth="2" opacity="0.8" strokeLinecap="round" />
                  <path d="M22 44L42 44" stroke="url(#lineGradient2)" strokeWidth="2" opacity="0.8" strokeLinecap="round" />
                  <path d="M20 22L20 42" stroke="url(#lineGradient3)" strokeWidth="2" opacity="0.8" strokeLinecap="round" />
                  <path d="M44 22L44 42" stroke="url(#lineGradient1)" strokeWidth="2" opacity="0.8" strokeLinecap="round" />
                  
                  {/* Infrastructure nodes */}
                  <circle cx="22" cy="22" r="2" fill="url(#nodeGradient1)" opacity="0.9" />
                  <circle cx="42" cy="22" r="2" fill="url(#nodeGradient2)" opacity="0.9" />
                  <circle cx="22" cy="42" r="2" fill="url(#nodeGradient3)" opacity="0.9" />
                  <circle cx="42" cy="42" r="2" fill="url(#nodeGradient1)" opacity="0.9" />
                  
                  {/* Speed/agility motion elements */}
                  <path d="M48 18L54 24L48 30" stroke="url(#motionGradient1)" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
                  <path d="M48 24L54 30L48 36" stroke="url(#motionGradient2)" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
                  
                  {/* Digital architecture grid */}
                  <path d="M26 26L38 26" stroke="url(#gridGradient)" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
                  <path d="M26 30L38 30" stroke="url(#gridGradient)" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
                  <path d="M26 34L38 34" stroke="url(#gridGradient)" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
                  
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
                      <stop offset="0%" stopColor="#10B981" />
                      <stop offset="25%" stopColor="#3B82F6" />
                      <stop offset="50%" stopColor="#8B5CF6" />
                      <stop offset="75%" stopColor="#10B981" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                    
                    <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1E293B" />
                      <stop offset="50%" stopColor="#334155" />
                      <stop offset="100%" stopColor="#475569" />
                    </linearGradient>
                    
                    <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10B981" />
                      <stop offset="50%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                    
                    <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10B981" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                    
                    <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                    
                    <linearGradient id="lineGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#10B981" />
                    </linearGradient>
                    
                    <linearGradient id="nodeGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10B981" />
                      <stop offset="100%" stopColor="#059669" />
                    </linearGradient>
                    
                    <linearGradient id="nodeGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#2563EB" />
                    </linearGradient>
                    
                    <linearGradient id="nodeGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#7C3AED" />
                    </linearGradient>
                    
                    <linearGradient id="motionGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10B981" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                    
                    <linearGradient id="motionGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                    
                    <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#64748B" />
                      <stop offset="100%" stopColor="#94A3B8" />
                    </linearGradient>
                    
                    <linearGradient id="innerGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10B981" />
                      <stop offset="50%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#8B5CF6" />
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