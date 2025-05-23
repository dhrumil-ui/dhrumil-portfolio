import React from 'react';
import { personalInfo, socialLinks } from '../data';
import { Github, Linkedin, MapPin, Mail, Phone, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Github: <Github size={20} />,
    Linkedin: <Linkedin size={20} />
  };

  const handleDownloadResume = () => {
    // Create an anchor element and set its attributes
    const anchor = document.createElement('a');
    anchor.href = '/resume.pdf'; // Path to resume file in public folder
    anchor.download = 'Dhrumil_Resume.pdf'; // Set the download filename
    anchor.target = '_blank'; // Open in a new tab (fallback for browsers that don't support download attribute)
    
    // Append to the document, click it, and remove it
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  return (
    <section id="home" className="min-h-screen relative bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-20">
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] opacity-10 bg-cover bg-center"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center gap-8 md:gap-16">
          <div className="flex-shrink-0 mb-8 md:mb-0">
            <div className="relative group">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl transform transition-transform duration-500 group-hover:scale-105">
                <img 
                  src="dhrumil pfp.jpg" 
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-green-500 rounded-full p-3 shadow-lg animate-pulse">
                <div className="w-4 h-4 rounded-full bg-white"></div>
              </div>
            </div>
          </div>
          
          <div className="text-center max-w-2xl">
            <div className="mb-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-blue-200">
                {personalInfo.name}
              </h1>
              <div className="flex items-center justify-center gap-3 text-xl text-purple-200 mb-6">
                <span>{personalInfo.title}</span>
                <span>•</span>
                <span>{personalInfo.specialization}</span>
              </div>
              <p className="text-lg text-gray-200 mb-8 leading-relaxed max-w-xl mx-auto">
                {personalInfo.summary}
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 text-purple-200">
                  <MapPin size={18} />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2 text-purple-200">
                  <Mail size={18} />
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-purple-200">
                  <Phone size={18} />
                  <a href={`tel:${personalInfo.phone}`} className="hover:text-white transition-colors">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center items-center">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 text-white transition-colors p-3 rounded-full backdrop-blur-sm"
                  aria-label={link.name}
                >
                  {iconMap[link.icon]}
                </a>
              ))}
              <button 
                onClick={handleDownloadResume}
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg"
              >
                <Download size={18} />
                Download Resume
              </button>
              <a 
                href="#contact" 
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-105"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
    
    </section>
  );
};

export default Hero;