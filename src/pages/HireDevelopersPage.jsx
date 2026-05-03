import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Palette, Smartphone, Database, Cloud } from 'lucide-react';
import { useRouter } from '../App';

const roles = [
  { title: 'React Developers', slug: 'react-developers', icon: <Code size={36} />, skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS'], desc: 'Expert frontend engineers building fast, accessible UIs.', image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=60&w=800' },
  { title: 'Node.js Developers', slug: 'node-js-developers', icon: <Server size={36} />, skills: ['Node.js', 'Express', 'REST APIs', 'GraphQL'], desc: 'Backend engineers specializing in scalable server solutions.', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=60&w=800' },
  { title: 'UI/UX Designers', slug: 'ui-ux-designers', icon: <Palette size={36} />, skills: ['Figma', 'Adobe XD', 'Prototyping', 'Design Systems'], desc: 'Creative designers crafting intuitive user experiences.', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=60&w=800' },
  { title: 'Mobile Developers', slug: 'mobile-developers', icon: <Smartphone size={36} />, skills: ['React Native', 'Flutter', 'iOS', 'Android'], desc: 'Cross-platform mobile experts delivering native-like apps.', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=60&w=800' },
  { title: 'Backend / DevOps', slug: 'backend-devops', icon: <Database size={36} />, skills: ['Python', 'Django', 'PostgreSQL', 'Docker'], desc: 'Full-stack engineers managing infrastructure and databases.', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=60&w=800' },
  { title: 'Cloud Architects', slug: 'cloud-architects', icon: <Cloud size={36} />, skills: ['AWS', 'GCP', 'Azure', 'Kubernetes'], desc: 'Cloud specialists designing cost-optimized infrastructure.', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=60&w=800' },
];

const HireDevelopersPage = () => {
  const { navigate } = useRouter();

  return (
  <section className="relative pt-24 sm:pt-32 pb-24 min-h-screen overflow-hidden bg-[#06141B]">
    {/* Background Image */}
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=60&w=1200&auto=format&fit=crop" 
        alt="Technology Background" 
        className="w-full h-full object-cover opacity-20"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#06141B]/80 via-[#06141B]/60 to-[#06141B] pointer-events-none" />
    </div>

    <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="inline-block bg-white/10 border border-white/10 backdrop-blur-md shadow-sm text-xs font-bold uppercase tracking-widest text-white/80 px-4 py-1.5 rounded-full mb-4">
          Dedicated Teams
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-black text-white mb-6">
          Hire <span className="text-[#4A5C6A] drop-shadow-lg">Developers</span>
        </motion.h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">Scale your team with pre-vetted developers. Start in 48 hours.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {roles.map((role, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }} viewport={{ once: true }}
            onClick={() => navigate(`/hire-developers/${role.slug}`)}
            className="relative overflow-hidden cursor-pointer bg-[#11212D]/60 backdrop-blur-sm p-8 rounded-3xl border border-white/5 shadow-sm hover:border-white/20 transition-all group flex flex-col">
            {role.image && (
              <img src={role.image} alt={role.title} className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-all duration-700 group-hover:scale-110" loading="lazy" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#06141B]/90 to-transparent pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-5 text-gray-300 group-hover:scale-110 transition-transform">{role.icon}</div>
              <h3 className="text-xl font-black text-white mb-2">{role.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">{role.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {role.skills.map(s => (
                  <span key={s} className="text-xs font-semibold bg-white/10 border border-white/10 text-gray-300 px-3 py-1 rounded-full">{s}</span>
                ))}
              </div>
              <div className="mt-auto flex items-center justify-end">
                <button className="bg-white text-[#06141B] text-xs font-bold px-6 py-2.5 rounded-full hover:bg-gray-200 transition-all">View Details</button>
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
