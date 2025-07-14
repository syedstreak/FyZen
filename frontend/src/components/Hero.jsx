import React from 'react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 animate-pulse"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            DC Bot Dev
          </h1>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Minecraft Server Dev
          </h2>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Creating immersive Discord bots and powerful Minecraft servers that bring communities together
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;