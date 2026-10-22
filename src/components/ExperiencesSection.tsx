import React from 'react';
import { Compass, Ship, Wind, Moon, ArrowUpRight } from 'lucide-react';
import { Language } from '../types/hotel';

interface ExperiencesSectionProps {
  lang: Language;
  onInquireExperience: (title: string) => void;
}

export const ExperiencesSection: React.FC<ExperiencesSectionProps> = ({
  lang,
  onInquireExperience,
}) => {
  const experiences = [
    {
      index: '01',
      title: {
        en: 'Private Sunset Yacht Charter',
        hi: 'निजी सूर्यास्त यॉट यात्रा',
      },
      tagline: {
        en: 'Sail along emerald sea caves and dolphin lagoons aboard a 65ft catamaran',
        hi: '65 फीट के लग्जरी कैटामारन पर खूबसूरत समुद्री गुफाओं और डॉल्फ़िन की सैर',
      },
      duration: '4 Hours',
      inclusion: {
        en: 'Champagne, Caviar, Private Skipper',
        hi: 'शैम्पेन, कैवियार और कैप्टन सेवा',
      },
    },
    {
      index: '02',
      title: {
        en: 'Chef’s Table in the Organic Greenhouse',
        hi: 'जैविक बगीचे में शेफ स्पेशल डिनर',
      },
      tagline: {
        en: 'Bespoke 6-course garden-to-table dining prepared before your eyes',
        hi: 'आपकी आँखों के सामने ताज़ा चुनी गई सामग्रियों से बना 6-कोर्स स्वादिष्ट भोजन',
      },
      duration: '3 Hours',
      inclusion: {
        en: 'Rare Vintage Wines, Sommelier Guide',
        hi: 'दुर्लभ वाइन एवं शेफ गाइड',
      },
    },
    {
      index: '03',
      title: {
        en: 'Cliffside Stargazing with Resident Astronomer',
        hi: 'क्लिफसाइड खगोलीय अवलोकन एवं तारे दर्शन',
      },
      tagline: {
        en: 'Explore deep celestial nebulas through a military-grade Meade telescope',
        hi: 'आधुनिक शक्तिशाली दूरबीन से अंतरिक्ष के तारों और ग्रहों का अध्ययन',
      },
      duration: '2 Hours',
      inclusion: {
        en: 'Mulled Wine, Artisan Sweets, Sky Map',
        hi: 'हॉट बेवरेज, मिठाइयां और स्काई मैप',
      },
    },
    {
      index: '04',
      title: {
        en: 'Helicopter Coastal Panorama Tour',
        hi: 'हेलिकॉप्टर तटीय हवाई सैर',
      },
      tagline: {
        en: 'Ascend directly from the resort helipad to behold the dramatic coastline',
        hi: 'रिज़ॉर्ट के हेलीपैड से सीधे उड़ान भरकर अद्भुत तटीय दृश्यों का हवाई आनंद लें',
      },
      duration: '45 Minutes',
      inclusion: {
        en: 'Bose Noise-Cancelling Audio, Pilot Tour',
        hi: 'बोस हेडफोन और पायलट गाइड',
      },
    },
  ];

  return (
    <section id="experiences" className="py-24 bg-[#090c0f] border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs uppercase tracking-widest text-amber-300 font-medium mb-2">
              {lang === 'en' ? 'Bespoke Escapes' : 'अनोखे अनुभव'}
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-100 tracking-tight">
              {lang === 'en' ? 'Curated Private Moments' : 'यादगार निजी रोमांच'}
            </h2>
          </div>
          <p className="max-w-md text-stone-400 text-sm font-light">
            {lang === 'en'
              ? 'Our dedicated Les Clefs d’Or concierges orchestrate one-of-a-kind journeys tailored precisely to your passions.'
              : 'हमारे विशेष कंसीयर्ज आपकी रुचि और पसंद के अनुसार खास यात्राएं और अनुभव आयोजित करते हैं।'}
          </p>
        </div>

        {/* Editorial Numbered Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp) => (
            <div
              key={exp.index}
              className="group bg-[#11161d] border border-stone-800 hover:border-amber-300/40 rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-2xl sm:text-3xl font-light text-stone-500 group-hover:text-amber-200/90 transition-colors">
                    {exp.index}.
                  </span>
                  <div className="text-xs text-stone-400 font-mono">
                    {exp.duration}
                  </div>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-stone-100 font-normal group-hover:text-amber-100 transition-colors">
                  {exp.title[lang]}
                </h3>

                <p className="text-sm text-stone-300 font-light mt-2.5 leading-relaxed">
                  {exp.tagline[lang]}
                </p>

                <div className="mt-4 pt-4 border-t border-stone-800/80 text-xs text-stone-400 flex items-center justify-between">
                  <span>{lang === 'en' ? 'Inclusions:' : 'शामिल:'} {exp.inclusion[lang]}</span>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-stone-800/60 flex justify-end">
                <button
                  type="button"
                  onClick={() => onInquireExperience(exp.title[lang])}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-200 hover:text-white transition-colors"
                >
                  <span>{lang === 'en' ? 'Inquire with Concierge' : 'कंसीयर्ज से पूछें'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
