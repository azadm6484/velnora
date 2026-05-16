import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Users, Layers, Globe, Shield, X } from 'lucide-react';
import { useRouter } from '../App';

const Hero = () => {
  const { navigate, setQuoteModalMode, theme } = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const showcaseImages = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=70&w=1200",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=70&w=1200",
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=70&w=1200"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % showcaseImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [showcaseImages.length]);

  return (
    <section id="home" className={`relative pt-32 pb-20 overflow-hidden transition-colors duration-500 ${theme === 'dark' ? 'bg-[#06141B]' : 'bg-[#F8F9FA]'}`}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=60&w=1200&auto=format&fit=crop"
          alt="Technology Background"
          className={`w-full h-full object-cover transition-opacity duration-500 ${theme === 'dark' ? 'opacity-20' : 'opacity-100'}`}
          loading="eager"
        />
        <div className={`absolute inset-0 bg-gradient-to-b ${theme === 'dark' ? 'from-[#06141B]/80 via-[#06141B]/60 to-[#06141B]' : 'from-white/95 via-white/80 to-white/90'} pointer-events-none transition-colors duration-500`} />
      </div>

      <div className="relative z-10 w-full mx-auto px-2 sm:px-6 lg:px-8">
        <header className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex items-center space-x-2 ${theme === 'light' ? 'bg-white/10 border-white/20 shadow-lg' : 'bg-white/10 border-white/10 shadow-sm'} backdrop-blur-xl px-4 py-1.5 rounded-full border mb-6 transition-all duration-500`}
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className={`text-xs font-bold uppercase tracking-widest ${theme === 'light' ? 'text-[#06141B]' : 'text-white/80'}`}>Next-Gen SaaS Solutions</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`text-5xl sm:text-7xl lg:text-8xl font-black ${theme === 'light' ? 'text-[#06141B]' : 'text-white'} leading-[1.1] mb-6 transition-colors duration-500`}
          >
            Velnora<span className="text-[#4A5C6A] drop-shadow-lg">Tech</span><span className="text-[#4A5C6A] drop-shadow-lg"> Software</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`text-lg ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'} max-w-2xl mb-10 transition-colors duration-500`}
          >
            A variety of scalable options are available for your business to
            thrive in the future digital landscape. Certified Enterprise Grade.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setQuoteModalMode('calendly')}
              className={`${theme === 'light' ? 'bg-[#06141B] text-white' : 'bg-white text-[#06141B]'} font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-[1.05] active:scale-[0.95] shadow-xl flex items-center justify-center gap-2`}
            >
              Schedule a Discovery Call <ArrowRight size={18} />
            </button>
            <button
              onClick={() => setQuoteModalMode('quote')}
              className={`bg-white/10 backdrop-blur-xl border border-white/20 ${theme === 'light' ? 'text-[#06141B] hover:bg-white/20' : 'text-white border-white/20 hover:bg-white/10'} font-bold px-8 py-4 rounded-full transition-all duration-300 active:scale-[0.95] flex items-center justify-center gap-2 shadow-lg`}
            >
              Get a Free Quote
            </button>
          </div>
        </header>

        {/* Product Showcase with Hotspots */}
        <section className="relative w-full max-w-7xl mx-auto h-[300px] sm:h-[450px] lg:h-[650px] flex items-center justify-center perspective-1000">
          {showcaseImages.map((src, index) => {
            const position = index - currentIndex;
            const diff = position < -1 ? position + 3 : position > 1 ? position - 3 : position;

            const isCenter = diff === 0;
            const isLeft = diff === -1;
            const isRight = diff === 1;

            return (
              <motion.div
                key={index}
                className={`absolute w-[95%] sm:w-[85%] lg:w-[70%] max-w-5xl rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl border cursor-pointer will-change-transform ${theme === 'light' ? 'bg-white/30 backdrop-blur-xl border-white/50' : 'bg-[#11212D] border-white/10'}`}
                animate={{
                  x: isCenter ? "0%" : isLeft ? "-45%" : "45%",
                  scale: isCenter ? 1 : 0.75,
                  zIndex: isCenter ? 20 : 10,
                  opacity: isCenter ? 1 : 0.4,
                }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                onClick={() => {
                  if (isCenter) setSelectedImage(src);
                  else setCurrentIndex(index);
                }}
              >
                <img
                  src={src}
                  alt={`Dashboard Showcase ${index + 1}`}
                  className={`w-full h-full aspect-[16/10] object-cover pointer-events-none ${theme === 'light' ? 'opacity-100' : 'opacity-90 mix-blend-lighten'}`}
                  loading="lazy"
                />

                {/* Hotspots */}
                {isCenter && index === 0 && (
                  <>
                    <Hotspot x="20%" y="40%" label="AI Integration" theme={theme} />
                    <Hotspot x="45%" y="60%" label="Real-time Analytics" theme={theme} />
                    <Hotspot x="75%" y="30%" label="Cloud Infrastructure" theme={theme} />
                  </>
                )}
              </motion.div>
            );
          })}

          {/* Floating Spec Cards */}
          <motion.div
            animate={{ opacity: currentIndex === 0 ? 1 : 0, x: currentIndex === 0 ? 0 : 50 }}
            transition={{ duration: 0.5 }}
            className={`absolute hidden lg:block right-0 lg:-right-4 top-1/4 w-64 backdrop-blur-xl border p-6 rounded-3xl shadow-2xl z-30 pointer-events-none transition-all duration-500 ${theme === 'light' ? 'bg-white/40 border-white/60' : 'bg-[#11212D]/90 border-white/10'}`}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className={`p-2 rounded-xl ${theme === 'light' ? 'bg-[#06141B]/10 text-[#06141B]' : 'bg-white/10 text-white'}`}>
                <Users size={20} />
              </div>
              <span className={`text-xs font-black uppercase tracking-widest ${theme === 'light' ? 'text-[#06141B]' : 'text-white'}`}>Unsurpassed Power</span>
            </div>
            <p className={`text-sm mb-6 font-bold leading-relaxed ${theme === 'light' ? 'text-gray-700' : 'text-gray-400'}`}>A handcrafted suite of AI tools that unleashes a torrent of productivity.</p>
            <div className={`pt-4 border-t ${theme === 'light' ? 'border-[#06141B]/10' : 'border-white/10'}`}>
              <span className={`text-[10px] font-black uppercase tracking-tighter ${theme === 'light' ? 'text-[#4A5C6A]' : 'text-gray-500'}`}>v-system-pro</span>
            </div>
          </motion.div>
        </section>

        {/* Bottom Feature Grid */}
        <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-20">
          <SpecCard icon={<Users size={20} />} label="Capacity" value="Unlimited" image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=60&w=400&auto=format&fit=crop" theme={theme} />
          <SpecCard icon={<Layers size={20} />} label="Engine" value="Turbo AI" image="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=60&w=400&auto=format&fit=crop" theme={theme} />
          <SpecCard icon={<Shield size={20} />} label="Power" value="Secure V8" image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=60&w=400&auto=format&fit=crop" theme={theme} />
          <SpecCard icon={<Globe size={20} />} label="Network" value="Global" image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=60&w=400&auto=format&fit=crop" theme={theme} />
          <SpecCard icon={<ArrowRight size={20} />} label="Speed" value="0.1 sec" image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=60&w=400&auto=format&fit=crop" theme={theme} />
        </section>
      </div>

      {/* Modal Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <motion.button
              className="absolute top-8 right-8 text-white p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              whileHover={{ rotate: 90 }}
            >
              <X size={24} />
            </motion.button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              className="max-w-full max-h-full rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
              alt="Preview"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Hotspot = ({ x, y, label, theme }) => (
  <motion.div
    style={{ left: x, top: y }}
    className="absolute group z-10"
  >
    <div className={`w-6 h-6 rounded-full flex items-center justify-center shadow-xl cursor-pointer transition-colors duration-500 ${theme === 'light' ? 'bg-[#06141B] shadow-[#06141B]/20' : 'bg-white shadow-white/20'}`}>
      <div className={`w-2 h-2 rounded-full ${theme === 'light' ? 'bg-white' : 'bg-[#06141B]'}`} />
    </div>
    <div className={`absolute left-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 rounded-full shadow-2xl whitespace-nowrap border ${theme === 'light' ? 'bg-[#06141B] border-white/10' : 'bg-white border-black/10'}`}>
      <span className={`text-xs font-black uppercase tracking-widest ${theme === 'light' ? 'text-white' : 'text-[#06141B]'}`}>{label}</span>
    </div>
  </motion.div>
);

const SpecCard = ({ icon, label, value, image, theme }) => (
  <div className={`relative overflow-hidden p-6 rounded-3xl transition-all group min-h-[140px] flex flex-col justify-end border ${theme === 'dark' ? 'bg-[#11212D]/60 border-white/5 shadow-2xl' : 'bg-white/30 backdrop-blur-xl border-white/50 shadow-xl hover:shadow-2xl'}`}>
    {image && (
      <img src={image} alt={label} className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${theme === 'dark' ? 'opacity-30 group-hover:opacity-50' : 'opacity-100 group-hover:opacity-100'}`} loading="lazy" />
    )}
    <div className={`absolute inset-0 bg-gradient-to-t ${theme === 'dark' ? 'from-[#06141B]/90 via-[#06141B]/40' : 'from-white/95 via-white/40'} to-transparent pointer-events-none`} />
    <div className="relative z-10 mt-auto">
      <div className={`w-12 h-12 ${theme === 'light' ? 'bg-white/40 border-white/60 shadow-lg' : 'bg-white/10 border-white/10'} backdrop-blur-xl rounded-2xl flex items-center justify-center border mb-3 group-hover:scale-110 transition-transform`}>
        <div className={theme === 'light' ? 'text-[#06141B]' : 'text-gray-300'}>{icon}</div>
      </div>
      <p className={`text-[10px] uppercase font-black ${theme === 'dark' ? 'text-gray-400' : 'text-[#06141B]/60'} mb-1 tracking-widest`}>{label}</p>
      <p className={`text-xl font-black ${theme === 'dark' ? 'text-white' : 'text-[#06141B]'} drop-shadow-sm transition-colors duration-500`}>{value}</p>
    </div>
  </div>
);

export default Hero;
