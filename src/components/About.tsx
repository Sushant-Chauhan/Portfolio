import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { LaptopModel } from './LaptopModel';

export const About = () => {
  return (
    <section className="relative py-20 bg-gray-900/95" id="about">
      <div className="absolute inset-0 opacity-20">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <LaptopModel />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-12">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I am a passionate technology professional with a strong foundation in Data Engineering 
            and Software Development. After completing my undergraduation in Information Technology 
            from MSIT College, GGSIPU, New Delhi, I've had the privilege of working with leading 
            organizations like Adani Group and Forcepoint.
          </p>
        </motion.div>
      </div>
    </section>
  );
}