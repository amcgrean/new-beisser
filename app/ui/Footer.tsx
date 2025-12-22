import Link from "next/link";

const footerLink =
  "transition-colors hover:text-brand-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900";

export function Footer() {
  return (
    <footer className="mt-8 border-t border-slate-800 bg-slate-900 text-slate-100">
      <div className="main-container grid gap-8 py-10 text-sm md:grid-cols-4">
        <div>
          <div className="mb-2 font-semibold">Beisser Lumber</div>
          <p className="text-slate-400">
            Family- and employee-owned building materials supplier serving Iowa
            builders since 1953.
          </p>
        </div>

        <div>
          <div className="mb-2 font-semibold">For Pros</div>
          <ul className="space-y-1 text-slate-300">
            <li>
              <Link href="/for-pros" className={footerLink}>
                Pro Services Overview
              </Link>
            </li>
            <li>
              <Link href="/for-pros/portal" className={footerLink}>
                Customer Portal
              </Link>
            </li>
            <li>
              <Link href="/for-pros/credit" className={footerLink}>
                Credit & Accounts
              </Link>
            </li>
            <li>
              <Link href="/locations" className={footerLink}>
                Find a Location
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="mb-2 font-semibold">Company</div>
          <ul className="space-y-1 text-slate-300">
            <li>
              <Link href="/about" className={footerLink}>
                About Beisser
              </Link>
            </li>
            <li>
              <Link href="/resources" className={footerLink}>
                Resources
              </Link>
            </li>
            <li>
              <Link href="/careers" className={footerLink}>
                Careers
              </Link>
            </li>
            <li>
              <Link href="/contact" className={footerLink}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="mb-2 font-semibold">Stay Connected</div>
          <p className="mb-2 text-slate-400">
            Follow us for project highlights, new products, and updates for Iowa
            builders.
          </p>

          {/* Placeholder social links — swap hrefs when ready */}
          <div className="flex gap-3 text-slate-300">
            <a href="#" className={footerLink} aria-label="Facebook">
              FB
            </a>
            <a href="#" className={footerLink} aria-label="Instagram">
              IG
            </a>
            <a href="#" className={footerLink} aria-label="LinkedIn">
              LI
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 py-3 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Beisser Lumber. All rights reserved.
      </div>
    </footer>
  );
}
