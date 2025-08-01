import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const floatingElementsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs with Mouse Interaction */}
        <div 
          ref={floatingElementsRef}
          className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-blue-500/30 to-purple-600/30 rounded-full blur-2xl animate-pulse"
          style={{
            transform: `translateY(${scrollY * 0.1 + mousePosition.y * 20}px) translateX(${scrollY * 0.05 + mousePosition.x * 30}px)`,
          }}
        />
        <div 
          className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-emerald-400/40 to-cyan-500/40 rounded-full blur-xl animate-pulse"
          style={{
            transform: `translateY(${scrollY * -0.15 + mousePosition.y * -15}px) translateX(${scrollY * -0.08 + mousePosition.x * -25}px)`,
            animationDelay: '1s'
          }}
        />
        <div 
          className="absolute bottom-40 left-1/4 w-28 h-28 bg-gradient-to-r from-violet-500/35 to-fuchsia-500/35 rounded-full blur-lg animate-pulse"
          style={{
            transform: `translateY(${scrollY * 0.12 + mousePosition.y * 10}px) translateX(${scrollY * 0.1 + mousePosition.x * 20}px)`,
            animationDelay: '2s'
          }}
        />
        <div 
          className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-cyan-400/25 to-blue-500/25 rounded-full blur-lg animate-pulse"
          style={{
            transform: `translateY(${scrollY * -0.08 + mousePosition.y * -12}px) translateX(${scrollY * 0.06 + mousePosition.x * 18}px)`,
            animationDelay: '3s'
          }}
        />

        {/* Enhanced Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
            backgroundSize: '60px 60px',
            transform: `translateY(${scrollY * 0.2}px)`
          }} />
        </div>
        
        {/* Additional Grid Layer */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '30px 30px',
            transform: `translateY(${scrollY * -0.1}px)`
          }} />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Content */}
          <div className="text-center space-y-12">
            {/* Enhanced Badge */}
            <div 
              className={`inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/40 backdrop-blur-md shadow-lg transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></span>
                <span className="text-blue-200 text-sm font-semibold tracking-wide">Innovating Cloud & DevOps Solutions</span>
                <svg className="w-4 h-4 text-blue-300 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Enhanced Main Heading */}
            <div className="space-y-8">
              <h1 
                className={`text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                <span className="bg-gradient-to-r from-white via-slate-100 to-blue-100 bg-clip-text text-transparent drop-shadow-2xl">
                  Welcome to
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent drop-shadow-2xl">
                  Agiledge
                </span>
              </h1>
              
              <p 
                className={`text-2xl md:text-3xl lg:text-4xl text-slate-200 font-light max-w-5xl mx-auto leading-relaxed transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                Your trusted partner in providing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold">Fast</span>, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">Flexible</span>, and <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-400 font-semibold">Future-Ready Cloud Solutions</span>
              </p>
            </div>

            {/* Enhanced Subtitle */}
            <p 
              className={`text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              We empower businesses with <span className="font-semibold text-blue-300">cutting-edge technology solutions</span>, <span className="font-semibold text-purple-300">strategic consulting</span>, and <span className="font-semibold text-pink-300">innovative digital experiences</span> that drive measurable results and competitive advantage in today's dynamic market landscape.
            </p>

            {/* Enhanced CTA Buttons */}
            <div 
              className={`flex flex-col sm:flex-row gap-6 justify-center items-center pt-12 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '1000ms' }}
            >
              <button 
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white font-bold rounded-2xl hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/40 border border-blue-400/30"
              >
                <span className="relative z-10 flex items-center">
                  <svg className="w-5 h-5 mr-3 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  View Our Services
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
              </button>
              
              <button 
                onClick={() => navigate('/contact')}
                className="group relative px-10 py-5 border-2 border-slate-600 text-slate-300 font-bold rounded-2xl hover:border-blue-400 hover:text-blue-300 transition-all duration-500 transform hover:scale-110 backdrop-blur-md bg-slate-900/20"
              >
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-3 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Get Free Consultation
                </span>
              </button>
            </div>

            {/* Enhanced Stats */}
            <div 
              className={`grid grid-cols-2 md:grid-cols-4 gap-8 pt-20 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '1200ms' }}
            >
              {[
                { number: '50+', label: 'Projects Delivered', icon: '☁️' },
                { number: '10+', label: 'Countries Served', icon: '🌍' },
                { number: '99%', label: 'Client Satisfaction', icon: '👤' },
                { number: '24/7', label: 'Support Available', icon: '🛡️' }
              ].map((stat, index) => (
                <div key={index} className="text-center group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-500"></div>
                  <div className="relative bg-slate-800/30 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 group-hover:border-blue-500/50 transition-all duration-500 group-hover:scale-105">
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-slate-300 text-sm md:text-base mt-3 font-medium group-hover:text-white transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>


    </section>
  );
};

export default HeroSection; 