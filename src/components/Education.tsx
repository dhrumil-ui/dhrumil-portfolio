import React from 'react';
import { education } from '../data';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-indigo-900 mb-2">Education</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-indigo-200"></div>
            
            {/* Timeline Items */}
            {education.map((edu, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row items-center mb-16 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-indigo-500 z-10 shadow-lg"></div>
                
                {/* Content */}
                <div className="w-full md:w-1/2 md:px-8">
                  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-indigo-500 transform transition-transform hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 mr-4 overflow-hidden rounded-full border-2 border-indigo-200 flex-shrink-0">
                        <img 
                          src={edu.logo || "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} 
                          alt={edu.institution}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
                          }}
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-indigo-900">{edu.degree}</h3>
                        <p className="text-indigo-600">{edu.institution}</p>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500 mb-3">
                      <span>{edu.location}</span>
                      <span>{edu.duration}</span>
                    </div>
                    <p className="text-gray-700">{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;