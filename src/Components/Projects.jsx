import React from "react";
import { Github, ExternalLink } from "lucide-react";
import EmarIMG from "../assets/Emargeny.png"
import HeroIMG from "../assets/Hero.png"
import LoanIMG from "../assets/Loan.png"
const Projects = () => {
  const projects = [
    {
      name: "LoanLink – Microloan Tracker (Full Stack)",
      image: LoanIMG,
      description:
        "LoanLink is a role-based MERN stack web application for managing microloan applications efficiently. It features separate dashboards for Users, Managers, and Admins, each with different responsibilities for applying, reviewing, and managing loan requests within a structured approval system",
      tech: "React.js, React-Router, Tailwind CSS,Firebase Authentication, Express js, Node.js , MongoDB, JWT",
      github: "https://github.com/fuadhasan199/Loan-Link-Client.git",
      live: "https://loanlink-finance.pages.dev/",
    },
    {
      name: "Hero . IO (Front-End)",
      image: HeroIMG,
      description:
        "HERO.IO is a react-based Website.User can install and unInstall apps . Data fetch from Local json file, and react-router is used for navigation .",
      tech: "React.js, Tailwind CSS , React-Router , DaisyUI  ",
      github: "https://github.com/fuadhasan199/Hero-IO.git",
      live: "https://sunny-florentine-bfe173.netlify.app/",
    },
    {
      name: "Emargency Service Directory (Front-End)  ", 
       
        image: EmarIMG,
      description:
        " Emergency Service Directory is a citizen-centric digital platform initiated by the Government of Bangladesh, bringing all essential government emergency helplines right to your mobile or browser. "
       ,
      tech: "Html , tailwind css ,Javascript",
      github: "https://github.com/fuadhasan199/Emergency-hot-line",
      live: "https://fuadhasan199.github.io/Emergency-hot-line/",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            My <span className="text-brandPurple">Projects</span>
          </h2>
          <div className="w-20 h-1.5 bg-brandPurple mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
          className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group flex flex-col"
            >
              {/* Project Image */}
              <div className="h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">

                <h3 className="text-xl font-bold text-gray-800">
                  {project.name}
                </h3>

                <p className="text-gray-600 text-sm mt-2">
                  {project.description}
                </p>

                <p className="text-xs font-semibold text-brandPurple mt-2">
                  {project.tech}
                </p>

                {/* Buttons */}
                <div className="flex gap-3 pt-5 mt-auto">

                  {/* View Details */}
                  <button className="px-4 py-2 bg-brandPurple text-white rounded-lg text-sm hover:opacity-90 transition">
                    View Details
                  </button>

                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    className="p-2 border rounded-lg hover:bg-gray-100 transition"
                  >
                    <Github size={18} />
                  </a>

                  {/* Live */}
                  <a
                    href={project.live}
                    target="_blank"
                    className="p-2 border rounded-lg hover:bg-gray-100 transition"
                  >
                    <ExternalLink size={18} />
                  </a>

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;