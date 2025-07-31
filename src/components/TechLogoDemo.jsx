import React from 'react';
import TechLogo, { TechLogoHorizontal, TechLogoMinimal } from './TechLogo';

const TechLogoDemo = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Modern Tech Logo Design</h1>
          <p className="text-xl text-gray-600">Sharp, agile design with stylized 'A' and geometric elements - perfect for tech companies</p>
        </div>

        {/* Logo Variants */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Horizontal Logo */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Horizontal Logo</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-center">
                <TechLogoHorizontal size="small" companyName="agiledge" />
              </div>
              <div className="flex items-center justify-center">
                <TechLogoHorizontal size="medium" companyName="agiledge" />
              </div>
              <div className="flex items-center justify-center">
                <TechLogoHorizontal size="large" companyName="agiledge" />
              </div>
              <div className="flex items-center justify-center">
                <TechLogoHorizontal size="xlarge" companyName="agiledge" />
              </div>
            </div>
          </div>

          {/* Vertical Logo */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Vertical Logo</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-center">
                <TechLogo size="small" companyName="agiledge" />
              </div>
              <div className="flex items-center justify-center">
                <TechLogo size="medium" companyName="agiledge" />
              </div>
              <div className="flex items-center justify-center">
                <TechLogo size="large" companyName="agiledge" />
              </div>
              <div className="flex items-center justify-center">
                <TechLogo size="xlarge" companyName="agiledge" />
              </div>
            </div>
          </div>

          {/* Minimal Logo */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Minimal Logo (Icon Only)</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-center">
                <TechLogoMinimal size="small" companyName="agiledge" />
              </div>
              <div className="flex items-center justify-center">
                <TechLogoMinimal size="medium" companyName="agiledge" />
              </div>
              <div className="flex items-center justify-center">
                <TechLogoMinimal size="large" companyName="agiledge" />
              </div>
              <div className="flex items-center justify-center">
                <TechLogoMinimal size="xlarge" companyName="agiledge" />
              </div>
            </div>
          </div>
        </div>

        {/* Color Palette */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-16">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Color Palette Used</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-2 rounded-lg bg-green-600"></div>
              <p className="text-sm font-medium text-gray-700">Primary Green</p>
              <p className="text-xs text-gray-500">Deep green (#16A34A)</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-2 rounded-lg bg-green-500"></div>
              <p className="text-sm font-medium text-gray-700">Accent Green</p>
              <p className="text-xs text-gray-500">Bright green (#22C55E)</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-2 rounded-lg bg-green-600"></div>
              <p className="text-sm font-medium text-gray-700">Text Color</p>
              <p className="text-xs text-gray-500">Green (#16A34A)</p>
            </div>
          </div>
        </div>

        {/* Design Features */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-16">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Design Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-700 mb-3">Logo Elements</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• <strong>Stylized 'A':</strong> Sharp, geometric letter with clean lines</li>
                <li>• <strong>Geometric Background:</strong> Angular polygon shape for structure</li>
                <li>• <strong>Digital Circuit Lines:</strong> Thin lines suggesting technology</li>
                <li>• <strong>Abstract Arrows:</strong> Directional elements for agility</li>
                <li>• <strong>Sharp Edge Accents:</strong> Geometric details for precision</li>
                <li>• <strong>Futuristic Dots:</strong> Tech-inspired connection points</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-3">Design Philosophy</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• <strong>Agility:</strong> Sharp angles and dynamic arrows</li>
                <li>• <strong>Technology:</strong> Circuit lines and geometric precision</li>
                <li>• <strong>Modernity:</strong> Clean, minimal aesthetic</li>
                <li>• <strong>Professionalism:</strong> Structured, corporate-friendly design</li>
                <li>• <strong>Scalability:</strong> Vector-based for perfect scaling</li>
                <li>• <strong>Brand Recognition:</strong> Distinctive 'A' as focal point</li>
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
                {`<TechLogoHorizontal size="large" companyName="agiledge" />`}
              </code>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">Footer Usage:</h4>
              <code className="text-sm text-gray-600">
                {`<TechLogo size="medium" companyName="agiledge" />`}
              </code>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">Icon Only:</h4>
              <code className="text-sm text-gray-600">
                {`<TechLogoMinimal size="small" companyName="agiledge" />`}
              </code>
            </div>
          </div>
        </div>

        {/* Customization Instructions */}
        <div className="bg-gradient-to-r from-blue-50 to-gray-50 p-8 rounded-xl shadow-lg mt-16">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">How to Customize</h3>
          <div className="space-y-4 text-gray-700">
            <p><strong>1. Change Company Name:</strong> Replace "agiledge" with your actual company name</p>
            <p><strong>2. Adjust Colors:</strong> Modify the green (#16A34A, #22C55E) colors to match your brand</p>
            <p><strong>3. Change Sizes:</strong> Use size props: "small", "medium", "large", "xlarge"</p>
            <p><strong>4. Variants:</strong> Use "horizontal" or "vertical" layout</p>
            <p><strong>5. Geometric Elements:</strong> Customize the polygon shape and circuit lines</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechLogoDemo; 