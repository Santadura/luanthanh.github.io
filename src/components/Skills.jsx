import React, { useEffect, useRef, useState } from 'react';
import { skills } from '../data/mock';

const SkillCategory = ({ title, items, index, isVisible }) => {
  return (
    <div
      className={`transform transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      style={{ transitionDelay: `${200 + index * 100}ms` }}
    >
      <h3 className="text-xl font-bold text-black mb-4">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {items.map((skill, i) => (
          <span
            key={i}
            className="px-4 py-2 bg-white border-2 border-gray-200 hover:border-black transition-colors duration-200 font-mono text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
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

  const categories = [
    { title: 'Frontend Development', items: skills.frontend },
    { title: 'Backend Development', items: skills.backend },
    { title: 'Database & Storage', items: skills.database },
    { title: 'AI & Machine Learning', items: skills.aiml },
    { title: 'Tools & Technologies', items: skills.tools }
  ];

  return (
    <section id="skills" ref={sectionRef} className="px-6 lg:px-20 py-20 bg-gray-50">
      {/* Section Title */}
      <div
        className={`flex items-center gap-4 mb-12 transform transition-all duration-700 ${
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
        }`}
      >
        <span className="text-2xl font-mono text-gray-400">03.</span>
        <h2 className="text-4xl font-bold text-black">Skills & Technologies</h2>
        <div className="flex-1 h-px bg-gray-300 ml-4"></div>
      </div>

      {/* Skills Grid */}
      <div className="max-w-4xl space-y-8">
        {categories.map((category, index) => (
          <SkillCategory
            key={index}
            title={category.title}
            items={category.items}
            index={index}
            isVisible={isVisible}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;