import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import * as THREE from 'three';

export const LaptopModel = () => {
  const laptopRef = useRef<Mesh>(null);

  useFrame(() => {
    if (laptopRef.current) {
      laptopRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={laptopRef}>
      <boxGeometry args={[2, 0.1, 1.5]} />
      <meshStandardMaterial color="#4f46e5" />
      <mesh position={[0, 0.6, -0.7]} rotation={[0.5, 0, 0]}>
        <boxGeometry args={[2, 1.2, 0.1]} />
        <meshStandardMaterial color="#4f46e5" />
      </mesh>
    </mesh>
  );
}