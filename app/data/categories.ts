export type ProductCategory = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  heroImage: string;
  bullets: string[];
  tagline?: string;
};

export const productCategories: ProductCategory[] = [
  {
    slug: "decking-railing",
    name: "Decking & Railing",
    summary: "Composite decking, railing, and outdoor-living packages for Iowa projects.",
    description: "Beisser Lumber helps Iowa builders and homeowners compare decking boards, railing systems, screws, hardware, and accessory packages built for Midwest weather.",
    heroImage: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1600&q=80",
    bullets: ["Composite and capped decking options", "Railing systems and accessory coordination", "Quote support for complete deck packages"],
  },
  {
    slug: "doors",
    name: "Doors",
    summary: "Interior, exterior, patio, and specialty door packages.",
    description: "With a Grimes custom door shop and showroom support, Beisser coordinates complete door packages for Iowa new construction and remodel work.",
    heroImage: "https://images.unsplash.com/photo-1505842465776-3d90f6163101?auto=format&fit=crop&w=1600&q=80",
    bullets: ["Interior and exterior door packages", "Custom-built doors from Grimes", "Hardware, glass, and trim coordination"],
  },
  {
    slug: "engineered-wood-products",
    name: "Engineered Wood Products",
    summary: "Weyerhaeuser engineered framing and Components Division support.",
    description: "Beisser supplies Weyerhaeuser beams, trusses, OSB, floor systems, and wall panelization through its Components Division.",
    heroImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
    bullets: ["LVL, LSL, PSL, and treated beams", "Floor trusses, roof trusses, and OSB panels", "Climate-controlled wall panelization"],
  },
  {
    slug: "building-envelope-accessories",
    name: "Building Envelope & Accessories",
    summary: "Housewrap, flashing, sealants, and transition details for complete wall systems.",
    description: "Beisser helps Iowa builders match WRBs, tapes, flashings, and sealants to siding, windows, and door assemblies.",
    heroImage: "https://images.unsplash.com/photo-1600585154203-aaefe2734275?auto=format&fit=crop&w=1600&q=80",
    bullets: ["Housewrap and WRB products", "Flashing tapes and sill details", "Sealants for openings and transitions"],
  },
  {
    slug: "lumber-panels",
    name: "Lumber & Panels",
    summary: "Framing lumber, treated lumber, plywood, OSB, and specialty boards.",
    description: "Beisser supplies core framing materials and panel products for jobs across Central and Eastern Iowa.",
    heroImage: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8c?auto=format&fit=crop&w=1600&q=80",
    bullets: ["Framing lumber packages", "OSB and plywood panels", "Cedar and treated lumber"],
  },
  {
    slug: "siding",
    name: "Siding",
    summary: "James Hardie, LP SmartSide, trim, soffit, and accessory systems.",
    description: "Beisser supports Iowa siding packages with James Hardie and LP SmartSide plus the trim and accessory pieces that complete the wall assembly.",
    heroImage: "https://images.unsplash.com/photo-1570129476766-47cbb58fc0c6?auto=format&fit=crop&w=1600&q=80",
    bullets: ["Fiber cement and engineered wood siding", "Trim and soffit coordination", "Takeoffs and package support"],
  },
  {
    slug: "stair-parts",
    name: "Stair Parts",
    summary: "Treads, rails, balusters, and accessories for complete stair systems.",
    description: "Beisser helps coordinate stair parts with millwork and finish selections for new homes and remodeling work.",
    heroImage: "https://images.unsplash.com/photo-1469796466635-455ede028aca?auto=format&fit=crop&w=1600&q=80",
    bullets: ["Wood and iron stair systems", "Showroom support for finish choices", "Packages tied to interior millwork"],
  },
  {
    slug: "millwork",
    name: "Millwork",
    summary: "Interior trim, mouldings, custom profiles, and finish details.",
    description: "Beisser's millwork offering supports practical trim packages, custom details, and historical profile matching for Iowa projects.",
    heroImage: "https://images.unsplash.com/photo-1595526114035-45c97e22c8c6?auto=format&fit=crop&w=1600&q=80",
    bullets: ["Base, casing, crown, and specialty profiles", "Historical profile matching", "Showroom and branch support"],
  },
  {
    slug: "windows-patio-doors",
    name: "Windows & Patio Doors",
    summary: "Gerkin, Andersen, and Sierra Pacific window and patio door systems.",
    description: "Beisser is an official retailer for Gerkin, Andersen, and Sierra Pacific windows and patio doors, helping Iowa customers compare vinyl, composite, wood, and clad options.",
    heroImage: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=80",
    bullets: ["Iowa-based Gerkin vinyl options", "Andersen 100, A, and E Series", "Sierra Pacific wood, clad, vinyl, and H3 composite"],
  },
  {
    slug: "hardware-screws",
    name: "Hardware & Screws",
    summary: "Structural screws, anchors, connectors, and builder hardware.",
    description: "Beisser helps contractors match hardware and screws to framing, decking, siding, and specialty applications.",
    heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80",
    bullets: ["Structural screws and connectors", "Anchors and specialty screws", "Jobsite hardware essentials"],
  },
];
