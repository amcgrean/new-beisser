import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./ui/Header";
import { Footer } from "./ui/Footer";
import Script from "next/script";

const siteTitle = "Beisser Lumber — Iowa's Largest Family-Owned Lumberyard";
const siteDescription = "Building materials for contractors and homeowners across Central and Eastern Iowa. Four locations, job site delivery, pro account pricing.";

export const metadata: Metadata = {
  metadataBase: new URL("https://beisserlumber.com"),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    type: "website",
    siteName: "Beisser Lumber",
    title: siteTitle,
    description: siteDescription,
    images: [{ url: "/og-default.svg", width: 1200, height: 630 }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beisser Lumber",
    description: "Iowa's largest family-owned lumberyard.",
    images: ["/og-default.svg"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Beisser Lumber",
  description: "Iowa's largest family-owned lumberyard, selling lumber, engineered wood, decking, siding, doors, and windows to contractors and homeowners.",
  url: "https://beisserlumber.com",
  logo: "https://beisserlumber.com/logo.png",
  foundingDate: "1953",
  areaServed: { "@type": "State", name: "Iowa" },
  sameAs: ["https://www.facebook.com/beisserlumber", "https://www.linkedin.com/company/beisser-lumber"],
  // "aggregateRating": {
  //   "@type": "AggregateRating",
  //   "ratingValue": "X.X",
  //   "reviewCount": "XXX"
  // }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
        <Header />
        <main className="flex-1 py-8">
          <div className="main-container">{children}</div>
        </main>
        <Footer />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

        {gaId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} window.gtag = gtag; gtag('js', new Date()); gtag('config', '${gaId}');`}
            </Script>
          </>
        ) : null}

        <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
