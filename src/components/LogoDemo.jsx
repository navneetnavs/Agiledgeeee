import React from 'react';
import Logo, { LogoHorizontal, LogoMinimal } from './Logo';

const LogoDemo = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Agiledge Logo Design</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Displaying all variations of the Agiledge logo using the custom AE monogram design.
            The logo features overlapping 'A' and 'E' letters in green and blue with integrated "agiledge" text.
          </p>
        </div>

        {/* Logo Variations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Vertical Logo */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Vertical Logo</h3>
            <div className="flex flex-col items-center space-y-6">
              <Logo size="large" showText={true} />
              <p className="text-sm text-gray-600 text-center">
                Standard vertical layout with logo and text
              </p>
            </div>
          </div>

          {/* Horizontal Logo */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Horizontal Logo</h3>
            <div className="flex flex-col items-center space-y-6">
              <LogoHorizontal size="large" showText={true} />
              <p className="text-sm text-gray-600 text-center">
                Horizontal layout for navigation bars
              </p>
            </div>
          </div>

          {/* Minimal Logo */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Minimal Logo</h3>
            <div className="flex flex-col items-center space-y-6">
              <LogoMinimal size="large" />
              <p className="text-sm text-gray-600 text-center">
                Logo only with integrated text - perfect for icons
              </p>
            </div>
          </div>

          {/* Logo Only */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Logo Only</h3>
            <div className="flex flex-col items-center space-y-6">
              <Logo size="large" showText={false} />
              <p className="text-sm text-gray-600 text-center">
                Logo with integrated text - clean and minimal
              </p>
            </div>
          </div>
        </div>

        {/* Logo Sizes */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h3 className="text-lg font-semibold text-gray-800 mb-6">Logo Sizes</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="text-center">
              <Logo size="small" />
              <p className="text-sm text-gray-600 mt-2">Small (64px)</p>
            </div>
            <div className="text-center">
              <Logo size="medium" />
              <p className="text-sm text-gray-600 mt-2">Medium (80px)</p>
            </div>
            <div className="text-center">
              <Logo size="large" />
              <p className="text-sm text-gray-600 mt-2">Large (96px)</p>
            </div>
            <div className="text-center">
              <Logo size="xlarge" />
              <p className="text-sm text-gray-600 mt-2">XLarge (128px)</p>
            </div>
          </div>
        </div>

        {/* Design Elements */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Design Elements</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• <strong>Letter A:</strong> Forest green (#166534) - positioned in front</li>
            <li>• <strong>Letter E:</strong> Deep blue (#1E40AF) - positioned behind</li>
            <li>• <strong>Overlap:</strong> A overlaps E creating depth and visual interest</li>
            <li>• <strong>Integrated Text:</strong> "agiledge" in small letters next to E</li>
            <li>• <strong>Typography:</strong> Clean sans-serif for integrated text</li>
            <li>• <strong>Style:</strong> Modern, geometric, tech-focused design</li>
            <li>• <strong>Scalability:</strong> Vector SVG for perfect scaling</li>
          </ul>
        </div>

        {/* Usage Guidelines */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Usage Guidelines</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• <strong>Navbar:</strong> Use large size (96px) for maximum visibility</li>
            <li>• <strong>Footer:</strong> Use xlarge size (128px) for strong prominence</li>
            <li>• <strong>Splash Screen:</strong> Use xlarge size (128px) for maximum impact</li>
            <li>• <strong>Business Cards:</strong> Use medium size (80px)</li>
            <li>• <strong>Print Materials:</strong> Use xlarge size (128px)</li>
            <li>• <strong>Text Option:</strong> Available with showText prop</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LogoDemo; 