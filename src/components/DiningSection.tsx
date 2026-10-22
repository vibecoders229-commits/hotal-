import React, { useState } from 'react';
import { Utensils, Sparkles, Clock, Wine } from 'lucide-react';
import { Language, Currency } from '../types/hotel';
import { DINING_MENUS, HOTEL_IMAGES, USD_TO_INR_RATE } from '../data/hotelData';

interface DiningSectionProps {
  lang: Language;
  currency: Currency;
  onOpenTableBooking: () => void;
}

export const DiningSection: React.FC<DiningSectionProps> = ({
  lang,
  currency,
  onOpenTableBooking,
}) => {
  const [activeTab, setActiveTab] = useState<'degustation' | 'coastal' | 'cocktails'>('degustation');

  const selectedMenu = DINING_MENUS.find((m) => m.category === activeTab) || DINING_MENUS[0];

  return (
    <section id="dining" className="py-24 bg-[#0a0d11] border-y border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-widest text-amber-300 font-medium mb-2">
            {lang === 'en' ? 'Three-Star Gastronomy' : 'विश्वस्तरीय स्वादिष्ट भोजन'}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-100 tracking-tight [text-wrap:balance]">
            {lang === 'en'
              ? 'Epicurean Artistry Overlooking the Sapphire Sea'
              : 'समुद्र के मनोरम नज़ारों के बीच असाधारण पाक कला'}
          </h2>
          <p className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed">
            {lang === 'en'
              ? 'Led by Michelin-starred culinary director Laurent Vane, our three bespoke restaurants blend freshly caught local seafood with heritage culinary traditions and an award-winning cellar of 2,400 rare labels.'
              : 'मिशेलिन-स्टार शेफ लॉरेंट वेन के नेतृत्व में, हमारे तीन खास रेस्तरां ताज़ा समुद्री व्यंजनों, पारंपरिक स्वादों और 2,400 दुर्लभ वाइन के संग्रह का संगम पेश करते हैं।'}
          </p>
        </div>

        {/* 2-Column Split: Visual Marquee & Interactive Culinary Menu */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Marquee Image Column */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden min-h-[380px] lg:h-full border border-stone-800">
            <img
              src={HOTEL_IMAGES.dining}
              alt="The Grand Azure Rooftop Restaurant"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-stone-950/80 backdrop-blur-md border border-stone-800">
              <div className="font-serif text-lg text-amber-100 font-medium">
                {lang === 'en' ? 'L’Aura Rooftop & Champagne Terrace' : 'एल’ऑरा रूफटॉप एवं शैम्पेन टेरेस'}
              </div>
              <div className="text-xs text-stone-400 mt-1 flex items-center justify-between">
                <span>{lang === 'en' ? 'Dinner: 6:00 PM – 11:30 PM' : 'डिनर: शाम 6:00 से 11:30'}</span>
                <span>{lang === 'en' ? 'Dress Code: Elegant Casual' : 'ड्रेस कोड: एलिगेंट'}</span>
              </div>
            </div>
          </div>

          {/* Interactive Menu Tabs & Items Column */}
          <div className="lg:col-span-7 bg-[#11161d] border border-stone-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Menu Category Tabs */}
              <div className="flex items-center gap-2 p-1 bg-stone-900/90 rounded-xl border border-stone-800 mb-8">
                {DINING_MENUS.map((menu) => (
                  <button
                    key={menu.category}
                    type="button"
                    onClick={() => setActiveTab(menu.category)}
                    className={`flex-1 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                      activeTab === menu.category
                        ? 'bg-amber-200 text-stone-950 font-semibold shadow'
                        : 'text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    {menu.title[lang]}
                  </button>
                ))}
              </div>

              {/* Menu Subtitle */}
              <div className="mb-6 pb-4 border-b border-stone-800">
                <p className="text-xs sm:text-sm text-stone-400 font-light italic">
                  {selectedMenu.subtitle[lang]}
                </p>
              </div>

              {/* Menu Items List */}
              <div className="space-y-6">
                {selectedMenu.items.map((item, idx) => {
                  const displayPrice =
                    currency === 'USD'
                      ? `$${item.priceUsd}`
                      : `₹${(item.priceUsd * USD_TO_INR_RATE).toLocaleString('en-IN')}`;

                  return (
                    <div
                      key={idx}
                      className="group flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-stone-800/60 last:border-0"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-serif text-base sm:text-lg text-stone-100 font-normal group-hover:text-amber-200 transition-colors">
                            {item.name[lang]}
                          </h4>
                          {item.dietary && (
                            <span className="text-[11px] font-mono text-stone-500 uppercase">
                              [{item.dietary}]
                            </span>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm text-stone-400 font-light max-w-md">
                          {item.description[lang]}
                        </p>
                      </div>

                      <div className="font-serif text-sm sm:text-base font-semibold text-amber-100 tabular-nums shrink-0 self-end sm:self-auto">
                        {displayPrice}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Call to Action */}
            <div className="pt-8 border-t border-stone-800 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-stone-400">
                {lang === 'en'
                  ? 'Private dining pavilions and sommelier pairings available upon request.'
                  : 'निजी भोजन मंडप और वाइन पेयरिंग के लिए अग्रिम बुकिंग की जा सकती है।'}
              </div>
              <button
                type="button"
                onClick={onOpenTableBooking}
                className="w-full sm:w-auto px-6 py-2.5 text-xs sm:text-sm font-semibold text-stone-950 bg-amber-200 hover:bg-amber-100 rounded-lg transition-colors shadow-sm whitespace-nowrap"
              >
                {lang === 'en' ? 'Reserve a Table' : 'टेबल रिज़र्व करें'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
