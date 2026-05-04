import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Gavel, Scale, AlertCircle, CheckCircle2, 
  Clock, ShieldCheck, Mail, Globe, Info, 
  XCircle, CreditCard, Users, Handshake, 
  FileWarning, Landmark, MessageSquareText, 
  Ban, ShieldAlert
} from 'lucide-react';
import { useRouter } from '../App';

const TermsOfService = () => {
  const { navigate } = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const sections = [
    { id: "01", title: "Definitions" },
    { id: "02", title: "Use of Services" },
    { id: "03", title: "Intellectual Property" },
    { id: "04", title: "Payments & Refunds" },
    { id: "05", title: "Third-Party Services" },
    { id: "06", title: "Limitation of Liability" },
    { id: "07", title: "Termination" },
    { id: "08", title: "Governing Law" },
    { id: "09", title: "Updates to Terms" },
    { id: "10", title: "Contact" },
  ];

  return (
    <div className="bg-[#06141B] min-h-screen pt-32 pb-24 text-gray-300">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#4A5C6A]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#11212D]/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.button 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/')}
          className="group flex items-center gap-3 text-gray-400 hover:text-white transition-all font-bold uppercase tracking-widest text-[10px] mb-12"
        >
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#4A5C6A]/50 group-hover:bg-white/5 transition-all">
            <ArrowLeft size={18} />
          </div>
          <span>Back to Home</span>
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Sidebar / Navigation */}
          <aside className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-32 space-y-8">
              <div>
                <h1 className="text-5xl font-black text-white mb-4 leading-tight">
                  Terms & <span className="text-[#4A5C6A]">Conditions</span>
                </h1>
                <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                  <Clock size={14} />
                  <span>Last Updated: May 2025</span>
                </div>
              </div>

              <nav className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-4 px-2">Contents</p>
                {sections.map((section) => (
                  <a 
                    key={section.id}
                    href={`#section-${section.id}`}
                    className="flex items-center gap-4 px-3 py-2 rounded-xl hover:bg-white/5 group transition-all"
                  >
                    <span className="text-[10px] font-mono text-[#4A5C6A] group-hover:text-white">{section.id}</span>
                    <span className="text-sm font-semibold group-hover:text-white">{section.title}</span>
                  </a>
                ))}
              </nav>

              <div className="p-6 rounded-3xl bg-[#11212D]/40 border border-white/5">
                <h4 className="text-white font-bold mb-2">Legal Inquiry?</h4>
                <p className="text-xs text-gray-400 mb-4">Questions about our legal terms or project agreements?</p>
                <a href="mailto:support@velnoratech.com" className="text-[#4A5C6A] text-sm font-black hover:text-white transition-colors">
                  support@velnoratech.com
                </a>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-8 space-y-20">
            {/* Mobile Title */}
            <div className="lg:hidden mb-12">
              <h1 className="text-4xl font-black text-white mb-2">Terms & <span className="text-[#4A5C6A]">Conditions</span></h1>
              <p className="text-sm text-gray-500">Last Updated: May 2025</p>
            </div>

            {/* Quick Trust Highlights */}
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#4A5C6A] mb-6">Why Clients Trust Velnora Tech</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Transparent pricing & milestone payments",
                  "No hidden charges — defined upfront",
                  "Secure data handling & privacy-first",
                  "Clear refund, cancellation & delivery",
                  "Dedicated support throughout project",
                  "Long-term partnerships oriented"
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    {...fadeIn}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center gap-3 p-4 rounded-2xl bg-[#11212D]/30 border border-white/5"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#4A5C6A]/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 size={14} className="text-[#4A5C6A]" />
                    </div>
                    <span className="text-xs font-bold text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Introduction */}
            <section className="prose prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-gray-300 italic border-l-4 border-[#4A5C6A] pl-6 py-2 bg-white/[0.02]">
                Please read these terms carefully before using our services. By accessing Velnora Tech, you agree to be legally bound by the following conditions.
              </p>
            </section>

            {/* Sections */}
            <div className="space-y-24">
              {/* Section 01 */}
              <section id="section-01" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-xs font-mono text-[#4A5C6A] px-2 py-1 bg-white/5 rounded">Section 01</span>
                  <h2 className="text-2xl font-black text-white uppercase tracking-tight">Definitions</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { term: "Company", desc: "Refers to Velnora Tech, the service provider." },
                    { term: "User", desc: "Any individual or business accessing or using our services." },
                    { term: "Services", desc: "Includes web development, software, automation, SaaS, and consulting." },
                    { term: "Agreement", desc: "Refers to these Terms & Conditions in their entirety." },
                  ].map((item, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-[#11212D]/20 border border-white/5">
                      <h4 className="text-white font-bold text-sm mb-1">{item.term}</h4>
                      <p className="text-xs text-gray-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 02 */}
              <section id="section-02" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-xs font-mono text-[#4A5C6A] px-2 py-1 bg-white/5 rounded">Section 02</span>
                  <h2 className="text-2xl font-black text-white uppercase tracking-tight">Use of Services</h2>
                </div>
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-8 rounded-3xl bg-[#11212D]/20 border border-white/5">
                      <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                        <Users size={18} className="text-[#4A5C6A]" />
                        Eligibility
                      </h3>
                      <p className="text-sm text-gray-400">
                        You must be at least 18 years old and legally capable of entering into binding agreements to use our services.
                      </p>
                    </div>
                    <div className="p-8 rounded-3xl bg-[#11212D]/20 border border-white/5">
                      <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                        <ShieldCheck size={18} className="text-[#4A5C6A]" />
                        Account Responsibility
                      </h3>
                      <ul className="space-y-2">
                        {["Confidentiality of login credentials", "All activities under your account", "Notifying us of unauthorized access"].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-gray-400">
                            <CheckCircle2 size={12} className="mt-0.5 text-[#4A5C6A]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="p-8 rounded-3xl bg-red-500/[0.02] border border-red-500/10">
                    <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                      <Ban size={18} className="text-red-500/50" />
                      Prohibited Activities
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                      {[
                        "Illegal or unauthorized purposes",
                        "Hacking, data mining, or interference",
                        "Uploading malware or harmful code",
                        "Violating laws or third-party rights",
                        "Reverse engineering our software",
                        "Misrepresenting identity or affiliation"
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 text-sm text-gray-400">
                          <XCircle size={14} className="mt-1 text-red-500/40 shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 03 */}
              <section id="section-03" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-xs font-mono text-[#4A5C6A] px-2 py-1 bg-white/5 rounded">Section 03</span>
                  <h2 className="text-2xl font-black text-white uppercase tracking-tight">Intellectual Property</h2>
                </div>
                <div className="p-8 rounded-3xl bg-[#11212D]/20 border border-white/5">
                  <p className="mb-8 leading-relaxed">
                    All content, including software, designs, logos, code, and branding, is the exclusive property of Velnora Tech unless explicitly stated otherwise in writing.
                  </p>
                  <div className="p-6 rounded-2xl bg-yellow-500/5 border border-yellow-500/10 flex gap-4 mb-8">
                    <ShieldAlert size={24} className="text-yellow-500/50 shrink-0" />
                    <p className="text-sm text-gray-400 font-medium">
                      Without prior written permission, you may <span className="text-white">NOT copy, reproduce, resell, modify, or distribute</span> any of our work or materials.
                    </p>
                  </div>
                  <p className="text-sm text-gray-500 italic">
                    Upon full payment, the client receives a license to use deliverables as outlined in the agreement. Core frameworks and proprietary tools remain Velnora Tech's property.
                  </p>
                </div>
              </section>

              {/* Section 04 */}
              <section id="section-04" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-xs font-mono text-[#4A5C6A] px-2 py-1 bg-white/5 rounded">Section 04</span>
                  <h2 className="text-2xl font-black text-white uppercase tracking-tight">Payments & Refunds</h2>
                </div>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                      <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                        <Handshake size={18} className="text-[#4A5C6A]" />
                        Service Delivery
                      </h4>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        Based on mutually agreed proposals. All deliverables and timelines are specified in the project agreement. We guarantee transparency — no hidden costs.
                      </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                      <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                        <CreditCard size={18} className="text-[#4A5C6A]" />
                        Payment Terms
                      </h4>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        Payments must follow the milestone schedule. Delay in payment may result in service suspension. Work resumes upon clearance of dues.
                      </p>
                    </div>
                  </div>

                  <div className="p-8 rounded-3xl bg-[#4A5C6A]/5 border border-[#4A5C6A]/10">
                    <div className="flex items-center gap-3 mb-6">
                      <Info size={20} className="text-[#4A5C6A]" />
                      <h3 className="text-white font-bold uppercase tracking-widest text-sm">Refund Policy</h3>
                    </div>
                    <p className="text-sm text-gray-300 mb-6 font-medium">
                      We operate on a milestone-based model — you pay only for what's delivered and approved.
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                      {[
                        "No refunds on completed milestones",
                        "Cancel anytime — pay only for work done",
                        "Governed by individual agreements",
                        "Disputes raised within 7 days"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm text-gray-400">
                          <CheckCircle2 size={14} className="text-[#4A5C6A]" />
                          {item}
                        </div>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 05 & 06 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <section id="section-05" className="scroll-mt-32">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-xs font-mono text-[#4A5C6A] px-2 py-1 bg-white/5 rounded">05</span>
                    <h2 className="text-xl font-black text-white uppercase tracking-tight">Third-Party Services</h2>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-400 mb-4">
                    Our platform may integrate with third-party services. We are not responsible for:
                  </p>
                  <ul className="space-y-2">
                    {["Their content or accuracy", "Their privacy practices", "Service failures or outages"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-gray-400">
                        <Globe size={14} className="text-[#4A5C6A]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>

                <section id="section-06" className="scroll-mt-32">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-xs font-mono text-[#4A5C6A] px-2 py-1 bg-white/5 rounded">06</span>
                    <h2 className="text-xl font-black text-white uppercase tracking-tight">Limitation of Liability</h2>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start gap-3">
                      <Scale size={14} className="mt-1 text-[#4A5C6A] shrink-0" />
                      No liability for incidental or consequential damages.
                    </li>
                    <li className="flex items-start gap-3">
                      <Scale size={14} className="mt-1 text-[#4A5C6A] shrink-0" />
                      Loss of data, revenue, or business opportunities.
                    </li>
                    <li className="flex items-start gap-3 text-white font-bold">
                      <Scale size={14} className="mt-1 text-[#4A5C6A] shrink-0" />
                      Total liability shall not exceed the amount paid for the specific service.
                    </li>
                  </ul>
                </section>
              </div>

              {/* Section 07 & 08 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <section id="section-07" className="scroll-mt-32">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-xs font-mono text-[#4A5C6A] px-2 py-1 bg-white/5 rounded">07</span>
                    <h2 className="text-xl font-black text-white uppercase tracking-tight">Termination</h2>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    We may suspend or terminate access immediately for violations of terms, fraudulent activities, or failure to meet payment obligations. Outstanding payments remain due.
                  </p>
                </section>

                <section id="section-08" className="scroll-mt-32">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-xs font-mono text-[#4A5C6A] px-2 py-1 bg-white/5 rounded">08</span>
                    <h2 className="text-xl font-black text-white uppercase tracking-tight">Governing Law</h2>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                    <Landmark size={20} className="text-[#4A5C6A]" />
                    <p className="text-xs text-gray-400 font-bold">
                      Governed by the laws of <span className="text-white">India</span>. Exclusive jurisdiction: Courts in <span className="text-white">Uttar Pradesh, India</span>.
                    </p>
                  </div>
                </section>
              </div>

              {/* Section 09 & 10 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-white/5">
                <section id="section-09" className="scroll-mt-32">
                  <h2 className="text-xl font-black text-white uppercase mb-6 flex items-center gap-3">
                    <span className="text-xs font-mono text-[#4A5C6A]">09</span>
                    Updates to Terms
                  </h2>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Updates become effective immediately upon publication. Continued use constitutes acceptance. We encourage periodic review.
                  </p>
                </section>

                <section id="section-10" className="scroll-mt-32">
                  <h2 className="text-xl font-black text-white uppercase mb-6 flex items-center gap-3">
                    <span className="text-xs font-mono text-[#4A5C6A]">10</span>
                    Contact Us
                  </h2>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center gap-3 text-gray-400">
                      <Mail size={14} className="text-[#4A5C6A]" />
                      support@velnoratech.com
                    </p>
                    <p className="flex items-center gap-3 text-gray-400">
                      <Globe size={14} className="text-[#4A5C6A]" />
                      velnora-pearl.vercel.app
                    </p>
                    <p className="text-xs text-gray-500 mt-4">Response Time: Within 24–48 business hours</p>
                  </div>
                </section>
              </div>

              {/* Simple Terms Section */}
              <section className="pt-20 border-t border-white/5">
                <div className="p-8 lg:p-12 rounded-[2rem] bg-gradient-to-br from-[#11212D] to-[#06141B] border border-white/5 relative overflow-hidden group">
                  <div className="absolute bottom-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <MessageSquareText size={120} className="text-[#4A5C6A]" />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6 text-[#4A5C6A]">
                      <Scale size={24} />
                      <h2 className="text-2xl font-black text-white uppercase tracking-tight">In Simple Terms</h2>
                    </div>
                    
                    <p className="text-gray-400 mb-10 max-w-2xl">
                      We believe in keeping things simple and fair — here's the plain English version of our commitment to you:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        "Pay based on agreed milestones — no surprises",
                        "We deliver exactly what's promised in proposal",
                        "No refunds on completed work — effort is invested",
                        "Cancel anytime — pay only for work done",
                        "Your data is safe — we never sell or misuse it",
                        "Transparency, quality, and accountability ✓"
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                          <CheckCircle2 size={16} className="mt-0.5 text-[#4A5C6A] shrink-0" />
                          <span className="text-sm text-gray-300 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
