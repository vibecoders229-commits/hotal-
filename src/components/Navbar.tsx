import React, { useState } from 'react';
import { Menu, X, Globe, PhoneCall } from 'lucide-react';
import { Language, Currency } from '../types/hotel';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  currency: Currency;
  setCurrency: (c: Currency) => void;
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  setLang,
  currency,
  setCurrency,
  onOpenReservation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: lang === 'en' ? 'Suites & Villas' : 'सुइट्स एवं विला', href: '#suites' },
    { label: lang === 'en' ? 'Fine Dining' : 'भोजन एवं रेस्तरां', href: '#dining' },
    { label: lang === 'en' ? 'Wellness Spa' : 'वेलनेस स्पा', href: '#spa' },
    { label: lang === 'en' ? 'Gallery' : 'गैलरी', href: '#gallery' },
    { label: lang === 'en' ? 'Location' : 'स्थान व संपर्क', href: '#location' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0c0f12]/90 backdrop-blur-md border-b border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Display face, single text element, no subtitle) */}
        <a
          href="#"
          className="font-serif text-xl sm:text-2xl tracking-wider text-amber-100 uppercase hover:text-amber-200 transition-colors whitespace-nowrap shrink-0"
        >
          The Grand Azure
        </a>

        {/* Zone 2: 4-5 Clean single-line text nav links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-amber-200 transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-amber-300/80 hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Controls & 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Currency Toggle */}
          <button
            type="button"
            onClick={() => setCurrency(currency === 'USD' ? 'INR' : 'USD')}
            title="Toggle Currency"
            className="hidden sm:inline-flex items-center text-xs font-semibold px-2.5 py-1.5 rounded border border-stone-700/80 text-stone-300 hover:text-white hover:border-stone-500 transition-colors whitespace-nowrap shrink-0"
          >
            {currency === 'USD' ? '$ USD' : '₹ INR'}
          </button>

          {/* Language Toggle */}
          <button
            type="button"
            onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
            className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded border border-stone-700/80 text-stone-300 hover:text-amber-200 hover:border-amber-500/50 transition-colors whitespace-nowrap shrink-0"
            title="Switch Language"
          >
            <Globe className="w-3.5 h-3.5 text-amber-300" />
            <span>{lang === 'en' ? 'हिन्दी' : 'English'}</span>
          </button>

          {/* Primary Action Button */}
          <button
            type="button"
            onClick={onOpenReservation}
            className="px-4 py-2.5 text-xs sm:text-sm font-semibold tracking-wide text-stone-950 bg-amber-200 hover:bg-amber-100 rounded transition-all duration-150 shadow-sm whitespace-nowrap shrink-0"
          >
            {lang === 'en' ? 'Reserve a Suite' : 'कमरा बुक करें'}
          </button>

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-stone-300 hover:text-white rounded focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e1318] border-b border-stone-800 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-stone-200 hover:text-amber-200 py-1 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-stone-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setCurrency(currency === 'USD' ? 'INR' : 'USD')}
                className="text-xs px-3 py-1.5 rounded border border-stone-700 text-stone-300"
              >
                {currency === 'USD' ? '$ USD' : '₹ INR'}
              </button>
              <a
                href="tel:+18005550199"
                className="inline-flex items-center gap-1.5 text-xs text-stone-400 hover:text-amber-200"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Concierge</span>
              </a>
            </div>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="px-4 py-2 text-xs font-semibold text-stone-950 bg-amber-200 rounded"
            >
              {lang === 'en' ? 'Book Now' : 'बुक करें'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
