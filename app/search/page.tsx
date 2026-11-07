"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);

  async function handleSearch(q: string) {
    setQuery(q);
    if (q.length < 2) return setResults([]);

    const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`);
    const data = await res.json();
    setResults(data.results);
  }

  return (
    <div>
      <h1 className="page-title mb-6">Search</h1>

      <input
        type="text"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search products, brands…"
        className="field text-base"
      />

      <div className="mt-8 space-y-4">
        {results.map((item) => (
          <Link
            key={item.url}
            href={item.url}
            className="card flex items-center gap-4 p-4 transition hover:border-brand-200 hover:shadow-lift"
          >
            {item.image && (
              <div className="relative h-16 w-20">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
            )}
            <div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-ink-4">{item.type}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
