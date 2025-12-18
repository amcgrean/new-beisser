"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Slide = {
  image: string;
  headline: string;
  subheadline: string;
  ctaLabel: string;
  ctaHref: string;
};

const slides: Slide[] = [
  {
    image:
      "https://images.unsplash.com/photo-1512914890250-353c97c9e7e2?auto=format&fit=crop&w=1600&q=80",
    headline: "Building Materials for Iowa Builders",
    subheadline:
      "Family- and employee-owned since 1953, focused on keeping your jobs moving.",
    ctaLabel: "Browse Products & Services",
    ctaHref: "/products",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519710889899-4fbb2a9a5214?auto=format&fit=crop&w=1600&q=80",
    headline: "Largest Millwork Showroom in the Region",
    subheadline:
      "Windows, doors, and trim displays that help homeowners see and choose with confidence.",
    ctaLabel: "Explore Our Showroom",
    ctaHref: "/showroom",
  },
  {
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1600&q=80",
    headline: "Decking, Siding & Exterior Packages",
    subheadline:
      "From framing to finish, we help you pull together complete exterior packages that last.",
    ctaLabel: "See Exterior Categories",
    ctaHref: "/products",
  },
];

export function HomeCarousel() {
  const [index, setIndex] = useState(0);

  // autoplay
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(id);
  }, []);

  const current = slides[index];

  const goTo = (i: number) => {
    setIndex((i + slides.length) % slides.length);
  };

  return (
    <section className="mb-10">
      <div className="relative h-[260px] overflow-hidden rounded-2xl border bg-slate-900 text-white shadow-lg sm:h-[320px] lg:h-[380px]">
        <Image
          src={current.image}
          alt={current.headline}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/45 to-black/5" />
        <div className="relative z-10 flex h-full flex-col justify-center gap-4 px-6 py-6 sm:px-10 lg:px-14">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">
            Beisser Lumber Company
          </div>
          <h1 className="max-w-xl text-2xl font-bold sm:text-3xl lg:text-4xl">
            {current.headline}
          </h1>
          <p className="max-w-xl text-sm text-slate-100 sm:text-base">
            {current.subheadline}
          </p>
          <div className="mt-2 flex items-center gap-3">
            <Link
              href={current.ctaHref}
              className="inline-flex rounded-md bg-beisserGreen px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-700"
            >
              {current.ctaLabel}
            </Link>
            <Link
              href="/locations"
              className="hidden text-sm font-medium text-emerald-100 underline-offset-4 hover:underline sm:inline-flex"
            >
              View Locations
            </Link>
          </div>
        </div>

        {/* Controls */}
        <div className="pointer-events-none absolute inset-x-0 bottom-3 flex items-center justify-between px-4 text-xs text-slate-100 sm:px-6">
          <div className="pointer-events-auto flex gap-2">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              className="rounded-full bg-black/40 px-3 py-1 backdrop-blur hover:bg-black/60"
            >
              Prev
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              className="rounded-full bg-black/40 px-3 py-1 backdrop-blur hover:bg-black/60"
            >
              Next
            </button>
          </div>
          <div className="pointer-events-auto flex gap-1">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={[
                  "h-2 w-2 rounded-full border border-white/60 transition",
                  i === index ? "bg-white" : "bg-white/10",
                ].join(" ")}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
