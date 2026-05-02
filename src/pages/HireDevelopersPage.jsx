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
  <section className="pt-40 pb-24 bg-[#F8F9FA] min-h-screen">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="inline-block bg-white border border-gray-100 shadow-sm text-xs font-bold uppercase tracking-widest text-[#4A5C6A] px-4 py-1.5 rounded-full mb-4">
          Dedicated Teams
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-5xl lg:text-7xl font-black text-[#06141B] mb-6">
          Hire <span className="text-[#4A5C6A]">Developers</span>
        </motion.h1>
        <p className="text-lg text-[#666] max-w-2xl mx-auto">Scale your team with pre-vetted developers. Start in 48 hours.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {roles.map((role, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }} viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group flex flex-col">
            <div className="mb-5 text-[#4A5C6A] group-hover:scale-110 transition-transform">{role.icon}</div>
            <h3 className="text-xl font-black text-[#06141B] mb-2">{role.title}</h3>
            <p className="text-sm text-[#666] leading-relaxed mb-4">{role.desc}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {role.skills.map(s => (
                <span key={s} className="text-xs font-semibold bg-[#F8F9FA] border border-gray-200 text-[#4A5C6A] px-3 py-1 rounded-full">{s}</span>
              ))}
            </div>
            <div className="mt-auto flex items-center justify-between">
              <span className="text-sm font-bold text-[#06141B]">{role.rate}</span>
              <button className="bg-[#06141B] text-white text-xs font-bold px-5 py-2 rounded-full hover:bg-[#253745] transition-all">Hire Now</button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HireDevelopersPage;
