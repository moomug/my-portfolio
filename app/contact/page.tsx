"use client";

import { useState } from "react";
import { 
  HiOutlineEnvelope, HiOutlinePhone, HiOutlineMapPin, 
  HiCheckCircle, HiXMark 
} from "react-icons/hi2";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.currentTarget);
    
    // Your key is perfectly safe here as long as you use Domain Restriction in Web3Forms
    formData.append("access_key", "ef78e7cb-135f-4de1-937e-1a52a8ddbbad");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          // THIS is the magic line that fixes the error you had originally!
          "Accept": "application/json" 
        },
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus(null); 
        setShowPopup(true); // Show the success modal
        e.currentTarget.reset(); // Clear the form
        
        // Automatically hide the popup after 5 seconds
        setTimeout(() => setShowPopup(false), 5000); 
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Error sending message.");
    }
  };

  return (
    <div className="p-8 w-full mb-10 relative">
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
          
          {/* Form Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h3>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  name="name" 
                  required
                  placeholder="Your Name" 
                  className="bg-gray-50 border border-gray-100 rounded-xl p-4 outline-none focus:border-[#1E3A8A] transition-colors"
                />
                <input 
                  type="email" 
                  name="email" 
                  required
                  placeholder="Your Email" 
                  className="bg-gray-50 border border-gray-100 rounded-xl p-4 outline-none focus:border-[#1E3A8A] transition-colors"
                />
              </div>
              <input 
                type="text" 
                name="subject" 
                required
                placeholder="Subject" 
                className="bg-gray-50 border border-gray-100 rounded-xl p-4 outline-none focus:border-[#1E3A8A] transition-colors"
              />
              <textarea 
                name="message" 
                required
                placeholder="Message" 
                rows={6}
                className="bg-gray-50 border border-gray-100 rounded-xl p-4 outline-none focus:border-[#1E3A8A] transition-colors resize-none"
              ></textarea>
              
              <button 
                type="submit"
                disabled={status === "Sending..."}
                className="bg-[#1E3A8A] text-white font-bold py-4 rounded-xl hover:bg-blue-900 transition-all shadow-lg shadow-blue-100 active:scale-95 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "Sending..." ? "Sending..." : "Send Message"}
              </button>

              {status && status !== "Sending..." && (
                <p className="text-sm font-bold text-red-500 text-center">
                  {status}
                </p>
              )}
            </form>
          </div>

          {/* Contact Details Section */}
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

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900/40 backdrop-blur-sm transition-all duration-300 px-4">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl relative transform transition-all scale-100">
            <button 
              onClick={() => setShowPopup(false)} 
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 rounded-full p-1 transition-colors"
            >
              <HiXMark size={24} />
            </button>
            <HiCheckCircle className="mx-auto text-emerald-500 mb-4" size={72} />
            <h3 className="text-2xl font-black text-gray-900 mb-2">Message Sent!</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Thank you for reaching out. I've received your message and will get back to you shortly.
            </p>
            <button 
              onClick={() => setShowPopup(false)} 
              className="w-full bg-gray-900 text-white font-bold py-3.5 rounded-xl hover:bg-black transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      )}

    </div>
  );
}