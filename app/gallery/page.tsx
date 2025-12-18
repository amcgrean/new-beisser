import Image from "next/image";
import { Breadcrumbs } from "@/app/ui/Breadcrumbs";

type GalleryItem = {
  src: string;
  alt: string;
  category: string;
};

const galleryItems: GalleryItem[] = [
  {
    category: "Decking & Outdoor Living",
    src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
    alt: "Composite deck with railing",
  },
  {
    category: "Decking & Outdoor Living",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    alt: "Deck and outdoor seating area",
  },
  {
    category: "Windows & Doors",
    src: "https://images.unsplash.com/photo-1600607687920-4e2a5345c9bc?auto=format&fit=crop&w=1200&q=80",
    alt: "Large windows bringing in natural light",
  },
  {
    category: "Windows & Doors",
    src: "https://images.unsplash.com/photo-1519710889899-4fbb2a9a5214?auto=format&fit=crop&w=1200&q=80",
    alt: "Entry door with glass sidelites",
  },
  {
    category: "Siding & Exterior Trim",
    src: "https://images.unsplash.com/photo-1570129476766-47cbb58fc0c6?auto=format&fit=crop&w=1200&q=80",
    alt: "New home under construction with siding installed",
  },
  {
    category: "Millwork & Interior Trim",
    src: "https://images.unsplash.com/photo-1595526114035-45c97e22c8c6?auto=format&fit=crop&w=1200&q=80",
    alt: "Interior trim and door casing",
  },
  {
    category: "Framing & Structure",
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    alt: "Framing materials on a jobsite",
  },
  {
    category: "Trusses & Components",
    src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
    alt: "Roof trusses being installed",
  },
  {
    category: "Lumber & Panels",
    src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
    alt: "Lumber yard with stacked boards",
  },
  {
    category: "Jobsite & Crews",
    src: "https://images.unsplash.com/photo-1512914890250-353c97c9e7e2?auto=format&fit=crop&w=1200&q=80",
    alt: "Framing crew working on a house",
  },
];

const categories = Array.from(new Set(galleryItems.map((item) => item.category)));

export default function GalleryPage() {
  return (
    <div className="space-y-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Gallery", href: "/gallery" },
        ]}
      />

      <header className="space-y-3">
        <h1 className="text-3xl font-bold text-beisserGray">
          Project & Product Gallery
        </h1>
        <p className="max-w-2xl text-sm text-slate-700">
          A visual look at the types of projects and product categories Beisser
          Lumber supports, from framing and trusses to decks, siding, and
          finished millwork.
        </p>
      </header>

      {categories.map((cat) => {
        const items = galleryItems.filter((item) => item.category === cat);
        return (
          <section key={cat} className="space-y-3">
            <h2 className="text-xl font-semibold text-beisserGray">{cat}</h2>
            <div className="grid auto-rows-[120px] grid-cols-2 gap-3 sm:auto-rows-[150px] md:grid-cols-3 lg:auto-rows-[180px] lg:grid-cols-4">
              {items.map((item) => (
                <div
                  key={item.src}
                  className="relative overflow-hidden rounded-lg border bg-slate-100 shadow-sm"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
