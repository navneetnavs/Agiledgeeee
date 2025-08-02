import React from 'react'

const AgiledgeLogo = ({ size = 'medium', className = '' }) => {
  // Size mappings
  const sizeMap = {
    small: { logoSize: 24, textSize: 'text-lg', spacing: 'space-x-2' },
    medium: { logoSize: 32, textSize: 'text-xl', spacing: 'space-x-3' },
    large: { logoSize: 40, textSize: 'text-2xl', spacing: 'space-x-4' },
    xlarge: { logoSize: 48, textSize: 'text-3xl', spacing: 'space-x-4' }
  }

  const { logoSize, textSize, spacing } = sizeMap[size] || sizeMap.medium

  return (
    <div className={`flex items-center ${spacing} ${className}`}>
      {/* Stylized "A" Symbol */}
      <svg 
        width={logoSize} 
        height={logoSize} 
        viewBox="0 0 100 100" 
        className="flex-shrink-0"
      >
        {/* Main blue triangular shape (base and left side of "A") */}
        <path
          d="M 20 80 L 50 20 L 80 80 L 75 80 L 50 25 L 25 80 Z"
          fill="#06B6D4"
          stroke="none"
        />
        
        {/* Internal curved lines for depth */}
        <path
          d="M 30 70 Q 50 45 70 70"
          stroke="#0891B2"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        
        <path
          d="M 35 60 Q 50 40 65 60"
          stroke="#0EA5E9"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Top-right green/yellow triangular element */}
        <path
          d="M 55 25 L 75 25 L 65 45 L 55 25 Z"
          fill="#FBBF24"
          stroke="none"
        />
      </svg>

      {/* "Agiledge" Text with Gradient */}
      <div className={`font-bold ${textSize} bg-gradient-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent`}>
        Agiledge
      </div>
    </div>
  )
}

export default AgiledgeLogo 