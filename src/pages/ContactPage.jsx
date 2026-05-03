import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, MessageCircle } from 'lucide-react';

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="relative pt-24 sm:pt-32 pb-24 min-h-screen overflow-hidden bg-[#06141B]" id="contact">
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
          Get In Touch
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-black text-white mb-6">
          Contact <span className="text-[#4A5C6A] drop-shadow-lg">Us</span>
        </motion.h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">Have a project in mind? Let's talk. We respond within 24 hours.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
          {[
            { icon: <MapPin size={22} />, label: 'Address', value: 'Gaur Chowk, Plot No. 17, Tech Zone IV, Amrapali Dream Valley, Greater Noida, UP 201318' },
            { icon: <Mail size={22} />, label: 'Email', value: 'info@velnoratech.com' },
            { icon: <Phone size={22} />, label: 'Phone', value: '+91 98765 43210' },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 bg-[#11212D]/60 backdrop-blur-sm p-6 rounded-2xl border border-white/5 shadow-sm">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white shrink-0">{item.icon}</div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">{item.label}</p>
                <p className="text-white font-semibold text-sm">{item.value}</p>
              </div>
            </div>
          ))}
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#25D366] text-white p-5 rounded-2xl font-bold hover:bg-[#20BA5A] transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)]">
            <MessageCircle size={24} />
            Chat on WhatsApp
          </a>
        </motion.div>

        {/* Contact Form */}
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}>
          {sent ? (
            <div className="bg-[#11212D]/60 backdrop-blur-sm p-12 rounded-3xl border border-white/5 shadow-sm text-center">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send size={32} className="text-green-400" />
              </div>
              <h3 className="text-2xl font-black text-white mb-3">Message Sent!</h3>
              <p className="text-gray-400">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-[#11212D]/60 backdrop-blur-sm p-8 rounded-3xl border border-white/5 shadow-sm space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block">Name</label>
                  <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                    className="w-full bg-[#06141B]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#4A5C6A] transition-colors placeholder-gray-500"
                    placeholder="John Doe" />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block">Email</label>
                  <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                    className="w-full bg-[#06141B]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#4A5C6A] transition-colors placeholder-gray-500"
                    placeholder="john@company.com" />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block">Subject</label>
                <input required value={form.subject} onChange={e => setForm({...form, subject: e.target.value})}
                  className="w-full bg-[#06141B]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#4A5C6A] transition-colors placeholder-gray-500"
                  placeholder="Project Inquiry" />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block">Message</label>
                <textarea required rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                  className="w-full bg-[#06141B]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#4A5C6A] transition-colors resize-none placeholder-gray-500"
                  placeholder="Tell us about your project..." />
              </div>
              <button type="submit"
                className="w-full bg-white text-[#06141B] font-bold py-4 rounded-xl hover:bg-gray-200 transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                <Send size={18} /> Send Message
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
