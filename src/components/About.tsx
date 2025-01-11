import { motion } from 'framer-motion';
import { Code2, Database, Cpu, Network } from 'lucide-react';

export const About = () => {
  const skills = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Programming",
      items: ["Python", "C++", "JavaScript", "SQL", "TypeScript"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "AI/ML & Data",
      items: ["TensorFlow", "PyTorch", "LangChain", "PySpark", "AI Agents"]
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Backend",
      items: ["Node.js", "Flask", "PostgreSQL", "Apache Kafka", "Supabase"]
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "IoT & Cloud",
      items: ["Sensors", "Protocols", "AWS", "Networks", "Docker"]
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-8">About Me</h2>
          <p className="text-gray-300 text-lg mb-8">
            Passionate about leveraging technical skills and proven problem-solving abilities to contribute to the success of innovative projects. With a keen eye for detail, consistently praised for the ability to identify and solve complex challenges.
            As a driven and hard-working individual, committed to achieving your company's goals and exceeding expectations. Whether working independently or as part of a team, confident in the ability to deliver exceptional results and make a meaningful impact. 
            Excited about the latest trends and advancements in the IoT industry, always ready to stay ahead and contribute to your company's success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-900 p-6 rounded-lg"
            >
              <div className="text-indigo-500 mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-4">{skill.title}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-gray-300">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};