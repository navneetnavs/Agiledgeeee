import React from 'react'

const Logo = ({ className = "", size = "default" }) => {
  const sizeClasses = {
    small: "w-6 h-6",
    default: "w-8 h-8", 
    large: "w-12 h-12",
    xlarge: "w-16 h-16"
  }

  const textSizes = {
    small: "text-sm",
    default: "text-lg",
    large: "text-xl", 
    xlarge: "text-2xl"
  }

  return (
    <div className={`flex items-center space-x-1 ${className}`}>
      {/* Stylized "A" Symbol with Bar Chart and Arrow */}
      <div className={`${sizeClasses[size]} relative`}>
        <svg 
          viewBox="0 0 48 48" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Background circle/container */}
          <circle cx="24" cy="24" r="22" fill="url(#bgGradient)" stroke="url(#borderGradient)" strokeWidth="1"/>
          
          {/* Bar Chart Bars (left side of A) */}
          <rect x="8" y="28" width="2.5" height="6" fill="url(#barGradient1)" rx="1.25"/>
          <rect x="12" y="24" width="2.5" height="10" fill="url(#barGradient2)" rx="1.25"/>
          <rect x="16" y="20" width="2.5" height="14" fill="url(#barGradient3)" rx="1.25"/>
          <rect x="20" y="16" width="2.5" height="18" fill="url(#barGradient4)" rx="1.25"/>
          
          {/* Arrow (right side of A) */}
          <path 
            d="M26 10L34 36H28L26 32H18L16 36H10L18 10H26Z" 
            fill="url(#arrowGradient)"
          />
          
          {/* Inner arrow detail */}
          <path 
            d="M20 28L22 18L24 28H20Z" 
            fill="url(#innerGradient)"
          />
          
          {/* Gradients */}
          <defs>
            <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E0F2FE"/>
              <stop offset="100%" stopColor="#B3E5FC"/>
            </linearGradient>
            <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#81D4FA"/>
              <stop offset="100%" stopColor="#4FC3F7"/>
            </linearGradient>
            <linearGradient id="barGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10B981"/>
              <stop offset="100%" stopColor="#059669"/>
            </linearGradient>
            <linearGradient id="barGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10B981"/>
              <stop offset="100%" stopColor="#0891B2"/>
            </linearGradient>
            <linearGradient id="barGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0891B2"/>
              <stop offset="100%" stopColor="#3B82F6"/>
            </linearGradient>
            <linearGradient id="barGradient4" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6"/>
              <stop offset="100%" stopColor="#6366F1"/>
            </linearGradient>
            <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10B981"/>
              <stop offset="50%" stopColor="#0891B2"/>
              <stop offset="100%" stopColor="#6366F1"/>
            </linearGradient>
            <linearGradient id="innerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF"/>
              <stop offset="100%" stopColor="#F3F4F6"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* "giledge" Text with Gradient */}
      <div className={`font-bold ${textSizes[size]} bg-gradient-to-r from-emerald-500 via-cyan-500 to-indigo-600 bg-clip-text text-transparent`}>
        giledge
      </div>
    </div>
  )
}

export default Logo 