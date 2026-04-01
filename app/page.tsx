"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [showEmoji, setShowEmoji] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowEmoji((prev) => !prev);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // مصفوفة تحتوي على تفاصيل مشاريعك من السيرة الذاتية
  const recentProjects = [
    {
      id: 1,
      category: "CLOUD & ARCHITECTURE",
      title: "Where Is (Commercial Directory)",
      color: "bg-emerald-100 text-emerald-600",
      bgPlaceholder: "bg-emerald-500",
    },
    {
      id: 2,
      category: "MICROSERVICES & REACT",
      title: "Moqla - Taif University Platform",
      color: "bg-blue-100 text-blue-600",
      bgPlaceholder: "bg-[#1E3A8A]",
    },
    {
      id: 3,
      category: "FULL-STACK .NET",
      title: "Arab Poetry Academy System",
      color: "bg-orange-100 text-orange-600",
      bgPlaceholder: "bg-orange-400",
    },
  ];

  return (
    <div className="p-8 w-full flex flex-col gap-12 mb-10">
      
      {/* 1. قسم الترحيب (Hero Section) */}
      <section className="bg-white w-full rounded-[2rem] p-10 shadow-sm border border-gray-100">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 text-4xl font-bold text-gray-900 flex-wrap">
            <div 
              className="w-16 h-16 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center relative overflow-hidden shadow-lg shadow-blue-100 cursor-pointer"
              onClick={() => setShowEmoji(!showEmoji)}
            >
              <span className={`font-bold text-2xl ${showEmoji ? 'anim-exit' : 'anim-enter'}`}>Hi</span>
              <span className={`font-bold text-3xl ${showEmoji ? 'anim-enter' : 'anim-exit'}`}>👋</span>
            </div>
            <span>, I'm Mohamed Elmaghrabi</span>
            <div className="w-12 h-12 bg-gray-200 rounded-xl overflow-hidden flex items-center justify-center text-[10px] text-gray-500 font-normal ml-2 border border-gray-300">
              Photo
            </div>
          </div>

          <h2 className="text-5xl font-extrabold text-gray-900 leading-tight mt-2">
            I'm a <span className="text-[#1E3A8A]">Senior Full-Stack .NET Engineer</span> <br />
            Cloud & DevOps Oriented
          </h2>

          <p className="text-gray-500 text-lg max-w-3xl leading-relaxed mt-2">
            Hello, Welcome to my portfolio. I am an accomplished Senior Full-Stack .NET Engineer with over 6 years of experience architecting and developing robust, highly scalable backend systems, cloud-native applications, and dynamic user interfaces.
          </p>

          <div className="mt-6">
            <Link href="/about" className="inline-flex items-center justify-center gap-2 text-white px-8 py-3.5 rounded-full font-medium w-fit bg-gradient-to-r from-[#1A36E8] to-[#1E3A8A] transition-all hover:scale-105 active:scale-95 duration-300 shadow-md">
              More about me
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. قسم المشاريع الحديثة */}
      <section>
        <h3 className="text-2xl font-bold text-gray-900 mb-6 px-2">Recent Projects</h3>
        {/* شبكة لتقسيم المشاريع لـ 3 أعمدة في الشاشات الكبيرة */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              {/* مربع الصورة المؤقت (سنستبدله بصور لاحقاً) */}
              <div className={`aspect-[4/3] w-full rounded-3xl ${project.bgPlaceholder} mb-4 overflow-hidden transition-transform duration-300 group-hover:-translate-y-2 shadow-sm relative flex items-center justify-center`}>
                 <span className="text-white font-bold opacity-50 text-xl tracking-widest">{project.title.split(' ')[0]}</span>
              </div>
              <div className="px-2">
                <p className="text-[11px] font-bold text-gray-400 tracking-wider mb-1 uppercase">{project.category}</p>
                <h4 className="text-lg font-bold text-gray-900 group-hover:text-[#1E3A8A] transition-colors">{project.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. قسم دعنا نتعاون (Let's Collaborate) */}
      <section className="bg-white w-full rounded-[2rem] p-12 shadow-sm border border-gray-100 text-center flex flex-col items-center mt-4">
        <h3 className="text-4xl font-extrabold text-gray-900 mb-4">Let's Collaborate Together</h3>
        <p className="text-gray-500 text-lg mb-8 max-w-lg">
          Let's turn your ideas into highly scalable, robust digital systems with clean architecture and precision.
        </p>
        <div className="flex items-center gap-4">
          <Link href="/contact" className="bg-[#1E3A8A] text-white px-8 py-3 rounded-full font-medium hover:bg-blue-900 transition-colors shadow-md">
            Contact me
          </Link>
          <a href="mailto:moghrabi.eng@gmail.com" className="bg-white text-gray-900 border border-gray-200 px-8 py-3 rounded-full font-medium hover:border-gray-900 transition-colors">
            Chat with me
          </a>
        </div>
      </section>

    </div>
  );
}