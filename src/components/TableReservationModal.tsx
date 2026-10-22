import React, { useState } from 'react';
import { X, Utensils, Check, Clock, Calendar, Users } from 'lucide-react';
import { Language } from '../types/hotel';

interface TableReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const TableReservationModal: React.FC<TableReservationModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  if (!isOpen) return null;

  const today = new Date().toISOString().split('T')[0];

  const [date, setDate] = useState(today);
  const [time, setTime] = useState('19:30');
  const [partySize, setPartySize] = useState(2);
  const [venue, setVenue] = useState('rooftop');
  const [guestName, setGuestName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsConfirmed(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-[#11161d] border border-stone-700/80 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-stone-800 flex items-center justify-between">
          <div>
            <div className="text-[11px] uppercase tracking-widest text-amber-300 font-semibold">
              {lang === 'en' ? 'Gastronomic Reservation' : 'रेस्तरां टेबल बुकिंग'}
            </div>
            <h3 className="font-serif text-xl text-stone-100 font-normal">
              {lang === 'en' ? 'Reserve a Dining Table' : 'अपनी टेबल सुरक्षित करें'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isConfirmed ? (
          <div className="p-6 sm:p-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-7 h-7 stroke-[3]" />
            </div>
            <h4 className="font-serif text-2xl text-stone-100 font-normal">
              {lang === 'en' ? 'Table Reserved!' : 'टेबल बुक हो गई है!'}
            </h4>
            <p className="text-xs sm:text-sm text-stone-300 font-light">
              {lang === 'en'
                ? `We look forward to welcoming ${guestName} for ${partySize} guests at ${time} on ${date}. A confirmation SMS has been dispatched.`
                : `${guestName} जी, ${date} को शाम ${time} बजे ${partySize} व्यक्तियों के लिए आपकी टेबल सुरक्षित कर ली गई है।`}
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 text-xs sm:text-sm font-semibold text-stone-950 bg-amber-200 hover:bg-amber-100 rounded-lg transition-colors"
              >
                {lang === 'en' ? 'Close' : 'बंद करें'}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs sm:text-sm">
            <div>
              <label className="text-xs uppercase tracking-wider text-stone-400 font-medium block mb-1">
                {lang === 'en' ? 'Select Dining Venue' : 'रेस्तरां चुनें'}
              </label>
              <select
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
                className="w-full bg-[#182028] border border-stone-700 rounded-lg px-3 py-2 text-stone-100 focus:outline-none focus:border-amber-400"
              >
                <option value="rooftop">
                  {lang === 'en' ? 'L’Aura Rooftop & Champagne Terrace' : 'एल’ऑरा रूफटॉप एवं शैम्पेन टेरेस'}
                </option>
                <option value="seaside">
                  {lang === 'en' ? 'Saffron Beachside Pavilion' : 'केसर बीचसाइड मंडप'}
                </option>
                <option value="cellar">
                  {lang === 'en' ? 'The Sommelier Private Wine Cellar' : 'प्राइवेट वाइन सेलर'}
                </option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs uppercase tracking-wider text-stone-400 font-medium block mb-1">
                  {lang === 'en' ? 'Date' : 'तारीख'}
                </label>
                <input
                  type="date"
                  value={date}
                  min={today}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-[#182028] border border-stone-700 rounded-lg px-3 py-2 text-stone-100 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-stone-400 font-medium block mb-1">
                  {lang === 'en' ? 'Preferred Time' : 'समय'}
                </label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-[#182028] border border-stone-700 rounded-lg px-3 py-2 text-stone-100 focus:outline-none"
                >
                  {['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'].map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider text-stone-400 font-medium block mb-1">
                {lang === 'en' ? 'Party Size' : 'अतिथियों की संख्या'}
              </label>
              <select
                value={partySize}
                onChange={(e) => setPartySize(Number(e.target.value))}
                className="w-full bg-[#182028] border border-stone-700 rounded-lg px-3 py-2 text-stone-100 focus:outline-none"
              >
                {[1, 2, 3, 4, 5, 6, 8, 10].map((n) => (
                  <option key={n} value={n}>
                    {n} {lang === 'en' ? (n === 1 ? 'Guest' : 'Guests') : 'व्यक्ति'}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider text-stone-400 font-medium block mb-1">
                {lang === 'en' ? 'Guest Name' : 'अतिथि का नाम'} *
              </label>
              <input
                type="text"
                required
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder={lang === 'en' ? 'e.g. Laurent Vane' : 'उदा. विकास कपूर'}
                className="w-full bg-[#182028] border border-stone-700 rounded-lg px-3 py-2 text-stone-100 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs uppercase tracking-wider text-stone-400 font-medium block mb-1">
                  {lang === 'en' ? 'Email' : 'ईमेल'} *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@domain.com"
                  className="w-full bg-[#182028] border border-stone-700 rounded-lg px-3 py-2 text-stone-100 focus:outline-none"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-stone-400 font-medium block mb-1">
                  {lang === 'en' ? 'Phone' : 'फ़ोन'} *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 555 0100"
                  className="w-full bg-[#182028] border border-stone-700 rounded-lg px-3 py-2 text-stone-100 focus:outline-none"
                />
              </div>
            </div>

            <div className="pt-4 flex items-center justify-end gap-3 border-t border-stone-800">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-stone-400 hover:text-white"
              >
                {lang === 'en' ? 'Cancel' : 'रद्द करें'}
              </button>
              <button
                type="submit"
                className="px-5 py-2 text-xs sm:text-sm font-semibold text-stone-950 bg-amber-200 hover:bg-amber-100 rounded-lg transition-colors"
              >
                {lang === 'en' ? 'Confirm Table' : 'टेबल बुक करें'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
