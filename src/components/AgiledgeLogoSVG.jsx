import React from 'react';

const AgiledgeLogoSVG = ({ 
  variant = 'light', 
  size = 'medium',
  showText = true,
  className = ''
}) => {
  const sizeMap = {
    small: { width: 32, height: 32, textSize: 12 },
    medium: { width: 48, height: 48, textSize: 16 },
    large: { width: 64, height: 64, textSize: 20 },
    xlarge: { width: 80, height: 80, textSize: 24 }
  };

  const { width, height, textSize } = sizeMap[size];
  const isDark = variant === 'dark';
  
  const textColor = isDark ? '#FFFFFF' : '#000000';

  return (
    <svg 
      width={showText ? width * 2 : width} 
      height={showText ? height * 1.5 : height} 
      viewBox={`0 0 ${showText ? width * 2 : width} ${showText ? height * 1.5 : height}`}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="tealGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#0F766E', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#0D9488', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#14B8A6', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      {/* AE Monogram */}
      <g transform={`translate(${width * 0.1}, ${height * 0.1})`}>
        {/* Letter A - Teal Trapezoidal Shape */}
        <g>
          {/* Main teal trapezoidal "A" shape */}
          <polygon 
            points={`${width * 0.1},0 ${width * 0.25},0 ${width * 0.22},${height * 0.25} ${width * 0.08},${height * 0.25}`}
            fill="url(#tealGradient)"
            transform={`skewX(6)`}
          />
          
          {/* Motion lines to the left - digital effect */}
          <line x1={width * -0.15} y1={height * 0.06} x2={width * -0.025} y2={height * 0.06} stroke="#000000" strokeWidth={width * 0.012}/>
          <line x1={width * -0.15} y1={height * 0.12} x2={width * -0.05} y2={height * 0.12} stroke="#000000" strokeWidth={width * 0.012}/>
          <line x1={width * -0.15} y1={height * 0.18} x2={width * -0.075} y2={height * 0.18} stroke="#000000" strokeWidth={width * 0.012}/>
          
          {/* Motion dots */}
          <circle cx={width * -0.1} cy={height * 0.02} r={width * 0.012} fill="#000000"/>
          <circle cx={width * -0.1} cy={height * 0.23} r={width * 0.012} fill="#000000"/>
        </g>
        
        {/* Letter E - Three horizontal bars */}
        <g transform={`translate(${width * 0.12}, 0)`}>
          {/* Top bar - shortest */}
          <rect x={0} y={0} width={width * 0.1} height={height * 0.01} fill="#000000"/>
          {/* Middle bar - medium length */}
          <rect x={0} y={height * 0.1} width={width * 0.125} height={height * 0.01} fill="#000000"/>
          {/* Bottom bar - longest */}
          <rect x={0} y={height * 0.2} width={width * 0.15} height={height * 0.01} fill="#000000"/>
        </g>
      </g>

      {/* AGILEDGE Text */}
      {showText && (
        <g transform={`translate(${width * 0.1}, ${height * 0.4})`}>
          <text 
            x={0} 
            y={0} 
            fontSize={textSize} 
            fontWeight="bold" 
            fill={textColor}
            fontFamily="Inter, sans-serif"
            letterSpacing="0.05em"
          >
            AGILEDGE
          </text>
        </g>
      )}
    </svg>
  );
};

// Minimal SVG version
const AgiledgeLogoMinimalSVG = ({ 
  variant = 'light', 
  size = 'medium',
  className = ''
}) => {
  const sizeMap = {
    small: { width: 24, height: 24 },
    medium: { width: 32, height: 32 },
    large: { width: 48, height: 48 },
    xlarge: { width: 64, height: 64 }
  };

  const { width, height } = sizeMap[size];

  return (
    <svg 
      width={width} 
      height={height} 
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="minimalTealGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#0F766E', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#0D9488', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#14B8A6', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      {/* AE Monogram */}
      <g transform={`translate(${width * 0.1}, ${height * 0.1})`}>
        {/* Letter A - Teal Trapezoidal Shape */}
        <g>
          {/* Main teal trapezoidal "A" shape */}
          <polygon 
            points={`${width * 0.075},0 ${width * 0.1875},0 ${width * 0.165},${height * 0.25} ${width * 0.06},${height * 0.25}`}
            fill="url(#minimalTealGradient)"
            transform={`skewX(6)`}
          />
          
          {/* Motion lines to the left - digital effect */}
          <line x1={width * -0.1125} y1={height * 0.06} x2={width * -0.01875} y2={height * 0.06} stroke="#000000" strokeWidth={width * 0.012}/>
          <line x1={width * -0.1125} y1={height * 0.12} x2={width * -0.0375} y2={height * 0.12} stroke="#000000" strokeWidth={width * 0.012}/>
          <line x1={width * -0.1125} y1={height * 0.18} x2={width * -0.05625} y2={height * 0.18} stroke="#000000" strokeWidth={width * 0.012}/>
          
          {/* Motion dots */}
          <circle cx={width * -0.075} cy={height * 0.02} r={width * 0.012} fill="#000000"/>
          <circle cx={width * -0.075} cy={height * 0.23} r={width * 0.012} fill="#000000"/>
        </g>
        
        {/* Letter E - Three horizontal bars */}
        <g transform={`translate(${width * 0.09}, 0)`}>
          {/* Top bar - shortest */}
          <rect x={0} y={0} width={width * 0.075} height={height * 0.01} fill="#000000"/>
          {/* Middle bar - medium length */}
          <rect x={0} y={height * 0.1} width={width * 0.09375} height={height * 0.01} fill="#000000"/>
          {/* Bottom bar - longest */}
          <rect x={0} y={height * 0.2} width={width * 0.1125} height={height * 0.01} fill="#000000"/>
        </g>
      </g>
    </svg>
  );
};

export { AgiledgeLogoSVG, AgiledgeLogoMinimalSVG };
export default AgiledgeLogoSVG; 