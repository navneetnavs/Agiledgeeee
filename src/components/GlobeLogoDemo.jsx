import React from 'react';
import GlobeLogo, { GlobeLogoHorizontal, GlobeLogoMinimal } from './GlobeLogo';

const GlobeLogoDemo = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Minimalist Globe Logo Design</h1>
          <p className="text-xl text-gray-600">Clean line-art globe with orbital paths and starbursts - perfect for global tech companies</p>
        </div>

        {/* Logo Variants */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Horizontal Logo */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Horizontal Logo</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-center">
                <GlobeLogoHorizontal size="small" companyName="AGILEDGE" />
              </div>
              <div className="flex items-center justify-center">
                <GlobeLogoHorizontal size="medium" companyName="AGILEDGE" />
              </div>
              <div className="flex items-center justify-center">
                <GlobeLogoHorizontal size="large" companyName="AGILEDGE" />
              </div>
              <div className="flex items-center justify-center">
                <GlobeLogoHorizontal size="xlarge" companyName="AGILEDGE" />
              </div>
            </div>
          </div>

          {/* Vertical Logo */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Vertical Logo</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-center">
                <GlobeLogo size="small" companyName="AGILEDGE" />
              </div>
              <div className="flex items-center justify-center">
                <GlobeLogo size="medium" companyName="AGILEDGE" />
              </div>
              <div className="flex items-center justify-center">
                <GlobeLogo size="large" companyName="AGILEDGE" />
              </div>
              <div className="flex items-center justify-center">
                <GlobeLogo size="xlarge" companyName="AGILEDGE" />
              </div>
            </div>
          </div>

          {/* Minimal Logo */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Minimal Logo (Icon Only)</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-center">
                <GlobeLogoMinimal size="small" companyName="AGILEDGE" />
              </div>
              <div className="flex items-center justify-center">
                <GlobeLogoMinimal size="medium" companyName="AGILEDGE" />
              </div>
              <div className="flex items-center justify-center">
                <GlobeLogoMinimal size="large" companyName="AGILEDGE" />
              </div>
              <div className="flex items-center justify-center">
                <GlobeLogoMinimal size="xlarge" companyName="AGILEDGE" />
              </div>
            </div>
          </div>
        </div>

        {/* Color Palette */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-16">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Color Palette Used</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-2 rounded-lg bg-teal-600"></div>
              <p className="text-sm font-medium text-gray-700">Globe Wireframe</p>
              <p className="text-xs text-gray-500">Teal (#0D9488)</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-2 rounded-lg bg-teal-600"></div>
              <p className="text-sm font-medium text-gray-700">Company Text</p>
              <p className="text-xs text-gray-500">Teal (#0D9488)</p>
            </div>
          </div>
        </div>

        {/* Design Features */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-16">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Design Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-700 mb-3">Globe Elements</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• <strong>Wireframe Globe:</strong> Circular grid with meridians and parallels</li>
                <li>• <strong>Orbital Paths:</strong> Two elliptical orbits around the globe</li>
                <li>• <strong>Dual Starbursts:</strong> Two four-pointed stars to upper right</li>
                <li>• <strong>Teal Color:</strong> Matches the company text color</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-3">Text Elements</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• <strong>Flowing Typography:</strong> Modern, rounded font style</li>
                <li>• <strong>Teal Color:</strong> Complements the blue globe</li>
                <li>• <strong>Bold Weight:</strong> Strong, professional appearance</li>
                <li>• <strong>Customizable:</strong> Easy to change company name</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Usage Examples */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Usage Examples</h3>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">Navbar Usage:</h4>
              <code className="text-sm text-gray-600">
                {`<GlobeLogoHorizontal size="large" companyName="YOURCOMPANY" />`}
              </code>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">Footer Usage:</h4>
              <code className="text-sm text-gray-600">
                {`<GlobeLogo size="medium" companyName="YOURCOMPANY" />`}
              </code>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">Icon Only:</h4>
              <code className="text-sm text-gray-600">
                {`<GlobeLogoMinimal size="small" companyName="YOURCOMPANY" />`}
              </code>
            </div>
          </div>
        </div>

        {/* Customization Instructions */}
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-8 rounded-xl shadow-lg mt-16">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">How to Customize</h3>
          <div className="space-y-4 text-gray-700">
            <p><strong>1. Change Company Name:</strong> Replace "AGILEDGE" with your actual company name</p>
            <p><strong>2. Adjust Colors:</strong> Modify the teal color (#0D9488) for both globe and text</p>
            <p><strong>3. Change Sizes:</strong> Use size props: "small", "medium", "large", "xlarge"</p>
            <p><strong>4. Variants:</strong> Use "horizontal" or "vertical" layout</p>
            <p><strong>5. Globe Style:</strong> Customize wireframe density and orbital paths</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobeLogoDemo; 