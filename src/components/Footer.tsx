import React from 'react';
import { personalInfo, socialLinks } from '../data';
import { ChevronUp, Heart, Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const iconMap: Record<string, React.ReactNode> = {
    Github: <Github size={18} />,
    Linkedin: <Linkedin size={18} />
  };

  return (
    <footer className="bg-indigo-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-6">
          <button 
            onClick={scrollToTop}
            className="bg-indigo-700 hover:bg-indigo-600 p-3 rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
          </button>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-2">{personalInfo.name}</h2>
          <p className="text-indigo-200 mb-4">{personalInfo.title} • {personalInfo.specialization}</p>
          
          <div className="flex gap-4 mb-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-700 hover:bg-indigo-600 p-2 rounded-full transition-colors"
                aria-label={link.name}
              >
                {iconMap[link.icon]}
              </a>
            ))}
          </div>
          
          <div className="text-center text-indigo-300 text-sm">
            <p className="flex items-center justify-center">
              Made with <Heart size={16} className="mx-1 text-red-400" /> by {personalInfo.name}
            </p>
            <p className="mt-1">© {new Date().getFullYear()} All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;