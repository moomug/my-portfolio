"use client";

import { useState } from "react";
import { HiOutlineEnvelope, HiOutlinePhone, HiOutlineMapPin } from "react-icons/hi2";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  // حالة لتتبع الإرسال
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.currentTarget);
    
    // المفتاح الخاص بك
    formData.append("access_key", "ef78e7cb-135f-4de1-937e-1a52a8ddbbad");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("Success! Your message has been sent.");
        e.currentTarget.reset(); // تفريغ الحقول بعد الإرسال الناجح
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Error sending message.");
    }
  };

  return (
    <div className="p-8 w-full mb-10">
      <div className="bg-white w-full rounded-[2rem] p-10 shadow-sm border border-gray-100">
        
        <div className="mb-16 pt-6">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold tracking-wide mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            OPEN TO NEW OPPORTUNITIES
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Let's Connect! <br />
            <span className="text-[#1E3A8A]">Build Something Great Together</span>
          </h1>
          <p className="text-gray-500 text-lg mt-6 max-w-2xl leading-relaxed">
            Feel free to reach out for collaborations, project inquiries, or just to say hi. I'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* قسم الفورم */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h3>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  name="name" // ضروري جداً
                  required
                  placeholder="Your Name" 
                  className="bg-gray-50 border border-gray-100 rounded-xl p-4 outline-none focus:border-[#1E3A8A] transition-colors"
                />
                <input 
                  type="email" 
                  name="email" // ضروري جداً
                  required
                  placeholder="Your Email" 
                  className="bg-gray-50 border border-gray-100 rounded-xl p-4 outline-none focus:border-[#1E3A8A] transition-colors"
                />
              </div>
              <input 
                type="text" 
                name="subject" // ضروري جداً
                required
                placeholder="Subject" 
                className="bg-gray-50 border border-gray-100 rounded-xl p-4 outline-none focus:border-[#1E3A8A] transition-colors"
              />
              <textarea 
                name="message" // ضروري جداً
                required
                placeholder="Message" 
                rows={6}
                className="bg-gray-50 border border-gray-100 rounded-xl p-4 outline-none focus:border-[#1E3A8A] transition-colors resize-none"
              ></textarea>
              
              <button 
                type="submit"
                className="bg-[#1E3A8A] text-white font-bold py-4 rounded-xl hover:bg-blue-900 transition-all shadow-lg shadow-blue-100 active:scale-95 flex items-center justify-center"
              >
                {status === "Sending..." ? "Sending..." : "Send Message"}
              </button>

              {/* رسالة النجاح أو الفشل */}
              {status && status !== "Sending..." && (
                <p className={`text-sm font-bold ${status.includes("Success") ? "text-emerald-600" : "text-red-500"}`}>
                  {status}
                </p>
              )}
            </form>
          </div>

          {/* قسم بيانات التواصل */}
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