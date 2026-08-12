import clsx, { type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function calculateVAFitScore(answers: Record<string, string>): {
  score: number;
  level: "low" | "medium" | "high" | "perfect";
  message: string;
  recommendations: string[];
} {
  let score = 0;
  const answersObj = Object.values(answers).map((v) => v || "0");

  // Q1: Time on admin tasks
  const timeScore = parseInt(answersObj[0] || "0", 10);
  score += Math.min(timeScore / 30, 1) * 25;

  // Q2-Q4: Qualitative answers, add base score
  score += 25;

  // Add bonus for high tech comfort
  if (answersObj[2] === "advanced") score += 10;

  // Add bonus for scaling goals
  if (answersObj[3] === "scaling") score += 10;

  score = Math.min(score, 100);

  const level: "low" | "medium" | "high" | "perfect" =
    score < 25
      ? "low"
      : score < 50
        ? "medium"
        : score < 75
          ? "high"
          : "perfect";

  const messages = {
    low: "You might benefit from starting with one area of focus",
    medium: "Good potential for VA support to improve your workflow",
    high: "Excellent candidate for comprehensive VA support",
    perfect: "Perfect fit! Ready for full VA partnership",
  };

  const recommendations = {
    low: [
      "Start with email management automation",
      "Implement basic task tracking system",
    ],
    medium: [
      "Set up comprehensive workflow automation",
      "Implement CRM system",
      "Establish content calendar",
    ],
    high: [
      "Full workflow automation with AI integration",
      "Build scalable business systems",
      "Implement advanced analytics and reporting",
      "Consider AI-powered decision support",
    ],
    perfect: [
      "Implement complete business automation suite",
      "Deploy advanced AI tools for strategy",
      "Build predictive analytics dashboard",
      "Scale operations without additional headcount",
    ],
  };

  return {
    score: Math.round(score),
    level,
    message: messages[level],
    recommendations: recommendations[level],
  };
}

export function truncate(str: string, length: number): string {
  return str.length > length ? str.substring(0, length) + "..." : str;
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}
