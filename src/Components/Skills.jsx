import React from "react";
import { Code2, Server, ShieldCheck, Wrench } from "lucide-react";

const Skills = () => {
  const skillSet = [
    {
      title: "Frontend Development",
      icon: <Code2 className="text-blue-500" size={30} />,
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 90 },
        { name: "Tailwind CSS", level: 90 },
        { name: "JavaScript (ES6)", level: 60 },
        { name: "React.js", level: 80 },
      ],
      color: "border-blue-100 bg-blue-50/20",
    },
    {
      title: "Backend & Database",
      icon: <Server className="text-green-500" size={30} />,
      skills: [
        { name: "Node.js", level: 65 },
        { name: "Express.js", level: 70 },
        { name: "MongoDB", level: 70 },
        { name: "REST API & CRUD", level: 75 },
      ],
      color: "border-green-100 bg-green-50/20",
    },
    {
      title: "Security & Authentication",
      icon: <ShieldCheck className="text-red-500" size={30} />,
      skills: [
        { name: "Firebase Authentication", level: 75 },
        { name: "JWT Authentication", level: 65 },
      ],
      color: "border-red-100 bg-red-50/20",
    },
    {
      title: "Tools & Deployment",
      icon: <Wrench className="text-orange-500" size={30} />,
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Vercel Deployment", level: 80 },
        { name: "Netlify / Cloudflare Pages", level: 75 },
      ],
      color: "border-orange-100 bg-orange-50/20",
    },
  ];

  return (
    <section id="skills" className="py-24 bg-base-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold  mb-4">
            My <span className="text-brandPurple">Tech Stack</span>
          </h2>
          <div className="w-20 h-1.5 bg-brandPurple mx-auto rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillSet.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl border-2 ${item.color}
              hover:shadow-xl hover:-translate-y-2 hover:border-brandPurple
              transition-all duration-300 group`}
            >
              {/* Icon */}
              <div className="mb-4 inline-block p-3 bg-base-200 rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-4 text-base-color">
                {item.title}
              </h3>

              {/* Skills */}
              <div className="space-y-4">
                {item.skills.map((skill, idx) => (
                  <div key={idx}>

                    {/* Skill name + percent */}
                    <div className="flex justify-between text-xs font-semibold text-base-color mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-green-500 h-2 rounded-full transition-all duration-700 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>

                  </div>
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