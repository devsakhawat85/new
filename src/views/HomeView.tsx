import React from 'react';
import { PageRoute } from '../types';
import { Hero } from '../components/Hero';
import { YouAreNotLazy } from '../components/YouAreNotLazy';
import { Philosophy } from '../components/Philosophy';
import { WhatIfSection } from '../components/WhatIfSection';
import { ServicesSection } from '../components/ServicesSection';
import { NeurofeedbackFeature } from '../components/NeurofeedbackFeature';
import { ApproachSection } from '../components/ApproachSection';
import { InstagramGrid } from '../components/InstagramGrid';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FaqSection } from '../components/FaqSection';
import { FinalCta } from '../components/FinalCta';

interface HomeViewProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenContactModal: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onRouteChange,
  onOpenContactModal,
}) => {
  return (
    <div className="w-full">
      <Hero
        onExploreServices={() => {
          const el = document.getElementById('services-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
          else onRouteChange('services');
        }}
        onGetStarted={onOpenContactModal}
        onRouteChange={onRouteChange}
      />
      <YouAreNotLazy />
      <Philosophy onRouteChange={onRouteChange} />
      <WhatIfSection />
      <ServicesSection
        onRouteChange={onRouteChange}
        onOpenContactModal={onOpenContactModal}
      />
      <NeurofeedbackFeature
        onRouteChange={onRouteChange}
        onOpenContactModal={onOpenContactModal}
      />
      <ApproachSection />
      <InstagramGrid />
      <TestimonialsSection />
      <FaqSection />
      <FinalCta
        onGetStarted={onOpenContactModal}
        onRouteChange={onRouteChange}
      />
    </div>
  );
};
