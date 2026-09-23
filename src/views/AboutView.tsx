import React from 'react';
import { PageRoute } from '../types';
import { PRACTICE_INFO } from '../data/content';
import { Award, BookOpen, HeartHandshake, ShieldCheck, Sparkles, MapPin } from 'lucide-react';

interface AboutViewProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenContactModal: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onRouteChange,
  onOpenContactModal,
}) => {
  return (
    <div className="w-full pt-28 lg:pt-36 pb-24 bg-[#FAF8F3]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-20">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#B96F58]" />
            <p className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#2F6660]">
              Biography & Clinical Values
            </p>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#173C36] font-normal leading-[1.12]">
            Meet the person behind the practice.
          </h1>
          <p className="font-sans text-lg text-[#242826]/80 font-light leading-relaxed">
            Bridging neurodevelopmental science, sensory attunement, and heartfelt human connection.
          </p>
        </div>

        {/* Editorial Split Hero: Large Portrait & Personal Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Portrait Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#DED5C5] bg-[#F4EFE5] aspect-[3/4]">
              <img
                src="/images/dr_amanda_hero_1790147053721.jpg"
                alt="Dr. Amanda Gretsch, OTD, OTR/L in her San Diego occupational therapy practice"
                className="w-full h-full object-cover object-center filter saturate-[0.98]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102E2A]/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-[#FAF8F3]">
                <p className="font-serif text-2xl font-normal">
                  Dr. Amanda Gretsch
                </p>
                <p className="text-xs font-sans uppercase tracking-widest text-[#DED5C5] mt-0.5">
                  OTD, OTR/L · Occupational Therapist & Neurofeedback Provider
                </p>
              </div>
            </div>

            {/* Quick Practice Facts */}
            <div className="p-6 bg-[#F4EFE5] rounded-xl border border-[#DED5C5] space-y-3">
              <div className="flex items-center gap-2.5 text-xs font-sans font-semibold text-[#173C36]">
                <MapPin className="w-4 h-4 text-[#B96F58]" />
                <span>San Diego, California Practice</span>
              </div>
              <p className="text-xs font-sans text-[#242826]/75 leading-relaxed">
                {PRACTICE_INFO.legalName}
                <br />
                {PRACTICE_INFO.address}
              </p>
              <div className="pt-2 border-t border-[#DED5C5] flex items-center justify-between text-xs font-sans">
                <span className="text-[#2F6660] font-medium">In-Person & Hybrid</span>
                <span className="text-[#173C36]/70">(760) 525-3111</span>
              </div>
            </div>
          </div>

          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6 text-base sm:text-lg font-sans text-[#242826]/85 leading-relaxed">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-normal first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#173C36]">
                For as long as I have practiced occupational therapy, my conviction has remained steadfast: when people struggle with attention, emotions, motor coordination, or daily tasks, the problem is almost never a lack of character or willpower.
              </p>
              <p>
                Every child, teenager, and adult operates within a unique neurological and sensory landscape. When an individual’s nervous system is constantly overwhelmed by sensory input, burdened by retained developmental reflexes, or fatigued by executive dysfunction, the world can feel intensely demanding and disorienting.
              </p>
              <p>
                My practice in San Diego was created as a sanctuary where science and emotional warmth meet. We combine advanced neuro-modalities like neurofeedback and biofeedback with foundational sensory integration and parent co-regulation coaching. We do not just ask, &ldquo;How do we stop this behavior?&rdquo; We ask, &ldquo;What does this nervous system need in order to feel safe, capable, and at home in the world?&rdquo;
              </p>
            </div>

            {/* Clinical Philosophy Quote */}
            <div className="p-8 bg-[#173C36] text-[#FAF8F3] rounded-2xl space-y-3 shadow-md">
              <p className="font-serif italic text-xl sm:text-2xl text-[#DED5C5]">
                “Therapy is most powerful when it preserves dignity, respects individuality, and gives families the scientific language to love and support one another without guilt.”
              </p>
              <p className="text-xs font-sans uppercase tracking-widest text-[#FAF8F3]/60">
                — Dr. Amanda Gretsch
              </p>
            </div>

            {/* Editable Clinical Credentials & Qualifications */}
            <div className="space-y-4 pt-4">
              <h2 className="font-serif text-2xl text-[#173C36]">
                Clinical Qualifications & Focus Areas
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 bg-[#F4EFE5] rounded-xl border border-[#DED5C5] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-wider text-[#173C36]">
                    <Award className="w-4 h-4 text-[#B96F58]" />
                    <span>Credentials & Licensure</span>
                  </div>
                  <ul className="text-xs font-sans text-[#242826]/80 space-y-1.5 leading-relaxed">
                    <li>• Doctor of Occupational Therapy (OTD)</li>
                    <li>• Registered & Licensed Occupational Therapist (OTR/L)</li>
                    <li className="text-[#2F6660] font-medium">• State of California Licensed OT</li>
                    <li className="text-[#242826]/50 italic">• [ADD VERIFIED STATE LICENSE #]</li>
                  </ul>
                </div>

                <div className="p-5 bg-[#F4EFE5] rounded-xl border border-[#DED5C5] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-wider text-[#173C36]">
                    <BookOpen className="w-4 h-4 text-[#B96F58]" />
                    <span>Education & Training</span>
                  </div>
                  <ul className="text-xs font-sans text-[#242826]/80 space-y-1.5 leading-relaxed">
                    <li>• Clinical Doctorate in Occupational Therapy</li>
                    <li>• Advanced Training in EEG Biofeedback / Neurofeedback</li>
                    <li>• Sensory Integration Evaluation & Treatment</li>
                    <li className="text-[#242826]/50 italic">• [ADD VERIFIED ALMA MATER & DEGREE YEAR]</li>
                  </ul>
                </div>

                <div className="p-5 bg-[#F4EFE5] rounded-xl border border-[#DED5C5] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-wider text-[#173C36]">
                    <ShieldCheck className="w-4 h-4 text-[#B96F58]" />
                    <span>Certifications & Methods</span>
                  </div>
                  <ul className="text-xs font-sans text-[#242826]/80 space-y-1.5 leading-relaxed">
                    <li>• Neurofeedback & QEEG Guided Protocols</li>
                    <li>• Autonomic Biofeedback (HRV / Respiration)</li>
                    <li>• Polyvagal-Informed Regulatory Frameworks</li>
                    <li className="text-[#242826]/50 italic">• [ADD PROFESSIONAL CERTIFICATIONS]</li>
                  </ul>
                </div>

                <div className="p-5 bg-[#F4EFE5] rounded-xl border border-[#DED5C5] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-wider text-[#173C36]">
                    <Sparkles className="w-4 h-4 text-[#B96F58]" />
                    <span>Professional Memberships</span>
                  </div>
                  <ul className="text-xs font-sans text-[#242826]/80 space-y-1.5 leading-relaxed">
                    <li>• American Occupational Therapy Association (AOTA)</li>
                    <li>• Occupational Therapy Association of California (OTAC)</li>
                    <li>• International Neurofeedback Research Community</li>
                    <li className="text-[#242826]/50 italic">• [ADD PROFESSIONAL MEMBERSHIPS]</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Pillars / The Care Experience */}
        <div className="border-t border-[#173C36]/15 pt-16 space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#2F6660]">
              Guiding Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#173C36]">
              How we approach every human relationship.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#FAF8F3] rounded-2xl border border-[#DED5C5] space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#173C36]/10 flex items-center justify-center text-[#173C36]">
                <HeartHandshake className="w-5 h-5 text-[#2F6660]" />
              </div>
              <h3 className="font-serif text-2xl text-[#173C36]">
                Neuro-Affirming Respect
              </h3>
              <p className="font-sans text-sm text-[#242826]/80 leading-relaxed">
                We do not view neurodivergence (ADHD, sensory processing differences, autism) as something to be extinguished or masked. We honor the nervous system you have while building capacity and ease.
              </p>
            </div>

            <div className="p-8 bg-[#FAF8F3] rounded-2xl border border-[#DED5C5] space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#173C36]/10 flex items-center justify-center text-[#173C36]">
                <ShieldCheck className="w-5 h-5 text-[#2F6660]" />
              </div>
              <h3 className="font-serif text-2xl text-[#173C36]">
                Scientific Integrity
              </h3>
              <p className="font-sans text-sm text-[#242826]/80 leading-relaxed">
                We stay grounded in peer-reviewed neuroscience, occupational science, and clinical research. We set honest expectations and track tangible markers of progress.
              </p>
            </div>

            <div className="p-8 bg-[#FAF8F3] rounded-2xl border border-[#DED5C5] space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#173C36]/10 flex items-center justify-center text-[#173C36]">
                <Sparkles className="w-5 h-5 text-[#2F6660]" />
              </div>
              <h3 className="font-serif text-2xl text-[#173C36]">
                Unhurried Collaboration
              </h3>
              <p className="font-sans text-sm text-[#242826]/80 leading-relaxed">
                Parents are the true experts on their children. Adults know their internal experience best. Our role is to provide compassionate translation, tools, and clinical momentum.
              </p>
            </div>
          </div>
        </div>

        {/* Gallery / Studio Atmosphere */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
          <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3] bg-[#EBE4D5] border border-[#DED5C5]">
            <img
              src="/images/consultation_nook_1790146067426.jpg"
              alt="Cozy, warm consultation nook in Dr. Amanda's practice"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3] bg-[#EBE4D5] border border-[#DED5C5]">
            <img
              src="/images/sensory_space_calm_1790146030858.jpg"
              alt="Sensory regulation studio with natural birch climbing elements"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Bottom CTA Box */}
        <div className="p-8 sm:p-12 bg-[#173C36] text-[#FAF8F3] rounded-2xl text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF8F3]">
            Ready to explore how we can support your journey?
          </h2>
          <p className="font-sans text-base text-[#DED5C5] max-w-xl mx-auto font-light">
            We welcome questions from parents, adults, and referring physicians.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenContactModal}
              className="px-8 py-3.5 bg-[#FAF8F3] text-[#173C36] text-xs uppercase tracking-widest font-sans font-medium rounded-xs hover:bg-[#F4EFE5] cursor-pointer"
            >
              Get In Touch
            </button>
            <button
              onClick={() => onRouteChange('services')}
              className="px-8 py-3.5 border border-white/30 text-white text-xs uppercase tracking-widest font-sans font-medium rounded-xs hover:bg-white/5 cursor-pointer"
            >
              Explore Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
