import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { useRouter } from '../App';

const CTA = () => {
  const { navigate, setQuoteModalMode, theme } = useRouter();

  return (
    <section id="contact" className={`py-24 relative overflow-hidden transition-colors duration-500 ${theme === 'light' ? 'bg-[#F8F9FA]' : 'bg-[#06141B]'}`}>
      <div className="w-full mx-auto px-2 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className={`${theme === 'light' ? 'bg-white/30 backdrop-blur-xl border-white/50 shadow-2xl' : 'bg-[#11212D] border-white/10 shadow-black/40'} rounded-[3rem] p-10 lg:p-20 text-center relative overflow-hidden border transition-all duration-500`}
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#4A5C6A]/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4A5C6A]/20 rounded-full blur-[100px] pointer-events-none" />
          
          <header>
            <h2 className={`text-4xl lg:text-7xl font-black ${theme === 'light' ? 'text-[#06141B]' : 'text-white'} mb-8 leading-[1.1] tracking-tight`}>
              Ready to <span className="text-[#4A5C6A] drop-shadow-sm">Transform</span> <br className="hidden sm:block" /> Your Business?
            </h2>
            <p className={`${theme === 'light' ? 'text-gray-800 font-bold' : 'text-gray-400 font-medium'} text-lg lg:text-xl max-w-2xl mx-auto mb-12`}>
              Join visionary companies building the future with VelnoraTech. Let's discuss your next breakthrough.
            </p>
          </header>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
            <button 
              onClick={() => setQuoteModalMode('quote')} 
              className={`w-full sm:w-auto ${theme === 'light' ? 'bg-[#06141B] text-white shadow-[#06141B]/20' : 'bg-white text-[#06141B] shadow-white/10'} font-black uppercase tracking-widest text-xs sm:text-sm px-8 sm:px-10 py-4 sm:py-5 rounded-2xl transition-all flex items-center justify-center shadow-xl hover:scale-[1.03] active:scale-[0.97]`}
            >
              Start Project <ArrowRight className="ml-2" size={18} />
            </button>
            <a 
              href="/services"
              onClick={(e) => { e.preventDefault(); navigate('/services'); }} 
              className={`w-full sm:w-auto ${theme === 'light' ? 'bg-white/40 border-white/60 text-[#06141B]' : 'bg-white/5 text-white border-white/10'} font-black uppercase tracking-widest text-xs sm:text-sm px-8 sm:px-10 py-4 sm:py-5 rounded-2xl hover:bg-white/60 transition-all border backdrop-blur-md flex items-center justify-center hover:scale-[1.03] active:scale-[0.97] shadow-lg`}
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
