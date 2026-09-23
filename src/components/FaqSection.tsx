import React, { useState } from 'react';
import { FAQS_DATA } from '../data/content';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 lg:py-36 px-6 sm:px-8 lg:px-12 bg-[#FAF8F3] border-t border-[#173C36]/10 relative">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#2F6660]">
            Frequently Asked Questions
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#173C36] font-normal">
            Common questions about care & therapy.
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#242826]/70 max-w-xl mx-auto">
            Everything you need to know about our approach, evaluations, and practice logistics.
          </p>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-[#173C36]/15 border-y border-[#173C36]/15">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-6 sm:py-8 transition-colors">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-start justify-between text-left gap-4 group cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-xl sm:text-2xl text-[#173C36] group-hover:text-[#2F6660] transition-colors leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-[#173C36]/20 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#173C36] text-[#FAF8F3] border-[#173C36]' : 'text-[#173C36]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-4 pr-12 text-sm sm:text-base font-sans text-[#242826]/80 leading-relaxed space-y-3 animate-fadeIn">
                    <p>{faq.answer}</p>
                    <div className="inline-block pt-1">
                      <span className="text-[11px] uppercase tracking-wider font-sans font-medium text-[#B96F58]">
                        Category: {faq.category}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Helpful Contact Prompt */}
        <div className="text-center p-8 bg-[#F4EFE5] rounded-2xl border border-[#DED5C5] space-y-3">
          <p className="font-serif text-xl text-[#173C36]">
            Have a question specific to your family’s circumstances?
          </p>
          <p className="text-sm font-sans text-[#242826]/75">
            We are always happy to clarify details before beginning any evaluation.
          </p>
          <a
            href="tel:7605253111"
            className="inline-block text-xs uppercase tracking-widest font-sans font-semibold text-[#173C36] hover:text-[#2F6660] underline mt-1"
          >
            Call Us Directly: (760) 525-3111
          </a>
        </div>
      </div>
    </section>
  );
};
