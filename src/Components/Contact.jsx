import React from 'react';
import { Mail, Phone, MessageCircle, Github, Linkedin, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-base-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold  mb-4">
            Get In <span className="text-purple-600">Touch</span>
          </h2>
          <p className="">I'm currently looking for new opportunities. My inbox is always open!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-base-content mb-6">Contact Information</h3>
            
            {/* Email Card */}
            <a href="mailto:fuadhasan740266@gmail.com" className="flex items-center gap-4 p-5 rounded-2xl bg-base-100  border border-base-100 hover:border-purple-200 hover:bg-base-100 transition-all group">
              <div className="p-3 rounded-xl shadow-sm group-hover:bg-purple-600 ">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-base-content font-medium">Email Me</p>
                <p className="text-lg font-bold text-base-content">fuadhasan740266@gmail.com</p>
              </div>
            </a>

            {/* Phone Card */}
            <a href="tel:+8801787749095" className="flex items-center gap-4 p-5 rounded-2xl  border border-base-100 hover:border-blue-200 hover:bg-base-100 transition-all group">
              <div className="p-3  rounded-xl shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-base-content font-medium">Call Me</p>
                <p className="text-lg font-bold text-base-content">+880 1787749095</p>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a href="https://wa.me/8801700000000" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-5 rounded-2xl  border border-base-100 hover:border-green-200 hover:bg-green-50 transition-all group">
              <div className="p-3  rounded-xl shadow-sm group-hover:bg-green-600 group-hover:text-white transition-colors">
                <MessageCircle size={24} />
              </div>
              <div>
                <p className="text-sm text-base-content font-medium">WhatsApp</p>
                <p className="text-lg font-bold text-base-content">+880 1787749095</p>
              </div>
            </a>
          </div>

          {/* Social Links & Location */}
          <div className="bg-gray-900 p-10 rounded-[2.5rem] text-white h-full flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-8">Let's Connect</h3>
            
            <div className="space-y-8">
                <div className="flex items-center gap-4">
                    <MapPin className="text-purple-400" />
                    <p className="text-gray-300">Rangpur, Bangladesh</p>
                </div>

                <div className="flex gap-4">
                    <a href="https://github.com/fuadhasan199" target="_blank" className="p-4 bg-gray-800 rounded-2xl hover:bg-purple-600 transition-all">
                        <Github size={28} />
                    </a>
                    <a href="https://www.linkedin.com/in/khandokar-fuad-hasan-656815386/" target="_blank" className="p-4 bg-gray-800 rounded-2xl hover:bg-blue-600 transition-all">
                        <Linkedin size={28} />
                    </a>
                </div>
            </div>

            <div className="mt-12 p-6 bg-gray-800/50 rounded-2xl border border-gray-700">
                <p className="text-gray-400 text-sm italic">
                    "I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions."
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;