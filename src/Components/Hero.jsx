import { Github, Linkedin, Download } from "lucide-react";
import Image from "../assets/Portfolio.jpeg"
const Hero = () => {
  return (
    <main className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <section className="order-2 lg:order-1 animate-fade-in">
          <span className="inline-block text-xl md:text-2xl text-gray-700 mb-4 font-medium">
            Hey, I'm Khandokar Fuad Hasan 👋
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-brandDark leading-tight mb-8">
            <span className="text-brandPurple"><span className="text-brandPurple">Front</span> End<br />
Developer </span>
           
          </h1>

          <p className="text-lg md:text-xl text-gray-500 max-w-lg mb-10 leading-relaxed">
  I build modern and responsive web applications with a focus on clean UI and performance. Specialized in React, with a solid foundation in the MERN stack.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-4 bg-brandPurple  font-bold rounded-lg hover:bg-brandDark transition-all transform hover:-translate-y-1 shadow-lg shadow-brandPurple/20"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <a href="https://github.com/fuadhasan199" target="_blank">
              <Github className="hover:text-brandPurple transition" />
            </a>

            <a href="https://www.linkedin.com/in/khandokar-fuad-hasan-656815386/" target="_blank">
              <Linkedin className="hover:text-brandPurple transition" />
            </a>
          </div>
        </section>

        {/* Image Section */}
        <section className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in">
          <div className="profile-circle-container w-64 h-64 sm:w-80 sm:h-80 md:w-[450px] md:h-[450px]">
            <div className="w-full h-full rounded-full overflow-hidden  bg-gray-100">
              <img src={Image}
                alt="Frontend Developer"
                className="w-full h-full  object-cover object-center"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Hero;