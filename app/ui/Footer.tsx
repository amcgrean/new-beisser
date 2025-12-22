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
          <div className="mt-3 space-y-1 text-slate-300">
            <div>3705 SE Beisser Drive, Grimes, IA 50111</div>
            <div>(515) 986-4422</div>
            <div>Serving Central &amp; Eastern Iowa</div>
          </div>
        </div>

        <div>
          <div className="mb-2 font-semibold">Products</div>
          <ul className="space-y-1 text-slate-300">
            <li>
              <Link href="/products/windows-and-patio-doors" className={footerLink}>
                Windows &amp; Patio Doors
              </Link>
            </li>
            <li>
              <Link href="/products/siding-and-exterior-trim" className={footerLink}>
                Siding &amp; Exterior Trim
              </Link>
            </li>
            <li>
              <Link href="/products/decking-and-exteriors" className={footerLink}>
                Decking &amp; Exteriors
              </Link>
            </li>
            <li>
              <Link href="/products/lumber-and-panels" className={footerLink}>
                Lumber &amp; Panels
              </Link>
            </li>
            <li>
              <Link href="/products/millwork-and-trim" className={footerLink}>
                Millwork &amp; Interior Trim
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="mb-2 font-semibold">Services</div>
          <ul className="space-y-1 text-slate-300">
            <li>
              <Link href="/services/delivery" className={footerLink}>
                Delivery &amp; Pickup
              </Link>
            </li>
            <li>
              <Link href="/services/estimating" className={footerLink}>
                Estimating &amp; Takeoffs
              </Link>
            </li>
            <li>
              <Link href="/services/showroom-design" className={footerLink}>
                Showroom &amp; Design Support
              </Link>
            </li>
            <li>
              <Link href="/services/special-orders" className={footerLink}>
                Special Orders
              </Link>
            </li>
            <li>
              <Link href="/services/jobsite-coordination" className={footerLink}>
                Jobsite Coordination
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="mb-2 font-semibold">Trust &amp; Support</div>
          <p className="mb-2 text-slate-400">
            Serving Iowa builders for 70+ years with local ownership, delivery fleets, and product specialists.
          </p>
          <ul className="space-y-1 text-slate-300">
            <li>Family- &amp; employee-owned since 1953</li>
            <li>Largest window &amp; door showroom in the region</li>
            <li>Millwork, truss, and engineered wood support</li>
          </ul>
          <div className="mt-3">
            <Link
              href="/request-quote"
              className="inline-flex rounded-md bg-brand-green px-3 py-2 text-sm font-semibold text-white hover:bg-brand-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 py-3 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Beisser Lumber. All rights reserved.
      </div>
    </footer>
  );
}
