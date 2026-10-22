import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { Language } from '../types/hotel';
import { TESTIMONIALS_DATA } from '../data/hotelData';

interface ReviewsSectionProps {
  lang: Language;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ lang }) => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Proof Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div>
          <div className="text-xs uppercase tracking-widest text-amber-300 font-medium mb-2">
            {lang === 'en' ? 'Guest Endorsements' : 'अतिथि समीक्षाएं'}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-100 tracking-tight">
            {lang === 'en' ? 'Stories of Timeless Serenity' : 'अविस्मरणीय अनुभवों की दास्तान'}
          </h2>
        </div>

        {/* Quantified Rating Box */}
        <div className="flex items-center gap-4 p-3.5 bg-stone-900/60 border border-stone-800 rounded-xl">
          <div className="font-serif text-3xl font-semibold text-amber-100">4.98</div>
          <div className="text-xs text-stone-400">
            <div className="flex items-center gap-1 text-amber-300">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
              ))}
            </div>
            <div className="mt-0.5">
              {lang === 'en' ? 'Across 480+ Verified Luxury Stays' : '480+ सत्यापित अतिथियों द्वारा'}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS_DATA.map((t) => (
          <div
            key={t.id}
            className="bg-[#11161d] border border-stone-800 rounded-xl p-6 sm:p-7 flex flex-col justify-between"
          >
            <div>
              {/* Star Rating */}
              <div className="flex items-center gap-1 text-amber-300 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-stone-300 text-sm font-light leading-relaxed italic mb-6">
                “{t.review[lang]}”
              </p>
            </div>

            {/* Guest Details with unboxed metadata */}
            <div className="pt-4 border-t border-stone-800">
              <div className="font-serif text-stone-100 text-base font-normal">
                {t.guestName}
              </div>
              <div className="text-xs text-stone-400 mt-0.5">
                <span>{t.guestLocation}</span>
                <span className="mx-1.5" aria-hidden="true">·</span>
                <span>{t.suiteStayed[lang]}</span>
              </div>
              <div className="text-[11px] text-stone-500 mt-1 flex items-center gap-1">
                <CheckCircle className="w-3 h-3 text-emerald-400" />
                <span>{lang === 'en' ? `Verified Stay · ${t.date}` : `सत्यापित प्रवास · ${t.date}`}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
