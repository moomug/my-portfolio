"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  HiOutlineHome, HiHome,
  HiOutlineUser, HiUser,
  HiOutlineBriefcase, HiBriefcase,
  HiOutlineRectangleGroup, HiRectangleGroup,
  HiOutlineEnvelope, HiEnvelope,
  HiBars3, HiXMark 
} from "react-icons/hi2";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/", OutlineIcon: HiOutlineHome, SolidIcon: HiHome },
    { name: "About", path: "/about", OutlineIcon: HiOutlineUser, SolidIcon: HiUser },
    { name: "Projects", path: "/projects", OutlineIcon: HiOutlineBriefcase, SolidIcon: HiBriefcase },
    { name: "Stack", path: "/stack", OutlineIcon: HiOutlineRectangleGroup, SolidIcon: HiRectangleGroup },
    { name: "Contact", path: "/contact", OutlineIcon: HiOutlineEnvelope, SolidIcon: HiEnvelope },
  ];

  const closeSidebar = () => setIsOpen(false);

  return (
    <>
     
      <div className="md:hidden fixed top-0 left-0 w-full h-16 bg-white/80 backdrop-blur-xl border-b border-gray-100 z-40 flex items-center justify-center transition-all duration-300">
        <img 
          src="/logo.png" 
          alt="Logo" 
          className="h-10 w-auto object-contain" 
          onError={(e) => e.currentTarget.style.display = 'none'} 
        />
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="absolute right-4 text-gray-900 focus:outline-none p-2 active:scale-90 transition-transform"
        >
          {isOpen ? <HiXMark size={28} /> : <HiBars3 size={28} />}
        </button>
      </div>

    
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-gray-900/30 backdrop-blur-sm z-40 transition-opacity"
          onClick={closeSidebar}
        />
      )}

    
      <aside 
        className={`fixed left-0 top-0 h-screen w-72 bg-white/70 backdrop-blur-2xl border-r border-gray-100/50 shadow-[4px_0_24px_rgba(0,0,0,0.02)] flex flex-col justify-between py-8 px-6 z-50 transition-transform duration-300 ease-out shrink-0
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        
       
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-center relative w-full">
            <img 
              src="/logo.png" 
              alt="Mohamed Elmaghrabi Logo" 
              className="h-20 w-auto max-w-full object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden text-xl font-black text-[#1E3A8A] tracking-widest text-center">
              LOGO
            </div>

            <button className="md:hidden absolute right-0 text-gray-400 hover:text-gray-900 active:scale-90 transition-transform" onClick={closeSidebar}>
              <HiXMark size={24} />
            </button>
          </div>
          
          <hr className="w-full border-gray-200/60 mt-6 mb-6" /> 
        </div>

   
        <div className="flex-1 flex flex-col justify-start">
         
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              const ActiveIcon = isActive ? link.SolidIcon : link.OutlineIcon;

              return (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={closeSidebar}
                  className={`group relative flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 ease-out active:scale-95 overflow-hidden ${
                    isActive 
                      ? "bg-gradient-to-r from-blue-50/80 to-transparent text-[#1E3A8A] font-bold shadow-sm" 
                      : "text-gray-500 hover:bg-gray-50/80 hover:text-gray-900"
                  }`}
                >
                  {isActive && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-[#1E3A8A] rounded-r-full shadow-[0_0_10px_rgba(30,58,138,0.3)]" />
                  )}
                  
                  <ActiveIcon 
                    size={22} 
                    className={`transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-110"}`} 
                  />
                  <span className="tracking-wide text-[15px]">{link.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex flex-col pt-6 mt-4 border-t border-gray-200/60">
          <div className="flex items-center justify-center gap-6 text-gray-400">
            <a href="https://linkedin.com/in/mohamed-elmaghrabi" target="_blank" rel="noreferrer" className="hover:text-[#1E3A8A] hover:-translate-y-1 transition-all duration-300">
              <FaLinkedin size={20} />
            </a>
            <a href="https://github.com/moomug" target="_blank" rel="noreferrer" className="hover:text-gray-900 hover:-translate-y-1 transition-all duration-300">
              <FaGithub size={20} />
            </a>
            <a href="mailto:moghrabi.eng@gmail.com" className="hover:text-[#1E3A8A] hover:-translate-y-1 transition-all duration-300">
              <HiOutlineEnvelope size={22} />
            </a>
          </div>
        </div>
        
      </aside>
    </>
  );
}