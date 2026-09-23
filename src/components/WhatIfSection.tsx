import React, { useState } from 'react';

const WHAT_IF_QUESTIONS = [
  {
    number: '01',
    primary: 'What if your child isn’t giving you a hard time?',
    secondary: 'What if they’re simply having a hard time?',
    annotation: 'Reframing intentional malice into autonomic distress changes how we respond in the heat of the moment.',
    theme: 'bg-[#173C36] text-[#F4EFE5]',
    accent: 'text-[#B96F58]',
  },
  {
    number: '02',
    primary: 'What if focus isn’t simply about trying harder?',
    secondary: 'What if attention is an emergent state of safety?',
    annotation: 'Willpower cannot outmuscle an under-aroused or over-threatened brainstem. True focus emerges when the body settles.',
    theme: 'bg-[#102E2A] text-[#F4EFE5]',
    accent: 'text-[#2F6660]',
  },
  {
    number: '03',
    primary: 'What if regulation comes before performance?',
    secondary: 'What if we stop expecting output before offering calm?',
    annotation: 'We often ask children to write neatly, sit quietly, and solve equations while their heart rate is elevated and muscles are tight.',
    theme: 'bg-[#F4EFE5] text-[#173C36]',
    accent: 'text-[#B96F58]',
  },
  {
    number: '04',
    primary: 'What if understanding comes before changing?',
    secondary: 'What if we honor the nervous system first?',
    annotation: 'Lasting behavioral shifts are not coerced through sticker charts; they blossom through mutual attunement and physiological regulation.',
    theme: 'bg-[#FAF8F3] text-[#173C36]',
    accent: 'text-[#2F6660]',
  }
];

export const WhatIfSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const active = WHAT_IF_QUESTIONS[currentSlide];

  return (
    <section className="py-24 lg:py-36 px-6 sm:px-8 lg:px-12 bg-[#173C36] text-[#FAF8F3] relative overflow-hidden transition-colors duration-700">
      {/* Background delicate radial accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#2F6660]/15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Eyebrow and progress indicator */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-12 border-b border-white/15 gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#B96F58] animate-ping" />
            <p className="text-xs uppercase tracking-[0.25em] font-sans font-medium text-[#FAF8F3]/70">
              Reflections on Neuro-Informed Parenting & Life
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs font-sans tracking-widest text-[#FAF8F3]/60">
            <span>{active.number} / 04</span>
            <div className="flex gap-1.5">
              {WHAT_IF_QUESTIONS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                    currentSlide === i ? 'w-8 bg-[#B96F58]' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Big Editorial Quote Presentation */}
        <div className="py-16 sm:py-24 min-h-[380px] flex flex-col justify-center space-y-8">
          <p className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.14] tracking-tight max-w-4xl text-balance">
            {active.primary}
          </p>

          <p className="font-serif italic text-2xl sm:text-4xl md:text-5xl text-[#DED5C5] font-light leading-[1.2] max-w-3xl">
            {active.secondary}
          </p>

          <div className="pt-6 border-t border-white/10 max-w-2xl">
            <p className="font-sans text-sm sm:text-base text-[#FAF8F3]/80 leading-relaxed font-normal">
              {active.annotation}
            </p>
          </div>
        </div>

        {/* Bottom Interactive Navigation Controls */}
        <div className="pt-8 border-t border-white/15 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCurrentSlide((prev) => (prev > 0 ? prev - 1 : WHAT_IF_QUESTIONS.length - 1))}
              className="px-5 py-2.5 rounded-xs border border-white/20 hover:border-white/60 text-xs uppercase tracking-wider font-sans text-white cursor-pointer transition-colors"
            >
              ← Previous Reflection
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % WHAT_IF_QUESTIONS.length)}
              className="px-5 py-2.5 rounded-xs bg-[#B96F58] hover:bg-[#a85f49] text-xs uppercase tracking-wider font-sans font-medium text-white cursor-pointer transition-colors"
            >
              Next Reflection →
            </button>
          </div>

          <p className="text-xs font-sans text-[#FAF8F3]/60 italic">
            Adapted from Dr. Amanda’s educational quote archive
          </p>
        </div>
      </div>
    </section>
  );
};
