"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { HiOutlineArrowLeft, HiOutlineGlobeAlt, HiOutlineCodeBracket } from "react-icons/hi2";

export default function ProjectCaseStudy() {
  const params = useParams();
  const { id } = params;


  return (
    <div className="p-4 md:p-8 w-full">
      <div className="bg-white w-full rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
        
       
        <div className="p-6 md:p-10 border-b border-gray-50 flex items-center justify-between">
          <Link href="/projects" className="flex items-center gap-2 text-gray-400 hover:text-gray-900 transition-colors font-semibold">
            <HiOutlineArrowLeft /> Back
          </Link>
          <div className="flex gap-3">
             <button className="p-3 rounded-full bg-gray-900 text-white hover:scale-110 transition-transform"><HiOutlineGlobeAlt size={20}/></button>
             <button className="p-3 rounded-full bg-gray-100 text-gray-900 hover:scale-110 transition-transform"><HiOutlineCodeBracket size={20}/></button>
          </div>
        </div>

        
        <div className="p-6 md:p-16">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-7xl font-black text-gray-900 mb-8 leading-tight">
              {id === "where-is" ? "Where Is: Geo-Spatial Directory" : "Moqla: Academic Platform"}
            </h1>
            
           
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16 py-8 border-y border-gray-100">
               <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Service</p>
                  <p className="font-bold text-gray-900">Backend Architecture</p>
               </div>
               <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Year</p>
                  <p className="font-bold text-gray-900">2024 - 2026</p>
               </div>
               <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Tech Stack</p>
                  <p className="font-bold text-gray-900">.NET 8, Redis, Azure</p>
               </div>
            </div>

         
            <div className="space-y-12">
               <div className="aspect-video bg-gray-50 rounded-[2.5rem] flex items-center justify-center text-gray-200 font-bold border border-gray-100">
                  Main Presentation Image (Mockup)
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="aspect-square bg-gray-50 rounded-[2.5rem] flex items-center justify-center text-gray-200 font-bold border border-gray-100">Mobile UI Views</div>
                  <div className="aspect-square bg-[#1E3A8A]/5 rounded-[2.5rem] flex items-center justify-center text-[#1E3A8A]/20 font-bold border border-blue-50">System Architecture</div>
               </div>
            </div>

          
            <div className="mt-20">
               <h3 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h3>
               <p className="text-gray-500 text-lg leading-relaxed mb-12">
                  As a Senior .NET Engineer, my task was to ensure high availability and sub-second 
                  search response times for a database containing millions of commercial records. 
                  The challenge was implementing an efficient Geo-Spatial search that works 
                  perfectly across all regions of Saudi Arabia.
               </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}