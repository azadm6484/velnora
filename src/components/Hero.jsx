import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Users, Layers, Globe, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-40 pb-20 overflow-hidden bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-2 bg-white px-4 py-1.5 rounded-full border border-gray-100 shadow-sm mb-6"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#666666]">Next-Gen SaaS Solutions</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl lg:text-8xl font-black text-[#06141B] leading-none mb-6"
          >
            Velnora <span className="text-[#4A5C6A]">Software</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#666666] max-w-2xl mb-10"
          >
            A variety of scalable options are available for your business to
            thrive in the future digital landscape. Certified Enterprise Grade.
          </motion.p>
          <div className="flex space-x-4">
            <button className="bg-[#06141B] text-white font-medium px-8 py-3 rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-black/10">Configurate</button>
            <button className="bg-white text-[#0A0A0A] border border-gray-200 font-medium px-8 py-3 rounded-full transition-all duration-300 hover:bg-gray-50 active:scale-[0.98]">Experience</button>
          </div>
        </div>

        {/* Product Showcase with Hotspots */}
        <div className="relative max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative rounded-[3rem] overflow-hidden bg-white shadow-2xl border border-white"
          >
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426"
              alt="Dashboard Showcase"
              className="w-full h-auto opacity-80"
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
            className="absolute -right-8 top-1/4 w-64 bg-[#06141B] text-white p-6 rounded-3xl shadow-2xl z-20"
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
          <SpecCard icon={<Users size={20} />} label="Capacity" value="Unlimited" />
          <SpecCard icon={<Layers size={20} />} label="Engine" value="Turbo AI" />
          <SpecCard icon={<Shield size={20} />} label="Power" value="Secure V8" />
          <SpecCard icon={<Globe size={20} />} label="Network" value="Global" />
          <SpecCard icon={<ArrowRight size={20} />} label="Speed" value="0.1 sec" />
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
    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer">
      <div className="w-2 h-2 bg-[#06141B] rounded-full" />
    </div>
    <div className="absolute left-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white px-4 py-2 rounded-full shadow-xl border border-gray-100 whitespace-nowrap">
      <span className="text-xs font-bold text-[#06141B]">{label}</span>
    </div>
  </motion.div>
);

const SpecCard = ({ icon, label, value }) => (
  <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
    <div className="text-[#666666] mb-4">{icon}</div>
    <p className="text-[10px] uppercase font-bold text-[#666666] mb-1 tracking-widest">{label}</p>
    <p className="text-xl font-bold text-[#06141B]">{value}</p>
  </div>
);

export default Hero;
