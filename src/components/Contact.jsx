import React, { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { profile } from '../data/mock';
import { useToast } from '../../hooks/use-toast';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const sectionRef = useRef(null);
  const { toast } = useToast();

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" ref={sectionRef} className="px-6 lg:px-20 py-20">
      {/* Section Title */}
      <div
        className={`flex items-center gap-4 mb-12 transform transition-all duration-700 ${
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
        }`}
      >
        <span className="text-2xl font-mono text-gray-400">04.</span>
        <h2 className="text-4xl font-bold text-black">Get In Touch</h2>
        <div className="flex-1 h-px bg-gray-300 ml-4"></div>
      </div>

      <div className="max-w-4xl">
        <div
          className={`transform transition-all duration-700 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <p className="text-lg text-gray-700 mb-12">
            I'm currently open to new opportunities and collaborations. Whether you have a project in mind, want to discuss technology, or just want to say hi, feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div
            className={`transform transition-all duration-700 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 focus:border-black focus:outline-none transition-colors duration-200"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 focus:border-black focus:outline-none transition-colors duration-200"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 focus:border-black focus:outline-none transition-colors duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className="flex items-center gap-2 px-8 py-4 bg-black text-white hover:bg-gray-800 transition-colors duration-200 w-full justify-center font-medium"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div
            className={`transform transition-all duration-700 delay-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h3 className="text-2xl font-bold text-black mb-6">Let's Connect</h3>
            <p className="text-gray-700 mb-8">
              Feel free to reach out through any of these platforms. I typically respond within 24-48 hours.
            </p>

            <div className="space-y-6">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-4 p-4 border-2 border-gray-200 hover:border-black transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-black flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-200">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-medium text-black">{profile.email}</p>
                </div>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border-2 border-gray-200 hover:border-black transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-black flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-200">
                  <Github size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">GitHub</p>
                  <p className="font-medium text-black">@Santadura</p>
                </div>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border-2 border-gray-200 hover:border-black transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-black flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-200">
                  <Linkedin size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">LinkedIn</p>
                  <p className="font-medium text-black">Connect with me</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;