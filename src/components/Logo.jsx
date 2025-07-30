import React from 'react';

const Logo = ({ size = 'medium', className = '', showText = false, variant = 'vertical' }) => {
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

  // Font sizes for the agiledge text
  const agiledgeTextSizes = {
    small: '14px',
    medium: '16px',
    large: '18px',
    xlarge: '20px'
  };

  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center space-x-1 ${className}`}>
        {/* Custom AE Logo */}
        <div className={`relative ${logoSize[size]}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Letter E - Blue, positioned behind */}
            <path 
              d="M65 20 L65 80 M65 20 L95 20 M65 45 L85 45 M65 80 L95 80" 
              stroke="#1E40AF" 
              strokeWidth="8" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              fill="none"
            />
            {/* Letter A - Green, positioned in front */}
            <path 
              d="M25 80 L45 20 L65 80 M35 60 L55 60" 
              stroke="#166534" 
              strokeWidth="8" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>

        {/* Agiledge text logo to the right */}
        <div className={`${smallTextSizes[size]} font-bold tracking-wide`}>
          <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            agiledge
          </span>
        </div>

        {/* AGILEDGE Text - Only if showText is true */}
        {showText && (
          <div className={`${textSizes[size]}`}>
            <span className="font-bold tracking-wide text-black">
              AGILEDGE
            </span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center space-y-0.5 ${className}`}>
      {/* Custom AE Logo */}
      <div className={`relative ${logoSize[size]}`}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Letter E - Blue, positioned behind */}
          <path 
            d="M65 20 L65 80 M65 20 L95 20 M65 45 L85 45 M65 80 L95 80" 
            stroke="#1E40AF" 
            strokeWidth="8" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            fill="none"
          />
          {/* Letter A - Green, positioned in front */}
          <path 
            d="M25 80 L45 20 L65 80 M35 60 L55 60" 
            stroke="#166534" 
            strokeWidth="8" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>

      {/* Agiledge text logo below */}
      <div className={`${smallTextSizes[size]} font-bold tracking-wide text-center`}>
        <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          agiledge
        </span>
      </div>

      {/* AGILEDGE Text - Only if showText is true */}
      {showText && (
        <div className={`text-center ${textSizes[size]}`}>
          <span className="font-bold tracking-wide text-black">
            AGILEDGE
          </span>
        </div>
      )}
    </div>
  );
};

// Horizontal version
const LogoHorizontal = ({ size = 'medium', className = '', showText = false }) => {
  return <Logo size={size} className={className} showText={showText} variant="horizontal" />;
};

// Minimal version (logo only)
const LogoMinimal = ({ size = 'medium', className = '' }) => {
  return <Logo size={size} className={className} showText={false} />;
};

export { LogoHorizontal, LogoMinimal };
export default Logo; 