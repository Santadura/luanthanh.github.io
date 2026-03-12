import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { profile } from '../data/mock';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-white w-full">
            <div className="max-w-6xl mx-auto px-6 lg:px-20 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* About */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">{profile.name}</h3>
                        <p className="text-gray-400 text-sm">
                            Full-Stack Developer specializing in AI-powered applications and scalable web platforms.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
                                <li key={section}>
                                    <button
                                        onClick={() => {
                                            const element = document.getElementById(section);
                                            if (element) {
                                                element.scrollIntoView({ behavior: 'smooth' });
                                            }
                                        }}
                                        className="text-gray-400 hover:text-white transition-colors duration-200 capitalize text-sm"
                                    >
                                        {section}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Connect</h3>
                        <div className="flex gap-4">
                            <a
                                href={profile.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gray-800 hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors duration-200"
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href={profile.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gray-800 hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors duration-200"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href={`mailto:${profile.email}`}
                                className="w-10 h-10 bg-gray-800 hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors duration-200"
                            >
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">
                        © {currentYear} {profile.name}. All rights reserved.
                    </p>
                    <p className="text-gray-400 text-sm flex items-center gap-2">
                        Built with <Heart size={16} className="text-red-500" /> using React
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;