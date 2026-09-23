import React, { useState } from 'react';

const JOURNEY_STEPS = [
  {
    stage: '01',
    title: 'UNDERSTAND',
    subtitle: 'Listening to the Whole Human Story',
    description:
      'We start with an unhurried exploration of your daily life, sensory sensitivities, school/work experiences, and what brings genuine joy. We listen to what the body has been carrying.',
  },
  {
    stage: '02',
    title: 'CONNECT',
    subtitle: 'Establishing Psychological & Somatic Safety',
    description:
      'Trust is the prerequisite for clinical progress. We ensure every individual feels seen, respected, and physically comfortable in our space before any formal assessment begins.',
  },
  {
    stage: '03',
    title: 'ASSESS',
    subtitle: 'Observing Nervous System Patterns',
    description:
      'Through clinical observation, sensory profiling, motor planning checks, and neurophysiological measurements, we map where energy gets blocked or over-stimulated.',
  },
  {
    stage: '04',
    title: 'PERSONALIZE',
    subtitle: 'Designing Tailored Interventions',
    description:
      'No cookie-cutter templates. We synthesize sensory diets, neurofeedback protocols, environmental modifications, and routine adjustments specifically for your family ecology.',
  },
  {
    stage: '05',
    title: 'SUPPORT',
    subtitle: 'Active Clinical Collaboration',
    description:
      'Whether through in-clinic sensory integration, brainwave training, or caregiver coaching, we walk alongside you with ongoing encouragement, curiosity, and adjustments.',
  },
  {
    stage: '06',
    title: 'PROGRESS',
    subtitle: 'Lasting Autonomy & Everyday Ease',
    description:
      'True success is when life outside our doors feels lighter, more joyful, and deeply manageable. Confidence replaces chronic tension.',
  },
];

export const ApproachSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 lg:py-36 px-6 sm:px-8 lg:px-12 bg-[#FAF8F3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#2F6660]">
            The Clinical Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#173C36] font-normal leading-tight">
            A compassionate pathway from confusion to clarity.
          </h2>
          <p className="font-sans text-base text-[#242826]/75">
            How we guide individuals and families through personalized neuro-informed care.
          </p>
        </div>

        {/* Interactive Step Navigator */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 border-b border-[#173C36]/15 pb-6">
          {JOURNEY_STEPS.map((step, idx) => (
            <button
              key={step.stage}
              onClick={() => setActiveStep(idx)}
              className={`text-left p-3.5 rounded-lg transition-all duration-300 cursor-pointer ${
                activeStep === idx
                  ? 'bg-[#173C36] text-[#FAF8F3] shadow-sm'
                  : 'bg-[#F4EFE5] text-[#173C36]/80 hover:bg-[#DED5C5]/70'
              }`}
            >
              <span className="block text-[11px] font-sans uppercase tracking-widest opacity-70">
                Step {step.stage}
              </span>
              <span className="font-serif text-lg font-medium block mt-0.5">
                {step.title}
              </span>
            </button>
          ))}
        </div>

        {/* Highlighted Step Presentation */}
        <div className="bg-[#F4EFE5] p-8 sm:p-12 lg:p-16 rounded-2xl border border-[#DED5C5] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-[#DED5C5] pb-6 lg:pb-0 lg:pr-8">
            <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-[#B96F58]">
              Phase {JOURNEY_STEPS[activeStep].stage}
            </span>
            <h3 className="font-serif text-4xl sm:text-5xl text-[#173C36] font-normal mt-2">
              {JOURNEY_STEPS[activeStep].title}
            </h3>
            <p className="font-sans text-xs uppercase tracking-wider text-[#2F6660] font-semibold mt-3">
              {JOURNEY_STEPS[activeStep].subtitle}
            </p>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <p className="font-sans text-lg sm:text-xl text-[#242826]/85 font-light leading-relaxed">
              {JOURNEY_STEPS[activeStep].description}
            </p>
            <div className="pt-4 flex items-center justify-between">
              <span className="text-xs font-sans text-[#242826]/60 italic">
                Step {activeStep + 1} of 6
              </span>
              <div className="flex gap-2">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 border border-[#173C36]/30 text-xs font-sans uppercase tracking-wider text-[#173C36] rounded-xs disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#173C36]/5 cursor-pointer"
                >
                  Previous
                </button>
                <button
                  disabled={activeStep === JOURNEY_STEPS.length - 1}
                  onClick={() => setActiveStep((prev) => Math.min(JOURNEY_STEPS.length - 1, prev + 1))}
                  className="px-4 py-2 bg-[#173C36] text-xs font-sans uppercase tracking-wider text-[#FAF8F3] rounded-xs disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#102E2A] cursor-pointer"
                >
                  Next Phase
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
