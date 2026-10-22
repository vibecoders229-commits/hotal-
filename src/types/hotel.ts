export type Language = 'en' | 'hi';
export type Currency = 'USD' | 'INR';

export interface RoomSuite {
  id: string;
  title: {
    en: string;
    hi: string;
  };
  category: 'ocean' | 'suite' | 'villa' | 'deluxe';
  tagline: {
    en: string;
    hi: string;
  };
  description: {
    en: string;
    hi: string;
  };
  priceUsd: number;
  sizeSqM: number;
  sizeSqFt: number;
  maxGuests: number;
  bedType: {
    en: string;
    hi: string;
  };
  view: {
    en: string;
    hi: string;
  };
  image: string;
  galleryImages: string[];
  keyFeatures: {
    en: string[];
    hi: string[];
  };
  detailedAmenities: {
    en: string[];
    hi: string[];
  };
}

export interface MenuItem {
  name: {
    en: string;
    hi: string;
  };
  description: {
    en: string;
    hi: string;
  };
  priceUsd: number;
  dietary?: string;
}

export interface SpaTreatment {
  id: string;
  name: {
    en: string;
    hi: string;
  };
  duration: string;
  priceUsd: number;
  description: {
    en: string;
    hi: string;
  };
}

export interface Testimonial {
  id: string;
  guestName: string;
  guestLocation: string;
  suiteStayed: {
    en: string;
    hi: string;
  };
  date: string;
  rating: number;
  review: {
    en: string;
    hi: string;
  };
}

export interface BookingFormData {
  roomId: string;
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  fullName: string;
  email: string;
  phone: string;
  specialRequests: string;
  selectedAddons: string[];
}

export interface BookingVoucher {
  bookingId: string;
  bookedAt: string;
  guestName: string;
  email: string;
  phone: string;
  roomTitle: string;
  checkIn: string;
  checkOut: string;
  nights: number;
  adults: number;
  children: number;
  addons: { name: string; price: number }[];
  subtotal: number;
  tax: number;
  total: number;
  currency: Currency;
}
