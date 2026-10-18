import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle, Phone } from 'lucide-react';
import { FAQS_DATA } from '../data/faqs';
import { BUSINESS_INFO } from '../data/businessInfo';
import { createWhatsAppUrl } from '../utils/whatsapp';

export const FAQSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const generalInquiryWaUrl = createWhatsAppUrl(
    'Hello Boston Cleaning Services, I have a question regarding your cleaning services in Mumbai.'
  );

  return (
    <section id="faqs" className="py-16 lg:py-24 bg-brand-bg relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan-light border border-brand-cyan/30 text-brand-royal text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-navy tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-muted leading-relaxed">
            Find factual answers to common questions about our services, booking process, and property care across Mumbai.
          </p>
        </div>

        {/* 12 Accordions List */}
        <div className="mt-12 space-y-3.5">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openFaqId === faq.id;
            const headingId = `faq-heading-${faq.id}`;
            const panelId = `faq-panel-${faq.id}`;

            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-brand-border/80 overflow-hidden shadow-card transition-colors"
              >
                <h3>
                  <button
                    type="button"
                    id={headingId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between text-left p-5 sm:p-6 font-bold text-brand-navy hover:text-brand-royal transition-colors text-base sm:text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                  >
                    <span className="flex items-center gap-3 pr-4">
                      <span className="text-xs font-mono text-brand-royal/70 font-semibold bg-brand-bg px-2 py-0.5 rounded">
                        Q{index + 1}
                      </span>
                      <span>{faq.question}</span>
                    </span>
                    <span className="shrink-0 text-brand-royal w-6 h-6 rounded-full bg-brand-cyan-light flex items-center justify-center">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={headingId}
                    className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-brand-muted leading-relaxed border-t border-brand-border/50 animate-in fade-in-50 duration-200"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-brand-border shadow-soft flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-brand-navy">
              Have a specific question not listed here?
            </h4>
            <p className="text-xs sm:text-sm text-brand-muted mt-0.5">
              Contact our team directly for custom cleaning queries, scheduling, and exact quotes.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phoneTel}`}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-brand-navy bg-brand-bg hover:bg-brand-bg-alt border border-brand-border flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-royal" />
              <span>Call Us</span>
            </a>

            <a
              href={generalInquiryWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 flex items-center gap-1.5 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
