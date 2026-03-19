import Link from "next/link";
import { locations } from "@/app/data/locations";

const footerLink = "transition-colors hover:text-brand-accent";

export function Footer() {
  return (
    <footer className="mt-8 border-t border-slate-800 bg-slate-900 text-slate-100">
      <div className="main-container grid gap-8 py-10 text-sm md:grid-cols-4">
        <div className="space-y-3">
          <div className="mb-1 text-base font-semibold">Beisser Lumber</div>
          <p className="text-slate-400">Iowa&apos;s Largest Family-Owned Lumberyard Since 1953.</p>
          <div className="space-y-2 text-slate-300">
            {locations.map((location) => (
              <address key={location.slug} className="not-italic">
                <strong>{location.name}</strong>
                <div>{location.addressLine1}, {location.city}, IA {location.zip}</div>
                <a href={`tel:${location.phone.replace(/[^\d]/g, "")}`} className={footerLink}>{location.phone}</a>
              </address>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-2 font-semibold">Quick Links</div>
          <ul className="space-y-1 text-slate-300">
            <li><Link href="/products" className={footerLink}>Products</Link></li>
            <li><Link href="/brands" className={footerLink}>Brands</Link></li>
            <li><Link href="/pros" className={footerLink}>For Pros</Link></li>
            <li><Link href="/blog" className={footerLink}>Blog</Link></li>
            <li><Link href="/locations" className={footerLink}>Locations</Link></li>
            <li><Link href="/about" className={footerLink}>About</Link></li>
            <li><Link href="/team" className={footerLink}>Team</Link></li>
          </ul>
        </div>

        <div>
          <div className="mb-2 font-semibold">Services</div>
          <ul className="space-y-1 text-slate-300">
            <li><Link href="/services/estimating" className={footerLink}>Estimating &amp; Takeoffs</Link></li>
            <li><Link href="/services/delivery" className={footerLink}>Jobsite Delivery</Link></li>
            <li><Link href="/quote" className={footerLink}>Request a Quote</Link></li>
          </ul>
        </div>

        <div>
          <div className="mb-2 font-semibold">Connect</div>
          <div className="space-y-1 text-slate-300">
            <a href="https://www.facebook.com/beisserlumber" target="_blank" rel="noreferrer" className={footerLink}>Facebook</a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className={footerLink}>Instagram</a>
            <a href="https://www.linkedin.com/company/beisser-lumber" target="_blank" rel="noreferrer" className={footerLink}>LinkedIn</a>
          </div>
          <div className="mt-4"><Link href="/privacy" className={footerLink}>Privacy Policy</Link></div>
        </div>
      </div>

      <div className="border-t border-slate-800 py-3 text-center text-xs text-slate-500">© {new Date().getFullYear()} Beisser Lumber. All rights reserved.</div>
    </footer>
  );
}
