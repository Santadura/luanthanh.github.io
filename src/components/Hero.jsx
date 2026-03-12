import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { profile } from '../data/mock';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 lg:px-20"
    >
      <div className="max-w-4xl">
        {/* Greeting */}
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <p className="text-gray-600 text-lg mb-4">Hi, my name is</p>
        </div>

        {/* Name */}
        <div
          className={`transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h1 className="text-6xl lg:text-7xl font-bold text-black mb-4">
            {profile.name}
          </h1>
        </div>

        {/* Role */}
        <div
          className={`transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-600 mb-8">
            {profile.role}
          </h2>
        </div>

        {/* Description */}
        <div
          className={`transform transition-all duration-1000 delay-600 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <p className="text-xl text-gray-700 mb-12 max-w-2xl leading-relaxed">
            {profile.bio}
          </p>
        </div>

        {/* CTA Button */}
        <div
          className={`transform transition-all duration-1000 delay-800 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <button
            onClick={scrollToProjects}
            className="group flex items-center gap-3 px-8 py-4 bg-black text-white border-2 border-black hover:bg-white hover:text-black transition-all duration-300"
          >
            <span className="font-medium">View My Work</span>
            <ArrowDown
              size={20}
              className="group-hover:translate-y-1 transition-transform duration-300"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;