export type Location = {
  slug: string;
  name: string;
  shortName: string;
  addressLine1: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  hoursWeekday: string;
  hoursSaturday: string;
  hoursSundayNote: string;
  notes?: string[];
  isPrimary?: boolean;
  mapUrl?: string;
  image: string;
};

export const locations: Location[] = [
  {
    slug: "grimes",
    name: "Grimes (Main Yard)",
    shortName: "Grimes",
    addressLine1: "3705 SE Beisser Drive",
    city: "Grimes",
    state: "IA",
    zip: "50111",
    phone: "(515) 986-4422",
    hoursWeekday: "Mon–Fri 7:30 AM – 5:00 PM",
    hoursSaturday: "Sat 7:00 AM – 12:00 PM",
    hoursSundayNote: "Closed Sun & Holidays",
    notes: ["Main yard.", "Custom door shop on site.", "EWP department."],
    isPrimary: true,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=3705+SE+Beisser+Drive+Grimes+IA+50111",
    image: "/locations/grimes.jpg",
  },
  {
    slug: "coralville",
    name: "Coralville",
    shortName: "Coralville",
    addressLine1: "415 Westcor Drive",
    city: "Coralville",
    state: "IA",
    zip: "52241",
    phone: "(319) 545-7120",
    hoursWeekday: "Mon–Fri 7:30 AM – 5:00 PM",
    hoursSaturday: "Sat 8:00 AM – 12:00 PM",
    hoursSundayNote: "Closed Sun & Holidays",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=415+Westcor+Drive+Coralville+IA+52241",
    image: "/locations/coralville.jpg",
  },
  {
    slug: "fort-dodge",
    name: "Fort Dodge",
    shortName: "Fort Dodge",
    addressLine1: "1920 Central Avenue",
    city: "Fort Dodge",
    state: "IA",
    zip: "50501",
    phone: "(515) 573-4166",
    hoursWeekday: "Mon–Fri 7:30 AM – 5:00 PM",
    hoursSaturday: "Sat 8:00 AM – 12:00 PM",
    hoursSundayNote: "Closed Sun & Holidays",
    notes: ["Original founding location (1953)."],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=1920+Central+Avenue+Fort+Dodge+IA+50501",
    image: "/locations/fort-dodge.jpg",
  },
  {
    slug: "birchwood-johnston",
    name: "Birchwood / Johnston (Showroom)",
    shortName: "Birchwood / Johnston",
    addressLine1: "7901 Birchwood Court",
    city: "Johnston",
    state: "IA",
    zip: "50131",
    phone: "(515) 986-4422",
    hoursWeekday: "Mon–Fri 7:30 AM – 5:00 PM",
    hoursSaturday: "Sat 8:00 AM – 12:00 PM",
    hoursSundayNote: "Closed Sun & Holidays",
    notes: ["Windows & doors showroom.", "Design consultation."],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=7901+Birchwood+Court+Johnston+IA+50131",
    image: "/locations/birchwood.jpg",
  },
];

export const locationBySlug = Object.fromEntries(locations.map((location) => [location.slug, location]));
