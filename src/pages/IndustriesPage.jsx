import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, HeartPulse, ShoppingCart, GraduationCap, Truck, Home, Megaphone, Scissors } from 'lucide-react';
import { useRouter } from '../App';

const industries = [
  { name: 'Fintech', slug: 'fintech', icon: <Landmark size={40} />, desc: 'Banking, payments, and financial technology solutions that are secure and scalable.', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=60&w=800&auto=format&fit=crop' },
  { name: 'Healthcare', slug: 'healthcare', icon: <HeartPulse size={40} />, desc: 'Digital health platforms, patient management, and telemedicine applications.', image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=60&w=800&auto=format&fit=crop' },
  { name: 'E-commerce', slug: 'e-commerce', icon: <ShoppingCart size={40} />, desc: 'Online retail platforms, inventory management, and seamless checkout systems.', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=60&w=800&auto=format&fit=crop' },
  { name: 'Education', slug: 'education', icon: <GraduationCap size={40} />, desc: 'E-learning platforms, LMS systems, and interactive educational tools.', image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=60&w=800&auto=format&fit=crop' },
  { name: 'Logistics', slug: 'logistics', icon: <Truck size={40} />, desc: 'Supply chain, fleet management, and real-time tracking solutions.', image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=60&w=800&auto=format&fit=crop' },
  { name: 'Real Estate', slug: 'real-estate', icon: <Home size={40} />, desc: 'Property listing platforms, virtual tours, and CRM for real estate agents.', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=60&w=800&auto=format&fit=crop' },
  { name: 'Advertising & Marketing', slug: 'advertising-marketing', icon: <Megaphone size={40} />, desc: 'Digital advertising platforms, campaign management, and marketing automation.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=60&w=800&auto=format&fit=crop' },
  { name: 'Boutique & Salon', slug: 'boutique-salon', icon: <Scissors size={40} />, desc: 'Boutique management, salon booking systems, and specialized retail solutions.', image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=60&w=800&auto=format&fit=crop' },
];

const IndustriesPage = () => {
  const { navigate, theme } = useRouter();

  return (
    <section className={`relative pt-24 sm:pt-32 pb-24 min-h-screen overflow-hidden transition-colors duration-500 ${theme === 'light' ? 'bg-white' : 'bg-[#06141B]'}`} id="industries">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=60&w=1200&auto=format&fit=crop" 
          alt="Technology Background" 
          className={`w-full h-full object-cover transition-opacity duration-500 ${theme === 'light' ? 'opacity-[0.15]' : 'opacity-20'}`}
          loading="eager"
        />
        <div className={`absolute inset-0 bg-gradient-to-b ${theme === 'light' ? 'from-white/60 via-white/80 to-white' : 'from-[#06141B]/80 via-[#06141B]/60 to-[#06141B]'} pointer-events-none transition-colors duration-500`} />
      </div>

      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className={`inline-block ${theme === 'light' ? 'bg-[#06141B]/5 border-[#06141B]/10 text-[#06141B]/80' : 'bg-white/10 border-white/10 text-white/80'} backdrop-blur-md shadow-sm text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border`}>
            Sectors We Serve
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className={`text-4xl sm:text-6xl lg:text-7xl font-black mb-6 ${theme === 'light' ? 'text-[#06141B]' : 'text-white'} transition-colors duration-500`}>
            Industries <span className="text-[#4A5C6A] drop-shadow-lg">We Serve</span>
          </motion.h1>
          <p className={`text-lg ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'} max-w-2xl mx-auto transition-colors duration-500`}>
            Expertise across diverse sectors to deliver specialized, compliant, and high-performance solutions.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((item, index) => (
            <motion.div key={index}
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }} viewport={{ once: true }} whileHover={{ y: -8 }}
              onClick={() => navigate(`/industries/${item.slug}`)}
              className={`relative overflow-hidden cursor-pointer p-8 rounded-3xl border transition-all duration-300 group text-center ${theme === 'light' ? 'bg-white/30 backdrop-blur-xl border-white/50 shadow-xl hover:shadow-2xl hover:border-[#4A5C6A]/30' : 'bg-[#11212D]/60 border-white/5 shadow-sm hover:border-white/20'}`}>
              {item.image && (
                <img src={item.image} alt={item.name} className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${theme === 'light' ? 'opacity-100' : 'opacity-10 group-hover:opacity-20'}`} loading="eager" />
              )}
              <div className={`absolute inset-0 bg-gradient-to-t ${theme === 'light' ? 'from-white/95 via-white/40 to-transparent' : 'from-[#06141B]/90'} to-transparent pointer-events-none transition-colors duration-500`} />
              <div className="relative z-10">
                <div className={`mb-5 w-16 h-16 mx-auto ${theme === 'light' ? 'bg-white/40 border-white/60 shadow-lg backdrop-blur-xl' : 'bg-white/10 border-white/10 backdrop-blur-md'} rounded-full flex items-center justify-center border group-hover:scale-110 transition-transform`}>
                  <div className={`${theme === 'light' ? 'text-[#06141B]' : 'text-gray-300'}`}>{item.icon}</div>
                </div>
                <h3 className={`text-xl font-bold mb-3 ${theme === 'light' ? 'text-[#06141B]' : 'text-white'}`}>{item.name}</h3>
                <p className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} leading-relaxed text-sm`}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesPage;
