import type {
  Skill,
  Project,
  Experience,
  Certification,
  Testimonial,
} from "../types";

export const person = {
  name: "Deep Parulekar",
  initials: "DP",
  title: "Data Analyst",
  roles: [
    "Data Analyst",
    "Power BI Developer",
    "SQL Specialist",
    "Advanced Excel Analyst",
  ],
  bio: "Data Analyst with approximately 14 months of experience in revenue accounting and legal data operations, backed by a portfolio of end-to-end Power BI, SQL, and Excel projects. Builds automated reporting workflows and executive-ready dashboards that turn multi-source data into decisions — from airline revenue reconciliation to hospital capacity planning.",
  location: "Mumbai, India",
  phone: "+91-9967951406",
  email: "deep64.model@gmail.com",
  linkedin: "https://linkedin.com/in/deep-parulekar",
  github: "https://github.com/deep-parulekar",
  available: true,
  stats: [
    { label: "Experience", value: "14+ Mos" },
    { label: "Data Accuracy", value: ">99%" },
    { label: "Processing Speed", value: "+30%" },
    { label: "Reporting Turnaround", value: "+20%" },
  ],
};

export const skills: Skill[] = [
  // BI & Visualization
  { name: "Power BI (DAX, Measures, KPIs)", level: 95, category: "visualization" },
  { name: "Advanced Excel (Pivot, Power Query, Macros)", level: 95, category: "visualization" },
  { name: "Tableau Visualizations", level: 90, category: "visualization" },
  { name: "Dashboard Design & Drill-through", level: 93, category: "visualization" },

  // Databases & SQL
  { name: "SQL (JOINs, Window Functions, CTEs)", level: 95, category: "data" },
  { name: "Relational Schema Design", level: 92, category: "data" },
  { name: "Data Cleaning & Transformation", level: 94, category: "data" },
  { name: "Data Validation & Integrity", level: 96, category: "data" },

  // Analytics
  { name: "Trend & KPI Reporting", level: 92, category: "analytics" },
  { name: "Reporting Automation", level: 94, category: "analytics" },
  { name: "Root Cause Analysis", level: 90, category: "analytics" },
  { name: "Revenue Accounting Reconciliation", level: 95, category: "analytics" },

  // Delivery & Collaboration
  { name: "Stakeholder Reporting", level: 93, category: "programming" },
  { name: "Cross-functional Collaboration", level: 92, category: "programming" },
  { name: "SLA & Audit Compliance", level: 95, category: "programming" },
];

export const projects: Project[] = [
  {
    id: "retail-sales-profitability",
    title: "Retail Sales & Profitability Dashboard",
    description:
      "Built a fully dynamic dashboard using Power Query for transformation and structured KPI summary sheets.",
    problem:
      "Leadership lacked a single view of sales, margin, and regional performance across product categories.",
    solution:
      "Built a fully dynamic dashboard using Power Query for transformation and structured KPI summary sheets, surfacing top-performing categories, seasonal patterns, and underperforming segments for non-technical stakeholders with zero manual upkeep.",
    results: [
      "Zero manual upkeep required",
      "Unified view of sales, margin & regional performance",
      "Surfaced top categories & seasonal patterns",
      "Empowered non-technical stakeholders with live KPIs",
    ],
    tech: ["Excel", "Power Query", "Pivot Tables", "VLOOKUP", "KPI Summary"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&auto=format",
    github: "https://github.com/deep-parulekar",
    demo: "#",
    caseStudy: "#",
    featured: true,
  },
  {
    id: "hospital-er-dashboard",
    title: "Hospital Emergency Room Dashboard",
    description:
      "Interactive Power BI dashboard with custom DAX measures, conditional formatting, and drill-through tooltips.",
    problem:
      "ER management needed visibility into patient volume and wait times to plan staffing across departments.",
    solution:
      "Built an interactive dashboard with custom DAX measures, conditional formatting, and drill-through tooltips; uncovered peak load patterns that informed data-driven staffing and capacity planning recommendations.",
    results: [
      "Uncovered peak load patient volume patterns",
      "Informed data-driven staffing & capacity planning",
      "Implemented custom DAX measures & drill-throughs",
      "Enhanced department-wide wait time visibility",
    ],
    tech: ["Power BI", "DAX", "Conditional Formatting", "Drill-through", "Data Modeling"],
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=500&fit=crop&auto=format",
    github: "https://github.com/deep-parulekar",
    demo: "#",
    caseStudy: "#",
    featured: true,
  },
  {
    id: "airline-revenue-analytics",
    title: "Airline Reservation & Revenue Analytics",
    description:
      "Designed a normalized database schema from scratch and ran advanced SQL analysis to reveal route profitability and passenger value.",
    problem:
      "Raw reservation data needed structuring and analysis to reveal route profitability and passenger value.",
    solution:
      "Designed a normalized database schema from scratch and ran advanced SQL analysis (multi-table JOINs, window functions, aggregations) to surface revenue trends, route profitability, load factor, and high-value passenger segments; delivered an executive-level insights report.",
    results: [
      "Designed normalized database schema from scratch",
      "Executed multi-table JOINs, window functions & CTEs",
      "Identified key route profitability & load factors",
      "Delivered executive-level insights report",
    ],
    tech: ["SQL", "Relational Database Design", "Multi-table JOINs", "Window Functions", "CTEs"],
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=500&fit=crop&auto=format",
    github: "https://github.com/deep-parulekar",
    demo: "#",
    caseStudy: "#",
    featured: true,
  },
];

export const experience: Experience[] = [
  {
    id: "wns-global",
    company: "WNS Global Services",
    role: "Passenger Revenue Accounting Analyst",
    period: "May 2025 – Dec 2025",
    location: "Mumbai, India",
    type: "Full-time",
    description:
      "Automated recurring reporting workflows and reconciled high-volume airline revenue data using SQL and Advanced Excel while sustaining >99% data accuracy across monthly reporting cycles.",
    achievements: [
      "Automated recurring reporting workflows with Excel macros and SQL scripts, cutting data processing time by 30% and freeing analyst capacity for higher-value work.",
      "Built Excel-based KPI dashboards tracking revenue performance in real time, improving management reporting turnaround by 20%.",
      "Reconciled high-volume airline revenue data using SQL and Advanced Excel, maintaining full accuracy against accounting compliance standards.",
      "Sustained >99% data accuracy across monthly reporting cycles by systematically validating datasets across multiple integrated accounting systems.",
      "Partnered with cross-functional teams to resolve data discrepancies and deliver audit-ready reporting packages under strict deadlines.",
    ],
  },
  {
    id: "kroll",
    company: "Kroll",
    role: "Data & Operations Executive",
    period: "May 2024 – Nov 2024",
    location: "Mumbai, India",
    type: "Full-time",
    description:
      "Processed and validated high volumes of legal claims data, maintained relational database integrity, and mitigated compliance reporting errors under strict SLA constraints.",
    achievements: [
      "Processed and validated high volumes of legal claims data, maintaining structured database integrity across case records.",
      "Organized relational databases for contracts and legal case files, improving document retrieval speed and audit readiness.",
      "Identified data inconsistencies in legal documents, reducing compliance reporting errors and downstream operational risk.",
      "Met tight SLA requirements by coordinating with internal teams to clear data backlogs under high-pressure conditions.",
    ],
  },
];

export const certifications: Certification[] = [
  {
    id: "it-vedant-ds",
    name: "Data Science & Analytics with Artificial Intelligence",
    issuer: "IT Vedant, Mumbai",
    date: "Certified",
    credential: "IT Vedant — Mumbai",
    color: "#3B82F6",
  },
  {
    id: "excel-cert",
    name: "Advanced Excel for Data Analysis",
    issuer: "Certified",
    date: "Certified",
    credential: "Advanced Excel Analytics",
    color: "#217346",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Deep automated our recurring reporting workflows and reduced data processing time by 30%. His precision in reconciling revenue data against accounting standards is outstanding.",
    name: "Revenue Accounting Lead",
    role: "Operations Division",
    company: "WNS Global Services",
  },
  {
    id: "t2",
    quote:
      "Deep maintained exceptional database integrity while managing high volumes of legal claims data. He consistently cleared backlogs under tight SLA deadlines.",
    name: "Operations Manager",
    role: "Legal & Data Operations",
    company: "Kroll",
  },
];