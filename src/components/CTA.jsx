import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { useRouter } from '../App';

const CTA = () => {
  const { navigate, setQuoteModalMode } = useRouter();

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white">
      <div className="w-full mx-auto px-2 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#06141B] rounded-[3rem] p-10 lg:p-20 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#4A5C6A]/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4A5C6A]/20 rounded-full blur-[100px] pointer-events-none" />
          
          <header>
            <h2 className="text-4xl lg:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tight">
              Ready to <span className="text-[#9BA8AB] drop-shadow-sm">Transform</span> <br className="hidden sm:block" /> Your Business?
            </h2>
            <p className="text-gray-400 text-lg lg:text-xl max-w-2xl mx-auto mb-12 font-medium">
              Join visionary companies building the future with VelnoraTech. Let's discuss your next breakthrough.
            </p>
          </header>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
            <button 
              onClick={() => setQuoteModalMode('quote')} 
              className="w-full sm:w-auto bg-white text-[#06141B] font-black uppercase tracking-widest text-xs sm:text-sm px-8 sm:px-10 py-4 sm:py-5 rounded-2xl hover:bg-gray-100 transition-all flex items-center justify-center shadow-[0_20px_40px_rgba(255,255,255,0.1)] hover:scale-[1.03] active:scale-[0.97]"
            >
              Start Project <ArrowRight className="ml-2" size={18} />
            </button>
            <a 
              href="/services"
              onClick={(e) => { e.preventDefault(); navigate('/services'); }} 
              className="w-full sm:w-auto bg-white/5 text-white font-black uppercase tracking-widest text-xs sm:text-sm px-8 sm:px-10 py-4 sm:py-5 rounded-2xl hover:bg-white/10 transition-all border border-white/10 backdrop-blur-md flex items-center justify-center hover:scale-[1.03] active:scale-[0.97]"
            >
              Explore Services <MessageSquare className="ml-2" size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
