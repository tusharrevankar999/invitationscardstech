import { StoryEvent, GalleryPhoto, TimelineItem, ColorSwatch, HotelInfo, RegistryItem, GuestbookMessage } from '../types';

export const WEDDING_DETAILS = {
  couple: {
    groom: "Sara",
    bride: "Laksh",
    initials: "S | L",
    tagline: "Together with their families, request the honor of your presence",
    hashtag: "#SaraWedsLaksh2027",
  },
  date: {
    iso: "2027-01-09T10:00:00+05:30",
    display: "Saturday, 9th January 2027",
    short: "09 . 01 . 27",
    ceremonyTime: "10:30 AM IST",
    receptionTime: "12:30 PM IST",
  },
  venue: {
    name: "Taj Exotica Resort & Spa",
    ceremonyArea: "The Beachfront Mandap",
    receptionArea: "The Royal Ocean Ballroom",
    address: "Calwaddo, Benaulim, South Goa 403716, India",
    cityState: "South Goa, Goa",
    mapQuery: "Taj+Exotica+Resort+Benaulim+South+Goa",
    parkingNote: "Valet parking available at the main gate. Private resort shuttle service provided.",
  },
  theme: {
    title: "Artful Coastal Elegance & Goan Paradise Heritage",
    description: "Inspired by golden sun-kissed beaches, swaying palms, and timeless coastal romance.",
  }
};

export const FAMILIES_DETAILS = {
  subtitle: "TWO FAMILIES. ONE PROMISE.",
  title: "INTRODUCING",
  subtitleScript: "the families",
  groomFamily: {
    name: "Sara",
    relationLabel: "S/O",
    parents: "RAJESH SHARMA & SUNITA SHARMA",
    siblingsLabel: "BROTHER OF",
    siblings: ["DR. SHRUTI SHARMA &", "SHREYA SHARMA"]
  },
  brideFamily: {
    name: "Laksh",
    relationLabel: "D/O",
    parents: "AMIT VERMA & POOJA VERMA",
    siblingsLabel: "BROTHER OF",
    siblings: ["DR. ANANYA VERMA &", "RENUKA VERMA"]
  },
  footerTagline1: "RAISED WITH LOVE,",
  footerTagline2: "UNITED BY DESTINY,",
  footerTaglineScript: "together forever",
};

export const STORY_EVENTS: StoryEvent[] = [
  {
    year: "2020",
    title: "First Serendipitous Connection",
    location: "Panaji, Goa",
    description: "A shared love for music, travel, and warm coffee in the Latin Quarter of Fontainhas sparked a deep connection that turned hours into moments.",
    image: "/src/assets/images/journey_first_meeting_1784882048633.jpg",
    quote: "“I knew from our very first conversation in Panaji that Laksh was extraordinary.” — Sara"
  },
  {
    year: "2022",
    title: "Coastal Adventures & Travels",
    location: "Coastal Escapes & Abroad",
    description: "Styling in modern jackets and sunglasses, exploring scenic cliffside overlooks, coastal roads, and international ocean vistas—discovering that every trip together makes life an unforgettable adventure.",
    image: "/src/assets/images/coastal_travels_modern_1784889324776.jpg",
    quote: "“Every trip together proved how effortlessly we complement each other.” — Laksh"
  },
  {
    year: "2024",
    title: "The Golden Sunset Engagement",
    location: "Varca Beach Resort, Goa",
    description: "Under a glowing golden sunset sky over the Arabian Sea with family blessings, Sara got down on one knee to ask Laksh for forever.",
    image: "/src/assets/images/journey_proposal_1784882202687.jpg",
    quote: "“Hand in hand, united by love and blessed by two wonderful families.”"
  },
  {
    year: "2027",
    title: "Beginning Our Forever Chapter",
    location: "South Goa, Goa",
    description: "Ready to walk down the aisle and begin our lifelong journey as husband and wife surrounded by everyone we love.",
    image: "/src/assets/images/journey_forever_1784882221756.jpg",
    quote: "“Two souls, one heart, together forever.”"
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "1",
    url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    caption: "Golden hour along Benaulim Beach",
    category: "engagement",
    aspectRatio: "portrait"
  },
  {
    id: "2",
    url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
    caption: "Rustic table setting and florals concept preview",
    category: "venue",
    aspectRatio: "landscape"
  },
  {
    id: "3",
    url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop",
    caption: "Sunset walks along the South Goa coast",
    category: "engagement",
    aspectRatio: "portrait"
  },
  {
    id: "4",
    url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop",
    caption: "Toasting with fresh tropical sunset coolers",
    category: "candid",
    aspectRatio: "square"
  },
  {
    id: "5",
    url: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=1200&auto=format&fit=crop",
    caption: "The Glasshouse Orangery illuminated at nightfall",
    category: "venue",
    aspectRatio: "landscape"
  },
  {
    id: "6",
    url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop",
    caption: "Handmade letterpress stationery & floral accents",
    category: "candid",
    aspectRatio: "portrait"
  }
];

export const SCHEDULE_TIMELINE: TimelineItem[] = [
  {
    time: "2:30 PM",
    title: "Welcome Sparkling Reception",
    subtitle: "The Olive Grove Lawn",
    iconName: "GlassWater",
    description: "Arrive early to enjoy chilled sparkling wine, botanical elixirs, and acoustic harp melodies as you take your seat.",
    location: "Main Entrance Lawn"
  },
  {
    time: "3:30 PM",
    title: "The Wedding Ceremony",
    subtitle: "The Amphitheater Under the Willows",
    iconName: "Heart",
    description: "Sara & Laksh exchange vows in an intimate ceremony surrounded by family and nature.",
    location: "Olive Grove Amphitheater"
  },
  {
    time: "4:30 PM",
    title: "Cocktail Hour & Live Jazz",
    subtitle: "Terrace Overlooking Vineyard Slopes",
    iconName: "Wine",
    description: "Artisanal charcuterie boards, local wine tastings, signature cocktails, and live jazz trio performances.",
    location: "West Terrace"
  },
  {
    time: "6:00 PM",
    title: "The Grand Entrance & Dinner",
    subtitle: "The Crystal Glasshouse",
    iconName: "Utensils",
    description: "A candlelit coastal banquet curated by master Goan chefs.",
    location: "Grand Orangery"
  },
  {
    time: "8:00 PM",
    title: "Toasts, Cake & First Dance",
    subtitle: "Under the Chandelier Canopy",
    iconName: "Sparkles",
    description: "Heartfelt family toasts, artisan wedding cake cutting, and our first dance under suspended floral lights.",
    location: "Main Ballroom"
  },
  {
    time: "9:30 PM - Midnight",
    title: "After-Party & Late Night Bites",
    subtitle: "The Speakeasy Lounge",
    iconName: "Music",
    description: "Live DJ set, wood-fired pizza cart, espresso martini station, and sparkler send-off at midnight.",
    location: "Courtyard & Lounge"
  }
];

export const DRESS_CODE_SWATCHES: ColorSwatch[] = [
  {
    name: "Tuscan Sun Gold",
    hex: "#D4AF37",
    description: "Rich metallic gold, ochre, or amber accents that reflect autumn sunset warmth.",
    bgClass: "bg-[#D4AF37]"
  },
  {
    name: "Desert Sage",
    hex: "#8A9A86",
    description: "Muted botanical green, sage silk, or earthy olive tones.",
    bgClass: "bg-[#8A9A86]"
  },
  {
    name: "Dusty Terracotta",
    hex: "#C87D60",
    description: "Warm clay, terracotta, or muted rose gold velvet or chiffon.",
    bgClass: "bg-[#C87D60]"
  },
  {
    name: "Champagne Velvet",
    hex: "#E8D8C8",
    description: "Soft cream, pearl, or warm beige suiting and formal wear.",
    bgClass: "bg-[#E8D8C8]"
  },
  {
    name: "Midnight Onyx",
    hex: "#222021",
    description: "Classic black tuxedos, charcoal tailoring, or deep navy formal wear.",
    bgClass: "bg-[#222021]"
  }
];

export const HOTELS: HotelInfo[] = [
  {
    name: "Taj Exotica Resort & Spa",
    stars: 5,
    rate: "₹18,500 / night",
    discountCode: "SaraLaksh27",
    distance: "On-site Venue Resort",
    address: "Calwaddo, Benaulim, South Goa 403716",
    description: "Mediterranean-style luxury beachfront resort sprawled over 56 acres of lush gardens along Benaulim Beach.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
    bookingUrl: "https://www.tajhotels.com/en-in/taj/taj-exotica-goa/"
  },
  {
    name: "The Leela Goa",
    stars: 5,
    rate: "₹16,000 / night",
    discountCode: "SaraLaksh27",
    distance: "10 mins via resort shuttle",
    address: "Cavelossim Beach, Salcette, South Goa 403731",
    description: "Beachfront sanctuary framed by lagoons, pristine white sands, and lush tropical gardens in Cavelossim.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop",
    bookingUrl: "https://www.theleela.com/the-leela-goa"
  },
  {
    name: "Grand Hyatt Goa",
    stars: 5,
    rate: "₹14,500 / night",
    discountCode: "SaraLaksh27",
    distance: "25 mins from venue",
    address: "P.O. Goa University, Bambolim, North/Central Goa 403206",
    description: "Palatial 17th century Indo-Portuguese styled resort along Bambolim Bay with ocean view pools.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop",
    bookingUrl: "https://www.hyatt.com/en-US/hotel/india/grand-hyatt-goa/goagh"
  }
];

export const REGISTRY_ITEMS: RegistryItem[] = [
  {
    id: "1",
    title: "Amalfi Coast Honeymoon Fund",
    category: "cash",
    goalAmount: 8500,
    raisedAmount: 5400,
    description: "Help us experience romantic cliffside dining, private boat tours in Capri, and lemon grove stays.",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "2",
    title: "Goa Home & Kitchen Fund",
    category: "cash",
    goalAmount: 4000,
    raisedAmount: 2850,
    description: "Contributing toward our home kitchen buildout and coffee setup for Sunday mornings.",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "3",
    title: "Crate & Barrel Wedding Registry",
    category: "store",
    storeName: "Crate & Barrel",
    description: "Linen bedding, Italian glassware, marble serving boards, and artisanal ceramics.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop",
    link: "https://www.crateandbarrel.com"
  },
  {
    id: "4",
    title: "Williams Sonoma Gourmet Collection",
    category: "store",
    storeName: "Williams Sonoma",
    description: "Espresso machines, Dutch ovens, and crystal wine decanters.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop",
    link: "https://www.williams-sonoma.com"
  }
];

export const INITIAL_GUESTBOOK: GuestbookMessage[] = [
  {
    id: "g1",
    author: "Marcus & Sophia Vance",
    relationship: "Brother of the Groom",
    message: "We couldn't be happier for you both! From Fontainhas lattes to South Goa vows, your story inspires all of us. See you on the dance floor!",
    likes: 18,
    date: "2 days ago"
  },
  {
    id: "g2",
    author: "Claire Sterling",
    relationship: "Sister of the Bride",
    message: "Laksh, you are going to be the most breathtaking bride. Sara, welcome officially to the family! Can't wait to celebrate under the Goa stars.",
    likes: 24,
    date: "Yesterday"
  },
  {
    id: "g3",
    author: "David & Maya Chen",
    relationship: "College Friends",
    message: "So honored to share in your big day! Already looking forward to the wine tasting and live jazz quartet. Sending all our love!",
    likes: 12,
    date: "5 hours ago"
  }
];

export const FAQS = [
  {
    q: "What is the dress code?",
    a: "The dress code is Black-Tie Optional / Earthy Elegance. Tuxedos or formal suits for men, and floor-length gowns, elegant cocktail dresses, or dressy suits for women in our earthy color palette (gold, sage, terracotta, champagne, black)."
  },
  {
    q: "Can I bring a plus one?",
    a: "Due to venue capacity, plus-ones are reserved for guests specifically named on the invitation envelope and RSVP form."
  },
  {
    q: "Are children invited?",
    a: "We love your little ones dearly! However, our wedding weekend will be an adult-only celebration so all parents can enjoy a relaxing evening under the stars."
  },
  {
    q: "Will there be transportation provided?",
    a: "Yes! Complimentary luxury shuttles will pick up and drop off guests at our partner hotels (Auberge du Soleil, Archer Hotel, and Solage Resort) throughout the afternoon and late evening."
  },
  {
    q: "Is the ceremony indoor or outdoor?",
    a: "The ceremony will take place outdoors in the Olive Grove Amphitheater, followed by an outdoor cocktail terrace, and an indoor dinner inside climate-controlled Glasshouse Orangery."
  },
  {
    q: "What if I have dietary restrictions or allergies?",
    a: "You can specify all dietary requirements, food allergies, and meal selections directly inside our online RSVP form. Our Michelin-star catering team prepares dedicated vegetarian, vegan, and gluten-free menus."
  }
];
