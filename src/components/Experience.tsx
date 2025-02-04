import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase, Server, Database, Code } from 'lucide-react';

const experiences = [
  {
    title: "Software Engineer I",
    company: "Forcepoint",
    date: "July 2024 - Present",
    icon: Code,
    points: [
      "Collaborated in developing microservices in Golang through the implementation of event-driven architecture based on CQRS pattern",
      "Leveraged advanced technologies including Memcached, RabbitMQ, MySQL, and Docker",
      "Integrated AWS services including Event Bridge, SQS, and S3 buckets for robust cloud infrastructure",
      "Developed and executed comprehensive API test cases for the Forcepoint ONE Platform",
      "Identified critical issues and provided detailed bug reports with documentation and video walkthroughs",
      "Ensured high-quality deliverables through thorough testing and documentation processes"
    ]
  },
  {
    title: "Data Engineer - Assistant Manager",
    company: "Adani Group",
    date: "Sept 2023 - June 2024",
    icon: Database,
    points: [
      "Managed and implemented data storage solutions for the 'Your-Voice Matters' survey using Google BigQuery",
      "Integrated data from multiple platforms including WhatsApp, Email, and Teams",
      "Processed and managed monthly data from 12 national and 6 international business units",
      "Developed Python scripts using Pandas for robust data validation checks. Ensuring data accuracy, completeness, and compliance with predefined rules",
      "Created comprehensive documentation for the complete data engineering workflow"
    ]
  },
  {
    title: "Data Engineer Intern",
    company: "Adani Group",
    date: "Jan 2023 - Sept 2023",
    icon: Server,
    points: [
      "Developed ETL pipelines for loading data to Azure Synapse",
      "Created data migration scripts from SQL Server to MongoDB using Python",
      "Worked with diverse technologies: SQL Server, Microsoft Azure Cloud, PySpark",
      "Utilized Azure Databricks for data processing and transformation",
      "Performed data cleaning and redundancy removal operations",
      "Gained hands-on experience with cloud-based data solutions"
    ]
  },
  {
    title: "Apprentice",
    company: "REGex Software Services",
    date: "Jan 2022 - June 2022",
    icon: Briefcase,
    points: [
      "Developed frontend components using React and modern JavaScript",
      "Assisted in building RESTful APIs using Node.js",
      "Participated in code reviews and implemented feedback",
      "Created technical documentation for project components",
      "Collaborated with senior developers on feature implementation",
      "Gained practical experience in software development lifecycle"
    ]
  }
];

export const Experience = () => {
  return (
    <section className="py-20 bg-gray-900" id="experience">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Work Experience</h2>
        <VerticalTimeline>
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ 
                background: '#1f2937', 
                color: '#fff',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}
              contentArrowStyle={{ borderRight: '7px solid #1f2937' }}
              date={exp.date}
              iconStyle={{ background: '#4f46e5', color: '#fff' }}
              icon={<exp.icon />}
            >
              <div className="hover:scale-[1.02] transition-transform duration-200">
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <h4 className="text-lg text-indigo-400">{exp.company}</h4>
                <ul className="mt-4 space-y-2">
                  {exp.points.map((point, idx) => (
                    <li 
                      key={idx} 
                      className="text-gray-300 flex items-start gap-2"
                    >
                      <span className="text-indigo-400 mt-1.5">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}