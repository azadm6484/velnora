import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ArrowLeft, Landmark, HeartPulse, ShoppingCart, GraduationCap, Truck, Home, Megaphone, Scissors } from 'lucide-react';
import { useRouter } from '../App';

const industryData = {
  'fintech': {
    title: 'Fintech Solutions',
    icon: <Landmark size={48} className="text-white" />,
    shortDesc: 'Secure, scalable financial technology for the modern banking era.',
    fullDesc: 'We help financial institutions and startups build secure, high-performance platforms. From digital wallets to complex trading engines, our fintech solutions are built with security and compliance at their core.',
    features: ['Secure Payment Gateways', 'Digital Banking Platforms', 'AI-Driven Fraud Detection', 'Blockchain & Smart Contracts', 'Regulatory Compliance (KYC/AML)', 'Real-time Financial Analytics'],
    stats: [{ label: 'Transactions/sec', value: '50k+' }, { label: 'Security Level', value: 'Bank-Grade' }],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000',
  },
  'healthcare': {
    title: 'Healthcare Tech',
    icon: <HeartPulse size={48} className="text-white" />,
    shortDesc: 'Patient-centric digital health platforms and medical software.',
    fullDesc: 'Transforming healthcare delivery through technology. We build HIPAA-compliant platforms that connect patients with providers seamlessly, optimizing workflows and improving health outcomes.',
    features: ['Telemedicine Platforms', 'Electronic Health Records (EHR)', 'Patient Management Systems', 'Medical IoT Integration', 'HIPAA/GDPR Compliance', 'Health Analytics Dashboards'],
    stats: [{ label: 'Patient Reach', value: '1M+' }, { label: 'Compliance', value: 'HIPAA' }],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2000',
  },
  'e-commerce': {
    title: 'E-commerce',
    icon: <ShoppingCart size={48} className="text-white" />,
    shortDesc: 'Scalable online retail platforms designed for conversion.',
    fullDesc: 'We build high-converting e-commerce experiences that drive sales. From multi-vendor marketplaces to bespoke brand stores, we provide the technical foundation for your retail success.',
    features: ['Multi-vendor Marketplaces', 'Inventory Management Systems', 'AI Product Recommendations', 'Omnichannel Integration', 'Advanced Analytics & SEO', 'Secure Checkout Solutions'],
    stats: [{ label: 'Conversion Lift', value: '35%+' }, { label: 'Uptime', value: '99.99%' }],
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=2000',
  },
  'education': {
    title: 'EdTech Solutions',
    icon: <GraduationCap size={48} className="text-white" />,
    shortDesc: 'Interactive learning platforms and educational management systems.',
    fullDesc: 'Empowering the next generation of learners. We create engaging, accessible EdTech solutions that facilitate remote learning and streamline educational administration for schools and universities.',
    features: ['Learning Management Systems (LMS)', 'Virtual Classrooms', 'Student Information Systems', 'Gamified Learning Tools', 'AI Content Personalization', 'Assessment & Grading Engines'],
    stats: [{ label: 'Active Students', value: '500k+' }, { label: 'Engagement', value: '+60%' }],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000',
  },
  'logistics': {
    title: 'Logistics & Supply Chain',
    icon: <Truck size={48} className="text-white" />,
    shortDesc: 'Real-time tracking and supply chain optimization software.',
    fullDesc: 'Optimize your operations with intelligent logistics software. We provide end-to-end visibility into your supply chain, reducing costs and improving delivery efficiency through automation.',
    features: ['Real-time Fleet Tracking', 'Warehouse Management Systems', 'Route Optimization AI', 'Supply Chain Analytics', 'Automated Documentation', 'Last-mile Delivery Tech'],
    stats: [{ label: 'Efficiency Gain', value: '40%+' }, { label: 'Cost Reduction', value: '25%+' }],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000',
  },
  'real-estate': {
    title: 'Real Estate Tech',
    icon: <Home size={48} className="text-white" />,
    shortDesc: 'Property listing platforms and virtual real estate tools.',
    fullDesc: 'Modernizing the real estate industry. We build platforms that make property buying, selling, and management effortless, featuring immersive technologies like 3D tours and AI valuations.',
    features: ['Property Listing Engines', '3D Virtual Tours Integration', 'Real Estate CRM Systems', 'AI Property Valuation', 'Lease Management Portals', 'Agent Performance Tools'],
    stats: [{ label: 'Listings Managed', value: '100k+' }, { label: 'Lead Quality', value: 'High' }],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=2000',
  },
  'advertising-marketing': {
    title: 'Advertising & Marketing',
    icon: <Megaphone size={48} className="text-white" />,
    shortDesc: 'Data-driven digital advertising and marketing automation platforms.',
    fullDesc: 'Empowering brands to reach their full potential. We build sophisticated advertising platforms that handle massive data loads, real-time bidding, and complex campaign analytics to maximize ROI.',
    features: ['Real-time Bidding Engines', 'Campaign Management Dashboards', 'Multi-channel Attribution', 'Marketing Automation Workflows', 'Audience Segmentation AI', 'Performance Tracking & Reporting'],
    stats: [{ label: 'Ad Impressions/mo', value: '1B+' }, { label: 'ROI Improvement', value: '45%+' }],
    image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fce?auto=format&fit=crop&q=80&w=2000',
  },
  'boutique-salon': {
    title: 'Boutique & Salon Tech',
    icon: <Scissors size={48} className="text-white" />,
    shortDesc: 'Elegant management and e-commerce solutions for the beauty and fashion industry.',
    fullDesc: 'Crafting premium digital experiences for high-end boutiques and salons. Our solutions streamline booking, manage inventory, and provide a stunning online storefront that matches your brand\'s elegance.',
    features: ['Smart Appointment Booking', 'Boutique Inventory Management', 'E-commerce Storefronts', 'Customer Loyalty Programs', 'Staff Scheduling Tools', 'Visual Lookbook Integration'],
    stats: [{ label: 'Bookings Managed', value: '250k+' }, { label: 'Client Retention', value: '+30%' }],
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=2000',
  }
};

const IndustryDetailPage = () => {
  const { currentPath, navigate, setQuoteModalMode } = useRouter();
  const pathParts = currentPath.split('/');
  const industryId = pathParts[pathParts.length - 1];
  const industry = industryData[industryId];

  useEffect(() => { window.scrollTo(0, 0); }, [currentPath]);

  if (!industry) {
    return (
      <section className="pt-32 pb-24 min-h-screen bg-[#06141B] flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-black text-white mb-4">Industry Not Found</h1>
        <button onClick={() => navigate('/industries')} className="bg-white text-[#06141B] px-8 py-3 rounded-full font-bold">
          View All Industries
        </button>
      </section>
    );
  }

  return (
    <div className="bg-[#06141B] min-h-screen pt-28 pb-20">
      {/* Back Button */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <a 
          href="/industries"
          onClick={(e) => { e.preventDefault(); navigate('/industries'); }}
          className="group inline-flex items-center gap-3 text-gray-400 hover:text-white transition-all font-bold uppercase tracking-widest text-[10px]"
        >
          <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/5 transition-all shadow-lg">
            <ArrowLeft size={16} />
          </div>
          <span>Back to Industries</span>
        </a>
      </div>

      {/* Hero */}
      <header className="relative py-12 lg:py-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img src={industry.image} alt={industry.title} className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#06141B]/80 via-[#06141B]/40 to-[#06141B] pointer-events-none" />
        </div>
        <div className="relative z-10 w-full mx-auto px-4 sm:px-10 lg:px-20 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="inline-flex p-5 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 mb-8 shadow-2xl">
            {industry.icon}
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl lg:text-7xl font-black text-white mb-6">
            {industry.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-gray-300 max-w-3xl mx-auto">
            {industry.shortDesc}
          </motion.p>
        </div>
      </header>

      {/* Content */}
      <section className="py-24 relative z-10">
        <div className="w-full mx-auto px-4 sm:px-10 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <h2 className="text-3xl font-black text-white mb-8">Specialized <span className="text-[#4A5C6A]">Solutions</span></h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-10">{industry.fullDesc}</p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {industry.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="text-green-400 shrink-0" size={18} />
                    <span className="text-gray-200 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}>
              <div className="grid grid-cols-2 gap-6 mb-10">
                {industry.stats.map((stat, idx) => (
                  <div key={idx} className="bg-[#11212D]/60 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-center">
                    <h4 className="text-3xl font-black text-white mb-1">{stat.value}</h4>
                    <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-br from-[#11212D] to-[#06141B] rounded-3xl p-10 border border-white/10 shadow-2xl text-center">
                <h3 className="text-2xl font-black text-white mb-4">Partner with Experts</h3>
                <p className="text-gray-400 mb-8">Discuss your industry-specific challenges with our specialized engineering team.</p>
                <button onClick={() => setQuoteModalMode('calendly')} className="w-full bg-white text-[#06141B] py-4 rounded-xl font-bold hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                  Schedule a Discovery Call <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustryDetailPage;
