import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      role: 'CEO, Fintech Solutions',
      text: 'VelnoraTech transformed our legacy system into a high-performance cloud application. Their expertise is unmatched.',
      rating: 5,
    },
    {
      name: 'Sarah Smith',
      role: 'Product Manager, HealthTrack',
      text: 'The UI/UX design they delivered exceeded our expectations. Our user engagement has increased by 40% since launch.',
      rating: 5,
    },
    {
      name: 'Michael Brown',
      role: 'CTO, Global Logistics',
      text: 'Working with VelnoraTech was a seamless experience. They are truly an extension of our own team.',
      rating: 5,
    },
  ];

  return (
    <section className="py-24" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">What Our <span className="text-[#4A5C6A]">Clients Say</span></h2>
          <p className="text-[#9BA8AB]">Trusted by industry leaders worldwide.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card p-8 relative"
            >
              <Quote className="absolute top-4 right-4 text-[#4A5C6A]/20" size={48} />
              <div className="flex mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-lg italic text-[#9BA8AB] mb-8 leading-relaxed">"{t.text}"</p>
              <div>
                <h4 className="font-bold text-white">{t.name}</h4>
                <p className="text-sm text-[#4A5C6A]">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
