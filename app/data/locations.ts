export type Location = {
  slug: string;
  name: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  hoursWeekday: string;
  hoursSaturday: string;
  hoursSundayNote: string;
  notes?: string;
  isPrimary?: boolean;
  mapUrl?: string;
  image?: string;
};

export const locations: Location[] = [
  {
    slug: "grimes",
    name: "Grimes",
    addressLine1: "3705 SE Beisser Drive",
    city: "Grimes",
    state: "IA",
    zip: "50111",
    phone: "(515) 986-4422",
    hoursWeekday: "Monday–Friday: 7:30 AM – 5:00 PM",
    hoursSaturday: "Saturday: 8:00 AM – 12:00 PM",
    hoursSundayNote: "Closed Sundays & Major Holidays",
    isPrimary: true,
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=3705+SE+Beisser+Drive+Grimes+IA+50111",
    image: "/locations/grimes.jpg",
  },
  {
    slug: "coralville",
    name: "Coralville",
    addressLine1: "415 Westcor Drive",
    city: "Coralville",
    state: "IA",
    zip: "52241",
    phone: "(319) 545-7120",
    hoursWeekday: "Monday–Friday: 7:30 AM – 5:00 PM",
    hoursSaturday: "Saturday: 8:00 AM – 12:00 PM",
    hoursSundayNote: "Closed Sundays & Major Holidays",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=415+Westcor+Drive+Coralville+IA+52241",
    image: "/locations/coralville.jpg",
  },
  {
    slug: "fort-dodge",
    name: "Fort Dodge",
    addressLine1: "1920 Central Avenue",
    city: "Fort Dodge",
    state: "IA",
    zip: "50501",
    phone: "(515) 573-4166",
    hoursWeekday: "Monday–Friday: 7:30 AM – 5:00 PM",
    hoursSaturday: "Saturday: 8:00 AM – 12:00 PM",
    hoursSundayNote: "Closed Sundays & Major Holidays",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=1920+Central+Avenue+Fort+Dodge+IA+50501",
    image: "/locations/fort-dodge.jpg",
  },
  {
    slug: "birchwood-showroom",
    name: "Showroom & Millwork",
    addressLine1: "7901 Birchwood Court",
    city: "Johnston",
    state: "IA",
    zip: "50131",
    phone: "(515) 986-4422",
    hoursWeekday: "Monday–Friday: 7:30 AM – 5:00 PM",
    hoursSaturday: "Saturday: 8:00 AM – 12:00 PM",
    hoursSundayNote: "Closed Sundays & Major Holidays",
    notes: "Dedicated showroom & millwork location.",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=7901+Birchwood+Court+Johnston+IA+50131",
    image: "/locations/birchwood.jpg",
  },
];
