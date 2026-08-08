export interface Skill {
  name: string;
  level: number; // 0–100
  category: "data" | "visualization" | "programming" | "analytics";
}

export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  results: string[];
  tech: string[];
  image: string;
  github?: string;
  demo?: string;
  caseStudy?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  logo?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credential?: string;
  color: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
}
