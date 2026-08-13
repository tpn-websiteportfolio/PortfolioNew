export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: "operations" | "automation" | "admin" | "strategy";
  benefits: string[];
}

export const services: Service[] = [
  {
    id: "administrative-support",
    title: "Administrative Support",
    description: "Reliable support for scheduling, documentation, and daily task coordination.",
    icon: "ClipboardList",
    category: "admin",
    benefits: [
      "Calendar & scheduling",
      "Task management",
      "Documentation",
    ],
  },
  {
    id: "lead-generation-outreach",
    title: "Lead Generation & Outreach",
    description: "Research leads and support outreach campaigns through organized tracking and follow-ups.",
    icon: "Target",
    category: "operations",
    benefits: [
      "Email Outreach",
      "Lead Research",
      "Social Media Outreach",
    ],
  },
  {
    id: "data-entry-management",
    title: "Data Entry & Management",
    description: "Maintain accurate records, organize information, and keep business data up to date.",
    icon: "Database",
    category: "operations",
    benefits: [
      "Data entry",
      "Google Sheets",
      "Record management",
    ],
  },
  {
    id: "team-operations-support",
    title: "Team & Operations Support",
    description: "Support teams with task coordination, communication, and daily operational activities.",
    icon: "Users",
    category: "operations",
    benefits: [
      "Team coordination",
      "Task assignment",
      "Daily operations",
    ],
  },
  {
    id: "customer-support",
    title: "Customer Support",
    description: "Assist customers with clear communication, follow-ups, and reliable day-to-day support.",
    icon: "Headphones",
    category: "admin",
    benefits: [
      "Customer communication",
      "Follow-ups",
      "Issue coordination",
    ],
  },
  {
    id: "ecommerce-support",
    title: "E-commerce Support",
    description: "Support online store operations through product listing, order coordination, and data management.",
    icon: "ShoppingCart",
    category: "operations",
    benefits: [
      "Shopify listings",
      "Order coordination",
      "Product management",
    ],
  },
  {
    id: "sop-workflow-management",
    title: "SOP & Workflow Management",
    description: "Create clear SOPs and organized workflows to keep daily tasks simple and consistent.",
    icon: "FileText",
    category: "operations",
    benefits: [
      "Notion and Task Tracking",
      "Workflow organization",
      "SOP Creation",
    ],
  },
  {
    id: "ai-assisted-productivity",
    title: "AI-Assisted Productivity",
    description: "Use AI tools to make research, content tasks, and daily workflows easier.",
    icon: "Sparkles",
    category: "automation",
    benefits: [
      "AI-assisted research",
      "Content support",
      "Workflow assistance",
    ],
  },
];
