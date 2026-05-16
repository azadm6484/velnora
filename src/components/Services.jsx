import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Cloud, Layers, Layout, Shield } from 'lucide-react';
import { useRouter } from '../App';

const Services = () => {
  const { navigate, theme } = useRouter();
  const services = [
    // ... items remain same ...
    {
      title: 'Website Development',
      slug: 'website-development',
      desc: 'High-performance, responsive websites built with modern frameworks like React and Next.js.',
      icon: <Globe size={24} />,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
    },
    {
      title: 'Mobile App Development',
      slug: 'mobile-app-development',
      desc: 'Native and cross-platform mobile applications that provide seamless user experiences.',
      icon: <Smartphone size={24} />,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: 'SaaS / Software Solutions',
      slug: 'saas-software-solutions',
      desc: 'Scalable cloud-native software solutions designed to streamline your business processes.',
      icon: <Cloud size={24} />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: 'UI/UX Design',
      slug: 'ui-ux-design',
      desc: 'User-centric designs that are visually stunning and highly intuitive for your customers.',
      icon: <Layout size={24} />,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: 'Custom Software',
      slug: 'custom-software',
      desc: 'Bespoke software tailored to your specific business needs and industry requirements.',
      icon: <Layers size={24} />,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: 'Security & QA',
      slug: 'security-qa',
      desc: 'Rigorous testing and security audits to ensure your product is robust and reliable.',
      icon: <Shield size={24} />,
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop"
    },
  ];

  return (
    <section className={`py-24 transition-colors duration-500 ${theme === 'light' ? 'bg-white' : 'bg-[#06141B]'} relative overflow-hidden`} id="services">
      {/* Background Image for Services Section */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
          alt="Services Background" 
          className={`w-full h-full object-cover transition-opacity duration-500 ${theme === 'light' ? 'opacity-100' : 'opacity-10'}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${theme === 'light' ? 'from-white/95 via-white/80 to-white/90' : 'from-[#06141B] via-transparent to-[#06141B]'} pointer-events-none transition-colors duration-500`} />
      </div>

      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl lg:text-5xl font-black mb-4 transition-colors duration-500 ${theme === 'light' ? 'text-[#06141B]' : 'text-white'}`}
          >
            Innovative <span className="text-[#4A5C6A] drop-shadow-lg">Services</span>
          </motion.h2>
          <p className={`transition-colors duration-500 ${theme === 'light' ? 'text-gray-700 font-bold' : 'text-[#9BA8AB]'} max-w-2xl mx-auto`}>
            We provide a comprehensive suite of digital solutions to help your business thrive in the modern era.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => navigate(`/services/${service.slug}`)}
              className={`cursor-pointer transition-all duration-500 rounded-3xl overflow-hidden border group hover:shadow-2xl flex flex-col ${theme === 'light' ? 'bg-white/30 backdrop-blur-xl border-white/50 shadow-xl' : 'bg-[#11212D]/80 border-white/5 shadow-2xl'}`}
            >
              <div className="h-48 overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-t ${theme === 'light' ? 'from-white/95 via-white/40 to-transparent' : 'from-[#11212D]/80'} z-10 transition-colors duration-500`} />
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${theme === 'light' ? 'opacity-100' : 'opacity-100'}`}
                />
                <div className={`absolute bottom-4 left-6 z-20 w-14 h-14 ${theme === 'light' ? 'bg-white/40 border-white/60 shadow-lg backdrop-blur-xl' : 'bg-[#4A5C6A]/90 backdrop-blur-sm'} rounded-full flex items-center justify-center border group-hover:scale-110 transition-transform`}>
                  <div className={`${theme === 'light' ? 'text-[#06141B]' : 'text-white'}`}>{service.icon}</div>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className={`text-2xl font-bold mb-4 transition-colors duration-500 ${theme === 'light' ? 'text-[#06141B]' : 'text-white'}`}>{service.title}</h3>
                <p className={`transition-colors duration-500 ${theme === 'light' ? 'text-gray-600' : 'text-[#9BA8AB]'} leading-relaxed flex-1`}>{service.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
