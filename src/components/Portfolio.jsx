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
      image: '/finedge.png',
      url: 'https://finedgesoftware.com'
    },
    {
      title: 'HealthTrack AI',
      category: 'Healthcare',
      image: '/healthtrack.png',
      url: 'https://healthtrack.com.au'
    },
    {
      title: 'SwiftLogistics Pro',
      category: 'Logistics',
      image: '/swiftlogistic.png',
      url: 'https://swiftlogisticspro.com'
    },
    {
      title: 'Skillshare',
      category: 'Education',
      image: '/skillshare.png',
      url: 'https://www.skillshare.com'
    },
    {
      title: 'Aura Home',
      category: 'E-commerce',
      image: '/aurahome.png',
      url: 'https://www.aurahome.com.au'
    },
    {
      title: 'PropVision',
      category: 'Real Estate',
      image: '/propvision.png',
      url: 'https://propvision.us'
    },
    {
      title: 'Adlyngo',
      category: 'Advertising',
      image: '/adlyngo.png',
      url: 'https://www.adlyngo.com/'
    },
    {
      title: 'Zara Boutique',
      category: 'Boutique & Salon',
      image: '/zara.png',
      url: 'https://zaraboutique.netlify.app/'
    },
  ];

  return (
    <section className="py-24 bg-[#11212D]/30" id="portfolio">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <header className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our <span className="text-[#4A5C6A]">Portfolio</span></h2>
            <p className="text-[#9BA8AB]">Showcasing our best work across various industries.</p>
          </div>
          <button onClick={() => navigate('/portfolio')} className="hidden md:block px-6 py-2 border border-white/10 rounded-full hover:bg-white/5 transition-all text-sm font-semibold">
            View All Projects
          </button>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl glass-card border-0 cursor-pointer will-change-transform"
              onClick={() => navigate('/portfolio')}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="eager"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#06141B] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <p className="text-[#4A5C6A] text-sm font-bold uppercase mb-2 tracking-tighter">{project.category}</p>
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white hover:text-[#06141B]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
