import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    setIsLoaded(true);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dynamic gradient background that follows mouse */}
      <div 
        className="absolute inset-0 transition-all duration-300"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(147, 51, 234, 0.3) 0%, 
            rgba(59, 130, 246, 0.2) 30%, 
            rgba(16, 185, 129, 0.1) 70%, 
            rgba(15, 23, 42, 1) 100%)`
        }}
      />
      
      {/* Animated geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-purple-500 opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 60}px`,
              height: `${20 + Math.random() * 60}px`,
              borderRadius: Math.random() > 0.5 ? '50%' : '0%',
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 2}s`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          />
        ))}
      </div>

      {/* Matrix-like code rain effect */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400 text-xs font-mono animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          >
            {Math.random() > 0.5 ? '01' : '10'}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className={`relative z-10 text-center px-4 max-w-5xl mx-auto transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Profile image with interactive glow */}
        <div className="mb-8 relative">
          <div className="w-32 h-32 mx-auto mb-6 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 rounded-full animate-spin-slow opacity-75 blur-sm"></div>
            <img 
              src="https://images.unsplash.com/photo-1563089145-599997674d42?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZ3xlbnwwfHx8cHVycGxlfDE3NTI1MDU5NDR8MA&ixlib=rb-4.1.0&q=85"
              alt="Syed - DC Bot Dev"
              className="w-full h-full object-cover rounded-full border-4 border-purple-500 relative z-10 group-hover:scale-110 transition-all duration-300 shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-20"></div>
          </div>
        </div>

        {/* Name and title with typewriter effect */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-300">
            Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">Syed</span>
          </h1>
          <h2 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            <span className="inline-block hover:scale-110 transition-transform duration-300 cursor-default">D</span>
            <span className="inline-block hover:scale-110 transition-transform duration-300 cursor-default">C</span>
            <span className="inline-block hover:scale-110 transition-transform duration-300 cursor-default"> </span>
            <span className="inline-block hover:scale-110 transition-transform duration-300 cursor-default">B</span>
            <span className="inline-block hover:scale-110 transition-transform duration-300 cursor-default">o</span>
            <span className="inline-block hover:scale-110 transition-transform duration-300 cursor-default">t</span>
            <span className="inline-block hover:scale-110 transition-transform duration-300 cursor-default"> </span>
            <span className="inline-block hover:scale-110 transition-transform duration-300 cursor-default">D</span>
            <span className="inline-block hover:scale-110 transition-transform duration-300 cursor-default">e</span>
            <span className="inline-block hover:scale-110 transition-transform duration-300 cursor-default">v</span>
          </h2>
          <h3 className="text-3xl md:text-5xl font-semibold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Minecraft Server Developer
          </h3>
        </div>
        
        {/* Animated stats */}
        <div className="grid grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-purple-500/30 hover:border-purple-500 transition-all duration-300 hover:scale-105">
            <div className="text-2xl font-bold text-cyan-400">50K+</div>
            <div className="text-sm text-gray-400">Discord Servers</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-purple-500/30 hover:border-purple-500 transition-all duration-300 hover:scale-105">
            <div className="text-2xl font-bold text-purple-400">10+</div>
            <div className="text-sm text-gray-400">Active Projects</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-purple-500/30 hover:border-purple-500 transition-all duration-300 hover:scale-105">
            <div className="text-2xl font-bold text-pink-400">3+</div>
            <div className="text-sm text-gray-400">Years Experience</div>
          </div>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Creating <span className="text-cyan-400 font-semibold">immersive Discord bots</span> and <span className="text-purple-400 font-semibold">powerful Minecraft servers</span> that bring communities together and enhance gameplay experiences
        </p>
        
        {/* Interactive buttons with ripple effects */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="relative z-10">🚀 View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
          <Button 
            variant="outline" 
            className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="relative z-10">💬 Get In Touch</span>
            <div className="absolute inset-0 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;