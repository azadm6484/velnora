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
};

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

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
    <RouterContext.Provider value={{ currentPath, navigate }}>
      <div className="min-h-screen bg-[#F8F9FA] selection:bg-[#4A5C6A]/30">
        <Navbar />
        <main>
          <PageComponent />
        </main>
        <Footer />
      </div>
    </RouterContext.Provider>
  );
}

export default App;
