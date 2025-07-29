import React from 'react'

const Logo = ({ size = "medium", className = "" }) => {
  const sizeClasses = {
    small: "w-6 h-6",
    medium: "w-8 h-8", 
    large: "w-10 h-10"
  }

  const textSizes = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg"
  }

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* Logo Icon */}
      <div className={`${sizeClasses[size]} relative`}>
        <svg 
          viewBox="0 0 48 48" 
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background Circle */}
          <circle 
            cx="24" 
            cy="24" 
            r="22" 
            fill="url(#gradient1)"
            stroke="url(#gradient2)"
            strokeWidth="2"
          />
          
          {/* Stylized "A" with tech elements */}
          <path 
            d="M16 36L24 12L32 36M20 28H28" 
            stroke="url(#gradient3)" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          
          {/* Circuit/tech pattern elements */}
          <circle cx="18" cy="18" r="1.5" fill="#10B981" />
          <circle cx="30" cy="18" r="1.5" fill="#3B82F6" />
          <circle cx="18" cy="30" r="1.5" fill="#8B5CF6" />
          <circle cx="30" cy="30" r="1.5" fill="#10B981" />
          
          {/* Connecting lines for circuit effect */}
          <path d="M19.5 18H28.5" stroke="#10B981" strokeWidth="1" opacity="0.6" />
          <path d="M18 19.5V28.5" stroke="#3B82F6" strokeWidth="1" opacity="0.6" />
          <path d="M30 19.5V28.5" stroke="#8B5CF6" strokeWidth="1" opacity="0.6" />
          <path d="M19.5 30H28.5" stroke="#10B981" strokeWidth="1" opacity="0.6" />
          
          {/* Cloud/spark elements for cloud engineering */}
          <path 
            d="M12 20C12 17.7909 13.7909 16 16 16C16.5 16 16.9 16.1 17.3 16.3C17.8 14.6 19.3 13.5 21 13.5C23.2 13.5 25 15.3 25 17.5C25 17.8 25 18.1 24.9 18.4C25.5 18.2 26.1 18.1 26.8 18.1C29.1 18.1 31 20 31 22.3C31 24.6 29.1 26.5 26.8 26.5H16C13.8 26.5 12 24.7 12 22.5V20Z" 
            fill="url(#gradient4)" 
            opacity="0.3"
          />
          
          {/* Motion/speed lines for agility */}
          <path d="M36 16L40 20L36 24" stroke="#10B981" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
          <path d="M36 20L40 24L36 28" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
          
          {/* Gradients */}
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="50%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#E2E8F0" />
            </linearGradient>
            <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Logo Text */}
      <div className={`font-bold ${textSizes[size]} bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent`}>
        Agiledge
      </div>
    </div>
  )
}

export default Logo 