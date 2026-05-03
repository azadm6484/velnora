import React from 'react';
import { motion } from 'framer-motion';
import n8nLogo from '../assets/n8n-color.svg';
import makeLogo from '../assets/make-color.svg';

const TechStack = () => {
  const technologies = [
    { name: 'React', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Node.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Python', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'AWS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'Docker', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'MongoDB', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'PostgreSQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Figma', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Tailwind CSS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'n8n', image: n8nLogo },
    { name: 'Make.com', image: makeLogo },
    { name: 'Zapier', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/zapier.svg' },
  ];

  return (
    <section className="py-24 bg-[#06141B] relative" id="tech-stack">
      {/* Background image for tech stack */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
          alt="Cyber Background" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#06141B] via-transparent to-[#06141B] pointer-events-none" />
      </div>

      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold mb-4 text-white"
          >
            Our <span className="text-[#4A5C6A]">Tech Stack</span>
          </motion.h2>
          <p className="text-[#9BA8AB] max-w-2xl mx-auto">
            We utilize the latest technologies to build scalable, secure, and robust digital solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.1 }}
              className="flex flex-col items-center justify-center p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] cursor-pointer w-24 h-24 md:w-32 md:h-32"
              style={tech.name === 'Zapier' ? { backgroundColor: 'rgba(255, 79, 0, 0.1)', borderColor: 'rgba(255, 79, 0, 0.3)' } : {}}
            >
              <img 
                src={tech.image} 
                alt={tech.name} 
                className={`w-12 h-12 md:w-16 md:h-16 object-contain filter drop-shadow-md ${tech.name === 'Zapier' ? 'invert brightness-200' : 'brightness-110'}`} 
              />
              <span className="mt-3 text-xs md:text-sm font-medium text-gray-300">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
