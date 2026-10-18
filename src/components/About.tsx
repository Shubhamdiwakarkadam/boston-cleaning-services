import { CheckCircle, MapPin, Sparkles, PhoneCall, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

interface AboutProps {
  onEnquireClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onEnquireClick }) => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Showcase (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Main Photo */}
              <div className="relative rounded-2xl overflow-hidden shadow-soft-lg border border-brand-border">
                <img
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&q=80"
                  alt="Spotless clean interior maintained by Boston Cleaning Services Mumbai"
                  className="w-full h-80 sm:h-96 object-cover"
                  loading="lazy"
                  width="500"
                  height="400"
                />
              </div>

              {/* Floating info card */}
              <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:right-6 bg-brand-navy text-white p-5 rounded-2xl shadow-xl max-w-xs border border-brand-navy-light">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-cyan/20 text-brand-cyan flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-bold tracking-wider text-brand-cyan">
                      Mumbai Cleaning Focus
                    </div>
                    <div className="text-sm font-semibold text-white mt-0.5">
                      Reliable Service For Every Space
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan-light border border-brand-cyan/30 text-brand-royal text-xs font-bold uppercase tracking-wider mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span>About Boston Cleaning Services</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-navy tracking-tight leading-tight">
              Your Local Cleaning Service in Mumbai
            </h2>

            <div className="mt-5 space-y-4 text-brand-muted text-base sm:text-lg leading-relaxed">
              <p>
                At <strong className="text-brand-dark font-semibold">Boston Cleaning Services</strong>, we are committed to helping families, working professionals, and business owners throughout Mumbai maintain pristine, hygienic, and welcoming spaces.
              </p>
              <p>
                Whether you need a deep scrub of your apartment before moving in, regular maintenance to keep your home fresh, or comprehensive sanitation for your office or shop, our team delivers practical cleaning solutions tailored to your unique requirements.
              </p>
              <p className="text-sm sm:text-base">
                We believe that clean spaces promote better health, comfort, and productivity. By focusing on meticulous attention to detail, respectful handling of your property, and an honest, straightforward booking process, we make scheduling your cleaning smooth and stress-free.
              </p>
            </div>

            {/* Core Values checklist */}
            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-brand-royal shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-brand-dark">Attention to cleaning details on all surfaces</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-brand-royal shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-brand-dark">Practical residential & commercial solutions</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-brand-royal shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-brand-dark">Customized scopes for homes, flats & offices</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-brand-royal shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-brand-dark">Instant enquiry via phone or WhatsApp</span>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onEnquireClick}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-brand-royal hover:bg-brand-royal-hover shadow-sm transition-all text-sm"
              >
                <span>Request Service Scope</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phoneTel}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-brand-navy hover:text-brand-royal bg-brand-bg hover:bg-brand-bg-alt border border-brand-border transition-all text-sm"
              >
                <PhoneCall className="w-4 h-4 text-brand-royal" />
                <span>Call {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
