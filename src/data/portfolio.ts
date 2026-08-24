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
  avatar: "/profile.jpg",
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
      "Built a dynamic Excel dashboard to analyze sales, profitability, product performance, and regional trends.",
    problem:
      "Leadership lacked a single view of sales, margin, and regional performance across product categories.",
    solution:
      "Used Power Query for data transformation, Pivot Tables, VLOOKUP, and KPI summary sheets to create an automated reporting workflow with minimal manual maintenance.",
    results: [
      "Zero manual upkeep required",
      "Unified view of sales, margin & regional performance",
      "Identified top-performing categories",
      "Highlighted seasonal sales patterns",
      "Improved visibility for non-technical stakeholders",
    ],
    tech: [
      "Excel",
      "Power Query",
      "Pivot Tables",
      "VLOOKUP",
      "KPI Reporting",
    ],
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
      "Interactive Power BI dashboard analyzing patient volume, wait times, department performance, and emergency room capacity.",
    problem:
      "ER management needed better visibility into patient volume, waiting times, and peak operational periods.",
    solution:
      "Created an interactive Power BI dashboard using data modeling, DAX measures, conditional formatting, KPIs, and drill-through functionality.",
    results: [
      "Identified peak patient volume patterns",
      "Improved visibility into department performance",
      "Analyzed patient waiting-time trends",
      "Supported staffing & capacity planning",
      "Implemented interactive drill-through analysis",
    ],
    tech: [
      "Power BI",
      "DAX",
      "Data Modeling",
      "Drill-through",
      "Conditional Formatting",
      "KPIs",
    ],
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
      "Advanced SQL project analyzing airline reservations, passenger behavior, route performance, revenue, and load factors.",
    problem:
      "Raw reservation data needed to be structured and analyzed to understand revenue performance, route profitability, and passenger value.",
    solution:
      "Designed a normalized relational database and performed advanced SQL analysis using JOINs, CTEs, aggregations, CASE statements, and window functions.",
    results: [
      "Designed normalized database schema",
      "Analyzed route-level revenue performance",
      "Identified passenger value segments",
      "Analyzed load factor and booking patterns",
      "Used advanced SQL for business insights",
    ],
    tech: [
      "SQL",
      "MySQL",
      "Relational Database Design",
      "JOINs",
      "CTEs",
      "Window Functions",
      "Aggregations",
    ],
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=500&fit=crop&auto=format",
    github: "https://github.com/deep-parulekar",
    demo: "#",
    caseStudy: "#",
    featured: true,
  },

  {
    id: "used-car-sales-analysis",
    title: "Used Car Sales & Price Analysis",
    description:
      "Power BI analytics project analyzing used-car prices, mileage, fuel type, transmission, ownership, and vehicle characteristics.",
    problem:
      "The raw vehicle dataset contained multiple factors affecting resale prices, making it difficult to identify pricing patterns and high-value vehicle segments.",
    solution:
      "Cleaned and transformed the dataset, created mileage groups, developed calculated measures, and built an interactive Power BI dashboard to analyze pricing and vehicle characteristics.",
    results: [
      "Analyzed vehicle pricing patterns",
      "Segmented vehicles by mileage",
      "Compared fuel and transmission types",
      "Analyzed ownership and vehicle age",
      "Identified factors associated with higher resale prices",
    ],
    tech: [
      "Power BI",
      "Power Query",
      "DAX",
      "Data Cleaning",
      "Data Modeling",
      "KPI Dashboard",
    ],
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=500&fit=crop&auto=format",
    github: "https://github.com/deep-parulekar",
    demo: "#",
    caseStudy: "#",
    featured: true,
  },

  {
    id: "hotel-booking-analysis",
    title: "Hotel Booking & Revenue Analysis",
    description:
      "SQL analytics project analyzing hotel bookings, cancellations, ADR, revenue, customer segments, and booking trends.",
    problem:
      "Hotel booking data needed to be transformed into actionable insights around revenue, cancellations, customer behavior, and operational performance.",
    solution:
      "Cleaned and analyzed booking data using SQL aggregations, CASE statements, filtering, date analysis, and business KPIs to identify revenue and booking patterns.",
    results: [
      "Analyzed total booking volume",
      "Measured cancellation patterns",
      "Calculated hotel revenue using ADR",
      "Compared customer and booking segments",
      "Identified important booking trends",
    ],
    tech: [
      "SQL",
      "MySQL",
      "Aggregations",
      "CASE Statements",
      "Date Functions",
      "KPI Analysis",
    ],
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=500&fit=crop&auto=format",
    github: "https://github.com/deep-parulekar",
    demo: "#",
    caseStudy: "#",
    featured: true,
  },

  {
    id: "loan-default-analysis",
    title: "Loan Default Risk Analysis",
    description:
      "SQL analytics project analyzing loan applications, borrower characteristics, loan amounts, interest rates, and default behavior.",
    problem:
      "Loan data contained multiple borrower and loan attributes that needed to be analyzed to understand default patterns and financial risk.",
    solution:
      "Imported and structured the loan dataset in SQL, performed data cleaning and business analysis, and created queries to identify default trends across borrower and loan segments.",
    results: [
      "Analyzed loan default patterns",
      "Compared default rates across borrower segments",
      "Analyzed loan amount and interest-rate trends",
      "Identified higher-risk customer segments",
      "Built SQL queries for financial risk analysis",
    ],
    tech: [
      "SQL",
      "MySQL",
      "Data Cleaning",
      "Aggregations",
      "CASE Statements",
      "Business Analysis",
    ],
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop&auto=format",
    github: "https://github.com/deep-parulekar",
    demo: "#",
    caseStudy: "#",
    featured: false,
  },

  {
    id: "bank-aml-analytics",
    title: "Bank AML & Transaction Monitoring",
    description:
      "SQL database project focused on banking transactions, customers, accounts, risk indicators, and AML monitoring.",
    problem:
      "Financial institutions need structured transaction data and reliable SQL analysis to identify suspicious activity and support AML reporting.",
    solution:
      "Designed a relational banking database architecture with structured tables and relationships for customers, accounts, transactions, and AML-related analysis.",
    results: [
      "Designed structured relational database architecture",
      "Created interconnected banking data entities",
      "Prepared transaction data for AML analysis",
      "Supported suspicious-activity investigation workflows",
      "Built a foundation for compliance reporting",
    ],
    tech: [
      "SQL",
      "MySQL",
      "Database Design",
      "DDL",
      "Relational Modeling",
      "AML Analytics",
    ],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop&auto=format",
    github: "https://github.com/deep-parulekar",
    demo: "#",
    caseStudy: "#",
    featured: false,
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