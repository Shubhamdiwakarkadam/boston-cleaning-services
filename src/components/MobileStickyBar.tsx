import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { createWhatsAppUrl } from '../utils/whatsapp';

export const MobileStickyBar: React.FC = () => {
  const quickWaUrl = createWhatsAppUrl(
    'Hello Boston Cleaning Services, I would like to enquire about your cleaning services in Mumbai.'
  );

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-brand-border/80 p-2.5 px-4 sm:hidden shadow-2xl flex items-center gap-3">
      {/* Call Now Button */}
      <a
        href={`tel:${BUSINESS_INFO.phoneTel}`}
        className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl font-bold text-xs text-white bg-brand-royal hover:bg-brand-royal-hover active:scale-[0.98] transition-all shadow-sm"
        aria-label="Call Boston Cleaning Services"
      >
        <Phone className="w-4 h-4" />
        <span>Call Now</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={quickWaUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] transition-all shadow-sm"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-4 h-4" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
};
