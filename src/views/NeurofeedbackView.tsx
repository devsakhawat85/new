import React, { useState } from 'react';
import { PageRoute } from '../types';
import { Sparkles, Brain, CheckCircle2, Shield, Activity } from 'lucide-react';

interface NeurofeedbackViewProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenContactModal: () => void;
}

const BRAINWAVE_BANDS = [
  {
    name: 'Delta',
    freq: '0.5 – 4 Hz',
    state: 'Deep restorative sleep, cellular healing, somatic restoration.',
    trainingFocus: 'Overabundance in daytime can cause foggy waking states; balancing supports baseline restorative sleep architecture.',
  },
  {
    name: 'Theta',
    freq: '4 – 8 Hz',
    state: 'Daydreaming, twilight consciousness, creative imagination.',
    trainingFocus: 'Often elevated in ADHD; stabilizing theta during task demand frees the brain for effortless focus.',
  },
  {
    name: 'Alpha',
    freq: '8 – 12 Hz',
    state: 'Calm, relaxed alertness, serene presence without tension.',
    trainingFocus: 'The "idle gear" of the nervous system. Enhancing alpha rhythm coherence diminishes chronic hypervigilance.',
  },
  {
    name: 'SMR (Sensorimotor Rhythm)',
    freq: '12 – 15 Hz',
    state: 'Quiet physical stillness, focused body calmness, internal peace.',
    trainingFocus: 'A cornerstone frequency for reducing motor restlessness, sensory sensitivity, and fidgeting.',
  },
  {
    name: 'Beta',
    freq: '15 – 22 Hz',
    state: 'Active problem solving, cognitive processing, alertness.',
    trainingFocus: 'Supports sustained attention and mental stamina for academic and professional tasks.',
  },
  {
    name: 'High Beta',
    freq: '23 – 35+ Hz',
    state: 'Heightened anxiety, rumination, nervous system vigilance.',
    trainingFocus: 'We down-train excessive high beta to relieve physiological panic and mental loop patterns.',
  },
];

export const NeurofeedbackView: React.FC<NeurofeedbackViewProps> = ({
  onRouteChange: _onRouteChange,
  onOpenContactModal,
}) => {
  const [selectedBand, setSelectedBand] = useState(2); // Default to Alpha

  return (
    <div className="w-full pt-28 lg:pt-36 pb-24 bg-[#FAF8F3]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-20">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#B96F58]" />
            <p className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#2F6660]">
              EEG Biofeedback Modality
            </p>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#173C36] font-normal leading-[1.12]">
            Neurofeedback: Supporting self-regulation through neuroplasticity.
          </h1>
          <p className="font-sans text-lg text-[#242826]/80 font-light leading-relaxed">
            A non-invasive, evidence-informed approach that teaches the central nervous system to move toward balance, calm, and attentional stability.
          </p>
        </div>

        {/* Featured Banner / Clinical Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#DED5C5] bg-[#102E2A] text-[#FAF8F3] p-8 sm:p-14 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#B96F58]">
                What Is Neurofeedback?
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF8F3] font-normal leading-snug">
                Like holding up a gentle mirror to your brain’s natural electrical rhythms.
              </h2>
              <p className="font-sans text-base text-[#F4EFE5]/85 leading-relaxed font-light">
                Every thought, emotional reaction, and state of focus corresponds to microscopic electrical oscillations in the cerebral cortex. When the brain is stuck in hyperarousal (anxiety) or hypoarousal (daydreaming and distractibility), daily life feels like an uphill struggle.
              </p>
              <p className="font-sans text-base text-[#F4EFE5]/85 leading-relaxed font-light">
                Neurofeedback uses small sensors on the scalp to detect these micro-signals passively. There is never any electrical current entering the head. Instead, when the brain shifts into healthier, more cohesive frequencies, the patient receives rewarding audio or visual cues. Through repetition, the brain learns how to enter and maintain these calm, focused states on its own.
              </p>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20 aspect-[4/3] bg-[#173C36]">
                <img
                  src="/src/assets/images/neural_flow_calm_1790146046394.jpg"
                  alt="Abstract visualization of neural coherence and flowing brainwave balance"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Brainwave Frequency Guide */}
        <div className="space-y-8">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#2F6660]">
              The Neural Spectrum
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#173C36]">
              Understanding brainwave rhythms & self-regulation
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#242826]/75 max-w-2xl">
              No single frequency band is &ldquo;good&rdquo; or &ldquo;bad.&rdquo; Healthy neurological function is about flexibility — the ability to transition smoothly between rest and high focus.
            </p>
          </div>

          {/* Interactive frequency selector */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {BRAINWAVE_BANDS.map((band, idx) => (
              <button
                key={band.name}
                onClick={() => setSelectedBand(idx)}
                className={`p-4 rounded-xl text-left transition-all duration-300 cursor-pointer ${
                  selectedBand === idx
                    ? 'bg-[#173C36] text-[#FAF8F3] shadow-md border-b-4 border-[#B96F58]'
                    : 'bg-[#F4EFE5] text-[#173C36] hover:bg-[#DED5C5]'
                }`}
              >
                <span className="block font-serif text-xl font-medium">{band.name}</span>
                <span className="block text-xs font-sans opacity-70 mt-1">{band.freq}</span>
              </button>
            ))}
          </div>

          {/* Active Band Detail Card */}
          <div className="p-8 sm:p-12 bg-[#F4EFE5] rounded-2xl border border-[#DED5C5] grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 border-b md:border-b-0 md:border-r border-[#DED5C5] pb-6 md:pb-0 md:pr-8">
              <span className="text-xs uppercase tracking-widest font-sans font-bold text-[#B96F58]">
                Frequency Band
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#173C36] mt-1">
                {BRAINWAVE_BANDS[selectedBand].name}
              </h3>
              <p className="font-sans text-sm font-semibold text-[#2F6660] mt-1">
                {BRAINWAVE_BANDS[selectedBand].freq}
              </p>
            </div>
            <div className="md:col-span-8 space-y-4">
              <div>
                <p className="text-xs uppercase tracking-wider font-sans font-semibold text-[#173C36]/70">
                  Normal Psychological State:
                </p>
                <p className="font-serif text-xl text-[#173C36] mt-0.5">
                  {BRAINWAVE_BANDS[selectedBand].state}
                </p>
              </div>
              <div className="pt-2 border-t border-[#DED5C5]">
                <p className="text-xs uppercase tracking-wider font-sans font-semibold text-[#B96F58]">
                  Clinical Training Focus:
                </p>
                <p className="font-sans text-sm sm:text-base text-[#242826]/85 mt-1 leading-relaxed">
                  {BRAINWAVE_BANDS[selectedBand].trainingFocus}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3-Step Clinical Protocol Explained */}
        <div className="border-t border-[#173C36]/15 pt-16 space-y-12">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#2F6660]">
              The Protocol
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#173C36]">
              What to expect during a neurofeedback course
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#FAF8F3] border border-[#DED5C5] rounded-2xl space-y-4 shadow-xs">
              <span className="font-serif text-3xl text-[#B96F58] tabular-nums block">01</span>
              <h3 className="font-serif text-2xl text-[#173C36]">Evaluation & Baseline</h3>
              <p className="font-sans text-sm text-[#242826]/80 leading-relaxed">
                We assess clinical history, sensory profile, and baseline EEG measurements. We identify the specific sites on the 10-20 international system (e.g. Cz, C3, C4, Fz) to target your individual goals.
              </p>
            </div>

            <div className="p-8 bg-[#FAF8F3] border border-[#DED5C5] rounded-2xl space-y-4 shadow-xs">
              <span className="font-serif text-3xl text-[#B96F58] tabular-nums block">02</span>
              <h3 className="font-serif text-2xl text-[#173C36]">Training Sessions</h3>
              <p className="font-sans text-sm text-[#242826]/80 leading-relaxed">
                Sessions are peaceful and comfortable. The client relaxes in an armchair and watches a movie, listens to music, or plays a game. The software provides seamless, real-time auditory and visual feedback whenever brainwaves align with the target protocol.
              </p>
            </div>

            <div className="p-8 bg-[#FAF8F3] border border-[#DED5C5] rounded-2xl space-y-4 shadow-xs">
              <span className="font-serif text-3xl text-[#B96F58] tabular-nums block">03</span>
              <h3 className="font-serif text-2xl text-[#173C36]">Consolidation & Growth</h3>
              <p className="font-sans text-sm text-[#242826]/80 leading-relaxed">
                Through long-term potentiation (LTP) and neuroplasticity, new neural pathways solidify. Most protocols involve 20 to 40 sessions, with changes translating into enhanced classroom stamina, calmer transitions, and better sleep.
              </p>
            </div>
          </div>
        </div>

        {/* Safety & Evidence Reassurance */}
        <div className="p-8 sm:p-10 bg-[#F4EFE5] rounded-2xl border border-[#DED5C5] flex flex-col md:flex-row items-center gap-6">
          <div className="w-14 h-14 rounded-full bg-[#173C36]/10 text-[#173C36] flex items-center justify-center shrink-0">
            <Shield className="w-7 h-7 text-[#2F6660]" />
          </div>
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-serif text-xl text-[#173C36]">
              Safe, Passive, and Non-Invasive
            </h4>
            <p className="font-sans text-sm text-[#242826]/75 leading-relaxed">
              Neurofeedback does not transmit any electrical voltage or currents into the brain. It is entirely observational. Sessions are calm, non-demanding, and tailored to each client’s comfort and sensory tolerances.
            </p>
          </div>
          <button
            onClick={onOpenContactModal}
            className="shrink-0 px-6 py-3 bg-[#173C36] text-[#FAF8F3] text-xs uppercase tracking-widest font-sans font-medium rounded-xs hover:bg-[#102E2A] cursor-pointer whitespace-nowrap"
          >
            Inquire About Neurofeedback
          </button>
        </div>
      </div>
    </div>
  );
};
