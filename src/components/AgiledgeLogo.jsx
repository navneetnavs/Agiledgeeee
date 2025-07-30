import React from 'react';

const AgiledgeLogo = ({ 
  variant = 'light', 
  size = 'medium',
  showText = true,
  className = ''
}) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16',
    xlarge: 'w-20 h-20'
  };

  const textSizes = {
    small: 'text-sm',
    medium: 'text-lg',
    large: 'text-xl',
    xlarge: 'text-2xl'
  };

  const isDark = variant === 'dark';
  const textColor = isDark ? 'text-white' : 'text-black';

  return (
    <div className={`flex flex-col items-center space-y-1 ${className}`}>
      {/* AE Monogram */}
      <div className={`relative ${sizeClasses[size]}`}>
        <div className="w-full h-full flex items-center justify-center relative">
          {/* AE Monogram Container */}
          <div className="relative w-8 h-8">
            {/* Letter A - Teal Trapezoidal Shape */}
            <div className="absolute top-0 left-0 w-4 h-6">
              {/* Main teal trapezoidal "A" shape */}
              <div className="absolute top-0 left-0 w-3 h-6 bg-gradient-to-b from-teal-700 via-teal-600 to-teal-500 transform skew-x-6"></div>
              
              {/* Motion lines to the left - digital effect */}
              <div className="absolute top-1.5 -left-3 space-y-1">
                <div className="w-2 h-0.5 bg-black"></div>
                <div className="w-1.5 h-0.5 bg-black"></div>
                <div className="w-1 h-0.5 bg-black"></div>
              </div>
              
              {/* Motion dots */}
              <div className="absolute top-0.5 -left-2 w-0.5 h-0.5 bg-black rounded-full"></div>
              <div className="absolute bottom-1 -left-2 w-0.5 h-0.5 bg-black rounded-full"></div>
            </div>
            
            {/* Letter E - Three horizontal bars */}
            <div className="absolute top-0 right-0 w-3 h-6">
              {/* Top bar - shortest */}
              <div className="absolute top-0 right-0 w-2 h-0.5 bg-black"></div>
              {/* Middle bar - medium length */}
              <div className="absolute top-2.5 right-0 w-2.5 h-0.5 bg-black"></div>
              {/* Bottom bar - longest */}
              <div className="absolute bottom-0 right-0 w-3 h-0.5 bg-black"></div>
            </div>
          </div>
        </div>
      </div>

      {/* AGILEDGE Text */}
      {showText && (
        <div className={`text-center ${textSizes[size]}`}>
          <span className={`font-bold tracking-wide ${textColor}`}>
            AGILEDGE
          </span>
        </div>
      )}
    </div>
  );
};

// Minimal version - monogram only
const AgiledgeLogoMinimal = ({ 
  variant = 'light', 
  size = 'medium',
  className = ''
}) => {
  const sizeClasses = {
    small: 'w-6 h-6',
    medium: 'w-8 h-8',
    large: 'w-12 h-12',
    xlarge: 'w-16 h-16'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <div className="w-full h-full flex items-center justify-center relative">
        {/* AE Monogram Container */}
        <div className="relative w-6 h-6">
          {/* Letter A - Teal Trapezoidal Shape */}
          <div className="absolute top-0 left-0 w-3 h-4.5">
            {/* Main teal trapezoidal "A" shape */}
            <div className="absolute top-0 left-0 w-2.25 h-4.5 bg-gradient-to-b from-teal-700 via-teal-600 to-teal-500 transform skew-x-6"></div>
            
            {/* Motion lines to the left - digital effect */}
            <div className="absolute top-1 -left-2 space-y-0.5">
              <div className="w-1.5 h-0.5 bg-black"></div>
              <div className="w-1 h-0.5 bg-black"></div>
              <div className="w-0.5 h-0.5 bg-black"></div>
            </div>
            
            {/* Motion dots */}
            <div className="absolute top-0.25 -left-1.5 w-0.5 h-0.5 bg-black rounded-full"></div>
            <div className="absolute bottom-0.75 -left-1.5 w-0.5 h-0.5 bg-black rounded-full"></div>
          </div>
          
          {/* Letter E - Three horizontal bars */}
          <div className="absolute top-0 right-0 w-2.25 h-4.5">
            {/* Top bar - shortest */}
            <div className="absolute top-0 right-0 w-1.5 h-0.5 bg-black"></div>
            {/* Middle bar - medium length */}
            <div className="absolute top-2 right-0 w-1.875 h-0.5 bg-black"></div>
            {/* Bottom bar - longest */}
            <div className="absolute bottom-0 right-0 w-2.25 h-0.5 bg-black"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Horizontal version with text
const AgiledgeLogoHorizontal = ({ 
  variant = 'light', 
  size = 'medium',
  className = ''
}) => {
  const sizeClasses = {
    small: 'w-6 h-6',
    medium: 'w-8 h-8',
    large: 'w-10 h-10',
    xlarge: 'w-12 h-12'
  };

  const textSizes = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
    xlarge: 'text-xl'
  };

  const isDark = variant === 'dark';
  const textColor = isDark ? 'text-white' : 'text-black';

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* AE Monogram */}
      <div className={`relative ${sizeClasses[size]}`}>
        <div className="w-full h-full flex items-center justify-center relative">
          {/* AE Monogram Container */}
          <div className="relative w-6 h-6">
            {/* Letter A - Teal Trapezoidal Shape */}
            <div className="absolute top-0 left-0 w-3 h-4">
              {/* Main teal trapezoidal "A" shape */}
              <div className="absolute top-0 left-0 w-2.25 h-4 bg-gradient-to-b from-teal-700 via-teal-600 to-teal-500 transform skew-x-6"></div>
              
              {/* Motion lines to the left - digital effect */}
              <div className="absolute top-1 -left-1.5 space-y-0.5">
                <div className="w-1 h-0.5 bg-black"></div>
                <div className="w-0.75 h-0.5 bg-black"></div>
                <div className="w-0.5 h-0.5 bg-black"></div>
              </div>
              
              {/* Motion dots */}
              <div className="absolute top-0.25 -left-1.25 w-0.5 h-0.5 bg-black rounded-full"></div>
              <div className="absolute bottom-0.25 -left-1.25 w-0.5 h-0.5 bg-black rounded-full"></div>
            </div>
            
            {/* Letter E - Three horizontal bars */}
            <div className="absolute top-0 right-0 w-2.25 h-4">
              {/* Top bar - shortest */}
              <div className="absolute top-0 right-0 w-1.5 h-0.5 bg-black"></div>
              {/* Middle bar - medium length */}
              <div className="absolute top-1.5 right-0 w-1.875 h-0.5 bg-black"></div>
              {/* Bottom bar - longest */}
              <div className="absolute bottom-0 right-0 w-2.25 h-0.5 bg-black"></div>
            </div>
          </div>
        </div>
      </div>

      {/* AGILEDGE Text */}
      <div className={`${textSizes[size]}`}>
        <span className={`font-bold tracking-wide ${textColor}`}>
          AGILEDGE
        </span>
      </div>
    </div>
  );
};

export { AgiledgeLogo, AgiledgeLogoMinimal, AgiledgeLogoHorizontal };
export default AgiledgeLogo; 