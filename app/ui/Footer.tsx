import Link from "next/link";
import Image from "next/image";
import { locations } from "@/app/data/locations";
import { accountLinks, productLinks, serviceLinks } from "@/app/data/navigation";

const footerLink = "text-white/75 transition-colors hover:text-white";
const footerHeading = "mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-gold-300";

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/pros", label: "Pros" },
  { href: "/showroom", label: "Showroom" },
  { href: "/careers", label: "Careers" },
  { href: "/community", label: "Community" },
  { href: "/blog", label: "Resources" },
  { href: "/resources/literature", label: "Literature & Spec Sheets" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://www.facebook.com/beisserlumber", label: "Facebook" },
  { href: "https://www.instagram.com/beisserlumber", label: "Instagram" },
  { href: "https://twitter.com/beisserlumber", label: "X (Twitter)" },
  { href: "https://www.linkedin.com/company/beisser-lumber-co.", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-brand-900 text-white">
      <div className="main-container py-14">
        <div className="flex flex-col gap-6 border-b border-white/10 pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="relative block h-10 w-[220px]">
              <Image src="/images/logos/beisser-logo-white.png" alt="Beisser Lumber Company" fill className="object-contain object-left" sizes="220px" />
            </span>
            <p className="mt-3 max-w-md text-sm text-white/75">Family-owned since 1953, serving builders and homeowners across Central and Eastern Iowa.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/quote" className="btn-on-dark">Request a Quote</Link>
            <Link href="/contact" className="btn-outline-on-dark">Contact Us</Link>
          </div>
        </div>

        <div className="grid gap-10 py-10 text-sm sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className={footerHeading}>Products</div>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.href}><Link href={link.href} className={footerLink}>{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <div className={footerHeading}>Services</div>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}><Link href={link.href} className={footerLink}>{link.label}</Link></li>
              ))}
              <li><Link href="/quote" className={footerLink}>Request a Quote</Link></li>
            </ul>
            <div className={`${footerHeading} mt-8`}>Your account</div>
            <ul className="space-y-2">
              {accountLinks.map((link) => (
                <li key={link.label}><a href={link.href} target="_blank" rel="noreferrer" className={footerLink}>{link.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className={footerHeading}>Company</div>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}><Link href={link.href} className={footerLink}>{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <div className={footerHeading}>Locations</div>
            <div className="space-y-4">
              {locations.map((location) => (
                <address key={location.slug} className="not-italic text-white/75">
                  <Link href={`/locations/${location.slug}`} className="font-semibold text-white hover:underline">{location.shortName}</Link>
                  <div>{location.addressLine1}, {location.city}</div>
                  <a href={`tel:${location.phone.replace(/[^\d]/g, "")}`} className={footerLink}>{location.phone}</a>
                </address>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Beisser Lumber Company. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {socialLinks.map((link) => (
              <li key={link.href}><a href={link.href} target="_blank" rel="noreferrer" className="hover:text-white">{link.label}</a></li>
            ))}
            <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
