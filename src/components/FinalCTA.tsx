import React from 'react';
import { Phone, FileText, Sparkles, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

interface FinalCTAProps {
  onRequestQuoteClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onRequestQuoteClick }) => {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-16 lg:py-20 text-white">
      {/* Decorative Cyan Gradient Orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-cyan/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/15 border border-brand-cyan/30 text-brand-cyan text-xs sm:text-sm font-semibold mb-6">
          <Sparkles className="w-4 h-4" />
          <span>{BUSINESS_INFO.tagline}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          Ready for a Cleaner Space?
        </h2>

        <p className="mt-4 text-base sm:text-lg md:text-xl text-brand-cyan-soft/90 max-w-2xl mx-auto leading-relaxed">
          Tell us what you need cleaned, and contact Boston Cleaning Services to discuss the right service for your property.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${BUSINESS_INFO.phoneTel}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-brand-navy bg-brand-cyan hover:bg-brand-cyan-hover active:scale-[0.98] shadow-lg transition-all text-base"
          >
            <Phone className="w-5 h-5 text-brand-navy" />
            <span>Call Now: {BUSINESS_INFO.phoneDisplay}</span>
          </a>

          <button
            type="button"
            onClick={onRequestQuoteClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 active:scale-[0.98] transition-all text-base"
          >
            <FileText className="w-5 h-5 text-brand-cyan" />
            <span>Request a Cleaning Quote</span>
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-brand-cyan-soft/70">
          <MapPin className="w-3.5 h-3.5 text-brand-cyan" />
          <span>Serving residential and commercial clients across Mumbai, Maharashtra</span>
        </div>

      </div>
    </section>
  );
};
