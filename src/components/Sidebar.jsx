import React, { useState } from 'react';
import { Github, Linkedin, Mail, FileText, Menu, X } from 'lucide-react';
import { profile } from '../data/mock';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="fixed top-6 left-6 z-50 lg:hidden bg-black text-white p-2 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen bg-black text-white w-80 p-8 flex flex-col overflow-y-auto z-40 transition-transform duration-300 lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        {/* Avatar */}
        <div className="w-32 h-32 mx-auto mb-6">
          <img
            src="/avatar.png"
            alt="avatar"
            className="w-full h-full rounded-full object-cover"
          />
        </div>

        {/* Name & Role */}
        <h2 className="text-2xl font-bold text-center mb-2">{profile.name}</h2>
        <p className="text-gray-400 text-center mb-6">{profile.role}</p>

        {/* Bio */}
        <p className="text-sm text-gray-400 mb-8 leading-relaxed">
          {profile.bio}
        </p>

        {/* Navigation */}
        <nav className="mb-8">
          <ul className="space-y-3">
            {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className="w-full text-left text-gray-400 hover:text-white transition-colors duration-200 capitalize text-sm"
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links */}
        <div className="space-y-3 mb-8">
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200 text-sm"
          >
            <FileText size={18} />
            <span>Resume</span>
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200 text-sm"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200 text-sm"
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200 text-sm"
          >
            <Mail size={18} />
            <span>Email</span>
          </a>
        </div>

        {/* Footer */}
        <div className="mt-auto pt-8 border-t border-gray-800">
          <p className="text-xs text-gray-600 text-center">
            © 2025 {profile.name}
          </p>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;