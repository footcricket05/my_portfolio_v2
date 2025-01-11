import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail } from 'lucide-react';
import { WaveAnimation } from './WaveAnimation';

interface HeroProps {
  githubUrl: string;
  linkedinUrl: string;
}

export const Hero = ({ githubUrl, linkedinUrl }: HeroProps) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center z-10"
      >
        <motion.img
          src="https://media.licdn.com/dms/image/v2/D5603AQGR1K_ssfjU8g/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1681720385824?e=1741824000&v=beta&t=sA55nTDY0l1kgeX_g_py2dow1y4rh40hxzNyOfi35VE"
          alt="Shaurya Singh Srinet"
          className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-[var(--accent)]"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        />
        
        <motion.h1 
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Shaurya Singh Srinet
        </motion.h1>

        <div className="text-xl text-[var(--accent)] mb-8 h-[60px]">
          <TypeAnimation
            sequence={[
              'Software Developer',
              2000,
              'IoT and AI/ML Engineer',
              2000,
              'Cloud and DevOps Enthusiast',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        <motion.div 
          className="flex justify-center gap-6 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">
            <Github size={24} />
          </a>
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:shauryasrinet@gmail.com" className="hover:text-[var(--accent)] transition-colors">
            <Mail size={24} />
          </a>
        </motion.div>

        <motion.a
          href="https://drive.google.com/file/d/1jauIxROoP8NFfjt_Z9bKwYOe57ixkgm8/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[var(--accent)] text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-colors inline-block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download Resume
        </motion.a>
      </motion.div>
      
      <WaveAnimation />
    </section>
  );
};