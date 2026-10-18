import React from 'react';
import { Check, Info, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { DEEP_CLEANING_SECTIONS, DEEP_CLEANING_DISCLAIMER } from '../data/deepCleaningScope';
import { createWhatsAppUrl } from '../utils/whatsapp';

interface DeepCleaningProps {
  onAskDeepCleaningClick: () => void;
}

export const DeepCleaningDetails: React.FC<DeepCleaningProps> = ({ onAskDeepCleaningClick }) => {
  const deepCleaningWaUrl = createWhatsAppUrl(
    'Hello Boston Cleaning Services, I would like to ask about your Deep Cleaning service scope and availability in Mumbai.'
  );

  return (
    <section id="deep-cleaning" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan-light border border-brand-cyan/30 text-brand-royal text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Thorough & Detailed Scope</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-navy tracking-tight">
            What Does Deep Cleaning Include?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-muted leading-relaxed">
            Our deep cleaning service is engineered to tackle grime, build-up, and dust across all accessible areas of your home or premises.
          </p>
        </div>

        {/* 3 Subsections Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {DEEP_CLEANING_SECTIONS.map((section, idx) => (
            <div
              key={idx}
              className="bg-brand-bg rounded-2xl p-6 sm:p-7 border border-brand-border/80 shadow-xs flex flex-col justify-between hover:shadow-soft transition-all"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-royal text-white flex items-center justify-center font-bold text-sm">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy tracking-tight">
                    {section.title}
                  </h3>
                </div>
                <p className="text-xs text-brand-muted mb-6 pb-4 border-b border-brand-border">
                  {section.subtitle}
                </p>

                <ul className="space-y-3.5" aria-label={`${section.title} items`}>
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" strokeWidth={3} />
                      </div>
                      <span className="text-sm text-brand-dark leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Scope Transparency Disclaimer */}
        <div className="mt-10 p-5 rounded-xl bg-amber-50/80 border border-amber-200/80 flex items-start gap-3 max-w-4xl mx-auto">
          <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
            {DEEP_CLEANING_DISCLAIMER} Standard deep cleaning does not include specialist tasks like chandelier cleaning, curtain washing, upholstery replacement, wall paint restoration, or heavy internal appliance strip-downs unless explicitly agreed in advance.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onAskDeepCleaningClick}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white bg-brand-royal hover:bg-brand-royal-hover active:scale-[0.98] shadow-sm transition-all text-sm sm:text-base"
          >
            <span>Ask About Deep Cleaning</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={deepCleaningWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 active:scale-[0.98] transition-all text-sm"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
