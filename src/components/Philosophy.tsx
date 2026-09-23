import React from 'react';
import { PageRoute } from '../types';

interface PhilosophyProps {
  onRouteChange: (route: PageRoute) => void;
}

export const Philosophy: React.FC<PhilosophyProps> = ({ onRouteChange }) => {
  return (
    <section className="py-24 lg:py-36 px-6 sm:px-8 lg:px-12 bg-[#FAF8F3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Magazine Masthead Style Header */}
        <div className="border-b border-[#173C36]/20 pb-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#2F6660]">
              Clinical Philosophy · Volume 01
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#173C36] font-normal mt-2">
              Look beyond the behavior.
            </h2>
          </div>
          <p className="text-xs font-sans uppercase tracking-widest text-[#242826]/60 max-w-xs text-right hidden md:block">
            Foundations of Nervous System Attunement
          </p>
        </div>

        {/* Magazine Editorial Spread Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Column 1: Dominant Serif Pull-Quote & Narrative Essay */}
          <div className="lg:col-span-6 space-y-8">
            <blockquote className="space-y-4">
              <p className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.18] text-[#173C36] text-balance">
                “Behavior is communication.
                <br />
                <span className="italic text-[#2F6660] font-light">
                  The body is communicating too.
                </span>”
              </p>
              <footer className="text-xs font-sans uppercase tracking-wider text-[#B96F58] font-medium pt-2">
                — Dr. Amanda Gretsch, OTD, OTR/L
              </footer>
            </blockquote>

            <div className="space-y-5 text-base sm:text-lg font-sans text-[#242826]/80 leading-relaxed max-w-xl">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-normal first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#173C36]">
                When an individual is struggling — whether that looks like emotional volatility, defiance, avoidance, or deep exhaustion — traditional approaches often zero in exclusively on the visible action. We attempt to reward it, correct it, or discipline it away.
              </p>
              <p>
                Occupational therapy invites us to ask a profoundly different question: What is this person’s central nervous system experiencing right now?
              </p>
              <p>
                We look at the whole human ecology. How do sensory thresholds, postural stability, autonomic arousal, attentional circuits, physical environment, daily routines, and family rhythms converge? When we treat the underlying physiological roots, sustainable calm and authentic participation naturally follow.
              </p>
            </div>

            <div className="pt-4 flex items-center gap-6">
              <button
                onClick={() => onRouteChange('about')}
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-sans font-semibold text-[#173C36] hover:text-[#2F6660] group cursor-pointer"
              >
                <span>Read Dr. Amanda’s Story & Approach</span>
                <span className="w-6 h-6 rounded-full border border-[#173C36]/30 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </div>
          </div>

          {/* Column 2: Large Editorial Photography & Interactive Focal Point */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#EBE4D5] border border-[#DED5C5] aspect-[4/3] group">
              <img
                src="/images/sensory_space_calm_1790146030858.jpg"
                alt="Modern, serene pediatric occupational therapy sensory room with natural birch climbing structures and organic swings"
                className="w-full h-full object-cover object-center filter saturate-[0.9] contrast-[1.03] transition-transform duration-700 group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102E2A]/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-6 right-6 text-[#FAF8F3]">
                <p className="text-[11px] font-sans uppercase tracking-[0.2em] opacity-80">
                  The Clinical Environment
                </p>
                <p className="font-serif text-lg sm:text-xl font-normal mt-1">
                  Spaces designed for nervous system safety, exploration, and dignified growth.
                </p>
              </div>
            </div>

            {/* Three Pillars of Inquiry */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-[#F4EFE5] rounded-xl border border-[#DED5C5]">
                <p className="font-serif text-lg font-medium text-[#173C36]">01. Sensation</p>
                <p className="text-xs font-sans text-[#242826]/70 mt-1 leading-normal">
                  How does the brain receive and modulate raw environmental input?
                </p>
              </div>
              <div className="p-4 bg-[#F4EFE5] rounded-xl border border-[#DED5C5]">
                <p className="font-serif text-lg font-medium text-[#173C36]">02. Regulation</p>
                <p className="text-xs font-sans text-[#242826]/70 mt-1 leading-normal">
                  Where is the autonomic nervous system on the ladder of safety?
                </p>
              </div>
              <div className="p-4 bg-[#F4EFE5] rounded-xl border border-[#DED5C5]">
                <p className="font-serif text-lg font-medium text-[#173C36]">03. Occupation</p>
                <p className="text-xs font-sans text-[#242826]/70 mt-1 leading-normal">
                  How does this individual experience play, rest, learning, and self-care?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
