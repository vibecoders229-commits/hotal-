import React from 'react';
import { Sparkles, Heart, Sun, Users, ArrowUpRight, Check } from 'lucide-react';
import { Language, Currency } from '../types/hotel';
import { USD_TO_INR_RATE } from '../data/hotelData';

interface PackagesSectionProps {
  lang: Language;
  currency: Currency;
  onSelectPackage: (packageName: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({
  lang,
  currency,
  onSelectPackage,
}) => {
  const packages = [
    {
      id: 'romance',
      title: {
        en: 'The Azure Romance & Honeymoon Escape',
        hi: 'अज़्योर रोमांस एवं हनीमून पैकेज',
      },
      duration: {
        en: '4 Days / 3 Nights',
        hi: '4 दिन / 3 रातें',
      },
      priceUsd: 3800,
      description: {
        en: 'An intimate escape crafted for two. Includes private sunset catamaran sailing, a 6-course candlelight dinner on the sand, and daily couples Ayurvedic massages.',
        hi: 'दो लोगों के लिए खास रोमांटिक यात्रा। निजी यॉट यात्रा, समुद्र किनारे कैंडललाइट डिनर और दैनिक स्पा मालिश शामिल।',
      },
      perks: {
        en: [
          'Chilled Dom Pérignon & Caviar on arrival',
          'Private beach torchlight dinner for two',
          '90-min couples stone massage & sound bath',
          'Private Rolls-Royce airport transfers both ways',
        ],
        hi: [
          'आगमन पर शैम्पेन और कैवियार स्वागत',
          'निजी समुद्रतट पर दो लोगों के लिए कैंडललाइट डिनर',
          '90 मिनट की जोड़ों के लिए स्पा मालिश',
          'हवाई अड्डे से दोनों तरफ रोल्स-रॉयस कार पिकअप',
        ],
      },
    },
    {
      id: 'wellness',
      title: {
        en: 'SOMA Ayurvedic Rejuvenation Retreat',
        hi: 'सोमा आयुर्वेदिक स्वास्थ्य एवं योग रिट्रीट',
      },
      duration: {
        en: '6 Days / 5 Nights',
        hi: '6 दिन / 5 रातें',
      },
      priceUsd: 5200,
      description: {
        en: 'A comprehensive detox and restoration program curated by master Ayurvedic vaidyas. Features daily dosha consultations, organic sattvic dining, and private sunrise pranayama.',
        hi: 'आयुर्वेदिक चिकित्सकों द्वारा तैयार सम्पूर्ण स्वास्थ्य एवं शांति कार्यक्रम। व्यक्तिगत परामर्श, सात्विक भोजन और सुबह का प्राणायाम शामिल।',
      },
      perks: {
        en: [
          'Comprehensive initial Ayurvedic pulse analysis',
          'Two customized daily wellness therapies',
          'All organic farm-to-table farm meals included',
          'Unlimited hydrotherapy thermal grotto access',
        ],
        hi: [
          'व्यक्तिगत आयुर्वेदिक नाड़ी परीक्षण एवं परामर्श',
          'प्रतिदिन दो विशेष अनुकूलित स्पा थेरेपी',
          'सभी सात्विक एवं जैविक भोजन शामिल',
          'थर्मल बाथ और स्टीम रूम का असीमित उपयोग',
        ],
      },
    },
    {
      id: 'family',
      title: {
        en: 'Imperial Villa Family Sanctuary',
        hi: 'इंपीरियल विला फैमिली हॉलिडे',
      },
      duration: {
        en: '5 Days / 4 Nights',
        hi: '5 दिन / 4 रातें',
      },
      priceUsd: 7900,
      description: {
        en: 'Palatial private 2-bedroom villa with private heated plunge pool, dedicated 24-hour butler, Kids Discovery Marine club, and private chef garden barbecues.',
        hi: 'निजी पूल और 2 बेडरूम वाला आलीशान विला। 24 घंटे निजी बटलर, बच्चों के लिए किड्स क्लब और शेफ द्वारा निजी बारबेक्यू।',
      },
      perks: {
        en: [
          'Private in-villa Michelin chef barbecue evening',
          'Certified eco-marine guide for family reef snorkel',
          'Complimentary luxury babysitting services',
          'Unlimited bespoke gourmet breakfast buffet',
        ],
        hi: [
          'विला में निजी शेफ द्वारा बारबेक्यू डिनर',
          'परिवार के साथ रीफ स्नॉर्कलिंग गाइड',
          'मुफ्त पेशेवर बेबीसिटिंग सेवा',
          'दैनिक असीमित गॉरमे नाश्ता',
        ],
      },
    },
  ];

  return (
    <section className="py-24 bg-[#0a0d11] border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-widest text-amber-300 font-medium mb-2">
            {lang === 'en' ? 'Curated Journeys' : 'विशेष हॉलिडे पैकेज'}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-100 tracking-tight [text-wrap:balance]">
            {lang === 'en'
              ? 'Bespoke Retreats & Seasonal Residencies'
              : 'विशेष रूप से तैयार किए गए यादगार पैकेज'}
          </h2>
          <p className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed font-light">
            {lang === 'en'
              ? 'Thoughtfully bundled combinations of luxury accommodations, gastronomic tastings, and rejuvenating spa rituals.'
              : 'आवास, स्वादिष्ट भोजन और स्पा चिकित्सा का बेहतरीन और किफायती संयोजन।'}
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => {
            const displayPrice =
              currency === 'USD'
                ? `$${pkg.priceUsd.toLocaleString()}`
                : `₹${(pkg.priceUsd * USD_TO_INR_RATE).toLocaleString('en-IN')}`;

            return (
              <div
                key={pkg.id}
                className="bg-[#11161d] border border-stone-800 hover:border-amber-300/40 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200"
              >
                <div>
                  <div className="text-xs font-mono text-amber-300/90 mb-2">
                    {pkg.duration[lang]}
                  </div>

                  <h3 className="font-serif text-2xl text-stone-100 font-normal">
                    {pkg.title[lang]}
                  </h3>

                  <div className="my-4 font-serif text-2xl text-amber-100 font-semibold">
                    {displayPrice}
                    <span className="text-xs font-sans text-stone-400 font-normal ml-2">
                      {lang === 'en' ? 'per stay' : 'पूरे प्रवास का'}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed mb-6">
                    {pkg.description[lang]}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-stone-800/80">
                    {pkg.perks[lang].map((perk, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-stone-300">
                        <Check className="w-3.5 h-3.5 text-amber-300 mt-0.5 shrink-0" />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-stone-800">
                  <button
                    type="button"
                    onClick={() => onSelectPackage(pkg.title[lang])}
                    className="w-full py-2.5 text-xs sm:text-sm font-semibold tracking-wide text-stone-950 bg-amber-200 hover:bg-amber-100 rounded-lg transition-colors shadow-sm"
                  >
                    {lang === 'en' ? 'Reserve This Package' : 'यह पैकेज बुक करें'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
