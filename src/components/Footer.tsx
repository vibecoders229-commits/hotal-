import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Language } from '../types/hotel';

interface FooterProps {
  lang: Language;
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenReservation }) => {
  return (
    <footer className="bg-[#080a0d] border-t border-stone-800 text-stone-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone-800/80">
          {/* Brand & Introduction */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#"
              className="font-serif text-2xl tracking-wider text-amber-100 uppercase hover:text-amber-200 transition-colors inline-block"
            >
              The Grand Azure
            </a>
            <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed max-w-sm">
              {lang === 'en'
                ? 'An ultra-luxury coastal sanctuary perched upon a private peninsula. Dedicated to unforgettable hospitality, culinary mastery, and timeless tranquility.'
                : 'निजी प्रायद्वीप पर स्थित एक अति-विलासी तटीय रिसॉर्ट। बेमिसाल आतिथ्य सत्कार, उत्कृष्ट भोजन और शांति का संगम।'}
            </p>
            <div className="pt-2 text-xs text-stone-500">
              {lang === 'en'
                ? 'Member of The Leading Hotels of the World · Forbes Five-Star Certified'
                : 'द लीडिंग होटल्स ऑफ द वर्ल्ड के सम्मानित सदस्य · फोर्ब्स 5-स्टार प्रमाणित'}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-widest text-stone-300">
              {lang === 'en' ? 'Sanctuary Navigation' : 'त्वरित लिंक'}
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#suites" className="hover:text-amber-200 transition-colors">
                  {lang === 'en' ? 'Suites & Oceanfront Villas' : 'सुइट्स एवं विला'}
                </a>
              </li>
              <li>
                <a href="#dining" className="hover:text-amber-200 transition-colors">
                  {lang === 'en' ? 'Michelin Gastronomy & Lounges' : 'रेस्तरां एवं भोजन'}
                </a>
              </li>
              <li>
                <a href="#spa" className="hover:text-amber-200 transition-colors">
                  {lang === 'en' ? 'SOMA Ayurvedic Spa Sanctuary' : 'सोमा आयुर्वेदिक स्पा'}
                </a>
              </li>
              <li>
                <a href="#experiences" className="hover:text-amber-200 transition-colors">
                  {lang === 'en' ? 'Private Yacht & Heli Charters' : 'यॉट और हेलिकॉप्टर यात्रा'}
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-amber-200 transition-colors">
                  {lang === 'en' ? 'Peninsula Arrival & Location' : 'स्थान और संपर्क'}
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Concierge & Reservations */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-widest text-stone-300">
              {lang === 'en' ? 'Private Concierge Desk' : 'कंसीयर्ज एवं आरक्षण'}
            </div>
            <div className="space-y-2.5 text-xs sm:text-sm text-stone-400">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-300 shrink-0" />
                <span>+1 (800) 555-AZURE / +91 (22) 5550-1920</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-300 shrink-0" />
                <span>reservations@grandazure.com</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                <span>Peninsula Bluffs, Coastal Route 101, Azure Coast</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenReservation}
                className="px-5 py-2.5 text-xs font-semibold text-stone-950 bg-amber-200 hover:bg-amber-100 rounded-lg transition-colors whitespace-nowrap"
              >
                {lang === 'en' ? 'Book Direct Guarantee' : 'सर्वश्रेष्ठ दर की गारंटी'}
              </button>
            </div>
          </div>
        </div>

        {/* Quiet Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} The Grand Azure Resort & Spa. All rights reserved.
          </div>
          <div className="flex items-center gap-5">
            <span className="hover:text-stone-400 cursor-pointer">
              {lang === 'en' ? 'Privacy Policy' : 'गोपनीयता नीति'}
            </span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-stone-400 cursor-pointer">
              {lang === 'en' ? 'Terms of Stay' : 'शर्तें एवं नियम'}
            </span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-stone-400 cursor-pointer">
              {lang === 'en' ? 'Sustainability' : 'पर्यावरण'}
            </span>
            <span aria-hidden="true">·</span>
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-amber-200 transition-colors">
              {lang === 'en' ? 'Sitemap.xml' : 'साइटमैप (XML)'}
            </a>
            <span aria-hidden="true">·</span>
            <a href="/sitemap.html" target="_blank" rel="noopener noreferrer" className="hover:text-amber-200 transition-colors">
              {lang === 'en' ? 'Directory' : 'निर्देशिका'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
