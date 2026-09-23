import React, { useState } from 'react';
import { INSIGHT_ARTICLES, PRACTICE_INFO } from '../data/content';
import { InsightArticle, PageRoute } from '../types';
import { BookOpen, Clock, ArrowRight, X, Instagram, Share2 } from 'lucide-react';

interface InsightsViewProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenContactModal: () => void;
}

export const InsightsView: React.FC<InsightsViewProps> = ({
  onRouteChange: _onRouteChange,
  onOpenContactModal: _onOpenContactModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<InsightArticle | null>(null);

  const categories = ['All', 'Sensory Processing', 'Regulation', 'Executive Function'];

  const filteredArticles =
    selectedCategory === 'All'
      ? INSIGHT_ARTICLES
      : INSIGHT_ARTICLES.filter((a) => a.category === selectedCategory);

  return (
    <div className="w-full pt-28 lg:pt-36 pb-24 bg-[#FAF8F3]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#B96F58]" />
            <p className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#2F6660]">
              Clinical Essays & Educational Notes
            </p>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#173C36] font-normal leading-[1.12]">
            Insights on the brain, behavior & everyday regulation.
          </h1>
          <p className="font-sans text-lg text-[#242826]/80 font-light leading-relaxed">
            Accessible, science-informed perspectives designed to help parents and adults understand what is happening underneath the surface.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-[#173C36]/10 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-sans rounded-md transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#173C36] text-[#FAF8F3] font-medium shadow-xs'
                  : 'bg-[#F4EFE5] text-[#173C36]/70 hover:text-[#173C36] hover:bg-[#DED5C5]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => setActiveArticle(article)}
              className="group bg-[#FAF8F3] border border-[#DED5C5] rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div className="space-y-6">
                {/* Article Image */}
                <div className="aspect-[16/10] overflow-hidden bg-[#EBE4D5] relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-[#FAF8F3]/90 backdrop-blur-md px-3 py-1 rounded-md text-[10px] uppercase tracking-widest font-sans font-semibold text-[#173C36]">
                    {article.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex items-center gap-3 text-xs font-sans text-[#242826]/60">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{article.readTime}</span>
                    </span>
                    <span>·</span>
                    <span>{article.publishDate}</span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl text-[#173C36] group-hover:text-[#2F6660] transition-colors leading-snug">
                    {article.title}
                  </h2>

                  <p className="font-sans text-sm sm:text-base text-[#242826]/75 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-2 flex items-center justify-between border-t border-[#173C36]/10 text-xs font-sans font-semibold uppercase tracking-wider text-[#173C36]">
                <span>Read Full Essay</span>
                <span className="w-8 h-8 rounded-full border border-[#173C36]/20 flex items-center justify-center group-hover:bg-[#173C36] group-hover:text-white transition-all">
                  →
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Instagram Connection Banner */}
        <div className="p-8 sm:p-12 bg-[#173C36] text-[#FAF8F3] rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-medium text-[#DED5C5]">
              Daily Micro-Insights
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#FAF8F3]">
              Follow Dr. Amanda on Instagram
            </h3>
            <p className="font-sans text-sm text-[#F4EFE5]/80 max-w-xl font-light">
              Join over thousands of caregivers, educators, and adults discovering practical nervous system regulation, quote cards, and compassionate perspective shifts.
            </p>
          </div>
          <a
            href={PRACTICE_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#FAF8F3] text-[#173C36] text-xs uppercase tracking-widest font-sans font-medium rounded-xs hover:bg-[#F4EFE5] cursor-pointer whitespace-nowrap shadow-md"
          >
            <Instagram className="w-4 h-4 text-[#B96F58]" />
            <span>{PRACTICE_INFO.instagramHandle}</span>
          </a>
        </div>
      </div>

      {/* Full Article Reader Modal Dialog */}
      {activeArticle && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#102E2A]/75 backdrop-blur-sm animate-fadeIn"
          onClick={() => setActiveArticle(null)}
        >
          <div
            className="bg-[#FAF8F3] rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-12 shadow-2xl border border-[#DED5C5] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-6 right-6 p-2 rounded-full text-[#173C36]/70 hover:text-[#173C36] hover:bg-[#173C36]/5 cursor-pointer focus:outline-none"
              aria-label="Close article"
            >
              <X className="w-6 h-6" />
            </button>

            <article className="space-y-8">
              {/* Header */}
              <div className="space-y-3 border-b border-[#173C36]/15 pb-6">
                <div className="flex items-center gap-3 text-xs font-sans uppercase tracking-widest text-[#2F6660]">
                  <span>{activeArticle.category}</span>
                  <span>·</span>
                  <span>{activeArticle.readTime}</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#173C36] leading-tight">
                  {activeArticle.title}
                </h2>
                <p className="text-xs font-sans text-[#242826]/60">
                  By Dr. Amanda Gretsch, OTD, OTR/L · {activeArticle.publishDate}
                </p>
              </div>

              {/* Cover Image */}
              <div className="rounded-2xl overflow-hidden aspect-[16/9] bg-[#EBE4D5]">
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Body Prose */}
              <div className="space-y-6 text-base sm:text-lg font-sans text-[#242826]/85 leading-relaxed">
                {activeArticle.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Key Takeaways Box */}
              <div className="p-6 bg-[#F4EFE5] rounded-2xl border border-[#DED5C5] space-y-3">
                <p className="text-xs uppercase tracking-wider font-sans font-bold text-[#173C36]">
                  Key Clinical Takeaways:
                </p>
                <ul className="space-y-2">
                  {activeArticle.keyTakeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm font-sans text-[#242826]/85">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B96F58] shrink-0 mt-2" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="pt-6 border-t border-[#173C36]/15 flex items-center justify-between">
                <p className="text-xs font-sans text-[#242826]/60 italic">
                  *Educational essay. Not medical advice.
                </p>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-6 py-2.5 bg-[#173C36] text-[#FAF8F3] text-xs uppercase tracking-widest font-sans rounded-xs cursor-pointer"
                >
                  Done Reading
                </button>
              </div>
            </article>
          </div>
        </div>
      )}
    </div>
  );
};
