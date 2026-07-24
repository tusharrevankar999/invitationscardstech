export interface GuestRSVP {
  id: string;
  name: string;
  email: string;
  attending: 'yes' | 'no';
  plusOne: boolean;
  plusOneName?: string;
  dietary?: string;
  mealPreference?: string;
  songRequest?: string;
  message?: string;
  createdAt: string;
}

export interface GuestbookMessage {
  id: string;
  author: string;
  relationship: string;
  message: string;
  likes: number;
  date: string;
}

export interface StoryEvent {
  year: string;
  title: string;
  location: string;
  description: string;
  image: string;
  quote?: string;
}

export interface GalleryPhoto {
  id: string;
  url: string;
  caption: string;
  category: 'engagement' | 'travel' | 'candid' | 'venue';
  aspectRatio: 'portrait' | 'landscape' | 'square';
}

export interface TimelineItem {
  time: string;
  title: string;
  subtitle: string;
  iconName: string;
  description: string;
  location: string;
}

export interface ColorSwatch {
  name: string;
  hex: string;
  description: string;
  bgClass: string;
}

export interface HotelInfo {
  name: string;
  stars: number;
  rate: string;
  discountCode: string;
  distance: string;
  address: string;
  description: string;
  image: string;
  bookingUrl: string;
}

export interface RegistryItem {
  id: string;
  title: string;
  category: 'cash' | 'store';
  goalAmount?: number;
  raisedAmount?: number;
  storeName?: string;
  description: string;
  image: string;
  link?: string;
}
