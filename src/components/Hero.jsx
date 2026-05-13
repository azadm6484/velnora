import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Users, Layers, Globe, Shield, X } from 'lucide-react';
import { useRouter } from '../App';

const Hero = () => {
  const { navigate, setQuoteModalMode } = useRouter();
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
    <section id="home" className="relative pt-32 pb-20 overflow-hidden bg-[#06141B]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=60&w=1200&auto=format&fit=crop"
          alt="Technology Background"
          className="w-full h-full object-cover opacity-20"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#06141B]/80 via-[#06141B]/60 to-[#06141B] pointer-events-none" />
      </div>

      <div className="relative z-10 w-full mx-auto px-2 sm:px-6 lg:px-8">
        <header className="flex flex-col items-center text-center">
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
            className="text-5xl sm:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-6"
          >
            Velnora<span className="text-[#4A5C6A] drop-shadow-lg">Tech</span><span className="text-[#4A5C6A] drop-shadow-lg"> Software</span>
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
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setQuoteModalMode('calendly')}
              className="bg-white text-[#06141B] font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-[1.05] active:scale-[0.95] shadow-[0_0_30px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2"
            >
              Schedule a Discovery Call <ArrowRight size={18} />
            </button>
            <button
              onClick={() => setQuoteModalMode('quote')}
              className="bg-transparent text-white border border-white/20 font-bold px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/10 active:scale-[0.95] flex items-center justify-center gap-2"
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
                className="absolute w-[95%] sm:w-[85%] lg:w-[70%] max-w-5xl rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] overflow-hidden bg-[#11212D] shadow-2xl border border-white/10 cursor-pointer will-change-transform"
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
                  className="w-full h-full aspect-[16/10] object-cover opacity-90 mix-blend-lighten pointer-events-none"
                  loading="lazy"
                />

                {/* Hotspots */}
                {isCenter && index === 0 && (
                  <>
                    <Hotspot x="20%" y="40%" label="AI Integration" />
                    <Hotspot x="45%" y="60%" label="Real-time Analytics" />
                    <Hotspot x="75%" y="30%" label="Cloud Infrastructure" />
                  </>
                )}
              </motion.div>
            );
          })}

          {/* Floating Spec Cards */}
          <motion.div
            animate={{ opacity: currentIndex === 0 ? 1 : 0, x: currentIndex === 0 ? 0 : 50 }}
            transition={{ duration: 0.5 }}
            className="absolute hidden lg:block right-0 lg:-right-4 top-1/4 w-64 bg-[#11212D]/90 backdrop-blur-xl border border-white/10 text-white p-6 rounded-3xl shadow-2xl z-30 pointer-events-none"
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
        </section>

        {/* Bottom Feature Grid */}
        <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-20">
          <SpecCard icon={<Users size={20} />} label="Capacity" value="Unlimited" image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=60&w=400&auto=format&fit=crop" />
          <SpecCard icon={<Layers size={20} />} label="Engine" value="Turbo AI" image="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=60&w=400&auto=format&fit=crop" />
          <SpecCard icon={<Shield size={20} />} label="Power" value="Secure V8" image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=60&w=400&auto=format&fit=crop" />
          <SpecCard icon={<Globe size={20} />} label="Network" value="Global" image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=60&w=400&auto=format&fit=crop" />
          <SpecCard icon={<ArrowRight size={20} />} label="Speed" value="0.1 sec" image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=60&w=400&auto=format&fit=crop" />
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
      <img src={image} alt={label} className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-all duration-700 group-hover:scale-110" loading="lazy" />
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

