import React, { useState } from 'react';
import { MapPin, Phone, Mail, Navigation, ChevronDown, ChevronUp, Compass, Clock } from 'lucide-react';
import { Language } from '../types/hotel';
import { HOTEL_FAQS } from '../data/hotelData';

interface LocationSectionProps {
  lang: Language;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ lang }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section id="location" className="py-24 bg-[#0a0d11] border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Location & Arrival details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs uppercase tracking-widest text-amber-300 font-medium">
              {lang === 'en' ? 'Private Peninsula' : 'निजी प्रायद्वीप एवं स्थान'}
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-stone-100 tracking-tight">
              {lang === 'en' ? 'Arrival & Secluded Setting' : 'पहुंचने का मार्ग एवं स्थान'}
            </h2>

            <p className="text-stone-300 text-sm leading-relaxed font-light">
              {lang === 'en'
                ? 'The Grand Azure occupies a private 85-acre peninsula overlooking the crystal sapphire waters. Sheltered by dramatic limestone bluffs, the resort guarantees complete serenity while remaining conveniently accessible by private jet, yacht, or luxury chauffeur.'
                : 'द ग्रैंड अज़्योर 85 एकड़ के निजी प्रायद्वीप पर स्थित है। चारों तरफ से प्राकृतिक सौंदर्य से घिरा यह रिज़ॉर्ट संपूर्ण एकांत और शांति प्रदान करता है, जहाँ निजी कार, हेलिकॉप्टर या यॉट से आसानी से पहुँचा जा सकता है।'}
            </p>

            {/* Practical Travel Details */}
            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-[#11161d] border border-stone-800 flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-stone-300">
                  <div className="font-medium text-stone-100">
                    {lang === 'en' ? 'Peninsula Cove, Coastal Bay Route 101' : 'प्रायद्वीप खाड़ी, कोस्टल बे रूट 101'}
                  </div>
                  <div className="text-stone-400 mt-0.5">
                    {lang === 'en'
                      ? '35 minutes from International Airport (Private Chauffeur Included)'
                      : 'अंतर्राष्ट्रीय हवाई अड्डे से 35 मिनट की दूरी (निजी कार पिकअप उपलब्ध)'}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#11161d] border border-stone-800 flex items-start gap-3.5">
                <Compass className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-stone-300">
                  <div className="font-medium text-stone-100">
                    {lang === 'en' ? 'Resort Private Helipad & Marina' : 'निजी हेलीपैड और यॉट मरीना'}
                  </div>
                  <div className="text-stone-400 mt-0.5">
                    {lang === 'en'
                      ? 'GPS: 18°24\'N, 73°45\'E · Deep-water berthing up to 180ft yachts'
                      : 'जीपीएस: 18°24\'N, 73°45\'E · 180 फीट तक के विशाल यॉट के लिए सुरक्षित डॉक'}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#11161d] border border-stone-800 flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-stone-300">
                  <div className="font-medium text-stone-100">
                    {lang === 'en' ? 'Direct Concierge Desk' : '24 घंटे कंसीयर्ज सहायता'}
                  </div>
                  <div className="text-stone-400 mt-0.5 flex flex-wrap gap-x-4">
                    <span>+1 (800) 555-AZURE</span>
                    <span>concierge@grandazure.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Frequently Asked Questions Accordion */}
          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-widest text-stone-400 font-semibold mb-2">
              {lang === 'en' ? 'Guest Inquiries' : 'अक्सर पूछे जाने वाले सवाल'}
            </div>
            <h3 className="font-serif text-2xl text-stone-100 font-normal mb-6">
              {lang === 'en' ? 'Frequently Answered Questions' : 'प्रायः पूछे जाने वाले प्रश्न'}
            </h3>

            <div className="space-y-3">
              {HOTEL_FAQS.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="bg-[#11161d] border border-stone-800 rounded-xl overflow-hidden transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 text-stone-100 hover:text-amber-200 transition-colors"
                    >
                      <span className="font-medium text-sm sm:text-base">
                        {faq.question[lang]}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-amber-300 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-stone-400 text-xs sm:text-sm leading-relaxed border-t border-stone-800/60 pt-3">
                        {faq.answer[lang]}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
