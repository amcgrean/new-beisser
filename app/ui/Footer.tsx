import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-slate-900 text-slate-100 mt-8">
      <div className="main-container py-10 grid gap-8 md:grid-cols-4 text-sm">
        <div>
          <div className="font-semibold mb-2">Beisser Lumber</div>
          <p className="text-slate-400">
            Family- and employee-owned building materials supplier serving Iowa builders since 1953.
          </p>
        </div>
        <div>
          <div className="font-semibold mb-2">For Pros</div>
          <ul className="space-y-1 text-slate-300">
            <li><Link href="/for-pros" className="hover:text-beisserGold">Pro Services Overview</Link></li>
            <li><Link href="/for-pros/portal" className="hover:text-beisserGold">Customer Portal</Link></li>
            <li><Link href="/for-pros/credit" className="hover:text-beisserGold">Credit & Accounts</Link></li>
            <li><Link href="/locations" className="hover:text-beisserGold">Find a Location</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Company</div>
          <ul className="space-y-1 text-slate-300">
            <li><Link href="/about" className="hover:text-beisserGold">About Beisser</Link></li>
            <li><Link href="/resources" className="hover:text-beisserGold">Resources</Link></li>
            <li><Link href="/careers" className="hover:text-beisserGold">Careers</Link></li>
            <li><Link href="/contact" className="hover:text-beisserGold">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Stay Connected</div>
          <p className="text-slate-400 mb-2">
            Follow us for project highlights, new products, and updates for Iowa builders.
          </p>
          <div className="flex gap-3 text-slate-300">
            <span>FB</span>
            <span>IG</span>
            <span>LI</span>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 py-3 text-xs text-slate-500 text-center">
        © {new Date().getFullYear()} Beisser Lumber. All rights reserved.
      </div>
    </footer>
  );
}
