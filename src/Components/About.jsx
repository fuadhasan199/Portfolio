import React from 'react';
import { BookOpen, Gamepad2, Code2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          About <span className="text-brandPurple text-purple-600">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Journey Text */}
          <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
            <p>
              My journey into web development began in <span className="font-semibold text-purple-600">2023</span> when I started learning HTML and CSS from YouTube using <span className="italic text-gray-500">Notepad++</span>. Despite device limitations, those early days taught me patience and consistency.
            </p>
            <p>
              In 2024, I mastered <span className="font-semibold text-purple-600">Tailwind CSS</span> and dived into JavaScript. Building small projects helped me bridge the gap between static design and interactivity.
            </p>
            <p>
              By 2025, I completed the <span className="font-semibold text-purple-600">Complete Web Development Course by Programming Hero</span>, which solidified my skills in modern web technologies and full-stack development.
            </p>
            
            {/* Personality/Hobbies Part */}
            <div className="pt-4 border-t border-gray-100 dark:border-slate-800">
              <p className="flex items-center gap-2">
                <Gamepad2 className="text-purple-600" size={24} />
                <span>Outside of coding, I'm a movie buff and a passionate fan of football and cricket.</span>
              </p>
            </div>
          </div>

          {/* Right Side: Visual Cards/Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-purple-50 dark:bg-slate-800 rounded-2xl border border-purple-100 dark:border-slate-700 hover:shadow-lg transition-shadow">
              <Code2 className="text-purple-600 mb-4" size={32} />
              <h3 className="font-bold text-xl mb-2 dark:text-white">The Journey</h3>
              <p className="text-sm dark:text-gray-400">Started from Notepad++, now building with React.</p>
            </div>
            
            <div className="p-6 bg-blue-50 dark:bg-slate-800 rounded-2xl border border-blue-100 dark:border-slate-700 hover:shadow-lg transition-shadow">
              <BookOpen className="text-blue-600 mb-4" size={32} />
              <h3 className="font-bold text-xl mb-2 dark:text-white">Education</h3>
              <p className="text-sm dark:text-gray-400">Successfully completed Programming Hero's intensive bootcamp.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;