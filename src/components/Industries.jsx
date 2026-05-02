import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, HeartPulse, ShoppingCart, GraduationCap, Truck, Home } from 'lucide-react';

const Industries = () => {
  const industries = [
    { name: 'Fintech', icon: <Landmark size={32} /> },
    { name: 'Healthcare', icon: <HeartPulse size={32} /> },
    { name: 'E-commerce', icon: <ShoppingCart size={32} /> },
    { name: 'Education', icon: <GraduationCap size={32} /> },
    { name: 'Logistics', icon: <Truck size={32} /> },
    { name: 'Real Estate', icon: <Home size={32} /> },
  ];

  return (
    <section className="py-24" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Industries <span className="text-[#4A5C6A]">We Serve</span></h2>
          <p className="text-[#9BA8AB]">Expertise across diverse sectors to deliver specialized solutions.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="glass-card p-6 flex flex-col items-center justify-center text-center group cursor-pointer hover:border-[#4A5C6A]/50"
            >
              <div className="mb-4 text-[#9BA8AB] group-hover:text-white transition-colors">
                {industry.icon}
              </div>
              <span className="font-semibold">{industry.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
