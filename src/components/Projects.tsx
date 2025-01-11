import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: "CareerPathAI",
      description: "AI platform for personalized resume generation and job role recommendations.",
      image: "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?auto=format&fit=crop&w=800&q=80",
      tech: ["LangChain", "Streamlit", "Python"],
      links: { github: "#", live: "#" }
    },
    {
      title: "FuzzAIoT",
      description: "Security framework for IoT networks using Dynamic Fuzz Testing and GNNs.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      tech: ["IoT", "GNN", "Python"],
      links: { github: "#", live: "#" }
    },
    // Add your other top projects here (up to 5)
  ];

  const scrollContainer = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainer.current) {
      const scrollAmount = 400;
      scrollContainer.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="py-20 bg-[var(--bg-secondary)]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[var(--text-primary)] mb-16">Featured Projects</h2>
        
        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[var(--bg-primary)] p-2 rounded-full shadow-lg text-[var(--text-primary)] hover:bg-[var(--accent)] transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[var(--bg-primary)] p-2 rounded-full shadow-lg text-[var(--text-primary)] hover:bg-[var(--accent)] transition-colors"
          >
            <ChevronRight size={24} />
          </button>

          {/* Projects Container */}
          <div
            ref={scrollContainer}
            className="flex overflow-x-auto gap-8 pb-4 snap-x snap-mandatory hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-none w-[400px] snap-center"
              >
                <div className="bg-[var(--bg-primary)] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative h-48 group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-4">
                        <a
                          href={project.links.github}
                          className="p-2 bg-white rounded-full hover:bg-gray-200 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="text-gray-900" size={20} />
                        </a>
                        <a
                          href={project.links.live}
                          className="p-2 bg-white rounded-full hover:bg-gray-200 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="text-gray-900" size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">{project.title}</h3>
                    <p className="text-[var(--text-secondary)] mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-[var(--accent)]/20 text-[var(--accent)] rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <motion.a
            href="https://github.com/footcricket05"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-[var(--accent)] text-white px-6 py-3 rounded-lg hover:bg-[var(--accent)]/80 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            <span>View More Projects on GitHub</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};