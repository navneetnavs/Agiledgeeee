import React from 'react'

const Logo = ({ size = 'medium', className = '' }) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16',
    xlarge: 'w-20 h-20'
  }

  const textSizes = {
    small: 'text-lg',
    medium: 'text-xl',
    large: 'text-2xl',
    xlarge: 'text-3xl'
  }

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* Logo Icon */}
      <div className={`${sizeClasses[size]} relative`}>
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
      
      {/* Logo Text */}
      <div className={`${textSizes[size]} font-black tracking-widest leading-none drop-shadow-sm`}>
        <span className="text-blue-700">
          AGILE
        </span>
        <span className="text-blue-500">
          DGE
        </span>
      </div>
    </div>
  )
}

export default Logo 