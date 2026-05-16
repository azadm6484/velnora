import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, HeartPulse, ShoppingCart, GraduationCap, Truck, Home, Megaphone, Scissors } from 'lucide-react';
import { useRouter } from '../App';

const Industries = () => {
  const { navigate, theme } = useRouter();
  const industries = [
    // ... items remain same ...
    { 
      name: 'Fintech', 
      slug: 'fintech',
      icon: <Landmark size={24} />,
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=60&w=800&auto=format&fit=crop"
    },
    { 
      name: 'Healthcare', 
      slug: 'healthcare',
      icon: <HeartPulse size={24} />,
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=60&w=800&auto=format&fit=crop"
    },
    { 
      name: 'E-commerce', 
      slug: 'e-commerce',
      icon: <ShoppingCart size={24} />,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=60&w=800&auto=format&fit=crop"
    },
    { 
      name: 'Education', 
      slug: 'education',
      icon: <GraduationCap size={24} />,
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=60&w=800&auto=format&fit=crop"
    },
    { 
      name: 'Logistics', 
      slug: 'logistics',
      icon: <Truck size={24} />,
      image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=60&w=800&auto=format&fit=crop"
    },
    { 
      name: 'Real Estate', 
      slug: 'real-estate',
      icon: <Home size={24} />,
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=60&w=800&auto=format&fit=crop"
    },
    { 
      name: 'Advertising', 
      slug: 'advertising-marketing',
      icon: <Megaphone size={24} />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=60&w=800&auto=format&fit=crop"
    },
    { 
      name: 'Boutique & Salon', 
      slug: 'boutique-salon',
      icon: <Scissors size={24} />,
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=60&w=800&auto=format&fit=crop"
    },
  ];

  return (
    <section className={`py-24 transition-colors duration-500 ${theme === 'light' ? 'bg-white' : 'bg-[#11212D]'} relative overflow-hidden`} id="industries">
      {/* Background elements */}
      <div className={`absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none ${theme === 'light' ? 'opacity-100' : 'opacity-20'}`}>
        {theme === 'light' && (
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=60&w=1200&auto=format&fit=crop" 
            alt="Industries Background" 
            className="absolute inset-0 w-full h-full object-cover opacity-100"
          />
        )}
        <div className={`absolute inset-0 bg-gradient-to-b ${theme === 'light' ? 'from-white/95 via-white/80 to-white/90' : 'from-transparent via-transparent to-transparent'} pointer-events-none transition-colors duration-500`} />
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#4A5C6A] rounded-full blur-[120px]" />
        <div className={`absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] ${theme === 'light' ? 'bg-gray-300' : 'bg-[#06141B]'} rounded-full blur-[120px]`} />
      </div>

      <div className="relative z-10 w-full py-4">
          <header className="text-center mb-12 px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black mb-4 transition-colors duration-500 ${theme === 'light' ? 'text-[#06141B]' : 'text-white'}`}>Industries <span className="text-[#4A5C6A] drop-shadow-lg">We Serve</span></h2>
          <p className={`transition-colors duration-500 ${theme === 'light' ? 'text-gray-700 font-bold' : 'text-[#9BA8AB]'} max-w-2xl mx-auto text-sm sm:text-base`}>Expertise across diverse sectors to deliver specialized solutions tailored to unique industry demands.</p>
        </header>

        <div className="relative w-full overflow-hidden flex">
          <motion.div 
            className="flex space-x-4 sm:space-x-6 px-6 will-change-transform"
            animate={{ x: ["0%", "-33.333333%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          >
            {[...industries, ...industries, ...industries].map((industry, index) => (
              <motion.article
                key={index}
                whileHover={{ y: -10 }}
                onClick={() => navigate(`/industries/${industry.slug}`)}
                className={`group relative w-72 sm:w-80 h-56 sm:h-64 flex-shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer will-change-transform border transition-all duration-500 ${theme === 'light' ? 'bg-white/30 backdrop-blur-xl border-white/50 shadow-xl' : 'bg-[#06141B]/80 border-white/5 shadow-2xl'}`}
              >
                <img 
                  src={industry.image} 
                  alt={industry.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="eager"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${theme === 'light' ? 'from-white/30 via-transparent' : 'from-[#06141B] via-[#06141B]/40'} to-transparent transition-opacity duration-300 group-hover:opacity-80`} />
                
                <div className="absolute bottom-0 left-0 w-full p-8 flex items-center justify-between z-10">
                  <span className={`text-2xl font-black transition-colors duration-500 ${theme === 'light' ? 'text-[#06141B]' : 'text-white'}`}>{industry.name}</span>
                  <div className={`w-16 h-16 ${theme === 'light' ? 'bg-white/30 border-white/50 shadow-xl' : 'bg-white/20 border-white/30'} backdrop-blur-xl rounded-full flex items-center justify-center border group-hover:bg-[#4A5C6A] group-hover:text-white transition-all duration-300 flex-shrink-0`}>
                    <div className={theme === 'light' ? 'text-[#06141B] group-hover:text-white' : 'text-white'}>{industry.icon}</div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
