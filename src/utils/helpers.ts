import clsx, { type ClassValue } from "clsx";
import * as Icons from "lucide-react";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function calculateVAFitScore(answers: number[]): {
  score: number;
  level: "low" | "medium" | "high" | "perfect";
  message: string;
  recommendations: string[];
} {
  let score = 0;

  // Sum all answer scores
  score = answers.reduce((sum, val) => sum + val, 0);
  
  // Normalize to 0-100 scale
  const maxScore = 40 + 40 + 40 + 40; // Max possible score
  score = Math.round((score / maxScore) * 100);
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

export function mapToolIcon(iconName: string) {
  const iconMap: Record<string, any> = {
    Zap: Icons.Zap,
    Mail: Icons.Mail,
    FileText: Icons.FileText,
    Clipboard: Icons.Clipboard,
    Database: Icons.Database,
    Users: Icons.Users,
    Brain: Icons.Brain,
    Share2: Icons.Share2,
    Settings: Icons.Settings,
    CheckCircle: Icons.CheckCircle,
    Send: Icons.Send,
    Palette: Icons.Palette,
    ExternalLink: Icons.ExternalLink,
  };
  
  return iconMap[iconName] || Icons.Settings;
}
