import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ArrowLeft, Code, Server, Palette, Smartphone, Database, Cloud, Cpu } from 'lucide-react';
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
  },
  'automation-experts': {
    title: 'Automation Experts',
    icon: <Cpu size={48} className="text-white" />,
    shortDesc: 'Specialists in hyper-automation, connecting tools with n8n, Make, and Zapier.',
    fullDesc: 'Our automation experts are masters of workflow optimization. They bridge the gap between different software platforms, creating autonomous systems that handle everything from lead management to complex business logic without human intervention.',
    skills: ['n8n', 'Make.com', 'Zapier', 'Python / Node.js', 'API Integration', 'Low-Code / No-Code'],
    features: ['Custom Workflow Architecture', 'API & Webhook Integration', 'Error Handling & Monitoring', 'Database Synchronization', 'Automated Marketing Funnels', 'Business Process Mapping'],
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200',
  }
};

const DeveloperDetailPage = () => {
  const { currentPath, navigate, setQuoteModalMode, theme } = useRouter();
  const pathParts = currentPath.split('/');
  const roleId = pathParts[pathParts.length - 1];
  const role = developerData[roleId];

  useEffect(() => { window.scrollTo(0, 0); }, [currentPath]);

  if (!role) {
    return (
      <section className={`pt-32 pb-24 min-h-screen ${theme === 'dark' ? 'bg-[#06141B]' : 'bg-[#F8F9FA]'} flex flex-col items-center justify-center text-center transition-colors duration-500`}>
        <h1 className={`text-4xl font-black ${theme === 'dark' ? 'text-white' : 'text-[#06141B]'} mb-4`}>Role Not Found</h1>
        <button onClick={() => navigate('/hire-developers')} className={`${theme === 'dark' ? 'bg-white text-[#06141B]' : 'bg-[#06141B] text-white'} px-8 py-3 rounded-full font-bold`}>
          View All Roles
        </button>
      </section>
    );
  }

  return (
    <div className={`transition-colors duration-500 ${theme === 'dark' ? 'bg-[#06141B]' : 'bg-[#F8F9FA]'} min-h-screen pt-28 pb-20`}>
      {/* Back Button */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <a 
          href="/hire-developers"
          onClick={(e) => { e.preventDefault(); navigate('/hire-developers'); }}
          className={`group inline-flex items-center gap-3 ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-[#06141B]'} transition-all font-bold uppercase tracking-widest text-[10px]`}
        >
          <div className={`w-9 h-9 rounded-full border ${theme === 'dark' ? 'border-white/10 group-hover:border-white/30 group-hover:bg-white/5' : 'border-[#06141B]/10 group-hover:bg-[#06141B]/5'} flex items-center justify-center transition-all shadow-lg`}>
            <ArrowLeft size={16} />
          </div>
          <span>Back to Talent</span>
        </a>
      </div>

      {/* Hero */}
      <header className={`relative py-12 lg:py-20 overflow-hidden border-b ${theme === 'dark' ? 'border-white/5' : 'border-gray-100'} transition-colors duration-500`}>
        <div className="absolute inset-0 z-0">
          <img src={role.image} alt={role.title} className={`w-full h-full object-cover transition-opacity duration-500 ${theme === 'dark' ? 'opacity-[0.15]' : 'opacity-100'}`} />
          <div className={`absolute inset-0 bg-gradient-to-b ${theme === 'dark' ? 'from-[#06141B]/80 via-[#06141B]/60 to-[#06141B]' : 'from-white/95 via-white/80 to-white/90'} pointer-events-none transition-colors duration-500`} />
        </div>
        <div className="relative z-10 w-full mx-auto px-4 sm:px-10 lg:px-20 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className={`inline-flex w-20 h-20 items-center justify-center rounded-3xl ${theme === 'dark' ? 'bg-white/10 border-white/20' : 'bg-[#06141B]/90 border-[#06141B]/10'} backdrop-blur-xl border mb-8 shadow-2xl`}>
            <div className="text-white">{role.icon}</div>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className={`text-5xl lg:text-7xl font-black ${theme === 'dark' ? 'text-white' : 'text-[#06141B]'} mb-6 drop-shadow-lg`}>
            {role.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className={`text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-[#06141B] font-bold'} max-w-3xl mx-auto`}>
            {role.shortDesc}
          </motion.p>
        </div>
      </header>

      {/* Content */}
      <section className="py-24 relative z-10">
        <div className="w-full mx-auto px-4 sm:px-10 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <h2 className={`text-3xl font-black ${theme === 'dark' ? 'text-white' : 'text-[#06141B]'} mb-6`}>Role <span className="text-[#4A5C6A]">Overview</span></h2>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700 font-medium'} text-lg leading-relaxed mb-10`}>{role.fullDesc}</p>
              
              <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-[#06141B]'} mb-6`}>Key Capabilities</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {role.features.map((feature, idx) => (
                  <div key={idx} className={`flex items-center gap-3 p-4 rounded-2xl ${theme === 'light' ? 'bg-white/30 backdrop-blur-xl border-white/50 shadow-xl' : 'bg-[#11212D]/40 border-white/5 shadow-2xl'} border transition-all group`}>
                    <CheckCircle2 className="text-green-500 shrink-0 group-hover:scale-110 transition-transform" size={18} />
                    <span className={`${theme === 'light' ? 'text-[#06141B] font-bold' : 'text-gray-200'} text-sm`}>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}>
              <div className={`${theme === 'light' ? 'bg-white/30 backdrop-blur-xl border-white/50 shadow-xl' : 'bg-[#11212D]/60 border-white/10 shadow-2xl'} rounded-3xl p-10 border mb-10 transition-all duration-500`}>
                <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-[#06141B]'} mb-6`}>Core Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {role.skills.map((skill, idx) => (
                    <span key={idx} className={`px-5 py-2.5 rounded-xl border transition-all font-bold text-sm ${theme === 'light' ? 'bg-[#06141B]/10 border-[#06141B]/10 text-[#06141B] hover:bg-[#06141B]/20' : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`bg-gradient-to-br ${theme === 'light' ? 'from-[#4A5C6A] to-[#06141B]' : 'from-[#11212D] to-[#06141B]'} rounded-3xl p-10 border border-white/10 shadow-2xl text-center transition-all duration-500`}>
                <h3 className="text-2xl font-black text-white mb-4">Hire Top Talent</h3>
                <p className="text-gray-200 mb-8">Our engineers are ready to join your team and start contributing immediately. No recruitment overhead.</p>
                <button onClick={() => setQuoteModalMode('hire')} className="w-full bg-white text-[#06141B] py-4 rounded-xl font-black text-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-xl">
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
