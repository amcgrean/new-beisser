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
      <h1 className="text-3xl font-bold mb-6">Search</h1>

      <input
        type="text"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search products, brands…"
        className="w-full p-3 border rounded"
      />

      <div className="mt-8 space-y-4">
        {results.map((item) => (
          <Link
            key={item.url}
            href={item.url}
            className="block p-4 border rounded-lg shadow hover:shadow-md bg-white flex items-center gap-4"
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
              <p className="text-sm text-slate-600">{item.type}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
