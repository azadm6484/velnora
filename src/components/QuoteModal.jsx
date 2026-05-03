import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2 } from 'lucide-react';

const QuoteModal = ({ mode, isOpen, onClose }) => {
  const [sent, setSent] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', project: '', details: '' });

  const isHireMode = mode === 'hire';

  const projectTypes = isHireMode ? [
    { value: 'frontend', label: 'Frontend Developers' },
    { value: 'backend', label: 'Backend Engineers' },
    { value: 'fullstack', label: 'Fullstack Teams' },
    { value: 'design', label: 'UI/UX Designers' },
    { value: 'automation', label: 'Automation Experts' },
  ] : [
    { value: 'web', label: 'Web Development' },
    { value: 'mobile', label: 'Mobile Apps' },
    { value: 'saas', label: 'SaaS Platform' },
    { value: 'automation', label: 'Automation Solutions' },
    { value: 'other', label: 'Other' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    // In a real app, you would send this to your API
    setTimeout(() => {
      onClose();
      setSent(false);
      setForm({ name: '', email: '', phone: '', project: '', details: '' });
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#06141B]/95 backdrop-blur-xl"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-xl bg-[#11212D] rounded-[2.5rem] border border-white/10 shadow-2xl overflow-visible"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full z-20"
            >
              <X size={24} />
            </button>

            {sent ? (
              <div className="p-12 text-center">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} className="text-green-400" />
                </div>
                <h3 className="text-2xl font-black text-white mb-3">{isHireMode ? 'Inquiry Sent!' : 'Quote Request Sent!'}</h3>
                <p className="text-gray-400">{isHireMode ? 'Our recruitment team will contact you shortly to discuss your talent needs.' : 'Our experts will review your project and get back to you within 24 hours.'}</p>
              </div>
            ) : (
              <div className="p-8 md:p-10">
                <div className="mb-8">
                  <h2 className="text-3xl font-black text-white mb-2">
                    {isHireMode ? 'Inquire About ' : 'Request a '}
                    <span className="text-[#4A5C6A]">{isHireMode ? 'Talent' : 'Quote'}</span>
                  </h2>
                  <p className="text-gray-400">
                    {isHireMode ? 'Tell us about the roles you need to fill, and we\'ll find the perfect match.' : 'Tell us about your vision, and we\'ll help you bring it to life.'}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Full Name</label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full bg-[#06141B]/50 border border-white/5 rounded-2xl px-5 py-3 text-white focus:outline-none focus:border-[#4A5C6A] transition-colors placeholder-gray-600"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Email</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full bg-[#06141B]/50 border border-white/5 rounded-2xl px-5 py-3 text-white focus:outline-none focus:border-[#4A5C6A] transition-colors placeholder-gray-600"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Mobile Number</label>
                      <input
                        required
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-[#06141B]/50 border border-white/5 rounded-2xl px-5 py-3 text-white focus:outline-none focus:border-[#4A5C6A] transition-colors placeholder-gray-600"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5 relative">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">{isHireMode ? 'Desired Role' : 'Project Type'}</label>
                    <div 
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full bg-[#06141B]/50 border border-white/5 rounded-2xl px-5 py-3 text-white cursor-pointer flex justify-between items-center hover:border-white/10 transition-colors"
                    >
                      <span className={form.project ? 'text-white' : 'text-gray-600'}>
                        {form.project ? projectTypes.find(p => p.value === form.project)?.label : isHireMode ? 'Select a role' : 'Select a category'}
                      </span>
                      <motion.div animate={{ rotate: isDropdownOpen ? 180 : 0 }}>
                        <X size={16} className="rotate-45" />
                      </motion.div>
                    </div>

                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full left-0 right-0 mt-2 bg-[#1A2C38] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-30"
                        >
                          {projectTypes.map((type) => (
                            <div
                              key={type.value}
                              onClick={() => {
                                setForm({ ...form, project: type.value });
                                setIsDropdownOpen(false);
                              }}
                              className="px-5 py-3 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
                            >
                              {type.label}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">{isHireMode ? 'Hiring Requirements' : 'Project Details'}</label>
                    <textarea
                      required
                      rows={4}
                      value={form.details}
                      onChange={(e) => setForm({ ...form, details: e.target.value })}
                      placeholder={isHireMode ? "Describe the skills and experience you're looking for..." : "Briefly describe your project goals..."}
                      className="w-full bg-[#06141B]/50 border border-white/5 rounded-2xl px-5 py-3 text-white focus:outline-none focus:border-[#4A5C6A] transition-colors resize-none placeholder-gray-600"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-white text-[#06141B] font-bold py-4 rounded-2xl hover:bg-gray-200 transition-all flex items-center justify-center gap-2 shadow-[0_10px_20px_rgba(255,255,255,0.1)] mt-4"
                  >
                    <Send size={18} /> {isHireMode ? 'Submit Inquiry' : 'Submit Request'}
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default QuoteModal;
