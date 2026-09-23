export type PageRoute = 'home' | 'about' | 'services' | 'neurofeedback' | 'insights' | 'contact';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  whoItIsFor: string[];
  focusAreas: string[];
  outcomes: string[];
  image: string;
}

export interface InsightArticle {
  id: string;
  title: string;
  category: 'Sensory Processing' | 'Regulation' | 'Executive Function' | 'Parenting & Life';
  readTime: string;
  excerpt: string;
  publishDate: string;
  image: string;
  content: string[];
  keyTakeaways: string[];
}

export interface InstagramCardItem {
  id: string;
  type: 'quote' | 'insight' | 'reflection' | 'visual';
  kicker?: string;
  quote?: string;
  author?: string;
  caption: string;
  likesCount: string;
  aspectClass?: string;
  bgColor?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'General' | 'Occupational Therapy' | 'Neurofeedback' | 'Appointments';
}

export interface TestimonialItem {
  quote: string;
  attribution: string;
  context: string;
}
