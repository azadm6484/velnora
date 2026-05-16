import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Palette, Smartphone, Database, Cloud, Cpu } from 'lucide-react';
import { useRouter } from '../App';

const roles = [
  { title: 'React Developers', slug: 'react-developers', icon: <Code size={36} />, skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS'], desc: 'Expert frontend engineers building fast, accessible UIs.', image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=60&w=800' },
  { title: 'Node.js Developers', slug: 'node-js-developers', icon: <Server size={36} />, skills: ['Node.js', 'Express', 'REST APIs', 'GraphQL'], desc: 'Backend engineers specializing in scalable server solutions.', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=60&w=800' },
  { title: 'UI/UX Designers', slug: 'ui-ux-designers', icon: <Palette size={36} />, skills: ['Figma', 'Adobe XD', 'Prototyping', 'Design Systems'], desc: 'Creative designers crafting intuitive user experiences.', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=60&w=800' },
  { title: 'Mobile Developers', slug: 'mobile-developers', icon: <Smartphone size={36} />, skills: ['React Native', 'Flutter', 'iOS', 'Android'], desc: 'Cross-platform mobile experts delivering native-like apps.', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=60&w=800' },
  { title: 'Backend / DevOps', slug: 'backend-devops', icon: <Database size={36} />, skills: ['Python', 'Django', 'PostgreSQL', 'Docker'], desc: 'Full-stack engineers managing infrastructure and databases.', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=60&w=800' },
  { title: 'Cloud Architects', slug: 'cloud-architects', icon: <Cloud size={36} />, skills: ['AWS', 'GCP', 'Azure', 'Kubernetes'], desc: 'Cloud specialists designing cost-optimized infrastructure.', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=60&w=800' },
  { title: 'Automation Experts', slug: 'automation-experts', icon: <Cpu size={36} />, skills: ['n8n', 'Make.com', 'Zapier', 'Python'], desc: 'Specialists in hyper-automation and workflow optimization.', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop' },
];

const HireDevelopersPage = () => {
  const { navigate, theme } = useRouter();

  return (
  <section className={`relative pt-24 sm:pt-32 pb-24 min-h-screen overflow-hidden transition-colors duration-500 ${theme === 'light' ? 'bg-white' : 'bg-[#06141B]'}`}>
    {/* Background Image */}
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=60&w=1200&auto=format&fit=crop" 
        alt="Technology Background" 
        className={`w-full h-full object-cover transition-opacity duration-500 ${theme === 'light' ? 'opacity-100' : 'opacity-20'}`}
        loading="eager"
      />
      <div className={`absolute inset-0 bg-gradient-to-b ${theme === 'light' ? 'from-white/95 via-white/80 to-white/90' : 'from-[#06141B]/80 via-[#06141B]/60 to-[#06141B]'} pointer-events-none transition-colors duration-500`} />
    </div>

    <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className={`inline-block ${theme === 'light' ? 'bg-white/10 border-white/20 text-[#06141B]/80' : 'bg-white/10 border-white/10 text-white/80'} backdrop-blur-md shadow-sm text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border`}>
          Dedicated Teams
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className={`text-4xl sm:text-6xl lg:text-7xl font-black ${theme === 'light' ? 'text-[#06141B]' : 'text-white'} mb-6 transition-colors duration-500`}>
          Hire <span className="text-[#4A5C6A] drop-shadow-lg">Developers</span>
        </motion.h1>
        <p className={`text-lg ${theme === 'light' ? 'text-gray-800 font-black' : 'text-gray-300'} max-w-2xl mx-auto transition-colors duration-500`}>Scale your team with pre-vetted developers. Start in 48 hours.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {roles.map((role, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }} viewport={{ once: true }}
            onClick={() => navigate(`/hire-developers/${role.slug}`)}
            className={`relative overflow-hidden cursor-pointer ${theme === 'light' ? 'bg-white/30 backdrop-blur-xl border-white/50 shadow-xl' : 'bg-[#11212D]/60 backdrop-blur-md border border-white/5'} p-6 rounded-3xl transition-all group min-h-[180px] flex flex-col justify-end border hover:shadow-2xl`}>
            {role.image && (
              <img src={role.image} alt={role.title} className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${theme === 'light' ? 'opacity-100' : 'opacity-10 group-hover:opacity-20'}`} loading="eager" />
            )}
            <div className={`absolute inset-0 bg-gradient-to-t ${theme === 'light' ? 'from-white/95 via-white/40 to-transparent' : 'from-[#06141B] via-transparent to-transparent'} pointer-events-none transition-colors duration-500`} />
            
            <div className="relative z-10 mt-auto">
              <div className={`w-12 h-12 ${theme === 'light' ? 'bg-white/40 border-white/60 shadow-lg backdrop-blur-xl' : 'bg-white/10 border-white/10 shadow-2xl backdrop-blur-md'} rounded-2xl flex items-center justify-center border mb-3 group-hover:scale-110 transition-transform`}>
                <div className={`${theme === 'light' ? 'text-[#06141B]' : 'text-white'}`}>{role.icon}</div>
              </div>
              <h3 className={`text-xl font-black ${theme === 'light' ? 'text-[#06141B]' : 'text-white'} mb-1`}>{role.title}</h3>
              <p className={`text-sm ${theme === 'light' ? 'text-gray-800 font-bold' : 'text-gray-400'} leading-relaxed mb-4`}>{role.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {role.skills.map(s => (
                  <span key={s} className={`text-[10px] font-black ${theme === 'light' ? 'bg-[#06141B]/10 border-[#06141B]/10 text-[#06141B]' : 'bg-white/10 border-white/10 text-gray-300'} px-3 py-1 rounded-full border uppercase tracking-wider`}>{s}</span>
                ))}
              </div>
              <div className="flex items-center justify-end">
                <button className={`${theme === 'light' ? 'bg-[#06141B] text-white' : 'bg-white text-[#06141B]'} text-[10px] font-black uppercase tracking-widest px-6 py-2.5 rounded-full hover:scale-105 transition-all shadow-lg`}>View Details</button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default HireDevelopersPage;
