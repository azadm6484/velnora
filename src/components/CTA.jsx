import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#06141B] rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl"
        >
          {/* Decorative background circle */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          
          <h2 className="text-4xl md:text-7xl font-black mb-8 relative z-10 leading-tight">
            Ready to <span className="text-[#9BA8AB]">configurate</span> <br/> your future?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto relative z-10">
            Join 500+ enterprises building the next generation of digital experiences with Velnora System.
          </p>
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <button className="bg-white text-[#06141B] font-bold px-10 py-4 rounded-full hover:bg-gray-100 transition-all text-lg">
              Get Started
            </button>
            <button className="bg-white/10 text-white font-bold px-10 py-4 rounded-full hover:bg-white/20 transition-all text-lg border border-white/10 backdrop-blur-md">
              Contact Sales
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
