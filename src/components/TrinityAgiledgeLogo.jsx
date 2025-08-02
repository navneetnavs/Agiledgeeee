import React from 'react'
import trinitySymbol from '../assets/trinity.png'

const TrinityAgiledgeLogo = ({ size = 'medium', className = '' }) => {
  // Size mappings
  const sizeMap = {
    small: { logoSize: 32, textSize: 'text-lg', spacing: 'space-x-0' },
    medium: { logoSize: 52, textSize: 'text-xl', spacing: 'space-x-1' },
    large: { logoSize: 56, textSize: 'text-2xl', spacing: 'space-x-2' },
    xlarge: { logoSize: 72, textSize: 'text-3xl', spacing: 'space-x-2' }
  }

  const { logoSize, textSize, spacing } = sizeMap[size] || sizeMap.medium

  return (
    <div className={`flex items-center ${spacing} ${className}`}>
      {/* Trinity Symbol */}
      <div className="flex-shrink-0">
        <img 
          src={trinitySymbol} 
          alt="Trinity Symbol"
          width={logoSize}
          height={logoSize}
          className="object-contain"
        />
      </div>

      {/* "Agiledge" Text with Gradient */}
      <div className={`font-bold ${textSize} bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent`}>
        Agiledge
      </div>
    </div>
  )
}

export default TrinityAgiledgeLogo 