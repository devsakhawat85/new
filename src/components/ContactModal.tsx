import React, { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { PRACTICE_INFO } from '../data/content';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    clientType: 'Child',
    primaryInterest: 'Occupational Therapy Evaluation',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#102E2A]/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF8F3] rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-10 shadow-2xl border border-[#DED5C5] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-[#173C36]/70 hover:text-[#173C36] hover:bg-[#173C36]/5 cursor-pointer focus:outline-none"
          aria-label="Close dialog"
        >
          <X className="w-6 h-6" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-6 animate-fadeIn">
            <div className="w-16 h-16 bg-[#173C36]/10 text-[#173C36] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8 text-[#2F6660]" />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-3xl text-[#173C36]">
                Inquiry Received Warmly
              </h3>
              <p className="font-sans text-base text-[#242826]/75 max-w-md mx-auto">
                Thank you for reaching out, {formData.name}. Dr. Amanda reviews inquiries personally and our office will connect with you within 1–2 business days.
              </p>
            </div>
            <div className="p-4 bg-[#F4EFE5] rounded-xl border border-[#DED5C5] text-xs font-sans text-[#242826]/70 max-w-sm mx-auto">
              Need immediate clarification? You may also call our office directly at{' '}
              <a href="tel:7605253111" className="font-semibold text-[#173C36] underline">
                (760) 525-3111
              </a>.
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 bg-[#173C36] text-[#FAF8F3] text-xs uppercase tracking-widest font-sans font-medium rounded-xs cursor-pointer"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#B96F58]">
                Get Started
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#173C36]">
                Let’s start the conversation.
              </h2>
              <p className="font-sans text-sm text-[#242826]/75 leading-relaxed">
                Whether you have questions about sensory processing, neurofeedback, or scheduling an evaluation, we welcome your inquiry.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 pt-2">
              <div>
                <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#173C36] mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
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
                    Phone Number
                  </label>
                  <input
                    type="tel"
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
                    Who are you inquiring about?
                  </label>
                  <select
                    value={formData.clientType}
                    onChange={(e) => setFormData({ ...formData, clientType: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FAF8F3] border border-[#DED5C5] rounded-lg text-sm font-sans text-[#173C36] focus:border-[#173C36] outline-none"
                  >
                    <option value="Child">Child (Pediatric)</option>
                    <option value="Teen">Teenager / Adolescent</option>
                    <option value="Adult">Adult Care</option>
                    <option value="Professional / Referral">Professional / Referral</option>
                    <option value="Other">Other Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#173C36] mb-1.5">
                    Primary Service of Interest
                  </label>
                  <select
                    value={formData.primaryInterest}
                    onChange={(e) => setFormData({ ...formData, primaryInterest: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FAF8F3] border border-[#DED5C5] rounded-lg text-sm font-sans text-[#173C36] focus:border-[#173C36] outline-none"
                  >
                    <option value="Occupational Therapy Evaluation">Occupational Therapy Evaluation</option>
                    <option value="Neurofeedback Protocol">Neurofeedback Protocol</option>
                    <option value="Sensory Processing Support">Sensory Processing Support</option>
                    <option value="Attention & Executive Function">Attention & Executive Function</option>
                    <option value="General Clinical Inquiry">General Clinical Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#173C36] mb-1.5">
                  Brief Overview of Your Goals or Questions
                </label>
                <textarea
                  rows={4}
                  placeholder="Share a few brief details about what you or your loved one are experiencing..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-[#FAF8F3] border border-[#DED5C5] rounded-lg text-sm font-sans text-[#173C36] focus:border-[#173C36] focus:ring-1 focus:ring-[#173C36] outline-none"
                />
              </div>

              <div className="p-3 bg-[#F4EFE5] rounded-lg text-[11px] font-sans text-[#242826]/70 leading-normal">
                Privacy Notice: Please avoid submitting sensitive diagnostic records through this form. Detailed clinical history is reviewed during our secure intake session.
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#173C36] text-[#FAF8F3] text-xs uppercase tracking-[0.2em] font-sans font-semibold rounded-xs hover:bg-[#102E2A] active:scale-[0.99] transition-all cursor-pointer shadow-sm"
                >
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
