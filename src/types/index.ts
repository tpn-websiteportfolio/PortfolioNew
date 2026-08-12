export interface NavItem {
  label: string;
  href: string;
  id?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  company: string;
  message: string;
  phone?: string;
}

export interface VAFitResult {
  score: number;
  level: "low" | "medium" | "high" | "perfect";
  message: string;
  recommendations: string[];
}
