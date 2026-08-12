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
    id: "email-management",
    title: "Email & Calendar Management",
    description: "Take control of your inbox with intelligent filtering, scheduling, and organization strategies.",
    icon: "Mail",
    category: "admin",
    benefits: [
      "Priority inbox setup",
      "Automated filtering rules",
      "Calendar optimization",
      "Response templates",
    ],
  },
  {
    id: "project-coordination",
    title: "Project Coordination & Tracking",
    description: "Keep all projects on track with systematic management, deadline tracking, and progress reporting.",
    icon: "Clipboard",
    category: "operations",
    benefits: [
      "Task management setup",
      "Timeline tracking",
      "Progress dashboards",
      "Stakeholder communication",
    ],
  },
  {
    id: "workflow-automation",
    title: "Workflow Automation",
    description: "Eliminate repetitive tasks with custom automation using Zapier, Make, and API integrations.",
    icon: "Zap",
    category: "automation",
    benefits: [
      "Process mapping",
      "Zapier workflows",
      "API integrations",
      "Custom automations",
    ],
  },
  {
    id: "data-management",
    title: "Data Management & Analysis",
    description: "Organize and analyze your data for better decision-making with clean databases and reports.",
    icon: "Database",
    category: "operations",
    benefits: [
      "Data organization",
      "Database setup",
      "Report generation",
      "Analytics dashboards",
    ],
  },
  {
    id: "content-coordination",
    title: "Content Coordination",
    description: "Manage your content calendar, social media, and publishing schedules seamlessly.",
    icon: "FileText",
    category: "admin",
    benefits: [
      "Content calendar management",
      "Social media scheduling",
      "Publishing coordination",
      "Editorial planning",
    ],
  },
  {
    id: "client-management",
    title: "Client Relationship Management",
    description: "Build stronger client relationships with organized systems for communication and follow-ups.",
    icon: "Users",
    category: "strategy",
    benefits: [
      "CRM setup & management",
      "Client onboarding",
      "Automated follow-ups",
      "Client communication",
    ],
  },
  {
    id: "ai-implementation",
    title: "AI Tool Implementation",
    description: "Leverage AI tools to automate content creation, analysis, and decision-making processes.",
    icon: "Brain",
    category: "automation",
    benefits: [
      "ChatGPT integration",
      "AI content generation",
      "Process automation",
      "Tool training",
    ],
  },
  {
    id: "business-systems",
    title: "Business Systems Setup",
    description: "Build scalable systems for your business infrastructure including CRM, accounting, and operations.",
    icon: "Settings",
    category: "operations",
    benefits: [
      "System selection",
      "Implementation",
      "Team training",
      "Process documentation",
    ],
  },
];
