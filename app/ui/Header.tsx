import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products & Services" },
  { href: "/brands", label: "Brands" },
  { href: "/for-pros", label: "For Pros" },
  { href: "/showroom", label: "Showroom" },
  { href: "/locations", label: "Locations" },
  { href: "/resources", label: "Resources" },
  { href: "/gallery", label: "Gallery" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b bg-white/90 backdrop-blur">
      <div className="main-container flex items-center justify-between gap-4 py-4">
        {/* Logo: B mark on mobile, full logo on desktop */}
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="Beisser Lumber Company home"
        >
          {/* Mobile: B-only mark */}
          <div className="relative h-9 w-9 sm:hidden">
            <Image
              src="/brand/beisser-logo-mark.png"
              alt="Beisser Lumber Company logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Desktop: full horizontal logo */}
          <div className="relative hidden h-10 w-[230px] sm:block">
            <Image
              src="/brand/beisser-logo-full.png"
              alt="Beisser Lumber Company"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-4 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-slate-700 hover:text-beisserGreen transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right-side actions */}
        <div className="flex items-center gap-2">
          <Link
            href="/for-pros/portal"
            className="hidden sm:inline-flex rounded-md bg-beisserGreen px-3 py-2 text-sm text-white transition-colors hover:bg-emerald-700"
          >
            Customer Portal
          </Link>
          <Link
            href="/for-pros/credit"
            className="hidden lg:inline-flex rounded-md border border-beisserGreen px-3 py-2 text-sm text-beisserGreen transition-colors hover:bg-beisserGreen hover:text-white"
          >
            Apply for Credit
          </Link>
        </div>
      </div>
    </header>
  );
}
