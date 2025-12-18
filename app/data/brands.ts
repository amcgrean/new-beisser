export type Brand = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  categories: string[]; // product category slugs
  website: string;
  heroImage: string;
  logo: string;
  bullets: string[];
};

const HERO_PLACEHOLDER = "/images/resources-article.png";
const LOGO_PLACEHOLDER = "/images/resources-article.png";

export const brands: Brand[] = [
  // WINDOWS & DOORS – MAJOR BRANDS
  {
    slug: "andersen",
    name: "Andersen",
    summary:
      "Windows and doors with multiple series for different budgets and performance needs.",
    description:
      "Windows and doors with multiple series for different budgets and performance needs. At Beisser Lumber, we stock and support Andersen as part of our windows and patio doors offering, helping Iowa builders compare series, dial in performance, and work with our team to keep projects moving on schedule.",
    categories: ["windows-and-patio-doors"],
    website: "https://www.andersenwindows.com/",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/Windows/Andersen 2 Color Logo.png",
    bullets: [
      "Recognizable name for homeowners and builders",
      "New construction and replacement options",
    ],
  },
  {
    slug: "gerkin",
    name: "Gerkin",
    summary:
      "Window and door products for residential and light commercial projects.",
    description:
      "Window and door products for residential and light commercial projects. At Beisser Lumber, we stock and support Gerkin as part of our windows and patio doors offering, giving our customers a reliable, performance-focused option backed by local service and jobsite support.",
    categories: ["windows-and-patio-doors"],
    website: "https://www.gerkin.com/",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/Windows/Gerkin Windows Logo.jpg",
    bullets: [
      "Vinyl and aluminum window options",
      "Products suited for regional performance expectations",
    ],
  },
  {
    slug: "hayfield",
    name: "Hayfield",
    summary:
      "Regional window and door manufacturer with products suited to local needs.",
    description:
      "Regional window and door manufacturer with products suited to local needs. At Beisser Lumber, we stock and support Hayfield as part of our windows and patio doors offering, helping Iowa builders match specs, budgets, and code requirements with a trusted regional partner.",
    categories: ["windows-and-patio-doors"],
    website: "https://hayfieldwindows.com/",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/Windows/Hayfield Logo.jfif",
    bullets: [
      "Window and patio door lines built for Midwest climates",
      "New construction and replacement series",
    ],
  },
  {
    slug: "hylite-windows",
    name: "HyLite Windows",
    summary: "Acrylic block and specialty window products.",
    description:
      "Acrylic block and specialty window products. At Beisser Lumber, we stock and support HyLite Windows as part of our windows and patio doors offering, giving builders and homeowners privacy-friendly daylighting options with local guidance on sizing and placement.",
    categories: ["windows-and-patio-doors"],
    website:
      "https://www.hy-lite.com/Hy-lite-US-Block-Windows-Welcome.cfm",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/Windows/Hylite Windows Logo.svg",
    bullets: [
      "Block windows for privacy and daylight",
      "Decorative and functional acrylic window units",
    ],
  },
  {
    slug: "jeld-wen",
    name: "Jeld Wen",
    summary:
      "Windows and doors for residential and light commercial projects.",
    description:
      "Windows and doors for residential and light commercial projects. At Beisser Lumber, we stock and support Jeld-Wen as part of our windows and patio doors and interior and exterior doors offering, making it easier for builders to keep window and door packages under one roof.",
    categories: ["windows-and-patio-doors", "interior-and-exterior-doors"],
    website: "https://www.jeld-wen.com/en-us",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/Windows/Jeld-wen Logo.png",
    bullets: [
      "Multiple window and door series in different materials",
      "Options for both new construction and replacement",
    ],
  },
  {
    slug: "plygem",
    name: "Plygem",
    summary: "Vinyl window and patio door products for many home styles.",
    description:
      "Vinyl window and patio door products for many home styles. At Beisser Lumber, we stock and support Plygem as part of our windows and patio doors offering, giving our customers a practical, value-driven vinyl window solution backed by local service.",
    categories: ["windows-and-patio-doors"],
    website: "https://www.plygem.com/",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/Windows/Plygem logo.png",
    bullets: [
      "Vinyl window and patio door options",
      "Series that address a range of price points",
    ],
  },
  {
    slug: "sierra-pacific",
    name: "Sierra Pacific",
    summary:
      "Wood and clad-wood windows and doors with a focus on design and performance.",
    description:
      "Wood and clad-wood windows and doors with a focus on design and performance. At Beisser Lumber, we stock and support Sierra Pacific as part of our windows and patio doors offering, helping Iowa builders bring higher-end window packages to life with showroom support and millwork expertise.",
    categories: ["windows-and-patio-doors"],
    website: "https://www.sierrapacificwindows.com/",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/Windows/Sierra Pacific Logo.png",
    bullets: [
      "Wood and clad-wood window systems",
      "Architectural and custom solutions for premium projects",
    ],
  },
  {
    slug: "velux",
    name: "Velux",
    summary:
      "Skylights, sun tunnels, and roof windows for natural light.",
    description:
      "Skylights, sun tunnels, and roof windows for natural light. At Beisser Lumber, we stock and support Velux as part of our windows and patio doors offering, helping builders integrate daylighting into roof designs with the right flashing kits and installation guidance.",
    categories: ["windows-and-patio-doors"],
    website: "https://www.veluxusa.com/",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/Windows/Velux Logo.png",
    bullets: [
      "Roof windows and skylights for added daylight",
      "Sun tunnels for smaller or interior rooms",
    ],
  },
  {
    slug: "viwintech",
    name: "ViWinTech",
    summary:
      "Vinyl window and door products for residential projects.",
    description:
      "Vinyl window and door products for residential projects. At Beisser Lumber, we stock and support ViWinTech as part of our windows and patio doors offering, giving builders a dependable vinyl window line matched to Midwestern performance expectations.",
    categories: ["windows-and-patio-doors"],
    website: "https://www.viwintech.com/",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/Windows/ViWinTech Logo.png",
    bullets: [
      "Vinyl windows for new construction and replacement",
      "Multiple styles and configurations available",
    ],
  },
  {
    slug: "weathershield",
    name: "WeatherShield",
    summary:
      "Windows and doors with a range of material and design choices.",
    description:
      "Windows and doors with a range of material and design choices. At Beisser Lumber, we stock and support WeatherShield as part of our windows and patio doors offering, helping builders match architectural requirements with flexible, design-driven window and door packages.",
    categories: ["windows-and-patio-doors"],
    website: "https://weathershield.com/",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/Windows/WeatherShield Logo.jfif",
    bullets: [
      "Wood, vinyl, and clad window and door products",
      "Modern, traditional, and custom design options",
    ],
  },
  {
    slug: "mirage-screens",
    name: "Mirage Screens",
    summary:
      "Retractable screen systems for doors and large openings.",
    description:
      "Retractable screen systems for doors and large openings. At Beisser Lumber, we stock and support Mirage as part of our windows and patio doors offering, helping customers keep views open while still gaining bug protection where it matters.",
    categories: ["windows-and-patio-doors"],
    website: "https://miragescreensystems.com/",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/Doors/Mirage Screen Systems Logo.png",
    bullets: [
      "Retractable-screeen solutions for doors and patios",
      "Helps maintain views and airflow",
    ],
  },

  // INTERIOR & EXTERIOR DOORS
  {
    slug: "bayerbuilt",
    name: "Bayer Built",
    summary:
      "Prehung door units, millwork, and related door components.",
    description:
      "Prehung door units, millwork, and related door components. At Beisser Lumber, we stock and support Bayer Built as part of our interior and exterior doors and millwork, stair parts, and interior trim offering, helping builders keep door packages, casing, and trim coordinated on every job.",
    categories: ["interior-and-exterior-doors", "millwork-and-trim"],
    website: "https://www.bayerbuilt.com/",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/Doors/Bayer Built Door Logo.png",
    bullets: [
      "Prehung interior and exterior door systems",
      "Coordinating millwork and trim options",
    ],
  },
  {
    slug: "masonite",
    name: "Masonite",
    summary:
      "Interior and exterior doors available in many panel, glass, and material options.",
    description:
      "Interior and exterior doors available in many panel, glass, and material options. At Beisser Lumber, we stock and support Masonite as part of our interior and exterior doors offering, helping Iowa builders match styles, budgets, and performance requirements with a deep catalog of options.",
    categories: ["interior-and-exterior-doors"],
    website: "https://www.masonite.com/",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/Doors/Masonite Logo.png",
    bullets: [
      "Interior doors for a wide range of budgets",
      "Fiberglass and steel exterior door options",
    ],
  },
  {
    slug: "midwest-iron-doors",
    name: "Midwest Iron Doors",
    summary: "Decorative and secure iron door packages.",
    description:
      "Decorative and secure iron door packages. At Beisser Lumber, we support Midwest Iron Doors as part of our interior and exterior doors offering, helping builders and homeowners create premium, statement entryways with local ordering and coordination.",
    categories: ["interior-and-exterior-doors"],
    website: "https://midwestirondoors.com/",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/Doors/Midwest Iron Doors Logo.svg",
    bullets: [
      "Iron entry doors with decorative glass and grilles",
      "Premium entryway solutions for custom homes",
    ],
  },
  {
    slug: "odl-glass",
    name: "ODL Glass",
    summary:
      "Decorative and clear glass for doors, sidelights, and windows.",
    description:
      "Decorative and clear glass for doors, sidelights, and windows. At Beisser Lumber, we stock and support ODL doorglass as part of our interior and exterior doors offering, making it easy to add privacy, style, or extra daylight to entry and patio doors.",
    categories: ["interior-and-exterior-doors"],
    website: "https://www.odl.com/",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/Doors/ODL Glass Logo.jfif",
    bullets: [
      "Decorative doorglass for entry doors",
      "Clear and textured glass options",
    ],
  },
  {
    slug: "stallion",
    name: "Stallion",
    summary: "Interior and exterior doors for residential projects.",
    description:
      "Interior and exterior doors for residential projects. At Beisser Lumber, we support Stallion as part of our interior and exterior doors offering, giving builders access to panel and glass door styles that work well in both starter and move-up homes.",
    categories: ["interior-and-exterior-doors"],
    website: "https://www.stalliondoors.com/",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/Doors/Stallion Door Logo.png",
    bullets: [
      "Interior and exterior door collections",
      "Panel and glass options for different looks",
    ],
  },
  {
    slug: "therma-tru",
    name: "Therma-Tru",
    summary:
      "Fiberglass and steel entry door systems designed for curb appeal, security, and performance.",
    description:
      "Fiberglass and steel entry door systems designed for curb appeal, security, and performance. At Beisser Lumber, we stock and support Therma-Tru as part of our interior and exterior doors offering, helping Iowa builders deliver full entry systems that install smoothly and perform in our climate.",
    categories: ["interior-and-exterior-doors"],
    website: "https://www.thermatru.com/",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/Doors/Therma-Tru.png",
    bullets: [
      "Entry door systems with a wide range of styles",
      "Engineered for weather resistance and durability",
    ],
  },
  {
    slug: "true-stile",
    name: "True Stile",
    summary:
      "Architectural interior and entry doors with deep customization options.",
    description:
      "Architectural interior and entry doors with deep customization options. At Beisser Lumber, we support TruStile as part of our interior and exterior doors offering, partnering with builders on higher-end and custom projects that demand precise details.",
    categories: ["interior-and-exterior-doors"],
    website: "https://www.trustile.com/",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/Doors/Trustile Logo.jfif",
    bullets: [
      "High-design interior and entry doors",
      "Custom panel, glass, and material choices",
    ],
  },
  {
    slug: "woodport",
    name: "Woodport",
    summary:
      "Interior and exterior wood doors in a variety of styles.",
    description:
      "Interior and exterior wood doors in a variety of styles. At Beisser Lumber, we stock and support Woodport as part of our interior and exterior doors offering, helping our customers add warmth and character through real wood door selections.",
    categories: ["interior-and-exterior-doors"],
    website: "https://woodportdoors.com/",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/Doors/Woodport Doors Logo.jfif",
    bullets: [
      "Wood doors for interior and exterior openings",
      "Range of panel designs, species, and finishes",
    ],
  },
  {
    slug: "pivot-doors-jeld-wen-iwp",
    name: "Pivot Doors (Jeld Wen IWP)",
    summary:
      "Pivot-style entry doors that create a modern, statement entrance.",
    description:
      "Pivot-style entry doors that create a modern, statement entrance. At Beisser Lumber, we support Jeld-Wen IWP pivot doors as part of our interior and exterior doors offering, helping builders spec, order, and coordinate these specialty units correctly.",
    categories: ["interior-and-exterior-doors"],
    website:
      "https://www.jeld-wen.com/en-us/search?query=pivot%20door&tab=products",
    heroImage: HERO_PLACEHOLDER,
    logo: LOGO_PLACEHOLDER,
    bullets: [
      "Large-format pivot entry doors",
      "Modern look for higher-end homes and projects",
    ],
  },

  // DECKING & EXTERIORS
  {
    slug: "azek",
    name: "Azek",
    summary: "PVC decking, trim, and exterior products.",
    description:
      "PVC decking, trim, and exterior products. At Beisser Lumber, we stock and support Azek as part of our decking and exterior projects offering, helping Iowa builders deliver low-maintenance, long-lasting decks and exterior details.",
    categories: ["decking-and-exteriors"],
    website: "https://azekco.com/",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/Decking & Railing/Azek Logo.jfif",
    bullets: [
      "Capped PVC decking resistant to moisture and staining",
      "Exterior trim and moulding products",
    ],
  },
  {
    slug: "deckorators",
    name: "Deckorators",
    summary:
      "Composite decking, railing, and accessories that support creative deck designs.",
    description:
      "Composite decking, railing, and accessories that support creative deck designs. At Beisser Lumber, we stock and support Deckorators as part of our decking and exterior projects offering, giving builders flexible design options with strong manufacturer backing.",
    categories: ["decking-and-exteriors"],
    website: "https://www.deckorators.com/",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/Decking & Railing/Deckorators Logo.jfif",
    bullets: [
      "Decking in a variety of colors and finishes",
      "Railing and accessories that coordinate with decking",
    ],
  },
  {
    slug: "dekpro-balusters",
    name: "DekPro Balusters",
    summary:
      "Aluminum railing and baluster systems for decks and exteriors.",
    description:
      "Aluminum railing and baluster systems for decks and exteriors. At Beisser Lumber, we stock and support DekPro as part of our decking and exterior projects offering, helping customers pair modern metal balusters with wood or composite framing.",
    categories: ["decking-and-exteriors"],
    website:
      "http://www.dekpromfg.com/aluminum-balusters.html?utm_source=BeisserLumber",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/Decking & Railing/DekPro Balusters Logo.jfif",
    bullets: [
      "Aluminum balusters for use with many deck systems",
      "Available in multiple colors and profiles",
    ],
  },
  {
    slug: "moistureshield",
    name: "MoistureShield",
    summary:
      "Composite decking engineered for performance in moisture-prone environments.",
    description:
      "Composite decking engineered for performance in moisture-prone environments. At Beisser Lumber, we stock and support MoistureShield as part of our decking and exterior projects offering, helping builders tackle ground-level and high-moisture deck installs with confidence.",
    categories: ["decking-and-exteriors"],
    website: "https://www.moistureshield.com/",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/Decking & Railing/MoistureShield Logo.jfif",
    bullets: [
      "Decking products designed to perform in wet conditions",
      "Boards that can be used in high-moisture areas",
    ],
  },
  {
    slug: "timbertech",
    name: "TimberTech",
    summary:
      "High-performance composite and PVC decking built for long-term durability and design flexibility.",
    description:
      "High-performance composite and PVC decking built for long-term durability and design flexibility. At Beisser Lumber, we stock and support TimberTech as part of our decking and exterior projects offering, helping Iowa builders pair the right color families and board technologies to each job.",
    categories: ["decking-and-exteriors"],
    website: "https://www.timbertech.com/",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/Decking & Railing/TimberTech Logo.png",
    bullets: [
      "PVC and composite decking options",
      "Color and texture choices for many designs",
    ],
  },
  {
    slug: "trex",
    name: "Trex",
    summary:
      "Composite decking and railing systems that stand up to heavy use and harsh weather with low maintenance.",
    description:
      "Composite decking and railing systems that stand up to heavy use and harsh weather with low maintenance. At Beisser Lumber, we stock and support Trex as part of our decking and exterior projects offering, ensuring pros can get popular colors, matching railing, and jobsite support in one place.",
    categories: ["decking-and-exteriors"],
    website: "https://www.trex.com/",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/Decking & Railing/Trex Logo.jfif",
    bullets: [
      "Composite decking options for a range of budgets",
      "Coordinating railing and accessories",
    ],
  },
  {
    slug: "trex-rain-escapes",
    name: "Trex Rain Escapes",
    summary: "An under-deck drainage system for dry space below decks.",
    description:
      "An under-deck drainage system for dry space below decks. At Beisser Lumber, we stock and support Trex RainEscape as part of our decking and exterior projects offering, helping builders turn the space under a deck into usable, protected storage or living area.",
    categories: ["decking-and-exteriors"],
    website: "https://trexrainescape.com/",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/Decking & Railing/Trex Rain Escapes Logo.png",
    bullets: [
      "Creates dry storage or living space below decks",
      "Helps protect framing and areas beneath decking",
    ],
  },
  {
    slug: "wild-hog-railing",
    name: "Wild Hog Railing",
    summary:
      "Mesh railing panels that create an open view with a modern aesthetic.",
    description:
      "Mesh railing panels that create an open view with a modern aesthetic. At Beisser Lumber, we stock and support Wild Hog as part of our decking and exterior projects offering, helping builders deliver modern, open railing designs that hold up to the elements.",
    categories: ["decking-and-exteriors"],
    website: "https://wildhograiling.com/",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/Decking & Railing/Wild Hog Railing Logo.jfif",
    bullets: [
      "Welded wire railing panels for decks and stairs",
      "Pairs with wood, composite, or metal framing",
    ],
  },
  {
    slug: "westbury-railing",
    name: "Westbury Railing",
    summary: "Aluminum railing systems for low-maintenance exteriors.",
    description:
      "Aluminum railing systems for low-maintenance exteriors. At Beisser Lumber, we stock and support Westbury as part of our decking and exterior projects offering, giving pros a clean aluminum railing option that installs fast and stays looking sharp.",
    categories: ["decking-and-exteriors"],
    website:
      "https://www.diggerspecialties.com/products/railing/westbury-aluminum-railing/",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/Decking & Railing/Westbury Logo.jfif",
    bullets: [
      "Aluminum railing in multiple styles and colors",
      "Ideal for low-maintenance deck and porch projects",
    ],
  },

  // SIDING & EXTERIOR TRIM
  {
    slug: "lp-smartside",
    name: "LP SmartSide (Siding)",
    summary:
      "Engineered wood siding products designed for performance and curb appeal.",
    description:
      "Engineered wood siding products designed for performance and curb appeal. At Beisser Lumber, we stock and support LP SmartSide as part of our siding and exterior trim offering, helping Iowa builders deliver durable exteriors that stand up to jobsite handling and Midwest weather.",
    categories: ["siding-and-exterior-trim"],
    website: "https://lpcorp.com/products/exterior/siding-trim",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/Siding/LP SmartSide Logo.png",
    bullets: [
      "Engineered wood lap, panel, and trim products",
      "Resists impact and harsh weather conditions",
    ],
  },
  {
    slug: "everlast-siding",
    name: "Everlast Siding",
    summary: "Composite siding for long-term performance and low upkeep.",
    description:
      "Composite siding for long-term performance and low upkeep. At Beisser Lumber, we stock and support Everlast as part of our siding and exterior trim offering, giving builders a premium, low-maintenance siding option for demanding projects.",
    categories: ["siding-and-exterior-trim"],
    website: "https://www.everlastsiding.com/",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/Siding/Everlast Siding Logo.jfif",
    bullets: [
      "Advanced composite siding with minimal maintenance",
      "Available in a variety of color options",
    ],
  },
  {
    slug: "james-hardie",
    name: "James Hardie",
    summary:
      "Fiber cement siding widely used for its durability and look.",
    description:
      "Fiber cement siding widely used for its durability and look. At Beisser Lumber, we stock and support James Hardie as part of our siding and exterior trim offering, helping pros navigate profiles, colors, and best practices for installs that look great and last.",
    categories: ["siding-and-exterior-trim"],
    website: "https://www.jameshardie.com/",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/Siding/James Hardie Logo.png",
    bullets: [
      "Fiber cement siding in many profiles",
      "Engineered for long-term exterior performance",
    ],
  },
  {
    slug: "lp",
    name: "LP",
    summary:
      "Engineered wood siding, sheathing, and structural products.",
    description:
      "Engineered wood siding, sheathing, and structural products. At Beisser Lumber, we stock and support LP as part of our siding and exterior trim and engineered wood products offering, helping builders tie together the structure and exterior envelope with compatible solutions.",
    categories: ["siding-and-exterior-trim", "engineered-wood-products"],
    website: "https://lpcorp.com/",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/Siding/LP Logo.png",
    bullets: [
      "Engineered wood siding and trim systems",
      "Sheathing and structural panel solutions",
    ],
  },
  {
    slug: "rollex-soffit",
    name: "Rollex Soffit",
    summary: "Soffit and exterior aluminum products.",
    description:
      "Soffit and exterior aluminum products. At Beisser Lumber, we stock and support Rollex as part of our siding and exterior trim offering, giving builders durable soffit and fascia solutions that pair cleanly with many siding systems.",
    categories: ["siding-and-exterior-trim"],
    website: "https://www.rollex.com/products",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/Siding/Rollex Soffit Logo.jpg",
    bullets: [
      "Aluminum soffit and trim products",
      "Works with many siding systems",
    ],
  },
  {
    slug: "tremco-vulkem",
    name: "Tremco/Vulkem",
    summary:
      "Sealants and coatings used for exterior building envelopes.",
    description:
      "Sealants and coatings used for exterior building envelopes. At Beisser Lumber, we stock and support Tremco/Vulkem as part of our siding and exterior trim and roofing offering, helping ensure the details around windows, doors, and transitions are sealed correctly.",
    categories: ["siding-and-exterior-trim", "roofing"],
    website: "https://www.tremcosealants.com/",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/Siding/Tremco Vulkem Logo.png",
    bullets: [
      "Sealants for joints and transitions",
      "Waterproofing and protective coating products",
    ],
  },
  {
    slug: "tyvek",
    name: "Tyvek",
    summary:
      "Housewrap products for managing air and moisture in walls.",
    description:
      "Housewrap products for managing air and moisture in walls. At Beisser Lumber, we stock and support Tyvek as part of our siding and exterior trim and housewrap and weatherization systems offering, helping Iowa builders protect wall assemblies before the siding ever goes on.",
    categories: ["siding-and-exterior-trim", "housewrap-and-weatherization"],
    website: "https://www.dupont.com/brands/tyvek.html",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/Siding/Tyvek Logo.jfif",
    bullets: [
      "Housewrap used beneath siding systems",
      "Helps protect walls from moisture intrusion",
    ],
  },

  // MILLWORK & TRIM
  {
    slug: "coffman",
    name: "Coffman",
    summary: "Stair parts, newels, and rail systems.",
    description:
      "Stair parts, newels, and rail systems. At Beisser Lumber, we stock and support Coffman as part of our millwork, stair parts, and interior trim offering, helping builders finish stair systems with coordinated components that fit the design and budget.",
    categories: ["millwork-and-trim"],
    website: "https://www.wm-coffman.com/",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/MIllwork/Coffman Stair Parts Logo.jfif",
    bullets: [
      "Hardwood and iron stair parts",
      "Options for traditional and modern staircase designs",
    ],
  },
  {
    slug: "empire-moulding-and-millwork",
    name: "Empire Moulding and Millwork",
    summary: "Mouldings, casings, and interior trim products.",
    description:
      "Mouldings, casings, and interior trim products. At Beisser Lumber, we stock and support Empire as part of our millwork, stair parts, and interior trim offering, helping pros pull together complete trim packages from one source.",
    categories: ["millwork-and-trim"],
    website: "https://www.empireco.com/",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/MIllwork/Empire Moulding Logo.png",
    bullets: [
      "Interior trim, casings, and mouldings",
      "Profiles in multiple species and styles",
    ],
  },
  {
    slug: "ferche",
    name: "Ferche",
    summary:
      "Hardwood mouldings, jambs, and custom millwork products.",
    description:
      "Hardwood mouldings, jambs, and custom millwork products. At Beisser Lumber, we stock and support Ferche as part of our millwork, stair parts, and interior trim offering, helping builders and finish carpenters get high-end wood details where it counts.",
    categories: ["millwork-and-trim"],
    website: "https://www.ferche.com/",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/MIllwork/Ferche Millwork Logo.png",
    bullets: [
      "Custom and standard hardwood mouldings",
      "Stain-grade solutions for higher-end interiors",
    ],
  },
  {
    slug: "forever-barnwood",
    name: "Forever Barnwood",
    summary:
      "Products that replicate the look of reclaimed barnwood.",
    description:
      "Products that replicate the look of reclaimed barnwood. At Beisser Lumber, we stock and support Forever Barnwood as part of our millwork, stair parts, and interior trim offering, helping customers add reclaimed-style walls and accents without hunting for actual barnwood.",
    categories: ["millwork-and-trim"],
    website: "https://foreverbarnwood.com/",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/MIllwork/Forever Barnwood Logo.jfif",
    bullets: [
      "Products inspired by reclaimed barnwood",
      "Options for interior accent walls and details",
    ],
  },
  {
    slug: "fypon",
    name: "Fypon",
    summary: "Polyurethane millwork, trim, and decorative elements.",
    description:
      "Polyurethane millwork, trim, and decorative elements. At Beisser Lumber, we stock and support Fypon as part of our millwork, stair parts, and interior trim offering, giving builders durable, low-maintenance millwork solutions for both interior and exterior details.",
    categories: ["millwork-and-trim"],
    website: "https://fypon.com/",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/MIllwork/Fypon Logo.jfif",
    bullets: [
      "Low-maintenance decorative millwork",
      "Exterior and interior trim possibilities",
    ],
  },
  {
    slug: "lj-smith-stair-parts",
    name: "LJ Smith Stair Parts",
    summary: "Stair components for interior stair systems.",
    description:
      "Stair components for interior stair systems. At Beisser Lumber, we stock and support LJ Smith as part of our millwork, stair parts, and interior trim offering, helping pros build out stair systems that match the home’s style and budget.",
    categories: ["millwork-and-trim"],
    website: "https://www.ljsmith.com/",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/MIllwork/LJ Smith Stair Parts Logo.jfif",
    bullets: [
      "Wood and iron stair part collections",
      "Balusters, newels, rails, and fittings",
    ],
  },
  {
    slug: "maple",
    name: "Maple",
    summary: "Stain-grade hardwood used for trim and millwork.",
    description:
      "Stain-grade hardwood used for trim and millwork. At Beisser Lumber, we stock and support Maple as part of our millwork, stair parts, and interior trim offering, helping finish carpenters deliver crisp, durable stain-grade results.",
    categories: ["millwork-and-trim"],
    website: "",
    heroImage: HERO_PLACEHOLDER,
    logo: LOGO_PLACEHOLDER,
    bullets: [
      "Stain-grade hardwood for interiors",
      "Used in trim, cabinetry, and finishes",
    ],
  },
  {
    slug: "oak",
    name: "Oak",
    summary:
      "Hardwood species widely used for flooring, trim, and millwork.",
    description:
      "Hardwood species widely used for flooring, trim, and millwork. At Beisser Lumber, we stock and support Oak as part of our millwork, stair parts, and interior trim offering, giving customers a timeless hardwood option for stairs and interior finishes.",
    categories: ["millwork-and-trim"],
    website: "",
    heroImage: HERO_PLACEHOLDER,
    logo: LOGO_PLACEHOLDER,
    bullets: [
      "Traditional hardwood choice for interiors",
      "Used in stairs, trim, and other finishes",
    ],
  },
  {
    slug: "poplar",
    name: "Poplar",
    summary: "Paint-grade hardwood commonly used for interior trim.",
    description:
      "Paint-grade hardwood commonly used for interior trim. At Beisser Lumber, we stock and support Poplar as part of our millwork, stair parts, and interior trim offering, providing a go-to species for smooth, painted interior trim packages.",
    categories: ["millwork-and-trim"],
    website: "",
    heroImage: HERO_PLACEHOLDER,
    logo: LOGO_PLACEHOLDER,
    bullets: [
      "Popular for painted trim and millwork",
      "Consistent appearance for clean details",
    ],
  },

  // LUMBER & PANELS
  {
    slug: "cedar",
    name: "Cedar",
    summary:
      "Natural wood known for its durability and resistance to decay.",
    description:
      "Natural wood known for its durability and resistance to decay. At Beisser Lumber, we stock and support Cedar as part of our lumber and panel products offering, supplying both appearance-grade and structural cedar for decks, siding, and exterior details.",
    categories: ["lumber-and-panels"],
    website: "",
    heroImage: HERO_PLACEHOLDER,
    logo: LOGO_PLACEHOLDER,
    bullets: [
      "Natural resistance to insects and moisture",
      "Used for exterior projects and decorative elements",
    ],
  },
  {
    slug: "cedar-carsiding",
    name: "Cedar Carsiding",
    summary:
      "Tongue-and-groove cedar siding products for a classic interior or exterior look.",
    description:
      "Tongue-and-groove cedar siding products for a classic interior or exterior look. At Beisser Lumber, we stock and support Cedar carsiding as part of our lumber and panel products offering, helping customers add warm, natural wood finishes to walls and ceilings.",
    categories: ["lumber-and-panels"],
    website: "",
    heroImage: HERO_PLACEHOLDER,
    logo: LOGO_PLACEHOLDER,
    bullets: [
      "Tongue-and-groove cedar boards",
      "Used for walls, ceilings, and exterior applications",
    ],
  },
  {
    slug: "cedar-decking",
    name: "Cedar Decking",
    summary: "Natural cedar boards used for decks and outdoor structures.",
    description:
      "Natural cedar boards used for decks and outdoor structures. At Beisser Lumber, we stock and support Cedar decking as part of our lumber and panel products offering, giving builders a natural alternative to composites and treated lumber.",
    categories: ["lumber-and-panels"],
    website: "",
    heroImage: HERO_PLACEHOLDER,
    logo: LOGO_PLACEHOLDER,
    bullets: [
      "Cedar deck boards with natural beauty",
      "Resistant to decay and weathering",
    ],
  },
  {
    slug: "cedar-siding",
    name: "Cedar Siding",
    summary: "Cedar siding options for exterior applications.",
    description:
      "Cedar siding options for exterior applications. At Beisser Lumber, we stock and support Cedar siding as part of our lumber and panel products offering, helping customers achieve classic wood exteriors with the right profiles and finishes.",
    categories: ["lumber-and-panels"],
    website: "",
    heroImage: HERO_PLACEHOLDER,
    logo: LOGO_PLACEHOLDER,
    bullets: [
      "Cedar siding with natural grain and character",
      "Options for lap, shakes, and more",
    ],
  },
  {
    slug: "firetreated-lumber",
    name: "Firetreated Lumber",
    summary: "Fire-treated wood products for code-driven applications.",
    description:
      "Fire-treated wood products for code-driven applications. At Beisser Lumber, we stock and support firetreated lumber as part of our lumber and panel products offering, helping builders meet code requirements where fire-rated materials are required.",
    categories: ["lumber-and-panels"],
    website: "",
    heroImage: HERO_PLACEHOLDER,
    logo: LOGO_PLACEHOLDER,
    bullets: [
      "Treated to meet fire rating requirements",
      "Used where code requires fire-retardant materials",
    ],
  },
  {
    slug: "plywood",
    name: "Plywood",
    summary: "Panel products used for sheathing, subfloors, and more.",
    description:
      "Panel products used for sheathing, subfloors, and more. At Beisser Lumber, we stock and support plywood as part of our lumber and panel products offering, providing a range of panel grades and thicknesses for structure and finish.",
    categories: ["lumber-and-panels"],
    website: "",
    heroImage: HERO_PLACEHOLDER,
    logo: LOGO_PLACEHOLDER,
    bullets: [
      "Panel products for structural and non-structural uses",
      "Used as subfloor, wall, and roof sheathing",
    ],
  },
  {
    slug: "osb",
    name: "OSB",
    summary:
      "Oriented strand board used widely as an engineered wood panel product.",
    description:
      "Oriented strand board used widely as an engineered wood panel product. At Beisser Lumber, we stock and support OSB as part of our lumber and panel products offering, helping builders meet structural needs for walls, roofs, and floors with reliable panel options.",
    categories: ["lumber-and-panels"],
    website: "",
    heroImage: HERO_PLACEHOLDER,
    logo: LOGO_PLACEHOLDER,
    bullets: [
      "Commonly used as sheathing and subfloors",
      "Engineered panel for structural applications",
    ],
  },

  // ENGINEERED WOOD, TRUSSES, & COMPONENTS
  {
    slug: "lsl",
    name: "LSL",
    summary: "Laminated strand lumber used as a structural component.",
    description:
      "Laminated strand lumber used as a structural component. At Beisser Lumber, we stock and support LSL as part of our engineered wood products offering, helping engineers and builders specify consistent, predictable structural members.",
    categories: ["engineered-wood-products"],
    website: "",
    heroImage: HERO_PLACEHOLDER,
    logo: LOGO_PLACEHOLDER,
    bullets: [
      "Engineered lumber for consistent performance",
      "Used in headers, beams, and structural applications",
    ],
  },
  {
    slug: "lvl",
    name: "LVL",
    summary: "Laminated veneer lumber used for beams and headers.",
    description:
      "Laminated veneer lumber used for beams and headers. At Beisser Lumber, we stock and support LVL as part of our engineered wood products offering, giving pros reliable options for headers, beams, and long-span applications.",
    categories: ["engineered-wood-products"],
    website: "",
    heroImage: HERO_PLACEHOLDER,
    logo: LOGO_PLACEHOLDER,
    bullets: [
      "Engineered wood beams and headers",
      "High strength-to-weight ratio for structural use",
    ],
  },
  {
    slug: "psl",
    name: "PSL",
    summary:
      "Parallel strand lumber used as a high-strength structural component.",
    description:
      "Parallel strand lumber used as a high-strength structural component. At Beisser Lumber, we stock and support PSL as part of our engineered wood products offering, helping projects that require heavily loaded beams and columns get the right material specified.",
    categories: ["engineered-wood-products"],
    website: "",
    heroImage: HERO_PLACEHOLDER,
    logo: LOGO_PLACEHOLDER,
    bullets: [
      "Engineered for high load applications",
      "Used in beams, columns, and headers",
    ],
  },
  {
    slug: "fir-glulams",
    name: "Fir Glulams",
    summary: "Glued laminated timber beams for structural applications.",
    description:
      "Glued laminated timber beams for structural applications. At Beisser Lumber, we stock and support fir glulams as part of our engineered wood products offering, helping builders span longer distances with engineered beams that can be left exposed or concealed.",
    categories: ["engineered-wood-products"],
    website: "",
    heroImage: HERO_PLACEHOLDER,
    logo: LOGO_PLACEHOLDER,
    bullets: [
      "Engineered beams sized for long spans",
      "Available in exposed or concealed applications",
    ],
  },
  {
    slug: "floor-trusses",
    name: "Floor Trusses",
    summary: "Engineered floor truss systems designed for each project.",
    description:
      "Engineered floor truss systems designed for each project. At Beisser Lumber, we design and supply floor trusses as part of our trusses, panels, and structural components offering, working with builders to coordinate layouts and mechanical runs.",
    categories: ["engineered-wood-products", "trusses-and-components"],
    website: "",
    heroImage: HERO_PLACEHOLDER,
    logo: LOGO_PLACEHOLDER,
    bullets: [
      "Floor truss systems engineered to spec",
      "Help manage long spans and service runs",
    ],
  },
  {
    slug: "house-panels",
    name: "House Panels (Prefab Walls)",
    summary:
      "Prefabricated wall panels designed to speed up framing on site.",
    description:
      "Prefabricated wall panels designed to speed up framing on site. At Beisser Lumber, we supply prefab wall panels as part of our trusses, panels, and structural components offering, helping frame crews move faster and reduce on-site waste.",
    categories: ["trusses-and-components"],
    website: "",
    heroImage: HERO_PLACEHOLDER,
    logo: LOGO_PLACEHOLDER,
    bullets: [
      "Pre-built wall panels delivered to site",
      "Helps reduce on-site framing time and waste",
    ],
  },
  {
    slug: "roof-trusses",
    name: "Roof Trusses",
    summary: "Engineered roof truss systems for efficient roof framing.",
    description:
      "Engineered roof truss systems for efficient roof framing. At Beisser Lumber, we design and supply roof trusses as part of our trusses, panels, and structural components offering, coordinating directly with builders, designers, and field crews to keep projects on track.",
    categories: ["trusses-and-components"],
    website: "",
    heroImage: HERO_PLACEHOLDER,
    logo: LOGO_PLACEHOLDER,
    bullets: [
      "Truss designs tailored to the roof plan",
      "Speeds installation and helps ensure consistency",
    ],
  },
  {
    slug: "weyerhaeuser",
    name: "Weyerhaeuser",
    summary: "Engineered wood, lumber, and building materials.",
    description:
      "Engineered wood, lumber, and building materials. At Beisser Lumber, we stock and support Weyerhaeuser as part of our engineered wood products and lumber and panel products offering, helping pros rely on consistent, well-documented structural solutions.",
    categories: ["engineered-wood-products", "lumber-and-panels"],
    website: "https://www.weyerhaeuser.com/",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/Engineered Wood Products/Weyerhaeuser Logo.jfif",
    bullets: [
      "Engineered wood I-joists, beams, and more",
      "Lumber and panel products for many applications",
    ],
  },

  // FASTENERS, TOOLS & HARDWARE
  {
    slug: "bronze-star-screws",
    name: "Bronze Star Screws",
    summary:
      "Exterior screws and fasteners designed for decking and outdoor projects.",
    description:
      "Exterior screws and fasteners designed for decking and outdoor projects. At Beisser Lumber, we stock and support Bronze Star Screws as part of our fasteners, anchors, and hardware offering, helping deck crews get reliable fastening systems for exterior work.",
    categories: ["tools-and-fasteners"],
    website: "https://www.westernbuildingsupply.com",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/Fasteners, Screws, Hardware/Bronze Star Logo.jfif",
    bullets: [
      "Exterior-grade screws for decking and more",
      "Engineered for corrosion resistance",
    ],
  },
  {
    slug: "camo",
    name: "Camo",
    summary: "Hidden deck fastening systems and tools.",
    description:
      "Hidden deck fastening systems and tools. At Beisser Lumber, we stock and support Camo as part of our fasteners, anchors, and hardware offering, helping builders deliver clean deck surfaces with fast, repeatable installation.",
    categories: ["tools-and-fasteners"],
    website: "http://www.camofasteners.com/",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/Fasteners, Screws, Hardware/Camo Fasteners Logo.jpg",
    bullets: [
      "Hidden fastening systems for composite and wood decking",
      "Tools designed for precise screw placement",
    ],
  },
  {
    slug: "fastenmaster",
    name: "Fastenmaster",
    summary:
      "Structural and specialty fasteners for decks, framing, and exterior work.",
    description:
      "Structural and specialty fasteners for decks, framing, and exterior work. At Beisser Lumber, we stock and support FastenMaster as part of our fasteners, anchors, and hardware offering, helping pros hit code requirements with structural screw solutions that speed installation.",
    categories: ["tools-and-fasteners"],
    website: "https://www.fastenmaster.com/",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/Fasteners, Screws, Hardware/Fastenmaster Logo.png",
    bullets: [
      "Fastening solutions for decking and framing",
      "Engineered for strength and code compliance",
    ],
  },
  {
    slug: "grk",
    name: "GRK",
    summary:
      "High-performance fasteners for framing, decking, and specialty uses.",
    description:
      "High-performance fasteners for framing, decking, and specialty uses. At Beisser Lumber, we stock and support GRK as part of our fasteners, anchors, and hardware offering, helping Iowa builders tackle tough framing and exterior applications with proven structural fasteners.",
    categories: ["tools-and-fasteners"],
    website: "https://www.grkfasteners.com/",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/Fasteners, Screws, Hardware/GRK logo.png",
    bullets: [
      "Structural fasteners engineered for demanding applications",
      "Used in framing, decks, and remodeling",
    ],
  },
  {
    slug: "hilti",
    name: "Hilti",
    summary:
      "Tools, fasteners, and anchors for professional construction work.",
    description:
      "Tools, fasteners, and anchors for professional construction work. At Beisser Lumber, we stock and support Hilti anchors and fasteners as part of our fasteners, anchors, and hardware offering, helping pros hit engineering specs in concrete and masonry.",
    categories: ["tools-and-fasteners"],
    website: "https://www.hilti.com/",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/Fasteners, Screws, Hardware/Hilti Logo.png",
    bullets: [
      "Professional tools and fastening systems",
      "Anchors, fasteners, and firestop products",
    ],
  },
  {
    slug: "national-hardware",
    name: "National Hardware",
    summary:
      "Hardware and specialty products for doors, gates, and projects.",
    description:
      "Hardware and specialty products for doors, gates, and projects. At Beisser Lumber, we stock and support National Hardware as part of our fasteners, anchors, and hardware offering, giving our customers access to a broad range of everyday hardware items.",
    categories: ["tools-and-fasteners"],
    website: "https://www.national-hardware.com/",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/Door Hardware/National Hardware Logo.png",
    bullets: [
      "General hardware for many applications",
      "Gate, barn door, and specialty items",
    ],
  },
  {
    slug: "schlage",
    name: "Schlage",
    summary:
      "Locksets and hardware widely used in residential construction.",
    description:
      "Locksets and hardware widely used in residential construction. At Beisser Lumber, we stock and support Schlage as part of our fasteners, anchors, and hardware offering, helping builders pair door slabs with dependable, familiar lock brands.",
    categories: ["tools-and-fasteners"],
    website: "https://www.schlage.com/en/home.html",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/Door Hardware/Schalge.png",
    bullets: [
      "Lock and hardware solutions for many door types",
      "Mechanical and smart lock options",
    ],
  },
  {
    slug: "trilennium-multi-point",
    name: "Trilennium Multi-point",
    summary:
      "Multi-point locking systems for enhanced door security and performance.",
    description:
      "Multi-point locking systems for enhanced door security and performance. At Beisser Lumber, we stock and support Trilennium as part of our fasteners, anchors, and hardware offering, helping builders deliver solid-feeling, secure entry systems on premium door packages.",
    categories: ["tools-and-fasteners"],
    website:
      "https://www.enduraproducts.com/trilennium-multi-point-locking-system/",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/Door Hardware/Trilennium Multi-point Logo.jfif",
    bullets: [
      "Multi-point locks for hinged entry doors",
      "Improved security and door sealing performance",
    ],
  },
  {
    slug: "quad-osi",
    name: "Quad OSI",
    summary:
      "Professional sealants and adhesives for siding and exterior work.",
    description:
      "Professional sealants and adhesives for siding and exterior work. At Beisser Lumber, we stock and support OSI Quad as part of our fasteners, anchors, and hardware and siding and exterior trim offering, helping seal up critical joints around windows, doors, and siding details.",
    categories: ["tools-and-fasteners", "siding-and-exterior-trim"],
    website: "https://www.ositough.com/en.html",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/Siding/Quad OSI Logo.png",
    bullets: [
      "Sealants designed for siding, window, and door joints",
      "Helps manage water and air infiltration",
    ],
  },
  {
    slug: "solar-seal",
    name: "Solar Seal",
    summary:
      "Sealants used for roofing, siding, and other exterior applications.",
    description:
      "Sealants used for roofing, siding, and other exterior applications. At Beisser Lumber, we stock and support Solar Seal as part of our fasteners, anchors, and hardware offering, helping manage tough exterior sealing conditions on roofs and walls.",
    categories: ["tools-and-fasteners"],
    website: "http://www.npcsealants.com/",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/Siding/Solar Seal Logo.png",
    bullets: [
      "Sealant for challenging exterior conditions",
      "Used where flexibility and adhesion matter",
    ],
  },
  {
    slug: "tapcon",
    name: "Tapcon",
    summary: "Concrete anchors for masonry and concrete fastening.",
    description:
      "Concrete anchors for masonry and concrete fastening. At Beisser Lumber, we stock and support Tapcon as part of our fasteners, anchors, and hardware offering, helping pros fasten securely into concrete and block where standard fasteners don’t cut it.",
    categories: ["tools-and-fasteners"],
    website: "https://www.tapcon.com/",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/Fasteners, Screws, Hardware/Tapcon Concrete Anchors Logo.png",
    bullets: [
      "Concrete and masonry fastening solutions",
      "Anchors designed for reliable holding strength",
    ],
  },

  // WINDOWS & DOORS - HARDWARE / ACCESSORIES
  {
    slug: "andersen-hardware",
    name: "Andersen Hardware",
    summary:
      "Hardware options designed specifically for Andersen windows and doors.",
    description:
      "Hardware options designed specifically for Andersen windows and doors. At Beisser Lumber, we stock and support Andersen hardware as part of our fasteners, anchors, and hardware and windows and patio doors offering, helping builders finish window and door packages with matching hardware solutions.",
    categories: ["tools-and-fasteners", "windows-and-patio-doors"],
    website: "https://www.andersenwindows.com/",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/Windows/Andersen 2 Color Logo.png",
    bullets: [
      "Locking and operating hardware matched to Andersen products",
      "Finishes and styles that complement the window or door",
    ],
  },
  {
    slug: "emtek",
    name: "Emtek",
    summary:
      "Decorative residential door hardware with many style options.",
    description:
      "Decorative residential door hardware with many style options. At Beisser Lumber, we stock and support Emtek as part of our fasteners, anchors, and hardware offering, helping designers and homeowners dial in the finishing touches on premium door packages.",
    categories: ["tools-and-fasteners"],
    website: "https://www.emtek.com/",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/Door Hardware/Emtek Logo.jfif",
    bullets: [
      "Decorative hardware for interior and exterior doors",
      "Customizable styles, finishes, and lever/knob options",
    ],
  },
  {
    slug: "kwikset",
    name: "Kwikset",
    summary: "Residential locksets and door hardware.",
    description:
      "Residential locksets and door hardware. At Beisser Lumber, we stock and support Kwikset as part of our fasteners, anchors, and hardware offering, providing dependable lock solutions for everyday residential projects.",
    categories: ["tools-and-fasteners"],
    website: "https://www.kwikset.com/",
    heroImage: HERO_PLACEHOLDER,
    logo: "/Logos/Door Hardware/Kwikset Logo.jfif",
    bullets: [
      "Locksets for a variety of residential door types",
      "Mechanical and electronic lock options",
    ],
  },
];

// Get all brands that belong to a given product category slug
export function getBrandsForCategory(categorySlug: string) {
  return brands.filter((brand) =>
    brand.categories?.includes(categorySlug)
  );
}

// Get a sorted list of brands that have at least one mapped category
export function getFilterableBrands() {
  return brands
    .filter((brand) => brand.categories && brand.categories.length > 0)
    .sort((a, b) => a.name.localeCompare(b.name));
}
