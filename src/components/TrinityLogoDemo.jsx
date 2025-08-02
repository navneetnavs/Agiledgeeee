import React from 'react'
import TrinityAgiledgeLogo from './TrinityAgiledgeLogo'
import Navbar from './Navbar'
import Footer from './Footer'

const TrinityLogoDemo = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Brand Identity
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Trinity Agiledge Logo
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              A modern logo featuring the Trinity symbol with the Agiledge brand name, creating a unique and distinctive identity.
            </p>
            
            {/* Main Logo Display */}
            <div className="flex justify-center mb-12">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <TrinityAgiledgeLogo size="xlarge" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Variations */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Logo Variations</h2>
            
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              {/* Small Logo */}
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Small Size</h3>
                <div className="flex justify-center">
                  <TrinityAgiledgeLogo size="small" />
                </div>
                <p className="text-gray-600 mt-4">Perfect for icons and small applications</p>
              </div>
              
              {/* Medium Logo */}
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Medium Size</h3>
                <div className="flex justify-center">
                  <TrinityAgiledgeLogo size="medium" />
                </div>
                <p className="text-gray-600 mt-4">Ideal for headers and navigation</p>
              </div>
              
              {/* Large Logo */}
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Large Size</h3>
                <div className="flex justify-center">
                  <TrinityAgiledgeLogo size="large" />
                </div>
                <p className="text-gray-600 mt-4">Great for hero sections and branding</p>
              </div>
              
              {/* XLarge Logo */}
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Extra Large</h3>
                <div className="flex justify-center">
                  <TrinityAgiledgeLogo size="xlarge" />
                </div>
                <p className="text-gray-600 mt-4">Perfect for splash screens and main branding</p>
              </div>
            </div>
            
            {/* Design Elements */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Design Elements</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Trinity Symbol</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                      <span className="text-gray-700">High-quality PNG symbol with transparency</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                      <span className="text-gray-700">512x512 resolution for crisp display</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                      <span className="text-gray-700">Scalable and responsive design</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                      <span className="text-gray-700">Professional and distinctive appearance</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Typography</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></div>
                      <span className="text-gray-700">Modern sans-serif font with bold weight</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></div>
                      <span className="text-gray-700">Blue to purple to indigo gradient</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></div>
                      <span className="text-gray-700">Professional and modern appearance</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></div>
                      <span className="text-gray-700">Complements the Trinity symbol perfectly</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Color Palette */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Color Palette</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Blue</h4>
                  <p className="text-sm text-gray-600">#2563EB (Start of gradient)</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Purple</h4>
                  <p className="text-sm text-gray-600">#9333EA (Middle of gradient)</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Indigo</h4>
                  <p className="text-sm text-gray-600">#4F46E5 (End of gradient)</p>
                </div>
              </div>
            </div>
            
            {/* Usage Examples */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Usage Examples</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Basic Usage</h4>
                    <code className="text-sm text-gray-600">
                      &lt;TrinityAgiledgeLogo size="medium" /&gt;
                    </code>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">With Custom Classes</h4>
                    <code className="text-sm text-gray-600">
                      &lt;TrinityAgiledgeLogo size="large" className="my-custom-class" /&gt;
                    </code>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Available Sizes</h4>
                    <code className="text-sm text-gray-600">
                      small, medium, large, xlarge
                    </code>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Brand Guidelines</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Maintain minimum clear space around the logo</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Use on light backgrounds for best visibility</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Ensure adequate contrast for accessibility</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Scale proportionally for different applications</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default TrinityLogoDemo 