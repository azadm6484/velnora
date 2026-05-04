import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, HeartPulse, ShoppingCart, GraduationCap, Truck, Home } from 'lucide-react';
import { useRouter } from '../App';

const Industries = () => {
  const { navigate } = useRouter();
  const industries = [
    { 
      name: 'Fintech', 
      slug: 'fintech',
      icon: <Landmark className="text-white" size={24} />,
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=60&w=800&auto=format&fit=crop"
    },
    { 
      name: 'Healthcare', 
      slug: 'healthcare',
      icon: <HeartPulse className="text-white" size={24} />,
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=60&w=800&auto=format&fit=crop"
    },
    { 
      name: 'E-commerce', 
      slug: 'e-commerce',
      icon: <ShoppingCart className="text-white" size={24} />,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=60&w=800&auto=format&fit=crop"
    },
    { 
      name: 'Education', 
      slug: 'education',
      icon: <GraduationCap className="text-white" size={24} />,
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=60&w=800&auto=format&fit=crop"
    },
    { 
      name: 'Logistics', 
      slug: 'logistics',
      icon: <Truck className="text-white" size={24} />,
      image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=60&w=800&auto=format&fit=crop"
    },
    { 
      name: 'Real Estate', 
      slug: 'real-estate',
      icon: <Home className="text-white" size={24} />,
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=60&w=800&auto=format&fit=crop"
    },
  ];

  return (
    <section className="py-24 bg-[#11212D] relative overflow-hidden" id="industries">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#4A5C6A] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-[#06141B] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full py-4">
          <div className="text-center mb-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">Industries <span className="text-[#4A5C6A]">We Serve</span></h2>
          <p className="text-[#9BA8AB] max-w-2xl mx-auto text-sm sm:text-base">Expertise across diverse sectors to deliver specialized solutions tailored to unique industry demands.</p>
        </div>

        <div className="relative w-full overflow-hidden flex">
          <motion.div 
            className="flex space-x-4 sm:space-x-6 px-6 will-change-transform"
            animate={{ x: ["0%", "-33.333333%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          >
            {[...industries, ...industries, ...industries].map((industry, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                onClick={() => navigate(`/industries/${industry.slug}`)}
                className="group relative w-72 sm:w-80 h-56 sm:h-64 flex-shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer will-change-transform"
              >
                <img 
                  src={industry.image} 
                  alt={industry.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06141B] via-[#06141B]/40 to-transparent transition-opacity duration-300 group-hover:opacity-80" />
                
                <div className="absolute bottom-0 left-0 w-full p-6 flex items-center justify-between z-10">
                  <span className="text-xl font-bold text-white">{industry.name}</span>
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:bg-[#4A5C6A] transition-colors flex-shrink-0">
                    {industry.icon}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
