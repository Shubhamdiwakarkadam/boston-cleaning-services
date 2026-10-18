import React, { useState } from 'react';
import {
  Sparkles,
  Home,
  UtensilsCrossed,
  Bath,
  Layers,
  Armchair,
  Building2,
  Store,
  HardHat,
  Refrigerator,
  ShieldAlert,
  Paintbrush,
  ArrowRight,
  MessageCircle
} from 'lucide-react';
import { CLEANING_SERVICES } from '../data/services';
import { CleaningService } from '../types';
import { createWhatsAppUrl, buildServiceQuickEnquiryMessage } from '../utils/whatsapp';

interface ServicesGridProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onSelectService }) => {
  const [filter, setFilter] = useState<'all' | 'residential' | 'commercial' | 'specialized'>('all');

  const filteredServices = CLEANING_SERVICES.filter((svc) => {
    if (filter === 'all') return true;
    return svc.category === filter;
  });

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-brand-royal" />;
      case 'Home':
        return <Home className="w-5 h-5 text-brand-royal" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-5 h-5 text-brand-royal" />;
      case 'Bath':
        return <Bath className="w-5 h-5 text-brand-royal" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-brand-royal" />;
      case 'Armchair':
        return <Armchair className="w-5 h-5 text-brand-royal" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-brand-royal" />;
      case 'Store':
        return <Store className="w-5 h-5 text-brand-royal" />;
      case 'HardHat':
        return <HardHat className="w-5 h-5 text-brand-royal" />;
      case 'Refrigerator':
        return <Refrigerator className="w-5 h-5 text-brand-royal" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-brand-royal" />;
      case 'Paintbrush':
        return <Paintbrush className="w-5 h-5 text-brand-royal" />;
      default:
        return <Sparkles className="w-5 h-5 text-brand-royal" />;
    }
  };

  const handleCardEnquire = (service: CleaningService) => {
    onSelectService(service.name);
    const formElement = document.getElementById('contact');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan-light border border-brand-cyan/30 text-brand-royal text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Solutions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-navy tracking-tight">
            Our Cleaning Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-muted leading-relaxed">
            Professional cleaning services tailored for Mumbai homes, apartments, offices, and commercial establishments. Choose any service below to request a customized quote.
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Service categories">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                filter === 'all'
                  ? 'bg-brand-royal text-white shadow-sm'
                  : 'bg-white text-brand-dark hover:bg-white/80 border border-brand-border'
              }`}
            >
              All Services ({CLEANING_SERVICES.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('residential')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                filter === 'residential'
                  ? 'bg-brand-royal text-white shadow-sm'
                  : 'bg-white text-brand-dark hover:bg-white/80 border border-brand-border'
              }`}
            >
              Residential Cleaning
            </button>
            <button
              type="button"
              onClick={() => setFilter('commercial')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                filter === 'commercial'
                  ? 'bg-brand-royal text-white shadow-sm'
                  : 'bg-white text-brand-dark hover:bg-white/80 border border-brand-border'
              }`}
            >
              Commercial & Office
            </button>
            <button
              type="button"
              onClick={() => setFilter('specialized')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                filter === 'specialized'
                  ? 'bg-brand-royal text-white shadow-sm'
                  : 'bg-white text-brand-dark hover:bg-white/80 border border-brand-border'
              }`}
            >
              Specialized Solutions
            </button>
          </div>
        </div>

        {/* 12 Services Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service) => {
            const waUrl = createWhatsAppUrl(buildServiceQuickEnquiryMessage(service.name));

            return (
              <div
                key={service.id}
                className="group flex flex-col justify-between bg-white rounded-2xl overflow-hidden border border-brand-border/80 shadow-card hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-200"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-brand-bg">
                    <img
                      src={service.image}
                      alt={`${service.name} by Boston Cleaning Services in Mumbai`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      width="350"
                      height="200"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Floating Icon */}
                    <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-white shadow-md flex items-center justify-center">
                      {getServiceIcon(service.iconName)}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-brand-navy tracking-tight group-hover:text-brand-royal transition-colors">
                      {service.name}
                    </h3>
                    <p className="mt-2.5 text-sm text-brand-muted leading-relaxed line-clamp-3">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-5 pt-0 mt-2 flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={() => handleCardEnquire(service)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold text-white bg-brand-royal hover:bg-brand-royal-hover active:scale-[0.99] transition-all shadow-xs"
                  >
                    <span>Enquire Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-semibold text-brand-dark hover:text-emerald-700 bg-brand-bg hover:bg-emerald-50 transition-colors"
                    title={`Send WhatsApp enquiry about ${service.name}`}
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp Enquiry</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
