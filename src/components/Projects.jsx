import React, { useEffect, useRef, useState } from 'react';
import { projects } from '../data/mock';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const ProjectCard = ({ project, index, isVisible }) => {
  return (
    <div
      className={`bg-white border-2 border-gray-200 p-8 hover:border-black transition-all duration-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* Project Image Placeholder */}
      <div className="w-full h-64 overflow-hidden border group">
        <img
          src={project.image}
          alt={project.name}
          className="w-full object-cover animate-scrollImage group-hover:[animation-play-state:running]"
        />
      </div>

      {/* Project Name */}
      <h3 className="text-2xl font-bold text-black mb-2">{project.name}</h3>

      {/* Tagline */}
      <p className="text-sm text-gray-600 mb-4">{project.tagline}</p>

      {/* Description */}
      <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-mono"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Metrics or Features */}
      {project.metrics && (
        <div className="grid grid-cols-2 gap-4 mb-6">
          {project.metrics.map((metric, i) => (
            <div key={i} className="border-l-2 border-black pl-4">
              <p className="text-2xl font-bold text-black">{metric.value}</p>
              <p className="text-sm text-gray-600">{metric.label}</p>
            </div>
          ))}
        </div>
      )}

      {project.features && (
        <div className="mb-6">
          <h4 className="font-semibold text-black mb-3">Key Features:</h4>
          <ul className="space-y-2">
            {project.features.slice(0, 4).map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <div className="w-1.5 h-1.5 bg-black rounded-full mt-1.5 flex-shrink-0"></div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Links */}
      <div className="flex gap-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-black hover:text-gray-600 transition-colors duration-200"
          >
            <Github size={20} />
            <span className="text-sm font-medium">Code</span>
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-black hover:text-gray-600 transition-colors duration-200"
          >
            <ExternalLink size={20} />
            <span className="text-sm font-medium">Demo</span>
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
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
    <section id="projects" ref={sectionRef} className="px-6 lg:px-20 py-20">
      {/* Section Title */}
      <div
        className={`flex items-center gap-4 mb-12 transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}
      >
        <span className="text-2xl font-mono text-gray-400">02.</span>
        <h2 className="text-4xl font-bold text-black">Projects</h2>
        <div className="flex-1 h-px bg-gray-300 ml-4"></div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-8 max-w-6xl">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            isVisible={isVisible}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;