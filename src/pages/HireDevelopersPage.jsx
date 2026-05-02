import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Palette, Smartphone, Database, Cloud } from 'lucide-react';

const roles = [
  { title: 'React Developers', icon: <Code size={36} />, skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS'], rate: 'From $25/hr', desc: 'Expert frontend engineers building fast, accessible UIs.' },
  { title: 'Node.js Developers', icon: <Server size={36} />, skills: ['Node.js', 'Express', 'REST APIs', 'GraphQL'], rate: 'From $25/hr', desc: 'Backend engineers specializing in scalable server solutions.' },
  { title: 'UI/UX Designers', icon: <Palette size={36} />, skills: ['Figma', 'Adobe XD', 'Prototyping', 'Design Systems'], rate: 'From $20/hr', desc: 'Creative designers crafting intuitive user experiences.' },
  { title: 'Mobile Developers', icon: <Smartphone size={36} />, skills: ['React Native', 'Flutter', 'iOS', 'Android'], rate: 'From $25/hr', desc: 'Cross-platform mobile experts delivering native-like apps.' },
  { title: 'Backend / DevOps', icon: <Database size={36} />, skills: ['Python', 'Django', 'PostgreSQL', 'Docker'], rate: 'From $30/hr', desc: 'Full-stack engineers managing infrastructure and databases.' },
  { title: 'Cloud Architects', icon: <Cloud size={36} />, skills: ['AWS', 'GCP', 'Azure', 'Kubernetes'], rate: 'From $35/hr', desc: 'Cloud specialists designing cost-optimized infrastructure.' },
];

const HireDevelopersPage = () => (
  <section className="relative pt-40 pb-24 min-h-screen overflow-hidden bg-[#06141B]">
    {/* Background Image */}
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" 
        alt="Technology Background" 
        className="w-full h-full object-cover opacity-20"
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
          className="text-5xl lg:text-7xl font-black text-white mb-6">
          Hire <span className="text-[#4A5C6A] drop-shadow-lg">Developers</span>
        </motion.h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">Scale your team with pre-vetted developers. Start in 48 hours.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {roles.map((role, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }} viewport={{ once: true }}
            className="bg-[#11212D]/60 backdrop-blur-sm p-8 rounded-3xl border border-white/5 shadow-sm hover:border-white/20 transition-all group flex flex-col">
            <div className="mb-5 text-gray-300 group-hover:scale-110 transition-transform">{role.icon}</div>
            <h3 className="text-xl font-black text-white mb-2">{role.title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">{role.desc}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {role.skills.map(s => (
                <span key={s} className="text-xs font-semibold bg-white/10 border border-white/10 text-gray-300 px-3 py-1 rounded-full">{s}</span>
              ))}
            </div>
            <div className="mt-auto flex items-center justify-between">
              <span className="text-sm font-bold text-white">{role.rate}</span>
              <button className="bg-white text-[#06141B] text-xs font-bold px-5 py-2 rounded-full hover:bg-gray-200 transition-all">Hire Now</button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HireDevelopersPage;
