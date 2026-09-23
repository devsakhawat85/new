import React, { useState } from 'react';
import { PRACTICE_INFO } from '../data/content';
import { Phone, Mail, MapPin, Clock, CheckCircle2, Shield } from 'lucide-react';

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    clientType: 'Child',
    primaryInterest: 'Occupational Therapy Evaluation',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full pt-28 lg:pt-36 pb-24 bg-[#FAF8F3]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#B96F58]" />
            <p className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#2F6660]">
              San Diego Practice & Consultations
            </p>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#173C36] font-normal leading-[1.12]">
            Let’s start the conversation.
          </h1>
          <p className="font-sans text-lg text-[#242826]/80 font-light leading-relaxed">
            Reaching out is a courageous first step. We look forward to learning about your goals and discovering how we can collaborate.
          </p>
        </div>

        {/* Main Grid: Form & Practice Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Intake Form */}
          <div className="lg:col-span-7 bg-[#FAF8F3] border border-[#DED5C5] rounded-3xl p-8 sm:p-12 shadow-sm space-y-8">
            {submitted ? (
              <div className="py-12 text-center space-y-6 animate-fadeIn">
                <div className="w-16 h-16 bg-[#173C36]/10 text-[#173C36] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-[#2F6660]" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-3xl text-[#173C36]">
                    Thank You, {formData.name}
                  </h3>
                  <p className="font-sans text-base text-[#242826]/80 max-w-md mx-auto leading-relaxed">
                    Your inquiry has been delivered directly to Dr. Amanda’s office. We will review your notes and reach out within 1 to 2 business days to schedule your alignment call.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-[#173C36] text-[#FAF8F3] text-xs uppercase tracking-widest font-sans font-medium rounded-xs cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="font-serif text-2xl text-[#173C36] mb-1">
                    Initial Consultation Inquiry
                  </h2>
                  <p className="text-xs font-sans text-[#242826]/60">
                    Fields marked with an asterisk (*) are required.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#173C36] mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jessica Miller"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FAF8F3] border border-[#DED5C5] rounded-lg text-sm font-sans text-[#173C36] focus:border-[#173C36] focus:ring-1 focus:ring-[#173C36] outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#173C36] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF8F3] border border-[#DED5C5] rounded-lg text-sm font-sans text-[#173C36] focus:border-[#173C36] focus:ring-1 focus:ring-[#173C36] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#173C36] mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(760) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF8F3] border border-[#DED5C5] rounded-lg text-sm font-sans text-[#173C36] focus:border-[#173C36] focus:ring-1 focus:ring-[#173C36] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#173C36] mb-1.5">
                      Who are you contacting about?
                    </label>
                    <select
                      value={formData.clientType}
                      onChange={(e) => setFormData({ ...formData, clientType: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF8F3] border border-[#DED5C5] rounded-lg text-sm font-sans text-[#173C36] focus:border-[#173C36] outline-none"
                    >
                      <option value="Child">Child (Pediatric Care)</option>
                      <option value="Teen">Teenager (Adolescent)</option>
                      <option value="Adult">Adult</option>
                      <option value="Professional / Referral">Professional / Referral</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#173C36] mb-1.5">
                      Primary Area of Concern
                    </label>
                    <select
                      value={formData.primaryInterest}
                      onChange={(e) => setFormData({ ...formData, primaryInterest: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF8F3] border border-[#DED5C5] rounded-lg text-sm font-sans text-[#173C36] focus:border-[#173C36] outline-none"
                    >
                      <option value="Occupational Therapy Evaluation">Occupational Therapy Evaluation</option>
                      <option value="Neurofeedback Training">Neurofeedback Training</option>
                      <option value="Sensory Processing Support">Sensory Processing Support</option>
                      <option value="Executive Function & Attention">Executive Function & Attention</option>
                      <option value="Emotional Regulation">Emotional Regulation</option>
                      <option value="Other Inquiries">Other Inquiries</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#173C36] mb-1.5">
                    Message & Brief Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe what you are observing or hoping to address..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FAF8F3] border border-[#DED5C5] rounded-lg text-sm font-sans text-[#173C36] focus:border-[#173C36] focus:ring-1 focus:ring-[#173C36] outline-none"
                  />
                </div>

                <div className="p-4 bg-[#F4EFE5] rounded-xl border border-[#DED5C5] flex items-start gap-3">
                  <Shield className="w-4 h-4 text-[#2F6660] shrink-0 mt-0.5" />
                  <p className="text-xs font-sans text-[#242826]/75 leading-relaxed">
                    Privacy Guarantee: Information sent through this form is confidential. Please do not submit sensitive psychological evaluation files or medical records here; those will be transferred via our HIPAA-compliant intake portal.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#173C36] text-[#FAF8F3] text-xs uppercase tracking-[0.2em] font-sans font-semibold rounded-xs hover:bg-[#102E2A] active:scale-[0.99] transition-all cursor-pointer shadow-sm"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Practice Location & Hours */}
          <div className="lg:col-span-5 space-y-8">
            {/* Office Card */}
            <div className="p-8 sm:p-10 bg-[#F4EFE5] rounded-3xl border border-[#DED5C5] space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#B96F58]">
                San Diego Clinic
              </span>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#2F6660] shrink-0 mt-0.5" />
                  <div className="text-sm font-sans text-[#242826]/85">
                    <p className="font-semibold text-[#173C36]">{PRACTICE_INFO.legalName}</p>
                    <p>5402 Ruffin Rd, Suite 104</p>
                    <p>San Diego, CA 92123</p>
                    <p className="text-xs text-[#242826]/60 mt-1 italic">
                      Centrally located in Kearny Mesa with ample accessible parking.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#2F6660] shrink-0 mt-0.5" />
                  <div className="text-sm font-sans text-[#242826]/85">
                    <p className="font-semibold text-[#173C36]">Direct Office Phone</p>
                    <a href="tel:7605253111" className="hover:text-[#173C36] underline">
                      {PRACTICE_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#2F6660] shrink-0 mt-0.5" />
                  <div className="text-sm font-sans text-[#242826]/85">
                    <p className="font-semibold text-[#173C36]">Email Communications</p>
                    <a href={`mailto:${PRACTICE_INFO.email}`} className="hover:text-[#173C36] underline">
                      {PRACTICE_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#2F6660] shrink-0 mt-0.5" />
                  <div className="text-sm font-sans text-[#242826]/85">
                    <p className="font-semibold text-[#173C36]">Office Hours</p>
                    <p>{PRACTICE_INFO.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What to Expect Next */}
            <div className="p-8 bg-[#FAF8F3] rounded-3xl border border-[#DED5C5] space-y-4">
              <h3 className="font-serif text-xl text-[#173C36]">
                What Happens After You Inquire?
              </h3>
              <div className="space-y-3 text-xs sm:text-sm font-sans text-[#242826]/80 leading-relaxed">
                <div className="flex items-start gap-2">
                  <span className="font-serif font-bold text-[#B96F58]">1.</span>
                  <span>Dr. Amanda personally reviews your message and preliminary goals.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-serif font-bold text-[#B96F58]">2.</span>
                  <span>We schedule a complimentary 15-minute alignment call to discuss fit.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-serif font-bold text-[#B96F58]">3.</span>
                  <span>We send you our secure digital intake paperwork and arrange your first session.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
