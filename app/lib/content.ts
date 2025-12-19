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
