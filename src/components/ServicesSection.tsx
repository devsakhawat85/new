import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/content';
import { ServiceItem, PageRoute } from '../types';
import { ArrowUpRight, CheckCircle2, X } from 'lucide-react';

interface ServicesSectionProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenContactModal: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onRouteChange,
  onOpenContactModal,
}) => {
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);

  return (
    <section id="services-section" className="py-24 lg:py-36 px-6 sm:px-8 lg:px-12 bg-[#FAF8F3] relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#173C36]/20 pb-8 mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#2F6660]">
              Clinical Services & Scope of Practice
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#173C36] font-normal leading-tight">
              Personalized care, designed around the human nervous system.
            </h2>
          </div>
          <button
            onClick={() => onRouteChange('services')}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-sans font-semibold text-[#173C36] hover:text-[#2F6660] group cursor-pointer whitespace-nowrap"
          >
            <span>View Complete Scope</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Services List / Asymmetric Interactive Rows */}
        <div className="divide-y divide-[#173C36]/15">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              onClick={() => setActiveService(service)}
              className="group py-8 sm:py-10 transition-all duration-300 hover:bg-[#F4EFE5]/50 px-4 sm:px-6 rounded-xl cursor-pointer"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                {/* Number */}
                <div className="md:col-span-2">
                  <span className="font-serif text-3xl sm:text-4xl text-[#B96F58] group-hover:text-[#173C36] transition-colors tabular-nums">
                    {service.number}
                  </span>
                </div>

                {/* Title & Short Description */}
                <div className="md:col-span-8 space-y-2">
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#173C36] group-hover:text-[#2F6660] transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-[#242826]/75 max-w-3xl leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Arrow & Action */}
                <div className="md:col-span-2 flex items-center md:justify-end gap-3">
                  <span className="text-xs uppercase tracking-widest font-sans font-medium text-[#173C36]/60 group-hover:text-[#173C36]">
                    Details
                  </span>
                  <div className="w-10 h-10 rounded-full border border-[#173C36]/20 flex items-center justify-center group-hover:bg-[#173C36] group-hover:text-[#FAF8F3] group-hover:border-[#173C36] transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Insurance and Individualization */}
        <div className="mt-16 p-6 sm:p-8 bg-[#F4EFE5] rounded-2xl border border-[#DED5C5] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <p className="font-serif text-lg text-[#173C36] font-medium">
              Every clinical plan is custom-crafted.
            </p>
            <p className="text-xs sm:text-sm font-sans text-[#242826]/70 max-w-2xl leading-relaxed">
              We operate as a personalized out-of-network practice in San Diego to dedicate the unhurried time each nervous system deserves. Superbills provided for out-of-network reimbursement.
            </p>
          </div>
          <button
            onClick={onOpenContactModal}
            className="px-6 py-3 bg-[#173C36] text-[#FAF8F3] text-xs uppercase tracking-widest font-sans font-medium rounded-xs hover:bg-[#102E2A] transition-colors cursor-pointer whitespace-nowrap"
          >
            Inquire About Care
          </button>
        </div>
      </div>

      {/* Service Detail Modal Dialog */}
      {activeService && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#102E2A]/70 backdrop-blur-sm animate-fadeIn"
        >
          <div
            className="bg-[#FAF8F3] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl border border-[#DED5C5] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveService(null)}
              className="absolute top-6 right-6 p-2 rounded-full text-[#173C36]/70 hover:text-[#173C36] hover:bg-[#173C36]/5 cursor-pointer focus:outline-none"
              aria-label="Close dialog"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-serif text-2xl text-[#B96F58] tabular-nums">
                  {activeService.number}
                </span>
                <span className="w-8 h-[1px] bg-[#DED5C5]" />
                <span className="text-xs uppercase tracking-widest font-sans text-[#2F6660] font-semibold">
                  Clinical Specialization
                </span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-[#173C36]">
                {activeService.title}
              </h3>

              <div className="rounded-xl overflow-hidden aspect-[16/9] bg-[#EBE4D5]">
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <p className="font-sans text-base text-[#242826]/85 leading-relaxed">
                {activeService.fullDescription}
              </p>

              {/* Who It Is For */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs uppercase tracking-wider font-sans font-bold text-[#173C36]">
                  Who This Supports:
                </h4>
                <div className="space-y-2">
                  {activeService.whoItIsFor.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm font-sans text-[#242826]/80">
                      <CheckCircle2 className="w-4 h-4 text-[#2F6660] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcomes */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs uppercase tracking-wider font-sans font-bold text-[#173C36]">
                  Key Clinical Goals & Outcomes:
                </h4>
                <div className="space-y-2">
                  {activeService.outcomes.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm font-sans text-[#242826]/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B96F58] shrink-0 mt-2" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dialog Actions */}
              <div className="pt-6 border-t border-[#173C36]/10 flex flex-col sm:flex-row gap-4 justify-between items-center">
                <button
                  onClick={() => {
                    setActiveService(null);
                    onOpenContactModal();
                  }}
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#173C36] text-[#FAF8F3] text-xs uppercase tracking-widest font-sans font-medium rounded-xs hover:bg-[#102E2A] transition-colors"
                >
                  Schedule Initial Consultation
                </button>
                <button
                  onClick={() => setActiveService(null)}
                  className="text-xs uppercase tracking-widest font-sans text-[#173C36]/70 hover:text-[#173C36]"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
