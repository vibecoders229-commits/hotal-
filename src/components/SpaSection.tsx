import React, { useState } from 'react';
import { Sparkles, Clock, Check, Leaf } from 'lucide-react';
import { Language, Currency } from '../types/hotel';
import { SPA_TREATMENTS, HOTEL_IMAGES, USD_TO_INR_RATE } from '../data/hotelData';

interface SpaSectionProps {
  lang: Language;
  currency: Currency;
  onBookSpa: (treatmentName: string) => void;
}

export const SpaSection: React.FC<SpaSectionProps> = ({
  lang,
  currency,
  onBookSpa,
}) => {
  return (
    <section id="spa" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 2-Column Split: Editorial & Treatments */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Editorial & Image */}
        <div className="lg:col-span-6 space-y-6">
          <div className="text-xs uppercase tracking-widest text-amber-300 font-medium">
            {lang === 'en' ? 'Holistic Wellness Sanctuary' : 'आरोग्य एवं आयुर्वेदिक स्पा'}
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-100 tracking-tight [text-wrap:balance]">
            {lang === 'en'
              ? 'SOMA Ayurvedic & Thalassotherapy Sanctuary'
              : 'सोमा आयुर्वेदिक एवं हाइड्रोथेरेपी हीलिंग सेंटर'}
          </h2>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light">
            {lang === 'en'
              ? 'Rooted in five millennia of traditional Ayurvedic knowledge paired with modern thalassotherapy, SOMA restores mental clarity and bodily vitality. Immerse in volcanic stone thermal pools, Himalayan salt grottos, and bespoke organic herbal oil therapies.'
              : 'हज़ारों साल पुराने आयुर्वेदिक ज्ञान और आधुनिक समुद्री जल चिकित्सा का अद्भुत मेल। गर्म ज्वालामुखी पत्थरों, हर्बल बाथ और हिमालयी साल्ट सौना के साथ अपने तन और मन को नवजीवन दें।'}
          </p>

          <div className="relative rounded-2xl overflow-hidden h-72 sm:h-80 border border-stone-800 shadow-xl">
            <img
              src={HOTEL_IMAGES.spa}
              alt="SOMA Wellness Spa and Relaxation Pool"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-stone-300 bg-stone-950/80 backdrop-blur-md px-4 py-2 rounded-lg border border-stone-800">
              <span>{lang === 'en' ? 'Open Daily: 7:00 AM – 9:00 PM' : 'दैनिक समय: सुबह 7:00 से रात 9:00'}</span>
              <span>{lang === 'en' ? 'Private Herbal Saunas Included' : 'निजी स्टीम रूम उपलब्ध'}</span>
            </div>
          </div>
        </div>

        {/* Right Treatment Cards */}
        <div className="lg:col-span-6 space-y-4">
          <h3 className="text-xs uppercase tracking-widest text-stone-400 font-semibold mb-2">
            {lang === 'en' ? 'Signature Holistic Rituals' : 'विशेष स्पा थेरेपी'}
          </h3>

          <div className="space-y-4">
            {SPA_TREATMENTS.map((treatment) => {
              const displayPrice =
                currency === 'USD'
                  ? `$${treatment.priceUsd}`
                  : `₹${(treatment.priceUsd * USD_TO_INR_RATE).toLocaleString('en-IN')}`;

              return (
                <div
                  key={treatment.id}
                  className="bg-[#11161d] border border-stone-800 hover:border-stone-700 rounded-xl p-5 sm:p-6 transition-all duration-200"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h4 className="font-serif text-lg text-stone-100 font-normal">
                        {treatment.name[lang]}
                      </h4>
                      <div className="flex items-center gap-3 text-xs text-stone-400 mt-1">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-amber-300" />
                          <span>{treatment.duration}</span>
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="text-amber-200/90 font-medium">{displayPrice}</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => onBookSpa(treatment.name[lang])}
                      className="px-3.5 py-1.5 text-xs font-semibold text-stone-900 bg-amber-200 hover:bg-amber-100 rounded-md transition-colors whitespace-nowrap shrink-0"
                    >
                      {lang === 'en' ? 'Book Ritual' : 'थेरेपी चुनें'}
                    </button>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed mt-2">
                    {treatment.description[lang]}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Complimentary Perks Banner */}
          <div className="p-4 rounded-xl bg-stone-900/40 border border-stone-800 text-xs text-stone-400 flex items-center gap-3">
            <Leaf className="w-5 h-5 text-amber-300 shrink-0" />
            <span>
              {lang === 'en'
                ? 'All resort guests enjoy complimentary access to the Hydrotherapy circuit, Steam grotto, and morning beach Yoga.'
                : 'सभी अतिथियों के लिए हाइड्रोथेरेपी थर्मल पूल, स्टीम रूम और सुबह के बीच योग सत्र बिल्कुल मुफ्त हैं।'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
