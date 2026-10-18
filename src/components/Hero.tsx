import React from 'react';
import { Phone, FileText, CheckCircle2, Sparkles, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

interface HeroProps {
  onRequestQuoteClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestQuoteClick }) => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-white via-brand-bg/50 to-brand-bg pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines, CTAs, Highlights */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Tagline / Location Badge */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-brand-cyan-light border border-brand-cyan/30 text-brand-navy text-xs sm:text-sm font-semibold mb-5 shadow-xs">
              <Sparkles className="w-4 h-4 text-brand-royal" />
              <span>{BUSINESS_INFO.tagline}</span>
              <span className="hidden sm:inline text-brand-muted">•</span>
              <span className="hidden sm:inline-flex items-center gap-1 text-brand-royal">
                <MapPin className="w-3.5 h-3.5" />
                <span>Mumbai</span>
              </span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.9rem] xl:text-[3.25rem] font-extrabold text-brand-navy leading-[1.15] tracking-tight">
              Professional Cleaning Services in <span className="text-brand-royal">Mumbai</span>
            </h1>

            {/* Supporting Headline */}
            <p className="mt-5 text-base sm:text-lg text-brand-muted leading-relaxed max-w-2xl text-balance">
              Enjoy a cleaner, fresher space without the stress. Boston Cleaning Services helps keep your home, apartment, office, and commercial space clean and welcoming.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              {/* Primary CTA: Call Now */}
              <a
                href={`tel:${BUSINESS_INFO.phoneTel}`}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-white bg-brand-royal hover:bg-brand-royal-hover active:scale-[0.98] shadow-md hover:shadow-soft transition-all text-base text-center"
              >
                <Phone className="w-5 h-5 text-white animate-pulse" />
                <span>Call Now: {BUSINESS_INFO.phoneDisplay}</span>
              </a>

              {/* Secondary CTA: Request a Quote */}
              <button
                type="button"
                onClick={onRequestQuoteClick}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-brand-navy bg-white hover:bg-brand-bg-alt border border-brand-border active:scale-[0.98] shadow-sm hover:shadow transition-all text-base text-center"
              >
                <FileText className="w-5 h-5 text-brand-royal" />
                <span>Request a Quote</span>
              </button>
            </div>

            {/* Three Concise Service Highlights */}
            <div className="mt-9 pt-8 border-t border-brand-border/80">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-navy mb-3">
                Key Cleaning Solutions:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-dark bg-white/80 backdrop-blur-xs px-3 py-2 rounded-lg border border-brand-border/60">
                  <CheckCircle2 className="w-4 h-4 text-brand-royal shrink-0" />
                  <span>Home & Apartment Cleaning</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-dark bg-white/80 backdrop-blur-xs px-3 py-2 rounded-lg border border-brand-border/60">
                  <CheckCircle2 className="w-4 h-4 text-brand-royal shrink-0" />
                  <span>Kitchen & Bathroom Cleaning</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-dark bg-white/80 backdrop-blur-xs px-3 py-2 rounded-lg border border-brand-border/60">
                  <CheckCircle2 className="w-4 h-4 text-brand-royal shrink-0" />
                  <span>Office & Commercial Cleaning</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Background ambient glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-brand-royal/10 via-brand-cyan/20 to-transparent rounded-3xl blur-xl" aria-hidden="true" />

              {/* Main Image Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-soft-lg border-4 border-white bg-white">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&auto=format&fit=crop&q=80"
                  alt="Spotless bright modern apartment living room in Mumbai by Boston Cleaning Services"
                  className="w-full h-80 sm:h-96 lg:h-[420px] object-cover object-center"
                  width="600"
                  height="420"
                  loading="eager"
                />

                {/* Overlay Card Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-brand-border shadow-soft flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-brand-royal uppercase tracking-wider">
                      Serving Mumbai, Maharashtra
                    </div>
                    <div className="text-sm font-bold text-brand-navy mt-0.5">
                      Residential & Commercial Solutions
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-brand-cyan-light text-brand-royal flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5 text-brand-royal" />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
