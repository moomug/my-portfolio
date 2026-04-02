import Link from "next/link";
import { HiOutlineArrowLeft } from "react-icons/hi2";

export default function Stack() {
  const techCategories = [
    {
      title: "Backend & Core",
      skills: [".NET 8", "C#", "ASP.NET Core", "Microservices", "Entity Framework", "RESTful APIs"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["Docker", "Azure", "CI/CD Pipelines", "Git / GitHub", "Linux", "Nginx"]
    },
    {
      title: "Databases & Caching",
      skills: ["SQL Server", "PostgreSQL", "Redis", "MongoDB"]
    },
    {
      title: "Frontend & Architecture",
      skills: ["Next.js", "React", "Tailwind CSS", "Clean Architecture", "Design Patterns", "SOLID"]
    }
  ];

  return (
    <div className="p-4 md:p-8 w-full animate-in fade-in duration-500 mb-10">
      <div className="bg-white w-full rounded-[2rem] p-6 md:p-12 shadow-sm border border-gray-100">
        
        {/* زر الرجوع */}
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-900 transition-colors font-medium mb-8">
          <HiOutlineArrowLeft /> Back home
        </Link>

        {/* حالة التوفر المحدثة */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            OPEN TO NEW OPPORTUNITIES
          </span>
        </div>

        {/* العنوان بخط أصغر وأرتب */}
        <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">Technical Stack</h1>
        <p className="text-gray-500 text-sm md:text-lg leading-relaxed max-w-2xl mb-12">
          A comprehensive list of the tools, languages, and frameworks I use to build scalable and robust applications.
        </p>

        {/* التقنيات (كروت مرتبة) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 p-6 md:p-8 rounded-3xl border border-gray-100">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="bg-white px-3 py-1.5 md:px-4 md:py-2 border border-gray-200 rounded-xl text-xs md:text-sm font-bold text-gray-700 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}