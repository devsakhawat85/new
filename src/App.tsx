import { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { ServicesView } from './views/ServicesView';
import { NeurofeedbackView } from './views/NeurofeedbackView';
import { InsightsView } from './views/InsightsView';
import { ContactView } from './views/ContactView';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Sync hash routing on mount and hashchange
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageRoute;
      const validRoutes: PageRoute[] = ['home', 'about', 'services', 'neurofeedback', 'insights', 'contact'];
      if (validRoutes.includes(hash)) {
        setCurrentRoute(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleRouteChange = (route: PageRoute) => {
    setCurrentRoute(route);
    window.location.hash = route;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F3] text-[#242826] font-sans antialiased selection:bg-[#2F6660]/20 selection:text-[#173C36]">
      {/* 3-Zone Top Navigation Bar */}
      <Navbar
        currentRoute={currentRoute}
        onRouteChange={handleRouteChange}
        onOpenContactModal={() => setIsContactModalOpen(true)}
      />

      {/* Main Page View Container */}
      <main className="flex-1 w-full">
        {currentRoute === 'home' && (
          <HomeView
            onRouteChange={handleRouteChange}
            onOpenContactModal={() => setIsContactModalOpen(true)}
          />
        )}
        {currentRoute === 'about' && (
          <AboutView
            onRouteChange={handleRouteChange}
            onOpenContactModal={() => setIsContactModalOpen(true)}
          />
        )}
        {currentRoute === 'services' && (
          <ServicesView
            onRouteChange={handleRouteChange}
            onOpenContactModal={() => setIsContactModalOpen(true)}
          />
        )}
        {currentRoute === 'neurofeedback' && (
          <NeurofeedbackView
            onRouteChange={handleRouteChange}
            onOpenContactModal={() => setIsContactModalOpen(true)}
          />
        )}
        {currentRoute === 'insights' && (
          <InsightsView
            onRouteChange={handleRouteChange}
            onOpenContactModal={() => setIsContactModalOpen(true)}
          />
        )}
        {currentRoute === 'contact' && <ContactView />}
      </main>

      {/* Editorial Footer */}
      <Footer onRouteChange={handleRouteChange} />

      {/* Consultation & Intake Dialog */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}
