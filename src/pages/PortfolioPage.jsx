import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  { 
    title: 'FinEdge Banking', 
    category: 'Fintech', 
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800', 
    desc: 'A next-generation digital banking platform with AI-driven fraud detection.',
    url: 'https://finedgesoftware.com'
  },
  { 
    title: 'HealthTrack AI', 
    category: 'Healthcare', 
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800', 
    desc: 'Patient management and telemedicine platform serving 50,000+ users.',
    url: 'https://healthtrack.com.au'
  },
  { 
    title: 'SwiftLogistics Pro', 
    category: 'Logistics', 
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800', 
    desc: 'Real-time fleet tracking and supply chain management solution.',
    url: 'https://swiftlogisticspro.com'
  },
  { 
    title: 'Skillshare', 
    category: 'Education', 
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800', 
    desc: 'A leading online learning community with thousands of classes for creative and curious people.',
    url: 'https://www.skillshare.com'
  },
  { 
    title: 'Aura Home', 
    category: 'E-commerce', 
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800', 
    desc: 'A premium lifestyle and home decor platform with seamless Shopify integration.',
    url: 'https://www.aurahome.com.au'
  },
  { 
    title: 'PropVision', 
    category: 'Real Estate', 
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800', 
    desc: '3D virtual property tours and AI-powered valuation engine.',
    url: 'https://propvision.us'
  },
];

const PortfolioPage = () => (
  <section className="relative pt-32 pb-24 min-h-screen overflow-hidden bg-[#06141B]" id="portfolio">
    {/* Background Image */}
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" 
        alt="Technology Background" 
        className="w-full h-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#06141B]/80 via-[#06141B]/60 to-[#06141B] pointer-events-none" />
    </div>

    <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="inline-block bg-white/10 border border-white/10 backdrop-blur-md shadow-sm text-xs font-bold uppercase tracking-widest text-white/80 px-4 py-1.5 rounded-full mb-4">
          Our Work
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-5xl lg:text-7xl font-black text-white mb-6">
          Our <span className="text-[#4A5C6A] drop-shadow-lg">Portfolio</span>
        </motion.h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Showcasing our best work across various industries and technology stacks.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div key={index}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }} viewport={{ once: true }}
            className="group relative overflow-hidden rounded-3xl bg-[#11212D]/60 backdrop-blur-sm border border-white/5 shadow-sm hover:border-white/20 transition-all duration-300">
            <div className="aspect-video overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100" />
            </div>
            <div className="p-6">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{project.category}</span>
              <div className="flex justify-between items-center mt-1">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 bg-white/10 text-white rounded-full hover:bg-white hover:text-[#06141B] transition-all"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed">{project.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioPage;
