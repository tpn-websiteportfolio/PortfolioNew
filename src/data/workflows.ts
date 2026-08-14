interface VAFitQuestion {
  id: string;
  question: string;
  options: Array<{ text: string; score: number }>;
}

export const vaFitCheckerQuestions: VAFitQuestion[] = [
  {
    id: "q1",
    question: "How much time do you spend on administrative tasks per week?",
    options: [
      { text: "Less than 5 hours", score: 10 },
      { text: "5-10 hours", score: 20 },
      { text: "10-20 hours", score: 30 },
      { text: "More than 20 hours", score: 40 },
    ],
  },
  {
    id: "q2",
    question: "What frustrates you most about your current workflow?",
    options: [
      { text: "Email and communication management", score: 25 },
      { text: "Calendar and scheduling", score: 25 },
      { text: "Data organization and analysis", score: 30 },
      { text: "Lack of documented processes", score: 35 },
      { text: "Repetitive manual tasks", score: 40 },
    ],
  },
  {
    id: "q3",
    question: "How tech-comfortable are you with new tools?",
    options: [
      { text: "I prefer simple, familiar tools", score: 20 },
      { text: "I can learn and adapt quickly", score: 30 },
      { text: "I enjoy exploring new technology", score: 40 },
    ],
  },
  {
    id: "q4",
    question: "What's your primary business goal right now?",
    options: [
      { text: "Scale operations without hiring", score: 40 },
      { text: "Improve team efficiency", score: 30 },
      { text: "Free up time for revenue generation", score: 35 },
      { text: "Build better business systems", score: 35 },
    ],
  },
];

export const workflowData = { vaFitQuestions: vaFitCheckerQuestions };
