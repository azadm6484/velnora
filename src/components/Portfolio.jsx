import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useRouter } from '../App';

const Portfolio = () => {
  const { navigate } = useRouter();

  const projects = [
    {
      title: 'FinEdge Banking',
      category: 'Fintech',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=60&w=800',
    },
    {
      title: 'HealthTrack AI',
      category: 'Healthcare',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=60&w=800',
    },
    {
      title: 'SwiftLogistics Pro',
      category: 'Logistics',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=60&w=800',
    },
  ];

  return (
    <section className="py-24 bg-[#11212D]/30" id="portfolio">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our <span className="text-[#4A5C6A]">Portfolio</span></h2>
            <p className="text-[#9BA8AB]">Showcasing our best work across various industries.</p>
          </div>
          <button onClick={() => navigate('/portfolio')} className="hidden md:block px-6 py-2 border border-white/10 rounded-full hover:bg-white/5 transition-all text-sm font-semibold">
            View All Projects
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl glass-card border-0 cursor-pointer will-change-transform"
              onClick={() => navigate('/portfolio')}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#06141B] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <p className="text-[#4A5C6A] text-sm font-bold uppercase mb-2 tracking-tighter">{project.category}</p>
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <button className="p-2 bg-white/10 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
