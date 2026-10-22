import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Language } from '../types/hotel';
import { HOTEL_IMAGES } from '../data/hotelData';

interface GallerySectionProps {
  lang: Language;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'pool' | 'suites' | 'dining' | 'spa'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryItems = [
    {
      category: 'pool',
      image: HOTEL_IMAGES.hero,
      title: {
        en: 'Twilight Infinity Lagoon & Peninsula Shore',
        hi: 'गोधूलि वेला में इन्फिनिटी लैगून एवं तटीय किनारा',
      },
      subtitle: {
        en: 'Heated oceanfront waters illuminated under the evening stars',
        hi: 'शाम के तारों तले गर्म समुद्री जल का मनोरम दृश्य',
      },
    },
    {
      category: 'pool',
      image: HOTEL_IMAGES.pool,
      title: {
        en: 'The Azure Horizon Pool & Submerged Loungers',
        hi: 'अज़्योर होराइज़न पूल और सन लाउंजर',
      },
      subtitle: {
        en: 'Panoramic sapphire bay view with custom teak cabanas',
        hi: 'नीली खाड़ी के मनोरम नज़ारे के साथ निजी कबाना',
      },
    },
    {
      category: 'suites',
      image: HOTEL_IMAGES.suiteOcean,
      title: {
        en: 'The Royal Oceanfront Master Suite',
        hi: 'रॉयल ओशनफ्रंट मास्टर सुइट',
      },
      subtitle: {
        en: 'Hand-carved marble details and floor-to-ceiling horizon glass',
        hi: 'हाथ से तराशा गया संगमरमर और कांच की भव्य खिड़कियां',
      },
    },
    {
      category: 'dining',
      image: HOTEL_IMAGES.dining,
      title: {
        en: 'L’Aura Rooftop Gastronomy & Wine Cellar',
        hi: 'एल’ऑरा रूफटॉप भोजनशाला एवं वाइन सेलर',
      },
      subtitle: {
        en: 'Candlelit dining overlooking the moonlit sapphire bay',
        hi: 'चांदनी रात में नीले समुद्र के ऊपर कैंडललाइट डिनर',
      },
    },
    {
      category: 'dining',
      image: HOTEL_IMAGES.beachDinner,
      title: {
        en: 'Private Beachside Candlelight Pavilion',
        hi: 'निजी समुद्रतट पर कैंडललाइट डाइनिंग',
      },
      subtitle: {
        en: 'Torches, rose petals, and personalized 6-course degustation',
        hi: 'मशालों और गुलाब की पंखुड़ियों से सजा निजी 6-कोर्स भोजन',
      },
    },
    {
      category: 'spa',
      image: HOTEL_IMAGES.spa,
      title: {
        en: 'SOMA Ayurvedic Thermal Baths & Stone Grotto',
        hi: 'सोमा आयुर्वेदिक थर्मल बाथ एवं स्टोन ग्रोटो',
      },
      subtitle: {
        en: 'Volcanic mineral waters, orchids, and holistic tranquil energy',
        hi: 'ज्वालामुखी खनिज जल, आर्किड फूल और गहन शांति का अनुभव',
      },
    },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-stone-800">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="text-xs uppercase tracking-widest text-amber-300 font-medium mb-2">
            {lang === 'en' ? 'Visual Splendor' : 'फोटो गैलरी'}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-100 tracking-tight">
            {lang === 'en' ? 'A Sanctuary in Frames' : 'द ग्रैंड अज़्योर की खूबसूरत झलक'}
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center flex-wrap gap-2 p-1 bg-stone-900/80 border border-stone-800 rounded-lg">
          {[
            { id: 'all', label: lang === 'en' ? 'All Visuals' : 'सभी तस्वीरें' },
            { id: 'pool', label: lang === 'en' ? 'Pools & Lagoon' : 'पूल एवं लैगून' },
            { id: 'suites', label: lang === 'en' ? 'Suites' : 'सुइट्स' },
            { id: 'dining', label: lang === 'en' ? 'Dining & Beach' : 'भोजन एवं बीच' },
            { id: 'spa', label: lang === 'en' ? 'SOMA Spa' : 'सोमा स्पा' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveCategory(tab.id as any)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 ${
                activeCategory === tab.id
                  ? 'bg-amber-200 text-stone-950 font-semibold shadow-sm'
                  : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Responsive Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, idx) => (
          <div
            key={idx}
            onClick={() => openLightbox(idx)}
            className="group relative cursor-pointer rounded-xl overflow-hidden bg-stone-900 border border-stone-800 hover:border-amber-300/50 transition-all duration-200 aspect-[4/3]"
          >
            <img
              src={item.image}
              alt={item.title[lang]}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <div>
                <h4 className="font-serif text-base text-stone-100 font-normal group-hover:text-amber-200 transition-colors">
                  {item.title[lang]}
                </h4>
                <p className="text-xs text-stone-400 font-light mt-0.5 line-clamp-1">
                  {item.subtitle[lang]}
                </p>
              </div>
              <div className="p-2 rounded-lg bg-stone-900/80 text-stone-300 group-hover:text-white group-hover:bg-amber-200 group-hover:text-stone-950 transition-colors shrink-0">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8">
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 text-stone-300 hover:text-white bg-stone-900/80 hover:bg-stone-800 rounded-full transition-colors z-20"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={prevLightbox}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-2.5 text-stone-300 hover:text-white bg-stone-900/80 hover:bg-stone-800 rounded-full transition-colors z-20"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={nextLightbox}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-2.5 text-stone-300 hover:text-white bg-stone-900/80 hover:bg-stone-800 rounded-full transition-colors z-20"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-5xl max-h-[85vh] flex flex-col items-center">
            <img
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].title[lang]}
              className="max-h-[70vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
            />
            <div className="mt-4 text-center">
              <h3 className="font-serif text-xl text-stone-100">
                {filteredItems[lightboxIndex].title[lang]}
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 font-light mt-1">
                {filteredItems[lightboxIndex].subtitle[lang]}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
