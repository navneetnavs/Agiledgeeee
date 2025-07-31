import React from 'react';

const GlobeLogo = ({ size = 'medium', className = '', showText = false, variant = 'vertical', companyName = 'AGILEDGE' }) => {
  const sizeClasses = {
    small: 'w-16 h-16',
    medium: 'w-20 h-20', 
    large: 'w-24 h-24',
    xlarge: 'w-32 h-32'
  };

  const textSizes = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
    xlarge: 'text-xl'
  };

  const logoSize = {
    small: 'w-8 h-8',
    medium: 'w-10 h-10',
    large: 'w-12 h-12',
    xlarge: 'w-16 h-16'
  };

  const smallTextSizes = {
    small: 'text-xs',
    medium: 'text-sm',
    large: 'text-base',
    xlarge: 'text-lg'
  };

  // Font sizes for the company text
  const companyTextSizes = {
    small: '14px',
    medium: '16px',
    large: '18px',
    xlarge: '20px'
  };

  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center space-x-1 ${className}`}>
        {/* Custom Globe Logo */}
        <div className={`relative ${logoSize[size]}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Globe Wireframe */}
            <circle 
              cx="50" cy="50" 
              r="35" 
              fill="none" 
              stroke="#0D9488" 
              strokeWidth="1.5"
              opacity="0.8"
            />
            
            {/* Meridians (vertical lines) */}
            <path d="M15 50 Q50 15 85 50" stroke="#0D9488" strokeWidth="1" fill="none" opacity="0.6"/>
            <path d="M20 50 Q50 20 80 50" stroke="#0D9488" strokeWidth="1" fill="none" opacity="0.6"/>
            <path d="M25 50 Q50 25 75 50" stroke="#0D9488" strokeWidth="1" fill="none" opacity="0.6"/>
            <path d="M30 50 Q50 30 70 50" stroke="#0D9488" strokeWidth="1" fill="none" opacity="0.6"/>
            <path d="M35 50 Q50 35 65 50" stroke="#0D9488" strokeWidth="1" fill="none" opacity="0.6"/>
            
            {/* Parallels (horizontal lines) */}
            <path d="M15 20 Q50 20 85 20" stroke="#0D9488" strokeWidth="1" fill="none" opacity="0.6"/>
            <path d="M15 25 Q50 25 85 25" stroke="#0D9488" strokeWidth="1" fill="none" opacity="0.6"/>
            <path d="M15 30 Q50 30 85 30" stroke="#0D9488" strokeWidth="1" fill="none" opacity="0.6"/>
            <path d="M15 35 Q50 35 85 35" stroke="#0D9488" strokeWidth="1" fill="none" opacity="0.6"/>
            <path d="M15 40 Q50 40 85 40" stroke="#0D9488" strokeWidth="1" fill="none" opacity="0.6"/>
            <path d="M15 45 Q50 45 85 45" stroke="#0D9488" strokeWidth="1" fill="none" opacity="0.6"/>
            <path d="M15 55 Q50 55 85 55" stroke="#0D9488" strokeWidth="1" fill="none" opacity="0.6"/>
            <path d="M15 60 Q50 60 85 60" stroke="#0D9488" strokeWidth="1" fill="none" opacity="0.6"/>
            <path d="M15 65 Q50 65 85 65" stroke="#0D9488" strokeWidth="1" fill="none" opacity="0.6"/>
            <path d="M15 70 Q50 70 85 70" stroke="#0D9488" strokeWidth="1" fill="none" opacity="0.6"/>
            <path d="M15 75 Q50 75 85 75" stroke="#0D9488" strokeWidth="1" fill="none" opacity="0.6"/>
            <path d="M15 80 Q50 80 85 80" stroke="#0D9488" strokeWidth="1" fill="none" opacity="0.6"/>
            
            {/* Orbital Paths */}
            <ellipse 
              cx="50" cy="50" 
              rx="45" ry="15" 
              fill="none" 
              stroke="#0D9488" 
              strokeWidth="1.5"
              opacity="0.7"
              transform="rotate(-15 50 50)"
            />
            <ellipse 
              cx="50" cy="50" 
              rx="42" ry="12" 
              fill="none" 
              stroke="#0D9488" 
              strokeWidth="1.5"
              opacity="0.7"
              transform="rotate(10 50 50)"
            />
            
            {/* Two Starbursts to upper right */}
            <g transform="translate(70, 25)">
              <path d="M0 -2 L1 -0.5 L2 0 L1 0.5 L0 2 L-1 0.5 L-2 0 L-1 -0.5 Z" fill="#0D9488" opacity="0.9"/>
            </g>
            <g transform="translate(75, 20)">
              <path d="M0 -1.5 L0.8 -0.4 L1.5 0 L0.8 0.4 L0 1.5 L-0.8 0.4 L-1.5 0 L-0.8 -0.4 Z" fill="#0D9488" opacity="0.9"/>
            </g>
          </svg>
        </div>

        {/* Company name text to the right */}
        <div className={`${smallTextSizes[size]} font-bold tracking-wide`}>
          <span className="text-teal-600">
            {companyName}
          </span>
        </div>

        {/* Full company name - Only if showText is true */}
        {showText && (
          <div className={`${textSizes[size]}`}>
            <span className="font-bold tracking-wide text-teal-600">
              {companyName}
            </span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center space-y-1 ${className}`}>
      {/* Custom Globe Logo */}
      <div className={`relative ${logoSize[size]}`}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Globe Wireframe */}
          <circle 
            cx="50" cy="50" 
            r="35" 
            fill="none" 
            stroke="#0D9488" 
            strokeWidth="1.5"
            opacity="0.8"
          />
          
          {/* Meridians (vertical lines) */}
          <path d="M15 50 Q50 15 85 50" stroke="#0D9488" strokeWidth="1" fill="none" opacity="0.6"/>
          <path d="M20 50 Q50 20 80 50" stroke="#0D9488" strokeWidth="1" fill="none" opacity="0.6"/>
          <path d="M25 50 Q50 25 75 50" stroke="#0D9488" strokeWidth="1" fill="none" opacity="0.6"/>
          <path d="M30 50 Q50 30 70 50" stroke="#0D9488" strokeWidth="1" fill="none" opacity="0.6"/>
          <path d="M35 50 Q50 35 65 50" stroke="#0D9488" strokeWidth="1" fill="none" opacity="0.6"/>
          
          {/* Parallels (horizontal lines) */}
          <path d="M15 20 Q50 20 85 20" stroke="#0D9488" strokeWidth="1" fill="none" opacity="0.6"/>
          <path d="M15 25 Q50 25 85 25" stroke="#0D9488" strokeWidth="1" fill="none" opacity="0.6"/>
          <path d="M15 30 Q50 30 85 30" stroke="#0D9488" strokeWidth="1" fill="none" opacity="0.6"/>
          <path d="M15 35 Q50 35 85 35" stroke="#0D9488" strokeWidth="1" fill="none" opacity="0.6"/>
          <path d="M15 40 Q50 40 85 40" stroke="#0D9488" strokeWidth="1" fill="none" opacity="0.6"/>
          <path d="M15 45 Q50 45 85 45" stroke="#0D9488" strokeWidth="1" fill="none" opacity="0.6"/>
          <path d="M15 55 Q50 55 85 55" stroke="#0D9488" strokeWidth="1" fill="none" opacity="0.6"/>
          <path d="M15 60 Q50 60 85 60" stroke="#0D9488" strokeWidth="1" fill="none" opacity="0.6"/>
          <path d="M15 65 Q50 65 85 65" stroke="#0D9488" strokeWidth="1" fill="none" opacity="0.6"/>
          <path d="M15 70 Q50 70 85 70" stroke="#0D9488" strokeWidth="1" fill="none" opacity="0.6"/>
          <path d="M15 75 Q50 75 85 75" stroke="#0D9488" strokeWidth="1" fill="none" opacity="0.6"/>
          <path d="M15 80 Q50 80 85 80" stroke="#0D9488" strokeWidth="1" fill="none" opacity="0.6"/>
          
          {/* Orbital Paths */}
          <ellipse 
            cx="50" cy="50" 
            rx="45" ry="15" 
            fill="none" 
            stroke="#0D9488" 
            strokeWidth="1.5"
            opacity="0.7"
            transform="rotate(-15 50 50)"
          />
          <ellipse 
            cx="50" cy="50" 
            rx="42" ry="12" 
            fill="none" 
            stroke="#0D9488" 
            strokeWidth="1.5"
            opacity="0.7"
            transform="rotate(10 50 50)"
          />
          
                      {/* Two Starbursts to upper right */}
            <g transform="translate(70, 25)">
              <path d="M0 -2 L1 -0.5 L2 0 L1 0.5 L0 2 L-1 0.5 L-2 0 L-1 -0.5 Z" fill="#0D9488" opacity="0.9"/>
            </g>
            <g transform="translate(75, 20)">
              <path d="M0 -1.5 L0.8 -0.4 L1.5 0 L0.8 0.4 L0 1.5 L-0.8 0.4 L-1.5 0 L-0.8 -0.4 Z" fill="#0D9488" opacity="0.9"/>
            </g>
        </svg>
      </div>

      {/* Company name text below */}
      <div className={`${smallTextSizes[size]} font-bold tracking-wide text-center`}>
        <span className="text-teal-600">
          {companyName}
        </span>
      </div>

      {/* Full company name - Only if showText is true */}
      {showText && (
        <div className={`text-center ${textSizes[size]}`}>
          <span className="font-bold tracking-wide text-teal-600">
            {companyName}
          </span>
        </div>
      )}
    </div>
  );
};

// Horizontal version
const GlobeLogoHorizontal = ({ size = 'medium', className = '', showText = false, companyName = 'AGILEDGE' }) => {
  return <GlobeLogo size={size} className={className} showText={showText} variant="horizontal" companyName={companyName} />;
};

// Minimal version (logo only)
const GlobeLogoMinimal = ({ size = 'medium', className = '', companyName = 'AGILEDGE' }) => {
  return <GlobeLogo size={size} className={className} showText={false} companyName={companyName} />;
};

export { GlobeLogoHorizontal, GlobeLogoMinimal };
export default GlobeLogo; 