import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import * as THREE from 'three';

export const CodeModel = () => {
  const meshRef = useRef<Mesh>(null);
  const particlesRef = useRef<Mesh>(null);

  // Create particles geometry
  const particlesGeometry = new THREE.BufferGeometry();
  const count = 5000;
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 20;
  }

  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.001;
    }
  });

  return (
    <>
      <mesh ref={meshRef}>
        <octahedronGeometry args={[2, 0]} />
        <meshStandardMaterial 
          color="#4f46e5" 
          wireframe 
          emissive="#4f46e5"
          emissiveIntensity={0.5}
        />
      </mesh>
      <points ref={particlesRef}>
        <primitive object={particlesGeometry} />
        <pointsMaterial 
          size={0.02} 
          color="#4f46e5" 
          sizeAttenuation={true} 
          transparent={true}
          alphaMap={new THREE.TextureLoader().load('https://assets.codepen.io/3685267/spark1.png')}
        />
      </points>
    </>
  );
}