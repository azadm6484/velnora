import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ShieldCheck, Lock, Eye, FileText } from 'lucide-react';
import { useRouter } from '../App';

const PrivacyPolicy = () => {
  const { navigate } = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "1. Information We Collect",
      content: "We collect information you provide directly to us when you request a quote, contact us, or use our services. This may include your name, email address, phone number, and any other information you choose to provide.",
      icon: <Eye className="text-[#4A5C6A]" size={24} />
    },
    {
      title: "2. How We Use Your Information",
      content: "We use the information we collect to provide, maintain, and improve our services, to communicate with you about your projects, and to respond to your inquiries.",
      icon: <FileText className="text-[#4A5C6A]" size={24} />
    },
    {
      title: "3. Information Sharing",
      content: "We do not share your personal information with third parties except as described in this policy, such as with your consent or to comply with legal obligations.",
      icon: <ShieldCheck className="text-[#4A5C6A]" size={24} />
    },
    {
      title: "4. Data Security",
      content: "We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration, and destruction.",
      icon: <Lock className="text-[#4A5C6A]" size={24} />
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
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-4">Privacy <span className="text-[#4A5C6A]">Policy</span></h1>
          <p className="text-gray-400 mb-12">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

          <div className="space-y-12">
            <section className="bg-[#11212D]/40 border border-white/5 rounded-3xl p-8 lg:p-12">
              <p className="text-gray-300 leading-relaxed mb-8">
                At VelnoraTech Software Pvt Ltd, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
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

            <section className="bg-gradient-to-br from-[#06141B] to-[#11212D] rounded-3xl p-8 lg:p-12 border border-white/5">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="text-[#4A5C6A] font-bold">
                <p>VelnoraTech Software Pvt Ltd</p>
                <p>Email: info@velnoratech.com</p>
                <p>Address: Greater Noida, Uttar Pradesh, India</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
