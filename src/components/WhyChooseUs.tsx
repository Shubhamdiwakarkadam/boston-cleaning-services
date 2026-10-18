import React from 'react';
import {
  Sparkles,
  Layers,
  Building,
  Sliders,
  CheckCircle2,
  MessageSquare,
  MapPin
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      title: 'Multiple Cleaning Services',
      description: 'From routine home dusting to intensive deep sanitization, window washing, and office upkeep, we handle diverse cleaning needs under one roof.',
      icon: Layers,
    },
    {
      title: 'Residential & Commercial Solutions',
      description: 'Tailored cleaning plans for individual apartments, independent bungalows, corporate workplaces, and retail premises across Mumbai.',
      icon: Building,
    },
    {
      title: 'Service Options for Different Needs',
      description: 'Flexible packages designed around your exact property type, whether preparing for a tenant move-in, post-renovation cleanup, or routine refresh.',
      icon: Sliders,
    },
    {
      title: 'Attention to Cleaning Details',
      description: 'Careful focus on high-touch fixtures, reachable surfaces, bathroom limescale, and kitchen grime that standard daily sweeps easily miss.',
      icon: CheckCircle2,
    },
    {
      title: 'Convenient Enquiry Process',
      description: 'Instant direct telephone support and frictionless WhatsApp messaging make confirming dates, requirements, and pricing simple and quick.',
      icon: MessageSquare,
    },
    {
      title: 'Local Service Focus in Mumbai',
      description: 'Dedicated to serving customers in Mumbai with responsive communication and honest, reliable customer care.',
      icon: MapPin,
    },
  ];

  return (
    <section id="why-choose-us" className="py-16 lg:py-24 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan-light border border-brand-cyan/30 text-brand-royal text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Honest & Reliable Service</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-navy tracking-tight">
            Why Choose Boston Cleaning Services?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-muted leading-relaxed">
            We focus on practical, high-standard cleaning delivered with genuine customer service and clear communication throughout Mumbai.
          </p>
        </div>

        {/* 6 Concise Benefit Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-brand-border/80 shadow-card hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-cyan-light text-brand-royal flex items-center justify-center mb-5 border border-brand-cyan/20">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy tracking-tight mb-2.5">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
