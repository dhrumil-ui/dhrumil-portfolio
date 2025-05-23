import React from 'react';
import { experience } from '../data';
import { CalendarClock, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-indigo-900 mb-2">Work Experience</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md mb-8 overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="w-16 h-16 rounded-lg overflow-hidden mr-6 mb-4 md:mb-0 flex-shrink-0">
                    <img 
                      src={exp.logo || "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} 
                      alt={exp.company}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-indigo-900 mb-1">{exp.position}</h3>
                    <h4 className="text-lg text-indigo-600 mb-3">{exp.company}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center text-gray-500 mb-4">
                      <div className="flex items-center mr-6 mb-2 sm:mb-0">
                        <CalendarClock size={16} className="mr-1" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-700">{exp.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;