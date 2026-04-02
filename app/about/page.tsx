import Link from "next/link";
import { 
  HiOutlineArrowRight, 
  HiOutlineBriefcase, 
  HiOutlineUserCircle 
} from "react-icons/hi2";

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
    <div className="p-4 md:p-8 w-full">
      <div className="bg-white w-full rounded-[2rem] p-6 md:p-10 shadow-sm border border-gray-100">
        
        
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 mb-16 pt-2 md:pt-6">
          <div className="lg:flex-[2] w-full">
            <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold tracking-wide mb-5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              OPEN TO NEW OPPORTUNITIES
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
              Cloud & DevOps Oriented <br className="hidden md:block"/>
              <span className="text-[#1E3A8A]">Senior .NET Engineer.</span>
            </h1>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-3xl">
              I'm an accomplished Senior Full-Stack .NET Engineer with over 6 years of experience architecting and developing robust, highly scalable backend systems and cloud-native applications. Specializing in the modern .NET ecosystem, Clean Architecture, and Infrastructure as Code (IaC).
            </p>
          </div>
          
  
          <div className="relative group lg:flex-[1] w-full max-w-sm flex justify-center lg:justify-end mt-10 lg:mt-0">
        
            <div className="absolute inset-0 bg-[#1E3A8A] rounded-2xl shadow-xl transform rotate-6 scale-105 group-hover:rotate-0 transition-transform duration-500"></div>
            
           
            <div className="relative w-full aspect-[4/3] lg:max-h-[350px] bg-gray-100 rounded-2xl shadow-2xl border-8 border-white overflow-hidden transform -rotate-3 group-hover:rotate-0 transition-transform duration-500 flex flex-col items-center justify-center p-6 text-center">
              <HiOutlineUserCircle className="w-16 h-16 md:w-20 md:h-20 text-gray-200 mb-2" />
              <p className="text-sm font-bold text-gray-500">Professional Photo</p>
            </div>
          </div>
        </div>

        <hr className="border-gray-100 mb-16" />

    
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Education & Certifications</h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors">
                <h4 className="font-bold text-gray-900 text-sm">Post-Graduate Program in Cloud & DevOps</h4>
                <p className="text-xs text-[#1E3A8A] font-semibold mt-1">Purdue University • 2026</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors">
                <h4 className="font-bold text-gray-900 text-sm">Post-Graduate Program in AI & Machine Learning</h4>
                <p className="text-xs text-[#1E3A8A] font-semibold mt-1">UT Austin • 2023</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors">
                <h4 className="font-bold text-gray-900 text-sm">Bachelor of Computer Engineering</h4>
                <p className="text-xs text-[#1E3A8A] font-semibold mt-1">Suez Canal University</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Engineering Philosophy</h3>
            <p className="text-gray-500 mb-6 leading-relaxed text-sm md:text-base">
              My technical toolkit revolves around C#, .NET 8, Clean Architecture, and Microservices. 
              I believe in building systems that are not just functional, but maintainable and 
              scalable under heavy loads.
            </p>
            <Link href="/stack" className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:text-[#1E3A8A] transition-colors border border-gray-200 px-6 py-2.5 rounded-full hover:border-[#1E3A8A] text-sm">
              View Technical Stack <HiOutlineArrowRight />
            </Link>
          </div>
        </div>

        <hr className="border-gray-100 mb-16" />


        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Work Experience</h3>
          <div className="flex flex-col gap-4">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="flex flex-col md:flex-row gap-4 md:gap-12 p-6 rounded-2xl bg-gray-50 hover:bg-blue-50/50 transition-colors border border-transparent hover:border-blue-100"
              >
                <div className="md:w-1/3 shrink-0">
                  <div className="flex items-center gap-2 mb-1">
                    <HiOutlineBriefcase className="text-[#1E3A8A]" />
                    <h4 className="font-bold text-gray-900 text-sm md:text-base">{exp.role}</h4>
                  </div>
                  <p className="text-sm text-gray-500 mb-1 pl-6">{exp.company}</p>
                  <p className="text-xs text-gray-400 font-mono pl-6 uppercase">{exp.date}</p>
                </div>
                <div className="md:w-2/3 text-gray-600 leading-relaxed text-sm">
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