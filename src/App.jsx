import React, { useState, useEffect, createContext, useContext } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import IndustriesPage from './pages/IndustriesPage';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import HireDevelopersPage from './pages/HireDevelopersPage';
import ContactPage from './pages/ContactPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import IndustryDetailPage from './pages/IndustryDetailPage';
import DeveloperDetailPage from './pages/DeveloperDetailPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

import QuoteModal from './components/QuoteModal';
import CalendlyModal from './components/CalendlyModal';

// Simple Router Context
export const RouterContext = createContext(null);

export const useRouter = () => useContext(RouterContext);

const routes = {
  '/': Home,
  '/about': AboutPage,
  '/services': ServicesPage,
  '/industries': IndustriesPage,
  '/portfolio': PortfolioPage,
  '/hire-developers': HireDevelopersPage,
  '/contact': ContactPage,
  '/privacy-policy': PrivacyPolicy,
  '/terms-of-service': TermsOfService,
};

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [quoteModalMode, setQuoteModalMode] = useState(null); // null, 'quote', 'hire', 'calendly'

  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);
  
  // Global scroll-to-top on route change
  useEffect(() => {
    // Small timeout ensures the scroll happens after the mobile menu closes and layout settles
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, 10);
    return () => clearTimeout(timer);
  }, [currentPath]);

  let PageComponent = routes[currentPath];

  if (!PageComponent && currentPath.startsWith('/services/')) {
    PageComponent = ServiceDetailPage;
  }
  
  if (!PageComponent && currentPath.startsWith('/industries/')) {
    PageComponent = IndustryDetailPage;
  }
  
  if (!PageComponent && currentPath.startsWith('/hire-developers/')) {
    PageComponent = DeveloperDetailPage;
  }

  if (!PageComponent) {
    PageComponent = Home; // Fallback
  }

  return (
    <RouterContext.Provider value={{ currentPath, navigate, quoteModalMode, setQuoteModalMode }}>
      <div className="min-h-[100dvh] bg-[#F8F9FA] selection:bg-[#4A5C6A]/30">
        <Navbar />
        <main>
          <PageComponent />
        </main>
        <Footer />
        <QuoteModal mode={quoteModalMode === 'calendly' ? null : quoteModalMode} isOpen={!!quoteModalMode && quoteModalMode !== 'calendly'} onClose={() => setQuoteModalMode(null)} />
        <CalendlyModal isOpen={quoteModalMode === 'calendly'} onClose={() => setQuoteModalMode(null)} />
      </div>
    </RouterContext.Provider>
  );
}

export default App;
