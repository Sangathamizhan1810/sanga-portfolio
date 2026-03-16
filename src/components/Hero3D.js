import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField = () => {
  const pointsRef = useRef();
  
  // Create a memoized geometry for optimized performance
  const [positions, colors] = useMemo(() => {
    const count = 1000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const color = new THREE.Color();
    
    for (let i = 0; i < count; i++) {
        // Spread particles out
        positions[i * 3] = (Math.random() - 0.5) * 50; // x
        positions[i * 3 + 1] = (Math.random() - 0.5) * 50; // y
        positions[i * 3 + 2] = (Math.random() - 0.5) * 50; // z

        // Create a mix of Cyan and Purple colors
        const mix = Math.random();
        if (mix > 0.5) {
            color.set('#00f0ff');
        } else {
            color.set('#764ba2');
        }

        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;
    }
    return [positions, colors];
  }, []);

  useFrame((state, delta, xrFrame) => {
    if (pointsRef.current) {
        pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
        pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.02;
    }
    state.invalidate();
  });

  return (
    <points ref={pointsRef}>
        <bufferGeometry>
            <bufferAttribute 
                attach="attributes-position"
                count={positions.length / 3}
                array={positions}
                itemSize={3}
            />
            <bufferAttribute 
                attach="attributes-color"
                count={colors.length / 3}
                array={colors}
                itemSize={3}
            />
        </bufferGeometry>
        <pointsMaterial 
            size={0.1}
            vertexColors
            transparent
            opacity={0.8}
            sizeAttenuation
        />
    </points>
  );
};

const AbstractShape = () => {
    const meshRef = useRef();
    
    useFrame((state) => {
        meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
        meshRef.current.rotation.y += 0.01;
        state.invalidate();
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <mesh ref={meshRef} position={[0, 0, -5]}>
                <torusKnotGeometry args={[9, 3, 100, 16]} />
                <meshStandardMaterial 
                    color="#00f0ff" 
                    wireframe 
                    transparent 
                    opacity={0.15}
                    emissive="#00f0ff"
                    emissiveIntensity={0.2}
                />
            </mesh>
        </Float>
    );
};

const Hero3D = () => {
  return (
    <div className="canvas-container">
      <Canvas frameloop="demand">
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={75} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00f0ff" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#ff003c" />
        
        <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
        
        <ParticleField />
        <AbstractShape />
      </Canvas>
    </div>
  );
};

export default Hero3D;
