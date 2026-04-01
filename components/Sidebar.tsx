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
  // استدعينا أيقونات القائمة والإغلاق
  HiBars3, HiXMark 
} from "react-icons/hi2";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Sidebar() {
  const pathname = usePathname();
  // حالة (State) لتتبع ما إذا كانت القائمة مفتوحة أم مغلقة في الجوال
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/", OutlineIcon: HiOutlineHome, SolidIcon: HiHome },
    { name: "About", path: "/about", OutlineIcon: HiOutlineUser, SolidIcon: HiUser },
    { name: "Projects", path: "/projects", OutlineIcon: HiOutlineBriefcase, SolidIcon: HiBriefcase },
    { name: "Stack", path: "/stack", OutlineIcon: HiOutlineRectangleGroup, SolidIcon: HiRectangleGroup },
    { name: "Contact", path: "/contact", OutlineIcon: HiOutlineEnvelope, SolidIcon: HiEnvelope },
  ];

  // دالة لإغلاق القائمة عند الضغط على أي رابط (مهمة جداً لتجربة المستخدم في الجوال)
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* 1. الشريط العلوي الخاص بالجوال فقط (يحتوي على زر الهامبرغر) */}
      <div className="md:hidden fixed top-0 left-0 w-full h-16 bg-white border-b border-gray-100 z-40 flex items-center justify-between px-6">
        <div className="font-bold text-gray-900 text-lg">M. Elmaghrabi</div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-900 focus:outline-none p-2"
        >
          {isOpen ? <HiXMark size={28} /> : <HiBars3 size={28} />}
        </button>
      </div>

      {/* 2. طبقة رمادية شفافة تظهر في الجوال عند فتح القائمة، وتغلقها عند الضغط عليها */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-gray-900/50 z-40"
          onClick={closeSidebar}
        />
      )}

      {/* 3. القائمة الجانبية نفسها */}
      <aside 
        className={`fixed left-0 top-0 h-screen w-72 border-r border-gray-100 bg-white flex flex-col justify-between p-8 z-50 transition-transform duration-300 ease-in-out 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0` /* في الشاشات الكبيرة تكون دائماً ظاهرة */}
      >
        <div>
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border-2 border-gray-900 flex items-center justify-center font-bold text-xl text-gray-900">
                M
              </div>
              <div>
                <h1 className="font-bold text-gray-900 leading-tight truncate w-32">Mohamed Elmaghrabi</h1>
                <p className="text-xs text-gray-400 mt-1">Senior .NET Engineer</p>
              </div>
            </div>
            {/* زر إغلاق إضافي داخل القائمة للجوال */}
            <button className="md:hidden text-gray-500 hover:text-gray-900" onClick={closeSidebar}>
              <HiXMark size={24} />
            </button>
          </div>

          <nav className="flex flex-col gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              const ActiveIcon = isActive ? link.SolidIcon : link.OutlineIcon;

              return (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={closeSidebar} // إغلاق القائمة عند اختيار رابط
                  className={`flex items-center gap-4 transition-colors ${
                    isActive ? "text-[#1E3A8A] font-bold" : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  <ActiveIcon size={22} />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-5 text-gray-400">
          <a href="https://linkedin.com/in/mohamed-elmaghrabi" target="_blank" rel="noreferrer" className="hover:text-gray-900 transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href="https://github.com/moomug" target="_blank" rel="noreferrer" className="hover:text-gray-900 transition-colors">
            <FaGithub size={20} />
          </a>
          <a href="mailto:moghrabi.eng@gmail.com" className="hover:text-gray-900 transition-colors">
            <HiOutlineEnvelope size={22} />
          </a>
        </div>
      </aside>
    </>
  );
}