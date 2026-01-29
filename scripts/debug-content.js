
const { getServiceBySlug, getServiceEntries } = require('../app/lib/content');

console.log("Testing getServiceBySlug('delivery')...");
try {
    const result = getServiceBySlug('delivery');
    console.log("Result slug:", result ? result.slug : "NULL");

    console.log("Testing getServiceEntries()...");
    const entries = getServiceEntries();
    console.log("Entries slugs:", entries.map(e => e.slug));
} catch (e) {
    console.error("Error:", e);
}
