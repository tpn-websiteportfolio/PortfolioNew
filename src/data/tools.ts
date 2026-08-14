export interface Tool {
  id: string;
  name: string;
  category: "communication" | "project" | "data" | "content" | "ai";
  description: string;
  icon: string;
}

export const tools: Tool[] = [
  { id: "google-spreadsheet", name: "Google Spreadsheet", category: "data", description: "Create, organize, and review spreadsheet data.", icon: "Table2" },
  { id: "microsoft-office", name: "Microsoft Office", category: "data", description: "Create documents, presentations, and spreadsheets.", icon: "BriefcaseBusiness" },
  { id: "slack", name: "Slack", category: "communication", description: "Communicate and collaborate with teams in shared channels.", icon: "MessageSquare" },
  { id: "notion", name: "Notion", category: "project", description: "Organize notes, documents, and team information in one workspace.", icon: "NotebookText" },
  { id: "canva", name: "Canva", category: "content", description: "Create visual content using ready-made design tools.", icon: "Palette" },
  { id: "gmail", name: "Gmail", category: "communication", description: "Send, receive, and organize email communication.", icon: "Mail" },
  { id: "chatgpt", name: "ChatGPT", category: "ai", description: "Use AI assistance for drafting, research, and everyday tasks.", icon: "Bot" },
  { id: "gemini", name: "Gemini", category: "ai", description: "Use AI assistance to explore ideas and work with information.", icon: "Sparkles" },
  { id: "google-calendar", name: "Google Calendar", category: "communication", description: "Schedule events, manage availability, and plan meetings.", icon: "CalendarDays" },
  { id: "zoom", name: "Zoom", category: "communication", description: "Host and join video meetings and online conversations.", icon: "Video" },
  { id: "shopify", name: "Shopify", category: "content", description: "Manage products and content for an online store.", icon: "ShoppingBag" },
];

export interface ToolCategory {
  id: string;
  name: string;
  category: Tool["category"];
  tools: Tool[];
}

const categories: Array<Pick<ToolCategory, "id" | "name" | "category">> = [
  { id: "communication", name: "Communication", category: "communication" },
  { id: "project", name: "Project Management", category: "project" },
  { id: "data", name: "Data & Office", category: "data" },
  { id: "content", name: "Content", category: "content" },
  { id: "ai", name: "AI Tools", category: "ai" },
];

export const toolCategories: ToolCategory[] = categories.map((category) => ({
  ...category,
  tools: tools.filter((tool) => tool.category === category.category),
}));
