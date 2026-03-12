import React, { useEffect, useRef, useState } from 'react';
import { about } from '../data/mock';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center px-6 lg:px-20 py-20"
    >
      <div className="max-w-4xl">
        {/* Section Title */}
        <div
          className={`flex items-center gap-4 mb-12 transform transition-all duration-700 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}
        >
          <span className="text-2xl font-mono text-gray-400">01.</span>
          <h2 className="text-4xl font-bold text-black">About Me</h2>
          <div className="flex-1 h-px bg-gray-300 ml-4"></div>
        </div>

        {/* Content */}
        <div
          className={`transform transition-all duration-700 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            {about.introduction}
          </p>

          <div className="space-y-4">
            {about.highlights.map((highlight, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 transform transition-all duration-700 ${
                  isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;