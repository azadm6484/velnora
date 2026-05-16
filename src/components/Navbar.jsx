import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Globe, Laptop, Smartphone, Palette, Code, Server, Layers, Shield, Landmark, HeartPulse, ShoppingCart, GraduationCap, Truck, Home, Database, Cloud, Cpu, Phone, Megaphone, Scissors, Sun, Moon } from 'lucide-react';
import { useRouter } from '../App';
import logo from '../assets/velnora_favicon.png';

const Navbar = () => {
  const { currentPath, navigate, setQuoteModalMode, theme, toggleTheme } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setIsOpen(false); setActiveMenu(null); }, [currentPath]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const go = (path) => { navigate(path); setIsOpen(false); setActiveMenu(null); };

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
      name: 'Services', path: '/services', mega: true,
      items: [
        { name: 'Website Development', icon: <Globe size={17} />, desc: 'Custom web solutions', path: '/services/website-development' },
        { name: 'Mobile App Development', icon: <Smartphone size={17} />, desc: 'iOS & Android apps', path: '/services/mobile-app-development' },
        { name: 'SaaS / Software Solutions', icon: <Laptop size={17} />, desc: 'Scalable cloud software', path: '/services/saas-software-solutions' },
        { name: 'UI/UX Design', icon: <Palette size={17} />, desc: 'Modern user interfaces', path: '/services/ui-ux-design' },
        { name: 'Custom Software', icon: <Layers size={17} />, desc: 'Bespoke business tools', path: '/services/custom-software' },
        { name: 'Security & QA', icon: <Shield size={17} />, desc: 'Robust testing & audit', path: '/services/security-qa' },
        { name: 'Automation Solutions', icon: <Cpu size={17} />, desc: 'n8n, Make, Zapier expert', path: '/services/automation-solutions' },
      ]
    },
    {
      name: 'Industries', path: '/industries', mega: true,
      items: [
        { name: 'Fintech', icon: <Landmark size={17} />, desc: 'Banking & Finance', path: '/industries/fintech' },
        { name: 'Healthcare', icon: <HeartPulse size={17} />, desc: 'Medical Tech', path: '/industries/healthcare' },
        { name: 'E-commerce', icon: <ShoppingCart size={17} />, desc: 'Online Retail', path: '/industries/e-commerce' },
        { name: 'Logistics', icon: <Truck size={17} />, desc: 'Supply Chain', path: '/industries/logistics' },
        { name: 'Education', icon: <GraduationCap size={17} />, desc: 'EdTech Solutions', path: '/industries/education' },
        { name: 'Real Estate', icon: <Home size={17} />, desc: 'Property & PropTech', path: '/industries/real-estate' },
        { name: 'Advertising', icon: <Megaphone size={17} />, desc: 'AdTech & Marketing', path: '/industries/advertising-marketing' },
        { name: 'Boutique', icon: <Scissors size={17} />, desc: 'Salon & Spa Tech', path: '/industries/boutique-salon' },
      ]
    },
    { name: 'Portfolio', path: '/portfolio' },
    {
      name: 'Hire Developers', path: '/hire-developers', mega: true,
      items: [
        { name: 'React Developers', desc: 'Frontend experts', icon: <Code size={17} />, path: '/hire-developers/react-developers' },
        { name: 'Node.js Developers', desc: 'Backend engineers', icon: <Server size={17} />, path: '/hire-developers/node-js-developers' },
        { name: 'UI/UX Designers', desc: 'Creative designers', icon: <Palette size={17} />, path: '/hire-developers/ui-ux-designers' },
        { name: 'Mobile Developers', desc: 'iOS & Android', icon: <Smartphone size={17} />, path: '/hire-developers/mobile-developers' },
        { name: 'Backend / DevOps', desc: 'Infrastructure', icon: <Database size={17} />, path: '/hire-developers/backend-devops' },
        { name: 'Cloud Architects', desc: 'Cloud strategy', icon: <Cloud size={17} />, path: '/hire-developers/cloud-architects' },
      ]
    },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => path === '/' ? currentPath === '/' : currentPath.startsWith(path);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className="w-full mx-auto px-2 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center bg-white/90 border-white/20 shadow-xl shadow-black/5 backdrop-blur-xl border rounded-full px-5 py-2.5 transition-all duration-500`}>

          {/* Logo */}
          <a href="/" onClick={(e) => { e.preventDefault(); go('/'); }} className="flex items-center space-x-2 shrink-0 group">
            <div className="w-12 h-12 flex items-center justify-center">
              <img src={logo} alt="VelnoraTech Logo" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
            </div>
            <span className={`text-lg font-black tracking-tight text-[#06141B]`}>
              Velnora<span className={`text-[#4A5C6A] font-semibold`}>Tech</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div key={item.name} className="relative"
                onMouseEnter={() => item.mega && setActiveMenu(item.name)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <a
                  href={item.path}
                  onClick={(e) => { e.preventDefault(); go(item.path); }}
                  onMouseEnter={() => item.mega && setActiveMenu(item.name)}
                  className={`flex items-center gap-1 px-3 xl:px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    isActive(item.path) 
                      ? 'bg-[#06141B] text-white shadow-lg' 
                      : 'text-[#06141B]/70 hover:bg-[#06141B]/5 hover:text-[#06141B]'
                  }`}
                >
                  {item.name}
                  {item.mega && <ChevronDown size={13} className={`transition-transform duration-200 ${activeMenu === item.name ? 'rotate-180' : ''}`} />}
                </a>

                <AnimatePresence>
                  {item.mega && activeMenu === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.15 }}
                      className={`absolute left-1/2 -translate-x-1/2 mt-3 w-[400px] bg-white/95 border-white shadow-2xl backdrop-blur-2xl rounded-2xl p-3 grid grid-cols-2 gap-1 border transition-all duration-500`}
                    >
                      {item.items.map((sub) => (
                        <a href={sub.path} key={sub.name} onClick={(e) => { e.preventDefault(); go(sub.path); }}
                          className={`p-3 rounded-xl hover:bg-[#06141B]/5 transition-all group text-left w-full block`}
                        >
                          <div className="flex items-center mb-0.5">
                            {sub.icon && <span className={`text-[#4A5C6A] mr-2 group-hover:scale-110 transition-transform`}>{sub.icon}</span>}
                            <span className={`font-bold text-[#06141B] text-xs`}>{sub.name}</span>
                          </div>
                          {sub.desc && <p className={`text-[10px] text-gray-500 pl-6`}>{sub.desc}</p>}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right CTA */}
          <div className="hidden xl:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-full transition-all duration-300 bg-[#06141B]/5 text-[#06141B] hover:bg-[#06141B]/10`}
              title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <a
              href="tel:+918383895123"
              className={`flex items-center gap-2 text-[#06141B]/80 hover:text-[#06141B] font-bold text-sm px-4 py-2.5 transition-colors`}
            >
              <Phone size={18} />
              <span>+91 8383895123</span>
            </a>
            <button
              onClick={() => setQuoteModalMode('quote')}
              className={`bg-[#06141B] text-white hover:bg-[#253745] text-sm font-bold px-5 py-2.5 rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]`}
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-full transition-all duration-300 bg-[#06141B]/5 text-[#06141B] hover:bg-[#06141B]/10`}
              title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)}
              className={`text-[#06141B] p-2 rounded-full hover:bg-gray-100/50 transition-colors`}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Backdrop for mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="xl:hidden fixed inset-0 bg-[#06141B]/40 backdrop-blur-sm z-[-1]"
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`xl:hidden relative z-10 mx-4 mt-2 bg-white/95 backdrop-blur-2xl rounded-2xl border border-gray-200 shadow-2xl overflow-y-auto max-h-[calc(100dvh-140px)] custom-scrollbar transition-all duration-500`}
          >
            <div className="px-3 pt-4 pb-8 space-y-1">
              {menuItems.map((item) => (
                <div key={item.name} className="space-y-1">
                  <a href={item.path} onClick={(e) => { e.preventDefault(); go(item.path); }}
                    className={`block w-full text-left px-5 py-3.5 text-sm font-bold rounded-xl transition-colors ${
                      isActive(item.path) ? 'bg-[#06141B] text-white' : 'text-[#06141B] hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </a>
                  {item.mega && (
                    <div className="grid grid-cols-1 gap-1 px-2 pb-2">
                      {item.items.map((sub) => (
                        <a key={sub.name} href={sub.path} onClick={(e) => { e.preventDefault(); go(sub.path); }}
                          className={`flex items-center w-full text-left py-3 px-4 text-[13px] font-bold rounded-lg transition-colors text-gray-700 hover:text-[#06141B] hover:bg-gray-100`}
                        >
                          <span className="mr-3 text-[#4A5C6A]">{sub.icon}</span>
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-2 pt-3 pb-1 flex flex-col gap-2">
                <a
                  href="tel:+918383895123"
                  className="w-full bg-white border border-[#06141B] text-[#06141B] py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2"
                >
                  <Phone size={18} />
                  Call Us Now
                </a>
                <button onClick={() => { setIsOpen(false); setQuoteModalMode('quote'); }}
                  className="w-full bg-[#06141B] text-white py-4 rounded-xl font-bold text-sm hover:bg-[#253745] transition-all shadow-lg"
                >
                  Get Quote
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
