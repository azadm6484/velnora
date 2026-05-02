import React from 'react';
import { motion } from 'framer-motion';

const Process = () => {
  const steps = [
    { name: 'Discovery', desc: 'Understanding your vision and goals.', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop' },
    { name: 'Planning', desc: 'Crafting a strategic roadmap.', image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop' },
    { name: 'Design', desc: 'Creating intuitive user experiences.', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop' },
    { name: 'Development', desc: 'Building with precision and care.', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop' },
    { name: 'Launch', desc: 'Deploying your product to the world.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section className="py-24 bg-[#06141B] relative overflow-hidden" id="process">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop" 
          alt="Process Background" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06141B] via-transparent to-[#06141B] pointer-events-none" />
      </div>

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">Our <span className="text-[#4A5C6A]">Process</span></h2>
          <p className="text-[#9BA8AB] max-w-2xl mx-auto text-lg">A systematic approach to building excellence.</p>
        </div>

        <div className="relative pt-4">
          {/* Connector Line */}
          <div className="absolute top-[80px] left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#4A5C6A]/50 to-transparent hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative w-32 h-32 mx-auto mb-8 group-hover:-translate-y-4 transition-transform duration-500">
                  {/* Rotating dashed border */}
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#4A5C6A]/30 group-hover:border-[#4A5C6A]/80 group-hover:rotate-180 transition-all duration-700" />
                  
                  <img src={step.image} alt={step.name} className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded-full shadow-[0_0_30px_rgba(74,92,106,0.2)]" />
                  
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#06141B] border border-[#4A5C6A]/30 rounded-full flex items-center justify-center z-10 shadow-xl group-hover:bg-[#4A5C6A] group-hover:border-[#4A5C6A] transition-colors duration-300">
                    <span className="text-sm font-bold text-white">0{index + 1}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#4A5C6A] transition-colors">{step.name}</h3>
                <p className="text-sm text-[#9BA8AB] leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
