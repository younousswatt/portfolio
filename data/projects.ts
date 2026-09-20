export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  year: string;
  featured: boolean;
  image: string;
  href: string;
  details: {
    context: string;
    problem: string;
    approach: string;
    status: string;
  };
  highlights: string[];
};

export const projectList: Project[] = [
  {
    slug: "samaservice",
    title: "SamaService",
    category: "Product / Mobile / Marketplace",
    description:
      "A location-based platform for quickly finding nearby service providers in Senegal.",
    technologies: ["Flutter", "Firebase", "Google Maps", "Firestore", "Authentication"],
    year: "2025",
    featured: true,
    image: "/projects/samaservice/hero.svg",
    href: "/work/samaservice",
    details: {
      context:
        "SamaService was imagined as a practical marketplace for everyday services in Dakar and surrounding areas, helping people discover reliable providers faster.",
      problem:
        "Service discovery was fragmented across scattered channels, making it difficult to find trusted local providers when urgency mattered most.",
      approach:
        "I designed a user-first mobile experience around proximity, trust and simplicity, then shaped the product architecture to support rapid discovery and clear provider matching.",
      status: "Concept and product direction are defined with a clear mobile-first MVP path.",
    },
    highlights: [
      "Geo-aware local discovery flow designed around real user behavior.",
      "Product thinking centered on trust, speed and clarity in everyday service requests.",
      "Mobile interface shaped to feel lightweight, immediate and usable in real life.",
    ],
  },
  {
    slug: "sansnom",
    title: "SansNom",
    category: "Full-Stack Web Application",
    description:
      "A full-stack web app built with a modern architecture separating frontend, backend and database concerns.",
    technologies: ["React", "Node.js", "Express", "Supabase", "PostgreSQL", "REST API", "SQL", "Git", "CI/CD"],
    year: "2024",
    featured: true,
    image: "/projects/sansnom/hero.svg",
    href: "/work/sansnom",
    details: {
      context:
        "This project was developed to explore a modular, modern web application architecture grounded in product clarity and maintainability.",
      problem:
        "A lot of early web projects struggle with weak separation between frontend logic, backend behavior and data ownership, which makes iteration harder.",
      approach:
        "I structured the app so the product could evolve without tightly coupling each layer. This allowed cleaner API boundaries and a more maintainable codebase.",
      status: "The project is an active architecture exploration and product prototype built to validate clean full-stack patterns.",
    },
    highlights: [
      "Frontend, backend and database concerns separated around a clear product model.",
      "API-driven architecture designed for maintainability from the start.",
      "Working with SQL, versioning and deployment workflows in a realistic stack.",
    ],
  },
  {
    slug: "saas-commerce",
    title: "SaaS for Small Businesses",
    category: "SaaS / Business",
    description:
      "A product concept for small businesses in Dakar to centralize customer management, stock, invoicing and sales tracking.",
    technologies: ["Product Design", "User Flows", "Business Logic", "MVP Strategy", "Operations"],
    year: "2025",
    featured: true,
    image: "/projects/saas-commerce/hero.svg",
    href: "/work/saas-commerce",
    details: {
      context:
        "The goal was to design a practical SaaS platform for local merchants who need digital tools but want simplicity and operational clarity.",
      problem:
        "Many small businesses rely on fragmented processes: manual stock tracking, disconnected customer info and repetitive admin work.",
      approach:
        "I focused the product on a small set of highly valuable workflows to define a realistic MVP and product narrative instead of broad feature sprawl.",
      status: "Concept phase with product strategy, workflow definition and MVP thinking in progress.",
    },
    highlights: [
      "Customer, inventory and invoicing flows treated as a single operational system.",
      "Product strategy focused on real business pain points rather than feature dumping.",
      "MVP shaped around the specific constraints of local commerce operations.",
    ],
  },
  {
    slug: "vsat",
    title: "VSAT Rural Connectivity",
    category: "Telecommunications / Network Engineering",
    description:
      "A technical study and link budget exercise for a VSAT deployment improving rural connectivity.",
    technologies: ["VSAT", "DVB-S2X", "Link Budget", "Satellite Communications"],
    year: "2025",
    featured: true,
    image: "/projects/vsat/hero.svg",
    href: "/work/vsat",
    details: {
      context:
        "This work focuses on understanding how satellite connectivity can support underserved rural regions and how technical constraints shape a feasible solution.",
      problem:
        "Rural connectivity depends on balancing coverage, capacity and reliability using infrastructure constraints that are often non-trivial.",
      approach:
        "I explored the system from a network engineering perspective, with attention to link budget, signal assumptions and deployment trade-offs.",
      status: "Technical exploration and system-level reasoning, with a strong emphasis on engineering fundamentals.",
    },
    highlights: [
      "Satellite communications studied through a practical engineering lens.",
      "Link budget analysis treated as a key product and deployment constraint.",
      "Network design work grounded in real connectivity requirements, not abstract theory alone.",
    ],
  },
  {
    slug: "adc",
    title: "ADC Optimization",
    category: "Embedded / C",
    description:
      "Optimization of 10-bit analog-to-digital conversion on an ATmega microcontroller.",
    technologies: ["C", "AVR", "Microcontroller", "ADC"],
    year: "2024",
    featured: true,
    image: "/projects/adc/hero.svg",
    href: "/work/adc",
    details: {
      context:
        "This embedded project explored how a low-level data acquisition path can be improved through careful engineering decisions and timing awareness.",
      problem:
        "Efficient ADC reading requires attention to sampling quality, latency and register-level behavior when the system is constrained.",
      approach:
        "The work focused on measurable optimization decisions around data acquisition and microcontroller behavior rather than superficial performance claims.",
      status: "Implementation and technical analysis work exploring embedded performance improvements.",
    },
    highlights: [
      "Low-level optimization of ADC reading in a resource-constrained environment.",
      "Attention to microcontroller constraints and precision trade-offs.",
      "Embedded systems thinking grounded in practical hardware behavior.",
    ],
  },
];
