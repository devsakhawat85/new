import React from 'react';
import { PageRoute } from '../types';
import { PRACTICE_INFO } from '../data/content';
import { Instagram } from 'lucide-react';

interface FooterProps {
  onRouteChange: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onRouteChange }) => {
  return (
    <footer className="bg-[#102E2A] text-[#FAF8F3] pt-20 pb-12 px-6 sm:px-8 lg:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Brand Presentation */}
          <div className="md:col-span-6 space-y-4">
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FAF8F3] tracking-tight">
              Dr. Amanda Gretsch
            </h3>
            <p className="text-xs uppercase tracking-[0.25em] font-sans font-medium text-[#DED5C5]">
              Occupational Therapy · Neuro-Informed Practice
            </p>
            <p className="font-sans text-sm text-[#F4EFE5]/75 max-w-md leading-relaxed pt-2">
              Empowering children, teens, and adults through sensory integration, brainwave regulation, and personalized clinical care in San Diego, California.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={PRACTICE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-[#DED5C5] hover:text-[#FAF8F3] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#B96F58]" />
                <span>{PRACTICE_INFO.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-[#DED5C5]">
              Explore
            </p>
            <ul className="space-y-2 text-sm font-sans text-[#F4EFE5]/80">
              <li>
                <button
                  onClick={() => {
                    onRouteChange('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onRouteChange('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Dr. Amanda
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onRouteChange('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Clinical Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onRouteChange('neurofeedback');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Neurofeedback
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onRouteChange('insights');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Insights & Articles
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onRouteChange('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact & Location
                </button>
              </li>
            </ul>
          </div>

          {/* Practice Location & Contact */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-[#DED5C5]">
              Practice Location
            </p>
            <address className="not-italic text-sm font-sans text-[#F4EFE5]/80 space-y-1 leading-relaxed">
              <p className="font-semibold text-white">{PRACTICE_INFO.legalName}</p>
              <p>5402 Ruffin Rd, Suite 104</p>
              <p>San Diego, CA 92123</p>
              <p className="pt-2 text-xs">
                Phone:{' '}
                <a href="tel:7605253111" className="underline hover:text-white">
                  {PRACTICE_INFO.phone}
                </a>
              </p>
              <p className="text-xs">
                Email:{' '}
                <a href={`mailto:${PRACTICE_INFO.email}`} className="underline hover:text-white">
                  {PRACTICE_INFO.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-sans text-white/50 gap-4">
          <p>© 2026 Dr. Amanda Gretsch. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Accessibility</span>
            <span className="hover:text-white cursor-pointer">Terms of Care</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
