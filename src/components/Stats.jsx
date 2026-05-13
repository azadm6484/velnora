import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    { label: 'Projects Completed', value: '500+' },
    { label: 'Happy Clients', value: '50+' },
    { label: 'Years Experience', value: '5+' },
    { label: 'Satisfaction Rate', value: '98%' },
  ];

  return (
    <section id="about" className="py-24 bg-[#06141B] relative overflow-hidden border-y border-white/5">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
          alt="Stats Background" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06141B] via-transparent to-[#06141B] pointer-events-none" />
      </div>

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#11212D]/60 backdrop-blur-xl border border-white/5 rounded-3xl p-8 text-center group hover:border-[#4A5C6A]/50 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(74,92,106,0.15)] transition-all duration-300"
            >
              <h3 className="text-4xl lg:text-5xl font-black mb-3 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 group-hover:to-[#4A5C6A] transition-colors duration-300">
                {stat.value}
              </h3>
              <p className="text-[#9BA8AB] text-xs font-bold uppercase tracking-widest">{stat.label}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
