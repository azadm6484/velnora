import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Users, Layers, Globe, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-40 pb-20 overflow-hidden bg-[#06141B]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" 
          alt="Technology Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#06141B]/80 via-[#06141B]/60 to-[#06141B] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-sm mb-6"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-white/80">Next-Gen SaaS Solutions</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl lg:text-8xl font-black text-white leading-none mb-6"
          >
            Velnora <span className="text-[#4A5C6A] drop-shadow-lg">Software</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-300 max-w-2xl mb-10"
          >
            A variety of scalable options are available for your business to
            thrive in the future digital landscape. Certified Enterprise Grade.
          </motion.p>
          <div className="flex space-x-4">
            <button className="bg-white text-[#06141B] font-medium px-8 py-3 rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(255,255,255,0.3)]">Configurate</button>
            <button className="bg-transparent text-white border border-white/20 font-medium px-8 py-3 rounded-full transition-all duration-300 hover:bg-white/10 active:scale-[0.98]">Experience</button>
          </div>
        </div>

        {/* Product Showcase with Hotspots */}
        <div className="relative max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative rounded-[3rem] overflow-hidden bg-[#11212D] shadow-2xl border border-white/10"
          >
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426"
              alt="Dashboard Showcase"
              className="w-full h-auto opacity-90 mix-blend-lighten"
            />

            {/* Hotspots */}
            <Hotspot x="20%" y="40%" label="AI Integration" />
            <Hotspot x="45%" y="60%" label="Real-time Analytics" />
            <Hotspot x="75%" y="30%" label="Cloud Infrastructure" />
          </motion.div>

          {/* Floating Spec Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute -right-8 top-1/4 w-64 bg-[#11212D]/90 backdrop-blur-xl border border-white/10 text-white p-6 rounded-3xl shadow-2xl z-20"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-white/10 rounded-xl">
                <Users size={20} />
              </div>
              <span className="text-xs font-bold uppercase">Unsurpassed Power</span>
            </div>
            <p className="text-sm text-gray-400 mb-6">A handcrafted suite of AI tools that unleashes a torrent of productivity.</p>
            <div className="pt-4 border-t border-white/10">
              <span className="text-xs text-gray-500">v-system-pro</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Feature Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-20">
          <SpecCard icon={<Users size={20} />} label="Capacity" value="Unlimited" image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop" />
          <SpecCard icon={<Layers size={20} />} label="Engine" value="Turbo AI" image="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop" />
          <SpecCard icon={<Shield size={20} />} label="Power" value="Secure V8" image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop" />
          <SpecCard icon={<Globe size={20} />} label="Network" value="Global" image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop" />
          <SpecCard icon={<ArrowRight size={20} />} label="Speed" value="0.1 sec" image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop" />
        </div>
      </div>
    </section>
  );
};

const Hotspot = ({ x, y, label }) => (
  <motion.div
    style={{ left: x, top: y }}
    className="absolute group z-10"
  >
    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.5)] cursor-pointer">
      <div className="w-2 h-2 bg-[#06141B] rounded-full" />
    </div>
    <div className="absolute left-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white px-4 py-2 rounded-full shadow-xl whitespace-nowrap">
      <span className="text-xs font-bold text-[#06141B]">{label}</span>
    </div>
  </motion.div>
);

const SpecCard = ({ icon, label, value, image }) => (
  <div className="relative overflow-hidden bg-[#11212D]/60 backdrop-blur-sm p-6 rounded-3xl border border-white/5 shadow-sm hover:border-white/20 transition-all group min-h-[140px] flex flex-col justify-end">
    {image && (
      <img src={image} alt={label} className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-all duration-700 group-hover:scale-110" />
    )}
    <div className="absolute inset-0 bg-gradient-to-t from-[#06141B]/90 to-transparent pointer-events-none" />
    <div className="relative z-10 mt-auto">
      <div className="text-gray-300 mb-2 group-hover:text-white transition-colors">{icon}</div>
      <p className="text-[10px] uppercase font-bold text-gray-400 mb-1 tracking-widest">{label}</p>
      <p className="text-xl font-bold text-white drop-shadow-md">{value}</p>
    </div>
  </div>
);

export default Hero;

