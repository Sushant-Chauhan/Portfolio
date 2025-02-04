import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

const achievements = [
  "I got Rank 1 in college and Rank 6 in University",
  "Solved 700+ problems in Java Programming Language",
  "Got Rank 1586/17k+ Participants in Weekly Contest 323 Leetcode",
  "Got Global Rank: 346 in codechef (4⭐ARTES569)",
  "Managed student placements and internships, coordinating with employers, educational institutions, and students to ensure successful placements and a positive learning experience",
  "Branch Topper of Computer Science & Engineering Department (2019 - 2023)",
  "Selected for 1 year Free JEE preparation (Super 30) CSRL(Centre for Social Responsibility and Leadership)",
  "National Cadet Corps (Feb 2015 - Nov 2019) Note : Cadet, Certificate : 'A' and 'B'"
];

export const Achievements = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h3 className="text-xl text-indigo-400 text-center mb-2">SOME GLIMPSES ON...</h3>
        <h1 className="text-4xl font-bold text-white mb-12 text-center">Achievements.</h1>
        
        <div className="max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 mb-6"
            >
              <div className="p-2 bg-indigo-600 rounded-lg shrink-0">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <p className="text-gray-300 text-lg">{achievement}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}