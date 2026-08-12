export interface Tool {
  id: string;
  name: string;
  category: "automation" | "communication" | "project" | "data" | "content" | "ai";
  description: string;
  icon: string;
}

export const tools: Tool[] = [
  // Automation
  {
    id: "zapier",
    name: "Zapier",
    category: "automation",
    description: "Connect apps and automate repetitive tasks",
    icon: "Zap",
  },
  {
    id: "make",
    name: "Make",
    category: "automation",
    description: "Powerful workflow automation platform",
    icon: "Zap",
  },
  {
    id: "ifttt",
    name: "IFTTT",
    category: "automation",
    description: "Simple automation for smart home and apps",
    icon: "Zap",
  },

  // Communication
  {
    id: "gmail",
    name: "Gmail",
    category: "communication",
    description: "Email management with advanced filtering",
    icon: "Mail",
  },
  {
    id: "slack",
    name: "Slack",
    category: "communication",
    description: "Team communication and notifications",
    icon: "MessageSquare",
  },
  {
    id: "calendly",
    name: "Calendly",
    category: "communication",
    description: "Easy scheduling without back-and-forth",
    icon: "Calendar",
  },

  // Project Management
  {
    id: "asana",
    name: "Asana",
    category: "project",
    description: "Organize tasks and manage projects",
    icon: "Clipboard",
  },
  {
    id: "monday",
    name: "Monday.com",
    category: "project",
    description: "Flexible work operating system",
    icon: "Clipboard",
  },
  {
    id: "notion",
    name: "Notion",
    category: "project",
    description: "All-in-one workspace for docs and databases",
    icon: "Database",
  },

  // Data & CRM
  {
    id: "airtable",
    name: "Airtable",
    category: "data",
    description: "Flexible database with powerful automations",
    icon: "Database",
  },
  {
    id: "pipedrive",
    name: "Pipedrive",
    category: "data",
    description: "Sales CRM built for entrepreneurs",
    icon: "Users",
  },
  {
    id: "hubspot",
    name: "HubSpot",
    category: "data",
    description: "Complete CRM platform",
    icon: "Users",
  },

  // Content
  {
    id: "buffer",
    name: "Buffer",
    category: "content",
    description: "Schedule and manage social media content",
    icon: "Share2",
  },
  {
    id: "canva",
    name: "Canva",
    category: "content",
    description: "Design professional graphics easily",
    icon: "Palette",
  },
  {
    id: "copy",
    name: "Copysmith",
    category: "content",
    description: "AI-powered copywriting assistance",
    icon: "FileText",
  },

  // AI Tools
  {
    id: "chatgpt",
    name: "ChatGPT",
    category: "ai",
    description: "AI assistant for content and analysis",
    icon: "Brain",
  },
  {
    id: "perplexity",
    name: "Perplexity AI",
    category: "ai",
    description: "AI research assistant with real-time info",
    icon: "Brain",
  },
  {
    id: "claude",
    name: "Claude AI",
    category: "ai",
    description: "Advanced AI for complex reasoning",
    icon: "Brain",
  },
];

export const toolCategories = [
  { id: "all", label: "All Tools" },
  { id: "automation", label: "Automation" },
  { id: "communication", label: "Communication" },
  { id: "project", label: "Project Management" },
  { id: "data", label: "Data & CRM" },
  { id: "content", label: "Content" },
  { id: "ai", label: "AI Tools" },
];
