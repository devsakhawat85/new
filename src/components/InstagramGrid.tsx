import React from 'react';
import { INSTAGRAM_POSTS, PRACTICE_INFO } from '../data/content';
import { Instagram, ArrowUpRight, Heart } from 'lucide-react';

export const InstagramGrid: React.FC = () => {
  return (
    <section className="py-24 lg:py-36 px-6 sm:px-8 lg:px-12 bg-[#F4EFE5] border-t border-[#DED5C5] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#173C36]/20 pb-8 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2">
              <Instagram className="w-4 h-4 text-[#B96F58]" />
              <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#2F6660]">
                {PRACTICE_INFO.instagramHandle}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#173C36] font-normal leading-tight">
              More ideas for understanding the nervous system, behavior & everyday life.
            </h2>
          </div>

          <a
            href={PRACTICE_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#173C36] text-[#FAF8F3] text-xs uppercase tracking-widest font-sans font-medium rounded-xs hover:bg-[#102E2A] transition-all cursor-pointer whitespace-nowrap shadow-xs"
          >
            <span>Follow on Instagram</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* 3x2 Curated Instagram Quote & Insight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {INSTAGRAM_POSTS.map((post) => (
            <div
              key={post.id}
              className={`p-8 sm:p-10 rounded-2xl ${post.bgColor} shadow-md border border-black/5 flex flex-col justify-between aspect-square transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group`}
            >
              {/* Card Top: Kicker & Brand Tag */}
              <div className="flex items-center justify-between border-b border-current/15 pb-4">
                <span className="text-[10px] uppercase tracking-[0.25em] font-sans font-bold opacity-80">
                  {post.kicker}
                </span>
                <span className="text-[10px] font-sans uppercase tracking-widest opacity-60">
                  Dr. Amanda OT
                </span>
              </div>

              {/* Card Middle: Large Quote Statement */}
              <div className="my-auto py-4">
                <p className="font-serif text-2xl sm:text-3xl font-normal leading-[1.25] text-balance">
                  {post.quote}
                </p>
              </div>

              {/* Card Bottom: Caption & Engagement */}
              <div className="space-y-3 pt-4 border-t border-current/15">
                <p className="text-xs font-sans opacity-85 line-clamp-2 leading-relaxed">
                  {post.caption}
                </p>
                <div className="flex items-center justify-between text-[11px] font-sans opacity-70">
                  <span className="flex items-center gap-1.5">
                    <Heart className="w-3.5 h-3.5 fill-current opacity-80" />
                    <span>{post.likesCount} saves</span>
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Read note →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Link / Handle Reminder */}
        <div className="text-center pt-4">
          <p className="text-xs font-sans text-[#242826]/70">
            Join a community exploring compassionate, science-informed nervous system insights on Instagram at{' '}
            <a
              href={PRACTICE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#173C36] font-semibold underline hover:text-[#2F6660]"
            >
              {PRACTICE_INFO.instagramHandle}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
