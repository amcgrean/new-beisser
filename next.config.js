/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/products/decking-railing/", destination: "/products/decking-railing", permanent: true },
      { source: "/products/doors/", destination: "/products/doors", permanent: true },
      { source: "/products/doors/interior-doors/", destination: "/products/doors/interior-doors", permanent: true },
      { source: "/products/doors/exterior-doors/", destination: "/products/doors/exterior-doors", permanent: true },
      { source: "/products/doors/door-hardware/", destination: "/products/doors/door-hardware", permanent: true },
      { source: "/products/engineered-wood-products/", destination: "/products/engineered-wood-products", permanent: true },
      { source: "/products/building-envelope-accessories/", destination: "/products/building-envelope-accessories", permanent: true },
      { source: "/products/lumber-panels/", destination: "/products/lumber-panels", permanent: true },
      { source: "/products/siding/", destination: "/products/siding", permanent: true },
      { source: "/products/stair-parts/", destination: "/products/stair-parts", permanent: true },
      { source: "/products/millwork/", destination: "/products/millwork", permanent: true },
      { source: "/products/windows-patio-doors/", destination: "/products/windows-patio-doors", permanent: true },
      { source: "/products/hardware-screws/", destination: "/products/hardware-screws", permanent: true },
      { source: "/company/", destination: "/about", permanent: true },
      { source: "/company/careers/", destination: "/careers", permanent: true },
      { source: "/professionals/", destination: "/pros", permanent: true },
      { source: "/locations/", destination: "/locations", permanent: true },
      { source: "/service-request/", destination: "/service-request", permanent: true },
      { source: "/literature/", destination: "/resources/literature", permanent: true },
      { source: "/literature", destination: "/resources/literature", permanent: true },
      { source: "/privacy", destination: "/privacy-policy", permanent: true },
      { source: "/privacy-policy/", destination: "/privacy-policy", permanent: true },
      { source: "/contact/contact-entries/", destination: "/contact", permanent: true },
      { source: "/products/decking", destination: "/products/decking-railing", permanent: true },
      { source: "/products/windows", destination: "/products/windows-patio-doors", permanent: true },
      { source: "/products/engineered-wood", destination: "/products/engineered-wood-products", permanent: true },
      { source: "/products/lumber", destination: "/products/lumber-panels", permanent: true },
      { source: "/products/weatherization", destination: "/products/building-envelope-accessories", permanent: true },
      { source: "/products/fasteners", destination: "/products/hardware-screws", permanent: true },
    ];
  },
};

export default nextConfig;
