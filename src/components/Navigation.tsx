import { Home, User, Briefcase, Code, Mail } from 'lucide-react';

export const Navigation = () => {
  return (
    <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-gray-800/90 backdrop-blur-sm px-6 py-3 rounded-full flex gap-8">
        <a href="#home" className="text-gray-400 hover:text-white transition-colors">
          <Home className="w-6 h-6" />
        </a>
        <a href="#experience" className="text-gray-400 hover:text-white transition-colors">
          <Briefcase className="w-6 h-6" />
        </a>
        <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
          <Code className="w-6 h-6" />
        </a>
        <a href="#education" className="text-gray-400 hover:text-white transition-colors">
          <User className="w-6 h-6" />
        </a>
        <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
          <Mail className="w-6 h-6" />
        </a>
      </div>
    </nav>
  );
}