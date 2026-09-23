import React, { useRef, useEffect, useState } from 'react';
import { PageRoute } from '../types';

interface NeurofeedbackFeatureProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenContactModal: () => void;
}

export const NeurofeedbackFeature: React.FC<NeurofeedbackFeatureProps> = ({
  onRouteChange,
  onOpenContactModal,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'ASSESS',
      tagline: 'Comprehensive Baseline Mapping',
      description:
        'We review developmental, sensory, and attentional histories alongside clinical brainwave frequency baselines to understand your central nervous system’s natural rhythm.',
    },
    {
      num: '02',
      title: 'TRAIN',
      tagline: 'EEG-Guided Neuroplastic Learning',
      description:
        'Sensors gently observe brainwave oscillations in real-time. Rewarding audiovisual feedback encourages the brain to self-adjust toward balanced, coherent frequencies.',
    },
    {
      num: '03',
      title: 'TRACK',
      tagline: 'Translating Regulation to Daily Life',
      description:
        'We systematically monitor changes in sleep depth, sensory tolerance, attention endurance, and emotional resilience at home, school, and work.',
    },
  ];

  // Gentle, organic neural network canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 450);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Generate gentle nodes
    const nodeCount = 38;
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1.2,
      phase: Math.random() * Math.PI * 2,
    }));

    let t = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      t += 0.008;

      // Draw subtle connecting lines (synaptic filaments)
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.22;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            // Slight curve
            const midX = (nodes[i].x + nodes[j].x) / 2 + Math.sin(t + i) * 6;
            const midY = (nodes[i].y + nodes[j].y) / 2 + Math.cos(t + j) * 6;
            ctx.quadraticCurveTo(midX, midY, nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(244, 239, 229, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw nodes with gentle pulsing glow
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        const pulse = Math.sin(t * 2 + node.phase) * 0.5 + 0.5;
        const currentRadius = node.radius + pulse * 1.5;

        // Outer halo
        const gradient = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          currentRadius * 4
        );
        gradient.addColorStop(0, 'rgba(185, 111, 88, 0.4)');
        gradient.addColorStop(1, 'rgba(185, 111, 88, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius * 4, 0, Math.PI * 2);
        ctx.fill();

        // Node center
        ctx.fillStyle = 'rgba(244, 239, 229, 0.85)';
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="py-24 lg:py-36 px-6 sm:px-8 lg:px-12 bg-[#102E2A] text-[#FAF8F3] relative overflow-hidden">
      {/* Background grain texture */}
      <div className="absolute inset-0 bg-grain-dark opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16 lg:space-y-24">
        {/* Top Header & Visual Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#B96F58]" />
              <p className="text-xs uppercase tracking-[0.25em] font-sans font-medium text-[#DED5C5]">
                Advanced Neuro-Regulation Modality
              </p>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.14] text-[#FAF8F3] text-balance">
              Train attention.{' '}
              <span className="italic text-[#DED5C5]">Support regulation.</span>{' '}
              Understand the brain differently.
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#F4EFE5]/80 font-light leading-relaxed max-w-xl">
              Neurofeedback (EEG biofeedback) is an evidence-informed, non-invasive method for training self-regulation. By reflecting subtle brainwave frequencies back in real time, the brain utilizes neuroplasticity to build balanced, calmer states.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onRouteChange('neurofeedback')}
                className="px-7 py-3.5 bg-[#FAF8F3] text-[#173C36] text-xs uppercase tracking-[0.18em] font-sans font-medium rounded-xs hover:bg-[#F4EFE5] transition-all cursor-pointer shadow-xs"
              >
                Explore Neurofeedback
              </button>
              <button
                onClick={onOpenContactModal}
                className="px-7 py-3.5 border border-[#FAF8F3]/30 text-[#FAF8F3] text-xs uppercase tracking-[0.18em] font-sans font-medium rounded-xs hover:border-[#FAF8F3] hover:bg-white/5 transition-all cursor-pointer"
              >
                Ask A Question
              </button>
            </div>
          </div>

          {/* Abstract Generative Canvas Visualization */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#173C36]/60 backdrop-blur-md shadow-2xl aspect-[4/3] flex items-center justify-center">
              <canvas
                ref={canvasRef}
                className="w-full h-full block"
                aria-label="Abstract visual simulation of neural network synchrony"
              />

              {/* Minimal overlay status badge */}
              <div className="absolute top-4 left-4 p-3 bg-[#102E2A]/85 backdrop-blur-md border border-white/10 rounded-lg text-left">
                <p className="text-[10px] uppercase tracking-widest font-sans text-[#DED5C5]">
                  Neural Rhythm Synthesis
                </p>
                <p className="font-serif text-sm text-[#FAF8F3] italic">
                  Alpha & Theta Synchrony Training
                </p>
              </div>

              <div className="absolute bottom-4 right-4 text-right">
                <span className="text-[10px] tracking-widest uppercase font-sans text-white/50">
                  Non-Invasive · Passive EEG
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Three Step Pathway */}
        <div className="border-t border-white/15 pt-12">
          <div className="max-w-xl mb-10">
            <p className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#B96F58]">
              The Clinical Pathway
            </p>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF8F3] font-normal mt-1">
              How neurofeedback unfolds in practice
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`p-8 rounded-xl border transition-all duration-300 cursor-pointer ${
                  activeStep === idx
                    ? 'bg-[#173C36] border-[#B96F58] shadow-lg'
                    : 'bg-[#173C36]/30 border-white/10 hover:border-white/30'
                }`}
              >
                <span className="font-serif text-3xl sm:text-4xl text-[#B96F58] block mb-4 tabular-nums">
                  {step.num}
                </span>
                <h4 className="font-serif text-xl sm:text-2xl text-[#FAF8F3] mb-1">
                  {step.title}
                </h4>
                <p className="text-xs uppercase tracking-wider font-sans font-medium text-[#DED5C5] mb-3">
                  {step.tagline}
                </p>
                <p className="text-sm font-sans text-[#F4EFE5]/75 leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs font-sans text-white/50 italic">
              *Neurofeedback is a supportive regulatory modality grounded in clinical EEG research. It is not presented as a standalone cure or replacement for comprehensive multidisciplinary care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
