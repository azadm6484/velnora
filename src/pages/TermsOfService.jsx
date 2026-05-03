import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Gavel, Scale, AlertCircle, CheckCircle } from 'lucide-react';
import { useRouter } from '../App';

const TermsOfService = () => {
  const { navigate } = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing and using the services provided by VelnoraTech Software Pvt Ltd, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.",
      icon: <CheckCircle className="text-[#4A5C6A]" size={24} />
    },
    {
      title: "2. Description of Service",
      content: "VelnoraTech provides software development, UI/UX design, and automation solutions. We reserve the right to modify or discontinue any service with or without notice.",
      icon: <Gavel className="text-[#4A5C6A]" size={24} />
    },
    {
      title: "3. User Responsibilities",
      content: "Users are responsible for providing accurate information and for maintaining the confidentiality of any account credentials. You agree to use our services only for lawful purposes.",
      icon: <AlertCircle className="text-[#4A5C6A]" size={24} />
    },
    {
      title: "4. Intellectual Property",
      content: "All content and materials provided as part of our services, unless otherwise specified, are the property of VelnoraTech Software Pvt Ltd and are protected by intellectual property laws.",
      icon: <Scale className="text-[#4A5C6A]" size={24} />
    }
  ];

  return (
    <div className="bg-[#06141B] min-h-screen pt-28 pb-20">
      {/* Back Button */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <motion.button 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/')}
          className="group flex items-center gap-3 text-gray-400 hover:text-white transition-all font-bold uppercase tracking-widest text-[10px]"
        >
          <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/5 transition-all shadow-lg">
            <ArrowLeft size={16} />
          </div>
          <span>Back to Home</span>
        </motion.button>
      </div>

      <div className="w-full mx-auto px-4 sm:px-10 lg:px-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-4">Terms of <span className="text-[#4A5C6A]">Service</span></h1>
          <p className="text-gray-400 mb-12">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

          <div className="space-y-12">
            <section className="bg-[#11212D]/40 border border-white/5 rounded-3xl p-8 lg:p-12">
              <p className="text-gray-300 leading-relaxed mb-8">
                Please read these Terms of Service carefully before using the services offered by VelnoraTech Software Pvt Ltd.
              </p>
              
              <div className="space-y-10">
                {sections.map((section, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="shrink-0 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                      {section.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{section.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{section.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-br from-[#06141B] to-[#11212D] rounded-3xl p-8 lg:p-12 border border-white/5 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Questions?</h2>
              <p className="text-gray-400 mb-8">
                If you have any questions regarding these terms, please feel free to reach out to our legal team.
              </p>
              <button 
                onClick={() => navigate('/contact')}
                className="bg-white text-[#06141B] px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform"
              >
                Contact Support
              </button>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
