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
      {/* "Agile" text */}
      <div className={`font-bold ${textSize} bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent`}>
        Agiled
      </div>
      
      {/* Circle with "g" */}
      <div className="relative -mr-1">
        <div 
          className="rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 flex items-center justify-center"
          style={{ width: `${logoSize * 0.6}px`, height: `${logoSize * 0.6}px` }}
        >
          <span className="text-white font-bold" style={{ fontSize: `${logoSize * 0.3}px` }}>
            g
          </span>
        </div>
      </div>
      
      {/* "edge" text */}
      <div className={`font-bold ${textSize} bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent -ml-1`}>
        e
      </div>
    </div>
  )
}

export default CircleAgiledgeLogo 