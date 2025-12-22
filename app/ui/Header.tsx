"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
  { href: "/locations", label: "Locations" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="main-container flex items-center justify-between gap-4 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
          aria-label="Beisser Lumber Company home"
          onClick={close}
        >
          {/* Mobile */}
          <div className="relative h-9 w-[190px] sm:w-[210px] md:hidden">
            <Image
              src="/images/logos/beisser-logo-full.png"
              alt="Beisser Lumber Company"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Desktop */}
          <div className="relative hidden h-10 w-[230px] md:block">
            <Image
              src="/images/logos/beisser-logo-full.png"
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
              className="text-slate-700 transition-colors hover:text-brand-green focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right-side actions + Mobile menu button */}
        <div className="flex items-center gap-2">
          <Link
            href="/request-quote"
            className="hidden lg:inline-flex rounded-md bg-brand-green px-3 py-2 text-sm text-white transition-colors hover:bg-brand-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
          >
            Request a Quote
          </Link>
          <Link
            href="/for-pros/portal"
            className="hidden sm:inline-flex rounded-md bg-brand-green px-3 py-2 text-sm text-white transition-colors hover:bg-brand-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
          >
            Customer Portal
          </Link>

          <Link
            href="/for-pros/credit"
            className="hidden lg:inline-flex rounded-md border border-brand-green px-3 py-2 text-sm text-brand-green transition-colors hover:border-brand-accent hover:bg-brand-accent hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
          >
            Apply for Credit
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="inline-flex md:hidden items-center justify-center rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm transition-colors hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
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
          <div className="fixed left-0 right-0 top-[73px] z-30 border-b border-slate-200 bg-white shadow-lg">
            <nav className="main-container py-4">
              <ul className="grid grid-cols-1 gap-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={close}
                      className="block rounded-md px-3 py-2 text-base font-medium text-slate-800 transition-colors hover:bg-slate-50 hover:text-brand-green focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li className="pt-2">
                  <Link
                    href="/request-quote"
                    onClick={close}
                    className="block rounded-md bg-brand-green px-3 py-2 text-center text-base font-medium text-white transition-colors hover:bg-brand-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
                  >
                    Request a Quote
                  </Link>
                </li>
                <li>
                  <Link
                    href="/for-pros/portal"
                    onClick={close}
                    className="block rounded-md bg-brand-green px-3 py-2 text-center text-base font-medium text-white transition-colors hover:bg-brand-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
                  >
                    Customer Portal
                  </Link>
                </li>
                <li>
                  <Link
                    href="/for-pros/credit"
                    onClick={close}
                    className="block rounded-md border border-brand-green px-3 py-2 text-center text-base font-medium text-brand-green transition-colors hover:border-brand-accent hover:bg-brand-accent hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
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
