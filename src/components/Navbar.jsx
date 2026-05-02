import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Globe, Laptop, Smartphone, Palette, Code, Server, Layers, Shield, Landmark, HeartPulse, ShoppingCart, GraduationCap, Truck, Home, Database, Cloud } from 'lucide-react';
import { useRouter } from '../App';

const Navbar = () => {
  const { currentPath, navigate } = useRouter();
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
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center bg-white/85 backdrop-blur-xl border border-gray-200/60 rounded-full px-5 py-2.5 shadow-lg shadow-black/5">

          {/* Logo */}
          <button onClick={() => go('/')} className="flex items-center space-x-2 shrink-0">
            <div className="w-8 h-8 bg-[#06141B] rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-black">VT</span>
            </div>
            <span className="text-lg font-black tracking-tight text-[#06141B]">
              Velnora<span className="text-[#4A5C6A] font-semibold">Tech</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div key={item.name} className="relative"
                onMouseEnter={() => item.mega && setActiveMenu(item.name)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  onClick={() => go(item.path)}
                  className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    isActive(item.path) ? 'bg-[#06141B] text-white' : 'text-[#555] hover:bg-gray-100 hover:text-[#06141B]'
                  }`}
                >
                  {item.name}
                  {item.mega && <ChevronDown size={13} className={`transition-transform duration-200 ${activeMenu === item.name ? 'rotate-180' : ''}`} />}
                </button>

                <AnimatePresence>
                  {item.mega && activeMenu === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-1/2 -translate-x-1/2 mt-3 w-[400px] bg-white rounded-2xl p-3 grid grid-cols-2 gap-1 shadow-2xl shadow-black/10 border border-gray-100"
                    >
                      {item.items.map((sub) => (
                        <button key={sub.name} onClick={() => go(sub.path)}
                          className="p-3 rounded-xl hover:bg-gray-50 transition-all group text-left w-full"
                        >
                          <div className="flex items-center mb-0.5">
                            {sub.icon && <span className="text-[#4A5C6A] mr-2 group-hover:scale-110 transition-transform">{sub.icon}</span>}
                            <span className="font-bold text-[#06141B] text-xs">{sub.name}</span>
                          </div>
                          {sub.desc && <p className="text-[10px] text-[#888] pl-6">{sub.desc}</p>}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors text-[#666]">
              <Globe size={18} />
            </button>
            <button
              onClick={() => go('/contact')}
              className="bg-[#06141B] text-white text-sm font-bold px-5 py-2.5 rounded-full hover:bg-[#253745] transition-all shadow-lg shadow-black/20 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[#06141B] p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mx-4 mt-2 bg-white backdrop-blur-xl rounded-2xl border border-gray-100 shadow-2xl overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {menuItems.map((item) => (
                <div key={item.name}>
                  <button onClick={() => go(item.path)}
                    className={`block w-full text-left px-4 py-3 text-sm font-bold rounded-xl transition-colors ${
                      isActive(item.path) ? 'bg-[#06141B] text-white' : 'text-[#06141B] hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </button>
                  {item.mega && (
                    <div className="pl-4 space-y-1 pb-1">
                      {item.items.map((sub) => (
                        <button key={sub.name} onClick={() => go(sub.path)}
                          className="block w-full text-left py-2 px-4 text-xs text-[#666] hover:text-[#06141B] rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          {sub.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 pb-1">
                <button onClick={() => go('/contact')}
                  className="w-full bg-[#06141B] text-white py-3 rounded-full font-bold text-sm hover:bg-[#253745] transition-all"
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
