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
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 text-center group hover:border-[#4A5C6A]/40 transition-colors"
            >
              <h3 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#9BA8AB] group-hover:to-[#4A5C6A] transition-all">
                {stat.value}
              </h3>
              <p className="text-[#9BA8AB] text-sm uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
