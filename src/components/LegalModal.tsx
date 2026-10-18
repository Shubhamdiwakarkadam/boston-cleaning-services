import React, { useEffect } from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (type) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-brand-navy/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-brand-border p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-brand-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-cyan-light text-brand-royal flex items-center justify-center">
              {type === 'privacy' ? <Shield className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-navy">
                {type === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
              </h3>
              <p className="text-xs text-brand-muted">
                {BUSINESS_INFO.name} • Mumbai, Maharashtra, India
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-brand-muted hover:text-brand-dark hover:bg-brand-bg rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="mt-5 space-y-4 text-sm text-brand-muted leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p>
                <strong>Effective Date:</strong> Current Production Baseline ({new Date().getFullYear()})
              </p>
              <h4 className="font-bold text-brand-navy text-base">1. Information Collection</h4>
              <p>
                Boston Cleaning Services collects personal details—including full name, phone number, Mumbai locality, and cleaning requirements—only when voluntarily provided by users via our website contact form or direct communication.
              </p>
              <h4 className="font-bold text-brand-navy text-base">2. Purpose of Use</h4>
              <p>
                We use this information exclusively to communicate regarding service enquiries, confirm appointments, prepare accurate quotes, and deliver requested cleaning services. We do not sell, rent, or share personal information with third-party marketers.
              </p>
              <h4 className="font-bold text-brand-navy text-base">3. Static Data Handling & WhatsApp</h4>
              <p>
                This static website does not store form submissions in an external database. Client enquiries submitted through the form generate an encrypted client-initiated WhatsApp chat message or telephone call.
              </p>
              <h4 className="font-bold text-brand-navy text-base">4. Contact For Privacy Queries</h4>
              <p>
                If you have questions about our privacy practices, please contact us at{' '}
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-brand-royal font-semibold underline">
                  {BUSINESS_INFO.email}
                </a>{' '}
                or call {BUSINESS_INFO.phoneDisplay}.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>Effective Date:</strong> Current Production Baseline ({new Date().getFullYear()})
              </p>
              <h4 className="font-bold text-brand-navy text-base">1. Service Scope & Booking</h4>
              <p>
                All cleaning appointments with Boston Cleaning Services are subject to slot availability, mutually confirmed scope of work, and agreed pricing prior to service execution.
              </p>
              <h4 className="font-bold text-brand-navy text-base">2. Inclusions & Exclusions</h4>
              <p>
                Standard cleaning packages cover accessible horizontal and vertical surfaces according to the service selected. Specialized tasks (e.g., intensive degreasing, internal appliance cleaning, high exterior glazing, or hazardous material handling) require specific prior agreement.
              </p>
              <h4 className="font-bold text-brand-navy text-base">3. Property Access & Utilities</h4>
              <p>
                Clients must provide adequate access to the premises as well as functioning electricity and running water supplies necessary for the cleaning team to execute the agreed work safely.
              </p>
              <h4 className="font-bold text-brand-navy text-base">4. Cancellation & Rescheduling</h4>
              <p>
                To reschedule or cancel a confirmed cleaning appointment, clients are requested to notify Boston Cleaning Services at least 24 hours in advance via telephone or WhatsApp.
              </p>
            </>
          )}

          <div className="p-3.5 bg-brand-bg rounded-xl border border-brand-border text-xs text-brand-muted mt-6">
            <em>Starter policy document for Boston Cleaning Services. Can be customized with specialized legal counsel before commercial rollout.</em>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-brand-border flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-sm font-semibold text-white bg-brand-royal hover:bg-brand-royal-hover transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
