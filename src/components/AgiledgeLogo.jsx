import React from 'react'
import finallogo from '../assets/finallogo.png'

const AgiledgeLogo = ({ size = "medium", className = "" }) => {
  const sizeClasses = {
    small: "text-lg",
    medium: "text-2xl",
    large: "text-4xl",
    xlarge: "text-6xl"
  }

  // Size mappings for the logo image - made bigger compared to text
  const logoSizeMap = {
    small: "w-8 h-8",      // Increased from w-6 h-6
    medium: "w-12 h-12",   // Increased from w-8 h-8
    large: "w-16 h-16",    // Increased from w-12 h-12
    xlarge: "w-20 h-20"    // Increased from w-16 h-16
  }

  // Text sizes for "giledge" - made smaller to emphasize the logo
  const textSizeMap = {
    small: "0.8rem",
    medium: "1rem",
    large: "1.4rem",
    xlarge: "1.8rem"
  }

  return (
    <div className={`flex items-center font-bold ${sizeClasses[size]} ${className}`}>
      {/* Logo image using finallogo.png as the first letter "A" - made bigger */}
      <div className="relative">
        <img 
          src={finallogo} 
          alt="Agiledge Logo"
          className={`${logoSizeMap[size]} object-contain`}
        />
      </div>
      
      {/* "giledge" text with color matching the logo */}
      <span 
        className="-ml-2 font-semibold bg-gradient-to-tr from-teal-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent leading-none"
        style={{
          fontSize: textSizeMap[size],
          lineHeight: '1.2',
          display: 'inline-block',
          verticalAlign: 'baseline'
        }}
      >
        giledge
      </span>
    </div>
  )
}

export default AgiledgeLogo 