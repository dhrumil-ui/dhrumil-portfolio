import React, { useState } from 'react';
import { projects } from '../data';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleDetails = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-indigo-900 mb-2">Projects</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.image || "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
                  }}
                />
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-xl text-indigo-900 mb-2">{project.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-700 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <button 
                    onClick={() => toggleDetails(index)}
                    className="text-indigo-600 hover:text-indigo-800 font-medium"
                  >
                    {activeIndex === index ? 'Hide Details' : 'View Details'}
                  </button>
                  
                  <div className="flex gap-3">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-indigo-600 transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-indigo-600 transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                {activeIndex === index && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-gray-700">{project.description}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;