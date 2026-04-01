import Link from "next/link";

export default function Projects() {
  // بيانات مشاريعك مستخرجة من سيرتك الذاتية
  const projects = [
    {
      id: 1,
      title: "Where Is (Commercial Directory)",
      category: "CLOUD & ARCHITECTURE",
      description: "A comprehensive geo-location commercial directory with a highly performant Geo-Spatial search engine, digital wallet, and ZATCA e-invoicing.",
      techStack: [".NET 8", "Redis", "Docker", "Terraform", "Angular"],
      bgColor: "bg-emerald-500",
      hoverColor: "group-hover:text-emerald-600"
    },
    {
      id: 2,
      title: "Moqla - Taif University",
      category: "MICROSERVICES & REACT",
      description: "Architectural transition of legacy monolithic systems into highly scalable Microservices. Includes an Academic Jobs Platform with a dynamic scoring engine.",
      techStack: [".NET Core", "React.js", "CQRS", "Docker", "SQL Server"],
      bgColor: "bg-[#1E3A8A]", // اللون الكحلي الرسمي الخاص بك
      hoverColor: "group-hover:text-[#1E3A8A]"
    },
    {
      id: 3,
      title: "Arab Poetry Academy",
      category: "FULL-STACK .NET",
      description: "Platform managing complete backend development and dynamic UIs to support poetry submissions, evaluations by judges, and prize distributions.",
      techStack: ["C#", "Next.js", "EF Core", "SQL Server"],
      bgColor: "bg-orange-500",
      hoverColor: "group-hover:text-orange-600"
    },
    {
      id: 4,
      title: "TU Academic Portals",
      category: "WEB APPLICATIONS",
      description: "End-to-end features for various portals including the Initiatives System, TU Proud System, and Training Academy.",
      techStack: ["ASP.NET MVC", "jQuery", "SQL Server", "HTML5"],
      bgColor: "bg-purple-600",
      hoverColor: "group-hover:text-purple-600"
    }
  ];

  return (
    <div className="p-8 w-full mb-10">
      <div className="bg-white w-full rounded-[2rem] p-10 shadow-sm border border-gray-100">
        
        {/* 1. ترويسة الصفحة */}
        <div className="mb-16 pt-6">
          <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            Available for Freelance
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Projects: <br />
            <span className="text-[#1E3A8A]">Showcasing My Journey</span>
          </h1>
          <p className="text-gray-500 text-lg mt-6 max-w-2xl leading-relaxed">
            A selection of my recent work, highlighting my expertise in building scalable backend architectures, cloud deployments, and seamless user experiences.
          </p>
        </div>

        {/* 2. شبكة المشاريع (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              
              {/* حاوية الصورة (البطاقة الملونة حالياً) */}
              <div className={`aspect-square lg:aspect-[4/3] w-full rounded-3xl ${project.bgColor} mb-6 overflow-hidden relative flex flex-col items-center justify-center p-8 transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl shadow-md`}>
                
                {/* رقم المشروع كعلامة مائية خفيفة في الخلفية */}
                <div className="text-white opacity-10 text-9xl font-black absolute -right-6 -bottom-6 transform rotate-12 select-none pointer-events-none">
                  0{project.id}
                </div>
                
                {/* تفاصيل المشروع داخل البطاقة */}
                <h3 className="text-white text-3xl font-bold text-center z-10 mb-4">{project.title}</h3>
                <p className="text-white/80 text-center text-sm max-w-sm z-10 leading-relaxed">
                  {project.description}
                </p>
                
                {/* التقنيات المستخدمة */}
                <div className="flex flex-wrap justify-center gap-2 mt-8 z-10">
                  {project.techStack.map(tech => (
                    <span key={tech} className="bg-white/20 backdrop-blur-md text-white border border-white/30 text-xs px-4 py-1.5 rounded-full font-medium tracking-wide">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
        
              <div className="px-2">
                <p className="text-xs font-bold text-gray-400 tracking-widest mb-2 uppercase">
                  {project.category}
                </p>
                <h4 className={`text-2xl font-bold text-gray-900 transition-colors duration-300 ${project.hoverColor}`}>
                  {project.title}
                </h4>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}