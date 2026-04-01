import { 
  SiDotnet, 
  SiDocker, 
  SiKubernetes, 
  SiRedis, 
  SiReact, 
  SiTerraform 
} from "react-icons/si";
// استدعينا أيقونة Azure من حزمة Visual Studio لضمان عملها
import { VscAzure } from "react-icons/vsc";
// استدعينا أيقونة قاعدة البيانات من حزمة FontAwesome
import { FaDatabase } from "react-icons/fa";

export default function Stack() {
  const techStack = [
    {
      id: 1,
      name: ".NET 8 & C#",
      category: "Backend Framework",
      description: "My primary ecosystem for building robust, high-performance backend services, Minimal APIs, and scalable enterprise applications.",
      Icon: SiDotnet,
      color: "text-[#512BD4]", 
      bg: "bg-[#512BD4]/10"
    },
    {
      id: 2,
      name: "Docker",
      category: "Containerization",
      description: "I use Docker extensively to containerize backend services and microservices, ensuring consistent environments from development to production.",
      Icon: SiDocker,
      color: "text-[#2496ED]",
      bg: "bg-[#2496ED]/10"
    },
    {
      id: 3,
      name: "Kubernetes",
      category: "Orchestration",
      description: "My go-to tool for automating deployment, scaling, and management of containerized applications in high-traffic cloud environments.",
      Icon: SiKubernetes,
      color: "text-[#326CE5]",
      bg: "bg-[#326CE5]/10"
    },
    {
      id: 4,
      name: "Microsoft Azure",
      category: "Cloud Platform",
      description: "I leverage Azure for deploying cloud-native applications, utilizing its comprehensive suite of services for hosting, databases, and DevOps pipelines.",
      Icon: VscAzure, // استخدمنا الأيقونة المضمونة هنا
      color: "text-[#0078D4]",
      bg: "bg-[#0078D4]/10"
    },
    {
      id: 5,
      name: "SQL Server",
      category: "Relational Database",
      description: "Expertise in designing complex databases, writing optimized queries, and managing data flows using Entity Framework (EF Core) and Dapper.",
      Icon: FaDatabase, // استخدمنا الأيقونة المضمونة هنا
      color: "text-[#CC292B]",
      bg: "bg-[#CC292B]/10"
    },
    {
      id: 6,
      name: "Redis",
      category: "In-Memory Caching",
      description: "Integrated for advanced caching strategies to optimize high-frequency data retrieval, significantly reducing database load and response latency.",
      Icon: SiRedis,
      color: "text-[#DC382D]",
      bg: "bg-[#DC382D]/10"
    },
    {
      id: 7,
      name: "Terraform",
      category: "Infrastructure as Code",
      description: "I provision and manage robust cloud infrastructure safely and efficiently using Terraform, ensuring infrastructure is version-controlled and reproducible.",
      Icon: SiTerraform,
      color: "text-[#844FBA]",
      bg: "bg-[#844FBA]/10"
    },
    {
      id: 8,
      name: "React.js & Next.js",
      category: "Frontend Development",
      description: "While primarily backend-focused, I build dynamic, responsive user interfaces and seamlessly integrate them with backend microservices.",
      Icon: SiReact,
      color: "text-[#61DAFB]",
      bg: "bg-[#61DAFB]/10"
    }
  ];

  return (
    <div className="p-8 w-full mb-10">
      <div className="bg-white w-full rounded-[2rem] p-10 shadow-sm border border-gray-100">
        
        {/* 1. الترويسة */}
        <div className="mb-16 pt-6">
          <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            Available for Freelance
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            For My Skill Stack: <br />
            <span className="text-[#1E3A8A]">Engineering Meets Modern Tools</span>
          </h1>
          <p className="text-gray-500 text-lg mt-6 max-w-2xl leading-relaxed">
            A comprehensive look at the technologies, frameworks, and infrastructure tools I use to build scalable, high-performance systems and cloud-native applications.
          </p>
        </div>

        {/* 2. شبكة التقنيات (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techStack.map((tech) => (
            <div 
              key={tech.id} 
              className="group p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-14 h-14 rounded-xl ${tech.bg} ${tech.color} flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110`}>
                  <tech.Icon size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#1E3A8A] transition-colors">{tech.name}</h3>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-1">{tech.category}</p>
                </div>
              </div>
              
              <p className="text-gray-500 text-sm leading-relaxed mt-auto">
                {tech.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}