import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Cloud, Layers, Layout, Shield, Cpu } from 'lucide-react';
import { useRouter } from '../App';

const services = [
  { title: 'Website Development', slug: 'website-development', desc: 'High-performance, responsive websites built with modern frameworks like React and Next.js.', icon: <Globe className="text-[#4A5C6A]" size={32} />, image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=60&w=600&auto=format&fit=crop' },
  { title: 'Mobile App Development', slug: 'mobile-app-development', desc: 'Native and cross-platform mobile applications that provide seamless user experiences.', icon: <Smartphone className="text-[#4A5C6A]" size={32} />, image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=60&w=600&auto=format&fit=crop' },
  { title: 'SaaS / Software Solutions', slug: 'saas-software-solutions', desc: 'Scalable cloud-native software solutions designed to streamline your business processes.', icon: <Cloud className="text-[#4A5C6A]" size={32} />, image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=60&w=600&auto=format&fit=crop' },
  { title: 'UI/UX Design', slug: 'ui-ux-design', desc: 'User-centric designs that are visually stunning and highly intuitive for your customers.', icon: <Layout className="text-[#4A5C6A]" size={32} />, image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=60&w=600&auto=format&fit=crop' },
  { title: 'Custom Software', slug: 'custom-software', desc: 'Bespoke software tailored to your specific business needs and industry requirements.', icon: <Layers className="text-[#4A5C6A]" size={32} />, image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=60&w=600&auto=format&fit=crop' },
  { title: 'Security & QA', slug: 'security-qa', desc: 'Rigorous testing and security audits to ensure your product is robust and reliable.', icon: <Shield className="text-[#4A5C6A]" size={32} />, image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=60&w=600&auto=format&fit=crop' },
  { title: 'Automation Solutions', slug: 'automation-solutions', desc: 'Optimize your workflows with n8n, Make.com, and Zapier. Automated booking systems, lead generation, and data syncing.', icon: <Cpu className="text-[#4A5C6A]" size={32} />, image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200' },
];

const ServicesPage = () => {
  const { navigate, theme } = useRouter();

  return (
    <section className={`relative pt-24 sm:pt-32 pb-24 min-h-screen overflow-hidden transition-colors duration-500 ${theme === 'light' ? 'bg-white' : 'bg-[#06141B]'}`} id="services">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" 
          alt="Technology Background" 
          className={`w-full h-full object-cover transition-opacity duration-500 ${theme === 'light' ? 'opacity-[0.15]' : 'opacity-20'}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-b ${theme === 'light' ? 'from-white/60 via-white/80 to-white' : 'from-[#06141B]/80 via-[#06141B]/60 to-[#06141B]'} pointer-events-none transition-colors duration-500`} />
      </div>

      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className={`inline-block ${theme === 'light' ? 'bg-[#06141B]/5 border-[#06141B]/10 text-[#06141B]/80' : 'bg-white/10 border-white/10 text-white/80'} backdrop-blur-md shadow-sm text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border transition-colors duration-500`}
          >
            What We Do
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className={`text-4xl sm:text-6xl lg:text-7xl font-black mb-6 ${theme === 'light' ? 'text-[#06141B]' : 'text-white'} transition-colors duration-500`}
          >
            Our <span className="text-[#4A5C6A] drop-shadow-lg">Services</span>
          </motion.h1>
          <p className={`text-lg ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'} max-w-2xl mx-auto transition-colors duration-500`}>
            We provide a comprehensive suite of digital solutions to help your business thrive in the modern era.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }} viewport={{ once: true }}
              whileHover={{ y: -8 }}
              onClick={() => navigate(`/services/${service.slug}`)}
              className={`relative overflow-hidden cursor-pointer p-8 rounded-3xl border transition-all duration-300 group ${theme === 'light' ? 'bg-white/30 backdrop-blur-xl border-white/50 shadow-xl hover:shadow-2xl hover:border-[#4A5C6A]/30' : 'bg-[#11212D]/60 border-white/5 shadow-sm hover:border-white/20'}`}
            >
              {service.image && (
                <img src={service.image} alt={service.title} className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${theme === 'light' ? 'opacity-100' : 'opacity-10 group-hover:opacity-20'}`} loading="eager" />
              )}
              <div className={`absolute inset-0 bg-gradient-to-t ${theme === 'light' ? 'from-white/95 via-white/40 to-transparent' : 'from-[#06141B]/90'} pointer-events-none transition-colors duration-500`} />
              <div className="relative z-10">
                <div className={`mb-6 w-14 h-14 ${theme === 'light' ? 'bg-white/40 border-white/60 shadow-lg backdrop-blur-xl' : 'bg-white/10 border-white/10 backdrop-blur-md'} rounded-full flex items-center justify-center border group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className={`text-xl font-bold mb-3 ${theme === 'light' ? 'text-[#06141B]' : 'text-white'} transition-colors duration-500`}>{service.title}</h3>
                <p className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} leading-relaxed text-sm transition-colors duration-500`}>{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
