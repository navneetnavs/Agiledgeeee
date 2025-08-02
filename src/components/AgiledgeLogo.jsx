import React from 'react'

const AgiledgeLogo = ({ size = "medium", className = "" }) => {
  const sizeClasses = {
    small: "text-lg",
    medium: "text-2xl",
    large: "text-4xl",
    xlarge: "text-6xl"
  }

  return (
    <div className={`flex items-center font-bold ${sizeClasses[size]} ${className}`}>
      {/* Large stylized "A" */}
      <div className="relative">
        <div 
          className="text-transparent bg-clip-text bg-gradient-to-br from-teal-600 to-cyan-400 font-extrabold"
          style={{
            fontSize: size === "small" ? "1.5rem" : 
                     size === "medium" ? "2.5rem" : 
                     size === "large" ? "4rem" : "6rem",
            lineHeight: "1"
          }}
        >
          A
        </div>
        {/* Subtle shadow for depth */}
        <div 
          className="absolute inset-0 text-gray-300 opacity-30"
          style={{
            fontSize: size === "small" ? "1.5rem" : 
                     size === "medium" ? "2.5rem" : 
                     size === "large" ? "4rem" : "6rem",
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
          fontSize: size === "small" ? "0.9rem" : 
                   size === "medium" ? "1.2rem" : 
                   size === "large" ? "1.8rem" : "2.5rem"
        }}
      >
        giledge
      </span>
    </div>
  )
}

export default AgiledgeLogo 