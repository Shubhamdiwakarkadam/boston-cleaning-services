import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  Globe,
  MapPin,
  MessageCircle,
  AlertCircle,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { BUSINESS_INFO, PROPERTY_TYPES } from '../data/businessInfo';
import { CLEANING_SERVICES } from '../data/services';
import { BookingFormData } from '../types';
import { createWhatsAppUrl, buildBookingWhatsAppMessage } from '../utils/whatsapp';

interface ContactBookingFormProps {
  selectedService: string;
  selectedPropertyType: string;
  onServiceChange: (serviceName: string) => void;
  onPropertyTypeChange: (propType: string) => void;
}

export const ContactBookingForm: React.FC<ContactBookingFormProps> = ({
  selectedService,
  selectedPropertyType,
  onServiceChange,
  onPropertyTypeChange,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    service: selectedService || CLEANING_SERVICES[0].name,
    propertyType: selectedPropertyType || PROPERTY_TYPES[0],
    area: '',
    preferredDate: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [submittedStatus, setSubmittedStatus] = useState<string | null>(null);

  // Sync external selections
  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  useEffect(() => {
    if (selectedPropertyType) {
      setFormData((prev) => ({ ...prev, propertyType: selectedPropertyType }));
    }
  }, [selectedPropertyType]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof BookingFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (name === 'service') {
      onServiceChange(value);
    }
    if (name === 'propertyType') {
      onPropertyTypeChange(value);
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof BookingFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }

    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    } else if (cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a cleaning service';
    }

    if (!formData.propertyType) {
      newErrors.propertyType = 'Please select your property type';
    }

    if (!formData.area.trim()) {
      newErrors.area = 'Please provide your locality or area in Mumbai';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      setSubmittedStatus('error');
      return;
    }

    setSubmittedStatus('opening_whatsapp');

    // Build URL-encoded WhatsApp message
    const waMessage = buildBookingWhatsAppMessage(formData);
    const waUrl = createWhatsAppUrl(waMessage);

    // Open WhatsApp in new tab/app window
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan-light border border-brand-cyan/30 text-brand-royal text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fast & Direct Response</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-navy tracking-tight">
            Let's Make Your Space Cleaner
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-muted leading-relaxed">
            Fill out the details below to prepare your enquiry. Submitting immediately initiates a formatted WhatsApp message to Boston Cleaning Services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Details & Info (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-brand-border/80 shadow-card space-y-6">
            <div>
              <div className="text-xs uppercase font-bold tracking-wider text-brand-royal">
                Official Business Info
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-brand-navy mt-1">
                {BUSINESS_INFO.name}
              </h3>
              <p className="text-xs text-brand-muted mt-1 font-medium">
                {BUSINESS_INFO.tagline}
              </p>
            </div>

            <p className="text-sm text-brand-muted leading-relaxed">
              We make contacting our team effortless. For immediate queries, pricing estimates, or specific scheduling requests, you can call us directly or click our contact links below.
            </p>

            <div className="pt-2 space-y-4">
              {/* Phone */}
              <a
                href={`tel:${BUSINESS_INFO.phoneTel}`}
                className="flex items-start gap-3.5 p-3.5 rounded-xl bg-brand-bg hover:bg-brand-bg-alt border border-brand-border transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-cyan-light text-brand-royal flex items-center justify-center shrink-0 group-hover:bg-brand-royal group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-brand-muted font-medium">Phone Support & Bookings</div>
                  <div className="text-sm sm:text-base font-bold text-brand-navy group-hover:text-brand-royal transition-colors">
                    {BUSINESS_INFO.phoneDisplay}
                  </div>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-start gap-3.5 p-3.5 rounded-xl bg-brand-bg hover:bg-brand-bg-alt border border-brand-border transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-cyan-light text-brand-royal flex items-center justify-center shrink-0 group-hover:bg-brand-royal group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-brand-muted font-medium">Email Enquiries</div>
                  <div className="text-sm sm:text-base font-bold text-brand-navy group-hover:text-brand-royal transition-colors break-all">
                    {BUSINESS_INFO.email}
                  </div>
                </div>
              </a>

              {/* Website */}
              <a
                href={BUSINESS_INFO.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3.5 p-3.5 rounded-xl bg-brand-bg hover:bg-brand-bg-alt border border-brand-border transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-cyan-light text-brand-royal flex items-center justify-center shrink-0 group-hover:bg-brand-royal group-hover:text-white transition-colors">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-brand-muted font-medium">Official Website</div>
                  <div className="text-sm sm:text-base font-bold text-brand-navy group-hover:text-brand-royal transition-colors">
                    www.bostoncleaningservices.in
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-brand-bg border border-brand-border">
                <div className="w-10 h-10 rounded-lg bg-brand-cyan-light text-brand-royal flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-brand-muted font-medium">Primary Service Location</div>
                  <div className="text-sm sm:text-base font-bold text-brand-navy">
                    {BUSINESS_INFO.location}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200/60 text-xs text-brand-navy leading-relaxed">
              <strong>Static Site Notice:</strong> Submitting this form prepares your details and opens WhatsApp on your phone or computer to send your request directly to our team.
            </div>
          </div>

          {/* Right Column: Clean Enquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-9 border border-brand-border/80 shadow-card">
            
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              
              {/* Form Validation Feedback Banner */}
              {submittedStatus === 'error' && (
                <div
                  role="alert"
                  className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm flex items-start gap-2.5 animate-in fade-in-50 duration-200"
                >
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Please check required fields:</span>
                    <ul className="mt-1 list-disc list-inside text-xs space-y-0.5 text-red-700">
                      {Object.values(errors).map((err, i) => (
                        <li key={i}>{err}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {submittedStatus === 'opening_whatsapp' && (
                <div
                  role="status"
                  className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-sm flex items-start gap-2.5 animate-in fade-in-50 duration-200"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Opening WhatsApp...</p>
                    <p className="text-xs text-emerald-800 mt-0.5">
                      Your enquiry message has been formatted. Simply tap "Send" in WhatsApp to initiate your request with Boston Cleaning Services.
                    </p>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-brand-dark placeholder:text-gray-400 bg-brand-bg/50 focus:bg-white transition-all outline-none ${
                      errors.fullName
                        ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                        : 'border-brand-border focus:border-brand-royal focus:ring-1 focus:ring-brand-royal'
                    }`}
                    aria-required="true"
                    aria-invalid={!!errors.fullName}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 9876543210"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-brand-dark placeholder:text-gray-400 bg-brand-bg/50 focus:bg-white transition-all outline-none ${
                      errors.phone
                        ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                        : 'border-brand-border focus:border-brand-royal focus:ring-1 focus:ring-brand-royal'
                    }`}
                    aria-required="true"
                    aria-invalid={!!errors.phone}
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-600 mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Service Required (all 12 services) */}
                <div>
                  <label htmlFor="service" className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                    Service Required <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-brand-border text-sm text-brand-dark bg-brand-bg/50 focus:bg-white focus:border-brand-royal focus:ring-1 focus:ring-brand-royal transition-all outline-none"
                    aria-required="true"
                  >
                    {CLEANING_SERVICES.map((svc) => (
                      <option key={svc.id} value={svc.name}>
                        {svc.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Property Type */}
                <div>
                  <label htmlFor="propertyType" className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                    Property Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="propertyType"
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-brand-border text-sm text-brand-dark bg-brand-bg/50 focus:bg-white focus:border-brand-royal focus:ring-1 focus:ring-brand-royal transition-all outline-none"
                    aria-required="true"
                  >
                    {PROPERTY_TYPES.map((pt, i) => (
                      <option key={i} value={pt}>
                        {pt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Area or Locality in Mumbai */}
                <div>
                  <label htmlFor="area" className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                    Locality / Area in Mumbai <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="area"
                    name="area"
                    value={formData.area}
                    onChange={handleChange}
                    placeholder="e.g. Bandra West, Andheri, Powai..."
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-brand-dark placeholder:text-gray-400 bg-brand-bg/50 focus:bg-white transition-all outline-none ${
                      errors.area
                        ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                        : 'border-brand-border focus:border-brand-royal focus:ring-1 focus:ring-brand-royal'
                    }`}
                    aria-required="true"
                    aria-invalid={!!errors.area}
                  />
                  {errors.area && (
                    <p className="text-xs text-red-600 mt-1">{errors.area}</p>
                  )}
                </div>

                {/* Preferred Date (Optional) */}
                <div>
                  <label htmlFor="preferredDate" className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                    Preferred Date <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-brand-border text-sm text-brand-dark bg-brand-bg/50 focus:bg-white focus:border-brand-royal focus:ring-1 focus:ring-brand-royal transition-all outline-none"
                  />
                </div>
              </div>

              {/* Message / Cleaning Requirements */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                  Cleaning Requirements / Message <span className="text-gray-400 font-normal">(Optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Mention number of rooms, specific stains, balcony clean, or any instructions..."
                  className="w-full px-4 py-3 rounded-xl border border-brand-border text-sm text-brand-dark placeholder:text-gray-400 bg-brand-bg/50 focus:bg-white focus:border-brand-royal focus:ring-1 focus:ring-brand-royal transition-all outline-none resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] shadow-md hover:shadow-soft transition-all text-base"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Send Enquiry on WhatsApp</span>
                </button>
              </div>

              {/* Alternative Quick Call Button */}
              <div className="text-center">
                <p className="text-xs text-brand-muted">
                  Prefer speaking over the phone?{' '}
                  <a
                    href={`tel:${BUSINESS_INFO.phoneTel}`}
                    className="font-bold text-brand-royal hover:underline"
                  >
                    Click to Call {BUSINESS_INFO.phoneDisplay}
                  </a>
                </p>
              </div>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};
