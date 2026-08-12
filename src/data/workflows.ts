export interface WorkflowProof {
  id: string;
  title: string;
  challenge: string;
  solution: string;
  result: string;
  timeframe: string;
  impact: string;
  tools: string[];
}

export const workflowProofs: WorkflowProof[] = [
  {
    id: "proof-1",
    title: "Streamlined Client Onboarding Pipeline",
    challenge: "Manual onboarding process taking 15+ hours per client, causing delays and inconsistent information collection.",
    solution: "Created automated Zapier workflow connecting intake form → CRM → welcome email → task assignments.",
    result: "Reduced onboarding time to 2 hours, standardized data collection, improved client experience.",
    timeframe: "Implemented in 1 week",
    impact: "40 clients processed efficiently",
    tools: ["Zapier", "Airtable", "Gmail"],
  },
  {
    id: "proof-2",
    title: "Email Management System Implementation",
    challenge: "Inbox chaos with 200+ daily emails, critical messages missed, no organization system.",
    solution: "Implemented priority-based filtering, automated labeling, VIP client alerts, and response templates.",
    result: "Response time improved to 4 hours, zero missed critical emails, team productivity +30%.",
    timeframe: "Setup completed in 3 days",
    impact: "Saving 10 hours per week",
    tools: ["Gmail", "Filters", "Templates"],
  },
  {
    id: "proof-3",
    title: "Sales Pipeline Automation",
    challenge: "Manual lead tracking spreadsheet causing follow-up delays and lost opportunities.",
    solution: "Built comprehensive pipeline using Make connecting form submissions → CRM → Slack notifications → scheduled follow-ups.",
    result: "Deal close rate improved 25%, follow-up consistency at 100%, lead response time under 24 hours.",
    timeframe: "Deployed over 2 weeks",
    impact: "Additional $50K+ in tracked pipeline",
    tools: ["Make", "Slack", "Google Sheets"],
  },
  {
    id: "proof-4",
    title: "Content Calendar & Social Publishing Workflow",
    challenge: "Inconsistent posting schedule, missed deadlines, content scattered across multiple platforms.",
    solution: "Centralized content calendar in Airtable with automated scheduling to 5 platforms via Buffer and Zapier.",
    result: "100% posting consistency, 3 hours saved per week, engagement metrics +45%.",
    timeframe: "Launched in 10 days",
    impact: "Team freed up for strategy work",
    tools: ["Airtable", "Zapier", "Buffer"],
  },
];

export const vaFitCheckerQuestions = [
  {
    id: "q1",
    question: "How much time do you spend on administrative tasks per week?",
    options: [
      { value: "5", label: "Less than 5 hours" },
      { value: "10", label: "5-10 hours" },
      { value: "20", label: "10-20 hours" },
      { value: "30", label: "More than 20 hours" },
    ],
  },
  {
    id: "q2",
    question: "What frustrates you most about your current workflow?",
    options: [
      { value: "email", label: "Email and communication management" },
      { value: "scheduling", label: "Calendar and scheduling" },
      { value: "data", label: "Data organization and analysis" },
      { value: "processes", label: "Lack of documented processes" },
      { value: "automation", label: "Repetitive manual tasks" },
    ],
  },
  {
    id: "q3",
    question: "How tech-comfortable are you with new tools?",
    options: [
      { value: "novice", label: "I prefer simple, familiar tools" },
      { value: "intermediate", label: "I can learn and adapt quickly" },
      { value: "advanced", label: "I enjoy exploring new technology" },
    ],
  },
  {
    id: "q4",
    question: "What's your primary business goal right now?",
    options: [
      { value: "scaling", label: "Scale operations without hiring" },
      { value: "efficiency", label: "Improve team efficiency" },
      { value: "growth", label: "Free up time for revenue generation" },
      { value: "systems", label: "Build better business systems" },
    ],
  },
];
