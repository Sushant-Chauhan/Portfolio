import { motion } from 'framer-motion';
import { GraduationCap, School } from 'lucide-react';

const educationData = [
  {
    institution: "Maharaja Surajmal Institute of Technology (GGSIPU)",
    location: "New Delhi",
    period: "2019 - 2023",
    degree: "Bachelor of Technology",
    field: "Information Technology",
    score: "CGPA: 9.5/10",
    icon: GraduationCap
  },
  {
    institution: "Aggarsain Public School",
    website: "https://www.aggarsainpublicschool.ac.in/",
    period: "2019",
    degree: "12th Grade",
    field: "Science",
    score: "Percentage: 90%",
    icon: School
  },
  {
    institution: "Wisdom World School",
    website: "https://wisdom.edu.in/",
    period: "2017",
    degree: "10th Grade",
    field: "SSC",
    score: "Percentage: 91.2%",
    icon: School
  }
];

export const Education = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Education</h2>
        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 rounded-lg p-6 mb-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-600 rounded-lg">
                  <edu.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {edu.website ? (
                          <a 
                            href={edu.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-indigo-400 transition-colors"
                          >
                            {edu.institution}
                          </a>
                        ) : (
                          edu.institution
                        )}
                      </h3>
                      <p className="text-indigo-400">{edu.location}</p>
                    </div>
                    <span className="text-gray-400">{edu.period}</span>
                  </div>
                  <div className="mt-4">
                    <p className="text-lg text-white">{edu.degree}</p>
                    <p className="text-gray-300">{edu.field}</p>
                    <p className="text-indigo-400 font-semibold mt-2">{edu.score}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}