import { motion } from 'framer-motion';

const profiles = [
  {
    name: "LeetCode",
    icon: "https://leetcode.com/static/images/LeetCode_logo_rvs.png",
    link: "https://leetcode.com"
  },
  {
    name: "GeeksForGeeks",
    icon: "https://media.geeksforgeeks.org/gfg-gg-logo.svg",
    link: "https://geeksforgeeks.org"
  },
  {
    name: "GitHub",
    icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    link: "https://github.com"
  }
];

export const ProfileSection = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Profile Section</h2>
        
        <div className="flex justify-center gap-8">
          {profiles.map((profile, index) => (
            <motion.a
              key={index}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-700 p-4 rounded-lg"
            >
              <img 
                src={profile.icon} 
                alt={profile.name}
                className="w-16 h-16 object-contain"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}