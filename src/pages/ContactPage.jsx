import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, MessageCircle, Clock } from 'lucide-react';
import { useRouter } from '../App';

const ContactPage = () => {
  const { setQuoteModalMode, theme } = useRouter();
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://n8n-lxyp.onrender.com/webhook/7ccecc54-64fb-4184-bfef-a4569c04c2d4', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          source: 'Contact Page'
        }),
      });

      if (response.ok) {
        setSent(true);
        setForm({ name: '', email: '', phone: '', subject: '', message: '' });
        // Auto-reset after 5 seconds
        setTimeout(() => setSent(false), 5000);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Network error. Please check your connection.');
    }
  };

  return (
    <section className={`relative pt-24 sm:pt-32 pb-24 min-h-screen overflow-hidden transition-colors duration-500 ${theme === 'light' ? 'bg-white' : 'bg-[#06141B]'}`} id="contact">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
          alt="Technology Background"
          className={`w-full h-full object-cover transition-opacity duration-500 ${theme === 'light' ? 'opacity-100' : 'opacity-20'}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-b ${theme === 'light' ? 'from-white/95 via-white/80 to-white/90' : 'from-[#06141B]/80 via-[#06141B]/60 to-[#06141B]'} pointer-events-none transition-colors duration-500`} />
      </div>

      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className={`inline-block ${theme === 'light' ? 'bg-white/10 border-white/20 text-[#06141B]/80' : 'bg-white/10 border-white/10 text-white/80'} backdrop-blur-md shadow-sm text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border`}>
            Connect With Us
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className={`text-4xl sm:text-6xl lg:text-7xl font-black ${theme === 'light' ? 'text-[#06141B]' : 'text-white'} mb-6 transition-colors duration-500`}>
            General <span className="text-[#4A5C6A] drop-shadow-lg">Inquiry</span>
          </motion.h1>
          <p className={`text-lg ${theme === 'light' ? 'text-gray-700 font-bold' : 'text-gray-300'} max-w-2xl mx-auto transition-colors duration-500`}>Have a question or just want to say hello? Our team is ready to help you navigate the digital landscape.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 w-full mx-auto items-stretch">
          {/* Contact Info & Map */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="space-y-6 flex flex-col">
            <div className={`${theme === 'light' ? 'bg-white/30 border-white/50 shadow-xl' : 'bg-[#11212D]/40 border-white/5 shadow-2xl'} backdrop-blur-md p-2 rounded-[2.5rem] border overflow-hidden h-[400px] shrink-0 transition-all`}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.123!2d77.427687!3d28.6006683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cefc60270c197%3A0x5252304536bd7ed9!2sNX%20ONE%2C%20Techzone-4%2C%20Greater%20Noida%20West!5e0!3m2!1sen!2sin!4v1714747200000!5m2!1sen!2sin"
                className="w-full h-full rounded-[2.2rem] opacity-80 hover:opacity-100 transition-opacity"
                style={{ border: 0, filter: theme === 'light' ? 'none' : 'invert(90%) hue-rotate(180deg) brightness(90%) contrast(90%)' }}
                allowFullScreen=""
                loading="eager"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 shrink-0">
              {[
                { icon: <Mail size={20} />, label: 'Email Address', value: 'info@velnorasoftware.com', link: 'mailto:info@velnorasoftware.com' },
                { icon: <Phone size={20} />, label: 'Direct Call', value: '+91 8383895123', link: 'tel:+918383895123' },
              ].map((item, i) => (
                <a key={i} href={item.link} className={`flex gap-4 ${theme === 'light' ? 'bg-white/30 border-white/50 shadow-xl' : 'bg-[#11212D]/40 border-white/5 shadow-xl'} backdrop-blur-md p-5 rounded-[2rem] border hover:border-white/20 hover:bg-[#11212D]/60 transition-all group`}>
                  <div className={`w-12 h-12 ${theme === 'light' ? 'bg-[#06141B]/10 text-[#06141B]' : 'bg-white/5 text-white'} rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#06141B] group-hover:text-white transition-all`}>{item.icon}</div>
                  <div>
                    <p className={`text-[9px] font-black uppercase tracking-widest ${theme === 'light' ? 'text-[#4A5C6A]' : 'text-[#4A5C6A]'} mb-1`}>{item.label}</p>
                    <p className={`${theme === 'light' ? 'text-[#06141B]' : 'text-white'} font-bold text-sm truncate max-w-[150px]`}>{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-4 shrink-0">
              <a href="https://wa.me/918383895123" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] text-white p-6 rounded-[2rem] font-black uppercase tracking-widest text-sm hover:bg-[#20BA5A] transition-all shadow-[0_20px_40px_rgba(37,211,102,0.2)] hover:scale-[1.02] active:scale-[0.98]">
                <MessageCircle size={22} />
                Chat on WhatsApp
              </a>
              <button onClick={() => setQuoteModalMode('calendly')}
                className={`flex items-center justify-center gap-3 ${theme === 'light' ? 'bg-[#06141B] text-white shadow-[#06141B]/20' : 'bg-white text-[#06141B] shadow-white/10'} p-6 rounded-[2rem] font-black uppercase tracking-widest text-sm hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl`}>
                <Clock size={22} />
                Schedule a Discovery Call
              </button>
            </div>

            <div className={`p-6 ${theme === 'light' ? 'bg-[#06141B]/5 border-[#06141B]/10' : 'bg-white/5 border-white/5'} rounded-[2rem] border text-center flex-grow flex flex-col justify-center`}>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#4A5C6A] mb-2 text-center">Our Headquarters</p>
              <p className={`${theme === 'light' ? 'text-[#06141B]/80 font-bold' : 'text-gray-400'} text-xs leading-relaxed`}>
                NX-One, Tech, Amrapali Dream Valley, B-114, Zone IV, <br />
                Greater Noida, Uttar Pradesh 201318
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col">
            {sent ? (
              <div className={`${theme === 'light' ? 'bg-white/30 backdrop-blur-xl border-white/50 shadow-2xl' : 'bg-[#11212D]/60 backdrop-blur-xl border border-white/10 shadow-2xl'} p-12 rounded-[2.5rem] border text-center h-full flex flex-col items-center justify-center transition-all`}>
                <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mb-8 animate-bounce">
                  <Send size={40} className="text-green-500" />
                </div>
                <h3 className={`text-3xl font-black ${theme === 'light' ? 'text-[#06141B]' : 'text-white'} mb-4`}>Message Delivered!</h3>
                <p className={`${theme === 'light' ? 'text-gray-700 font-bold' : 'text-gray-400'} text-lg`}>Thank you for reaching out. A VelnoraTech representative will contact you within 24 hours.</p>
                <button onClick={() => setSent(false)} className={`mt-8 ${theme === 'light' ? 'text-[#4A5C6A]' : 'text-[#4A5C6A]'} font-bold hover:text-[#06141B] transition-colors`}>Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={`${theme === 'light' ? 'bg-white/30 backdrop-blur-xl border-white/50 shadow-2xl' : 'bg-[#11212D]/40 backdrop-blur-md border-white/5 shadow-2xl'} p-8 md:p-10 rounded-[2.5rem] border space-y-6 flex flex-col h-full transition-all`}>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#4A5C6A] ml-1">Full Name</label>
                  <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                    className={`w-full ${theme === 'light' ? 'bg-white/50 border-gray-200 text-[#06141B]' : 'bg-[#06141B]/50 border-white/5 text-white'} border rounded-2xl px-6 py-4 focus:outline-none focus:border-[#4A5C6A] transition-all placeholder-gray-400`}
                    placeholder="John Doe" />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#4A5C6A] ml-1">Email Address</label>
                    <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                      className={`w-full ${theme === 'light' ? 'bg-white/50 border-gray-200 text-[#06141B]' : 'bg-[#06141B]/50 border-white/5 text-white'} border rounded-2xl px-6 py-4 focus:outline-none focus:border-[#4A5C6A] transition-all placeholder-gray-400`}
                      placeholder="john@company.com" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#4A5C6A] ml-1">Phone Number</label>
                    <input required type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                      className={`w-full ${theme === 'light' ? 'bg-white/50 border-gray-200 text-[#06141B]' : 'bg-[#06141B]/50 border-white/5 text-white'} border rounded-2xl px-6 py-4 focus:outline-none focus:border-[#4A5C6A] transition-all placeholder-gray-400`}
                      placeholder="+91 8383895123" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#4A5C6A] ml-1">Subject</label>
                  <input required value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}
                    className={`w-full ${theme === 'light' ? 'bg-white/50 border-gray-200 text-[#06141B]' : 'bg-[#06141B]/50 border-white/5 text-white'} border rounded-2xl px-6 py-4 focus:outline-none focus:border-[#4A5C6A] transition-all placeholder-gray-400`}
                    placeholder="How can we help you?" />
                </div>

                <div className="space-y-1.5 flex-grow flex flex-col">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#4A5C6A] ml-1">Your Message</label>
                  <textarea required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    className={`w-full ${theme === 'light' ? 'bg-white/50 border-gray-200 text-[#06141B]' : 'bg-[#06141B]/50 border-white/5 text-white'} border rounded-2xl px-6 py-4 focus:outline-none focus:border-[#4A5C6A] transition-all resize-none placeholder-gray-400 flex-grow`}
                    placeholder="Type your message here..." />
                </div>

                <button type="submit"
                  className={`w-full ${theme === 'light' ? 'bg-[#06141B] text-white' : 'bg-white text-[#06141B]'} font-black uppercase tracking-[0.2em] py-5 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-xl hover:scale-[1.01] active:scale-[0.99] mt-4 shrink-0`}>
                  <Send size={20} /> Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
