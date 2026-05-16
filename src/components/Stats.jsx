import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Star } from 'lucide-react';
import { useRouter } from '../App';

const Stats = () => {
  const { theme } = useRouter();
  const stats = [
    { label: 'Projects Completed', value: '70+', icon: <Award size={24} /> },
    { label: 'Happy Clients', value: '45+', icon: <Users size={24} /> },
    { label: 'Years Experience', value: '3+', icon: <Clock size={24} /> },
    { label: 'Satisfaction Rate', value: '99%', icon: <Star size={24} /> },
  ];

  return (
    <section id="about" className={`py-24 transition-colors duration-500 ${theme === 'light' ? 'bg-white' : 'bg-[#06141B]'} relative overflow-hidden border-y ${theme === 'light' ? 'border-gray-100' : 'border-white/5'}`}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
          alt="Stats Background" 
          className={`w-full h-full object-cover transition-opacity duration-500 ${theme === 'light' ? 'opacity-100' : 'opacity-10'}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${theme === 'light' ? 'from-white/80 via-white/60 to-white/80' : 'from-[#06141B] via-transparent to-[#06141B]'} pointer-events-none transition-colors duration-500`} />
      </div>

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative overflow-hidden ${theme === 'light' ? 'bg-white/30 backdrop-blur-xl border-white/50 shadow-xl' : 'bg-[#11212D]/60 border-white/5 shadow-2xl'} p-6 rounded-3xl transition-all group min-h-[160px] flex flex-col justify-end border hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}
            >
              <div className={`absolute inset-0 bg-gradient-to-t ${theme === 'light' ? 'from-white/95 via-white/40 to-transparent' : 'from-[#06141B] via-transparent to-transparent'} pointer-events-none transition-colors duration-500`} />
              
              <div className="relative z-10 mt-auto">
                <div className={`w-12 h-12 ${theme === 'light' ? 'bg-white/40 border-white/60 shadow-lg backdrop-blur-xl' : 'bg-white/10 border-white/10 shadow-2xl backdrop-blur-md'} rounded-full flex items-center justify-center border mb-3 group-hover:scale-110 transition-transform`}>
                  <div className={`${theme === 'light' ? 'text-[#06141B]' : 'text-white'}`}>{stat.icon}</div>
                </div>
                <p className={`text-[10px] uppercase font-black ${theme === 'light' ? 'text-[#06141B]/60' : 'text-gray-400'} mb-1 tracking-widest`}>{stat.label}</p>
                <h3 className={`text-4xl lg:text-5xl font-black ${theme === 'light' ? 'text-[#06141B]' : 'text-white'} transition-colors duration-300`}>
                  {stat.value}
                </h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
