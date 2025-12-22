export type ResourceArticle = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  image: string;
  readTime: string;
};

export const resources: ResourceArticle[] = [
  {
    slug: "how-to-request-a-materials-quote",
    title: "How to Request a Materials Quote",
    category: "Working With Us",
    summary:
      "What to include when you send plans or material lists so pricing is accurate and on time.",
    image: "/images/resources-article.png",
    readTime: "4 min read",
  },
  {
    slug: "lumber-and-building-material-basics",
    title: "Lumber & Building Material Basics",
    category: "Products",
    summary:
      "A quick refresher on common lumber, panel, and engineered wood terms used in takeoffs.",
    image: "/images/resources-article.png",
    readTime: "6 min read",
  },
  {
    slug: "delivery-expectations-for-iowa-jobsites",
    title: "Delivery Expectations for Iowa Jobsites",
    category: "Jobsite Tips",
    summary:
      "Lead times, staging notes, and communication steps that keep crews productive when trucks arrive.",
    image: "/images/resources-article.png",
    readTime: "5 min read",
  },
  {
    slug: "door-and-window-terminology",
    title: "Door & Window Terminology",
    category: "Products",
    summary:
      "Common terms that help builders, designers, and homeowners stay aligned on window and door packages.",
    image: "/images/resources-article.png",
    readTime: "7 min read",
  },
];
