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
    id: "manufacturing-quality-analytics",
    title: "Manufacturing Quality & Factory Performance",
    description:
      "SQL analysis comparing four manufacturing plants across defect rate, production volume, downtime, and machine failures to identify different operational root causes.",
    problem:
      "A single metric such as defect rate could incorrectly label a factory as the worst performer, so the analysis needed to evaluate quality, downtime, and machine reliability together.",
    solution:
      "Used MySQL aggregations and multi-metric ranking to compare factory performance and separate process-quality issues from machine-reliability issues.",
    results: [
      "Aurangabad had the highest defect rate at 8.39%",
      "Pune produced the most units at 2.05M",
      "Pune recorded the highest downtime at 76,521 minutes",
      "Pune recorded the most machine failures at 2,102",
      "Showed why factory performance cannot be judged by one KPI alone",
    ],
    tech: [
      "SQL",
      "MySQL",
      "GROUP BY",
      "Aggregations",
      "CASE",
      "Business Analysis",
    ],
    image: "/All Project pict/Manufacturing Quality & Factory Performance.jpg",
    github: "https://github.com/deep-parulekar",
    demo: "#",
    caseStudy: "#",
    featured: true,
  },

  {
    id: "used-car-sales-pricing",
    title: "Used Car Sales & Pricing Analytics",
    description:
      "Power BI dashboard analyzing used-car pricing, vehicle age, mileage, brands, fuel types, price segments, and transmission mix.",
    problem:
      "The dataset contained multiple vehicle attributes affecting resale value, making it difficult to quickly understand pricing patterns and market demand.",
    solution:
      "Cleaned and transformed the data, created calculated measures and mileage groups, and built a focused dashboard around the questions a manager would actually need answered.",
    results: [
      "15K cars analyzed",
      "120 vehicle models across 31 brands",
      "Average car price: 774.70K",
      "Average vehicle age: 6.04 years",
      "Average mileage: 55.64K",
      "Focused the report on 7 KPIs and 6 decision-oriented visuals",
    ],
    tech: [
      "Power BI",
      "Power Query",
      "DAX",
      "Data Cleaning",
      "Data Modeling",
      "KPI Dashboard",
    ],
    image: "/All Project pict/Used Car Sales & Pricing Analytics.jpg",
    github: "https://github.com/deep-parulekar",
    demo: "#",
    caseStudy: "#",
    featured: true,
  },

  {
    id: "hotel-booking-revenue",
    title: "Hotel Booking & Revenue Analytics",
    description:
      "Advanced SQL project analyzing hotel bookings, cancellations, ADR, customer segments, booking channels, lead time, and revenue contribution.",
    problem:
      "The first revenue calculation summed ADR directly and produced an attractive but incorrect total because ADR is a daily rate rather than booking revenue.",
    solution:
      "Validated the business meaning of the metric, corrected revenue to ADR multiplied by total stay nights, then used CTEs and ROW_NUMBER to rank countries by revenue contribution.",
    results: [
      "25 SQL business-analysis queries",
      "Corrected revenue using ADR × total stay nights",
      "Ranked countries by revenue contribution",
      "Used CTEs and ROW_NUMBER for analytical ranking",
      "Applied LAG and running-total analysis",
      "Analyzed cancellations, channels, customer types, and lead-time behavior",
    ],
    tech: [
      "SQL",
      "MySQL",
      "CTEs",
      "ROW_NUMBER",
      "LAG",
      "Aggregations",
      "Date Analysis",
    ],
    image: "/All Project pict/Hotel Booking & Revenue Analytics.jpg",
    github: "https://github.com/deep-parulekar",
    demo: "#",
    caseStudy: "#",
    featured: true,
  },

  {
    id: "supply-chain-performance",
    title: "Supply Chain Performance Analytics",
    description:
      "Power BI dashboard analyzing 66K orders across sales, profit, regions, categories, products, and shipping performance.",
    problem:
      "Management needed a compact view of commercial performance and delivery reliability, especially where shipping promises were failing.",
    solution:
      "Built a Power BI report combining sales and profit trends with category, region, product, and shipping-mode analysis to expose operational outliers.",
    results: [
      "66K orders analyzed",
      "36.78M total sales",
      "3.97M total profit",
      "57.33% overall late-delivery rate",
      "First Class showed 100% late delivery in the analysis",
      "Standard Class showed 39.87% late delivery",
    ],
    tech: [
      "Power BI",
      "DAX",
      "Power Query",
      "KPI Reporting",
      "Trend Analysis",
      "Supply Chain Analytics",
    ],
    image: "/All Project pict/Supply Chain Performance Analytics.jpg",
    github: "https://github.com/deep-parulekar",
    demo: "#",
    caseStudy: "#",
    featured: true,
  },

  {
    id: "hr-attrition-salary",
    title: "HR Attrition & Salary Analytics",
    description:
      "SQL and Power BI analysis of employee attrition, salary distribution, departments, age groups, and salary bands.",
    problem:
      "The headline attrition rate did not explain where employee turnover was concentrated or whether salary alone could explain the pattern.",
    solution:
      "Used SQL for attrition analysis, salary comparisons, CTEs, DENSE_RANK, and NTILE, then translated the findings into executive and salary-analysis Power BI pages.",
    results: [
      "1,470 employees analyzed",
      "Overall attrition rate: 16.12%",
      "Sales had the highest attrition at 20.63%",
      "Sales also had the highest average salary at 6,959",
      "Used DENSE_RANK to find top earners by department",
      "Used NTILE to create salary quartiles",
    ],
    tech: [
      "SQL",
      "MySQL",
      "Power BI",
      "DAX",
      "DENSE_RANK",
      "NTILE",
      "Power Query",
    ],
    image: "/All Project pict/HR Attrition & Salary Analytics.jpg",
    github: "https://github.com/deep-parulekar",
    demo: "#",
    caseStudy: "#",
    featured: true,
  },

  {
    id: "blinkit-retail-analysis",
    title: "Blinkit Retail Sales & Outlet Analysis",
    description:
      "End-to-end SQL and Power BI analysis of Blinkit retail sales, outlets, products, categories, location tiers, and product rankings.",
    problem:
      "Raw retail data contained inconsistent category values and nulls, while outlet-level performance was difficult to compare without structured analysis.",
    solution:
      "Cleaned the data in SQL, performed EDA and business analysis, then used window functions and Power BI to analyze outlet performance, categories, location tiers, and top products.",
    results: [
      "1.49 crore total sales in the SQL analysis",
      "Compared outlet performance across 8 outlets",
      "Identified an unusually low-performing outlet averaging about 339 in sales",
      "Standardized LF, low fat, and Low Fat values",
      "Used DENSE_RANK and CTEs for product/category analysis",
      "Built an interactive retail intelligence dashboard",
    ],
    tech: [
      "SQL",
      "MySQL",
      "Power BI",
      "DAX",
      "Power Query",
      "CTEs",
      "DENSE_RANK",
    ],
    image: "/All Project pict/Blinkit Retail Sales & Outlet Analysis.jpg",
    github: "https://github.com/deep-parulekar",
    demo: "#",
    caseStudy: "#",
    featured: true,
  },

  {
    id: "ecommerce-revenue-profit",
    title: "E-commerce Revenue & Profit Analysis",
    description:
      "Full SQL pipeline covering database design, joins, revenue, net revenue, profit, customer analysis, and window-function analysis.",
    problem:
      "The business needed a structured relational model and analysis layer to move from raw orders to reliable customer, product, revenue, and profit insights.",
    solution:
      "Designed five related tables, validated the data with basic aggregations, joined the schema for business questions, calculated revenue and profit, and applied ranking and time-series window functions.",
    results: [
      "5-table relational schema",
      "500 orders and 1,213 order line items",
      "3,038 total units sold",
      "43.6L total revenue",
      "13.9L total profit",
      "Used RANK, DENSE_RANK, ROW_NUMBER, LAG, and PARTITION BY",
    ],
    tech: [
      "SQL",
      "MySQL",
      "Schema Design",
      "JOINs",
      "CTEs",
      "Window Functions",
      "Profit Analysis",
    ],
    image: "/All Project pict/E-commerce Revenue & Profit Analysis.jpg",
    github: "https://github.com/deep-parulekar",
    demo: "#",
    caseStudy: "#",
    featured: true,
  },

  {
    id: "healthcare-patient-flow",
    title: "MedCare Patient Flow & Quality Analytics",
    description:
      "Two-page Power BI report analyzing patient visits, waiting time, readmission, mortality, satisfaction, severity, outcomes, and hospital performance.",
    problem:
      "Executive KPIs can hide concentrated operational and clinical risk, so the report needed a drill-down from overall performance into severity and hospital-level patterns.",
    solution:
      "Used Power Query for cleanup, DAX measures for readmission and mortality, and Power BI drill-downs to connect executive KPIs with patient-flow and outcome details.",
    results: [
      "10K patient visits analyzed",
      "Average wait time: 46.84 minutes",
      "Readmission rate: 17.3%",
      "Average satisfaction: 74.99",
      "Overall mortality rate: 0.90%",
      "Drilled into severity, hospital, region, department, and outcome",
    ],
    tech: [
      "Power BI",
      "DAX",
      "Power Query",
      "Drill-down",
      "KPIs",
      "Healthcare Analytics",
    ],
    image: "/All Project pict/MedCare Patient Flow & Quality Analytics.jpg",
    github: "https://github.com/deep-parulekar",
    demo: "#",
    caseStudy: "#",
    featured: true,
  },

  {
    id: "telecom-churn-retention",
    title: "Telecom Customer Churn & Retention",
    description:
      "SQL and Power BI churn analysis of 7,043 telecom customers focused on contract type, payment method, customer segments, and revenue impact.",
    problem:
      "The overall churn rate alone did not reveal which combinations of customer characteristics were driving the highest risk of leaving.",
    solution:
      "Used SQL segmentation and conditional analysis to isolate churn patterns, then built a Power BI dashboard to communicate the retention story clearly.",
    results: [
      "7,043 customers analyzed",
      "Overall churn rate: 26.54%",
      "Month-to-month + electronic check churn: 53.7%",
      "One-year + electronic check churn: 18.4%",
      "Two-year + electronic check churn: 7.7%",
      "Highlighted contract length as a key retention signal",
    ],
    tech: [
      "SQL",
      "Power BI",
      "DAX",
      "Power Query",
      "Segmentation",
      "Churn Analysis",
    ],
    image: "/All Project pict/Telecom Customer Churn & Retention.jpg",
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