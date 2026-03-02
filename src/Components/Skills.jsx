import React from 'react';
import { Code2, Server, ShieldCheck, Wrench, Github } from 'lucide-react';

const Skills = () => {
  const skillSet = [
    {
      title: "Frontend Development",
      icon: <Code2 className="text-blue-500" size={30} />,
      skills: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript (ES6)", "React.js"],
      color: "border-blue-100 bg-blue-50/20"
    },
    {
      title: "Backend & Database",
      icon: <Server className="text-green-500" size={30} />,
      skills: ["Node.js (Basic)", "Express.js", "MongoDB", "CRUD Operations"],
      color: "border-green-100 bg-green-50/20"
    },
    {
      title: "Security & Auth",
      icon: <ShieldCheck className="text-red-500" size={30} />,
      skills: ["Firebase", "JWT (JSON Web Token)"],
      color: "border-red-100 bg-red-50/20"
    },
    {
      title: "Tools & Version Control",
      icon: <Wrench className="text-orange-500" size={30} />,
      skills: ["Git", "GitHub", "VS Code", "Vercel / Netlify / Cloudflare"],
      color: "border-orange-100 bg-orange-50/20"
    }
  ];

  return (
    <section id="service" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Technical <span className="text-purple-600">Expertise</span>
          </h2>
          <div className="w-20 h-1.5 bg-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillSet.map((item, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-2xl border-2 ${item.color} hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group`}
            >
              <div className="mb-4 inline-block p-3 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">{item.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1 bg-white border border-gray-100 text-gray-600 rounded-lg text-xs font-bold shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;