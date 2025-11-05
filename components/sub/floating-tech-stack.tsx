"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

// Glowing AI Node with better effects
const AINode = ({ 
  position, 
  size = 0.25,
  color = "#7D43FF",
  pulseSpeed = 1.5
}: { 
  position: [number, number, number], 
  size?: number,
  color?: string,
  pulseSpeed?: number
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current && glowRef.current) {
      const pulse = 1 + Math.sin(state.clock.elapsedTime * pulseSpeed) * 0.3;
      meshRef.current.scale.set(pulse, pulse, pulse);
      glowRef.current.scale.set(pulse * 1.5, pulse * 1.5, pulse * 1.5);
      
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group position={position}>
      {/* Main Node */}
      <Sphere ref={meshRef} args={[size, 32, 32]}>
        <meshStandardMaterial 
          color={color}
          emissive={color}
          emissiveIntensity={1.2}
          transparent 
          opacity={0.95}
          metalness={0.8}
          roughness={0.2}
        />
      </Sphere>
      
      {/* Glow Effect */}
      <Sphere ref={glowRef} args={[size * 0.6, 16, 16]}>
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.3}
        />
      </Sphere>
    </group>
  );
};

// Animated connection lines with gradient effect
const NeuralLine = ({ 
  start, 
  end, 
  color = "#7D43FF" 
}: { 
  start: [number, number, number], 
  end: [number, number, number],
  color?: string
}) => {
  const lineRef = useRef<THREE.Line>(null);
  
  useFrame((state) => {
    if (lineRef.current) {
      const material = lineRef.current.material as THREE.LineBasicMaterial;
      material.opacity = 0.4 + Math.sin(state.clock.elapsedTime * 3) * 0.3;
    }
  });

  const points = useMemo(() => {
    return [new THREE.Vector3(...start), new THREE.Vector3(...end)];
  }, [start, end]);

  return (
    <line ref={lineRef as any}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length}
          array={new Float32Array(points.flatMap(p => [p.x, p.y, p.z]))}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color={color} transparent opacity={0.5} linewidth={2} />
    </line>
  );
};

// Particle field effect
const ParticleField = () => {
  const points = useRef<THREE.Points>(null);
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(300 * 3);
    const colors = new Float32Array(300 * 3);
    
    for (let i = 0; i < 300; i++) {
      // Spread particles in a sphere
      const radius = 6 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      // Random colors between purple, cyan, and green
      const colorChoice = Math.random();
      if (colorChoice < 0.33) {
        colors[i * 3] = 0.49; colors[i * 3 + 1] = 0.26; colors[i * 3 + 2] = 1; // Purple
      } else if (colorChoice < 0.66) {
        colors[i * 3] = 0; colors[i * 3 + 1] = 0.85; colors[i * 3 + 2] = 1; // Cyan
      } else {
        colors[i * 3] = 0; colors[i * 3 + 1] = 1; colors[i * 3 + 2] = 0.53; // Green
      }
    }
    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.05;
      points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.2;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={300}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={300}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.05} 
        vertexColors 
        transparent 
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

// Main AI Brain with improved visuals
const AIBrainStructure = () => {
  const groupRef = useRef<THREE.Group>(null);
  const orbRef = useRef<THREE.Mesh>(null);

  // Create a 3D neural network structure
  const nodes = useMemo(() => {
    const result = [];
    // Create spherical distribution of nodes
    for (let i = 0; i < 20; i++) {
      const radius = 2 + Math.random() * 2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      const colors = ["#7D43FF", "#00D9FF", "#00FF88", "#FF6B35", "#B49BFF"];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      result.push({ position: [x, y, z] as [number, number, number], color, size: 0.15 + Math.random() * 0.15 });
    }
    return result;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.15;
    }
    
    if (orbRef.current) {
      orbRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      orbRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#7D43FF" />
      <pointLight position={[-10, -10, 5]} intensity={1} color="#00D9FF" />
      <pointLight position={[0, 0, 10]} intensity={1.2} color="#00FF88" />
      <spotLight position={[0, 10, 0]} intensity={0.8} color="#B49BFF" angle={0.6} penumbra={1} />
      
      <ParticleField />
      
      <group ref={groupRef}>
        {/* Neural Network Connections */}
        {nodes.map((node, i) => {
          // Connect each node to a few nearby nodes
          return nodes.slice(i + 1, i + 4).map((targetNode, j) => (
            <NeuralLine
              key={`line-${i}-${j}`}
              start={node.position}
              end={targetNode.position}
              color={node.color}
            />
          ));
        })}

        {/* AI Nodes */}
        {nodes.map((node, i) => (
          <Float 
            key={`node-${i}`}
            speed={1.5 + Math.random()} 
            rotationIntensity={0.5} 
            floatIntensity={0.5}
          >
            <AINode
              position={node.position}
              size={node.size}
              color={node.color}
              pulseSpeed={1 + i * 0.1}
            />
          </Float>
        ))}

        {/* Central AI Brain Core */}
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.3}>
          <Sphere ref={orbRef} args={[1, 64, 64]}>
            <MeshDistortMaterial
              color="#7D43FF"
              emissive="#00D9FF"
              emissiveIntensity={0.6}
              transparent
              opacity={0.8}
              distort={0.4}
              speed={2}
              roughness={0.2}
              metalness={0.8}
            />
          </Sphere>
        </Float>

        {/* Outer glow rings */}
        {[1.5, 2, 2.5].map((radius, i) => (
          <Float key={`ring-${i}`} speed={1 + i * 0.3} rotationIntensity={0.2} floatIntensity={0.2}>
            <Sphere args={[radius, 32, 32]}>
              <meshBasicMaterial
                color={i === 0 ? "#7D43FF" : i === 1 ? "#00D9FF" : "#00FF88"}
                transparent
                opacity={0.1 - i * 0.02}
                wireframe
              />
            </Sphere>
          </Float>
        ))}
      </group>
    </>
  );
};

export const FloatingTechStack = () => {
  return (
    <div className="w-full h-[500px] lg:h-[600px]">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <AIBrainStructure />
      </Canvas>
    </div>
  );
};
