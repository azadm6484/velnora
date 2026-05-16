import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useRouter } from '../App';

const projects = [
  {
    title: 'FinEdge Banking',
    category: 'Fintech',
    image: '/finedge.png',
    desc: 'A next-generation digital banking platform with AI-driven fraud detection.',
    url: 'https://finedgesoftware.com'
  },
  {
    title: 'HealthTrack AI',
    category: 'Healthcare',
    image: '/healthtrack.png',
    desc: 'Patient management and telemedicine platform serving 50,000+ users.',
    url: 'https://healthtrack.com.au'
  },
  {
    title: 'SwiftLogistics Pro',
    category: 'Logistics',
    image: '/swiftlogistic.png',
    desc: 'Real-time fleet tracking and supply chain management solution.',
    url: 'https://swiftlogisticspro.com'
  },
  {
    title: 'Skillshare',
    category: 'Education',
    image: '/skillshare.png',
    desc: 'A leading online learning community with thousands of classes for creative and curious people.',
    url: 'https://www.skillshare.com'
  },
  {
    title: 'Aura Home',
    category: 'E-commerce',
    image: '/aurahome.png',
    desc: 'A premium lifestyle and home decor platform with seamless Shopify integration.',
    url: 'https://www.aurahome.com.au'
  },
  {
    title: 'PropVision',
    category: 'Real Estate',
    image: '/propvision.png',
    desc: '3D virtual property tours and AI-powered valuation engine.',
    url: 'https://propvision.us'
  },
  {
    title: 'Adlyngo',
    category: 'Advertising',
    image: '/adlyngo.png',
    desc: 'A comprehensive digital advertising platform for campaign management and real-time analytics.',
    url: 'https://www.adlyngo.com/'
  },
  {
    title: 'Zara Boutique',
    category: 'Boutique & Salon',
    image: '/zara.png',
    desc: 'A premium e-commerce and booking solution for high-end boutiques and salons.',
    url: 'https://zaraboutique.netlify.app/'
  },
];

const PortfolioPage = () => {
  const { navigate, theme } = useRouter();
  
  return (
    <section className={`relative pt-32 pb-24 min-h-screen overflow-hidden transition-colors duration-500 ${theme === 'light' ? 'bg-white' : 'bg-[#06141B]'}`} id="portfolio">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
          alt="Technology Background"
          className={`w-full h-full object-cover transition-opacity duration-500 ${theme === 'light' ? 'opacity-100' : 'opacity-20'}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-b ${theme === 'light' ? 'from-white/95 via-white/80 to-white/90' : 'from-[#06141B]/80 via-[#06141B]/60 to-[#06141B]'} pointer-events-none transition-colors duration-500`} />
      </div>

      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className={`inline-block ${theme === 'light' ? 'bg-white/10 border-white/20 text-[#06141B]/80' : 'bg-white/10 border-white/10 text-white/80'} backdrop-blur-md shadow-sm text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border`}>
            Our Work
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className={`text-5xl lg:text-7xl font-black mb-6 ${theme === 'light' ? 'text-[#06141B]' : 'text-white'} transition-colors duration-500`}>
            Our <span className="text-[#4A5C6A] drop-shadow-lg">Portfolio</span>
          </motion.h1>
          <p className={`text-lg ${theme === 'light' ? 'text-gray-800 font-black' : 'text-gray-300'} max-w-2xl mx-auto transition-colors duration-500`}>
            Showcasing our best work across various industries and technology stacks.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div key={index}
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }} viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-3xl border transition-all duration-300 ${theme === 'light' ? 'bg-white/60 backdrop-blur-xl border border-white/50 shadow-xl hover:border-[#4A5C6A]/30' : 'bg-[#11212D]/60 border-white/5 shadow-sm hover:border-white/20'}`}>
              <div className="aspect-video overflow-hidden">
                <img src={project.image} alt={project.title} className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ${theme === 'light' ? 'opacity-100' : 'opacity-90 group-hover:opacity-100'}`} />
              </div>
              <div className="p-6">
                <span className={`text-xs font-bold uppercase tracking-widest ${theme === 'light' ? 'text-[#4A5C6A]' : 'text-gray-400'}`}>{project.category}</span>
                <div className="flex justify-between items-center mt-1">
                  <h3 className={`text-xl font-bold ${theme === 'light' ? 'text-[#06141B]' : 'text-white'}`}>{project.title}</h3>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full transition-all ${theme === 'light' ? 'bg-[#06141B]/10 text-[#06141B] hover:bg-[#06141B] hover:text-white' : 'bg-white/10 text-white hover:bg-white hover:text-[#06141B]'}`}
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
                <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} mt-2 leading-relaxed`}>{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;
