import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-white">Agiledge</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Agiledge</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Your modern React application with Tailwind CSS
          </p>
          
          {/* Test Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-white mb-2">Tailwind CSS</h3>
              <p className="text-gray-300">Utility-first CSS framework for rapid UI development</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-2">Vite</h3>
              <p className="text-gray-300">Next generation frontend tooling for fast development</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl mb-4">⚛️</div>
              <h3 className="text-xl font-semibold text-white mb-2">React 19</h3>
              <p className="text-gray-300">Latest React with modern features and performance</p>
            </div>
          </div>

          {/* Interactive Counter */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 max-w-md mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">Tailwind Test Counter</h3>
            <div className="text-6xl font-bold text-cyan-400 mb-6">{count}</div>
            <div className="space-x-4">
              <button 
                onClick={() => setCount(count - 1)}
                className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Decrease
              </button>
              <button 
                onClick={() => setCount(count + 1)}
                className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Increase
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
