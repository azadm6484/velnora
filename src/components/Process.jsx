import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from '../App';

const Process = () => {
  const { theme } = useRouter();
  const steps = [
    { name: 'Discovery', desc: 'Understanding your vision and goals.', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=60&w=400&auto=format&fit=crop' },
    { name: 'Planning', desc: 'Crafting a strategic roadmap.', image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=60&w=400&auto=format&fit=crop' },
    { name: 'Design', desc: 'Creating intuitive user experiences.', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=60&w=400&auto=format&fit=crop' },
    { name: 'Development', desc: 'Building with precision and care.', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=60&w=400&auto=format&fit=crop' },
    { name: 'Launch', desc: 'Deploying your product to the world.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=60&w=400&auto=format&fit=crop' },
  ];

  return (
    <section className={`py-24 transition-colors duration-500 ${theme === 'light' ? 'bg-white' : 'bg-[#06141B]'} relative overflow-hidden`} id="process">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=60&w=1200&auto=format&fit=crop"
          alt="Process Background"
          className={`w-full h-full object-cover transition-opacity duration-500 ${theme === 'light' ? 'opacity-100' : 'opacity-10'}`}
          loading="eager"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${theme === 'light' ? 'from-white/95 via-white/80 to-white/90' : 'from-[#06141B] via-transparent to-[#06141B]'} pointer-events-none transition-colors duration-500`} />
      </div>

      <div className="w-full mx-auto px-2 sm:px-6 lg:px-8 relative z-10">
        <header className="text-center mb-20">
          <h2 className={`text-4xl lg:text-5xl font-black mb-4 transition-colors duration-500 ${theme === 'light' ? 'text-[#06141B]' : 'text-white'}`}>
            Our <span className="text-[#4A5C6A] drop-shadow-lg">Process</span>
          </h2>
          <p className={`transition-colors duration-500 ${theme === 'light' ? 'text-gray-700 font-bold' : 'text-[#9BA8AB]'} max-w-2xl mx-auto text-lg`}>
            A systematic approach to building excellence.
          </p>
        </header>

        <div className="relative pt-4">
          {/* Connector Line */}
          <div className={`absolute top-[80px] left-8 right-8 h-[2px] ${theme === 'light' ? 'bg-gradient-to-r from-transparent via-[#4A5C6A]/30 to-transparent' : 'bg-gradient-to-r from-transparent via-[#4A5C6A]/50 to-transparent'} hidden lg:block`} />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center group"
              >
                <div className="relative w-32 h-32 mx-auto mb-8 group-hover:-translate-y-4 transition-transform duration-500 will-change-transform">
                  {/* Rotating dashed border */}
                  <div className={`absolute inset-0 rounded-full border-2 border-dashed ${theme === 'light' ? 'border-[#06141B]/20' : 'border-[#4A5C6A]/30'} group-hover:border-[#4A5C6A]/80 group-hover:rotate-180 transition-all duration-700`} />

                  <img src={step.image} alt={step.name} className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded-full shadow-lg" loading="eager" />

                  <div className={`absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 transition-colors duration-300 border border-[#4A5C6A]/30 rounded-full flex items-center justify-center z-10 shadow-xl group-hover:bg-[#4A5C6A] group-hover:border-[#4A5C6A] ${theme === 'light' ? 'bg-white text-[#06141B]' : 'bg-[#06141B] text-white'}`}>
                    <span className="text-sm font-black">0{index + 1}</span>
                  </div>
                </div>
                <h3 className={`text-xl font-black mb-3 transition-colors duration-500 ${theme === 'light' ? 'text-[#06141B]' : 'text-white'} group-hover:text-[#4A5C6A]`}>{step.name}</h3>
                <p className={`text-sm leading-relaxed transition-colors duration-500 ${theme === 'light' ? 'text-gray-700 font-bold' : 'text-[#9BA8AB]'}`}>{step.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

