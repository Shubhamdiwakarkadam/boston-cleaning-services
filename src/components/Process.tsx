import React from 'react';
import { PhoneCall, MessageSquareQuote, CheckSquare, Sparkles, ArrowRight } from 'lucide-react';

interface ProcessProps {
  onStartBookingClick: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onStartBookingClick }) => {
  const steps = [
    {
      step: '01',
      title: 'Contact Us',
      description: 'Call or send a WhatsApp message describing your cleaning requirements and location in Mumbai.',
      icon: PhoneCall,
    },
    {
      step: '02',
      title: 'Discuss Your Needs',
      description: 'Tell us about the property, service required, specific areas of focus, and preferred schedule.',
      icon: MessageSquareQuote,
    },
    {
      step: '03',
      title: 'Confirm the Service',
      description: 'Confirm the service scope, pricing, availability, and appointment details with our team.',
      icon: CheckSquare,
    },
    {
      step: '04',
      title: 'Get Your Space Cleaned',
      description: 'Receive the agreed cleaning service carried out with care, attention to detail, and thoroughness.',
      icon: Sparkles,
    },
  ];

  return (
    <section id="process" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan-light border border-brand-cyan/30 text-brand-royal text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Simple Customer Journey</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-navy tracking-tight">
            Our Cleaning Process
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-muted leading-relaxed">
            Booking your cleaning service with Boston Cleaning Services is straightforward and transparent in just four easy steps.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative bg-brand-bg rounded-2xl p-6 sm:p-7 border border-brand-border/80 flex flex-col justify-between hover:border-brand-royal/40 hover:shadow-soft transition-all duration-200"
              >
                <div>
                  {/* Step Number Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-black text-brand-royal font-mono">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white text-brand-navy shadow-xs flex items-center justify-center border border-brand-border">
                      <Icon className="w-5 h-5 text-brand-royal" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-brand-navy tracking-tight mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA prompt */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={onStartBookingClick}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-bold text-white bg-brand-royal hover:bg-brand-royal-hover active:scale-[0.98] shadow-sm transition-all text-sm"
          >
            <span>Start with Step 1: Request a Cleaning</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
