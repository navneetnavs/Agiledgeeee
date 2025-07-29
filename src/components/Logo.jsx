import React from 'react'

const Logo = ({ size = 'medium', className = '', variant = 'default' }) => {
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
    <div className={`flex items-center space-x-3 ${className}`}>
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
      
      {/* Logo Text */}
      <div className={`${textSizes[size]} font-black tracking-widest leading-none drop-shadow-sm`}>
        <span className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          AGILE
        </span>
        <span className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          DGE
        </span>
      </div>
    </div>
  )
}

export default Logo 