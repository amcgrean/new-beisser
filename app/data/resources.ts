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
    slug: "getting-your-jobsite-ready-for-delivery",
    title: "Getting Your Jobsite Ready for Delivery",
    category: "Jobsite Tips",
    summary:
      "Simple steps builders can take before the truck arrives to keep projects running smoothly.",
    image: "/images/resources-article.png",
    readTime: "4 min read"
  },
  {
    slug: "choosing-the-right-decking-for-iowa-weather",
    title: "Choosing the Right Decking for Iowa Weather",
    category: "Products",
    summary:
      "Key considerations when comparing composite, PVC, and traditional wood decking options.",
    image: "/images/resources-article.png",
    readTime: "5 min read"
  },
  {
    slug: "working-with-your-local-beisser-branch",
    title: "Working With Your Local Beisser Branch",
    category: "Working With Us",
    summary:
      "How to place orders, coordinate pickups, and keep communication clear with your branch team.",
    image: "/images/resources-article.png",
    readTime: "3 min read"
  }
];
