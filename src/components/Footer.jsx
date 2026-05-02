import React from 'react';
import { MessageCircle, Mail, MapPin, Facebook, Twitter, Linkedin, Github } from 'lucide-react';
import { useRouter } from '../App';

const Footer = () => {
  const { navigate } = useRouter();

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Contact', path: '/contact' },
  ];

  const serviceLinks = [
    { label: 'Web Development', path: '/services' },
    { label: 'Mobile Apps', path: '/services' },
    { label: 'SaaS Solutions', path: '/services' },
    { label: 'UI/UX Design', path: '/services' },
    { label: 'Hire Developers', path: '/hire-developers' },
  ];

  return (
    <footer className="bg-[#06141B] pt-20 pb-10 border-t border-white/5 relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <button onClick={() => navigate('/')} className="text-2xl font-black text-white mb-6 block text-left">
              Velnora<span className="text-[#4A5C6A]">Tech</span>
            </button>
            <p className="text-[#9BA8AB] text-sm leading-relaxed mb-6">
              Building scalable digital products for future businesses.
              Innovative software solutions for global enterprises.
            </p>
            <div className="flex space-x-3">
              {[
                { Icon: Facebook, href: '#' },
                { Icon: Twitter, href: '#' },
                { Icon: Linkedin, href: '#' },
                { Icon: Github, href: '#' },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href}
                  className="w-9 h-9 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center text-[#9BA8AB] hover:text-white transition-all">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-[#4A5C6A]">Quick Links</h4>
            <ul className="space-y-3 text-sm text-[#9BA8AB]">
              {quickLinks.map(({ label, path }) => (
                <li key={label}>
                  <button onClick={() => navigate(path)}
                    className="hover:text-white transition-colors text-left">
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-[#4A5C6A]">Services</h4>
            <ul className="space-y-3 text-sm text-[#9BA8AB]">
              {serviceLinks.map(({ label, path }) => (
                <li key={label}>
                  <button onClick={() => navigate(path)}
                    className="hover:text-white transition-colors text-left">
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-[#4A5C6A]">Contact Info</h4>
            <ul className="space-y-4 text-sm text-[#9BA8AB]">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#4A5C6A] shrink-0 mt-0.5" />
                <span className="leading-relaxed">Gaur Chowk, Plot No. 17, Tech Zone IV, Amrapali Dream Valley, Greater Noida, UP 201318</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#4A5C6A] shrink-0" />
                <a href="mailto:info@velnoratech.com" className="hover:text-white transition-colors">
                  info@velnoratech.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#9BA8AB]">
          <p>© {new Date().getFullYear()} VelnoraTech Software Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <button onClick={() => navigate('/contact')} className="hover:text-white transition-colors">Privacy Policy</button>
            <button onClick={() => navigate('/contact')} className="hover:text-white transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 p-4 bg-[#25D366] text-white rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform flex items-center justify-center"
      >
        <MessageCircle size={26} />
      </a>
    </footer>
  );
};

export default Footer;
