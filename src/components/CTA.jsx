import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { useRouter } from '../App';

const CTA = () => {
  const { navigate } = useRouter();

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#06141B] rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#4A5C6A]/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4A5C6A]/20 rounded-full blur-[100px] pointer-events-none" />
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">Ready to <span className="text-[#4A5C6A]">Transform</span> Your Business?</h2>
          <p className="text-gray-300 text-lg lg:text-xl max-w-2xl mx-auto mb-10">
            Join visionary companies building the future with VelnoraTech. Let's discuss your next breakthrough.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button onClick={() => navigate('/contact')} className="bg-white text-[#06141B] font-bold px-10 py-4 rounded-full hover:bg-gray-100 transition-all text-lg flex items-center shadow-xl shadow-black/20 hover:scale-105 active:scale-95">
              Start Project <ArrowRight className="ml-2" size={20} />
            </button>
            <button onClick={() => navigate('/services')} className="bg-white/10 text-white font-bold px-10 py-4 rounded-full hover:bg-white/20 transition-all text-lg border border-white/10 backdrop-blur-md flex items-center hover:scale-105 active:scale-95">
              Explore Services <MessageSquare className="ml-2" size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
