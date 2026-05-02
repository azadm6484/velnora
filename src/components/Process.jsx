import React from 'react';
import { motion } from 'framer-motion';

const Process = () => {
  const steps = [
    { name: 'Discovery', desc: 'Understanding your vision and goals.' },
    { name: 'Planning', desc: 'Crafting a strategic roadmap.' },
    { name: 'Design', desc: 'Creating intuitive user experiences.' },
    { name: 'Development', desc: 'Building with precision and care.' },
    { name: 'Launch', desc: 'Deploying your product to the world.' },
  ];

  return (
    <section className="py-24 bg-[#11212D]/50" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our <span className="text-[#4A5C6A]">Process</span></h2>
          <p className="text-[#9BA8AB]">A systematic approach to building excellence.</p>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent hidden lg:block -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-[#06141B] border border-white/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:border-[#4A5C6A]/50 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                  <span className="text-xl font-bold text-[#4A5C6A]">0{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{step.name}</h3>
                <p className="text-sm text-[#9BA8AB]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
