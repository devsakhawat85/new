import React from 'react';
import { PageRoute } from '../types';

interface FinalCtaProps {
  onGetStarted: () => void;
  onRouteChange: (route: PageRoute) => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onGetStarted, onRouteChange }) => {
  return (
    <section className="py-28 lg:py-36 px-6 sm:px-8 lg:px-12 bg-[#173C36] text-[#FAF8F3] relative overflow-hidden">
      {/* Background radial gradient */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#2F6660]/20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Decorative organic hand-drawn SVG line art */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg viewBox="0 0 1200 600" fill="none" className="w-full h-full">
          <path
            d="M -100,300 C 200,100 400,500 700,250 C 950,50 1150,450 1300,200"
            stroke="#F4EFE5"
            strokeWidth="1.5"
            strokeDasharray="6 6"
          />
          <path
            d="M 100,500 C 350,200 650,400 900,150 C 1050,0 1200,350 1400,100"
            stroke="#B96F58"
            strokeWidth="1.2"
          />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <span className="text-xs uppercase tracking-[0.28em] font-sans font-medium text-[#DED5C5]">
          A Grounded Next Step
        </span>

        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#FAF8F3] leading-[1.12] text-balance">
          Understanding can be the beginning of change.
        </h2>

        <p className="font-sans text-base sm:text-lg md:text-xl text-[#F4EFE5]/85 font-light leading-relaxed max-w-2xl mx-auto">
          Take the next step toward understanding what is getting in the way — and what may help.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onGetStarted}
            className="w-full sm:w-auto px-8 py-4 bg-[#FAF8F3] text-[#173C36] text-xs uppercase tracking-[0.18em] font-sans font-medium rounded-xs hover:bg-[#F4EFE5] active:scale-[0.99] transition-all cursor-pointer shadow-md"
          >
            Get Started
          </button>
          <button
            onClick={() => onRouteChange('contact')}
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 text-[#FAF8F3] text-xs uppercase tracking-[0.18em] font-sans font-medium rounded-xs hover:border-white hover:bg-white/5 active:scale-[0.99] transition-all cursor-pointer"
          >
            Contact Dr. Amanda
          </button>
        </div>

        <div className="pt-8 border-t border-white/10 text-xs font-sans text-white/50 space-y-1">
          <p>Amanda J. Gretsch, Inc. · 5402 Ruffin Rd, Suite 104, San Diego, CA 92123</p>
          <p>Initial alignment calls are complimentary and confidential.</p>
        </div>
      </div>
    </section>
  );
};
