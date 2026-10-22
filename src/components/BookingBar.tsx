import React, { useState } from 'react';
import { Calendar, Users, BedDouble, ArrowRight } from 'lucide-react';
import { Language } from '../types/hotel';

interface BookingBarProps {
  lang: Language;
  onSearch: (params: {
    checkIn: string;
    checkOut: string;
    adults: number;
    children: number;
    category: string;
  }) => void;
}

export const BookingBar: React.FC<BookingBarProps> = ({ lang, onSearch }) => {
  // Defaults: tomorrow and 3 days later
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const checkoutDefault = new Date(today);
  checkoutDefault.setDate(today.getDate() + 4);

  const formatDate = (d: Date) => d.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(formatDate(tomorrow));
  const [checkOut, setCheckOut] = useState(formatDate(checkoutDefault));
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [category, setCategory] = useState('all');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      checkIn,
      checkOut,
      adults,
      children,
      category,
    });
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 -mt-14 relative z-20">
      <form
        onSubmit={handleSubmit}
        className="bg-[#12171d] border border-stone-700/80 rounded-xl p-4 sm:p-5 shadow-2xl backdrop-blur-xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          {/* Check-In */}
          <div className="space-y-1.5">
            <label className="text-xs uppercase tracking-wider text-stone-400 font-semibold flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-amber-300" />
              <span>{lang === 'en' ? 'Check-In' : 'आगमन (चेक-इन)'}</span>
            </label>
            <input
              type="date"
              value={checkIn}
              min={formatDate(today)}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full bg-[#182028] border border-stone-700 rounded-lg px-3.5 py-2.5 text-sm text-stone-100 focus:outline-none focus:border-amber-400/80"
              required
            />
          </div>

          {/* Check-Out */}
          <div className="space-y-1.5">
            <label className="text-xs uppercase tracking-wider text-stone-400 font-semibold flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-amber-300" />
              <span>{lang === 'en' ? 'Check-Out' : 'प्रस्थान (चेक-आउट)'}</span>
            </label>
            <input
              type="date"
              value={checkOut}
              min={checkIn}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full bg-[#182028] border border-stone-700 rounded-lg px-3.5 py-2.5 text-sm text-stone-100 focus:outline-none focus:border-amber-400/80"
              required
            />
          </div>

          {/* Guests */}
          <div className="space-y-1.5">
            <label className="text-xs uppercase tracking-wider text-stone-400 font-semibold flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-amber-300" />
              <span>{lang === 'en' ? 'Guests' : 'मेहमान'}</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              <select
                value={adults}
                onChange={(e) => setAdults(Number(e.target.value))}
                className="bg-[#182028] border border-stone-700 rounded-lg px-3 py-2.5 text-sm text-stone-100 focus:outline-none focus:border-amber-400/80"
              >
                {[1, 2, 3, 4, 6].map((num) => (
                  <option key={num} value={num}>
                    {num} {lang === 'en' ? (num === 1 ? 'Adult' : 'Adults') : 'वयस्क'}
                  </option>
                ))}
              </select>
              <select
                value={children}
                onChange={(e) => setChildren(Number(e.target.value))}
                className="bg-[#182028] border border-stone-700 rounded-lg px-3 py-2.5 text-sm text-stone-100 focus:outline-none focus:border-amber-400/80"
              >
                {[0, 1, 2, 3].map((num) => (
                  <option key={num} value={num}>
                    {num} {lang === 'en' ? (num === 1 ? 'Child' : 'Children') : 'बच्चे'}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Action Button */}
          <div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold tracking-wide text-stone-950 bg-amber-200 hover:bg-amber-100 rounded-lg transition-colors shadow-md whitespace-nowrap"
            >
              <span>{lang === 'en' ? 'Check Availability' : 'उपलब्धता जांचें'}</span>
              <ArrowRight className="w-4 h-4 text-stone-900" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
