import React, { useState } from 'react';
import { ArrowUpRight, BedDouble, Maximize2, Users, Compass } from 'lucide-react';
import { RoomSuite, Language, Currency } from '../types/hotel';
import { ROOMS_DATA, USD_TO_INR_RATE } from '../data/hotelData';

interface RoomsSectionProps {
  lang: Language;
  currency: Currency;
  onSelectRoomDetails: (room: RoomSuite) => void;
  onBookRoom: (roomId: string) => void;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({
  lang,
  currency,
  onSelectRoomDetails,
  onBookRoom,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ocean' | 'suite' | 'villa' | 'deluxe'>('all');

  const filterTabs = [
    { id: 'all', label: lang === 'en' ? 'All Accommodations' : 'सभी आवास' },
    { id: 'ocean', label: lang === 'en' ? 'Oceanfront Suites' : 'ओशनफ्रंट सुइट्स' },
    { id: 'villa', label: lang === 'en' ? 'Private Villas' : 'निजी विला' },
    { id: 'deluxe', label: lang === 'en' ? 'Deluxe Rooms' : 'डीलक्स कमरे' },
  ];

  const filteredRooms =
    activeFilter === 'all'
      ? ROOMS_DATA
      : ROOMS_DATA.filter((r) => r.category === activeFilter);

  return (
    <section id="suites" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="text-xs uppercase tracking-widest text-amber-300/90 font-medium mb-2">
            {lang === 'en' ? 'Refined Accommodations' : 'आलीशान आवास'}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-100 tracking-tight">
            {lang === 'en' ? 'Sanctuary of Suites & Villas' : 'सुइट्स और विला की दुनिया'}
          </h2>
        </div>

        {/* Interactive Filter Tabs (Functional buttons with clean states, NO candy badges) */}
        <div className="flex items-center flex-wrap gap-2 p-1 bg-stone-900/80 border border-stone-800 rounded-lg">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all duration-150 whitespace-nowrap shrink-0 ${
                activeFilter === tab.id
                  ? 'bg-amber-200 text-stone-950 font-semibold shadow-sm'
                  : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Suites Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredRooms.map((room) => {
          const displayPrice =
            currency === 'USD'
              ? `$${room.priceUsd.toLocaleString()}`
              : `₹${(room.priceUsd * USD_TO_INR_RATE).toLocaleString('en-IN')}`;

          return (
            <article
              key={room.id}
              className="group bg-[#11161d] border border-stone-800 hover:border-stone-700 rounded-xl overflow-hidden flex flex-col transition-all duration-200"
            >
              {/* Media Slot with Fallback Container */}
              <div className="relative h-72 w-full overflow-hidden bg-stone-900">
                <img
                  src={room.image}
                  alt={room.title[lang]}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11161d] via-transparent to-black/20" />

                {/* Price Display */}
                <div className="absolute bottom-4 left-4 bg-stone-950/85 backdrop-blur-md border border-stone-800 px-3.5 py-1.5 rounded-lg">
                  <span className="font-serif text-lg font-semibold text-amber-100">
                    {displayPrice}
                  </span>
                  <span className="text-xs text-stone-400 ml-1.5">
                    {lang === 'en' ? '/ night' : '/ रात'}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between space-y-5">
                <div>
                  {/* Clean unboxed metadata with subtle typographic separators */}
                  <div className="flex items-center flex-wrap gap-2 text-xs text-stone-400 mb-2.5">
                    <span>{room.sizeSqM} m²</span>
                    <span aria-hidden="true">·</span>
                    <span>{room.bedType[lang]}</span>
                    <span aria-hidden="true">·</span>
                    <span>{room.view[lang]}</span>
                    <span aria-hidden="true">·</span>
                    <span>
                      {lang === 'en'
                        ? `Up to ${room.maxGuests} Guests`
                        : `${room.maxGuests} मेहमान`}
                    </span>
                  </div>

                  {/* Suite Title */}
                  <h3 className="font-serif text-2xl text-stone-100 font-normal group-hover:text-amber-200 transition-colors">
                    {room.title[lang]}
                  </h3>

                  <p className="text-sm text-stone-300 font-light mt-2 line-clamp-2 leading-relaxed">
                    {room.description[lang]}
                  </p>

                  {/* Highlights Bullet points */}
                  <div className="mt-4 pt-4 border-t border-stone-800/80 space-y-1.5">
                    {room.keyFeatures[lang].slice(0, 2).map((feature, idx) => (
                      <div
                        key={idx}
                        className="text-xs text-stone-400 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-amber-300/80 rounded-full shrink-0" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => onSelectRoomDetails(room)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-300 hover:text-amber-200 transition-colors py-2 whitespace-nowrap"
                  >
                    <span>{lang === 'en' ? 'View Details' : 'विवरण देखें'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onBookRoom(room.id)}
                    className="px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-wide text-stone-950 bg-amber-200 hover:bg-amber-100 rounded-lg transition-colors shadow-sm whitespace-nowrap"
                  >
                    {lang === 'en' ? 'Book Suite' : 'सुइट बुक करें'}
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
