export type Product = {
  slug: string;
  name: string;
  category: string; // category slug
  summary: string;
  description: string;
  image: string;
  badges?: string[];
};

export const products: Product[] = [
  // WINDOWS & PATIO DOORS
  {
    slug: "new-construction-windows",
    name: "New Construction Window Packages",
    category: "windows-and-patio-doors",
    summary: "Complete window packages spec’d for Iowa new construction.",
    description:
      "Coordinated window packages using trusted brands, sized and spec’d for each plan. Includes support with takeoffs, options by series, and guidance on code and energy requirements.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a5345c9bc?auto=format&fit=crop&w=1200&q=80",
    badges: ["Popular", "Energy Efficient"],
  },
  {
    slug: "replacement-windows",
    name: "Replacement Window Solutions",
    category: "windows-and-patio-doors",
    summary: "Window options suited to remodel and replacement work.",
    description:
      "Replacement-focused window lines and sizing support to fit existing openings with minimal disruption. Ideal for remodelers and service-focused builders.",
    image:
      "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=1200&q=80",
    badges: ["Remodel Friendly"],
  },
  {
    slug: "patio-door-systems",
    name: "Patio Door Systems",
    category: "windows-and-patio-doors",
    summary: "Sliding and hinged patio doors with matching finishes.",
    description:
      "Sliding, French, and multi-panel patio door systems that align with your window packages, with options for upgraded glass, hardware, and blinds-between-glass.",
    image:
      "https://images.unsplash.com/photo-1519710884009-22a691530a12?auto=format&fit=crop&w=1200&q=80",
    badges: ["High Demand"],
  },

  // DOORS
  {
    slug: "fiberglass-entry-doors",
    name: "Fiberglass Entry Door Systems",
    category: "interior-and-exterior-doors",
    summary: "Durable, low-maintenance entry doors with curb appeal.",
    description:
      "Fiberglass entry door systems built for Midwest weather with options for glass, sidelites, and stain or paint finishes. Great balance of performance and aesthetics.",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
    badges: ["Most Popular"],
  },
  {
    slug: "interior-door-packages",
    name: "Interior Door Packages",
    category: "interior-and-exterior-doors",
    summary: "Matched interior door styles across the entire plan.",
    description:
      "Complete interior door packages with coordinated styles, profiles, and hardware prepped to match your trim package and target budget.",
    image:
      "https://images.unsplash.com/photo-1600585152915-d208bec867a8?auto=format&fit=crop&w=1200&q=80",
    badges: ["Builder Favorite"],
  },
  {
    slug: "feature-doors-custom",
    name: "Feature & Custom Doors",
    category: "interior-and-exterior-doors",
    summary: "Statement doors for entries, offices, and specialty spaces.",
    description:
      "Pivot, iron, and high-design doors used to create focal points in custom homes and high-visibility spaces, with support from our millwork team.",
    image:
      "https://images.unsplash.com/photo-1597260614070-a1f7c3c150a4?auto=format&fit=crop&w=1200&q=80",
    badges: ["Showroom Feature"],
  },

  // DECKING
  {
    slug: "composite-decking-packages",
    name: "Composite Decking Packages",
    category: "decking-and-exteriors",
    summary: "Complete deck board and fastener packages from leading brands.",
    description:
      "Composite and PVC deck boards bundled with recommended fasteners and accessories. Designed to reduce callbacks and keep decks looking sharp for years.",
    image:
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200&q=80",
    badges: ["Low Maintenance"],
  },
  {
    slug: "railing-systems",
    name: "Railing Systems",
    category: "decking-and-exteriors",
    summary: "Aluminum, composite, and mesh railing options.",
    description:
      "Coordinated railing systems including aluminum, composite, cable, and mesh options. We help you pair railings with deck boards for a cohesive look.",
    image:
      "https://images.unsplash.com/photo-1523419409543-3e4f83b9b4c9?auto=format&fit=crop&w=1200&q=80",
    badges: ["Safety & Style"],
  },
  {
    slug: "under-deck-drainage",
    name: "Under-Deck Drainage & Dry Space",
    category: "decking-and-exteriors",
    summary: "Create usable space under second-story decks.",
    description:
      "Under-deck drainage systems that help you create dry storage or living space below raised decks, matched to the decking products you choose.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    badges: ["Upgrade Option"],
  },

  // SIDING
  {
    slug: "fiber-cement-siding-systems",
    name: "Fiber Cement Siding Systems",
    category: "siding-and-exterior-trim",
    summary: "Fiber cement siding packages built for Midwest weather.",
    description:
      "Fiber cement lap, panel, and trim packages with matching accessories and color options, plus guidance on install details and best practices.",
    image:
      "https://images.unsplash.com/photo-1570129476766-47cbb58fc0c6?auto=format&fit=crop&w=1200&q=80",
    badges: ["Durable"],
  },
  {
    slug: "engineered-wood-siding",
    name: "Engineered Wood Siding Packages",
    category: "siding-and-exterior-trim",
    summary: "Engineered wood siding for impact and weather resistance.",
    description:
      "Engineered wood siding systems that balance durability, appearance, and install speed, supported by our sales team and vendor partners.",
    image:
      "https://images.unsplash.com/photo-1570129476766-47cbb58fc0c6?auto=format&fit=crop&w=1200&q=80",
    badges: ["Jobsite Tough"],
  },

  // MILLWORK
  {
    slug: "trim-packages",
    name: "Interior Trim Packages",
    category: "millwork-and-trim",
    summary: "Coordinated casing, base, and crown throughout the home.",
    description:
      "Trim packages built from consistent profiles and species, pre-planned to keep interior finishes unified and easy to install.",
    image:
      "https://images.unsplash.com/photo-1595526114035-45c97e22c8c6?auto=format&fit=crop&w=1200&q=80",
    badges: ["Coordinated"],
  },
  {
    slug: "stair-systems",
    name: "Stair Systems",
    category: "millwork-and-trim",
    summary: "Stair parts, rails, and balusters in wood and iron.",
    description:
      "Complete stair systems including treads, risers, newels, rails, and balusters, with options from traditional to modern.",
    image:
      "https://images.unsplash.com/photo-1469796466635-455ede028aca?auto=format&fit=crop&w=1200&q=80",
    badges: ["Customizable"],
  },

  // LUMBER
  {
    slug: "framing-lumber",
    name: "Framing Lumber Packages",
    category: "lumber-and-panels",
    summary: "Dimensional lumber packages pulled to your plan.",
    description:
      "Lumber packages built to plan, with attention to stock quality and jobsite handling so crews can stay focused on framing, not sorting.",
    image:
      "https://images.unsplash.com/photo-1581091012184-5c1dba05f949?auto=format&fit=crop&w=1200&q=80",
    badges: ["Core Material"],
  },
  {
    slug: "cedar-and-specialty",
    name: "Cedar & Specialty Boards",
    category: "lumber-and-panels",
    summary: "Cedar and specialty boards for exterior and accent work.",
    description:
      "Cedar and other specialty species used for decks, accents, and exterior details, all available through our yards and showroom.",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1200&q=80",
    badges: ["Appearance Grade"],
  },

  // EWP
  {
    slug: "engineered-beams-headers",
    name: "Engineered Beams & Headers",
    category: "engineered-wood-products",
    summary: "LVL, LSL, and PSL beams sized to spec.",
    description:
      "Engineered beams and headers from LVL, LSL, and PSL solutions, sized to your loads with support from our team and supplier resources.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    badges: ["Engineered"],
  },
  {
    slug: "floor-systems",
    name: "Engineered Floor Systems",
    category: "engineered-wood-products",
    summary: "I-joists and floor trusses designed for your plan.",
    description:
      "Full floor system designs using I-joists and/or trusses, including layout support and coordination with other trades.",
    image:
      "https://images.unsplash.com/photo-1600566752525-2c8fbf4a4e2b?auto=format&fit=crop&w=1200&q=80",
    badges: ["Span Solutions"],
  },

  // TRUSSES & COMPONENTS
  {
    slug: "roof-truss-packages",
    name: "Roof Truss Packages",
    category: "trusses-and-components",
    summary: "Roof trusses engineered and delivered to site.",
    description:
      "Roof truss packages built to your plans, with attention to bearing points, loading, and jobsite handling.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
    badges: ["Engineered"],
  },
  {
    slug: "wall-panel-systems",
    name: "Prefab Wall Panel Systems",
    category: "trusses-and-components",
    summary: "Wall panels to speed up framing and reduce waste.",
    description:
      "Prebuilt wall panels delivered ready for install, helping crews turn projects faster and reduce on-site cutting.",
    image:
      "https://images.unsplash.com/photo-1600566752381-7885b82c0f87?auto=format&fit=crop&w=1200&q=80",
    badges: ["Time Saver"],
  },

  // FASTENERS
  {
    slug: "structural-fasteners",
    name: "Structural Fastener Systems",
    category: "tools-and-fasteners",
    summary: "High-strength fasteners for framing and decks.",
    description:
      "Structural screw systems and specialty fasteners designed to meet or exceed code, matched to your framing and deck designs.",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1200&q=80",
    badges: ["Code Focused"],
  },
  {
    slug: "anchors-and-adhesives",
    name: "Anchors & Adhesives",
    category: "tools-and-fasteners",
    summary: "Concrete anchors and construction adhesives.",
    description:
      "Anchoring products and adhesives used in structural connections, decks, and exterior assemblies, stocked in our yards for quick access.",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1200&q=80",
    badges: ["Jobsite Essentials"],
  },

  // WEATHERIZATION
  {
    slug: "housewrap-systems",
    name: "Housewrap Systems",
    category: "housewrap-and-weatherization",
    summary: "Housewrap and accessories to protect the building envelope.",
    description:
      "Housewrap systems, tapes, and flashings that work together to control air and moisture, backed by manufacturer details and local experience.",
    image:
      "https://images.unsplash.com/photo-1600585154203-aaefe2734275?auto=format&fit=crop&w=1200&q=80",
    badges: ["Envelope"],
  },

  // ROOFING
  {
    slug: "shingle-roof-packages",
    name: "Shingle Roof Packages",
    category: "roofing",
    summary: "Shingle, underlayment, and accessory packages.",
    description:
      "Roofing packages including shingles, underlayments, vents, and accessories selected to match performance and budget needs.",
    image:
      "https://images.unsplash.com/photo-1597006700454-3b6a5ff70163?auto=format&fit=crop&w=1200&q=80",
    badges: ["Core Package"],
  },
];

export function getProductsForCategory(categorySlug: string) {
  return products.filter((p) => p.category === categorySlug);
}
