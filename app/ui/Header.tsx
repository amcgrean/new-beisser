"use client";

import { useEffect, useState } from "react";
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
  const [open, setOpen] = useState(false);

  // Close mobile menu on route change-like behavior (clicking a link)
  const close = () => setOpen(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-20 border-b bg-white/90 backdrop-blur">
      <div className="main-container flex items-center justify-between gap-4 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="Beisser Lumber Company home"
          onClick={close}
        >
          {/* Mobile: full horizontal logo (change to mark-only if you prefer) */}
          <div className="relative h-9 w-[190px] sm:w-[210px] md:hidden">
            <Image
              src="/brand/beisser-logo-full.png"
              alt="Beisser Lumber Company"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Desktop: full horizontal logo */}
          <div className="relative hidden h-10 w-[230px] md:block">
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
        <nav className="hidden md:flex flex-wrap gap-4 text-sm">
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

        {/* Right-side actions + Mobile menu button */}
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

          {/* Mobile hamburger */}
          <button
            type="button"
            className="inline-flex md:hidden items-center justify-center rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm hover:bg-slate-50"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile overlay + panel */}
      {open ? (
        <div className="md:hidden">
          {/* Overlay */}
          <button
            aria-label="Close menu overlay"
            className="fixed inset-0 z-20 bg-black/30"
            onClick={close}
          />
          {/* Panel */}
          <div className="fixed left-0 right-0 top-[73px] z-30 border-b bg-white shadow-lg">
            <nav className="main-container py-4">
              <ul className="grid grid-cols-1 gap-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={close}
                      className="block rounded-md px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 hover:text-beisserGreen"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li className="pt-2">
                  <Link
                    href="/for-pros/portal"
                    onClick={close}
                    className="block rounded-md bg-beisserGreen px-3 py-2 text-center text-base font-medium text-white hover:bg-emerald-700"
                  >
                    Customer Portal
                  </Link>
                </li>
                <li>
                  <Link
                    href="/for-pros/credit"
                    onClick={close}
                    className="block rounded-md border border-beisserGreen px-3 py-2 text-center text-base font-medium text-beisserGreen hover:bg-beisserGreen hover:text-white"
                  >
                    Apply for Credit
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
