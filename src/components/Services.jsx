import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Cloud, Layers, Layout, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Website Development',
      desc: 'High-performance, responsive websites built with modern frameworks like React and Next.js.',
      icon: <Globe className="text-white" size={24} />,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
    },
    {
      title: 'Mobile App Development',
      desc: 'Native and cross-platform mobile applications that provide seamless user experiences.',
      icon: <Smartphone className="text-white" size={24} />,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: 'SaaS / Software',
      desc: 'Scalable cloud-native software solutions designed to streamline your business processes.',
      icon: <Cloud className="text-white" size={24} />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: 'UI/UX Design',
      desc: 'User-centric designs that are visually stunning and highly intuitive for your customers.',
      icon: <Layout className="text-white" size={24} />,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: 'Custom Software',
      desc: 'Bespoke software tailored to your specific business needs and industry requirements.',
      icon: <Layers className="text-white" size={24} />,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: 'Security & QA',
      desc: 'Rigorous testing and security audits to ensure your product is robust and reliable.',
      icon: <Shield className="text-white" size={24} />,
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop"
    },
  ];

  return (
    <section className="py-24 bg-[#06141B] relative" id="services">
      {/* Background Image for Services Section */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
          alt="Services Background" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06141B] via-transparent to-[#06141B] pointer-events-none" />
      </div>

      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold mb-4 text-white"
          >
            Innovative <span className="text-[#4A5C6A]">Services</span>
          </motion.h2>
          <p className="text-[#9BA8AB] max-w-2xl mx-auto">
            We provide a comprehensive suite of digital solutions to help your business thrive in the modern era.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-[#11212D]/80 backdrop-blur-md rounded-3xl overflow-hidden border border-white/5 group transition-all duration-300 hover:shadow-[0_20px_50px_rgba(74,92,106,0.2)] hover:border-white/20 flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#11212D]/80 z-10" />
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-6 z-20 p-3 bg-[#4A5C6A]/90 backdrop-blur-sm rounded-xl inline-block group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-[#9BA8AB] leading-relaxed flex-1">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
