import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  { title: 'FinEdge Banking', category: 'Fintech', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800', desc: 'A next-generation digital banking platform with AI-driven fraud detection.' },
  { title: 'HealthTrack AI', category: 'Healthcare', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800', desc: 'Patient management and telemedicine platform serving 50,000+ users.' },
  { title: 'SwiftLogistics Pro', category: 'Logistics', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800', desc: 'Real-time fleet tracking and supply chain management solution.' },
  { title: 'EduLearn Platform', category: 'Education', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800', desc: 'Interactive e-learning platform with AI-personalized curriculum.' },
  { title: 'ShopSphere', category: 'E-commerce', image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800', desc: 'Multi-vendor marketplace with real-time inventory and analytics.' },
  { title: 'PropVision', category: 'Real Estate', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800', desc: '3D virtual property tours and AI-powered valuation engine.' },
];

const PortfolioPage = () => (
  <section className="pt-40 pb-24 bg-[#F8F9FA] min-h-screen" id="portfolio">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="inline-block bg-white border border-gray-100 shadow-sm text-xs font-bold uppercase tracking-widest text-[#4A5C6A] px-4 py-1.5 rounded-full mb-4">
          Our Work
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-5xl lg:text-7xl font-black text-[#06141B] mb-6">
          Our <span className="text-[#4A5C6A]">Portfolio</span>
        </motion.h1>
        <p className="text-lg text-[#666] max-w-2xl mx-auto">
          Showcasing our best work across various industries and technology stacks.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div key={index}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }} viewport={{ once: true }}
            className="group relative overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="aspect-video overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#4A5C6A]">{project.category}</span>
              <div className="flex justify-between items-center mt-1">
                <h3 className="text-xl font-bold text-[#06141B]">{project.title}</h3>
                <button className="p-2 bg-gray-100 rounded-full hover:bg-[#06141B] hover:text-white transition-all">
                  <ExternalLink size={16} />
                </button>
              </div>
              <p className="text-sm text-[#666] mt-2 leading-relaxed">{project.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioPage;
