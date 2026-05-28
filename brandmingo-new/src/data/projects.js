const projects = [
  {
    // ── Card thumbnail ──────────────────────────────────────────────
    img: "https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/sample.jpg",
    title: "E-Commerce Growth Platform",
    category: "Ethnic E-commerce",

    // ── Popup data ──────────────────────────────────────────────────
    description:
      "A performance-focused e-commerce platform built to scale. Delivered a 300% increase in high-quality traffic and improved conversion rates by 75% within 6 months through strategic UX and targeted campaigns.",
    preview: "#",
    caseStudy: "#",
    images: [
      "https://res.cloudinary.com/demo/image/upload/w_800,h_1000,c_fill/sample.jpg",
      "https://res.cloudinary.com/demo/image/upload/w_800,h_1000,c_fill/cld-sample-2.jpg",
      "https://res.cloudinary.com/demo/image/upload/w_800,h_1000,c_fill/cld-sample-3.jpg",
      "https://res.cloudinary.com/demo/image/upload/w_800,h_1000,c_fill/cld-sample-4.jpg",
      "https://res.cloudinary.com/demo/image/upload/w_800,h_1000,c_fill/cld-sample-5.jpg",
    ],
    impact: {
      value: "300%",
      label: "Increase in high-quality traffic",
    },
    meta: {
      client: "Syrish Lucknowi",
      services: "UI/UX Design, Shopify Development",
      industry: "Ethnic Fashion",
      team: "3 Specialists",
      duration: "Jan 2024 – Apr 2024",
      tools: ["Shopify", "Figma", "Google Analytics", "Hotjar"],
    },
    results: [
      {
        faIcon: "fa-bullseye",
        value: "300%",
        label: "Increase in",
        bold: "High-Quality Traffic",
      },
      {
        faIcon: "fa-arrow-trend-up",
        value: "75%",
        label: "Improvement in",
        bold: "Conversions",
      },
      {
        faIcon: "fa-cart-shopping",
        value: "40%",
        label: "Reduction in",
        bold: "Cart Abandonment",
      },
      {
        faIcon: "fa-pen-ruler",
        value: "2.5x",
        label: "Increase in",
        bold: "ROI",
      },
    ],
  },

  {
    img: "https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/cld-sample-2.jpg",
    title: "Brand & Website Redesign",
    category: "Luxury Real Estate",

    description:
      "A complete brand identity overhaul and website redesign for a luxury real estate firm. Generated 300% more qualified leads and improved user engagement through immersive 3D visuals and GSAP animations.",
    preview: "#",
    caseStudy: "#",
    images: [
      "https://res.cloudinary.com/demo/image/upload/w_800,h_1000,c_fill/cld-sample-2.jpg",
      "https://res.cloudinary.com/demo/image/upload/w_800,h_1000,c_fill/cld-sample-3.jpg",
      "https://res.cloudinary.com/demo/image/upload/w_800,h_1000,c_fill/cld-sample-4.jpg",
      "https://res.cloudinary.com/demo/image/upload/w_800,h_1000,c_fill/cld-sample-5.jpg",
      "https://res.cloudinary.com/demo/image/upload/w_800,h_1000,c_fill/sample.jpg",
    ],
    impact: {
      value: "300%",
      label: "Increase in high-quality leads",
    },
    meta: {
      client: "The Adwaith",
      services: "Performance Marketing, Google Ads",
      industry: "Luxury Real Estate",
      team: "4 Specialists",
      duration: "May 2023 – Nov 2023",
      tools: ["Google Ads", "Google Analytics", "Looker Studio", "Hotjar"],
    },
    results: [
      {
        faIcon: "fa-bullseye",
        value: "300%",
        label: "Increase in",
        bold: "High-Quality Leads",
      },
      {
        faIcon: "fa-arrow-trend-up",
        value: "75%",
        label: "Improvement in",
        bold: "Conversions",
      },
      {
        faIcon: "fa-users",
        value: "40%",
        label: "Reduction in Cost",
        bold: "per Lead",
      },
      {
        faIcon: "fa-pen-ruler",
        value: "2.8x",
        label: "Increase in",
        bold: "ROI",
      },
    ],
  },

  {
    img: "https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/cld-sample-3.jpg",
    title: "Local Business SEO Campaign",
    category: "Retail Destination",

    description:
      "An end-to-end SEO and digital marketing campaign for a retail destination. Achieved top-3 Google rankings for 50+ keywords and drove a 220% increase in organic footfall within 4 months.",
    preview: "#",
    caseStudy: null, // null = "Case Study" button nahi aayega popup mein
    images: [
      "https://res.cloudinary.com/demo/image/upload/w_800,h_1000,c_fill/cld-sample-3.jpg",
      "https://res.cloudinary.com/demo/image/upload/w_800,h_1000,c_fill/cld-sample-4.jpg",
      "https://res.cloudinary.com/demo/image/upload/w_800,h_1000,c_fill/cld-sample-5.jpg",
      "https://res.cloudinary.com/demo/image/upload/w_800,h_1000,c_fill/sample.jpg",
      "https://res.cloudinary.com/demo/image/upload/w_800,h_1000,c_fill/cld-sample-2.jpg",
    ],
    impact: {
      value: "220%",
      label: "Increase in organic footfall",
    },
    meta: {
      client: "Bikers Paradise",
      services: "SEO, Content Marketing, Local Listings",
      industry: "Retail",
      team: "2 Specialists",
      duration: "Mar 2024 – Jul 2024",
      tools: ["SEMrush", "Google Search Console", "Ahrefs", "Moz"],
    },
    results: [
      {
        faIcon: "fa-magnifying-glass",
        value: "220%",
        label: "Increase in",
        bold: "Organic Traffic",
      },
      {
        faIcon: "fa-arrow-trend-up",
        value: "50+",
        label: "Keywords in",
        bold: "Top 3 Rankings",
      },
      {
        faIcon: "fa-star",
        value: "4.9",
        label: "Average",
        bold: "Google Rating",
      },
      {
        faIcon: "fa-pen-ruler",
        value: "3.1x",
        label: "Increase in",
        bold: "ROI",
      },
    ],
  },
];

export default projects;
