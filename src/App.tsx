import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { About } from './components/About';
import { ServicesGrid } from './components/ServicesGrid';
import { DeepCleaningDetails } from './components/DeepCleaningDetails';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Process } from './components/Process';
import { PropertyTypes } from './components/PropertyTypes';
import { ServiceAreas } from './components/ServiceAreas';
import { FAQSection } from './components/FAQSection';
import { CustomerReviews } from './components/CustomerReviews';
import { ContactBookingForm } from './components/ContactBookingForm';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { LegalModal } from './components/LegalModal';

export const App: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('Deep Home Cleaning');
  const [selectedPropertyType, setSelectedPropertyType] = useState<string>('Apartment / Flat');
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  const scrollToContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    scrollToContact();
  };

  const handleSelectPropertyType = (propertyTypeName: string) => {
    setSelectedPropertyType(propertyTypeName);
    scrollToContact();
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg text-brand-dark">
      {/* SECTION 1: HEADER AND NAVIGATION */}
      <Header onBookCleaningClick={scrollToContact} />

      <main className="flex-1">
        {/* SECTION 2: HERO SECTION */}
        <Hero onRequestQuoteClick={scrollToContact} />

        {/* SECTION 3: TRUST AND SERVICE HIGHLIGHTS */}
        <TrustStrip />

        {/* SECTION 4: ABOUT BOSTON CLEANING SERVICES */}
        <About onEnquireClick={scrollToContact} />

        {/* SECTION 5: OUR CLEANING SERVICES */}
        <ServicesGrid onSelectService={handleSelectService} />

        {/* SECTION 6: DEEP CLEANING DETAILS */}
        <DeepCleaningDetails onAskDeepCleaningClick={scrollToContact} />

        {/* SECTION 7: WHY CHOOSE US */}
        <WhyChooseUs />

        {/* SECTION 8: OUR CLEANING PROCESS */}
        <Process onStartBookingClick={scrollToContact} />

        {/* SECTION 9: PROPERTY TYPES WE SERVE */}
        <PropertyTypes onSelectPropertyType={handleSelectPropertyType} />

        {/* SECTION 10: SERVICE AREAS */}
        <ServiceAreas onCheckAvailabilityClick={scrollToContact} />

        {/* SECTION 11: FREQUENTLY ASKED QUESTIONS */}
        <FAQSection />

        {/* SECTION 12: CUSTOMER REVIEWS */}
        <CustomerReviews />

        {/* SECTION 13: CONTACT AND BOOKING FORM */}
        <ContactBookingForm
          selectedService={selectedService}
          selectedPropertyType={selectedPropertyType}
          onServiceChange={setSelectedService}
          onPropertyTypeChange={setSelectedPropertyType}
        />

        {/* SECTION 14: FINAL CALL TO ACTION */}
        <FinalCTA onRequestQuoteClick={scrollToContact} />
      </main>

      {/* SECTION 15: FOOTER */}
      <Footer
        onSelectService={handleSelectService}
        onOpenLegal={(type) => setLegalModalType(type)}
      />

      {/* STICKY MOBILE CTA BAR */}
      <MobileStickyBar />

      {/* ACCESSIBLE LEGAL MODAL */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
};

export default App;
