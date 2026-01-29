import { getBrandEntries, Brand } from "./brands";
import {
    getCategoryEntries,
    CmsCategory,
    getCommunityEntries,
    getGalleryEntries,
    getPageEntries
} from "./content";

export type AuditItem = {
    id: string; // slug
    title: string;
    type: "Brand" | "Category" | "Community" | "Gallery" | "Page";
    completeness: number; // 0-100
    missingFields: string[];
    updatedAt?: string; // ISO string if available
    cmsLink: string;
};

export type DashboardStats = {
    totalBrands: number;
    totalCategories: number;
    totalCommunity: number;
    totalGallery: number;
    totalPages: number;
    averageCompleteness: number;
};

// Helper to check if a value is "empty"
function isEmpty(val: any): boolean {
    if (val === null || val === undefined) return true;
    if (typeof val === "string" && val.trim() === "") return true;
    if (Array.isArray(val) && val.length === 0) return true;
    return false;
}

export async function auditBrands(): Promise<AuditItem[]> {
    const brands = getBrandEntries();

    return brands.map((brand: any) => {
        const missing: string[] = [];

        // Critical fields
        if (isEmpty(brand.logo) || brand.logo.includes("placeholder")) missing.push("Logo");
        if (isEmpty(brand.summary)) missing.push("Summary");
        if (isEmpty(brand.website)) missing.push("Website URL");
        if (isEmpty(brand.categories)) missing.push("Linked Categories");

        const totalCheck = 4;
        const completeness = Math.round(((totalCheck - missing.length) / totalCheck) * 100);

        return {
            id: brand.slug,
            title: brand.name,
            type: "Brand",
            completeness,
            missingFields: missing,
            updatedAt: brand.updated ?? undefined,
            cmsLink: `/admin/#/collections/brands/entries/${brand.slug}`,
        };
    });
}

export async function auditCategories(): Promise<AuditItem[]> {
    const categories = getCategoryEntries();

    return categories.map((cat: any) => {
        const missing: string[] = [];

        if (isEmpty(cat.heroImage)) missing.push("Hero Image");
        if (isEmpty(cat.summary)) missing.push("Summary");
        if (isEmpty(cat.description)) missing.push("Description");
        if (isEmpty(cat.subcategories)) missing.push("Subcategories");

        const totalCheck = 4;
        const completeness = Math.round(((totalCheck - missing.length) / totalCheck) * 100);

        return {
            id: cat.slug,
            title: cat.name,
            type: "Category",
            completeness,
            missingFields: missing,
            updatedAt: cat.updated ?? undefined,
            cmsLink: `/admin/#/collections/categories/entries/${cat.slug}`,
        };
    });
}

export async function auditCommunity(): Promise<AuditItem[]> {
    const entries = getCommunityEntries();

    return entries.map((entry: any) => {
        const missing: string[] = [];
        const fm = entry.frontmatter || {};

        if (isEmpty(fm.title)) missing.push("Title");
        if (isEmpty(fm.summary)) missing.push("Summary");
        // Image is optional but recommended
        // if (isEmpty(fm.image)) missing.push("Image");

        const totalCheck = 2;
        const completeness = Math.round(((totalCheck - missing.length) / totalCheck) * 100);

        return {
            id: entry.slug,
            title: fm.title || entry.slug,
            type: "Community",
            completeness,
            missingFields: missing,
            updatedAt: undefined,
            cmsLink: `/admin/#/collections/community/entries/${entry.slug}`,
        };
    });
}

export async function auditGallery(): Promise<AuditItem[]> {
    const entries = getGalleryEntries();

    return entries.map((entry: any) => {
        const missing: string[] = [];
        const fm = entry.frontmatter || {};

        if (isEmpty(fm.title)) missing.push("Title");
        if (isEmpty(fm.image)) missing.push("Image");

        const totalCheck = 2;
        const completeness = Math.round(((totalCheck - missing.length) / totalCheck) * 100);

        return {
            id: entry.slug,
            title: fm.title || entry.slug,
            type: "Gallery",
            completeness,
            missingFields: missing,
            updatedAt: undefined,
            cmsLink: `/admin/#/collections/gallery/entries/${entry.slug}`,
        };
    });
}

export async function auditPages(): Promise<AuditItem[]> {
    const entries = getPageEntries();

    return entries.map((entry: any) => {
        const missing: string[] = [];
        const fm = entry.frontmatter || {};

        if (isEmpty(fm.title)) missing.push("Title");
        // Summary optional for generic pages

        const totalCheck = 1;
        const completeness = Math.round(((totalCheck - missing.length) / totalCheck) * 100);

        return {
            id: entry.slug,
            title: fm.title || entry.slug,
            type: "Page",
            completeness,
            missingFields: missing,
            updatedAt: undefined,
            cmsLink: `/admin/#/collections/pages/entries/${entry.slug}`,
        };
    });
}

export async function getDashboardData() {
    const brands = await auditBrands();
    const categories = await auditCategories();
    const community = await auditCommunity();
    const gallery = await auditGallery();
    const pages = await auditPages();

    const allItems = [...brands, ...categories, ...community, ...gallery, ...pages];

    allItems.sort((a, b) => {
        if (a.completeness !== b.completeness) {
            return a.completeness - b.completeness;
        }
        return a.title.localeCompare(b.title);
    });

    const stats: DashboardStats = {
        totalBrands: brands.length,
        totalCategories: categories.length,
        totalCommunity: community.length,
        totalGallery: gallery.length,
        totalPages: pages.length,
        averageCompleteness: Math.round(
            allItems.reduce((acc, item) => acc + item.completeness, 0) / allItems.length || 0
        ),
    };

    return { items: allItems, stats };
}
