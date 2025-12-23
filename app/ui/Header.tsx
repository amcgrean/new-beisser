"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const primaryNav = [
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

const secondaryNav = [
  { href: "/request-quote", label: "Request a Quote" },
  { href: "/locations", label: "Locations" },
  { href: "/showroom", label: "Showroom" },
  { href: "/brands", label: "Brands" },
  { href: "/gallery", label: "Gallery" },
  { href: "/for-pros", label: "For Pros" },
  { href: "/community", label: "Community" },
  { href: "/careers", label: "Careers" },
  { href: "/search", label: "Search" },
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
          {primaryNav.map((link) => (
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
            className="inline-flex rounded-md bg-brand-green px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-brand-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 sm:hidden"
          >
            Quote
          </Link>
          <div className="hidden items-center gap-2 sm:flex">
            <Link
              href="/locations"
              className="hidden lg:inline-flex rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-700 transition-colors hover:border-brand-accent hover:text-brand-green focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
            >
              Locations
            </Link>
            <Link
              href="/request-quote"
              className="inline-flex rounded-md bg-brand-green px-3 py-2 text-sm text-white transition-colors hover:bg-brand-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
            >
              Request a Quote
            </Link>
          </div>

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
                {primaryNav.map((link) => (
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
                  <div className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    More from Beisser
                  </div>
                </li>
                {secondaryNav.map((link) => (
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
              </ul>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
