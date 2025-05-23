import React from 'react';
import { skills } from '../data';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-indigo-900 mb-2">Skills</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skills.map((skillGroup, groupIndex) => (
            <div 
              key={groupIndex} 
              className="bg-white rounded-lg shadow-md p-6 transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-indigo-900 mb-4">{skillGroup.category}</h3>
              
              {skillGroup.items.map((skill, skillIndex) => (
                <div key={skillIndex} className="mb-4 last:mb-0">
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-indigo-600 font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-indigo-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${skill.level}%`,
                        animation: `progressAnimation 1.5s ease-out ${skillIndex * 0.1}s` 
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      {/* CSS for animation */}
      <style jsx>{`
        @keyframes progressAnimation {
          from { width: 0; }
        }
      `}</style>
    </section>
  );
};

export default Skills;