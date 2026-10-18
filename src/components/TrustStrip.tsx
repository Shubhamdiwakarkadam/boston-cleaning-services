import React from 'react';
import { Home, Building2, Sparkles, HardHat } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const highlights = [
    {
      title: 'Residential Cleaning',
      desc: 'Apartments, flats & independent houses',
      icon: Home,
    },
    {
      title: 'Commercial Cleaning',
      desc: 'Offices, retail shops & workspaces',
      icon: Building2,
    },
    {
      title: 'Deep Cleaning',
      desc: 'Thorough surface & corner sanitisation',
      icon: Sparkles,
    },
    {
      title: 'Post-Renovation Cleaning',
      desc: 'Dust and construction residue removal',
      icon: HardHat,
    },
  ];

  return (
    <section className="bg-brand-navy text-white py-8 border-y border-brand-navy-light relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-start sm:items-center gap-3.5 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5"
              >
                <div className="w-11 h-11 rounded-lg bg-brand-cyan/15 text-brand-cyan flex items-center justify-center shrink-0 border border-brand-cyan/20">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-brand-cyan-soft/80 mt-0.5 leading-snug">
                    {item.desc}
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
