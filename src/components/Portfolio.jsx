import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useRouter } from '../App';

const Portfolio = () => {
  const { navigate, theme } = useRouter();
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
    <section className={`py-24 transition-colors duration-500 ${theme === 'light' ? 'bg-white' : 'bg-[#11212D]/30'}`} id="portfolio">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <header className="flex justify-between items-end mb-16">
          <div>
            <h2 className={`text-4xl lg:text-5xl font-black mb-4 transition-colors duration-500 ${theme === 'light' ? 'text-[#06141B]' : 'text-white'}`}>Our <span className="text-[#4A5C6A] drop-shadow-lg">Portfolio</span></h2>
            <p className={`transition-colors duration-500 ${theme === 'light' ? 'text-gray-700 font-bold' : 'text-[#9BA8AB]'}`}>Showcasing our best work across various industries.</p>
          </div>
          <button onClick={() => navigate('/portfolio')} className={`hidden md:block px-6 py-2 border ${theme === 'light' ? 'border-[#06141B]/20 text-[#06141B] bg-white/50 backdrop-blur-md' : 'border-white/10 text-white'} rounded-full transition-all text-sm font-black uppercase tracking-widest shadow-lg hover:scale-105 active:scale-95`}>
            View All Projects
          </button>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl transition-all duration-500 cursor-pointer will-change-transform border ${theme === 'light' ? 'bg-white/30 backdrop-blur-xl border-white/50 shadow-xl' : 'bg-[#11212D]/60 border-white/5 shadow-2xl'} `}
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
              <div className={`absolute inset-0 bg-gradient-to-t ${theme === 'light' ? 'from-white/95 via-white/40' : 'from-[#06141B]'} via-transparent to-transparent opacity-80`} />
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <p className="text-[#4A5C6A] text-[10px] font-black uppercase mb-2 tracking-widest">{project.category}</p>
                <div className="flex justify-between items-center">
                  <h3 className={`text-2xl font-black transition-colors duration-500 ${theme === 'light' ? 'text-[#06141B]' : 'text-white'}`}>{project.title}</h3>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-14 h-14 ${theme === 'light' ? 'bg-[#06141B] text-white shadow-[#06141B]/20' : 'bg-white/10 border-white/10 text-white'} rounded-full backdrop-blur-xl flex items-center justify-center border opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={24} />
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
