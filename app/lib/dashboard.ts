import { getBrandEntries } from "./brands";
import {
    getCategoryEntries,
    getCommunityEntries,
    getGalleryEntries,
    getPageEntries,
    getServiceEntries,
} from "./content";

export type AuditItem = {
    id: string;
    title: string;
    type: "Brand" | "Category" | "Community" | "Gallery" | "Page" | "Service";
    completeness: number;
    missingFields: string[];
    updatedAt?: string;
    cmsLink: string;
    reviewStatus: "Not Started" | "In Review" | "Blocked" | "Approved";
    reviewer?: string;
    internalNotes?: string;
    openTasks: number;
    managerComments: number;
    sectionNotes: number;
};

export type DashboardStats = {
    totalBrands: number;
    totalCategories: number;
    totalCommunity: number;
    totalGallery: number;
    totalPages: number;
    totalServices: number;
    averageCompleteness: number;
    itemsInReview: number;
    blockedItems: number;
    openTasks: number;
};

type WorkflowData = {
    reviewStatus?: "not_started" | "in_review" | "blocked" | "approved";
    owner?: string;
    internalNotes?: string;
    managerComments?: Array<{ comment?: string }>;
    todoList?: Array<{ status?: "todo" | "in_progress" | "done" }>;
    sectionNotes?: Array<{ notes?: string }>;
};

function isEmpty(val: any): boolean {
    if (val === null || val === undefined) return true;
    if (typeof val === "string" && val.trim() === "") return true;
    if (Array.isArray(val) && val.length === 0) return true;
    return false;
}

function parseWorkflow(workflow: WorkflowData | undefined) {
    const statusMap: Record<NonNullable<WorkflowData["reviewStatus"]>, AuditItem["reviewStatus"]> = {
        not_started: "Not Started",
        in_review: "In Review",
        blocked: "Blocked",
        approved: "Approved",
    };

    const normalizedStatus = workflow?.reviewStatus ? statusMap[workflow.reviewStatus] : "Not Started";
    const openTasks = (workflow?.todoList ?? []).filter((task) => task.status !== "done").length;
    const managerComments = (workflow?.managerComments ?? []).filter((entry) => !isEmpty(entry.comment)).length;
    const sectionNotes = (workflow?.sectionNotes ?? []).filter((entry) => !isEmpty(entry.notes)).length;

    return {
        reviewStatus: normalizedStatus,
        reviewer: workflow?.owner,
        internalNotes: workflow?.internalNotes,
        openTasks,
        managerComments,
        sectionNotes,
    };
}

export async function auditBrands(): Promise<AuditItem[]> {
    const brands = getBrandEntries();

    return brands.map((brand: any) => {
        const missing: string[] = [];
        if (isEmpty(brand.logo) || brand.logo.includes("placeholder")) missing.push("Logo");
        if (isEmpty(brand.summary)) missing.push("Summary");
        if (isEmpty(brand.website)) missing.push("Website URL");
        if (isEmpty(brand.categories)) missing.push("Linked Categories");

        const totalCheck = 4;
        const completeness = Math.round(((totalCheck - missing.length) / totalCheck) * 100);
        const workflow = parseWorkflow(brand.teamWorkflow);

        return {
            id: brand.slug,
            title: brand.name,
            type: "Brand",
            completeness,
            missingFields: missing,
            updatedAt: brand.updated ?? undefined,
            cmsLink: `/admin/#/collections/brands/entries/${brand.slug}`,
            ...workflow,
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
        const workflow = parseWorkflow(cat.teamWorkflow);

        return {
            id: cat.slug,
            title: cat.name,
            type: "Category",
            completeness,
            missingFields: missing,
            updatedAt: cat.updated ?? undefined,
            cmsLink: `/admin/#/collections/categories/entries/${cat.slug}`,
            ...workflow,
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

        const totalCheck = 2;
        const completeness = Math.round(((totalCheck - missing.length) / totalCheck) * 100);
        const workflow = parseWorkflow(fm.teamWorkflow);

        return {
            id: entry.slug,
            title: fm.title || entry.slug,
            type: "Community",
            completeness,
            missingFields: missing,
            updatedAt: undefined,
            cmsLink: `/admin/#/collections/community/entries/${entry.slug}`,
            ...workflow,
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
        const workflow = parseWorkflow(fm.teamWorkflow);

        return {
            id: entry.slug,
            title: fm.title || entry.slug,
            type: "Gallery",
            completeness,
            missingFields: missing,
            updatedAt: undefined,
            cmsLink: `/admin/#/collections/gallery/entries/${entry.slug}`,
            ...workflow,
        };
    });
}

export async function auditPages(): Promise<AuditItem[]> {
    const entries = getPageEntries();

    return entries.map((entry: any) => {
        const missing: string[] = [];
        const fm = entry.frontmatter || {};

        if (isEmpty(fm.title)) missing.push("Title");

        const totalCheck = 1;
        const completeness = Math.round(((totalCheck - missing.length) / totalCheck) * 100);
        const workflow = parseWorkflow(fm.teamWorkflow);

        return {
            id: entry.slug,
            title: fm.title || entry.slug,
            type: "Page",
            completeness,
            missingFields: missing,
            updatedAt: undefined,
            cmsLink: `/admin/#/collections/pages/entries/${entry.slug}`,
            ...workflow,
        };
    });
}

export async function auditServices(): Promise<AuditItem[]> {
    const entries = getServiceEntries();

    return entries.map((entry: any) => {
        const missing: string[] = [];
        const fm = entry.frontmatter || {};

        if (isEmpty(fm.title)) missing.push("Title");
        if (isEmpty(fm.summary)) missing.push("Summary");
        if (isEmpty(entry.content)) missing.push("Body");

        const totalCheck = 3;
        const completeness = Math.round(((totalCheck - missing.length) / totalCheck) * 100);
        const workflow = parseWorkflow(fm.teamWorkflow);

        return {
            id: entry.slug,
            title: fm.title || entry.slug,
            type: "Service",
            completeness,
            missingFields: missing,
            updatedAt: undefined,
            cmsLink: `/admin/#/collections/services/entries/${entry.slug}`,
            ...workflow,
        };
    });
}

export async function getDashboardData() {
    const brands = await auditBrands();
    const categories = await auditCategories();
    const community = await auditCommunity();
    const gallery = await auditGallery();
    const pages = await auditPages();
    const services = await auditServices();

    const allItems = [...brands, ...categories, ...community, ...gallery, ...pages, ...services];

    allItems.sort((a, b) => {
        if (a.completeness !== b.completeness) return a.completeness - b.completeness;
        if (a.openTasks !== b.openTasks) return b.openTasks - a.openTasks;
        return a.title.localeCompare(b.title);
    });

    const stats: DashboardStats = {
        totalBrands: brands.length,
        totalCategories: categories.length,
        totalCommunity: community.length,
        totalGallery: gallery.length,
        totalPages: pages.length,
        totalServices: services.length,
        averageCompleteness: Math.round(
            allItems.reduce((acc, item) => acc + item.completeness, 0) / allItems.length || 0
        ),
        itemsInReview: allItems.filter((item) => item.reviewStatus === "In Review").length,
        blockedItems: allItems.filter((item) => item.reviewStatus === "Blocked").length,
        openTasks: allItems.reduce((acc, item) => acc + item.openTasks, 0),
    };

    return { items: allItems, stats };
}
