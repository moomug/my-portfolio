"use client";

import { HiOutlineEnvelope, HiOutlinePhone, HiOutlineMapPin } from "react-icons/hi2";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="p-8 w-full mb-10">
      <div className="bg-white w-full rounded-[2rem] p-10 shadow-sm border border-gray-100">
        
       
        <div className="mb-16 pt-6">
          <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            Available for Freelance
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Let's Connect! <br />
            <span className="text-[#1E3A8A]">Build Something Great Together</span>
          </h1>
          <p className="text-gray-500 text-lg mt-6 max-w-2xl leading-relaxed">
            Feel free to reach out for collaborations, project inquiries, or just to say hi. I'll respond as soon as possible.
          </p>
        </div>

      
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
         
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h3>
           
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="bg-gray-50 border border-gray-100 rounded-xl p-4 outline-none focus:border-[#1E3A8A] transition-colors"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-gray-50 border border-gray-100 rounded-xl p-4 outline-none focus:border-[#1E3A8A] transition-colors"
                />
              </div>
              <input 
                type="text" 
                placeholder="Subject" 
                className="bg-gray-50 border border-gray-100 rounded-xl p-4 outline-none focus:border-[#1E3A8A] transition-colors"
              />
              <textarea 
                placeholder="Message" 
                rows={6}
                className="bg-gray-50 border border-gray-100 rounded-xl p-4 outline-none focus:border-[#1E3A8A] transition-colors resize-none"
              ></textarea>
              <button 
                type="submit"
                className="bg-[#1E3A8A] text-white font-bold py-4 rounded-xl hover:bg-blue-900 transition-all shadow-lg shadow-blue-100 active:scale-95"
              >
                Send Message
              </button>
            </form>
          </div>

      
          <div className="flex flex-col gap-12">
            
           
            <div className="flex flex-col gap-8">
              <h3 className="text-2xl font-bold text-gray-900">Contact Details</h3>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#1E3A8A] group-hover:bg-[#1E3A8A] group-hover:text-white transition-colors">
                  <HiOutlineEnvelope size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase">Email</p>
                  <a href="mailto:moghrabi.eng@gmail.com" className="text-gray-900 font-medium hover:text-[#1E3A8A]">moghrabi.eng@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#1E3A8A] group-hover:bg-[#1E3A8A] group-hover:text-white transition-colors">
                  <HiOutlinePhone size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase">Phone</p>
                  <a href="tel:+46704989057" className="text-gray-900 font-medium hover:text-[#1E3A8A] tracking-wide">+46 70-498 9057</a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#1E3A8A] group-hover:bg-[#1E3A8A] group-hover:text-white transition-colors">
                  <HiOutlineMapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase">Location</p>
                  <p className="text-gray-900 font-medium">Göteborg, Sweden</p>
                </div>
              </div>
            </div>


            <div className="flex flex-col gap-6 pt-4">
              <h3 className="text-xl font-bold text-gray-900">Social Connect</h3>
              <div className="flex items-center gap-4">
                <a href="https://linkedin.com/in/mohamed-elmaghrabi" target="_blank" className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#0077B5] hover:border-[#0077B5] transition-all">
                  <FaLinkedin size={22} />
                </a>
                <a href="https://github.com/moomug" target="_blank" className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-black hover:border-black transition-all">
                  <FaGithub size={22} />
                </a>
                <a href="https://wa.me/46704989057" target="_blank" className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#25D366] hover:border-[#25D366] transition-all">
                  <FaWhatsapp size={22} />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}