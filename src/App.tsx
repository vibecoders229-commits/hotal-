/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BookingBar } from './components/BookingBar';
import { RoomsSection } from './components/RoomsSection';
import { RoomModal } from './components/RoomModal';
import { DiningSection } from './components/DiningSection';
import { SpaSection } from './components/SpaSection';
import { ExperiencesSection } from './components/ExperiencesSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { ReservationModal } from './components/ReservationModal';
import { TableReservationModal } from './components/TableReservationModal';
import { Footer } from './components/Footer';
import { Language, Currency, RoomSuite } from './types/hotel';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [currency, setCurrency] = useState<Currency>('USD');

  // Modals state
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isTableBookingOpen, setIsTableBookingOpen] = useState(false);
  const [selectedRoomDetails, setSelectedRoomDetails] = useState<RoomSuite | null>(null);

  // Reservation initial filters
  const [reservationRoomId, setReservationRoomId] = useState<string | undefined>(undefined);
  const [bookingParams, setBookingParams] = useState<{
    checkIn?: string;
    checkOut?: string;
    adults?: number;
    children?: number;
  }>({});

  // Notification toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // Open reservation modal with optional pre-selected room
  const handleOpenReservation = (roomId?: string) => {
    setReservationRoomId(roomId);
    setIsReservationOpen(true);
  };

  // When search is submitted from the booking bar
  const handleBookingSearch = (params: {
    checkIn: string;
    checkOut: string;
    adults: number;
    children: number;
    category: string;
  }) => {
    setBookingParams({
      checkIn: params.checkIn,
      checkOut: params.checkOut,
      adults: params.adults,
      children: params.children,
    });
    setIsReservationOpen(true);
  };

  // Inquire about experiences
  const handleInquireExperience = (title: string) => {
    showToast(
      lang === 'en'
        ? `Concierge request registered for "${title}". Our team will contact you shortly.`
        : `"${title}" के लिए कंसीयर्ज अनुरोध दर्ज कर लिया गया है।`
    );
  };

  // Book spa ritual
  const handleBookSpa = (treatmentName: string) => {
    showToast(
      lang === 'en'
        ? `Spa treatment inquiry created for "${treatmentName}". Concierge notified.`
        : `"${treatmentName}" के लिए स्पा अपॉइंटमेंट का अनुरोध दर्ज हो गया है।`
    );
  };

  const handleExploreSuites = () => {
    const el = document.getElementById('suites');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0f12] text-stone-100 flex flex-col font-sans">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#161c24] border border-amber-300/50 text-amber-100 text-xs sm:text-sm px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Bar Navigation */}
      <Navbar
        lang={lang}
        setLang={setLang}
        currency={currency}
        setCurrency={setCurrency}
        onOpenReservation={() => handleOpenReservation()}
      />

      {/* Main Single Page Hotel Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          lang={lang}
          onExploreSuites={handleExploreSuites}
          onBookNow={() => handleOpenReservation()}
        />

        {/* Quick Availability & Booking Bar */}
        <BookingBar
          lang={lang}
          onSearch={handleBookingSearch}
        />

        {/* Suites & Rooms Showcase */}
        <RoomsSection
          lang={lang}
          currency={currency}
          onSelectRoomDetails={(room) => setSelectedRoomDetails(room)}
          onBookRoom={(roomId) => handleOpenReservation(roomId)}
        />

        {/* Three-Star Fine Dining & Rooftop Terrace */}
        <DiningSection
          lang={lang}
          currency={currency}
          onOpenTableBooking={() => setIsTableBookingOpen(true)}
        />

        {/* SOMA Holistic Wellness & Ayurvedic Spa */}
        <SpaSection
          lang={lang}
          currency={currency}
          onBookSpa={handleBookSpa}
        />

        {/* Curated Luxury Guest Experiences */}
        <ExperiencesSection
          lang={lang}
          onInquireExperience={handleInquireExperience}
        />

        {/* Verified Guest Reviews & Forbes 5-Star Proof */}
        <ReviewsSection lang={lang} />

        {/* Peninsula Location, Arrival & Interactive FAQs */}
        <LocationSection lang={lang} />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onOpenReservation={() => handleOpenReservation()}
      />

      {/* Room Details Modal */}
      {selectedRoomDetails && (
        <RoomModal
          room={selectedRoomDetails}
          isOpen={Boolean(selectedRoomDetails)}
          onClose={() => setSelectedRoomDetails(null)}
          lang={lang}
          currency={currency}
          onBookRoom={(roomId) => handleOpenReservation(roomId)}
        />
      )}

      {/* Full Interactive Reservation Modal & Voucher Generator */}
      {isReservationOpen && (
        <ReservationModal
          isOpen={isReservationOpen}
          onClose={() => setIsReservationOpen(false)}
          lang={lang}
          currency={currency}
          initialRoomId={reservationRoomId}
          initialCheckIn={bookingParams.checkIn}
          initialCheckOut={bookingParams.checkOut}
          initialAdults={bookingParams.adults}
          initialChildren={bookingParams.children}
        />
      )}

      {/* Fine Dining Table Reservation Modal */}
      {isTableBookingOpen && (
        <TableReservationModal
          isOpen={isTableBookingOpen}
          onClose={() => setIsTableBookingOpen(false)}
          lang={lang}
        />
      )}
    </div>
  );
}
