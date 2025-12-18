export type ProductCategory = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  heroImage: string;
  bullets: string[];
};

export const productCategories: ProductCategory[] = [
  {
    slug: "windows-and-patio-doors",
    name: "Windows & Patio Doors",
    summary: "Energy-efficient windows and patio doors for Iowa homes.",
    description:
      "Windows and patio doors do more than fill an opening – they set the tone for the entire home’s look, comfort, and efficiency. From builder-favorite vinyl to high-end clad wood, Beisser Lumber helps you match the right window and door line to each project’s budget, performance requirements, and design style so installs go smoothly and homeowners are happy for the long haul.",
    heroImage:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=80",
    bullets: [
      "Vinyl, composite, and clad-wood window options",
      "New construction and replacement solutions",
      "Local support on sizing, specs, and install details",
    ],
  },
  {
    slug: "interior-and-exterior-doors",
    name: "Interior & Exterior Doors",
    summary: "Complete door packages for interiors and entry systems.",
    description:
      "Interior and exterior doors have a huge impact on both curb appeal and how a home feels to live in every day. Beisser Lumber works with top door manufacturers to build complete packages – slabs, frames, hardware, and glass – so you get doors that fit, swing, and perform the way they should. Our team helps you sort through options and keep door schedules organized from quote to delivery.",
    heroImage:
      "https://images.unsplash.com/photo-1505842465776-3d90f6163101?auto=format&fit=crop&w=1600&q=80",
    bullets: [
      "Interior, entry, and specialty door solutions",
      "Fiberglass, steel, and wood door options",
      "Coordinated hardware, glass, and trim packages",
    ],
  },
  {
    slug: "decking-and-exteriors",
    name: "Decking & Exterior Living",
    summary: "Composite, PVC, and wood decking with rails and accessories.",
    description:
      "Outdoor living spaces are a must-have for today’s buyers, and the right decking package can make or break the experience. Beisser Lumber partners with leading composite, PVC, and railing brands to help you build decks that perform in Midwest weather and still look clean years down the road. Our team can help you compare board technologies, color families, and railing options to fit each project.",
    heroImage:
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1600&q=80",
    bullets: [
      "Composite, PVC, and natural wood decking choices",
      "Aluminum, cable, and mesh railing systems",
      "Under-deck drainage and accessory solutions",
    ],
  },
  {
    slug: "siding-and-exterior-trim",
    name: "Siding & Exterior Trim",
    summary: "Fiber cement, engineered wood, and composite siding systems.",
    description:
      "Siding and exterior trim carry the load on curb appeal and long-term durability. Whether you’re working with fiber cement, engineered wood, or specialty composite systems, Beisser Lumber helps you design complete wall packages that include siding, trim, housewrap, and sealants that play well together. Our team is here to help you hit manufacturer guidelines and local code requirements with confidence.",
    heroImage:
      "https://images.unsplash.com/photo-1570129476766-47cbb58fc0c6?auto=format&fit=crop&w=1600&q=80",
    bullets: [
      "Fiber cement, engineered wood, and composite siding",
      "Coordinated trim, soffit, and accessory components",
      "Jobsite-driven advice for details and transitions",
    ],
  },
  {
    slug: "millwork-and-trim",
    name: "Millwork, Stair Parts & Interior Trim",
    summary: "From base and casing to stair systems and feature walls.",
    description:
      "Interior trim and millwork are where projects go from ‘framed’ to ‘finished.’ Beisser Lumber supplies mouldings, stair parts, and specialty millwork in species and profiles that work for starter homes, custom builds, and everything in between. Our showroom and millwork team help you build coordinated interior packages that keep base, casing, doors, and stair details consistent throughout the home.",
    heroImage:
      "https://images.unsplash.com/photo-1595526114035-45c97e22c8c6?auto=format&fit=crop&w=1600&q=80",
    bullets: [
      "Casing, base, crown, and specialty profiles",
      "Stair parts in wood and iron systems",
      "Paint- and stain-grade options for every budget",
    ],
  },
  {
    slug: "lumber-and-panels",
    name: "Lumber & Panel Products",
    summary: "Dimensional lumber and panels for framing and sheathing.",
    description:
      "Solid framing starts with the right lumber and panels on the job at the right time. Beisser Lumber carries dimensional lumber, cedar, treated options, plywood, and OSB to cover everything from basic framing to specialty exterior work. Our focus is on consistent stock, reliable deliveries, and helping your crews stay productive instead of chasing material problems.",
    heroImage:
      "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8c?auto=format&fit=crop&w=1600&q=80",
    bullets: [
      "Dimensional lumber for wall, floor, and roof framing",
      "Plywood and OSB for subfloors and sheathing",
      "Cedar and specialty boards for exterior applications",
    ],
  },
  {
    slug: "engineered-wood-products",
    name: "Engineered Wood Products",
    summary: "LVL, LSL, PSL, and engineered beams for modern structures.",
    description:
      "As spans get longer and floor plans more open, engineered wood becomes a core part of the structure. Beisser Lumber provides LVL, LSL, PSL, and glulam solutions, backed by takeoff support and layout help so you can get the right members in the right places. We work closely with our suppliers to make sure your beams, headers, and joists fit the plan and arrive when you need them.",
    heroImage:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
    bullets: [
      "LVL, LSL, PSL, and glulam beam options",
      "Engineered floor systems and I-joists",
      "Design and layout support from our team",
    ],
  },
  {
    slug: "trusses-and-components",
    name: "Trusses, Panels & Structural Components",
    summary: "Engineered roof trusses, floor trusses, and prefab wall panels.",
    description:
      "Roof trusses, floor trusses, and prefab wall panels can dramatically speed up framing and reduce jobsite waste. Beisser Lumber partners with trusted component manufacturers and provides in-house coordination to align plans, loads, and jobsite conditions. Our goal is to get you components that fit, go up quickly, and keep your crews focused on building — not rework.",
    heroImage:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=80",
    bullets: [
      "Roof trusses engineered to your plans",
      "Floor truss systems with built-in service chases",
      "Prefab wall panels for faster, cleaner framing",
    ],
  },
  {
    slug: "tools-and-fasteners",
    name: "Fasteners, Anchors & Hardware",
    summary: "Structural screws, anchors, sealants, and everyday hardware.",
    description:
      "Fasteners and hardware are where plans meet reality. From structural screws and concrete anchors to adhesives and sealants, Beisser Lumber stocks the brands builders trust to keep decks, frames, and exteriors solid over time. Our sales and yard teams help you match the right fastener system to each application so you’re not improvising on site.",
    heroImage:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80",
    bullets: [
      "Structural screws for framing and decks",
      "Concrete and masonry anchoring solutions",
      "Sealants, adhesives, and finish hardware",
    ],
  },
  {
    slug: "housewrap-and-weatherization",
    name: "Housewrap & Weatherization",
    summary: "Systems that protect the building envelope from air and moisture.",
    description:
      "A good wall starts behind the siding. Housewraps, flashings, and sealants work together to manage air and moisture before finish materials go on. Beisser Lumber helps builders build complete weatherization systems — not just housewrap rolls — with products that meet code, follow manufacturer best practices, and hold up to real jobsite conditions.",
    heroImage:
      "https://images.unsplash.com/photo-1600585154203-aaefe2734275?auto=format&fit=crop&w=1600&q=80",
    bullets: [
      "Housewrap and flashing products",
      "Sealants specified for windows, doors, and siding",
      "Guidance on detailing critical transitions",
    ],
  },
  {
    slug: "roofing",
    name: "Roofing & Roof Accessories",
    summary: "Roofing materials and accessories for protection and performance.",
    description:
      "The roof is the first line of defense for any structure. Beisser Lumber supplies shingles, underlayments, flashings, and roof accessories to help crews build roof systems that last. We focus on reliable brands, clean deliveries, and supporting the details that keep roofs dry through Iowa weather cycles.",
    heroImage:
      "https://images.unsplash.com/photo-1597006700454-3b6a5ff70163?auto=format&fit=crop&w=1600&q=80",
    bullets: [
      "Shingles and roof underlayments",
      "Flashing and roof accessory components",
      "Support selecting systems for local conditions",
    ],
  },
];
