import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./ui/Header";
import { Footer } from "./ui/Footer";
import Script from "next/script";

const siteTitle = "Iowa's Largest Family-Owned Lumberyard | Beisser Lumber";
const siteDescription = "Iowa's largest family-owned lumberyard, established in 1953. Selling lumber, engineered wood, decking, siding, doors, and windows to contractors and homeowners across Central and Eastern Iowa.";

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
    title: siteTitle,
    description: siteDescription,
    images: ["/og-default.svg"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Beisser Lumber",
  legalName: "Beisser Lumber Company",
  foundingDate: "1953",
  foundingLocation: "Fort Dodge, Iowa",
  description: siteDescription,
  slogan: "Iowa's Largest Family-Owned Lumberyard",
  url: "https://beisserlumber.com",
  logo: "https://beisserlumber.com/logo.png",
  telephone: "(515) 986-4422",
  areaServed: {
    "@type": "State",
    name: "Iowa",
    description: "Central and Eastern Iowa including Des Moines metro, Iowa City/Coralville, Fort Dodge, and surrounding communities",
  },
  sameAs: [
    "https://www.facebook.com/beisserlumber",
    "https://www.instagram.com/beisserlumber",
    "https://twitter.com/beisserlumber",
    "https://www.linkedin.com/company/beisser-lumber-co.",
  ],
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
