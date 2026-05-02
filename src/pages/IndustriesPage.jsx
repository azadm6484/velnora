import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, HeartPulse, ShoppingCart, GraduationCap, Truck, Home } from 'lucide-react';

const industries = [
  { name: 'Fintech', icon: <Landmark size={40} />, desc: 'Banking, payments, and financial technology solutions that are secure and scalable.' },
  { name: 'Healthcare', icon: <HeartPulse size={40} />, desc: 'Digital health platforms, patient management, and telemedicine applications.' },
  { name: 'E-commerce', icon: <ShoppingCart size={40} />, desc: 'Online retail platforms, inventory management, and seamless checkout systems.' },
  { name: 'Education', icon: <GraduationCap size={40} />, desc: 'E-learning platforms, LMS systems, and interactive educational tools.' },
  { name: 'Logistics', icon: <Truck size={40} />, desc: 'Supply chain, fleet management, and real-time tracking solutions.' },
  { name: 'Real Estate', icon: <Home size={40} />, desc: 'Property listing platforms, virtual tours, and CRM for real estate agents.' },
];

const IndustriesPage = () => (
  <section className="pt-40 pb-24 bg-[#F8F9FA] min-h-screen" id="industries">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="inline-block bg-white border border-gray-100 shadow-sm text-xs font-bold uppercase tracking-widest text-[#4A5C6A] px-4 py-1.5 rounded-full mb-4">
          Sectors We Serve
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-5xl lg:text-7xl font-black text-[#06141B] mb-6">
          Industries <span className="text-[#4A5C6A]">We Serve</span>
        </motion.h1>
        <p className="text-lg text-[#666] max-w-2xl mx-auto">
          Expertise across diverse sectors to deliver specialized, compliant, and high-performance solutions.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {industries.map((item, index) => (
          <motion.div key={index}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }} viewport={{ once: true }} whileHover={{ y: -8 }}
            className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group text-center">
            <div className="mb-5 text-[#4A5C6A] flex justify-center group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#06141B]">{item.name}</h3>
            <p className="text-[#666] leading-relaxed text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesPage;
