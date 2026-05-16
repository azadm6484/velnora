import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { useRouter } from '../App';

const QuoteModal = ({ mode, isOpen, onClose }) => {
  const { theme } = useRouter();
  const [sent, setSent] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', project: '', details: '', honeypot: '' });
  const widgetId = React.useRef(null);

  // Use the testing site key (Always Passes on localhost)
  // Replace this with your real Site Key from Cloudflare Dashboard when deploying
  const SITE_KEY = '0x4AAAAAADOngXM5EUs3bjAG';

  const resetTurnstile = () => {
    if (window.turnstile && widgetId.current) {
      try {
        window.turnstile.reset(widgetId.current);
      } catch (e) {
        console.warn('Turnstile reset failed:', e);
      }
      setTurnstileToken(null);
      widgetId.current = null;
    }
  };

  React.useEffect(() => {
    if (isOpen) {
      setSent(false);
      // Wait for DOM to render before initializing Turnstile
      const timer = setTimeout(() => {
        if (window.turnstile && !widgetId.current) {
          try {
            widgetId.current = window.turnstile.render('#turnstile-container', {
              sitekey: SITE_KEY,
              callback: (token) => setTurnstileToken(token),
              'expired-callback': () => setTurnstileToken(null),
              'error-callback': (err) => {
                console.error('Turnstile Error Code:', err);
                // If it fails on localhost, it's likely a site key domain restriction
                if (window.location.hostname === 'localhost') {
                  console.warn('Turnstile might be failing because your Site Key is not configured for localhost.');
                }
              }
            });
          } catch (e) {
            console.error('Turnstile render failed:', e);
          }
        }
      }, 100);
      return () => clearTimeout(timer);
    }
    return () => {
      resetTurnstile();
    };
  }, [isOpen]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Bot Protection Check (Honeypot)
    if (form.honeypot !== '') {
      console.log('Bot detected via honeypot');
      return;
    }

    // Bot Protection Check (Cloudflare Turnstile)
    if (!turnstileToken) {
      alert('Please complete the human verification.');
      return;
    }

    try {
      const response = await fetch('https://n8n-lxyp.onrender.com/webhook/7ccecc54-64fb-4184-bfef-a4569c04c2d4', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          turnstileToken,
          source: isHireMode ? 'Talent Inquiry' : 'Quote Request',
          mode: mode
        }),
      });

      if (response.ok) {
        setSent(true);
        setTimeout(() => {
          onClose();
          setSent(false);
          setForm({ name: '', email: '', phone: '', project: '', details: '', honeypot: '' });
          resetTurnstile();
        }, 3000);
      } else {
        alert('Failed to send request. Please try again.');
      }
    } catch (error) {
      console.error('Webhook Error:', error);
      alert('Connection error. Please check your network.');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] overflow-y-auto overflow-x-hidden flex justify-center items-start p-4 md:p-6 py-10 sm:py-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className={`fixed inset-0 ${theme === 'light' ? 'bg-white/95' : 'bg-[#06141B]/95'} backdrop-blur-xl transition-colors duration-500`}
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className={`relative w-full max-w-xl transition-all duration-500 rounded-[2.5rem] border shadow-2xl overflow-visible my-auto ${theme === 'light' ? 'bg-white/30 backdrop-blur-xl border-white/50' : 'bg-[#11212D] border-white/10'}`}
          >
            <button
              onClick={onClose}
              className={`absolute top-6 right-6 transition-colors p-2 rounded-full z-20 ${theme === 'light' ? 'text-[#06141B] hover:bg-[#06141B]/5' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
            >
              <X size={24} />
            </button>

            {sent ? (
              <div className="p-12 text-center">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} className="text-green-500" />
                </div>
                <h3 className={`text-2xl font-black mb-3 transition-colors duration-500 ${theme === 'light' ? 'text-[#06141B]' : 'text-white'}`}>{isHireMode ? 'Inquiry Sent!' : 'Quote Request Sent!'}</h3>
                <p className={`transition-colors duration-500 ${theme === 'light' ? 'text-gray-700 font-bold' : 'text-gray-400'}`}>{isHireMode ? 'Our recruitment team will contact you shortly to discuss your talent needs.' : 'Our experts will review your project and get back to you within 24 hours.'}</p>
              </div>
            ) : (
              <div className="p-6 md:p-8">
                <div className="mb-6">
                  <h2 className={`text-2xl md:text-3xl font-black mb-2 transition-colors duration-500 ${theme === 'light' ? 'text-[#06141B]' : 'text-white'}`}>
                    {isHireMode ? 'Inquire About ' : 'Request a '}
                    <span className="text-[#4A5C6A] drop-shadow-sm">{isHireMode ? 'Talent' : 'Quote'}</span>
                  </h2>
                  <p className={`transition-colors duration-500 ${theme === 'light' ? 'text-gray-700 font-bold' : 'text-gray-400'}`}>
                    {isHireMode ? 'Tell us about the roles you need to fill, and we\'ll find the perfect match.' : 'Tell us about your vision, and we\'ll help you bring it to life.'}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot Field (Bot Protection) */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="website_honeypot"
                      tabIndex="-1"
                      autoComplete="off"
                      value={form.honeypot}
                      onChange={(e) => setForm({ ...form, honeypot: e.target.value })}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#4A5C6A] ml-1">Full Name</label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Doe"
                      className={`w-full border rounded-2xl px-5 py-3 transition-all placeholder-gray-400 focus:outline-none focus:border-[#4A5C6A] ${theme === 'light' ? 'bg-white/50 border-gray-200 text-[#06141B]' : 'bg-[#06141B]/50 border-white/5 text-white'}`}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-widest text-[#4A5C6A] ml-1">Email</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="john@company.com"
                        className={`w-full border rounded-2xl px-5 py-3 transition-all placeholder-gray-400 focus:outline-none focus:border-[#4A5C6A] ${theme === 'light' ? 'bg-white/50 border-gray-200 text-[#06141B]' : 'bg-[#06141B]/50 border-white/5 text-white'}`}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-widest text-[#4A5C6A] ml-1">Mobile Number</label>
                      <input
                        required
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 8383895123"
                        className={`w-full border rounded-2xl px-5 py-3 transition-all placeholder-gray-400 focus:outline-none focus:border-[#4A5C6A] ${theme === 'light' ? 'bg-white/50 border-gray-200 text-[#06141B]' : 'bg-[#06141B]/50 border-white/5 text-white'}`}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5 relative">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#4A5C6A] ml-1">{isHireMode ? 'Desired Role' : 'Project Type'}</label>
                    <div
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className={`w-full border rounded-2xl px-5 py-3 flex justify-between items-center transition-all ${theme === 'light' ? 'bg-white/50 border-gray-200 text-[#06141B]' : 'bg-[#06141B]/50 border-white/5 text-white'} cursor-pointer hover:border-[#4A5C6A]/50`}
                    >
                      <span className={form.project ? (theme === 'light' ? 'text-[#06141B]' : 'text-white') : 'text-gray-400'}>
                        {form.project ? projectTypes.find(p => p.value === form.project)?.label : isHireMode ? 'Select a role' : 'Select a category'}
                      </span>
                      <motion.div animate={{ rotate: isDropdownOpen ? 180 : 0 }}>
                        <X size={16} className={`rotate-45 ${theme === 'light' ? 'text-[#06141B]' : 'text-white'}`} />
                      </motion.div>
                    </div>

                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className={`absolute top-full left-0 right-0 mt-2 border rounded-2xl shadow-2xl overflow-hidden z-30 ${theme === 'light' ? 'bg-white border-gray-200 shadow-xl' : 'bg-[#1A2C38] border-white/10 shadow-2xl'}`}
                        >
                          {projectTypes.map((type) => (
                            <div
                              key={type.value}
                              onClick={() => {
                                setForm({ ...form, project: type.value });
                                setIsDropdownOpen(false);
                              }}
                              className={`px-5 py-3 text-sm transition-colors cursor-pointer ${theme === 'light' ? 'text-gray-700 hover:bg-[#06141B]/5 hover:text-[#06141B]' : 'text-gray-300 hover:bg-white/10 hover:text-white'}`}
                            >
                              {type.label}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#4A5C6A] ml-1">{isHireMode ? 'Hiring Requirements' : 'Project Details'}</label>
                    <textarea
                      required
                      rows={4}
                      value={form.details}
                      onChange={(e) => setForm({ ...form, details: e.target.value })}
                      placeholder={isHireMode ? "Describe the skills and experience you're looking for..." : "Briefly describe your project goals..."}
                      className={`w-full border rounded-2xl px-5 py-3 transition-all placeholder-gray-400 focus:outline-none focus:border-[#4A5C6A] resize-none ${theme === 'light' ? 'bg-white/50 border-gray-200 text-[#06141B]' : 'bg-[#06141B]/50 border-white/5 text-white'}`}
                    />
                  </div>

                  {/* Cloudflare Turnstile */}
                  <div className="flex justify-center py-2 min-h-[65px]">
                    <div id="turnstile-container"></div>
                  </div>

                  <button
                    type="submit"
                    className={`w-full font-black uppercase tracking-widest py-4 rounded-2xl transition-all flex items-center justify-center gap-2 shadow-xl mt-4 ${theme === 'light' ? 'bg-[#06141B] text-white shadow-[#06141B]/20 hover:scale-[1.01]' : 'bg-white text-[#06141B] shadow-white/10 hover:bg-gray-200 hover:scale-[1.01]'}`}
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
