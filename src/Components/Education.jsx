import React from 'react';
import { GraduationCap, BookOpen, Award, Calendar } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      title: "Diploma in Computer Science & Technology",
      institution: "Rangpur Polytechnic Institute", 
      duration: "2023 - Present",
      status: "7th Semester (Running)",
      icon: <GraduationCap className="text-purple-600" size={24} />,
      color: "purple"
    },
    {
      title: "Complete Web Development Course",
      institution: "Programming Hero (Batch 12)",
      duration: "2025",
      status: "Professional Certification (Full Stack MERN)",
      icon: <Award className="text-blue-600" size={24} />,
      color: "blue"
    },
    {
      title: "Secondary School Certificate (SSC)",
      institution: "Maruadha High School",
      duration: "2022",
      status: "Group: Science",
      icon: <BookOpen className="text-green-600" size={24} />,
      color: "green"
    }
  ];

  return (
    <section id="education" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Educational <span className="text-purple-600">Qualification</span>
          </h2>
          <div className="w-24 h-1.5 bg-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative border-l-4 border-purple-100 ml-6 md:ml-12">
          {educationData.map((item, index) => (
            <div key={index} className="mb-12 ml-10 relative">
              {/* Timeline Dot & Icon */}
              <div className="absolute -left-[64px] top-0 p-3 bg-white border-4 border-purple-50 rounded-2xl shadow-sm z-10 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>

              {/* Education Card */}
              <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-2 text-purple-600 font-bold text-sm mb-3">
                  <Calendar size={16} />
                  {item.duration}
                </div>
                <h3 className="text-2xl font-extrabold text-gray-800">{item.title}</h3>
                <p className="text-lg font-semibold text-gray-600 mt-1">{item.institution}</p>
                <div className="mt-4 inline-block px-4 py-1.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-500 shadow-sm">
                  {item.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;