import React from 'react';
import { achievements } from '../data';
import { Award } from 'lucide-react';

const Achievements: React.FC = () => {
  return (
    <section className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-indigo-900 mb-2">Achievements</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6 mb-6 flex items-start transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="bg-indigo-100 p-3 rounded-full mr-4 flex-shrink-0">
                <Award className="text-indigo-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-xl text-indigo-900 mb-2">{achievement.title}</h3>
                <p className="text-gray-700">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;