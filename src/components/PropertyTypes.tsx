import React from 'react';
import { Home, Building, Building2, Store, CheckCircle } from 'lucide-react';

interface PropertyTypesProps {
  onSelectPropertyType: (type: string) => void;
}

export const PropertyTypes: React.FC<PropertyTypesProps> = ({ onSelectPropertyType }) => {
  const propertyCategories = [
    {
      title: 'Apartments & Flats',
      description: 'Studio, 1 BHK, 2 BHK, 3+ BHK flats, duplexes, and high-rise apartments across Mumbai residential complexes.',
      features: ['Living & bedroom deep sanitisation', 'Balcony & sliding glass track clean', 'Move-in & move-out refresh'],
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=700&auto=format&fit=crop&q=80',
      icon: Home,
      value: 'Apartment / Flat'
    },
    {
      title: 'Independent Houses',
      description: 'Private bungalows, villas, row houses, and standalone properties requiring comprehensive interior maintenance.',
      features: ['Multi-level floor scrubbing', 'Extended kitchen & bathroom sanitisation', 'Window & exterior glass wipe-down'],
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&auto=format&fit=crop&q=80',
      icon: Building,
      value: 'Independent House / Villa'
    },
    {
      title: 'Offices & Workplaces',
      description: 'Corporate offices, shared co-working spaces, conference rooms, cubicles, and staff cafeterias.',
      features: ['Workstation & desk wipe-down', 'Restroom hygiene maintenance', 'Flooring & carpet surface care'],
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=700&auto=format&fit=crop&q=80',
      icon: Building2,
      value: 'Office / Workplace'
    },
    {
      title: 'Shops & Commercial Premises',
      description: 'Retail stores, commercial showrooms, boutiques, clinics, and professional client-facing premises.',
      features: ['Display glass & storefront wipe-down', 'Customer-area floor scrubbing', 'Post-renovation or seasonal cleanup'],
      image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=700&auto=format&fit=crop&q=80',
      icon: Store,
      value: 'Shop / Commercial Premises'
    },
  ];

  return (
    <section id="property-types" className="py-16 lg:py-24 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan-light border border-brand-cyan/30 text-brand-royal text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>Versatile Property Coverage</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-navy tracking-tight">
            Property Types We Serve
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-muted leading-relaxed">
            We adapt our tools, techniques, and cleaning scope to the unique demands of each property format.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {propertyCategories.map((prop, idx) => {
            const Icon = prop.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col justify-between bg-white rounded-2xl overflow-hidden border border-brand-border/80 shadow-card hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-200"
              >
                <div>
                  <div className="relative h-44 w-full overflow-hidden bg-brand-bg">
                    <img
                      src={prop.image}
                      alt={`${prop.title} cleaning in Mumbai`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      width="350"
                      height="180"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 w-9 h-9 rounded-lg bg-white text-brand-royal shadow flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-bold text-brand-navy group-hover:text-brand-royal transition-colors">
                      {prop.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-brand-muted leading-relaxed">
                      {prop.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-brand-border space-y-2">
                      {prop.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-brand-dark">
                          <CheckCircle className="w-3.5 h-3.5 text-brand-royal shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    type="button"
                    onClick={() => {
                      onSelectPropertyType(prop.value);
                      const formEl = document.getElementById('contact');
                      if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-2 px-3 rounded-lg text-xs font-semibold text-brand-royal hover:text-white bg-brand-cyan-light hover:bg-brand-royal border border-brand-cyan/40 transition-colors text-center"
                  >
                    Select & Enquire
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
