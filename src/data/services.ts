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
    id: "data-entry-management",
    title: "Data Entry & Management",
    description: "Keep your records clean and organized with accurate data entry and spreadsheet management.",
    icon: "Database",
    category: "operations",
    benefits: [
      "Data entry and verification",
      "Google Sheets expertise",
      "Record organization",
    ],
  },
  {
    id: "team-coordination",
    title: "Team Coordination",
    description: "Keep your team aligned with task assignments, communication support, and day-to-day coordination.",
    icon: "Users",
    category: "operations",
    benefits: [
      "Task assignment and tracking",
      "Team communication",
      "Daily operations management",
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
    id: "customer-support",
    title: "Customer Support",
    description: "Handle customer inquiries with clear communication, quick follow-ups, and professional support.",
    icon: "MessageCircle",
    category: "operations",
    benefits: [
      "Email and message support",
      "Customer follow-ups",
      "Issue resolution tracking",
    ],
  },
  // AUTOMATION
  {
    id: "sop-workflow-management",
    title: "SOP & Workflow Creation",
    description: "Build streamlined SOPs and workflows that make repetitive tasks simple and consistent.",
    icon: "FileText",
    category: "automation",
    benefits: [
      "SOP documentation",
      "Workflow design",
      "Process optimization",
    ],
  },
  {
    id: "ai-assisted-productivity",
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
  {
    id: "project-documentation",
    title: "Project & Documentation",
    description: "Create organized documentation systems using Notion, templates, and process guides.",
    icon: "BookOpen",
    category: "automation",
    benefits: [
      "Notion setup and management",
      "Documentation templates",
      "Knowledge base creation",
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
    id: "virtual-assistant",
    title: "Virtual Assistant Services",
    description: "Complete VA support for general business tasks, research, and day-to-day operations.",
    icon: "Briefcase",
    category: "admin",
    benefits: [
      "General administrative tasks",
      "Research and information gathering",
      "Scheduling and coordination",
    ],
  },
  // STRATEGY
  {
    id: "lead-research",
    title: "Lead Research & List Building",
    description: "Find qualified leads and build organized prospect lists for your outreach campaigns.",
    icon: "Target",
    category: "strategy",
    benefits: [
      "Lead identification",
      "Prospect list building",
      "Company research",
    ],
  },
  {
    id: "outreach-campaigns",
    title: "Outreach Campaign Support",
    description: "Execute targeted outreach campaigns with email sequencing, follow-ups, and tracking.",
    icon: "Send",
    category: "strategy",
    benefits: [
      "Email outreach setup",
      "Follow-up sequencing",
      "Campaign tracking",
    ],
  },
  {
    id: "business-development",
    title: "Business Development",
    description: "Support your growth through lead generation, relationship building, and strategic outreach.",
    icon: "TrendingUp",
    category: "strategy",
    benefits: [
      "Lead generation",
      "Prospect research",
      "Growth strategy support",
    ],
  },
];
