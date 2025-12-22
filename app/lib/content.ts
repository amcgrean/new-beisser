import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type MdxEntry = {
  slug: string;
  frontmatter: Record<string, any>;
  content: string;
};

function readMdxFile(
  filePath: string
): { frontmatter: Record<string, any>; content: string } | null {
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return { frontmatter: data as Record<string, any>, content };
}

export function getPageMdx(slug: string): MdxEntry | null {
  const filePath = path.join(process.cwd(), "content", "pages", `${slug}.mdx`);
  const result = readMdxFile(filePath);
  if (!result) return null;
  return { slug, ...result };
}

export function getCategoryMdx(slug: string): MdxEntry | null {
  const filePath = path.join(
    process.cwd(),
    "content",
    "categories",
    `${slug}.mdx`
  );
  const result = readMdxFile(filePath);
  if (!result) return null;
  return { slug, ...result };
}

function getMdxSlugs(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

/** COMMUNITY */
export function getCommunitySlugs(): string[] {
  return getMdxSlugs(path.join(process.cwd(), "content", "community"));
}

export function getCommunityEntry(slug: string): MdxEntry | null {
  const filePath = path.join(process.cwd(), "content", "community", `${slug}.mdx`);
  const result = readMdxFile(filePath);
  if (!result) return null;
  return { slug, ...result };
}

export function getCommunityEntries(): MdxEntry[] {
  const dir = path.join(process.cwd(), "content", "community");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const filePath = path.join(dir, file);
      const result = readMdxFile(filePath);
      return result ? ({ slug, ...result } as MdxEntry) : null;
    })
    .filter((entry): entry is MdxEntry => entry !== null);
}

/** GALLERY */
export function getGallerySlugs(): string[] {
  return getMdxSlugs(path.join(process.cwd(), "content", "gallery"));
}

export function getGalleryEntry(slug: string): MdxEntry | null {
  const filePath = path.join(process.cwd(), "content", "gallery", `${slug}.mdx`);
  const result = readMdxFile(filePath);
  if (!result) return null;
  return { slug, ...result };
}

export function getGalleryEntries(): MdxEntry[] {
  const dir = path.join(process.cwd(), "content", "gallery");
  return getMdxSlugs(dir)
    .map((slug) => getGalleryEntry(slug))
    .filter((entry): entry is MdxEntry => entry !== null);
}

/** CATEGORIES (CMS frontmatter list + by slug) */
export type CmsCategory = {
  slug: string;
  name: string;
  summary?: string;
  description?: string;
  tagline?: string;
  heroImage?: string;
  bullets?: string[];
  subcategories?: string[];
  useCases?: string[];
  materials?: string[];
  body?: string; // if you ever need frontmatter body
};

const CATEGORIES_DIR = path.join(process.cwd(), "content", "categories");

export function getCategoryEntries(): CmsCategory[] {
  if (!fs.existsSync(CATEGORIES_DIR)) return [];

  const files = fs
    .readdirSync(CATEGORIES_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  return files
    .map((filename) => {
      const slug = filename.replace(/\.(mdx|md)$/, "");
      const fullPath = path.join(CATEGORIES_DIR, filename);
      const raw = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(raw);

      return {
        slug,
        name: String(data.name ?? data.title ?? slug),
        summary: data.summary ? String(data.summary) : undefined,
        description: data.description ? String(data.description) : undefined,
        tagline: data.tagline ? String(data.tagline) : undefined,
        heroImage: data.heroImage ? String(data.heroImage) : undefined,
        bullets: Array.isArray(data.bullets) ? data.bullets.map(String) : [],
        subcategories: Array.isArray(data.subcategories)
          ? data.subcategories.map(String)
          : [],
        useCases: Array.isArray(data.useCases) ? data.useCases.map(String) : [],
        materials: Array.isArray(data.materials)
          ? data.materials.map(String)
          : [],
        body: data.body ? String(data.body) : undefined,
      } satisfies CmsCategory;
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function getCategoryBySlug(slug: string): CmsCategory | null {
  const mdx = path.join(CATEGORIES_DIR, `${slug}.mdx`);
  const md = path.join(CATEGORIES_DIR, `${slug}.md`);
  const fullPath = fs.existsSync(mdx) ? mdx : fs.existsSync(md) ? md : null;
  if (!fullPath) return null;

  const raw = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(raw);

  return {
    slug,
    name: String(data.name ?? data.title ?? slug),
    summary: data.summary ? String(data.summary) : undefined,
    description: data.description ? String(data.description) : undefined,
    tagline: data.tagline ? String(data.tagline) : undefined,
    heroImage: data.heroImage ? String(data.heroImage) : undefined,
    bullets: Array.isArray(data.bullets) ? data.bullets.map(String) : [],
    subcategories: Array.isArray(data.subcategories)
      ? data.subcategories.map(String)
      : [],
    useCases: Array.isArray(data.useCases) ? data.useCases.map(String) : [],
    materials: Array.isArray(data.materials)
      ? data.materials.map(String)
      : [],
    body: data.body ? String(data.body) : undefined,
  } satisfies CmsCategory;
}
