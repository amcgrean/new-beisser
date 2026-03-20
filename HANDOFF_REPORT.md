===== PLACEHOLDER CONTENT AUDIT =====

## Files still containing placeholder text:
app/team/page.tsx:14:            {person.bio ? <p className="mt-2 text-sm text-slate-700">{person.bio}</p> : <p className="mt-2 text-sm text-slate-500">Bio coming soon.</p>}
app/lib/brands.ts:21:const HERO_PLACEHOLDER = "/images/resources-article.png";
app/lib/brands.ts:22:const LOGO_PLACEHOLDER = "/images/resources-article.png";
app/lib/brands.ts:37:    heroImage: ensurePath(String(data.heroImage ?? HERO_PLACEHOLDER)),
app/lib/brands.ts:38:    logo: ensurePath(String(data.logo ?? LOGO_PLACEHOLDER)),
app/data/testimonials.ts:11:  { quote: "", name: "PLACEHOLDER", company: "PLACEHOLDER", branch: "Grimes", product: "Decking", date: "2026" },
app/data/testimonials.ts:12:  { quote: "", name: "PLACEHOLDER", company: "PLACEHOLDER", branch: "Coralville", product: "Siding", date: "2026" },
app/data/testimonials.ts:13:  { quote: "", name: "PLACEHOLDER", company: "PLACEHOLDER", branch: "Fort Dodge", product: "Windows", date: "2026" },
app/data/staff.ts:4:  { name: "PLACEHOLDER", role: "Branch Sales", branch: "Grimes", bio: "" },
app/data/staff.ts:5:  { name: "PLACEHOLDER", role: "Estimator", branch: "Coralville", bio: "" },
app/data/staff.ts:6:  { name: "PLACEHOLDER", role: "Project Support", branch: "Fort Dodge", bio: "" },

## Environment variables still needed before go-live:
# Environment Variables — Beisser Lumber Website

## Required before any form submission works:
RESEND_API_KEY=           # Resend API key — get from Resend dashboard
RESEND_FROM_EMAIL=        # Verified sender used for quote and service emails
QUOTE_EMAIL_GRIMES=       # Inside sales email for Grimes branch
QUOTE_EMAIL_CORALVILLE=   # Inside sales email for Coralville branch
QUOTE_EMAIL_FORT_DODGE=   # Inside sales email for Fort Dodge branch
QUOTE_EMAIL_BIRCHWOOD=    # Inside sales email for Birchwood/Johnston branch
QUOTE_EMAIL_CC=           # Central inbox CC'd on all submissions

## Required for analytics:
NEXT_PUBLIC_GA_ID=        # Google Analytics 4 Measurement ID (format: G-XXXXXXXXXX)

## Required for deployment:
NEXT_PUBLIC_SITE_URL=     # Full production URL: https://beisserlumber.com

## Optional:
CONTACT_EMAIL=            # General contact form destination
SERVICE_REQUEST_EMAIL=    # Service request form destination

## Pages missing schema:

## Redirects configured in next.config.js:
      { source: "/products/decking-railing/", destination: "/products/decking-railing", permanent: true },
      { source: "/products/doors/", destination: "/products/doors", permanent: true },
      { source: "/products/doors/interior-doors/", destination: "/products/doors/interior-doors", permanent: true },
      { source: "/products/doors/exterior-doors/", destination: "/products/doors/exterior-doors", permanent: true },
      { source: "/products/doors/door-hardware/", destination: "/products/doors/door-hardware", permanent: true },
      { source: "/products/engineered-wood-products/", destination: "/products/engineered-wood-products", permanent: true },
      { source: "/products/building-envelope-accessories/", destination: "/products/building-envelope-accessories", permanent: true },
      { source: "/products/lumber-panels/", destination: "/products/lumber-panels", permanent: true },
      { source: "/products/siding/", destination: "/products/siding", permanent: true },
      { source: "/products/stair-parts/", destination: "/products/stair-parts", permanent: true },
      { source: "/products/millwork/", destination: "/products/millwork", permanent: true },
      { source: "/products/windows-patio-doors/", destination: "/products/windows-patio-doors", permanent: true },
      { source: "/products/hardware-screws/", destination: "/products/hardware-screws", permanent: true },
      { source: "/company/", destination: "/about", permanent: true },
      { source: "/company/careers/", destination: "/careers", permanent: true },
      { source: "/professionals/", destination: "/pros", permanent: true },
      { source: "/locations/", destination: "/locations", permanent: true },
      { source: "/service-request/", destination: "/service-request", permanent: true },
      { source: "/literature/", destination: "/resources/literature", permanent: true },
      { source: "/literature", destination: "/resources/literature", permanent: true },
      { source: "/privacy", destination: "/privacy-policy", permanent: true },
      { source: "/privacy-policy/", destination: "/privacy-policy", permanent: true },
      { source: "/contact/contact-entries/", destination: "/contact", permanent: true },
      { source: "/products/decking", destination: "/products/decking-railing", permanent: true },
      { source: "/products/windows", destination: "/products/windows-patio-doors", permanent: true },
      { source: "/products/engineered-wood", destination: "/products/engineered-wood-products", permanent: true },
      { source: "/products/lumber", destination: "/products/lumber-panels", permanent: true },
      { source: "/products/weatherization", destination: "/products/building-envelope-accessories", permanent: true },
      { source: "/products/fasteners", destination: "/products/hardware-screws", permanent: true },
    ];
  },
