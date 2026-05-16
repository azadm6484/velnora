import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Users, Award, Globe, Clock } from 'lucide-react';
import logo from '../assets/velnora_favicon.png';
import { useRouter } from '../App';

const stats = [
  { value: '70+', label: 'Projects Delivered', icon: <Award size={24} />, image: 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?q=60&w=400&auto=format&fit=crop' },
  { value: '45+', label: 'Happy Clients', icon: <Users size={24} />, image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=60&w=400&auto=format&fit=crop' },
  { value: '10+', label: 'Countries Served', icon: <Globe size={24} />, image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=60&w=400&auto=format&fit=crop' },
  { value: '3+', label: 'Years Experience', icon: <Clock size={24} />, image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=60&w=400&auto=format&fit=crop' },
];

const points = [
  { title: 'Expert Team', desc: 'Our developers and designers are industry veterans with deep domain expertise across multiple technologies.' },
  { title: 'Agile Methodology', desc: 'Fast delivery without compromising on quality through sprint-based development and continuous feedback.' },
  { title: 'Scalable Solutions', desc: 'We build products that grow with your business, ensuring long-term success and technical sustainability.' },
  { title: '24/7 Support', desc: 'Round-the-clock maintenance and dedicated support for your critical business applications.' },
  { title: 'Transparent Process', desc: 'Regular updates, clear communication, and full visibility into project progress at every stage.' },
  { title: 'Competitive Pricing', desc: 'Premium quality at affordable rates with flexible engagement models to suit every budget.' },
];

const AboutPage = () => {
  const { theme } = useRouter();
  
  return (
    <section className={`relative pt-24 sm:pt-32 pb-24 min-h-screen overflow-hidden transition-colors duration-500 ${theme === 'light' ? 'bg-white' : 'bg-[#06141B]'}`} id="about">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=60&w=1200&auto=format&fit=crop"
          alt="Technology Background"
          className={`w-full h-full object-cover transition-opacity duration-500 ${theme === 'light' ? 'opacity-100' : 'opacity-20'}`}
          loading="lazy"
        />
        <div className={`absolute inset-0 bg-gradient-to-b ${theme === 'light' ? 'from-white/95 via-white/80 to-white/90' : 'from-[#06141B]/80 via-[#06141B]/60 to-[#06141B]'} pointer-events-none transition-colors duration-500`} />
      </div>

      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-20">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className={`inline-block ${theme === 'light' ? 'bg-white/10 border-white/20 text-[#06141B]/80' : 'bg-white/10 border-white/10 text-white/80'} backdrop-blur-md shadow-sm text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border`}>
            Who We Are
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className={`text-4xl sm:text-6xl lg:text-7xl font-black mb-6 ${theme === 'light' ? 'text-[#06141B]' : 'text-white'} transition-colors duration-500`}>
            About <span className="text-[#4A5C6A] drop-shadow-lg">VelnoraTech</span>
          </motion.h1>
          <p className={`text-lg ${theme === 'light' ? 'text-gray-800 font-bold' : 'text-gray-300 font-medium'} max-w-3xl mx-auto transition-colors duration-500`}>
            We are a premier software development company based in Greater Noida, India — building scalable digital products for businesses worldwide since 2023.
          </p>
        </header>

        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, i) => (
            <motion.article key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }} viewport={{ once: true }}
              className={`relative overflow-hidden ${theme === 'light' ? 'bg-white/30 backdrop-blur-xl border-white/50 shadow-xl' : 'bg-[#11212D]/60 border-white/5 shadow-2xl'} p-6 rounded-3xl transition-all group min-h-[160px] flex flex-col justify-end border hover:shadow-2xl`}>
              {stat.image && (
                <img src={stat.image} alt={stat.label} className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${theme === 'light' ? 'opacity-100' : 'opacity-10 group-hover:opacity-20'}`} loading="eager" />
              )}
              <div className={`absolute inset-0 bg-gradient-to-t ${theme === 'light' ? 'from-white/95 via-white/40 to-transparent' : 'from-[#06141B] via-transparent to-transparent'} pointer-events-none transition-colors duration-500`} />
              
              <div className="relative z-10 mt-auto">
                <div className={`w-12 h-12 ${theme === 'light' ? 'bg-white/40 border-white/60 shadow-lg backdrop-blur-xl' : 'bg-white/10 border-white/10 shadow-2xl backdrop-blur-md'} rounded-2xl flex items-center justify-center border mb-3 group-hover:scale-110 transition-transform`}>
                  <div className={`${theme === 'light' ? 'text-[#06141B]' : 'text-white'}`}>{stat.icon}</div>
                </div>
                <p className={`text-[10px] uppercase font-black ${theme === 'light' ? 'text-[#06141B]/60' : 'text-gray-400'} mb-1 tracking-widest`}>{stat.label}</p>
                <p className={`text-2xl font-black ${theme === 'light' ? 'text-[#06141B]' : 'text-white'} drop-shadow-sm transition-colors duration-500`}>{stat.value}</p>
              </div>
            </motion.article>
          ))}
        </section>

        {/* Why Choose Us */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.section initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className={`text-4xl font-black ${theme === 'light' ? 'text-[#06141B]' : 'text-white'} mb-10 transition-colors duration-500`}>Why Businesses <span className="text-[#4A5C6A] drop-shadow-lg">Choose Us</span></h2>
            <div className="space-y-6">
              {points.map((point, i) => (
                <article key={i} className="flex gap-4">
                  <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={22} />
                  <div>
                    <h4 className={`font-bold ${theme === 'light' ? 'text-[#06141B]' : 'text-white'} mb-1 transition-colors duration-500`}>{point.title}</h4>
                    <p className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} text-sm leading-relaxed transition-colors duration-500`}>{point.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </motion.section>
          <motion.aside initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className={`rounded-3xl p-12 border transition-all text-center ${theme === 'light' ? 'bg-white/10 backdrop-blur-xl border-white/20 shadow-xl' : 'bg-[#11212D]/60 border-white/5 hover:border-white/20 shadow-sm'}`}>
            <div className={`w-32 h-32 mx-auto mb-8 rounded-full flex items-center justify-center border shadow-xl overflow-hidden p-4 transition-all duration-500 ${theme === 'light' ? 'bg-white/40 border-white/60 backdrop-blur-xl' : 'bg-white/10 border-white/10'}`}>
              <img src={logo} alt="VelnoraTech" className="w-full h-full object-contain" />
            </div>
            <h3 className={`text-2xl font-black ${theme === 'light' ? 'text-[#06141B]' : 'text-white'} mb-4 transition-colors duration-500`}>VelnoraTech Software Pvt Ltd</h3>
            <p className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} text-sm leading-relaxed mb-6 transition-colors duration-500`}>
              NX-One, Tech, Amrapali Dream Valley, B-114, Zone IV,<br />
              Greater Noida, Uttar Pradesh 201318
            </p>
            <a href="mailto:info@velnorasoftware.com"
              className={`inline-block ${theme === 'light' ? 'bg-[#06141B] text-white' : 'bg-white text-[#06141B]'} px-8 py-3 rounded-full font-bold text-sm hover:scale-[1.05] active:scale-[0.95] transition-all shadow-xl`}>
              info@velnorasoftware.com
            </a>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
