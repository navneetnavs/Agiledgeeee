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
            {/* Background geometric shape */}
            <polygon 
              points="20,80 50,20 80,80 70,80 50,30 30,80" 
              fill="#16A34A" 
              opacity="0.9"
            />
            
            {/* Stylized 'A' with sharp edges */}
            <path 
              d="M25 80 L45 25 L65 80 M35 65 L55 65" 
              stroke="#FFFFFF" 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              fill="none"
            />
            
            {/* Digital circuit lines */}
            <path d="M15 85 L85 85" stroke="#22C55E" strokeWidth="1" opacity="0.7"/>
            <path d="M15 90 L85 90" stroke="#22C55E" strokeWidth="1" opacity="0.5"/>
            <path d="M20 15 L20 85" stroke="#22C55E" strokeWidth="1" opacity="0.6"/>
            <path d="M80 15 L80 85" stroke="#22C55E" strokeWidth="1" opacity="0.6"/>
            
            {/* Abstract arrow elements */}
            <path 
              d="M75 25 L85 35 L75 45" 
              stroke="#FFFFFF" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              fill="none"
              opacity="0.8"
            />
            <path 
              d="M15 35 L25 25 L15 15" 
              stroke="#FFFFFF" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              fill="none"
              opacity="0.8"
            />
            
            {/* Sharp edge accents */}
            <path d="M30 15 L35 20 L30 25" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.6"/>
            <path d="M70 15 L65 20 L70 25" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.6"/>
            <path d="M30 75 L35 70 L30 65" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.6"/>
            <path d="M70 75 L65 70 L70 65" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.6"/>
            
            {/* Futuristic dots */}
            <circle cx="25" cy="25" r="1.5" fill="#22C55E" opacity="0.8"/>
            <circle cx="75" cy="25" r="1.5" fill="#22C55E" opacity="0.8"/>
            <circle cx="25" cy="75" r="1.5" fill="#22C55E" opacity="0.8"/>
            <circle cx="75" cy="75" r="1.5" fill="#22C55E" opacity="0.8"/>
          </svg>
        </div>

        {/* Company name text to the right */}
        <div className={`${smallTextSizes[size]} font-bold tracking-wide`}>
          <span className="text-green-600">
            {companyName}
          </span>
        </div>

        {/* Full company name - Only if showText is true */}
        {showText && (
          <div className={`${textSizes[size]}`}>
            <span className="font-bold tracking-wide text-green-600">
              {companyName}
            </span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center space-y-1 ${className}`}>
      {/* Modern Tech Logo */}
      <div className={`relative ${logoSize[size]}`}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Background geometric shape */}
          <polygon 
            points="20,80 50,20 80,80 70,80 50,30 30,80" 
            fill="#16A34A" 
            opacity="0.9"
          />
          
          {/* Stylized 'A' with sharp edges */}
          <path 
            d="M25 80 L45 25 L65 80 M35 65 L55 65" 
            stroke="#FFFFFF" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            fill="none"
          />
          
          {/* Digital circuit lines */}
          <path d="M15 85 L85 85" stroke="#22C55E" strokeWidth="1" opacity="0.7"/>
          <path d="M15 90 L85 90" stroke="#22C55E" strokeWidth="1" opacity="0.5"/>
          <path d="M20 15 L20 85" stroke="#22C55E" strokeWidth="1" opacity="0.6"/>
          <path d="M80 15 L80 85" stroke="#22C55E" strokeWidth="1" opacity="0.6"/>
          
          {/* Abstract arrow elements */}
          <path 
            d="M75 25 L85 35 L75 45" 
            stroke="#FFFFFF" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            fill="none"
            opacity="0.8"
          />
          <path 
            d="M15 35 L25 25 L15 15" 
            stroke="#FFFFFF" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            fill="none"
            opacity="0.8"
          />
          
          {/* Sharp edge accents */}
          <path d="M30 15 L35 20 L30 25" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.6"/>
          <path d="M70 15 L65 20 L70 25" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.6"/>
          <path d="M30 75 L35 70 L30 65" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.6"/>
          <path d="M70 75 L65 70 L70 65" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.6"/>
          
          {/* Futuristic dots */}
          <circle cx="25" cy="25" r="1.5" fill="#22C55E" opacity="0.8"/>
          <circle cx="75" cy="25" r="1.5" fill="#22C55E" opacity="0.8"/>
          <circle cx="25" cy="75" r="1.5" fill="#22C55E" opacity="0.8"/>
          <circle cx="75" cy="75" r="1.5" fill="#22C55E" opacity="0.8"/>
        </svg>
      </div>

      {/* Company name text below */}
      <div className={`${smallTextSizes[size]} font-bold tracking-wide text-center`}>
        <span className="text-green-600">
          {companyName}
        </span>
      </div>

      {/* Full company name - Only if showText is true */}
      {showText && (
        <div className={`text-center ${textSizes[size]}`}>
          <span className="font-bold tracking-wide text-green-600">
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