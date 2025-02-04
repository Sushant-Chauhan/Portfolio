import { useState } from 'react';
import { motion } from 'framer-motion';

type ProjectCategory = 'Golang' | 'Java' | 'React' | 'Flask' | 'Algo';

const projects = {
  Golang: [
    {
      title: "Microservices Platform",
      description: "Distributed system with gRPC communication",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Real-time Analytics Engine",
      description: "High-performance data processing system",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Blockchain Framework",
      description: "Custom blockchain implementation",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
    }
  ],
  Java: [
    // Similar structure for other categories
    // Adding placeholder projects for each category
  ]
} as Record<ProjectCategory, Array<{ title: string; description: string; image: string; }>>;

export const Projects = () => {
  const [category, setCategory] = useState<ProjectCategory>('Golang');

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Projects</h2>
        
        <div className="flex justify-center gap-4 mb-12">
          {Object.keys(projects).map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat as ProjectCategory)}
              className={`px-6 py-2 rounded-full ${
                category === cat 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-700 text-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {projects[category]?.map((project, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-gray-900 rounded-lg overflow-hidden"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}