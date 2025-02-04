import { motion } from 'framer-motion';

const tools = [
  {
    name: "Node.js",
    icon: "https://nodejs.org/static/images/logo.svg"
  },
  {
    name: "React",
    icon: "https://reactjs.org/logo-180x180.png"
  },
  {
    name: "TypeScript",
    icon: "https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png"
  },
  {
    name: "JavaScript",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
  },
  {
    name: "Python",
    icon: "https://www.python.org/static/community_logos/python-logo.png"
  },
  {
    name: "Go",
    icon: "https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png"
  },
  {
    name: "Docker",
    icon: "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png"
  },
  {
    name: "Kubernetes",
    icon: "https://kubernetes.io/images/favicon.png"
  },
  {
    name: "AWS",
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
  }
];

export const Tools = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Tools</h2>
        
        <div className="grid grid-cols-3 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-white rounded-full p-3 shadow-lg">
                <img 
                  src={tool.icon} 
                  alt={tool.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-gray-300 mt-2 text-center">{tool.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}