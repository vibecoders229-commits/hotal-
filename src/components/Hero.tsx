import React from 'react';
import { ArrowUpRight, Compass, ShieldCheck } from 'lucide-react';
import { Language } from '../types/hotel';
import { HOTEL_IMAGES } from '../data/hotelData';

interface HeroProps {
  lang: Language;
  onExploreSuites: () => void;
  onBookNow: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onExploreSuites, onBookNow }) => {
  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-[88vh] flex items-center justify-center overflow-hidden">
      {/* Background Hero Image with Measured Gradient Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={HOTEL_IMAGES.hero}
          alt="The Grand Azure Resort Oceanfront at Twilight"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        {/* Measured dark gradient scrim for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0f12] via-[#0c0f12]/65 to-black/45" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 text-center">
        {/* Editorial Kicker (Quiet unboxed text with separator) */}
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium tracking-widest uppercase text-amber-200/90 mb-4">
          <span>{lang === 'en' ? 'Private Coastal Bay' : 'निजी तटीय खाड़ी'}</span>
          <span aria-hidden="true">·</span>
          <span>{lang === 'en' ? 'Five-Star Sanctuary' : 'पंचसितारा लक्जरी'}</span>
          <span aria-hidden="true">·</span>
          <span>{lang === 'en' ? 'Michelin Gastronomy' : 'मिशेलिन भोजन'}</span>
        </div>

        {/* Display Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-stone-100 tracking-tight leading-[1.15] mb-6 [text-wrap:balance]">
          {lang === 'en'
            ? 'Where Timeless Luxury Meets Serene Coastal Sanctuary'
            : 'जहाँ कालातीत विलासिता और शांत तटीय एकांत का मिलन होता है'}
        </h1>

        {/* Value Proposition */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-stone-300 font-light leading-relaxed mb-8">
          {lang === 'en'
            ? 'Immerse in secluded beachfront villas, private infinity plunge pools, bespoke Ayurvedic wellness, and world-class culinary mastery along an untouched sapphire shoreline.'
            : 'अछूते नीले समुद्र तट पर निजी इन्फिनिटी पूल विला, व्यक्तिगत आयुर्वेदिक कल्याण और विश्वस्तरीय पाक कला के साथ अद्वितीय विश्राम का अनुभव करें।'}
        </p>

        {/* Actions (Single clear primary CTA, quiet secondary link) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button
            type="button"
            onClick={onBookNow}
            className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold tracking-wide text-stone-950 bg-amber-200 hover:bg-amber-100 rounded-lg transition-all duration-150 shadow-lg"
          >
            {lang === 'en' ? 'Reserve Your Stay' : 'अपनी छुट्टियाँ बुक करें'}
          </button>
          <button
            type="button"
            onClick={onExploreSuites}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-stone-200 hover:text-white border border-stone-700/80 hover:border-stone-500 rounded-lg transition-all bg-stone-900/40 backdrop-blur-sm"
          >
            <span>{lang === 'en' ? 'Explore Suites & Villas' : 'सुइट्स एवं विला देखें'}</span>
            <ArrowUpRight className="w-4 h-4 text-amber-300" />
          </button>
        </div>

        {/* Claim-to-Proof Metric Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-stone-800/80 text-left">
          <div className="space-y-1">
            <div className="font-serif text-2xl text-amber-100 font-normal">5.0 ★</div>
            <div className="text-xs text-stone-400">
              {lang === 'en' ? 'Forbes Five-Star Excellence 2026' : 'फोर्ब्स 5-स्टार मान्यता 2026'}
            </div>
          </div>
          <div className="space-y-1">
            <div className="font-serif text-2xl text-amber-100 font-normal">120</div>
            <div className="text-xs text-stone-400">
              {lang === 'en' ? 'Oceanfront Suites & Villas' : 'समुद्र तटीय सुइट्स और विला'}
            </div>
          </div>
          <div className="space-y-1">
            <div className="font-serif text-2xl text-amber-100 font-normal">3</div>
            <div className="text-xs text-stone-400">
              {lang === 'en' ? 'Michelin Gastronomic Venues' : 'मिशेलिन स्तर के रेस्तरां'}
            </div>
          </div>
          <div className="space-y-1">
            <div className="font-serif text-2xl text-amber-100 font-normal">100%</div>
            <div className="text-xs text-stone-400">
              {lang === 'en' ? 'Secluded Private Cove & Marina' : 'निजी खाड़ी एवं यॉट मरीना'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
