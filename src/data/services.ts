export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: "operations" | "automation" | "admin" | "strategy";
  benefits: string[];
}

export const services: Service[] = [
  // OPERATIONS
  {
    id: "lead-generation-outreach",
    title: "Lead Generation & Outreach",
    description: "Build proactive outreach systems and identify qualified leads for your pipeline.",
    icon: "Target",
    category: "operations",
    benefits: [
      "Lead list building",
      "Outreach coordination",
      "Prospect follow-up",
    ],
  },
  {
    id: "ecommerce-support",
    title: "E-Commerce Support",
    description: "Run your online store smoothly with product management, order handling, and store operations.",
    icon: "ShoppingCart",
    category: "operations",
    benefits: [
      "Product listings and updates",
      "Order processing",
      "Inventory coordination",
    ],
  },
  {
    id: "team-operation-support",
    title: "Team & Operation Support",
    description: "Keep your team aligned with task assignments, communication support, and day-to-day operations.",
    icon: "Users",
    category: "operations",
    benefits: [
      "Task assignment and tracking",
      "Team communication",
      "Daily operations support",
    ],
  },
  // AUTOMATION
  {
    id: "ai-assisted-workflow",
    title: "AI-Assisted Workflow",
    description: "Leverage AI tools to automate research, content creation, and workflow optimization.",
    icon: "Sparkles",
    category: "automation",
    benefits: [
      "AI research and analysis",
      "Content assistance",
      "Process automation",
    ],
  },
  // ADMINISTRATION
  {
    id: "administrative-support",
    title: "Administrative Support",
    description: "Handle scheduling, email management, and routine administrative tasks so you can focus.",
    icon: "ClipboardList",
    category: "admin",
    benefits: [
      "Calendar and scheduling",
      "Email management",
      "Task prioritization",
    ],
  },
  {
    id: "data-entry-management",
    title: "Data Entry & Management",
    description: "Keep your records clean and organized with accurate data entry and spreadsheet management.",
    icon: "Database",
    category: "admin",
    benefits: [
      "Data entry and verification",
      "Google Sheets expertise",
      "Record organization",
    ],
  },
  {
    id: "customer-support",
    title: "Customer Support",
    description: "Handle customer inquiries with clear communication, quick follow-ups, and professional support.",
    icon: "MessageCircle",
    category: "admin",
    benefits: [
      "Email and message support",
      "Customer follow-ups",
      "Issue resolution tracking",
    ],
  },
  // STRATEGY
  {
    id: "sop-workflow-management",
    title: "SOP & Workflow Management",
    description: "Create clear SOPs and dependable workflows that keep recurring tasks consistent and efficient.",
    icon: "FileText",
    category: "strategy",
    benefits: [
      "Process documentation",
      "Workflow design",
      "Operational consistency",
    ],
  },
];
