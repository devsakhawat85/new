import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentRoute: PageRoute;
  onRouteChange: (route: PageRoute) => void;
  onOpenContactModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute,
  onRouteChange,
  onOpenContactModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; route: PageRoute }[] = [
    { label: 'About', route: 'about' },
    { label: 'Services', route: 'services' },
    { label: 'Neurofeedback', route: 'neurofeedback' },
    { label: 'Insights', route: 'insights' },
    { label: 'Contact', route: 'contact' },
  ];

  const handleNavClick = (route: PageRoute) => {
    onRouteChange(route);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F3]/95 backdrop-blur-md shadow-xs border-b border-[#173C36]/10 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left group cursor-pointer focus:outline-none"
          aria-label="Dr. Amanda Gretsch Home"
        >
          <span className="font-serif text-xl sm:text-2xl font-medium tracking-tight text-[#173C36] group-hover:text-[#2F6660] transition-colors">
            Amanda Gretsch
          </span>
          <span className="block text-[10px] tracking-[0.2em] uppercase font-sans text-[#173C36]/70 font-medium">
            Occupational Therapy
          </span>
        </button>

        {/* Zone 2: 4–6 text navigation links */}
        <nav
          className="hidden md:flex items-center gap-7 lg:gap-9 text-sm font-sans font-medium text-[#173C36]/80"
          aria-label="Main Navigation"
        >
          {navLinks.map((item) => {
            const isActive = currentRoute === item.route;
            return (
              <button
                key={item.route}
                onClick={() => handleNavClick(item.route)}
                className={`relative py-1 transition-colors cursor-pointer hover:text-[#173C36] ${
                  isActive ? 'text-[#173C36] font-semibold' : ''
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#B96F58] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1–2 primary actions */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenContactModal}
            className="px-5 py-2.5 text-xs font-sans font-medium tracking-wider uppercase bg-[#173C36] text-[#FAF8F3] hover:bg-[#102E2A] active:scale-[0.98] transition-all rounded-xs cursor-pointer shadow-xs whitespace-nowrap"
          >
            Get Started →
          </button>
        </div>

        {/* Mobile Hamburger toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={onOpenContactModal}
            className="px-3 py-1.5 text-xs font-sans font-medium uppercase bg-[#173C36] text-[#FAF8F3] rounded-xs"
          >
            Inquire
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-[#173C36] hover:text-[#2F6660] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F3] border-b border-[#173C36]/15 px-6 py-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col gap-4 text-base font-serif font-medium text-[#173C36]">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-left py-2 border-b border-[#173C36]/10 ${
                currentRoute === 'home' ? 'text-[#B96F58] font-semibold' : ''
              }`}
            >
              Home
            </button>
            {navLinks.map((item) => (
              <button
                key={item.route}
                onClick={() => handleNavClick(item.route)}
                className={`text-left py-2 border-b border-[#173C36]/10 ${
                  currentRoute === item.route ? 'text-[#B96F58] font-semibold' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenContactModal();
                }}
                className="w-full text-center py-3 bg-[#173C36] text-[#FAF8F3] text-sm uppercase tracking-wider font-sans font-medium"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
