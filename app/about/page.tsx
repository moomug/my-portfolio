import Link from "next/link";
// استدعينا أيقونة إضافية من Heroicons
import { HiOutlineArrowRight, HiOutlineBriefcase, HiOutlineUserCircle } from "react-icons/hi2";

export default function About() {
  const experiences = [
    {
      role: "Senior Backend & Cloud Engineer",
      company: "Where Is (Contract)",
      date: "Oct 2024 - Present",
      description: "Spearheaded the complete architecture and cloud deployment for a comprehensive geo-location commercial directory platform. Engineered a highly performant Geo-Spatial search engine and integrated advanced Redis caching."
    },
    {
      role: "Senior .NET Backend Engineer",
      company: "Moqla",
      date: "2023 - 2025",
      description: "Led the architectural transition of legacy monolithic systems into highly scalable Microservices using .NET Core and Docker. Designed dynamic scoring engines achieving a 90% match accuracy."
    },
    {
      role: "Full-Stack .NET Developer",
      company: "ALAM NAMAA",
      date: "2021 - 2023",
      description: "Engineered the 'Arab Poetry Academy' platform, managing complete backend development using C# and creating dynamic UIs with modern frontend frameworks (Next.js / React.js)."
    },
    {
      role: "Full-Stack .NET Developer",
      company: "Mea-Tech",
      date: "2018 - 2021",
      description: "Designed and built multiple web-based applications from the ground up using ASP.NET MVC and ASP.NET Core, ensuring robust functionality and seamless integration with SQL Server."
    }
  ];

  return (
    <div className="p-8 w-full">
      <div className="bg-white w-full rounded-[2rem] p-10 shadow-sm border border-gray-100">
        
        {/* 1. القسم العلوي: تم إعادة التصميم ليكون النص أكثر عرضاً والصورة أكثر بروزاً */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-16 mb-20 pt-6">
          
          {/* قسم النص (يأخذ 65% من المساحة في الشاشات الكبيرة) */}
          <div className="lg:flex-[2] w-full lg:w-auto">
            <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              Available for Freelance
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Cloud & DevOps Oriented <br />
              <span className="text-[#1E3A8A]">Senior .NET Engineer.</span>
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed max-w-3xl">
              I'm an accomplished Senior Full-Stack .NET Engineer with over 6 years of experience architecting and developing robust, highly scalable backend systems, cloud-native applications, and dynamic user interfaces. I specialize in the modern .NET ecosystem, Clean Architecture, RESTful/Minimal APIs, and bringing practical expertise in Infrastructure as Code (IaC) and automated CI/CD pipelines.
            </p>
          </div>
          
          {/* --- قسم الصورة الجديد كلياً والاحترافي --- */}
          {/* حاوية الـ Layering (تأخذ 35% من المساحة) */}
          <div className="relative group lg:flex-[1] w-full max-w-sm lg:max-w-none flex justify-center lg:justify-end mt-12 lg:mt-0">
            
            {/* البطاقة الخلفية الكحلية (Stacked Card) */}
            <div className="absolute inset-0 bg-[#1E3A8A] rounded-2xl shadow-xl transform rotate-6 scale-105 group-hover:rotate-0 transition-transform duration-500"></div>
            
            {/* البطاقة الأمامية (مكان الصورة) */}
            <div className="relative w-full aspect-[3/4] lg:w-full lg:h-[26rem] bg-gray-100 rounded-2xl shrink-0 shadow-2xl border-8 border-white overflow-hidden transform -rotate-3 group-hover:rotate-0 transition-transform duration-500 flex flex-col items-center justify-center p-6 text-center">
              
              {/* أيقونة المستخدم كعلامة مائية */}
              <HiOutlineUserCircle className="w-24 h-24 text-gray-200 mb-4" />
              
              <p className="text-sm font-bold text-gray-500">Profile Photo</
              p>
              <p className="text-xs text-gray-400 mt-1 max-w-[12rem]">Place your professional portrait here</p>
              
            </div>
            
          </div>
          {/* --- نهاية قسم الصورة --- */}
        </div>

        {/* باقي الصفحة بنفس التنسيق */}
        {/* خط فاصل */}
        <hr className="border-gray-100 mb-16" />

        {/* 2. قسم التعليم والأدوات (Education & Stack) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Education</h3>
            <p className="text-gray-500 mb-6 leading-relaxed">
              My academic foundation starts with a Bachelor's in Computer Engineering, followed by specialized postgraduate degrees in AI & Machine Learning, Data Science, and most recently, a Cloud Computing and DevOps Certification from Purdue University (2026).
            </p>
            <Link href="/projects" className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:text-[#1E3A8A] transition-colors border border-gray-200 px-6 py-2.5 rounded-full hover:border-[#1E3A8A]">
              View Projects <HiOutlineArrowRight />
            </Link>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Stack</h3>
            <p className="text-gray-500 mb-6 leading-relaxed">
              My technical toolkit revolves around C#, .NET 8, Clean Architecture, and Microservices. On the frontend, I build dynamic interfaces with React.js and Next.js. For DevOps and Cloud, I utilize Docker, Kubernetes, Terraform, and Azure.
            </p>
            <Link href="/stack" className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:text-[#1E3A8A] transition-colors border border-gray-200 px-6 py-2.5 rounded-full hover:border-[#1E3A8A]">
              View Stack <HiOutlineArrowRight />
            </Link>
          </div>
        </div>

        {/* خط فاصل */}
        <hr className="border-gray-100 mb-16" />

        {/* 3. قسم الخبرات (Experience) */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Experience</h3>
          <div className="flex flex-col gap-4">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="flex flex-col md:flex-row gap-4 md:gap-12 p-6 rounded-2xl bg-gray-50 hover:bg-blue-50/50 transition-colors border border-transparent hover:border-blue-100"
              >
                <div className="md:w-1/3 shrink-0">
                  <div className="flex items-center gap-2 mb-1">
                    <HiOutlineBriefcase className="text-[#1E3A8A]" />
                    <h4 className="font-bold text-gray-900">{exp.role}</h4>
                  </div>
                  <p className="text-sm text-gray-500 mb-1 pl-6">{exp.company}</p>
                  <p className="text-xs text-gray-400 font-mono pl-6">{exp.date}</p>
                </div>
                <div className="md:w-2/3 text-gray-600 leading-relaxed text-sm md:text-base">
                  {exp.description}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}