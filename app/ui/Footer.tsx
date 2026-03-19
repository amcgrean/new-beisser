import Link from "next/link";
import { locations } from "@/app/data/locations";

const footerLink = "transition-colors hover:text-brand-accent";

export function Footer() {
  return (
    <footer className="mt-8 border-t border-slate-800 bg-slate-900 text-slate-100">
      <div className="main-container grid gap-8 py-10 text-sm md:grid-cols-4">
        <div className="space-y-3">
          <div className="mb-1 text-base font-semibold">Beisser Lumber</div>
          <p className="text-slate-400">Iowa&apos;s Largest Family-Owned Lumberyard Since 1953</p>
          <div className="space-y-3 text-slate-300">
            {locations.map((location) => (
              <address key={location.slug} className="not-italic">
                <strong>{location.shortName}</strong>
                <div>{location.addressLine1}</div>
                <div>{location.city}, {location.state} {location.zip}</div>
                <a href={`tel:${location.phone.replace(/[^\d]/g, "")}`} className={footerLink}>{location.phone}</a>
              </address>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-2 font-semibold">Products</div>
          <ul className="space-y-1 text-slate-300">
            <li><Link href="/products/decking-railing" className={footerLink}>Decking &amp; Railing</Link></li>
            <li><Link href="/products/doors" className={footerLink}>Doors</Link></li>
            <li><Link href="/products/engineered-wood-products" className={footerLink}>Engineered Wood Products</Link></li>
            <li><Link href="/products/building-envelope-accessories" className={footerLink}>Building Envelope &amp; Accessories</Link></li>
            <li><Link href="/products/lumber-panels" className={footerLink}>Lumber &amp; Panels</Link></li>
            <li><Link href="/products/siding" className={footerLink}>Siding</Link></li>
            <li><Link href="/products/stair-parts" className={footerLink}>Stair Parts</Link></li>
            <li><Link href="/products/millwork" className={footerLink}>Millwork</Link></li>
            <li><Link href="/products/windows-patio-doors" className={footerLink}>Windows &amp; Patio Doors</Link></li>
            <li><Link href="/products/hardware-screws" className={footerLink}>Hardware &amp; Screws</Link></li>
          </ul>
        </div>

        <div>
          <div className="mb-2 font-semibold">Services</div>
          <ul className="space-y-1 text-slate-300">
            <li><Link href="/services/design" className={footerLink}>Design</Link></li>
            <li><Link href="/services/estimating" className={footerLink}>Estimating</Link></li>
            <li><Link href="/services/installation" className={footerLink}>Installation</Link></li>
            <li><Link href="/service-request" className={footerLink}>Service Request</Link></li>
            <li><Link href="/quote" className={footerLink}>Request a Quote</Link></li>
            <li><a href="https://www.nuvo.credit/app/beisserlumber" target="_blank" rel="noreferrer" className={footerLink}>Credit Application</a></li>
            <li><a href="https://beisserlumber.com/ar-login" target="_blank" rel="noreferrer" className={footerLink}>Account / AR Portal Sign In</a></li>
          </ul>
        </div>

        <div>
          <div className="mb-2 font-semibold">Company</div>
          <ul className="space-y-1 text-slate-300">
            <li><Link href="/about" className={footerLink}>About</Link></li>
            <li><Link href="/pros" className={footerLink}>Pros</Link></li>
            <li><Link href="/careers" className={footerLink}>Careers</Link></li>
            <li><Link href="/contact" className={footerLink}>Contact</Link></li>
            <li><Link href="/privacy" className={footerLink}>Privacy Policy</Link></li>
          </ul>
          <div className="mt-4 space-y-1 text-slate-300">
            <a href="https://www.facebook.com/beisserlumber" target="_blank" rel="noreferrer" className={footerLink}>Facebook</a>
            <a href="https://www.linkedin.com/company/beisser-lumber-co." target="_blank" rel="noreferrer" className={footerLink}>LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 py-3 text-center text-xs text-slate-500">© {new Date().getFullYear()} Beisser Lumber. All rights reserved.</div>
    </footer>
  );
}
