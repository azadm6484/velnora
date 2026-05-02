import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Code, Server, Palette, Smartphone, Database, Cloud } from 'lucide-react';
import { useRouter } from '../App';

const developerData = {
  'react-developers': {
    title: 'React Developers',
    icon: <Code size={48} className="text-white" />,
    shortDesc: 'Expert frontend engineers building fast, accessible, and dynamic user interfaces.',
    fullDesc: 'Our React experts specialize in building high-performance SPAs and complex dashboards. We focus on clean component architecture, state management optimization, and delivering seamless user experiences.',
    skills: ['React.js', 'Next.js', 'Redux / Context API', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    features: ['Custom Component Libraries', 'Performance Optimization', 'Progressive Web Apps (PWA)', 'Server-Side Rendering (SSR)', 'Unit & Integration Testing', 'State Management Architecture'],
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=2000',
  },
  'node-js-developers': {
    title: 'Node.js Developers',
    icon: <Server size={48} className="text-white" />,
    shortDesc: 'Backend engineers specializing in scalable, real-time server solutions.',
    fullDesc: 'Hire top-tier Node.js developers to build robust backends. We specialize in microservices, real-time communication, and architecting high-concurrency systems that handle growth effortlessly.',
    skills: ['Node.js', 'Express', 'NestJS', 'REST & GraphQL', 'WebSockets', 'OAuth / JWT'],
    features: ['Microservices Development', 'Real-time Data Streaming', 'API Design & Optimization', 'Database Architecture', 'Security Implementation', 'Serverless Functions'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2000',
  },
  'ui-ux-designers': {
    title: 'UI/UX Designers',
    icon: <Palette size={48} className="text-white" />,
    shortDesc: 'Creative designers crafting intuitive and visually stunning user experiences.',
    fullDesc: 'Our design team combines aesthetics with functionality. We conduct deep user research to build interfaces that not only look beautiful but also drive business results and user satisfaction.',
    skills: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'User Research', 'Design Systems', 'Motion Design'],
    features: ['User Persona Development', 'Interactive Prototyping', 'Visual Design Systems', 'Accessibility Compliance', 'Usability Testing', 'Conversion Rate Optimization'],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=2000',
  },
  'mobile-developers': {
    title: 'Mobile Developers',
    icon: <Smartphone size={48} className="text-white" />,
    shortDesc: 'Cross-platform mobile experts delivering high-performance native-like apps.',
    fullDesc: 'Build your next mobile app with our cross-platform specialists. We deliver high-quality iOS and Android applications using a single codebase, reducing time-to-market without compromising quality.',
    skills: ['React Native', 'Flutter', 'iOS (Swift)', 'Android (Kotlin)', 'App Store Deployment', 'Mobile DevOps'],
    features: ['Native Module Integration', 'Offline Data Storage', 'Biometric Authentication', 'Push Notification Systems', 'In-App Purchase Logic', 'App Performance Monitoring'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2000',
  },
  'backend-devops': {
    title: 'Backend / DevOps',
    icon: <Database size={48} className="text-white" />,
    shortDesc: 'Engineers managing infrastructure, databases, and CI/CD pipelines.',
    fullDesc: 'Ensure your infrastructure is secure and scalable. Our DevOps engineers automate your deployment workflows, optimize server performance, and maintain 99.9% uptime for your applications.',
    skills: ['Python / Django', 'PostgreSQL / MongoDB', 'Docker', 'Jenkins / GitHub Actions', 'Terraform', 'Nginx'],
    features: ['CI/CD Pipeline Automation', 'Infrastructure as Code (IaC)', 'Database Performance Tuning', 'Cloud Migration Services', 'System Monitoring & Alerting', 'Container Orchestration'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2000',
  },
  'cloud-architects': {
    title: 'Cloud Architects',
    icon: <Cloud size={48} className="text-white" />,
    shortDesc: 'Cloud specialists designing cost-optimized and resilient infrastructure.',
    fullDesc: 'Optimize your cloud presence with expert architecture. We design resilient, cost-effective infrastructure on AWS, Azure, and GCP, ensuring your system can scale globally with zero friction.',
    skills: ['AWS (Certified)', 'Azure', 'Google Cloud (GCP)', 'Kubernetes', 'Serverless Architecture', 'Cloud Security'],
    features: ['Scalable Architecture Design', 'Cost Optimization Audits', 'Disaster Recovery Planning', 'Multi-Cloud Strategy', 'Cloud Security Hardening', 'Auto-scaling Implementation'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000',
  }
};

const DeveloperDetailPage = () => {
  const { currentPath, navigate } = useRouter();
  const pathParts = currentPath.split('/');
  const roleId = pathParts[pathParts.length - 1];
  const role = developerData[roleId];

  useEffect(() => { window.scrollTo(0, 0); }, [currentPath]);

  if (!role) {
    return (
      <section className="pt-40 pb-24 min-h-screen bg-[#06141B] flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-black text-white mb-4">Role Not Found</h1>
        <button onClick={() => navigate('/hire-developers')} className="bg-white text-[#06141B] px-8 py-3 rounded-full font-bold">
          View All Roles
        </button>
      </section>
    );
  }

  return (
    <div className="bg-[#06141B] min-h-screen pt-24">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img src={role.image} alt={role.title} className="w-full h-full object-cover opacity-[0.15]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#06141B]/80 via-[#06141B]/60 to-[#06141B] pointer-events-none" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="inline-flex p-5 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 mb-8 shadow-2xl">
            {role.icon}
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl lg:text-7xl font-black text-white mb-6">
            {role.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-gray-300 max-w-3xl mx-auto">
            {role.shortDesc}
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-black text-white mb-6">Role <span className="text-[#4A5C6A]">Overview</span></h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-10">{role.fullDesc}</p>
              
              <h3 className="text-2xl font-bold text-white mb-6">Key Capabilities</h3>
              <div className="space-y-4">
                {role.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-[#11212D]/40 border border-white/5 hover:border-white/10 transition-all group">
                    <CheckCircle2 className="text-green-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" size={20} />
                    <span className="text-gray-200 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-[#11212D]/60 backdrop-blur-md rounded-3xl p-10 border border-white/10 shadow-xl mb-10">
                <h3 className="text-2xl font-bold text-white mb-6">Core Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {role.skills.map((skill, idx) => (
                    <span key={idx} className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 font-bold text-sm hover:bg-white/10 transition-all">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#11212D] to-[#06141B] rounded-3xl p-10 border border-white/10 shadow-2xl text-center">
                <h3 className="text-2xl font-black text-white mb-4">Hire Top Talent</h3>
                <p className="text-gray-400 mb-8">Our engineers are ready to join your team and start contributing immediately. No recruitment overhead.</p>
                <button onClick={() => navigate('/contact')} className="w-full bg-white text-[#06141B] py-4 rounded-xl font-black text-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                  Inquire About This Role <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeveloperDetailPage;
