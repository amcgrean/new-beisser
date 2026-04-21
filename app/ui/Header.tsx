"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { trackEvent } from "@/lib/analytics";

const primaryNav = [
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/pros", label: "Pros" },
  { href: "/blog", label: "Resources" },
  { href: "/locations", label: "Locations" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const secondaryNav = [
  { href: "/products/decking-railing", label: "Decking & Railing" },
  { href: "/products/windows-patio-doors", label: "Windows & Patio Doors" },
  { href: "/products/engineered-wood-products", label: "Engineered Wood Products" },
  { href: "/products/hardware-screws", label: "Hardware & Screws" },
  { href: "/services/design", label: "Design" },
  { href: "/services/estimating", label: "Estimating" },
  { href: "/services/installation", label: "Installation" },
  { href: "/service-request", label: "Service Request" },
];

type UtilityLink = { href: string; label: string; external?: boolean; eventName?: string };

const utilityLinks: UtilityLink[] = [
  { href: "https://www.nuvo.credit/app/beisserlumber", label: "Credit Application", external: true, eventName: "credit_application_click" },
  { href: "https://pro.beisserlumber.com", label: "Account / AR Portal Sign In", external: true, eventName: "portal_click" },
  { href: "https://pro.beisserlumber.com", label: "Pay Invoice", external: true, eventName: "portal_click" },
  { href: "/quote", label: "Request a Quote" },
  { href: "/quote#plans", label: "Upload Plans" },
  { href: "/contact", label: "Contact Your Rep" },
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
      <div className="bg-brand-green text-white">
        <div className="main-container flex min-h-9 items-center justify-between py-1.5 text-xs font-medium">
          <div className="hidden items-center gap-5 md:flex md:flex-wrap">
            {utilityLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                className="text-white/95 hover:text-white hover:underline"
                onClick={() => link.eventName && trackEvent(link.eventName)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <Link href="/quote" className="font-semibold text-white hover:underline" onClick={close}>
              Request a Quote
            </Link>
          </div>
        </div>
      </div>

      <div className="main-container flex items-center justify-between gap-4 py-4">
        <Link href="/" className="flex items-center gap-2" aria-label="Beisser Lumber Company home" onClick={close}>
          <div className="relative h-9 w-[190px] sm:w-[210px] md:hidden"><Image src="/images/logos/beisser-logo-full.png" alt="Beisser Lumber Company" fill className="object-contain" priority /></div>
          <div className="relative hidden h-10 w-[230px] md:block"><Image src="/images/logos/beisser-logo-full.png" alt="Beisser Lumber Company" fill className="object-contain" priority /></div>
        </Link>

        <nav className="hidden md:flex flex-wrap gap-4 text-sm">
          {primaryNav.map((link) => (
            <Link key={link.href} href={link.href} className="text-slate-700 transition-colors hover:text-brand-green">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/quote" className="inline-flex rounded-md bg-brand-green px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-brand-greenDark sm:hidden">Quote</Link>
          <div className="hidden items-center gap-2 sm:flex">
            <Link href="/service-request" className="hidden lg:inline-flex rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-700 transition-colors hover:border-brand-green hover:text-brand-green">Service Request</Link>
            <Link href="/quote" className="inline-flex rounded-md bg-brand-green px-3 py-2 text-sm text-white transition-colors hover:bg-brand-greenDark">Request a Quote</Link>
          </div>
          <button type="button" className="inline-flex md:hidden items-center justify-center rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((v) => !v)}>{open ? "Close" : "Menu"}</button>
        </div>
      </div>

      {open ? (
        <div className="md:hidden">
          <button aria-label="Close menu overlay" className="fixed inset-0 z-20 bg-black/30" onClick={close} />
          <div className="fixed left-0 right-0 top-[109px] z-30 border-b border-slate-200 bg-white shadow-lg">
            <nav className="main-container py-4">
              <ul className="grid grid-cols-1 gap-2">
                {utilityLinks.map((link) => (
                  <li key={link.label}><Link href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noreferrer" : undefined} onClick={close} className="block rounded-md px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50">{link.label}</Link></li>
                ))}
                {primaryNav.map((link) => (<li key={link.href}><Link href={link.href} onClick={close} className="block rounded-md px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50">{link.label}</Link></li>))}
                {secondaryNav.map((link) => (<li key={link.href}><Link href={link.href} onClick={close} className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50">{link.label}</Link></li>))}
              </ul>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
