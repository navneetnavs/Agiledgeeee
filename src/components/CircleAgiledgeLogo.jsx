import React from 'react'

const CircleAgiledgeLogo = ({ size = 'medium', className = '' }) => {
  // Size mappings
  const sizeMap = {
    small: { logoSize: 32, textSize: 'text-lg', spacing: 'space-x-0' },
    medium: { logoSize: 52, textSize: 'text-xl', spacing: 'space-x-0' },
    large: { logoSize: 56, textSize: 'text-2xl', spacing: 'space-x-1' },
    xlarge: { logoSize: 72, textSize: 'text-3xl', spacing: 'space-x-1' }
  }

  const { logoSize, textSize, spacing } = sizeMap[size] || sizeMap.medium

  return (
    <div className={`flex items-center ${spacing} ${className}`}>
      {/* Large stylized "A" */}
      <div className="relative">
        <div 
          className="text-transparent bg-clip-text bg-gradient-to-br from-teal-600 to-cyan-400 font-extrabold"
          style={{
            fontSize: size === "small" ? "1.8rem" : 
                     size === "medium" ? "2.8rem" : 
                     size === "large" ? "3.5rem" : "4.5rem",
            lineHeight: "1"
          }}
        >
          A
        </div>
        {/* Subtle shadow for depth */}
        <div 
          className="absolute inset-0 text-gray-300 opacity-30"
          style={{
            fontSize: size === "small" ? "1.8rem" : 
                     size === "medium" ? "2.8rem" : 
                     size === "large" ? "3.5rem" : "4.5rem",
            lineHeight: "1",
            transform: "translate(1px, 1px)"
          }}
        >
          A
        </div>
      </div>
      
      {/* Smaller "giledge" */}
      <span 
        className="text-gray-700 font-semibold ml-1"
        style={{
          fontSize: size === "small" ? "1rem" : 
                   size === "medium" ? "1.3rem" : 
                   size === "large" ? "1.6rem" : "2rem"
        }}
      >
        giledge
      </span>
    </div>
  )
}

export default CircleAgiledgeLogo 