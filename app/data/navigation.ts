// Shared link lists for the header menu, mobile menu and footer.

export type NavLink = { href: string; label: string };

export const productLinks: NavLink[] = [
  { href: "/products/lumber-panels", label: "Lumber & Panels" },
  { href: "/products/engineered-wood-products", label: "Engineered Wood Products" },
  { href: "/products/windows-patio-doors", label: "Windows & Patio Doors" },
  { href: "/products/doors", label: "Doors" },
  { href: "/products/decking-railing", label: "Decking & Railing" },
  { href: "/products/siding", label: "Siding" },
  { href: "/products/millwork", label: "Millwork" },
  { href: "/products/stair-parts", label: "Stair Parts" },
  { href: "/products/building-envelope-accessories", label: "Building Envelope & Accessories" },
  { href: "/products/hardware-screws", label: "Hardware & Screws" },
];

export const serviceLinks: NavLink[] = [
  { href: "/services/design", label: "Design" },
  { href: "/services/estimating", label: "Estimating" },
  { href: "/services/installation", label: "Installation" },
  { href: "/services/delivery", label: "Delivery" },
  { href: "/service-request", label: "Service Request" },
];

export const primaryNav: NavLink[] = [
  { href: "/services", label: "Services" },
  { href: "/pros", label: "Pros" },
  { href: "/showroom", label: "Showroom" },
  { href: "/locations", label: "Locations" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export type UtilityLink = NavLink & { external?: boolean; eventName?: string };

export const accountLinks: UtilityLink[] = [
  { href: "https://pro.beisserlumber.com", label: "Pay Invoice", external: true, eventName: "portal_click" },
  { href: "https://pro.beisserlumber.com", label: "Account Sign In", external: true, eventName: "portal_click" },
  { href: "https://www.nuvo.credit/app/beisserlumber", label: "Credit Application", external: true, eventName: "credit_application_click" },
];

export const mainPhone = { label: "(515) 986-4422", href: "tel:15159864422" };
