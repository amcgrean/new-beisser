import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Brand = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  categories: string[];
  website: string;
  heroImage: string;
  logo: string;
  bullets: string[];
};

const BRANDS_DIR = path.join(process.cwd(), "content", "brands");

const HERO_PLACEHOLDER = "/images/resources-article.png";
const LOGO_PLACEHOLDER = "/images/resources-article.png";

const ensurePath = (path: string) => {
  if (!path || path.startsWith("/") || path.startsWith("http")) return path;
  return `/uploads/${path}`;
};

function normalizeBrand(data: any, slug: string): Brand {
  return {
    slug,
    name: String(data.name ?? data.title ?? slug),
    summary: String(data.summary ?? ""),
    description: String(data.description ?? data.summary ?? ""),
    categories: Array.isArray(data.categories) ? data.categories.map(String) : [],
    website: String(data.website ?? ""),
    heroImage: ensurePath(String(data.heroImage ?? HERO_PLACEHOLDER)),
    logo: ensurePath(String(data.logo ?? LOGO_PLACEHOLDER)),
    bullets: Array.isArray(data.bullets) ? data.bullets.map(String) : [],
  };
}

export function getBrandEntries(): Brand[] {
  if (!fs.existsSync(BRANDS_DIR)) return [];

  const files = fs
    .readdirSync(BRANDS_DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));

  return files
    .map((filename) => {
      const slug = filename.replace(/\.(md|mdx)$/, "");
      const fullPath = path.join(BRANDS_DIR, filename);
      const raw = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(raw);
      return normalizeBrand(data, slug);
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function getBrandBySlug(slug: string): Brand | null {
  const md = path.join(BRANDS_DIR, `${slug}.md`);
  const mdx = path.join(BRANDS_DIR, `${slug}.mdx`);
  const fullPath = fs.existsSync(md) ? md : fs.existsSync(mdx) ? mdx : null;
  if (!fullPath) return null;

  const raw = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(raw);
  return normalizeBrand(data, slug);
}
