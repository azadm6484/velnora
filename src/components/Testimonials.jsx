import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useRouter } from '../App';

const Testimonials = () => {
  const { theme } = useRouter();
  const testimonials = [
    {
      name: 'John Doe',
      role: 'CEO, Fintech Solutions',
      text: 'VelnoraTech transformed our legacy system into a high-performance cloud application. Their expertise is unmatched.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop'
    },
    {
      name: 'Sarah Smith',
      role: 'Product Manager, HealthTrack',
      text: 'The UI/UX design they delivered exceeded our expectations. Our user engagement has increased by 40% since launch.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&auto=format&fit=crop'
    },
    {
      name: 'Michael Brown',
      role: 'CTO, Global Logistics',
      text: 'Working with VelnoraTech was a seamless experience. They are truly an extension of our own team.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&auto=format&fit=crop'
    },
  ];

  return (
    <section className={`py-24 transition-colors duration-500 ${theme === 'light' ? 'bg-white' : 'bg-[#06141B]'} relative overflow-hidden`} id="testimonials">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop"
          alt="Testimonials Background"
          className={`w-full h-full object-cover transition-opacity duration-500 mix-blend-luminosity ${theme === 'light' ? 'opacity-100' : 'opacity-10'}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${theme === 'light' ? 'from-white/95 via-white/80 to-white/90' : 'from-[#06141B] via-[#06141B]/80 to-[#06141B]'} pointer-events-none transition-colors duration-500`} />
      </div>

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <header className="text-center mb-20">
          <h2 className={`text-4xl lg:text-5xl font-black mb-4 transition-colors duration-500 ${theme === 'light' ? 'text-[#06141B]' : 'text-white'}`}>
            What Our <span className="text-[#4A5C6A] drop-shadow-lg">Clients Say</span>
          </h2>
          <p className={`transition-colors duration-500 ${theme === 'light' ? 'text-gray-700 font-bold' : 'text-[#9BA8AB]'} max-w-2xl mx-auto text-lg`}>
            Trusted by industry leaders worldwide.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`backdrop-blur-xl border transition-all duration-300 rounded-3xl p-8 relative shadow-2xl ${theme === 'light' ? 'bg-white/30 border-white/50 hover:border-[#4A5C6A]/30' : 'bg-[#11212D]/60 border-white/5 hover:border-white/20'}`}
            >
              <Quote className="absolute top-6 right-6 text-[#4A5C6A]/30" size={64} />

              <div className="flex mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-500 fill-current drop-shadow-md" />
                ))}
              </div>

              <p className={`text-lg italic mb-8 leading-relaxed relative z-10 min-h-[100px] transition-colors duration-500 ${theme === 'light' ? 'text-[#06141B] font-bold' : 'text-gray-300'}`}>"{t.text}"</p>

              <div className={`flex items-center gap-4 mt-auto border-t transition-colors duration-500 ${theme === 'light' ? 'border-[#06141B]/10' : 'border-white/10'} pt-6`}>
                <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-[#4A5C6A]" />
                <div>
                  <h4 className={`font-black text-lg transition-colors duration-500 ${theme === 'light' ? 'text-[#06141B]' : 'text-white'}`}>{t.name}</h4>
                  <p className="text-sm text-[#4A5C6A] font-bold">{t.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
