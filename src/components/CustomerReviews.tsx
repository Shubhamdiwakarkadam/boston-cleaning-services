import React from 'react';
import { MessageSquareHeart, Send, Sparkles } from 'lucide-react';
import { createWhatsAppUrl } from '../utils/whatsapp';

export const CustomerReviews: React.FC = () => {
  const reviewFeedbackWaUrl = createWhatsAppUrl(
    'Hello Boston Cleaning Services, I would like to share feedback regarding my recent cleaning service.'
  );

  return (
    <section id="reviews" className="py-16 bg-white relative border-t border-brand-border/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tasteful Authentic Feedback Placeholder Frame */}
        <div className="bg-gradient-to-br from-brand-bg via-brand-cyan-light/20 to-white rounded-3xl p-8 sm:p-12 border border-brand-border text-center shadow-soft">
          <div className="w-14 h-14 rounded-2xl bg-brand-cyan-light text-brand-royal flex items-center justify-center mx-auto mb-4 border border-brand-cyan/30">
            <MessageSquareHeart className="w-7 h-7 text-brand-royal" />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-brand-border text-brand-royal text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Customer Feedback</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight">
            Have you used our services?
          </h2>

          <p className="mt-3 text-base sm:text-lg text-brand-muted max-w-xl mx-auto leading-relaxed">
            We would love to hear about your experience. Your genuine feedback helps us continually enhance our cleaning standards across Mumbai.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={reviewFeedbackWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-brand-royal hover:bg-brand-royal-hover active:scale-[0.98] shadow-sm transition-all text-sm"
            >
              <Send className="w-4 h-4" />
              <span>Share Your Experience</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-brand-navy bg-white hover:bg-brand-bg-alt border border-brand-border transition-all text-sm"
            >
              <span>Contact Our Team</span>
            </a>
          </div>

          <p className="mt-5 text-xs text-brand-muted">
            We prioritize honest transparency and verify client experiences before publishing reviews.
          </p>
        </div>

      </div>
    </section>
  );
};
