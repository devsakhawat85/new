import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/content';
import { PageRoute } from '../types';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface ServicesViewProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenContactModal: () => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  onRouteChange,
  onOpenContactModal,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState(SERVICES_DATA[0].id);

  const activeService = SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];

  return (
    <div className="w-full pt-28 lg:pt-36 pb-24 bg-[#FAF8F3]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#B96F58]" />
            <p className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#2F6660]">
              Clinical Scope & Offerings
            </p>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#173C36] font-normal leading-[1.12]">
            Evidence-informed care, tailored to each nervous system.
          </h1>
          <p className="font-sans text-lg text-[#242826]/80 font-light leading-relaxed">
            Our San Diego practice integrates traditional occupational therapy with non-invasive neuro-modalities to support sustainable everyday participation and emotional ease.
          </p>
        </div>

        {/* Interactive Master-Detail Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Service Selector Tabs */}
          <div className="lg:col-span-4 space-y-2 sticky top-28">
            <p className="text-xs uppercase tracking-widest font-sans font-bold text-[#173C36]/60 mb-4 px-2">
              Select A Clinical Area:
            </p>
            {SERVICES_DATA.map((service) => {
              const isSelected = service.id === selectedServiceId;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-xl transition-all duration-300 flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-[#173C36] text-[#FAF8F3] shadow-md'
                      : 'bg-[#F4EFE5] text-[#173C36] hover:bg-[#DED5C5]/70'
                  }`}
                >
                  <div className="space-y-1">
                    <span className="text-xs font-sans uppercase tracking-widest opacity-70 block tabular-nums">
                      Area {service.number}
                    </span>
                    <span className="font-serif text-lg font-medium block">
                      {service.title}
                    </span>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'translate-x-1 text-[#B96F58]' : 'opacity-40'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Detailed Content Panel */}
          <div className="lg:col-span-8 bg-[#FAF8F3] border border-[#DED5C5] rounded-3xl p-8 sm:p-12 shadow-sm space-y-10">
            {/* Header info */}
            <div className="space-y-4 border-b border-[#173C36]/10 pb-8">
              <div className="flex items-center gap-3">
                <span className="font-serif text-3xl text-[#B96F58] tabular-nums">
                  {activeService.number}
                </span>
                <span className="text-xs font-sans uppercase tracking-widest text-[#2F6660] font-semibold">
                  Comprehensive Specialty
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#173C36]">
                {activeService.title}
              </h2>
              <p className="font-sans text-base sm:text-lg text-[#242826]/80 leading-relaxed font-light">
                {activeService.fullDescription}
              </p>
            </div>

            {/* Featured Image */}
            <div className="rounded-2xl overflow-hidden aspect-[16/9] shadow-md border border-[#DED5C5] bg-[#EBE4D5]">
              <img
                src={activeService.image}
                alt={activeService.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Focus areas & Who it's for */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xs uppercase tracking-wider font-sans font-bold text-[#173C36]">
                  Who Often Benefits:
                </h3>
                <div className="space-y-2.5">
                  {activeService.whoItIsFor.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm font-sans text-[#242826]/85">
                      <CheckCircle2 className="w-4 h-4 text-[#2F6660] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xs uppercase tracking-wider font-sans font-bold text-[#173C36]">
                  Primary Focus Areas:
                </h3>
                <div className="space-y-2.5">
                  {activeService.focusAreas.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm font-sans text-[#242826]/85">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B96F58] shrink-0 mt-2" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Clinical Outcomes */}
            <div className="p-6 bg-[#F4EFE5] rounded-xl border border-[#DED5C5] space-y-3">
              <h3 className="text-xs uppercase tracking-wider font-sans font-bold text-[#173C36]">
                Target Outcomes & Changes in Daily Life:
              </h3>
              <div className="space-y-2">
                {activeService.outcomes.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm font-sans text-[#173C36]">
                    <span className="text-[#B96F58] font-bold">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-[#173C36]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-xs font-sans text-[#242826]/60">
                  Ready to discuss if this fits your needs?
                </p>
                <p className="text-xs font-sans font-semibold text-[#173C36]">
                  Call (760) 525-3111 or send an inquiry
                </p>
              </div>
              <button
                onClick={onOpenContactModal}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#173C36] text-[#FAF8F3] text-xs uppercase tracking-widest font-sans font-medium rounded-xs hover:bg-[#102E2A] transition-colors cursor-pointer"
              >
                Inquire Regarding {activeService.title}
              </button>
            </div>
          </div>
        </div>

        {/* Session Formats and Location */}
        <div className="border-t border-[#173C36]/15 pt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-[#F4EFE5] rounded-2xl border border-[#DED5C5] space-y-3">
            <h3 className="font-serif text-2xl text-[#173C36]">
              In-Clinic Care (San Diego, CA)
            </h3>
            <p className="font-sans text-sm text-[#242826]/80 leading-relaxed">
              Hands-on sensory motor evaluations, neurofeedback training protocols, and interactive sensory integration occur at our serene, thoughtfully appointed clinic at 5402 Ruffin Rd, Suite 104 in San Diego.
            </p>
          </div>

          <div className="p-8 bg-[#F4EFE5] rounded-2xl border border-[#DED5C5] space-y-3">
            <h3 className="font-serif text-2xl text-[#173C36]">
              Caregiver Coaching & Telehealth
            </h3>
            <p className="font-sans text-sm text-[#242826]/80 leading-relaxed">
              For parent consultations, environmental home-setup guidance, and executive function coaching, secure video consultations are available throughout California.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
