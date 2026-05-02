import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Cloud, Layers, Layout, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Website Development',
      desc: 'High-performance, responsive websites built with modern frameworks like React and Next.js.',
      icon: <Globe className="text-[#4A5C6A]" size={32} />,
    },
    {
      title: 'Mobile App Development',
      desc: 'Native and cross-platform mobile applications that provide seamless user experiences.',
      icon: <Smartphone className="text-[#4A5C6A]" size={32} />,
    },
    {
      title: 'SaaS / Software Solutions',
      desc: 'Scalable cloud-native software solutions designed to streamline your business processes.',
      icon: <Cloud className="text-[#4A5C6A]" size={32} />,
    },
    {
      title: 'UI/UX Design',
      desc: 'User-centric designs that are visually stunning and highly intuitive for your customers.',
      icon: <Layout className="text-[#4A5C6A]" size={32} />,
    },
    {
      title: 'Custom Software',
      desc: 'Bespoke software tailored to your specific business needs and industry requirements.',
      icon: <Layers className="text-[#4A5C6A]" size={32} />,
    },
    {
      title: 'Security & QA',
      desc: 'Rigorous testing and security audits to ensure your product is robust and reliable.',
      icon: <Shield className="text-[#4A5C6A]" size={32} />,
    },
  ];

  return (
    <section className="py-24 bg-[#11212D]/50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold mb-4"
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
              className="glass-card p-8 group transition-all duration-300 hover:shadow-[0_20px_50px_rgba(74,92,106,0.2)]"
            >
              <div className="mb-6 p-3 bg-[#4A5C6A]/10 rounded-xl inline-block group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-[#9BA8AB] leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
