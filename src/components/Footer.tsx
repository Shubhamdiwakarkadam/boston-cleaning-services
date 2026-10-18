import React from 'react';
import { Phone, Mail, Globe, MapPin, ArrowUp, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { CLEANING_SERVICES } from '../data/services';

interface FooterProps {
  onSelectService: (serviceName: string) => void;
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectService, onOpenLegal }) => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Deep Cleaning Scope', href: '#deep-cleaning' },
    { name: 'Property Types', href: '#property-types' },
    { name: 'Service Areas', href: '#service-areas' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact & Booking', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceClick = (serviceName: string) => {
    onSelectService(serviceName);
    const formEl = document.getElementById('contact');
    if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-navy-dark text-white pt-16 pb-24 lg:pb-12 border-t border-brand-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white p-3 rounded-xl inline-block max-w-[220px]">
              <img
                src={BUSINESS_INFO.logoUrl}
                alt="Boston Cleaning Services"
                className="h-10 w-auto object-contain"
                width="168"
                height="40"
              />
            </div>

            <div className="text-xs uppercase font-bold tracking-wider text-brand-cyan">
              {BUSINESS_INFO.tagline}
            </div>

            <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
              Boston Cleaning Services offers reliable, detailed residential and commercial cleaning solutions tailored to apartments, independent houses, corporate offices, and shops across Mumbai.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-brand-cyan-soft">
              <ShieldCheck className="w-4 h-4 text-brand-cyan" />
              <span>Dedicated Mumbai Cleaning Service</span>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-cyan mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-brand-cyan transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: All 12 Cleaning Services (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-cyan mb-4">
              Our 12 Cleaning Services
            </h4>
            <ul className="space-y-2 text-xs text-gray-300 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-x-2">
              {CLEANING_SERVICES.map((svc) => (
                <li key={svc.id}>
                  <button
                    type="button"
                    onClick={() => handleServiceClick(svc.name)}
                    className="text-left hover:text-brand-cyan transition-colors"
                  >
                    • {svc.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Verification (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-cyan mb-4">
              Contact Details
            </h4>
            
            <a
              href={`tel:${BUSINESS_INFO.phoneTel}`}
              className="flex items-start gap-3 text-sm text-gray-300 hover:text-white transition-colors group"
            >
              <Phone className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs text-gray-400">Phone:</span>
                <span className="font-semibold text-white group-hover:text-brand-cyan">
                  {BUSINESS_INFO.phoneDisplay}
                </span>
              </div>
            </a>

            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className="flex items-start gap-3 text-sm text-gray-300 hover:text-white transition-colors group"
            >
              <Mail className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs text-gray-400">Email:</span>
                <span className="font-semibold text-white group-hover:text-brand-cyan break-all">
                  {BUSINESS_INFO.email}
                </span>
              </div>
            </a>

            <a
              href={BUSINESS_INFO.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-sm text-gray-300 hover:text-white transition-colors group"
            >
              <Globe className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs text-gray-400">Website:</span>
                <span className="font-semibold text-white group-hover:text-brand-cyan">
                  {BUSINESS_INFO.website}
                </span>
              </div>
            </a>

            <div className="flex items-start gap-3 text-sm text-gray-300">
              <MapPin className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs text-gray-400">Location:</span>
                <span className="font-semibold text-white">
                  {BUSINESS_INFO.location}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Legal Links, Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © {currentYear} {BUSINESS_INFO.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-brand-cyan transition-colors underline"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => onOpenLegal('terms')}
              className="hover:text-brand-cyan transition-colors underline"
            >
              Terms & Conditions
            </button>

            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-gray-300 hover:text-brand-cyan transition-colors ml-2"
              aria-label="Back to top of page"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
