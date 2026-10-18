export interface CleaningService {
  id: string;
  name: string;
  shortDescription: string;
  iconName: string;
  category: 'residential' | 'commercial' | 'specialized';
  image: string;
}

export interface DeepCleaningSection {
  title: string;
  subtitle: string;
  items: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface WhyChooseUsBenefit {
  title: string;
  description: string;
  iconName: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface PropertyTypeCategory {
  title: string;
  description: string;
  features: string[];
  image: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  service: string;
  propertyType: string;
  area: string;
  preferredDate: string;
  message: string;
}
