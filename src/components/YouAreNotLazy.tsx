import React, { useState, useEffect } from 'react';

const REFRAME_PAIRS = [
  {
    surfaceWord: 'LAZY',
    underneathWord: 'EXECUTIVE PARALYSIS',
    explanation: 'Task initiation requires dopamine, working memory, and cognitive sequencing. When an executive system is overwhelmed, inaction looks like indifference.',
  },
  {
    surfaceWord: 'UNMOTIVATED',
    underneathWord: 'DYSREGULATED',
    explanation: 'A nervous system in chronic fight-or-flight or freeze cannot allocate metabolic energy to academic focus or household chores.',
  },
  {
    surfaceWord: 'TOO SENSITIVE',
    underneathWord: 'SENSORY OVERWHELMED',
    explanation: 'When auditory, tactile, or visual input registers at 10x intensity in the brain, irritation and meltdowns are physiological defenses, not attitude.',
  },
  {
    surfaceWord: 'CAN’T FOCUS',
    underneathWord: 'UNDER-STIMULATED',
    explanation: 'Attention follows interest and autonomic arousal. The brain is not defective — it is desperately searching for optimal neurochemical equilibrium.',
  },
  {
    surfaceWord: 'DEFIANT',
    underneathWord: 'LACKING SAFETY',
    explanation: 'When children feel powerless or overstimulated, boundary pushback is often their final autonomic attempt to establish control.',
  }
];

export const YouAreNotLazy: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isShifted, setIsShifted] = useState(true);

  // Auto-cycle through reframes every 6 seconds if uninterrupted
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % REFRAME_PAIRS.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const activeReframe = REFRAME_PAIRS[activeIndex];

  return (
    <section id="not-lazy-section" className="py-24 lg:py-32 px-6 sm:px-8 lg:px-12 bg-[#F4EFE5] border-y border-[#DED5C5] relative overflow-hidden">
      {/* Decorative ambient backdrop */}
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <p className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#B96F58]">
            An Essential Reframe
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#173C36] font-normal leading-[1.15] text-balance">
            Maybe the problem isn’t motivation.
          </h2>
          <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#2F6660] font-light">
            Maybe there is something else happening underneath.
          </p>
        </div>

        {/* Interactive Editorial Reframe Arena */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Reframe Word Transformation Console */}
          <div className="lg:col-span-7 bg-[#FAF8F3] p-8 sm:p-10 lg:p-12 rounded-2xl shadow-sm border border-[#DED5C5] space-y-8">
            <div className="flex items-center justify-between border-b border-[#173C36]/10 pb-4">
              <span className="text-xs uppercase tracking-widest font-sans font-semibold text-[#173C36]/70">
                Interactive Perspective Shift
              </span>
              <button
                onClick={() => setIsShifted(!isShifted)}
                className="text-xs font-sans font-medium text-[#2F6660] hover:text-[#173C36] underline cursor-pointer"
              >
                {isShifted ? 'View surface label' : 'Reveal neurological reality'}
              </button>
            </div>

            {/* Word Contrast Box */}
            <div className="space-y-4 min-h-[140px] flex flex-col justify-center">
              <p className="text-xs uppercase tracking-widest text-[#242826]/50 font-sans">
                {isShifted ? 'What is actually occurring:' : 'What society often labels it:'}
              </p>
              <div className="relative">
                <span
                  key={`${activeIndex}-${isShifted}`}
                  className={`block font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight transition-all duration-500 ${
                    isShifted ? 'text-[#173C36]' : 'text-[#B96F58] line-through opacity-70'
                  }`}
                >
                  {isShifted ? activeReframe.underneathWord : activeReframe.surfaceWord}
                </span>
              </div>
            </div>

            {/* Detailed Explanation */}
            <div className="bg-[#F4EFE5]/70 p-6 rounded-xl border border-[#DED5C5]/80">
              <p className="text-xs uppercase tracking-wider font-sans font-semibold text-[#2F6660] mb-2">
                Clinical Understanding:
              </p>
              <p className="text-sm sm:text-base font-sans text-[#242826]/85 leading-relaxed">
                {activeReframe.explanation}
              </p>
            </div>

            {/* Category Selectors */}
            <div className="flex flex-wrap gap-2 pt-2">
              {REFRAME_PAIRS.map((item, idx) => (
                <button
                  key={item.surfaceWord}
                  onClick={() => {
                    setActiveIndex(idx);
                    setIsShifted(true);
                  }}
                  className={`px-3 py-1.5 text-xs font-sans rounded-md transition-all cursor-pointer ${
                    activeIndex === idx
                      ? 'bg-[#173C36] text-[#FAF8F3] shadow-xs'
                      : 'bg-[#FAF8F3] text-[#173C36]/70 border border-[#DED5C5] hover:border-[#173C36]'
                  }`}
                >
                  {item.surfaceWord} → {item.underneathWord.split(' ')[0]}
                </button>
              ))}
            </div>

            <p className="text-[11px] font-sans text-[#242826]/50 italic">
              *Educational storytelling and clinical framework. Not intended as an independent medical diagnosis.
            </p>
          </div>

          {/* Right: Layered Photographic Narrative */}
          <div className="lg:col-span-5 relative space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-[#EBE4D5] border border-white">
              <img
                src="/images/tactile_hands_play_1790146055032.jpg"
                alt="Close-up hands gently arranging smooth natural wooden balancing stones"
                className="w-full h-full object-cover object-center filter contrast-[1.03]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102E2A]/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-[#FAF8F3]">
                <p className="font-serif italic text-lg sm:text-xl">
                  “When we change the lens, the person changes before our eyes.”
                </p>
              </div>
            </div>

            {/* Editorial Side Note */}
            <div className="border-l-2 border-[#B96F58] pl-5 space-y-2">
              <p className="font-serif text-lg text-[#173C36] font-medium">
                The Cost of Mislabeling
              </p>
              <p className="font-sans text-xs sm:text-sm text-[#242826]/75 leading-relaxed">
                When a child or adult hears &ldquo;you just need to try harder&rdquo; year after year, internal shame builds. Neuro-informed occupational therapy dismantles that shame by locating the exact physiological, sensory, or neurological bottlenecks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
