'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshTransmissionMaterial, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

function CoalRock({ position = [0, 0, 0], scale = 1, speed = 1 }) {
  const meshRef = useRef();

  // Create an irregular rock-like geometry
  const geometry = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(1.2, 2);
    const positions = geo.attributes.position;
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      const z = positions.getZ(i);
      // eslint-disable-next-line react-hooks/purity
      const noise = 0.85 + Math.random() * 0.35;
      positions.setXYZ(i, x * noise, y * noise, z * noise);
    }
    geo.computeVertexNormals();
    return geo;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003 * speed;
      meshRef.current.rotation.x += 0.001 * speed;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 * speed) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry} position={position} scale={scale} castShadow>
      <meshStandardMaterial
        color="#1a1a1a"
        roughness={0.3}
        metalness={0.8}
        envMapIntensity={2}
      />
    </mesh>
  );
}

function GoldenParticles({ count = 60 }) {
  const points = useRef();
  const particlePositions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // eslint-disable-next-line react-hooks/purity
      positions[i * 3] = (Math.random() - 0.5) * 6;
      // eslint-disable-next-line react-hooks/purity
      positions[i * 3 + 1] = (Math.random() - 0.5) * 6;
      // eslint-disable-next-line react-hooks/purity
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.05;
      points.current.rotation.x = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particlePositions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#d4a843"
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  );
}

function GlowRing() {
  const ringRef = useRef();

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI / 2 + Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <mesh ref={ringRef} position={[0, 0, 0]}>
      <torusGeometry args={[2, 0.015, 16, 100]} />
      <meshBasicMaterial color="#d4a843" transparent opacity={0.3} />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} color="#d4a843" />
      <directionalLight position={[-3, -2, 4]} intensity={0.5} color="#ffffff" />
      <spotLight position={[0, 5, 0]} intensity={0.8} color="#d4a843" penumbra={0.5} />

      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
        <CoalRock position={[0, 0, 0]} scale={1} speed={1} />
      </Float>

      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
        <CoalRock position={[-2.2, 0.8, -1]} scale={0.45} speed={1.5} />
      </Float>

      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.6}>
        <CoalRock position={[2, -0.5, -0.5]} scale={0.55} speed={0.8} />
      </Float>

      <Float speed={2.5} rotationIntensity={0.6} floatIntensity={0.7}>
        <CoalRock position={[1.5, 1.2, 0.5]} scale={0.3} speed={2} />
      </Float>

      <GoldenParticles count={80} />
      <GlowRing />

      <ContactShadows
        position={[0, -2, 0]}
        opacity={0.4}
        scale={8}
        blur={2}
        far={4}
        color="#d4a843"
      />

      <Environment preset="night" />
    </>
  );
}

export default function CoalScene3D({ className = '' }) {
  return (
    <div className={className} style={{ width: '100%', height: '100%' }} aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
