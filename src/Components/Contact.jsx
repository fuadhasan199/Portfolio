import React from "react";
import {
  Mail,
  Phone,
  MessageCircle,
  Github,
  Linkedin,
  MapPin,
} from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Get In{" "}
            <span className="text-purple-600 dark:text-purple-400">
              Touch
            </span>
          </h2>

          <p className="text-slate-500 dark:text-slate-400">
            I'm currently looking for new opportunities. My inbox is always
            open!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Contact Information
            </h3>

            {/* Email */}
            <a
              href="mailto:fuadhasan740266@gmail.com"
              className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-purple-300 dark:hover:border-purple-500 hover:shadow-md transition-all group"
            >
              <div className="p-3 rounded-xl bg-white dark:bg-slate-800 shadow-sm text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <Mail size={24} />
              </div>

              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                  Email Me
                </p>

                <p className="text-lg font-bold text-slate-900 dark:text-white break-all">
                  fuadhasan740266@gmail.com
                </p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+8801787749095"
              className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-md transition-all group"
            >
              <div className="p-3 rounded-xl bg-white dark:bg-slate-800 shadow-sm text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Phone size={24} />
              </div>

              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                  Call Me
                </p>

                <p className="text-lg font-bold text-slate-900 dark:text-white">
                  +880 1787749095
                </p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/8801787749095"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-green-300 dark:hover:border-green-500 hover:shadow-md transition-all group"
            >
              <div className="p-3 rounded-xl bg-white dark:bg-slate-800 shadow-sm text-green-600 dark:text-green-400 group-hover:bg-green-600 group-hover:text-white transition-colors">
                <MessageCircle size={24} />
              </div>

              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                  WhatsApp
                </p>

                <p className="text-lg font-bold text-slate-900 dark:text-white">
                  +880 1787749095
                </p>
              </div>
            </a>
          </div>

          {/* Social Links & Location */}
          <div className="bg-slate-900 dark:bg-slate-900/80 dark:border dark:border-slate-800 p-10 rounded-[2.5rem] text-white h-full flex flex-col justify-center shadow-xl">
            <h3 className="text-2xl font-bold mb-8">Let's Connect</h3>

            <div className="space-y-8">
              {/* Location */}
              <div className="flex items-center gap-4">
                <MapPin className="text-purple-400" size={20} />

                <p className="text-slate-300">
                  Rangpur, Bangladesh
                </p>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {/* GitHub */}
                <a
                  href="https://github.com/fuadhasan199"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="p-4 bg-slate-800 rounded-2xl hover:bg-purple-600 transition-all"
                >
                  <Github size={28} />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/khandokar-fuad-hasan-656815386/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="p-4 bg-slate-800 rounded-2xl hover:bg-blue-600 transition-all"
                >
                  <Linkedin size={28} />
                </a>
              </div>
            </div>

            {/* Quote */}
            <div className="mt-12 p-6 bg-slate-800/50 rounded-2xl border border-slate-700">
              <p className="text-slate-400 text-sm italic">
                "I am always open to discussing new projects, creative ideas,
                or opportunities to be part of your visions."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;