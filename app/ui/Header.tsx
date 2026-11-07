"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/analytics";
import { accountLinks, mainPhone, primaryNav, productLinks, serviceLinks } from "@/app/data/navigation";
import { ArrowRight, ChevronDown, CloseIcon, MenuIcon, Phone } from "./icons";

const mobileExtras = [
  { href: "/quote", label: "Request a Quote" },
  { href: "/quote#plans", label: "Upload Plans" },
  { href: "/blog", label: "Resources" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const productsRef = useRef<HTMLDivElement | null>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const pathname = usePathname();

  const close = () => setOpen(false);

  // Close menus on navigation.
  useEffect(() => {
    setOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  // Track the rendered header height so the mobile menu lines up under it.
  useEffect(() => {
    const node = headerRef.current;
    if (!node) return;
    const measure = () => setHeaderHeight(node.getBoundingClientRect().height);
    measure();
    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", measure);
      return () => window.removeEventListener("resize", measure);
    }
    const observer = new ResizeObserver(measure);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Products menu: Escape and outside clicks close it.
  useEffect(() => {
    if (!productsOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setProductsOpen(false);
    const onClick = (e: MouseEvent) => {
      if (productsRef.current && !productsRef.current.contains(e.target as Node)) setProductsOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [productsOpen]);

  // When the pointer has just opened the menu by hovering, the click that
  // follows should keep it open rather than toggle it shut.
  const hoverOpenedAt = useRef(0);
  const openSoon = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    if (!productsOpen) hoverOpenedAt.current = Date.now();
    setProductsOpen(true);
  };
  const toggleProducts = () => {
    if (Date.now() - hoverOpenedAt.current < 800) {
      setProductsOpen(true);
      return;
    }
    setProductsOpen((v) => !v);
  };
  const closeSoon = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setProductsOpen(false), 150);
  };

  const isActive = (href: string) => pathname === href || pathname?.startsWith(`${href}/`);
  const navLinkClass = (href: string) =>
    `rounded-md px-2 py-2 text-sm font-medium transition-colors xl:px-3 hover:bg-surface-1 hover:text-brand-500 ${
      isActive(href) ? "text-brand-500" : "text-ink-2"
    }`;

  return (
    <header ref={headerRef} className="sticky top-0 z-30 border-b border-line bg-canvas">
      <div className="bg-brand-700 text-white">
        <div className="main-container flex min-h-9 items-center justify-between gap-4 py-1.5 text-xs">
          <p className="hidden text-white/80 md:block">Family-owned since 1953 · 4 Iowa locations</p>
          <div className="flex flex-1 items-center justify-between gap-5 font-semibold md:flex-none md:justify-end">
            <a href={mainPhone.href} className="inline-flex items-center gap-1.5 text-white hover:underline">
              <Phone size={14} /> {mainPhone.label}
            </a>
            <div className="hidden items-center gap-5 sm:flex">
              {accountLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:underline"
                  onClick={() => link.eventName && trackEvent(link.eventName)}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <Link href="/quote" className="text-white hover:underline sm:hidden">
              Request a Quote
            </Link>
          </div>
        </div>
      </div>

      <div className="main-container flex items-center justify-between gap-4 py-3">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Beisser Lumber Company home" onClick={close}>
          <span className="relative block h-9 w-[190px] xl:h-10 xl:w-[220px]">
            <Image src="/images/logos/beisser-logo-full.png" alt="Beisser Lumber Company" fill className="object-contain object-left" priority />
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          <div ref={productsRef} className="relative" onMouseEnter={openSoon} onMouseLeave={closeSoon}>
            <button
              type="button"
              className={`${navLinkClass("/products")} inline-flex items-center gap-1`}
              aria-expanded={productsOpen}
              aria-controls="products-menu"
              onClick={toggleProducts}
            >
              Products <ChevronDown size={16} className={`transition-transform ${productsOpen ? "rotate-180" : ""}`} />
            </button>
            {productsOpen ? (
              <div id="products-menu" className="absolute left-0 top-full z-40 pt-2">
                <div className="grid w-[640px] grid-cols-[1fr_200px] overflow-hidden rounded-lg border border-line bg-canvas shadow-lift">
                  <ul className="grid grid-cols-2 gap-x-2 p-4">
                    {productLinks.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="block rounded-md px-3 py-2 text-sm text-ink-2 hover:bg-surface-1 hover:text-brand-500">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                    <li className="col-span-2 mt-2 border-t border-line-soft pt-2">
                      <Link href="/products" className="inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-semibold text-brand-500 hover:bg-surface-1">
                        All products <ArrowRight size={16} />
                      </Link>
                    </li>
                  </ul>
                  <Link href="/showroom" className="group relative flex flex-col justify-end bg-brand-800 p-4 text-white">
                    <Image src="/images/company/showroom-stair-display.jpg" alt="" fill sizes="200px" className="object-cover opacity-40 transition-opacity group-hover:opacity-50" />
                    <span className="relative text-xs font-semibold uppercase tracking-[0.14em] text-white/80">Johnston</span>
                    <span className="relative mt-1 text-base font-semibold leading-snug">Visit the showroom</span>
                    <span className="relative mt-2 inline-flex items-center gap-1 text-sm text-white/90">
                      Plan a visit <ArrowRight size={14} />
                    </span>
                  </Link>
                </div>
              </div>
            ) : null}
          </div>
          {primaryNav.map((link) => (
            <Link key={link.href} href={link.href} className={navLinkClass(link.href)}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/service-request" className="btn-secondary hidden px-4 py-2.5 xl:inline-flex">
            Service Request
          </Link>
          <Link href="/quote" className="btn-primary hidden px-4 py-2.5 sm:inline-flex">
            Request a Quote
          </Link>
          <button
            type="button"
            className="inline-flex items-center justify-center gap-1.5 rounded-md border border-line-strong bg-canvas px-3 py-2 text-sm font-medium text-ink-2 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon size={18} /> : <MenuIcon size={18} />}
            <span>{open ? "Close" : "Menu"}</span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="lg:hidden">
          <button aria-label="Close menu overlay" className="fixed inset-0 z-20 bg-ink-1/30" style={{ top: headerHeight }} onClick={close} />
          <div className="fixed inset-x-0 bottom-0 z-30 overflow-y-auto border-t border-line bg-canvas" style={{ top: headerHeight }}>
            <nav className="main-container grid gap-6 py-6 sm:grid-cols-2" aria-label="Mobile">
              <div>
                <p className="eyebrow mb-2 px-3">Products</p>
                <ul>
                  {productLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} onClick={close} className="block rounded-md px-3 py-2 text-base text-ink-2 hover:bg-surface-1">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="eyebrow mb-2 px-3">Beisser</p>
                  <ul>
                    {[...primaryNav, ...mobileExtras].map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} onClick={close} className="block rounded-md px-3 py-2 text-base font-medium text-ink-1 hover:bg-surface-1">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="eyebrow mb-2 px-3">Services</p>
                  <ul>
                    {serviceLinks.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} onClick={close} className="block rounded-md px-3 py-2 text-base text-ink-2 hover:bg-surface-1">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="eyebrow mb-2 px-3">Your account</p>
                  <ul>
                    {accountLinks.map((link) => (
                      <li key={link.label}>
                        <a href={link.href} target="_blank" rel="noreferrer" onClick={close} className="block rounded-md px-3 py-2 text-base text-ink-2 hover:bg-surface-1">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
