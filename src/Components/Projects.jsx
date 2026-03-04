import React, { useState } from "react";
import { Github, ExternalLink, X, Code2, Rocket, Lightbulb } from "lucide-react";
import EmarIMG from "../assets/Emargeny.png";
import HeroIMG from "../assets/Hero.png";
import LoanIMG from "../assets/Loan.png";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      name: "LoanLink – Microloan Tracker (Full Stack)",
      image: LoanIMG,
      description: "LoanLink is a role-based MERN stack web application for managing microloan applications efficiently. It features separate dashboards for Users, Managers, and Admins, each with different responsibilities for applying, reviewing, and managing loan requests within a structured approval system.",
      tech: ["React.js", "Firebase", "Express.js", "Node.js", "MongoDB", "JWT", "Tailwind CSS"],
      github: "https://github.com/fuadhasan199/Loan-Link-Client.git",
      live: "https://loanlink-finance.pages.dev/",
      challenges: "Implementing a complex 3-layer role-based dashboard (User, Manager, Admin) and ensuring secure data flow using JWT and Firebase.",
      futurePlans: "Integrating a real-time notification system and an automated loan repayment calculator with Stripe payment."
    },
    {
      name: "Hero . IO (Front-End)",
      image: HeroIMG,
      description: "HERO.IO is a react-based platform where users can explore, install, and uninstall apps virtually. It demonstrates efficient state management and navigation.",
      tech: ["React.js", "Tailwind CSS", "React-Router", "DaisyUI"],
      github: "https://github.com/fuadhasan199/Hero-IO.git",
      live: "https://sunny-florentine-bfe173.netlify.app/",
      challenges: "Managing the install/uninstall state locally to provide a real-time app store feel without a backend.",
      futurePlans: "Adding a user review system and a filter feature for easier app discovery."
    },
    {
      name: "Emergency Service Directory (Front-End)",
      image: EmarIMG,
      description: "Emergency Service Directory is a citizen-centric platform initiated by the Government of Bangladesh, bringing essential helplines (999, 333, etc.) to one place.",
      tech: ["Html", "Tailwind CSS", "Javascript"],
      github: "https://github.com/fuadhasan199/Emergency-hot-line",
      live: "https://fuadhasan199.github.io/Emergency-hot-line/",
      challenges: "Structuring a large dataset of emergency contacts into a clean, mobile-first responsive layout using vanilla JS and Tailwind.",
      futurePlans: "Adding a geolocation feature to suggest the nearest emergency station based on the user's current location."
    },
  ];

  return (
    <section id="projects" className="py-24 bg-base-100 ">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold ">
            My <span className="text-brandPurple">Projects</span>
          </h2>
          <div className="w-20 h-1.5 bg-brandPurple mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-base-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group flex flex-col">
              <div className="h-52 overflow-hidden">
                <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>

              <div className="p-7 flex flex-col flex-grow text-center ">
                <h3 className="text-xl font-bold text-base-content">{project.name}</h3>
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="btn bg-brandPurple  mt-auto border-none p-3 bg-base-200 w-full"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Detailed Modal --- */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-base-100 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl relative p-8 shadow-2xl">
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)} 
              className="absolute top-4 right-4 p-2 bg-base-200 rounded-full hover:bg-red-100 text-gray-600 hover:text-red-600 transition-colors"
            >
              <X size={24} />
            </button>

            <h3 className="text-2xl md:text-3xl font-bold text-base-content mb-6">{selectedProject.name}</h3>
            
            <div className="space-y-6 text-left">
              {/* Tech Stack */}
              <div>
                <h4 className="flex items-center gap-2 font-bold text-purple-600 mb-2 underline"><Code2 size={20}/> Technology Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {Array.isArray(selectedProject.tech) ? selectedProject.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-purple-50 text-purple-700 rounded-lg text-xs font-bold border border-base-100">{t}</span>
                  )) : <span className="text-sm">{selectedProject.tech}</span>}
                </div>
              </div>

              {/* Description */}
              <p className=" leading-relaxed text-sm md:text-base">{selectedProject.description}</p>

              {/* Links */}
              <div className="flex flex-wrap gap-4">
                <a href={selectedProject.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-2 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-700 transition-all shadow-md">
                  <ExternalLink size={18}/> Live Site
                </a>
                <a href={selectedProject.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-2 bg-gray-800 text-white rounded-xl font-bold hover:bg-gray-900 transition-all shadow-md">
                  <Github size={18}/> GitHub Client
                </a>
              </div>

              <hr className="border-gray-100" />

              {/* Challenges & Plans */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100">
                  <h4 className="flex items-center gap-2 font-bold text-orange-700 mb-2"><Rocket size={20}/> Challenges Faced:</h4>
                  <p className="text-xs md:text-sm text-gray-700">{selectedProject.challenges}</p>
                </div>
                <div className="p-4 bg-green-50 rounded-2xl border border-green-100">
                  <h4 className="flex items-center gap-2 font-bold text-green-700 mb-2"><Lightbulb size={20}/> Future Plans:</h4>
                  <p className="text-xs md:text-sm text-gray-700">{selectedProject.futurePlans}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;