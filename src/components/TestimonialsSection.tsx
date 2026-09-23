import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data/content';

export const TestimonialsSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const active = TESTIMONIALS_DATA[activeIdx];

  return (
    <section className="py-24 lg:py-36 px-6 sm:px-8 lg:px-12 bg-[#FAF8F3] relative overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#B96F58]">
            Client & Family Experiences
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#173C36] font-normal">
            Reflections from the community.
          </h2>
        </div>

        {/* Large Editorial Quote Presentation */}
        <div className="bg-[#F4EFE5] p-8 sm:p-14 lg:p-18 rounded-3xl border border-[#DED5C5] shadow-sm relative">
          <span className="font-serif text-6xl sm:text-7xl text-[#B96F58] opacity-40 absolute top-6 left-8 sm:left-12 select-none leading-none">
            “
          </span>

          <div className="relative z-10 space-y-8 pt-4">
            <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#173C36] font-light leading-[1.3] text-balance">
              {active.quote}
            </blockquote>

            <div className="border-t border-[#DED5C5] pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-sans text-sm sm:text-base font-semibold text-[#173C36]">
                  {active.attribution}
                </p>
                <p className="text-xs font-sans text-[#2F6660] mt-0.5">
                  {active.context}
                </p>
              </div>

              {/* Selector Tabs */}
              <div className="flex items-center gap-2">
                {TESTIMONIALS_DATA.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIdx(i)}
                    className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${
                      activeIdx === i ? 'w-8 bg-[#173C36]' : 'w-2 bg-[#173C36]/20 hover:bg-[#173C36]/40'
                    }`}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Clinical Note on Privacy & Verification */}
        <div className="text-center">
          <p className="text-xs font-sans text-[#242826]/50 italic">
            *In accordance with clinical ethics and healthcare privacy, client identities are protected. Quotations represent verified client and caregiver feedback regarding private practice care.
          </p>
        </div>
      </div>
    </section>
  );
};
