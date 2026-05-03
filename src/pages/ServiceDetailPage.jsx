import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Layers, Smartphone, Globe, Shield, Cloud, Layout } from 'lucide-react';
import { useRouter } from '../App';

const serviceData = {
  'website-development': {
    title: 'Website Development',
    icon: <Globe size={48} className="text-white" />,
    shortDesc: 'High-performance, responsive websites built with modern frameworks.',
    fullDesc: 'We build blazing-fast, highly scalable, and secure web applications tailored to your business needs. Our approach focuses on seamless user experiences and modern architectures like Jamstack and Headless CMS.',
    features: ['Responsive & Mobile-First Design', 'SEO Optimization Built-in', 'Custom CMS Integration', 'High-Performance Architecture (Next.js, React)', 'E-commerce Capabilities', 'API Integration & Development'],
    techStack: ['React.js', 'Next.js', 'Tailwind CSS', 'Node.js', 'Vercel', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=60&w=1200',
  },
  'mobile-app-development': {
    title: 'Mobile App Development',
    icon: <Smartphone size={48} className="text-white" />,
    shortDesc: 'Native and cross-platform mobile applications for iOS and Android.',
    fullDesc: 'Transform your ideas into robust mobile applications. We deliver pixel-perfect, native-like experiences across platforms using cutting-edge frameworks, ensuring high performance and user retention.',
    features: ['Cross-platform & Native Apps', 'Intuitive UI/UX Design', 'Push Notifications & Real-time Updates', 'Offline Capabilities', 'App Store Deployment & Optimization', 'Ongoing Maintenance & Support'],
    techStack: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'GraphQL'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=60&w=1200',
  },
  'saas-software-solutions': {
    title: 'SaaS / Software Solutions',
    icon: <Cloud size={48} className="text-white" />,
    shortDesc: 'Scalable cloud-native software solutions designed to streamline your business.',
    fullDesc: 'We architect and develop comprehensive SaaS platforms that handle millions of users effortlessly. From multi-tenant architectures to complex billing integrations, we deliver production-ready cloud software.',
    features: ['Multi-Tenant Architecture', 'Secure Authentication & RBAC', 'Subscription & Billing Integration', 'Microservices Architecture', 'Real-time Analytics Dashboard', 'Third-party API Integrations'],
    techStack: ['Node.js', 'AWS', 'Docker', 'Kubernetes', 'Stripe', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=60&w=1200',
  },
  'ui-ux-design': {
    title: 'UI/UX Design',
    icon: <Layout size={48} className="text-white" />,
    shortDesc: 'User-centric designs that are visually stunning and highly intuitive.',
    fullDesc: 'Our design philosophy puts your users first. We create aesthetically pleasing, highly functional interfaces that reduce friction and increase conversion rates, backed by thorough user research and testing.',
    features: ['User Research & Persona Mapping', 'Wireframing & Rapid Prototyping', 'High-Fidelity Visual Design', 'Design Systems & Component Libraries', 'Usability Testing', 'Interaction Design & Micro-animations'],
    techStack: ['Figma', 'Adobe XD', 'Framer', 'Protopie', 'Illustrator', 'After Effects'],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=60&w=1200',
  },
  'custom-software': {
    title: 'Custom Software',
    icon: <Layers size={48} className="text-white" />,
    shortDesc: 'Bespoke software tailored to your specific business needs and industry.',
    fullDesc: 'We build enterprise-grade custom software that solves unique business challenges. When off-the-shelf solutions fall short, we develop sophisticated, proprietary systems that give you a competitive edge.',
    features: ['Enterprise Resource Planning (ERP)', 'Customer Relationship Management (CRM)', 'Legacy System Modernization', 'Automated Workflows', 'Business Intelligence Tools', 'IoT Integration'],
    techStack: ['Python', 'Django', 'Java', 'Spring Boot', 'PostgreSQL', 'Redis'],
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=60&w=1200',
  },
  'security-qa': {
    title: 'Security & QA',
    icon: <Shield size={48} className="text-white" />,
    shortDesc: 'Rigorous testing and security audits to ensure your product is reliable.',
    fullDesc: 'Quality and security are non-negotiable. We implement comprehensive testing protocols and security audits to identify vulnerabilities before they reach production, ensuring your application is bulletproof.',
    features: ['Automated End-to-End Testing', 'Penetration Testing & Security Audits', 'Performance & Load Testing', 'CI/CD Pipeline Integration', 'Compliance Standards (HIPAA, GDPR)', 'Code Quality Analysis'],
    techStack: ['Cypress', 'Selenium', 'Jest', 'OWASP ZAP', 'SonarQube', 'GitHub Actions'],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=60&w=1200',
  }
};

const ServiceDetailPage = () => {
  const { currentPath, navigate } = useRouter();
  
  // Extract service ID from path e.g. "/services/website-development"
  const pathParts = currentPath.split('/');
  const serviceId = pathParts[pathParts.length - 1];
  
  const service = serviceData[serviceId];

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPath]);

  if (!service) {
    return (
      <section className="pt-32 pb-24 min-h-screen bg-[#06141B] flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-black text-white mb-4">Service Not Found</h1>
        <p className="text-gray-400 mb-8">The service you're looking for doesn't exist or has been moved.</p>
        <button onClick={() => navigate('/services')} className="bg-white text-[#06141B] px-8 py-3 rounded-full font-bold">
          View All Services
        </button>
      </section>
    );
  }

  return (
    <div className="bg-[#06141B] min-h-screen pt-16 pb-20">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover opacity-[0.15]" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#06141B]/80 via-[#06141B]/60 to-[#06141B] pointer-events-none" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl mb-8">
            {service.icon}
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl lg:text-7xl font-black text-white mb-6 drop-shadow-lg">
            {service.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-gray-300 max-w-3xl mx-auto">
            {service.shortDesc}
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column: Description & Features */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-black text-white mb-6">Service <span className="text-[#4A5C6A]">Overview</span></h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-10">
                {service.fullDesc}
              </p>
              
              <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>
              <div className="space-y-4">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-[#11212D]/40 border border-white/5 hover:border-white/10 transition-colors">
                    <CheckCircle2 className="text-green-400 shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-200 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Tech Stack & CTA */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-[#11212D]/60 backdrop-blur-md rounded-3xl p-10 border border-white/10 shadow-xl mb-10">
                <h3 className="text-2xl font-bold text-white mb-6">Technology Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {service.techStack.map((tech, idx) => (
                    <span key={idx} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 font-medium text-sm hover:bg-white/10 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#06141B] to-[#11212D] rounded-3xl p-10 border border-white/10 shadow-2xl text-center">
                <h3 className="text-2xl font-black text-white mb-4">Ready to start your project?</h3>
                <p className="text-gray-400 mb-8">Let's discuss how our {service.title.toLowerCase()} expertise can help you achieve your business goals.</p>
                <button onClick={() => navigate('/contact')} className="w-full bg-white text-[#06141B] py-4 rounded-xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                  Get a Free Quote <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
