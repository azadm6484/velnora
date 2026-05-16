import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useRouter } from '../App';
import logo from '../assets/velnora_favicon.png';

const WhyChooseUs = () => {
  const { theme } = useRouter();
  const points = [
    { title: 'Expert Team', desc: 'Our developers and designers are industry veterans with deep expertise.' },
    { title: 'Agile Methodology', desc: 'Fast delivery without compromising on quality through sprint-based work.' },
    { title: 'Scalable Solutions', desc: 'We build products that grow with your business, ensuring long-term success.' },
    { title: '24/7 Support', desc: 'Round-the-clock maintenance and support for your critical applications.' },
  ];

  return (
    <section className={`py-24 overflow-hidden transition-colors duration-500 ${theme === 'light' ? 'bg-white' : 'bg-[#06141B]'} relative`}>
      {/* Background Image for Light Mode */}
      {theme === 'light' && (
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=60&w=1200&auto=format&fit=crop" 
            alt="Technology Background" 
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-white/90 pointer-events-none" />
        </div>
      )}

      <div className="relative z-10 w-full mx-auto px-2 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <header>
              <h2 className={`text-4xl lg:text-5xl font-black mb-8 ${theme === 'light' ? 'text-[#06141B]' : 'text-white'} transition-colors duration-500`}>
                Why Businesses <span className="text-[#4A5C6A] drop-shadow-lg">Choose Us</span>
              </h2>
            </header>
            <div className="space-y-8">
              {points.map((point, index) => (
                <article key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="text-[#4A5C6A] group-hover:scale-110 transition-transform" size={24} />
                  </div>
                  <div>
                    <h3 className={`text-xl font-black mb-1 ${theme === 'light' ? 'text-[#06141B]' : 'text-white'} transition-colors duration-500`}>{point.title}</h3>
                    <p className={`transition-colors duration-500 ${theme === 'light' ? 'text-gray-700 font-bold' : 'text-[#9BA8AB]'} leading-relaxed`}>{point.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className={`aspect-square relative p-6 lg:p-10 overflow-hidden rounded-[3rem] border transition-all duration-500 ${theme === 'light' ? 'bg-white/30 backdrop-blur-xl border-white/50 shadow-2xl' : 'bg-[#11212D]/60 backdrop-blur-md border-white/5 shadow-2xl'}`}>
              <div className="grid grid-cols-2 grid-rows-2 gap-4 lg:gap-6 w-full h-full">
                <div className="relative overflow-hidden rounded-3xl shadow-sm group">
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-3" alt="Team" />
                  <div className="absolute inset-0 bg-[#06141B]/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="relative overflow-hidden rounded-3xl shadow-sm group">
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:-rotate-3" alt="Strategy" />
                  <div className="absolute inset-0 bg-[#06141B]/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="relative overflow-hidden rounded-3xl shadow-sm group">
                  <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:-rotate-3" alt="Workspace" />
                  <div className="absolute inset-0 bg-[#06141B]/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="relative overflow-hidden rounded-3xl shadow-sm group">
                  <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-3" alt="Collaboration" />
                  <div className="absolute inset-0 bg-[#06141B]/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className={`w-24 h-24 lg:w-32 lg:h-32 backdrop-blur-xl border flex items-center justify-center z-10 transition-transform duration-500 hover:scale-110 pointer-events-auto cursor-pointer p-4 rounded-full ${theme === 'light' ? 'bg-white/40 border-white/60 shadow-xl' : 'bg-white/10 border-white/10 shadow-[0_0_40px_rgba(74,92,106,0.3)]'}`}>
                  <img src={logo} alt="VelnoraTech" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
