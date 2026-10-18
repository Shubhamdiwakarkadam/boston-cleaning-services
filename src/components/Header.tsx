import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

interface HeaderProps {
  onBookCleaningClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onBookCleaningClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-brand-border/60 py-2.5'
            : 'bg-white border-b border-brand-border/40 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              className="flex items-center focus-visible:ring-2 focus-visible:ring-brand-cyan rounded-md"
              aria-label="Boston Cleaning Services Home"
            >
              <img
                src={BUSINESS_INFO.logoUrl}
                alt="Boston Cleaning Services - Best & Trusted Cleaning Service in Mumbai"
                className="h-10 sm:h-12 w-auto object-contain"
                width="168"
                height="48"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-[15px] font-medium text-brand-dark hover:text-brand-royal transition-colors relative py-1"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phoneTel}`}
                className="hidden xl:flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-royal transition-colors px-3 py-2 rounded-lg hover:bg-brand-bg"
                title="Call Boston Cleaning Services"
              >
                <div className="w-8 h-8 rounded-full bg-brand-cyan-light text-brand-royal flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <span>{BUSINESS_INFO.phoneDisplay}</span>
              </a>

              <button
                type="button"
                onClick={onBookCleaningClick}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-brand-royal hover:bg-brand-royal-hover active:scale-[0.98] shadow-sm hover:shadow-soft transition-all"
              >
                <span>Book a Cleaning</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center gap-2 sm:hidden">
              <a
                href={`tel:${BUSINESS_INFO.phoneTel}`}
                className="p-2 text-brand-royal hover:bg-brand-bg rounded-lg"
                aria-label="Call business"
              >
                <Phone className="w-5 h-5" />
              </a>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-brand-navy hover:bg-brand-bg focus-visible:ring-2 focus-visible:ring-brand-cyan"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-brand-navy/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer content */}
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-200">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-brand-border">
                <img
                  src={BUSINESS_INFO.logoUrl}
                  alt="Boston Cleaning Services"
                  className="h-9 w-auto object-contain"
                />
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-brand-muted hover:text-brand-dark hover:bg-brand-bg"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="mt-2 text-xs font-medium text-brand-muted py-2">
                {BUSINESS_INFO.tagline}
              </div>

              {/* Mobile Links */}
              <nav className="mt-4 flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="flex items-center justify-between px-3 py-3 rounded-lg text-base font-medium text-brand-dark hover:text-brand-royal hover:bg-brand-bg transition-colors"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 text-brand-muted" />
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-brand-border space-y-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneTel}`}
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-brand-bg text-brand-navy font-semibold text-sm hover:bg-brand-bg-alt transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-royal" />
                <span>Call {BUSINESS_INFO.phoneDisplay}</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onBookCleaningClick();
                }}
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-brand-royal hover:bg-brand-royal-hover text-white font-semibold text-sm shadow-sm transition-colors"
              >
                <span>Book a Cleaning</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center text-xs text-brand-muted pt-2 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-royal" />
                <span>Mumbai, Maharashtra</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
