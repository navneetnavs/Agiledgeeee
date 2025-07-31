import React from 'react';

const TechLogo = ({ size = 'medium', className = '', showText = false, variant = 'vertical', companyName = 'agiledge' }) => {
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

  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center ${className}`}>
        {/* Modern Tech Logo */}
        <div className={`relative ${logoSize[size]}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Professional IT company logo - Clean geometric design */}
            <rect x="20" y="20" width="60" height="60" rx="8" fill="#16A34A" stroke="#0F172A" strokeWidth="2" opacity="0.95"/>
            
            {/* Clean, professional 'A' */}
            <path 
              d="M30 70 L50 30 L70 70 M38 55 L62 55" 
              stroke="#FFFFFF" 
              strokeWidth="4" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              fill="none"
            />
            
            {/* Subtle tech elements - connection lines */}
            <path d="M25 75 L75 75" stroke="#22C55E" strokeWidth="2" opacity="0.6"/>
            <path d="M30 25 L30 75" stroke="#22C55E" strokeWidth="2" opacity="0.5"/>
            <path d="M70 25 L70 75" stroke="#22C55E" strokeWidth="2" opacity="0.5"/>
            
            {/* Professional corner indicators */}
            <circle cx="30" cy="30" r="3" fill="#22C55E" opacity="0.8"/>
            <circle cx="70" cy="30" r="3" fill="#22C55E" opacity="0.8"/>
            <circle cx="30" cy="70" r="3" fill="#22C55E" opacity="0.8"/>
            <circle cx="70" cy="70" r="3" fill="#22C55E" opacity="0.8"/>
            
            {/* Subtle directional arrows */}
            <path 
              d="M65 35 L72 42 L65 49" 
              stroke="#FFFFFF" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              fill="none"
              opacity="0.7"
            />
            <path 
              d="M28 42 L35 35 L28 28" 
              stroke="#FFFFFF" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              fill="none"
              opacity="0.7"
            />
          </svg>
        </div>

        {/* Company name text to the right */}
        <div className={`${smallTextSizes[size]} font-bold tracking-wide`}>
          <span className="text-green-600 drop-shadow-sm">
            {companyName}
          </span>
        </div>

        {/* Full company name - Only if showText is true */}
        {showText && (
          <div className={`${textSizes[size]}`}>
            <span className="font-bold tracking-wide text-green-600 drop-shadow-sm">
              {companyName}
            </span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Modern Tech Logo */}
      <div className={`relative ${logoSize[size]}`}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Professional IT company logo - Clean geometric design */}
          <rect x="20" y="20" width="60" height="60" rx="8" fill="#16A34A" stroke="#0F172A" strokeWidth="2" opacity="0.95"/>
          
          {/* Clean, professional 'A' */}
          <path 
            d="M30 70 L50 30 L70 70 M38 55 L62 55" 
            stroke="#FFFFFF" 
            strokeWidth="4" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            fill="none"
          />
          
          {/* Subtle tech elements - connection lines */}
          <path d="M25 75 L75 75" stroke="#22C55E" strokeWidth="2" opacity="0.6"/>
          <path d="M30 25 L30 75" stroke="#22C55E" strokeWidth="2" opacity="0.5"/>
          <path d="M70 25 L70 75" stroke="#22C55E" strokeWidth="2" opacity="0.5"/>
          
          {/* Professional corner indicators */}
          <circle cx="30" cy="30" r="3" fill="#22C55E" opacity="0.8"/>
          <circle cx="70" cy="30" r="3" fill="#22C55E" opacity="0.8"/>
          <circle cx="30" cy="70" r="3" fill="#22C55E" opacity="0.8"/>
          <circle cx="70" cy="70" r="3" fill="#22C55E" opacity="0.8"/>
          
          {/* Subtle directional arrows */}
          <path 
            d="M65 35 L72 42 L65 49" 
            stroke="#FFFFFF" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            fill="none"
            opacity="0.7"
          />
          <path 
            d="M28 42 L35 35 L28 28" 
            stroke="#FFFFFF" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            fill="none"
            opacity="0.7"
          />
        </svg>
      </div>

      {/* Company name text below */}
      <div className={`${smallTextSizes[size]} font-bold tracking-wide text-center -mt-3`}>
        <span className="text-green-600 drop-shadow-sm">
          {companyName}
        </span>
      </div>

      {/* Full company name - Only if showText is true */}
      {showText && (
        <div className={`text-center ${textSizes[size]} -mt-3`}>
          <span className="font-bold tracking-wide text-green-600 drop-shadow-sm">
            {companyName}
          </span>
        </div>
      )}
    </div>
  );
};

// Horizontal version
const TechLogoHorizontal = ({ size = 'medium', className = '', showText = false, companyName = 'agiledge' }) => {
  return <TechLogo size={size} className={className} showText={showText} variant="horizontal" companyName={companyName} />;
};

// Minimal version (logo only)
const TechLogoMinimal = ({ size = 'medium', className = '', companyName = 'agiledge' }) => {
  return <TechLogo size={size} className={className} showText={false} companyName={companyName} />;
};

export { TechLogoHorizontal, TechLogoMinimal };
export default TechLogo; 