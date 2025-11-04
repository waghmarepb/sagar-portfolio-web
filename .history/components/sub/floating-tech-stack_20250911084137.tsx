"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, useTexture } from "@react-three/drei";
import * as THREE from "three";

const Planet = ({ 
  position, 
  iconPath, 
  orbitRadius, 
  orbitSpeed, 
  planetSize = 0.3 
}: { 
  position: [number, number, number], 
  iconPath: string, 
  orbitRadius: number, 
  orbitSpeed: number,
  planetSize?: number 
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useTexture(iconPath);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime * orbitSpeed;
      meshRef.current.position.x = Math.cos(time) * orbitRadius;
      meshRef.current.position.z = Math.sin(time) * orbitRadius;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={0.3}>
      <Sphere ref={meshRef} position={position} args={[planetSize, 32, 32]}>
        <meshStandardMaterial 
          map={texture} 
          transparent 
          opacity={0.9}
          emissive="#ffffff"
          emissiveIntensity={0.1}
        />
      </Sphere>
    </Float>
  );
};

const FloatingParticles = () => {
  const points = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(100 * 3);
    for (let i = 0; i < 100; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={100}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#7D43FF" transparent opacity={0.4} />
    </points>
  );
};

const TechStack3D = () => {
  const techIcons = [
    { name: "Flutter", position: [2, 1, -2] as [number, number, number], color: "#02569B" },
    { name: "Dart", position: [-2, 0.5, -1] as [number, number, number], color: "#0175C2" },
    { name: "Python", position: [1, -1, -3] as [number, number, number], color: "#3776AB" },
    { name: "React", position: [-1, 2, -2] as [number, number, number], color: "#61DAFB" },
    { name: "Node", position: [3, -0.5, -1] as [number, number, number], color: "#339933" },
    { name: "Firebase", position: [-3, 1.5, -2] as [number, number, number], color: "#FFA000" },
    { name: "MongoDB", position: [0, -2, -1] as [number, number, number], color: "#47A248" },
    { name: "TypeScript", position: [2.5, 2, -3] as [number, number, number], color: "#3178C6" },
  ];

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#7D43FF" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00D4FF" />
      
      <FloatingParticles />
      
      {techIcons.map((tech, index) => (
        <TechIcon
          key={tech.name}
          position={tech.position}
          color={tech.color}
        >
          {tech.name}
        </TechIcon>
      ))}
      
      {/* Central glowing sphere */}
      <Float speed={3} rotationIntensity={0.5} floatIntensity={0.5}>
        <Sphere position={[0, 0, 0]} args={[0.5, 32, 32]}>
          <meshStandardMaterial
            color="#7D43FF"
            transparent
            opacity={0.3}
            emissive="#7D43FF"
            emissiveIntensity={0.2}
          />
        </Sphere>
      </Float>
    </>
  );
};

export const FloatingTechStack = () => {
  return (
    <div className="w-full h-[500px] lg:h-[600px]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <TechStack3D />
      </Canvas>
    </div>
  );
};
