import fs from "fs";
import path from "path";
import matter from "gray-matter";


export type MdxEntry = {
  slug: string;
  frontmatter: Record<string, any>;
  content: string;
};

function readMdxFile(filePath: string): { frontmatter: Record<string, any>; content: string } | null {
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return { frontmatter: data as Record<string, any>, content };
}

export function getPageMdx(slug: string): MdxEntry | null {
  const filePath = path.join(process.cwd(), "content", "pages", `${slug}.mdx`);
  const result = readMdxFile(filePath);
  if (!result) return null;
  return {
    slug,
    ...result,
  };
}

export function getCategoryMdx(slug: string): MdxEntry | null {
  const filePath = path.join(process.cwd(), "content", "categories", `${slug}.mdx`);
  const result = readMdxFile(filePath);
  if (!result) return null;
  return {
    slug,
    ...result,
  };
}

export function getCommunitySlugs(): string[] {
  const dir = path.join(process.cwd(), "content", "community");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getCommunityEntry(slug: string): MdxEntry | null {
  const filePath = path.join(process.cwd(), "content", "community", `${slug}.mdx`);
  const result = readMdxFile(filePath);
  if (!result) return null;
  return {
    slug,
    ...result,
  };
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
      if (!result) {
        return null;
      }
      return {
        slug,
        ...result,
      } as MdxEntry;
    })
    .filter((entry): entry is MdxEntry => entry !== null);
}
function getMdxSlugs(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

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


export type Brand = {
  slug: string;
  title: string;
  key?: string;
  website?: string;
  logo?: string;    // e.g. "/uploads/trex.png"
  summary?: string;
};

const BRANDS_DIR = path.join(process.cwd(), "content", "brands");

export function getBrandEntries(): Brand[] {
  if (!fs.existsSync(BRANDS_DIR)) return [];

  const files = fs
    .readdirSync(BRANDS_DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));

  return files
    .map((filename) => {
      const fullPath = path.join(BRANDS_DIR, filename);
      const raw = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(raw);

      const slug = filename.replace(/\.(md|mdx)$/, "");

      return {
        slug,
        title: String(data.title ?? slug),
        key: data.key ? String(data.key) : undefined,
        website: data.website ? String(data.website) : undefined,
        logo: data.logo ? String(data.logo) : undefined,
        summary: data.summary ? String(data.summary) : undefined,
      } satisfies Brand;
    })
    .sort((a, b) => a.title.localeCompare(b.title));
}
