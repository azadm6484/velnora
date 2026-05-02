import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Users, Award, Globe, Clock } from 'lucide-react';

const stats = [
  { value: '500+', label: 'Projects Delivered', icon: <Award size={24} /> },
  { value: '50+', label: 'Happy Clients', icon: <Users size={24} /> },
  { value: '12+', label: 'Countries Served', icon: <Globe size={24} /> },
  { value: '5+', label: 'Years Experience', icon: <Clock size={24} /> },
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
  <section className="pt-40 pb-24 bg-[#F8F9FA] min-h-screen" id="about">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-20">
        <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="inline-block bg-white border border-gray-100 shadow-sm text-xs font-bold uppercase tracking-widest text-[#4A5C6A] px-4 py-1.5 rounded-full mb-4">
          Who We Are
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-5xl lg:text-7xl font-black text-[#06141B] mb-6">
          About <span className="text-[#4A5C6A]">VelnoraTech</span>
        </motion.h1>
        <p className="text-lg text-[#666] max-w-3xl mx-auto">
          We are a premier software development company based in Greater Noida, India — building scalable digital products for businesses worldwide since 2019.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
        {stats.map((stat, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }} viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center">
            <div className="text-[#4A5C6A] flex justify-center mb-3">{stat.icon}</div>
            <h3 className="text-4xl font-black text-[#06141B] mb-1">{stat.value}</h3>
            <p className="text-sm text-[#666] uppercase tracking-wider">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Why Choose Us */}
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl font-black text-[#06141B] mb-10">Why Businesses <span className="text-[#4A5C6A]">Choose Us</span></h2>
          <div className="space-y-6">
            {points.map((point, i) => (
              <div key={i} className="flex gap-4">
                <CheckCircle2 className="text-[#4A5C6A] shrink-0 mt-1" size={22} />
                <div>
                  <h4 className="font-bold text-[#06141B] mb-1">{point.title}</h4>
                  <p className="text-[#666] text-sm leading-relaxed">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="bg-white rounded-3xl p-12 border border-gray-100 shadow-sm text-center">
          <div className="w-32 h-32 bg-[#06141B] rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="text-4xl font-black text-white">VT</span>
          </div>
          <h3 className="text-2xl font-black text-[#06141B] mb-4">VelnoraTech Software Pvt Ltd</h3>
          <p className="text-[#666] text-sm leading-relaxed mb-6">
            Gaur Chowk, Plot No. 17, Tech Zone IV,<br />
            Amrapali Dream Valley, Greater Noida, UP 201318
          </p>
          <a href="mailto:info@velnoratech.com"
            className="inline-block bg-[#06141B] text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-[#253745] transition-all">
            info@velnoratech.com
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutPage;
