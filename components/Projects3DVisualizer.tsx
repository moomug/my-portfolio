"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import { HiOutlineArrowRight } from "react-icons/hi2";

function InteractiveCube() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);


  useFrame((state, delta) => {

    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.15;

  
    if (!hovered) {
        meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, state.mouse.y * 0.2, 0.1);
        meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, state.mouse.x * 0.2, 0.1);
    }
  });

  return (
    <mesh
      ref={meshRef}
      scale={active ? 1.5 : 1.3}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
 
      <boxGeometry args={[2, 2, 2]} />
      
    
      <MeshDistortMaterial
        color={hovered ? "#1E3A8A" : "#F3F4F6"} 
        clearcoat={1}
        clearcoatRoughness={0.1}
        metalness={0.2}
        roughness={0.3}
        distort={hovered ? 0.4 : 0.2} 
        speed={hovered ? 4 : 2}
      />


      <Text
        position={[0, 0, 1.1]} 
        fontSize={0.2}
        color={hovered ? "white" : "#1E3A8A"}
        anchorX="center"
        anchorY="middle"
        font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZhrib2Bg-4.woff" 
      >
        {hovered ? "View All Projects" : "Next.js 14 Power"}
      </Text>
    </mesh>
  );
}

export default function Projects3DVisualizer() {

  const scrollToProjects = () => {
    window.scrollTo({
      top: window.innerHeight * 0.8, 
      behavior: "smooth"
    });
  };

  return (
    <div className="w-full h-full relative group cursor-pointer" onClick={scrollToProjects}>
     
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 50 }} 
        dpr={[1, 2]}
        className="w-full h-full"
      >
   
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#white" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#blue" />

       
        <InteractiveCube />

      
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>

 
      <div className="absolute bottom-6 right-6 bg-[#1E3A8A] text-white px-5 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-xl shadow-blue-200">
          Scroll for More Work <HiOutlineArrowRight />
      </div>

      <div className="lg:hidden absolute top-4 left-4 text-gray-400 text-xs font-medium border border-gray-100 bg-white/80 px-3 py-1.5 rounded-full backdrop-blur-sm">
          Tap the 3D Object for More
      </div>
    </div>
  );
}