"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  HiOutlineArrowRight, 
  HiOutlineCubeTransparent, 
  HiOutlineArrowPath
} from "react-icons/hi2";

export default function Home() {
  const [showEmoji, setShowEmoji] = useState(false);
  const [activeProject, setActiveProject] = useState<any>(null);
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setShowEmoji((prev) => !prev), 3000);
    
    const handleScroll = () => {
      if (window.scrollY > 300) setShowScrollTop(true);
      else setShowScrollTop(false);
    };
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const projectsData = [
    {
      id: "where-is",
      title: "Where Is",
      subtitle: "Commercial Directory",
      category: "CLOUD & .NET",
      icon: "📍",
      description: "Spearheaded the complete architecture and cloud deployment for a comprehensive geo-location commercial directory platform. Engineered a highly performant Geo-Spatial search engine and integrated advanced Redis caching.",
      tech: [".NET 8", "Redis", "Geo-Spatial", "Azure"],
      theme: {
        lightBg: "bg-emerald-50",
        text: "text-emerald-700",
        border: "border-emerald-500",
        activeBg: "bg-emerald-50/10",
        button: "bg-emerald-600 hover:bg-emerald-700 text-white"
      }
    },
    {
      id: "moqla",
      title: "Moqla",
      subtitle: "University Platform",
      category: "MICROSERVICES & REACT",
      icon: "🎓",
      description: "Led the architectural transition of legacy monolithic systems into highly scalable Microservices using .NET Core and Docker. Designed dynamic scoring engines achieving a 90% match accuracy.",
      tech: ["Microservices", "React", "Docker", "SQL"],
      theme: {
        lightBg: "bg-blue-50",
        text: "text-[#1E3A8A]",
        border: "border-[#1E3A8A]",
        activeBg: "bg-blue-50/10",
        button: "bg-[#1E3A8A] hover:bg-blue-900 text-white"
      }
    }
  ];

  const handleNextProject = () => {
    if (!activeProject) return;
    const currentIndex = projectsData.findIndex(p => p.id === activeProject.id);
    const nextIndex = (currentIndex + 1) % projectsData.length;
    setActiveProject(projectsData[nextIndex]);
  };

  const handleDragStart = (e: React.DragEvent, project: any) => {
    e.dataTransfer.setData("projectId", project.id);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDraggingOver(false);
    const droppedId = e.dataTransfer.getData("projectId");
    const project = projectsData.find(p => p.id === droppedId);
    if (project) setActiveProject(project);
  };

  return (
    // السر هنا: تم استبدال md:p-8 بـ md:py-8 md:pr-8 md:pl-4 لتقليل المسافة من جهة السايد بار فقط
    <div className="p-4 md:py-8 md:pr-8 md:pl-4 pt-24 md:pt-8 w-full flex flex-col gap-8 mb-10 relative">
      
      
      <div className="bg-white w-full rounded-[2rem] p-6 md:p-12 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        
      
        <div className="flex-1 w-full lg:w-3/5 lg:pr-8 z-10 flex flex-col items-start text-left">
          
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold tracking-wide mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            OPEN TO NEW OPPORTUNITIES
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#1E3A8A] rounded-full flex items-center justify-center text-white text-xl md:text-3xl shadow-lg font-bold transition-all duration-300 shrink-0">
              {showEmoji ? "👋" : "Hi"}
            </div>
            <h2 className="text-xl md:text-3xl font-bold text-gray-900 leading-tight">
              , I'm Mohamed Elmaghrabi
            </h2>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-[54px] font-extrabold text-gray-900 leading-[1.2] tracking-tight mb-6">
            I'm a <span className="text-[#1E3A8A]">Senior Full-Stack .NET Engineer</span> <br />
            Cloud & DevOps Oriented
          </h1>

          <p className="text-gray-500 text-sm md:text-lg leading-relaxed max-w-2xl mb-8">
            Hello, Welcome to my portfolio. I am an accomplished Senior Full-Stack .NET Engineer
            with over 6 years of experience architecting and developing robust, highly scalable
            backend systems, cloud-native applications, and dynamic user interfaces.
          </p>

        
          <div className="lg:hidden w-full max-w-[250px] mx-auto mb-8 relative flex justify-center items-center z-0">
            <div className="absolute inset-0 bg-blue-50/80 rounded-full blur-2xl -z-10"></div>
            <img 
              src="/3d-avatar.png" 
              alt="Mohamed Elmaghrabi 3D Avatar" 
              className="w-full h-auto object-contain drop-shadow-2xl" 
            />
          </div>

          <div className="w-full md:w-auto">
            <Link 
              href="/about" 
              className="inline-flex items-center justify-center w-full md:w-auto gap-2 bg-gradient-to-r from-[#1E3A8A] to-[#3b5ab9] text-white px-8 py-3.5 rounded-full font-semibold text-sm md:text-base shadow-lg shadow-blue-200 hover:shadow-xl hover:scale-[1.02] transition-all"
            >
              More about me <HiOutlineArrowRight />
            </Link>
          </div>
        </div>

        {/* الصورة الـ 3D (مخصصة للديسكتوب فقط - تظهر على اليمين) */}
        <div className="hidden lg:flex w-full lg:w-2/5 max-w-md justify-end items-center relative z-0">
          <div className="absolute inset-0 bg-blue-50/80 rounded-full blur-3xl -z-10"></div>
          <img 
            src="/3d-avatar.png" 
            alt="Mohamed Elmaghrabi 3D Avatar" 
            className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" 
          />
        </div>
      </div>

      {/* 2. منطقة السحب والإفلات */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 items-start mt-4">
        
        <div className="lg:col-span-1 flex flex-col gap-4">
          <h2 className="text-xl font-bold text-gray-900 px-2 mb-2 flex items-center justify-between">
            <span>Recent Work</span>
            <span className="text-xs font-normal text-[#1E3A8A] border border-[#1E3A8A]/20 bg-blue-50/50 px-2 py-1 rounded-md hidden lg:block">Drag & Drop</span>
          </h2>
          
          {projectsData.map((project) => (
            <div 
              key={project.id}
              draggable
              onDragStart={(e) => handleDragStart(e, project)}
              onClick={() => setActiveProject(project)}
              className={`bg-white p-4 rounded-2xl border-2 cursor-grab active:cursor-grabbing hover:shadow-md transition-all flex items-center gap-4 ${
                activeProject?.id === project.id 
                  ? `${project.theme.border} ${project.theme.activeBg} shadow-lg` 
                  : 'border-gray-100 hover:border-gray-300'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${project.theme.lightBg} ${project.theme.text}`}>
                {project.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 text-sm">{project.title}</h3>
                <p className={`text-[9px] font-extrabold ${project.theme.text} uppercase tracking-wide`}>{project.category}</p>
              </div>
            </div>
          ))}
          <p className="text-xs text-gray-400 px-2 mt-2">
            <span className="lg:hidden">Tap</span><span className="hidden lg:inline">Drag</span> a project to view its details.
          </p>
        </div>

        <div 
          onDragOver={(e) => { e.preventDefault(); setIsDraggingOver(true); }}
          onDragLeave={() => setIsDraggingOver(false)}
          onDrop={handleDrop}
          className={`lg:col-span-2 w-full min-h-[450px] rounded-[2rem] transition-all duration-300 flex flex-col ${
            activeProject 
              ? 'bg-white shadow-2xl shadow-gray-200' 
              : isDraggingOver 
                ? 'bg-blue-50/50 border-2 border-dashed border-[#1E3A8A] scale-[1.02]' 
                : 'bg-white border-2 border-dashed border-gray-200'
          }`}
        >
          {!activeProject && (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-8 opacity-60">
              <HiOutlineCubeTransparent className={`w-20 h-20 mb-4 ${isDraggingOver ? 'text-[#1E3A8A] animate-bounce' : 'text-gray-300'}`} />
              <h3 className={`text-xl font-bold mb-2 ${isDraggingOver ? 'text-[#1E3A8A]' : 'text-gray-400'}`}>
                {isDraggingOver ? "Drop it here!" : "Drop a project here"}
              </h3>
            </div>
          )}

          {activeProject && (
            <div className="p-8 md:p-12 animate-in fade-in zoom-in-95 duration-500 flex-1 flex flex-col">
              
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl ${activeProject.theme.lightBg} ${activeProject.theme.text} border border-white/50`}>
                  {activeProject.icon}
                </div>
                <div>
                  <h2 className="text-3xl font-black text-gray-900">{activeProject.title}</h2>
                  <p className="text-sm text-gray-500 font-medium">{activeProject.subtitle}</p>
                </div>
              </div>

              <div className="bg-gray-50/50 rounded-2xl p-6 mb-8 border border-gray-100 shadow-sm">
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">{activeProject.description}</p>
              </div>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-8">
                  {activeProject.tech.map((t: string) => (
                    <span key={t} className={`bg-white border px-3 py-1.5 rounded-lg text-xs font-bold ${activeProject.theme.border} ${activeProject.theme.text}`}>
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-col md:flex-row items-center gap-3 border-t border-gray-100 pt-6">
                  <Link 
                    href={`/projects/${activeProject.id}`} 
                    className={`w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all flex-1 ${activeProject.theme.button}`}
                  >
                    View Full Case Study <HiOutlineArrowRight />
                  </Link>
                  
                  <div className="flex w-full md:w-auto gap-3">
                    <button 
                      onClick={handleNextProject}
                      className="flex-1 md:flex-none bg-gray-900 text-white hover:bg-black px-6 py-3 rounded-xl font-bold text-sm transition-all"
                    >
                      Next Project
                    </button>
                    <button 
                      onClick={() => setActiveProject(null)}
                      className="flex-1 md:flex-none bg-gray-100 text-gray-500 hover:bg-red-100 hover:text-red-500 px-5 py-3 rounded-xl transition-all flex items-center justify-center"
                      title="Reset Zone"
                    >
                      <HiOutlineArrowPath size={20} />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          )}
        </div>
      </div>

      {/* 3. زر الرجوع للأعلى */}
      <button 
        onClick={scrollToTop}
        className={`md:hidden fixed bottom-6 right-6 z-50 p-4 bg-[#1E3A8A] text-white rounded-full shadow-2xl hover:bg-blue-900 transition-all duration-300 ${
          showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
        }`}
      >
        <HiOutlineArrowRight className="-rotate-90" size={20} />
      </button>

    </div>
  );
}