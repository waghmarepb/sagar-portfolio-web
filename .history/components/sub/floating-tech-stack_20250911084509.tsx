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
  planetSize = 0.3,
  color = "#7D43FF"
}: { 
  position: [number, number, number], 
  iconPath: string, 
  orbitRadius: number, 
  orbitSpeed: number,
  planetSize?: number,
  color?: string
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
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
          color={color}
          transparent 
          opacity={0.9}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </Sphere>
    </Float>
  );
};

const GalaxyParticles = () => {
  const points = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(200 * 3);
    for (let i = 0; i < 200; i++) {
      const radius = Math.random() * 8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.cos(phi);
      positions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={200}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#FFA500" transparent opacity={0.6} />
    </points>
  );
};

const GalaxySystem = () => {
  const planets = [
    { name: "Flutter", iconPath: "/skills/flutter.svg", orbitRadius: 2.5, orbitSpeed: 0.3, planetSize: 0.25 },
    { name: "Dart", iconPath: "/skills/dart.svg", orbitRadius: 3.0, orbitSpeed: 0.25, planetSize: 0.2 },
    { name: "Python", iconPath: "/skills/python.svg", orbitRadius: 3.5, orbitSpeed: 0.2, planetSize: 0.3 },
    { name: "React", iconPath: "/skills/react.png", orbitRadius: 4.0, orbitSpeed: 0.18, planetSize: 0.25 },
    { name: "Node", iconPath: "/skills/node.png", orbitRadius: 4.5, orbitSpeed: 0.15, planetSize: 0.2 },
    { name: "Firebase", iconPath: "/skills/firebase.png", orbitRadius: 5.0, orbitSpeed: 0.12, planetSize: 0.25 },
    { name: "MongoDB", iconPath: "/skills/mongodb.png", orbitRadius: 5.5, orbitSpeed: 0.1, planetSize: 0.2 },
    { name: "TypeScript", iconPath: "/skills/ts.png", orbitRadius: 6.0, orbitSpeed: 0.08, planetSize: 0.22 },
  ];

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 0, 0]} intensity={2} color="#FFA500" />
      <pointLight position={[0, 0, 0]} intensity={1} color="#FF6B35" />
      
      <GalaxyParticles />
      
      {planets.map((planet, index) => (
        <Planet
          key={planet.name}
          position={[0, 0, 0]}
          iconPath={planet.iconPath}
          orbitRadius={planet.orbitRadius}
          orbitSpeed={planet.orbitSpeed}
          planetSize={planet.planetSize}
        />
      ))}
      
      {/* Central Sun */}
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.2}>
        <Sphere position={[0, 0, 0]} args={[0.8, 32, 32]}>
          <meshStandardMaterial
            color="#FFA500"
            emissive="#FF6B35"
            emissiveIntensity={0.5}
            transparent
            opacity={0.9}
          />
        </Sphere>
      </Float>
      
      {/* Sun glow effect */}
      <Float speed={1} rotationIntensity={0.1} floatIntensity={0.1}>
        <Sphere position={[0, 0, 0]} args={[1.2, 32, 32]}>
          <meshStandardMaterial
            color="#FFA500"
            transparent
            opacity={0.3}
            emissive="#FFA500"
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
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <GalaxySystem />
      </Canvas>
    </div>
  );
};
