import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Cloud, Layers, Layout, Shield } from 'lucide-react';

const services = [
  { title: 'Website Development', desc: 'High-performance, responsive websites built with modern frameworks like React and Next.js.', icon: <Globe className="text-[#4A5C6A]" size={32} /> },
  { title: 'Mobile App Development', desc: 'Native and cross-platform mobile applications that provide seamless user experiences.', icon: <Smartphone className="text-[#4A5C6A]" size={32} /> },
  { title: 'SaaS / Software Solutions', desc: 'Scalable cloud-native software solutions designed to streamline your business processes.', icon: <Cloud className="text-[#4A5C6A]" size={32} /> },
  { title: 'UI/UX Design', desc: 'User-centric designs that are visually stunning and highly intuitive for your customers.', icon: <Layout className="text-[#4A5C6A]" size={32} /> },
  { title: 'Custom Software', desc: 'Bespoke software tailored to your specific business needs and industry requirements.', icon: <Layers className="text-[#4A5C6A]" size={32} /> },
  { title: 'Security & QA', desc: 'Rigorous testing and security audits to ensure your product is robust and reliable.', icon: <Shield className="text-[#4A5C6A]" size={32} /> },
];

const ServicesPage = () => (
  <section className="pt-40 pb-24 bg-[#F8F9FA] min-h-screen" id="services">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="inline-block bg-white border border-gray-100 shadow-sm text-xs font-bold uppercase tracking-widest text-[#4A5C6A] px-4 py-1.5 rounded-full mb-4"
        >
          What We Do
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-5xl lg:text-7xl font-black text-[#06141B] mb-6"
        >
          Our <span className="text-[#4A5C6A]">Services</span>
        </motion.h1>
        <p className="text-lg text-[#666] max-w-2xl mx-auto">
          We provide a comprehensive suite of digital solutions to help your business thrive in the modern era.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }} viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
          >
            <div className="mb-6 p-3 bg-[#4A5C6A]/10 rounded-xl inline-block group-hover:scale-110 transition-transform">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#06141B]">{service.title}</h3>
            <p className="text-[#666] leading-relaxed text-sm">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesPage;
