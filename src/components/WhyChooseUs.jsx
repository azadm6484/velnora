import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const WhyChooseUs = () => {
  const points = [
    { title: 'Expert Team', desc: 'Our developers and designers are industry veterans with deep expertise.' },
    { title: 'Agile Methodology', desc: 'Fast delivery without compromising on quality through sprint-based work.' },
    { title: 'Scalable Solutions', desc: 'We build products that grow with your business, ensuring long-term success.' },
    { title: '24/7 Support', desc: 'Round-the-clock maintenance and support for your critical applications.' },
  ];

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">Why Businesses <span className="text-[#4A5C6A]">Choose Us</span></h2>
            <div className="space-y-8">
              {points.map((point, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="text-[#4A5C6A]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{point.title}</h3>
                    <p className="text-[#9BA8AB] leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-card aspect-square flex items-center justify-center p-12 overflow-hidden">
              <div className="grid grid-cols-2 gap-8 w-full h-full">
                <div className="bg-white/5 rounded-3xl animate-pulse" />
                <div className="bg-[#4A5C6A]/20 rounded-3xl" />
                <div className="bg-[#666666]/30 rounded-3xl" />
                <div className="bg-white/5 rounded-3xl animate-pulse delay-75" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-32 h-32 glass-nav rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(74,92,106,0.5)]">
                    <span className="text-3xl font-bold">VT</span>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
