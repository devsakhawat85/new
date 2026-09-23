import React from 'react';
import { PageRoute } from '../types';

interface HeroProps {
  onExploreServices: () => void;
  onGetStarted: () => void;
  onRouteChange: (route: PageRoute) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreServices,
  onGetStarted,
}) => {
  const scrollToNext = () => {
    const el = document.getElementById('not-lazy-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen pt-28 lg:pt-32 pb-16 lg:pb-24 px-6 sm:px-8 lg:px-12 flex flex-col justify-between overflow-hidden bg-[#FAF8F3] bg-grain">
      {/* Background ambient gentle glow */}
      <div
        className="absolute top-1/4 -left-24 w-96 h-96 rounded-full bg-[#2F6660]/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#B96F58]/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center my-auto">
        {/* Left Column: Editorial Statement & CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8 z-10">
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#B96F58]" aria-hidden="true" />
            <p className="text-xs uppercase tracking-[0.25em] font-sans font-medium text-[#2F6660]">
              Neuro-Informed Occupational Therapy · San Diego, CA
            </p>
          </div>

          {/* Main Statement */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.08] text-[#173C36] tracking-tight max-w-2xl text-balance">
            Helping the brain,{' '}
            <span className="italic font-light text-[#2F6660]">body & everyday life</span>{' '}
            make more sense.
          </h1>

          {/* Qualified Supporting Text */}
          <p className="font-sans text-base sm:text-lg md:text-xl text-[#242826]/80 font-normal leading-relaxed max-w-xl">
            Occupational therapy and neuro-informed care designed around the person — not simply the diagnosis.
          </p>

          {/* Interactive CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onGetStarted}
              className="px-8 py-4 bg-[#173C36] text-[#FAF8F3] text-xs uppercase tracking-[0.18em] font-sans font-medium rounded-xs hover:bg-[#102E2A] active:scale-[0.99] transition-all shadow-sm text-center cursor-pointer"
            >
              Get Started
            </button>
            <button
              onClick={onExploreServices}
              className="px-8 py-4 bg-transparent border border-[#173C36]/30 text-[#173C36] text-xs uppercase tracking-[0.18em] font-sans font-medium rounded-xs hover:border-[#173C36] hover:bg-[#173C36]/5 active:scale-[0.99] transition-all text-center cursor-pointer"
            >
              Explore Services
            </button>
          </div>

          {/* Clinical Philosophy Quote Marker */}
          <div className="pt-4 border-t border-[#173C36]/10 flex items-center gap-4 text-xs font-sans text-[#242826]/60">
            <span className="text-[#B96F58] font-serif italic text-base">“</span>
            <span>Focus, calm, and confidence begin when the nervous system feels secure.</span>
          </div>
        </div>

        {/* Right Column: Editorial Portrait & Floating Composition */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          <div className="relative w-full max-w-md lg:max-w-none">
            {/* Background organic offset frame */}
            <div
              className="absolute -inset-3 sm:-inset-4 bg-[#F4EFE5] rounded-3xl -rotate-1 shadow-inner border border-[#DED5C5]/70"
              aria-hidden="true"
            />

            {/* Primary Portrait Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#FAF8F3] aspect-[3/4] bg-[#F4EFE5]">
              <img
                src="/src/assets/images/dr_amanda_hero_1790147053721.jpg"
                alt="Dr. Amanda Gretsch, Occupational Therapist and Neurofeedback Specialist, smiling warmly in navy suit with glasses"
                className="w-full h-full object-cover object-center filter saturate-[0.98] contrast-[1.02] transition-transform duration-700 hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />

              {/* Gentle subtle inner vignette */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#102E2A]/35 via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />

              {/* Practice watermark badge in top right */}
              <div className="absolute top-4 right-4 py-1 px-2.5 rounded-sm bg-[#FAF8F3]/85 backdrop-blur-sm border border-white/50 shadow-xs pointer-events-none">
                <span className="text-[10px] uppercase tracking-[0.18em] font-sans font-medium text-[#173C36]/80">
                  Amanda J Gretsch, Inc.
                </span>
              </div>

              {/* Floating Editorial Badge at Bottom */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#FAF8F3]/95 backdrop-blur-md border border-white/80 shadow-lg">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] font-sans font-bold text-[#173C36]">
                      Meet Dr. Amanda
                    </p>
                    <p className="text-xs font-serif italic text-[#2F6660] mt-0.5">
                      Doctor of Occupational Therapy
                    </p>
                  </div>
                  <span className="text-[10px] uppercase font-sans tracking-widest text-[#B96F58] font-bold bg-[#B96F58]/10 px-2 py-1 rounded-xs shrink-0">
                    OTD, OTR/L
                  </span>
                </div>
              </div>
            </div>

            {/* Subtle Floating Trust Note */}
            <div className="hidden sm:block absolute -top-4 -right-4 bg-[#FAF8F3] py-2 px-3.5 rounded-lg shadow-md border border-[#173C36]/10 text-right">
              <span className="block text-[10px] tracking-wider uppercase font-sans text-[#B96F58] font-bold">
                OTD, OTR/L
              </span>
              <span className="text-[11px] font-sans text-[#173C36]/70">
                Doctor of Occupational Therapy
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: Hand-drawn connecting curve & Scroll indicator */}
      <div className="max-w-7xl mx-auto w-full pt-8 flex items-center justify-between border-t border-[#173C36]/10">
        <button
          onClick={scrollToNext}
          className="group flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-sans text-[#173C36]/70 hover:text-[#173C36] transition-colors cursor-pointer focus:outline-none"
        >
          <span>Scroll to explore</span>
          <span className="w-5 h-5 rounded-full border border-[#173C36]/30 flex items-center justify-center group-hover:border-[#173C36] group-hover:translate-y-0.5 transition-all text-[11px]">
            ↓
          </span>
        </button>

        {/* Delicate organic hand-drawn SVG line connecting to next section */}
        <div className="hidden md:block w-72 h-8">
          <svg viewBox="0 0 300 30" fill="none" className="w-full h-full overflow-visible">
            <path
              d="M 0,15 C 60,32 120,-2 180,18 C 240,35 280,10 300,15"
              stroke="#2F6660"
              strokeWidth="1.2"
              strokeDasharray="4 4"
              className="opacity-40 animate-pulse"
            />
          </svg>
        </div>

        <div className="text-xs font-sans text-[#242826]/60">
          <span>In-Person Care in San Diego & Hybrid Consultations</span>
        </div>
      </div>
    </section>
  );
};
