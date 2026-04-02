import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      id: "where-is", 
      title: "Where Is (Commercial Directory)",
      category: "CLOUD & ARCHITECTURE",
      description: "A comprehensive geo-location commercial directory with a highly performant Geo-Spatial search engine.",
      techStack: [".NET 8", "Redis", "Docker"],
      bgColor: "bg-emerald-500",
    },
    {
      id: "moqla",
      title: "Moqla - University Platform",
      category: "MICROSERVICES & REACT",
      description: "Architectural transition of legacy monolithic systems into highly scalable Microservices.",
      techStack: [".NET Core", "React.js", "Docker"],
      bgColor: "bg-[#1E3A8A]",
    }
  ];

  return (
    <div className="p-4 md:p-8 w-full mb-10">
      <div className="bg-white w-full rounded-[2rem] p-6 md:p-10 shadow-sm border border-gray-100">
        <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-12">Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link 
              href={`/projects/${project.id}`} 
              key={project.id} 
              className="group block"
            >
              <div className={`aspect-video rounded-2xl ${project.bgColor} mb-4 overflow-hidden relative flex items-center justify-center transition-transform group-hover:-translate-y-2`}>
                <span className="text-white/20 font-black text-4xl">Preview</span>
              </div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{project.category}</p>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#1E3A8A] transition-colors">{project.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}