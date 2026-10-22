import React, { useState, useEffect } from 'react';
import { X, Calendar, Users, BedDouble, Check, Download, Printer, ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react';
import { RoomSuite, Language, Currency, BookingVoucher } from '../types/hotel';
import { ROOMS_DATA, ADDON_SERVICES, USD_TO_INR_RATE } from '../data/hotelData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  currency: Currency;
  initialRoomId?: string;
  initialCheckIn?: string;
  initialCheckOut?: string;
  initialAdults?: number;
  initialChildren?: number;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  lang,
  currency,
  initialRoomId,
  initialCheckIn,
  initialCheckOut,
  initialAdults = 2,
  initialChildren = 0,
}) => {
  // Defaults
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const checkoutDefault = new Date(today);
  checkoutDefault.setDate(today.getDate() + 4);

  const formatDate = (d: Date) => d.toISOString().split('T')[0];

  const [step, setStep] = useState<'details' | 'addons' | 'guest' | 'confirmed'>('details');

  const [selectedRoomId, setSelectedRoomId] = useState<string>(
    initialRoomId || ROOMS_DATA[0].id
  );
  const [checkIn, setCheckIn] = useState<string>(
    initialCheckIn || formatDate(tomorrow)
  );
  const [checkOut, setCheckOut] = useState<string>(
    initialCheckOut || formatDate(checkoutDefault)
  );
  const [adults, setAdults] = useState<number>(initialAdults);
  const [children, setChildren] = useState<number>(initialChildren);

  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  // Guest details
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [voucher, setVoucher] = useState<BookingVoucher | null>(null);

  // Sync initial props
  useEffect(() => {
    if (initialRoomId) setSelectedRoomId(initialRoomId);
    if (initialCheckIn) setCheckIn(initialCheckIn);
    if (initialCheckOut) setCheckOut(initialCheckOut);
    if (initialAdults) setAdults(initialAdults);
    if (initialChildren !== undefined) setChildren(initialChildren);
  }, [initialRoomId, initialCheckIn, initialCheckOut, initialAdults, initialChildren]);

  // Calculate nights
  const calculateNights = () => {
    const inDate = new Date(checkIn);
    const outDate = new Date(checkOut);
    const diffTime = outDate.getTime() - inDate.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
  };

  const nights = calculateNights();
  const selectedRoom =
    ROOMS_DATA.find((r) => r.id === selectedRoomId) || ROOMS_DATA[0];

  // Pricing calculations
  const roomCostUsd = selectedRoom.priceUsd * nights;

  const addonsCostUsd = selectedAddons.reduce((sum, addonId) => {
    const addon = ADDON_SERVICES.find((a) => a.id === addonId);
    if (!addon) return sum;
    if (addon.id === 'daily-breakfast') {
      return sum + addon.priceUsd * nights * (adults + children);
    }
    return sum + addon.priceUsd;
  }, 0);

  const subtotalUsd = roomCostUsd + addonsCostUsd;
  const taxUsd = Math.round(subtotalUsd * 0.12);
  const totalUsd = subtotalUsd + taxUsd;

  const formatPrice = (usd: number) => {
    if (currency === 'USD') {
      return `$${usd.toLocaleString()}`;
    }
    return `₹${Math.round(usd * USD_TO_INR_RATE).toLocaleString('en-IN')}`;
  };

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((item) => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const handleGuestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const generatedCode = `AZR-${new Date().getFullYear()}-${Math.floor(
        1000 + Math.random() * 9000
      )}`;

      const createdVoucher: BookingVoucher = {
        bookingId: generatedCode,
        bookedAt: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
        guestName: fullName,
        email,
        phone,
        roomTitle: selectedRoom.title[lang],
        checkIn,
        checkOut,
        nights,
        adults,
        children,
        addons: selectedAddons.map((id) => {
          const addon = ADDON_SERVICES.find((a) => a.id === id)!;
          const cost =
            addon.id === 'daily-breakfast'
              ? addon.priceUsd * nights * (adults + children)
              : addon.priceUsd;
          return {
            name: addon.name[lang],
            price: cost,
          };
        }),
        subtotal: subtotalUsd,
        tax: taxUsd,
        total: totalUsd,
        currency,
      };

      setVoucher(createdVoucher);
      setIsSubmitting(false);
      setStep('confirmed');
    }, 600);
  };

  const handlePrint = () => {
    window.print();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-4xl bg-[#11161d] border border-stone-700/80 rounded-2xl shadow-2xl overflow-hidden my-6">
        {/* Top Header */}
        <div className="p-5 sm:p-6 border-b border-stone-800 flex items-center justify-between">
          <div>
            <div className="text-[11px] uppercase tracking-widest text-amber-300 font-semibold">
              {lang === 'en' ? 'Bespoke Reservation' : 'अग्रिम बुकिंग'}
            </div>
            <h2 className="font-serif text-xl sm:text-2xl text-stone-100 font-normal">
              {lang === 'en' ? 'The Grand Azure Sanctuary' : 'द ग्रैंड अज़्योर रिज़ॉर्ट'}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 transition-colors"
            aria-label="Close reservation"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator (If not yet confirmed) */}
        {step !== 'confirmed' && (
          <div className="grid grid-cols-3 border-b border-stone-800 text-xs">
            <button
              type="button"
              onClick={() => setStep('details')}
              className={`py-3 text-center font-medium transition-colors ${
                step === 'details'
                  ? 'bg-stone-800/80 text-amber-200 border-b-2 border-amber-300'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              1. {lang === 'en' ? 'Dates & Suite' : 'तारीख व सुइट'}
            </button>
            <button
              type="button"
              onClick={() => setStep('addons')}
              className={`py-3 text-center font-medium transition-colors ${
                step === 'addons'
                  ? 'bg-stone-800/80 text-amber-200 border-b-2 border-amber-300'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              2. {lang === 'en' ? 'Curated Add-Ons' : 'विशेष सुविधाएं'}
            </button>
            <button
              type="button"
              onClick={() => setStep('guest')}
              className={`py-3 text-center font-medium transition-colors ${
                step === 'guest'
                  ? 'bg-stone-800/80 text-amber-200 border-b-2 border-amber-300'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              3. {lang === 'en' ? 'Guest Info & Review' : 'अतिथि विवरण'}
            </button>
          </div>
        )}

        {/* STEP 1: DATES & SUITE SELECTION */}
        {step === 'details' && (
          <div className="p-6 sm:p-8 space-y-6">
            {/* Dates & Guests */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-stone-900/50 border border-stone-800">
              <div>
                <label className="text-xs uppercase tracking-wider text-stone-400 font-medium block mb-1">
                  {lang === 'en' ? 'Check-In' : 'चेक-इन'}
                </label>
                <input
                  type="date"
                  value={checkIn}
                  min={formatDate(today)}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-[#182028] border border-stone-700 rounded-lg px-3 py-2 text-sm text-stone-100 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-stone-400 font-medium block mb-1">
                  {lang === 'en' ? 'Check-Out' : 'चेक-आउट'}
                </label>
                <input
                  type="date"
                  value={checkOut}
                  min={checkIn}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-[#182028] border border-stone-700 rounded-lg px-3 py-2 text-sm text-stone-100 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-stone-400 font-medium block mb-1">
                  {lang === 'en' ? 'Guests' : 'मेहमान'}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <select
                    value={adults}
                    onChange={(e) => setAdults(Number(e.target.value))}
                    className="w-full bg-[#182028] border border-stone-700 rounded-lg px-2.5 py-2 text-xs sm:text-sm text-stone-100 focus:outline-none"
                  >
                    {[1, 2, 3, 4, 6].map((n) => (
                      <option key={n} value={n}>
                        {n} {lang === 'en' ? 'Adult' : 'वयस्क'}
                      </option>
                    ))}
                  </select>
                  <select
                    value={children}
                    onChange={(e) => setChildren(Number(e.target.value))}
                    className="w-full bg-[#182028] border border-stone-700 rounded-lg px-2.5 py-2 text-xs sm:text-sm text-stone-100 focus:outline-none"
                  >
                    {[0, 1, 2, 3].map((n) => (
                      <option key={n} value={n}>
                        {n} {lang === 'en' ? 'Child' : 'बच्चा'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Suite Choice */}
            <div>
              <label className="text-xs uppercase tracking-wider text-stone-400 font-semibold block mb-3">
                {lang === 'en' ? 'Select Preferred Suite or Villa' : 'पसंदीदा सुइट या विला चुनें'}
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ROOMS_DATA.map((r) => {
                  const isSelected = selectedRoomId === r.id;
                  const displayRate = formatPrice(r.priceUsd);

                  return (
                    <div
                      key={r.id}
                      onClick={() => setSelectedRoomId(r.id)}
                      className={`cursor-pointer rounded-xl p-4 border transition-all duration-150 flex items-start gap-3.5 ${
                        isSelected
                          ? 'bg-amber-950/20 border-amber-300 ring-1 ring-amber-300/50'
                          : 'bg-[#141a22] border-stone-800 hover:border-stone-700'
                      }`}
                    >
                      <img
                        src={r.image}
                        alt={r.title[lang]}
                        className="w-20 h-20 object-cover rounded-lg shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif text-sm font-medium text-stone-100 truncate">
                          {r.title[lang]}
                        </h4>
                        <div className="text-xs text-stone-400 mt-0.5">
                          {r.sizeSqM} m² · {r.bedType[lang]}
                        </div>
                        <div className="mt-2 font-serif text-sm font-semibold text-amber-200">
                          {displayRate}{' '}
                          <span className="text-[11px] font-sans text-stone-400">
                            / {lang === 'en' ? 'night' : 'रात'}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Next Step Action */}
            <div className="pt-4 border-t border-stone-800 flex items-center justify-between">
              <div className="text-xs text-stone-400">
                <span>{nights} {lang === 'en' ? (nights === 1 ? 'Night' : 'Nights') : 'रातें'}</span>
                <span className="mx-2" aria-hidden="true">·</span>
                <span className="font-semibold text-stone-200">
                  {formatPrice(roomCostUsd)}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setStep('addons')}
                className="inline-flex items-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-semibold text-stone-950 bg-amber-200 hover:bg-amber-100 rounded-lg transition-colors"
              >
                <span>{lang === 'en' ? 'Continue to Add-Ons' : 'अगला: सुविधाएं चुनें'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: BESPOKE ADD-ONS */}
        {step === 'addons' && (
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="font-serif text-lg text-stone-100 font-normal">
                {lang === 'en' ? 'Elevate Your Sanctuary Experience' : 'अपनी यात्रा को और खास बनाएं'}
              </h3>
              <p className="text-xs text-stone-400 mt-1">
                {lang === 'en'
                  ? 'Tailor your stay with private luxury chauffeur arrivals, vintage welcome champagne, or Ayurvedic spa journeys.'
                  : 'निजी कार पिकअप, स्वागत शैम्पेन और स्पा चिकित्सा के साथ अपनी छुट्टियों को अद्वितीय बनाएं।'}
              </p>
            </div>

            <div className="space-y-3">
              {ADDON_SERVICES.map((addon) => {
                const isSelected = selectedAddons.includes(addon.id);
                const addonPrice =
                  addon.id === 'daily-breakfast'
                    ? addon.priceUsd * nights * (adults + children)
                    : addon.priceUsd;

                return (
                  <div
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`cursor-pointer p-4 rounded-xl border transition-all duration-150 flex items-start justify-between gap-4 ${
                      isSelected
                        ? 'bg-amber-950/20 border-amber-300/80 ring-1 ring-amber-300/40'
                        : 'bg-[#141a22] border-stone-800 hover:border-stone-700'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded mt-0.5 flex items-center justify-center transition-colors ${
                          isSelected
                            ? 'bg-amber-300 text-stone-950'
                            : 'border border-stone-600 bg-stone-900'
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <div>
                        <div className="font-serif text-sm font-medium text-stone-100">
                          {addon.name[lang]}
                        </div>
                        <div className="text-xs text-stone-400 mt-0.5">
                          {addon.description[lang]}
                        </div>
                      </div>
                    </div>

                    <div className="font-serif text-sm font-semibold text-amber-200 shrink-0">
                      +{formatPrice(addonPrice)}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation Actions */}
            <div className="pt-4 border-t border-stone-800 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep('details')}
                className="inline-flex items-center gap-1.5 text-xs text-stone-400 hover:text-stone-200"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>{lang === 'en' ? 'Back to Dates' : 'पीछे जाएं'}</span>
              </button>

              <button
                type="button"
                onClick={() => setStep('guest')}
                className="inline-flex items-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-semibold text-stone-950 bg-amber-200 hover:bg-amber-100 rounded-lg transition-colors"
              >
                <span>{lang === 'en' ? 'Guest Information' : 'अतिथि जानकारी'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: GUEST DETAILS & PRICING BREAKDOWN */}
        {step === 'guest' && (
          <form onSubmit={handleGuestSubmit} className="p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Guest Form Fields */}
              <div className="lg:col-span-7 space-y-4">
                <h3 className="font-serif text-lg text-stone-100 font-normal">
                  {lang === 'en' ? 'Primary Guest Details' : 'मुख्य अतिथि की जानकारी'}
                </h3>

                <div>
                  <label className="text-xs uppercase tracking-wider text-stone-400 block mb-1">
                    {lang === 'en' ? 'Full Name' : 'पूरा नाम'} *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder={lang === 'en' ? 'e.g. Eleanor Vance' : 'उदा. राहुल शर्मा'}
                    className="w-full bg-[#182028] border border-stone-700 rounded-lg px-3.5 py-2.5 text-sm text-stone-100 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-stone-400 block mb-1">
                      {lang === 'en' ? 'Email Address' : 'ईमेल पता'} *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="guest@example.com"
                      className="w-full bg-[#182028] border border-stone-700 rounded-lg px-3.5 py-2.5 text-sm text-stone-100 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wider text-stone-400 block mb-1">
                      {lang === 'en' ? 'Phone / WhatsApp' : 'फ़ोन / व्हाट्सएप'} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 555 0192"
                      className="w-full bg-[#182028] border border-stone-700 rounded-lg px-3.5 py-2.5 text-sm text-stone-100 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-stone-400 block mb-1">
                    {lang === 'en' ? 'Special Requests or Dietary Requirements' : 'विशेष अनुरोध या खान-पान की पसंद'}
                  </label>
                  <textarea
                    rows={2}
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    placeholder={
                      lang === 'en'
                        ? 'e.g. Feather-free pillows, late night arrival, vegan preference'
                        : 'उदा. देर रात आगमन, शाकाहारी भोजन, शांत कमरा'
                    }
                    className="w-full bg-[#182028] border border-stone-700 rounded-lg px-3.5 py-2 text-sm text-stone-100 focus:outline-none focus:border-amber-400 resize-none"
                  />
                </div>

                <div className="p-3 rounded-lg bg-stone-900/40 border border-stone-800 text-xs text-stone-400 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    {lang === 'en'
                      ? 'No upfront payment charged today. Free cancellation up to 72 hours before arrival.'
                      : 'आज कोई शुल्क नहीं काटा जाएगा। आगमन से 72 घंटे पहले तक मुफ्त कैंसिलेशन।'}
                  </span>
                </div>
              </div>

              {/* Real-Time Receipt Summary */}
              <div className="lg:col-span-5 bg-stone-900/60 border border-stone-800 rounded-xl p-5 space-y-4">
                <h4 className="font-serif text-base text-stone-100 font-medium pb-2 border-b border-stone-800">
                  {lang === 'en' ? 'Reservation Summary' : 'बुकिंग सारांश'}
                </h4>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between text-stone-300">
                    <span className="text-stone-400">{lang === 'en' ? 'Suite:' : 'सुइट:'}</span>
                    <span className="font-medium text-stone-100 truncate max-w-[180px]">
                      {selectedRoom.title[lang]}
                    </span>
                  </div>

                  <div className="flex justify-between text-stone-300">
                    <span className="text-stone-400">{lang === 'en' ? 'Stay Duration:' : 'अवधि:'}</span>
                    <span>{nights} {lang === 'en' ? (nights === 1 ? 'Night' : 'Nights') : 'रातें'} ({checkIn} – {checkOut})</span>
                  </div>

                  <div className="flex justify-between text-stone-300">
                    <span className="text-stone-400">{lang === 'en' ? 'Guests:' : 'मेहमान:'}</span>
                    <span>{adults} {lang === 'en' ? 'Adults' : 'वयस्क'}, {children} {lang === 'en' ? 'Children' : 'बच्चे'}</span>
                  </div>

                  <div className="pt-2 border-t border-stone-800/80 flex justify-between text-stone-300">
                    <span>{lang === 'en' ? 'Suite Total:' : 'कमरा शुल्क:'}</span>
                    <span className="tabular-nums">{formatPrice(roomCostUsd)}</span>
                  </div>

                  {selectedAddons.length > 0 && (
                    <div className="flex justify-between text-stone-300">
                      <span>{lang === 'en' ? 'Add-Ons Total:' : 'अतिरिक्त सुविधाएं:'}</span>
                      <span className="tabular-nums">+{formatPrice(addonsCostUsd)}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-stone-400">
                    <span>{lang === 'en' ? 'Resort Fee & Taxes (12%):' : 'कर एवं सेवा शुल्क (12%):'}</span>
                    <span className="tabular-nums">{formatPrice(taxUsd)}</span>
                  </div>

                  <div className="pt-3 border-t border-stone-700 flex justify-between items-baseline text-sm font-semibold text-amber-100">
                    <span>{lang === 'en' ? 'Total Guaranteed Rate:' : 'कुल राशि:'}</span>
                    <span className="font-serif text-xl">{formatPrice(totalUsd)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-4 border-t border-stone-800 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep('addons')}
                className="inline-flex items-center gap-1.5 text-xs text-stone-400 hover:text-stone-200"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>{lang === 'en' ? 'Back' : 'पीछे'}</span>
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 text-xs sm:text-sm font-semibold tracking-wide text-stone-950 bg-amber-200 hover:bg-amber-100 rounded-lg transition-colors shadow-md disabled:opacity-50"
              >
                {isSubmitting
                  ? (lang === 'en' ? 'Securing Suite...' : 'पुष्टि की जा रही है...')
                  : (lang === 'en' ? 'Confirm Reservation' : 'बुकिंग सुरक्षित करें')}
              </button>
            </div>
          </form>
        )}

        {/* STEP 4: CONFIRMED RESERVATION VOUCHER */}
        {step === 'confirmed' && voucher && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="text-center max-w-lg mx-auto">
              <div className="w-14 h-14 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-7 h-7 stroke-[3]" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-stone-100 font-normal">
                {lang === 'en' ? 'Reservation Confirmed' : 'आपकी बुकिंग की पुष्टि हो गई है!'}
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 font-light mt-1">
                {lang === 'en'
                  ? 'A detailed arrival itinerary and concierge welcome guide have been sent to your email.'
                  : 'विस्तृत यात्रा कार्यक्रम और कंसीयर्ज स्वागत मार्गदर्शिका आपके ईमेल पर भेज दी गई है।'}
              </p>
            </div>

            {/* Printable Luxury Voucher Card */}
            <div className="bg-[#141a22] border border-amber-300/30 rounded-2xl p-6 sm:p-7 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-800">
                <div>
                  <div className="text-xs text-amber-200 font-semibold tracking-widest uppercase">
                    THE GRAND AZURE RESORT & SPA
                  </div>
                  <div className="text-xs text-stone-400 mt-0.5">
                    {lang === 'en' ? 'Booking Confirmation Voucher' : 'बुकिंग कन्फर्मेशन वाउचर'}
                  </div>
                </div>

                <div className="bg-stone-900 border border-stone-700 px-3.5 py-1.5 rounded-lg text-right">
                  <div className="text-[10px] text-stone-400 uppercase tracking-wider">
                    {lang === 'en' ? 'Reservation Code' : 'बुकिंग कोड'}
                  </div>
                  <div className="font-mono text-base font-bold text-amber-200">
                    {voucher.bookingId}
                  </div>
                </div>
              </div>

              {/* Voucher Details Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                <div>
                  <div className="text-stone-400">{lang === 'en' ? 'Guest Name' : 'अतिथि का नाम'}</div>
                  <div className="font-medium text-stone-100 mt-0.5">{voucher.guestName}</div>
                </div>
                <div>
                  <div className="text-stone-400">{lang === 'en' ? 'Suite Category' : 'सुइट श्रेणी'}</div>
                  <div className="font-medium text-stone-100 mt-0.5 truncate">{voucher.roomTitle}</div>
                </div>
                <div>
                  <div className="text-stone-400">{lang === 'en' ? 'Stay Dates' : 'तारीखें'}</div>
                  <div className="font-medium text-stone-100 mt-0.5">
                    {voucher.checkIn} → {voucher.checkOut}
                  </div>
                </div>
                <div>
                  <div className="text-stone-400">{lang === 'en' ? 'Total Guaranteed' : 'कुल राशि'}</div>
                  <div className="font-medium text-amber-200 mt-0.5 font-serif text-sm">
                    {formatPrice(voucher.total)}
                  </div>
                </div>
              </div>

              {/* Addons note if any */}
              {voucher.addons.length > 0 && (
                <div className="pt-3 border-t border-stone-800 text-xs text-stone-400">
                  <span className="text-stone-300 font-medium">
                    {lang === 'en' ? 'Included Add-Ons:' : 'शामिल सुविधाएं:'}{' '}
                  </span>
                  {voucher.addons.map((a) => a.name).join(', ')}
                </div>
              )}
            </div>

            {/* Voucher Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="button"
                onClick={handlePrint}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-stone-300 hover:text-white border border-stone-700 rounded-lg hover:bg-stone-800 transition-colors"
              >
                <Printer className="w-4 h-4" />
                <span>{lang === 'en' ? 'Print Confirmation Voucher' : 'वाउचर प्रिंट करें'}</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 text-xs sm:text-sm font-semibold text-stone-950 bg-amber-200 hover:bg-amber-100 rounded-lg transition-colors"
              >
                {lang === 'en' ? 'Done & Return to Resort' : 'पूर्ण / वापस जाएं'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
