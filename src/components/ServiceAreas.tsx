import React from 'react';
import { MapPin, MessageCircle, Check } from 'lucide-react';
import { createWhatsAppUrl } from '../utils/whatsapp';

interface ServiceAreasProps {
  onCheckAvailabilityClick: () => void;
}

export const ServiceAreas: React.FC<ServiceAreasProps> = ({ onCheckAvailabilityClick }) => {
  const checkAreaWaUrl = createWhatsAppUrl(
    'Hello Boston Cleaning Services, I would like to check cleaning service availability for my location in Mumbai.'
  );

  return (
    <section id="service-areas" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan-light border border-brand-cyan/30 text-brand-royal text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Local Service Coverage</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-navy tracking-tight">
            Cleaning Services in Mumbai
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-muted leading-relaxed">
            Boston Cleaning Services operates primarily across <strong className="text-brand-dark">Mumbai, Maharashtra, India</strong>, delivering dedicated residential and commercial cleaning to flats, offices, and commercial spaces.
          </p>
        </div>

        {/* Informative Content & Flexible Area Frame */}
        <div className="mt-12 bg-gradient-to-br from-brand-bg to-white rounded-3xl p-6 sm:p-10 border border-brand-border/80 shadow-soft max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-7 space-y-4">
              <h3 className="text-xl font-bold text-brand-navy">
                Checking Cleaning Availability for Your Locality?
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                Mumbai is vast, with unique transit and building logistics across South Mumbai, Western Suburbs, Central Mumbai, and surrounding metropolitan hubs.
              </p>
              <p className="text-sm text-brand-muted leading-relaxed">
                To guarantee timely arrival, appropriate equipment dispatch, and an exact booking window, we ask all clients to simply mention their area or pin code when reaching out.
              </p>

              <div className="pt-2 space-y-2">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-brand-dark">
                  <Check className="w-4 h-4 text-brand-royal shrink-0" />
                  <span>Primary Base: Mumbai, Maharashtra, India</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-brand-dark">
                  <Check className="w-4 h-4 text-brand-royal shrink-0" />
                  <span>Residential apartments, complexes & gated communities</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-brand-dark">
                  <Check className="w-4 h-4 text-brand-royal shrink-0" />
                  <span>Commercial offices, retail spaces & showrooms</span>
                </div>
              </div>
            </div>

            {/* Quick Action Box */}
            <div className="md:col-span-5 bg-white p-6 rounded-2xl border border-brand-border shadow-xs text-center flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-brand-cyan-light text-brand-royal flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="text-base font-bold text-brand-navy">
                  Confirm Your Locality
                </div>
                <p className="mt-1 text-xs text-brand-muted">
                  Reach out with your Mumbai location to confirm team scheduling today.
                </p>
              </div>

              <div className="mt-6 space-y-2.5">
                <button
                  type="button"
                  onClick={onCheckAvailabilityClick}
                  className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-brand-royal hover:bg-brand-royal-hover transition-colors shadow-xs"
                >
                  Check Slot in Booking Form
                </button>

                <a
                  href={checkAreaWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp Availability Check</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
