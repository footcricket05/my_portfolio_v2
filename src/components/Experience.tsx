import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      title: "AI/ML Developer",
      company: "Stick & Dot | Remote",
      date: "Dec 2023 - Present",
      description: [
        "Spearheading AI/ML projects, leveraging cutting-edge technologies to drive innovation.",
        "Maintaining strict confidentiality until the official launch of initiatives"
      ]
    },
    {
      title: "Internship Trainee",
      company: "Centre for Artificial Intelligence & Robotics, DRDO | Bangalore",
      date: "Oct 2024 - Dec 2024",
      description: [
        "Analyzed vessel density (signals/km²) across ports within India's EEZ using AIS data.",
        "Integrated data flows across Neo4j, PostgreSQL and HBase with Apache NiFi, improving efficiency by 35%.",
        "Implemented HPA for K8s clusters using GPU metrics with Prometheus, optimizing resource usage by 40%."
      ]
    },
    {
      title: "Data Analytics Intern",
      company: "ONEMi.in (Kissht.com) Technology Solutions Pvt. Ltd. | Mumbai",
      date: "Feb 2023 – May 2023",
      description: [
        "Analyzed user data for loan types and delinquency rates, boosting marketing effectiveness by 15%.",
        "Conducted comparative analysis of ticket size and loan frequency, improving competitive positioning by 20%.",
        "Led conversion of an R project to Python, reducing project time by 25% and enhancing code maintainability."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-[var(--bg-secondary)]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-center text-[var(--text-primary)] mb-16">Experience</h2>
        
        <VerticalTimeline lineColor="var(--accent)">
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ 
                background: 'var(--bg-primary)',
                color: 'var(--text-primary)',
                boxShadow: '0 3px 0 var(--accent)'
              }}
              contentArrowStyle={{ borderRight: '7px solid var(--bg-primary)' }}
              date={exp.date}
              iconStyle={{ background: 'var(--accent)', color: '#fff' }}
              icon={<Briefcase />}
            >
              <h3 className="text-xl font-bold">{exp.title}</h3>
              <h4 className="text-[var(--accent)]">{exp.company}</h4>
              <ul className="mt-4 list-disc list-inside">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-[var(--text-secondary)] mb-2">{item}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </motion.div>
    </section>
  );
};