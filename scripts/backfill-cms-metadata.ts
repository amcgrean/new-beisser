import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

// Helper to check if a value is "filled"
function truthy(val: any) {
    if (val === null || val === undefined) return false;
    if (typeof val === "string") return val.trim().length > 0;
    if (Array.isArray(val)) return val.length > 0;
    return Boolean(val);
}

function processBrands(filePath: string) {
    const content = fs.readFileSync(filePath, "utf8");
    const { data, content: body } = matter(content);

    // Calc completeness
    const completion = {
        nameAdded: truthy(data.name),
        keyAdded: truthy(data.key),
        websiteAdded: truthy(data.website),
        logoAdded: truthy(data.logo),
        summaryAdded: truthy(data.summary),
        bodyAdded: truthy(data.body ?? body), // CMS might save body in frontmatter or content
    };

    const total = Object.keys(completion).length;
    const filled = Object.values(completion).filter(Boolean).length;
    const pct = total > 0 ? Math.round((filled / total) * 100) : 0;

    // Set data
    data.completion = completion;
    data.completeness = pct;

    // Set updated if missing
    if (!data.updated) {
        const stats = fs.statSync(filePath);
        data.updated = stats.mtime.toISOString();
    }

    const newContent = matter.stringify(body, data);
    fs.writeFileSync(filePath, newContent);
    console.log(`Updated Brand: ${path.basename(filePath)} (${pct}%)`);
}

function processCategories(filePath: string) {
    const content = fs.readFileSync(filePath, "utf8");
    const { data, content: body } = matter(content);

    const completion = {
        nameAdded: truthy(data.name),
        summaryAdded: truthy(data.summary),
        descriptionAdded: truthy(data.description),
        heroImageAdded: truthy(data.heroImage),
        bulletsAdded: truthy(data.bullets),
        bodyAdded: truthy(data.body ?? body),
    };

    const total = Object.keys(completion).length;
    const filled = Object.values(completion).filter(Boolean).length;
    const pct = total > 0 ? Math.round((filled / total) * 100) : 0;

    data.completion = completion;
    data.completeness = pct;

    if (!data.updated) {
        const stats = fs.statSync(filePath);
        data.updated = stats.mtime.toISOString();
    }

    const newContent = matter.stringify(body, data);
    fs.writeFileSync(filePath, newContent);
    console.log(`Updated Category: ${path.basename(filePath)} (${pct}%)`);
}

function processGeneric(filePath: string, type: string) {
    const content = fs.readFileSync(filePath, "utf8");
    const { data, content: body } = matter(content);

    // Generic files just need updated date for now
    if (!data.updated) {
        const stats = fs.statSync(filePath);
        data.updated = stats.mtime.toISOString();
    }

    // Check if we should add generic completeness? 
    // For now the config only shows % for brands/categories, but updated date is needed for all.

    const newContent = matter.stringify(body, data);
    fs.writeFileSync(filePath, newContent);
    console.log(`Updated ${type}: ${path.basename(filePath)}`);
}

function main() {
    const brandsDir = path.join(contentDir, "brands");
    if (fs.existsSync(brandsDir)) {
        fs.readdirSync(brandsDir).forEach(f => {
            if (f.endsWith(".md")) processBrands(path.join(brandsDir, f));
        });
    }

    const catsDir = path.join(contentDir, "categories");
    if (fs.existsSync(catsDir)) {
        fs.readdirSync(catsDir).forEach(f => {
            if (f.endsWith(".mdx")) processCategories(path.join(catsDir, f));
        });
    }

    // Generic update for others (Services, Pages, etc)
    ["services", "pages", "community", "gallery", "for-pros"].forEach(dirName => {
        const dir = path.join(contentDir, dirName);
        if (fs.existsSync(dir)) {
            fs.readdirSync(dir).forEach(f => {
                if (f.endsWith(".md") || f.endsWith(".mdx")) {
                    processGeneric(path.join(dir, f), dirName);
                }
            });
        }
    });

    console.log("Backfill complete.");
}

main();
