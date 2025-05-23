import React from 'react';
import { personalInfo } from '../data';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-indigo-900 mb-2">About Me</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {personalInfo.summary}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center w-64 transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-indigo-600 font-bold text-2xl">MS</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Master's Student</h3>
              <p className="text-gray-600 text-center">
                Passionate about exploring new technologies and advancing my knowledge in computer science.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center w-64 transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-indigo-600 font-bold text-2xl">DEV</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Full-Stack Developer</h3>
              <p className="text-gray-600 text-center">
                Building web and mobile applications with modern technologies and best practices.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center w-64 transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-indigo-600 font-bold text-2xl">ML</span>
              </div>
              <h3 className="font-bold text-lg mb-2">ML Enthusiast</h3>
              <p className="text-gray-600 text-center">
                Exploring machine learning applications and developing innovative solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;