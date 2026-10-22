import React from 'react';
import { X, Check, BedDouble, Maximize2, Users, Compass, ShieldCheck } from 'lucide-react';
import { RoomSuite, Language, Currency } from '../types/hotel';
import { USD_TO_INR_RATE } from '../data/hotelData';

interface RoomModalProps {
  room: RoomSuite | null;
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  currency: Currency;
  onBookRoom: (roomId: string) => void;
}

export const RoomModal: React.FC<RoomModalProps> = ({
  room,
  isOpen,
  onClose,
  lang,
  currency,
  onBookRoom,
}) => {
  if (!isOpen || !room) return null;

  const displayPrice =
    currency === 'USD'
      ? `$${room.priceUsd.toLocaleString()}`
      : `₹${(room.priceUsd * USD_TO_INR_RATE).toLocaleString('en-IN')}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#12171e] border border-stone-700 rounded-2xl shadow-2xl overflow-hidden my-8">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-stone-300 hover:text-white bg-black/50 hover:bg-black/70 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image Header */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <img
            src={room.image}
            alt={room.title[lang]}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#12171e] via-[#12171e]/30 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <h2 className="font-serif text-2xl sm:text-3xl text-stone-100 font-normal">
              {room.title[lang]}
            </h2>
            <p className="text-sm text-stone-300 font-light mt-1">
              {room.tagline[lang]}
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Quick Specifications Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 px-4 rounded-xl bg-stone-900/60 border border-stone-800 text-xs">
            <div className="flex items-center gap-2 text-stone-300">
              <Maximize2 className="w-4 h-4 text-amber-300 shrink-0" />
              <span>
                {room.sizeSqM} m² / {room.sizeSqFt} sq ft
              </span>
            </div>
            <div className="flex items-center gap-2 text-stone-300">
              <Users className="w-4 h-4 text-amber-300 shrink-0" />
              <span>
                {lang === 'en'
                  ? `Up to ${room.maxGuests} Guests`
                  : `अधिकतम ${room.maxGuests} मेहमान`}
              </span>
            </div>
            <div className="flex items-center gap-2 text-stone-300">
              <BedDouble className="w-4 h-4 text-amber-300 shrink-0" />
              <span className="truncate">{room.bedType[lang]}</span>
            </div>
            <div className="flex items-center gap-2 text-stone-300">
              <Compass className="w-4 h-4 text-amber-300 shrink-0" />
              <span className="truncate">{room.view[lang]}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-200/90 mb-2">
              {lang === 'en' ? 'Suite Overview' : 'सुइट का परिचय'}
            </h3>
            <p className="text-stone-300 text-sm leading-relaxed">
              {room.description[lang]}
            </p>
          </div>

          {/* Inclusions & Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-stone-800">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-200/90 mb-3">
                {lang === 'en' ? 'Bespoke Highlights' : 'विशेष सुविधाएं'}
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-stone-300">
                {room.keyFeatures[lang].map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-200/90 mb-3">
                {lang === 'en' ? 'Signature Inclusions' : 'कमरे में शामिल सुविधाएं'}
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-stone-300">
                {room.detailedAmenities[lang].map((amenity, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-amber-300 mt-0.5 shrink-0" />
                    <span>{amenity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer Bar with Price and CTA */}
          <div className="pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-stone-400">
                {lang === 'en' ? 'Nightly Rate' : 'प्रति रात्रि दर'}
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="font-serif text-2xl sm:text-3xl font-semibold text-amber-100">
                  {displayPrice}
                </span>
                <span className="text-xs text-stone-400">
                  {lang === 'en' ? '/ night + taxes' : '/ रात्रि + कर'}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="w-1/2 sm:w-auto px-5 py-2.5 text-xs sm:text-sm font-medium text-stone-300 hover:text-white border border-stone-700 rounded-lg hover:border-stone-500 transition-colors"
              >
                {lang === 'en' ? 'Close' : 'बंद करें'}
              </button>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onBookRoom(room.id);
                }}
                className="w-1/2 sm:w-auto px-6 py-2.5 text-xs sm:text-sm font-semibold text-stone-950 bg-amber-200 hover:bg-amber-100 rounded-lg transition-colors shadow-md"
              >
                {lang === 'en' ? 'Book This Suite' : 'यह सुइट बुक करें'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
