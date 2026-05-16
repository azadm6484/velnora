import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Users, Award, Globe, Clock } from 'lucide-react';
import logo from '../assets/velnora_favicon.png';

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

const AboutPage = () => (
  <section className="relative pt-24 sm:pt-32 pb-24 min-h-screen overflow-hidden bg-[#06141B]" id="about">
    {/* Background Image */}
    <div className="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=60&w=1200&auto=format&fit=crop"
        alt="Technology Background"
        className="w-full h-full object-cover opacity-20"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#06141B]/80 via-[#06141B]/60 to-[#06141B] pointer-events-none" />
    </div>

    <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="text-center mb-20">
        <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="inline-block bg-white/10 border border-white/10 backdrop-blur-md shadow-sm text-xs font-bold uppercase tracking-widest text-white/80 px-4 py-1.5 rounded-full mb-4">
          Who We Are
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-black text-white mb-6">
          About <span className="text-[#4A5C6A] drop-shadow-lg">VelnoraTech</span>
        </motion.h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          We are a premier software development company based in Greater Noida, India — building scalable digital products for businesses worldwide since 2023.
        </p>
      </header>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
        {stats.map((stat, i) => (
          <motion.article key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }} viewport={{ once: true }}
            className="relative overflow-hidden bg-[#11212D]/60 backdrop-blur-sm p-8 rounded-3xl border border-white/5 shadow-sm hover:border-white/20 transition-all text-center group">
            {stat.image && (
              <img src={stat.image} alt={stat.label} className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-all duration-700 group-hover:scale-110" loading="eager" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#06141B]/90 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <div className="text-gray-300 flex justify-center mb-3 group-hover:text-white transition-colors">{stat.icon}</div>
              <h3 className="text-4xl font-black text-white mb-1 drop-shadow-md">{stat.value}</h3>
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">{stat.label}</p>
            </div>
          </motion.article>
        ))}
      </section>

      {/* Why Choose Us */}
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.section initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl font-black text-white mb-10">Why Businesses <span className="text-[#4A5C6A] drop-shadow-lg">Choose Us</span></h2>
          <div className="space-y-6">
            {points.map((point, i) => (
              <article key={i} className="flex gap-4">
                <CheckCircle2 className="text-green-400 shrink-0 mt-1" size={22} />
                <div>
                  <h4 className="font-bold text-white mb-1">{point.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{point.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </motion.section>
        <motion.aside initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="bg-[#11212D]/60 backdrop-blur-sm rounded-3xl p-12 border border-white/5 shadow-sm hover:border-white/20 transition-all text-center">
          <div className="w-32 h-32 bg-[#06141B] border border-white/10 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl overflow-hidden p-3">
            <img src={logo} alt="VelnoraTech" className="w-full h-full object-contain" />
          </div>
          <h3 className="text-2xl font-black text-white mb-4">VelnoraTech Software Pvt Ltd</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            NX-One, Tech, Amrapali Dream Valley, B-114, Zone IV,<br />
            Greater Noida, Uttar Pradesh 201318
          </p>
          <a href="mailto:info@velnorasoftware.com"
            className="inline-block bg-white text-[#06141B] px-8 py-3 rounded-full font-bold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            info@velnorasoftware.com
          </a>
        </motion.aside>
      </div>
    </div>
  </section>
);

export default AboutPage;
