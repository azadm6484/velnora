import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, ShieldCheck, Lock, Eye, FileText, 
  Database, UserCheck, Share2, ExternalLink, 
  Clock, Trash2, Mail, Globe, CheckCircle2, 
  Info, AlertCircle, BarChart3, Fingerprint, 
  Smartphone, MousePointer2
} from 'lucide-react';
import { useRouter } from '../App';

const PrivacyPolicy = () => {
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
    { id: "01", title: "Information We Collect" },
    { id: "02", title: "How We Use It" },
    { id: "03", title: "Cookies Policy" },
    { id: "04", title: "Data Protection" },
    { id: "05", title: "Data Sharing" },
    { id: "06", title: "Third-Party Links" },
    { id: "07", title: "Data Retention" },
    { id: "08", title: "Your Rights" },
    { id: "09", title: "Children's Privacy" },
    { id: "10", title: "Analytics & Tools" },
    { id: "11", title: "Policy Updates" },
    { id: "12", title: "Contact" },
  ];

  return (
    <div className="bg-[#06141B] min-h-screen pt-32 pb-24 text-gray-300">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#4A5C6A]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#11212D]/10 blur-[120px] rounded-full" />
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
                  Privacy <span className="text-[#4A5C6A]">Policy</span>
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
                <h4 className="text-white font-bold mb-2">Need help?</h4>
                <p className="text-xs text-gray-400 mb-4">Questions about your data or our privacy practices?</p>
                <a href="mailto:info@velnorasoftware.com" className="text-[#4A5C6A] text-sm font-black hover:text-white transition-colors">
                  info@velnorasoftware.com
                </a>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-8 space-y-20">
            {/* Mobile Title */}
            <div className="lg:hidden mb-12">
              <h1 className="text-4xl font-black text-white mb-2">Privacy <span className="text-[#4A5C6A]">Policy</span></h1>
              <p className="text-sm text-gray-500">Last Updated: May 2025</p>
            </div>

            {/* Quick Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: <Lock className="text-[#4A5C6A]" />, title: "We Never Sell Data", desc: "Your personal information is never sold or traded." },
                { icon: <Globe className="text-[#4A5C6A]" />, title: "GDPR Aligned", desc: "International data protection principles followed." },
                { icon: <UserCheck className="text-[#4A5C6A]" />, title: "You're in Control", desc: "Request access or deletion at any time." },
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  {...fadeIn}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-[#11212D]/30 border border-white/5 flex flex-col items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Introduction */}
            <section className="prose prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-gray-300">
                Your privacy matters to us. This policy explains exactly what data we collect, how we use it, and the rights you have over your information.
              </p>
            </section>

            {/* Sections */}
            <div className="space-y-24">
              {/* Section 01 */}
              <section id="section-01" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-xs font-mono text-[#4A5C6A] px-2 py-1 bg-white/5 rounded">Section 01</span>
                  <h2 className="text-2xl font-black text-white uppercase tracking-tight">Information We Collect</h2>
                </div>
                <div className="space-y-8">
                  <div className="p-8 rounded-3xl bg-[#11212D]/20 border border-white/5">
                    <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                      <Smartphone size={18} className="text-[#4A5C6A]" />
                      a. Automatically Collected Data
                    </h3>
                    <p className="text-sm mb-4">When you visit our website, we automatically collect certain technical information:</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        "IP address and approximate location",
                        "Browser type and version",
                        "Device and operating system",
                        "Pages visited and time spent",
                        "Referring URLs and navigation paths"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                          <CheckCircle2 size={14} className="mt-1 text-[#4A5C6A] shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-8 rounded-3xl bg-[#11212D]/20 border border-white/5">
                    <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                      <Fingerprint size={18} className="text-[#4A5C6A]" />
                      b. User-Provided Data
                    </h3>
                    <p className="text-sm mb-4">Information you voluntarily give us through forms or direct communication:</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        "Full name and email address",
                        "Phone number (if provided)",
                        "Business name and details",
                        "Project requirements and preferences"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                          <CheckCircle2 size={14} className="mt-1 text-[#4A5C6A] shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-8 rounded-3xl bg-[#11212D]/20 border border-white/5">
                    <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                      <Mail size={18} className="text-[#4A5C6A]" />
                      c. Communication Data
                    </h3>
                    <ul className="space-y-2">
                      {["Messages sent via contact forms", "Email correspondence", "Support chat transcripts"].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                          <CheckCircle2 size={14} className="mt-1 text-[#4A5C6A] shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 02 */}
              <section id="section-02" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-xs font-mono text-[#4A5C6A] px-2 py-1 bg-white/5 rounded">Section 02</span>
                  <h2 className="text-2xl font-black text-white uppercase tracking-tight">How We Use Your Information</h2>
                </div>
                <div className="bg-[#11212D]/20 border border-white/5 rounded-3xl p-8">
                  <p className="mb-6">We use your data solely for legitimate business purposes:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    {[
                      "Delivering and improving our services",
                      "Responding to inquiries and support requests",
                      "Sending project updates",
                      "Providing offers — only with your consent",
                      "Enhancing your experience on our platform",
                      "Complying with legal obligations"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#4A5C6A]" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 pt-8 border-t border-white/5">
                    <p className="text-sm italic text-gray-500 text-center">
                      We do not use your data for automated decision-making or profiling without your explicit consent.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 03 */}
              <section id="section-03" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-xs font-mono text-[#4A5C6A] px-2 py-1 bg-white/5 rounded">Section 03</span>
                  <h2 className="text-2xl font-black text-white uppercase tracking-tight">Cookies Policy</h2>
                </div>
                <div className="overflow-hidden rounded-3xl border border-white/5 bg-[#11212D]/20">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-white/5 text-white uppercase text-[10px] tracking-widest font-black">
                      <tr>
                        <th className="px-6 py-4">Type</th>
                        <th className="px-6 py-4">Purpose</th>
                        <th className="px-6 py-4">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {[
                        { type: "Essential Cookies", purpose: "Enable core functionality like login and navigation", status: "Required" },
                        { type: "Performance Cookies", purpose: "Track website usage and improve performance", status: "Optional" },
                        { type: "Functional Cookies", purpose: "Personalize your user experience", status: "Optional" },
                        { type: "Advertising Cookies", purpose: "Deliver relevant ads (if applicable)", status: "Optional" },
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                          <td className="px-6 py-4 font-bold text-white">{row.type}</td>
                          <td className="px-6 py-4 text-gray-400">{row.purpose}</td>
                          <td className="px-6 py-4">
                            <span className={`px-2 py-1 rounded text-[10px] font-black uppercase ${row.status === 'Required' ? 'bg-[#4A5C6A]/20 text-[#4A5C6A]' : 'bg-white/5 text-gray-500'}`}>
                              {row.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 p-4 rounded-2xl bg-[#4A5C6A]/5 border border-[#4A5C6A]/10 flex gap-4">
                  <Info size={20} className="text-[#4A5C6A] shrink-0 mt-0.5" />
                  <p className="text-xs leading-relaxed text-gray-400">
                    <strong className="text-white">Tip:</strong> You can disable optional cookies at any time via your browser settings. Disabling essential cookies may affect site functionality.
                  </p>
                </div>
              </section>

              {/* Section 04 */}
              <section id="section-04" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-xs font-mono text-[#4A5C6A] px-2 py-1 bg-white/5 rounded">Section 04</span>
                  <h2 className="text-2xl font-black text-white uppercase tracking-tight">Data Protection</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {[
                    { icon: <Lock size={18} />, title: "Encrypted Communication", desc: "Via HTTPS/TLS protocols." },
                    { icon: <ShieldCheck size={18} />, title: "Secure Servers", desc: "Restricted access controls." },
                    { icon: <Eye size={18} />, title: "Regular Audits", desc: "Vulnerability monitoring." },
                    { icon: <UserCheck size={18} />, title: "Limited Access", desc: "Only authorized team members." },
                  ].map((item, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-[#11212D]/20 border border-white/5 flex gap-4">
                      <div className="text-[#4A5C6A]">{item.icon}</div>
                      <div>
                        <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                        <p className="text-xs text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-6 rounded-3xl border border-yellow-500/10 bg-yellow-500/5 flex gap-4">
                  <AlertCircle size={24} className="text-yellow-500/50 shrink-0" />
                  <p className="text-sm text-gray-400">
                    <strong className="text-white">Warning:</strong> While we take every precaution, no online transmission is 100% secure. Users share information at their own risk, and we encourage strong password practices.
                  </p>
                </div>
              </section>

              {/* Section 05 & 06 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <section id="section-05" className="scroll-mt-32">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-xs font-mono text-[#4A5C6A] px-2 py-1 bg-white/5 rounded">05</span>
                    <h2 className="text-xl font-black text-white uppercase tracking-tight">Data Sharing</h2>
                  </div>
                  <ul className="space-y-4">
                    {[
                      "We do NOT sell your personal data",
                      "We do NOT trade user information",
                      "Anonymized data for analytics",
                      "Trusted partners with your consent",
                      "Disclosure if legally required"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-gray-400">
                        <Share2 size={14} className="text-[#4A5C6A]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>

                <section id="section-06" className="scroll-mt-32">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-xs font-mono text-[#4A5C6A] px-2 py-1 bg-white/5 rounded">06</span>
                    <h2 className="text-xl font-black text-white uppercase tracking-tight">Third-Party Links</h2>
                  </div>
                  <p className="text-sm leading-relaxed mb-4">
                    Our website may contain links to external sites. We are not responsible for:
                  </p>
                  <ul className="space-y-2">
                    {["Their privacy practices", "Content accuracy", "Data you submit to them"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-gray-400">
                        <ExternalLink size={14} className="text-[#4A5C6A]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              {/* Section 07 */}
              <section id="section-07" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-xs font-mono text-[#4A5C6A] px-2 py-1 bg-white/5 rounded">Section 07</span>
                  <h2 className="text-2xl font-black text-white uppercase tracking-tight">Data Retention</h2>
                </div>
                <div className="p-8 rounded-3xl bg-[#11212D]/20 border border-white/5 flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <Database size={32} className="text-[#4A5C6A]" />
                  </div>
                  <div>
                    <p className="text-sm leading-relaxed text-gray-400 mb-4">
                      We retain your personal data only for as long as necessary to deliver services, maintain records, and comply with laws.
                    </p>
                    <p className="text-sm font-bold text-white">
                      Once data is no longer required, it is securely deleted or anonymized.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 08 */}
              <section id="section-08" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-xs font-mono text-[#4A5C6A] px-2 py-1 bg-white/5 rounded">Section 08</span>
                  <h2 className="text-2xl font-black text-white uppercase tracking-tight">Your Rights</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { icon: <Eye size={20} />, title: "Access", desc: "Request a copy of all personal data we hold about you." },
                    { icon: <FileText size={20} />, title: "Correction", desc: "Ask us to correct any inaccurate or outdated info." },
                    { icon: <Trash2 size={20} />, title: "Deletion", desc: "Request erasure of your data ('Right to be Forgotten')." },
                    { icon: <Lock size={20} />, title: "Restrict", desc: "Limit how we use your data in certain circumstances." },
                    { icon: <Database size={20} />, title: "Portability", desc: "Receive your data in a machine-readable format." },
                    { icon: <ArrowLeft size={20} />, title: "Withdraw", desc: "Opt out of marketing communications at any time." },
                  ].map((right, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-[#4A5C6A]/30 transition-colors group">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4 text-[#4A5C6A] group-hover:scale-110 transition-transform">
                        {right.icon}
                      </div>
                      <h4 className="text-white font-bold mb-2">{right.title}</h4>
                      <p className="text-xs text-gray-400 leading-relaxed">{right.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <p className="text-sm">To exercise these rights, contact us at <a href="mailto:info@velnorasoftware.com" className="text-white font-bold underline decoration-[#4A5C6A]">info@velnorasoftware.com</a></p>
                </div>
              </section>

              {/* Section 09 & 10 */}
              <div className="space-y-12">
                <section id="section-09" className="scroll-mt-32">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-xs font-mono text-[#4A5C6A] px-2 py-1 bg-white/5 rounded">09</span>
                    <h2 className="text-xl font-black text-white uppercase tracking-tight">Children's Privacy</h2>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                    <p className="text-sm text-gray-400">
                      Our services are strictly intended for individuals 18 years of age and older. We do not knowingly collect personal data from minors. If we become aware that a minor has submitted data, it will be deleted immediately.
                    </p>
                  </div>
                </section>

                <section id="section-10" className="scroll-mt-32">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-xs font-mono text-[#4A5C6A] px-2 py-1 bg-white/5 rounded">10</span>
                    <h2 className="text-xl font-black text-white uppercase tracking-tight">Analytics & Tools</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {[
                      { icon: <BarChart3 size={18} />, name: "Google Analytics", desc: "Anonymized usage statistics (views, sessions)." },
                      { icon: <MousePointer2 size={18} />, name: "Meta Pixel", desc: "Conversion tracking for advertising campaigns." },
                      { icon: <Eye size={18} />, name: "Hotjar", desc: "Session recordings to improve user experience." },
                    ].map((tool, i) => (
                      <div key={i} className="p-5 rounded-2xl bg-[#11212D]/20 border border-white/5 flex gap-4">
                        <div className="text-[#4A5C6A]">{tool.icon}</div>
                        <div>
                          <h4 className="text-white font-bold text-xs mb-1">{tool.name}</h4>
                          <p className="text-[10px] text-gray-500">{tool.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-5 rounded-2xl bg-[#4A5C6A]/5 border border-[#4A5C6A]/10 flex gap-4">
                    <Info size={20} className="text-[#4A5C6A] shrink-0" />
                    <p className="text-xs text-gray-400">
                      All analytics data is anonymized and used solely for improving your experience. You can opt out via browser extensions.
                    </p>
                  </div>
                </section>
              </div>

              {/* Section 11 & 12 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-white/5">
                <section id="section-11" className="scroll-mt-32">
                  <h2 className="text-xl font-black text-white uppercase mb-6 flex items-center gap-3">
                    <span className="text-xs font-mono text-[#4A5C6A]">11</span>
                    Policy Updates
                  </h2>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    We may update this policy periodically. Material changes will be communicated via email or site notice. Continued use implies acceptance.
                  </p>
                </section>

                <section id="section-12" className="scroll-mt-32">
                  <h2 className="text-xl font-black text-white uppercase mb-6 flex items-center gap-3">
                    <span className="text-xs font-mono text-[#4A5C6A]">12</span>
                    Contact Us
                  </h2>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center gap-3 text-gray-400">
                      <Mail size={14} className="text-[#4A5C6A]" />
                      info@velnorasoftware.com
                    </p>
                    <p className="flex items-center gap-3 text-gray-400">
                      <Globe size={14} className="text-[#4A5C6A]" />
                      www.velnorasoftware.com
                    </p>
                    <p className="text-xs text-gray-500 mt-4">Response Time: Within 24–48 business hours</p>
                  </div>
                </section>
              </div>

              {/* International Compliance Section */}
              <section className="pt-20 border-t border-white/5">
                <div className="p-8 lg:p-12 rounded-[2rem] bg-gradient-to-br from-[#11212D] to-[#06141B] border border-white/5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Globe size={120} className="text-[#4A5C6A]" />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6 text-[#4A5C6A]">
                      <Globe size={24} />
                      <h2 className="text-2xl font-black text-white uppercase tracking-tight">International Data Compliance</h2>
                    </div>
                    
                    <p className="text-gray-400 mb-10 max-w-2xl">
                      Velnora Tech serves clients globally and aligns with international data protection standards to ensure your data remains secure regardless of where you are.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div>
                        <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                          <ShieldCheck size={18} className="text-[#4A5C6A]" />
                          GDPR Principles (EU Users)
                        </h3>
                        <ul className="space-y-4">
                          {[
                            "Lawful, fair, and transparent processing",
                            "Collected for specified, explicit purposes",
                            "Data minimization (strictly necessary only)",
                            "Right to access, rectify, erase, and port data",
                            "Right to object or restrict processing"
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                              <CheckCircle2 size={14} className="mt-1 text-[#4A5C6A] shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                          <Lock size={18} className="text-[#4A5C6A]" />
                          Data Processing & Security
                        </h3>
                        <ul className="space-y-4">
                          {[
                            "Secure servers with encrypted communication",
                            "Limited, role-based access to personal data",
                            "Regular monitoring for vulnerabilities",
                            "Incident response plan for data breaches"
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                              <CheckCircle2 size={14} className="mt-1 text-[#4A5C6A] shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
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

export default PrivacyPolicy;
