import { FadeUp } from "../animations/FadeUp";
import { person } from "../../data/portfolio";

const education = [
  {
    degree: "Bachelor of Science — Information Technology",
    school: "University of Mumbai",
    period: "2020 – 2023",
    gpa: "B.Sc. IT",
  },
];

export function About() {
  return (
    <section id="about" className="py-28 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full bg-violet-600/[0.04] blur-[100px]" />
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section label */}
        <FadeUp>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-blue-400 tracking-widest uppercase">01 — About</span>
            <div className="h-px flex-1 bg-gradient-to-r from-white/[0.08] to-transparent" />
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Story */}
          <div>
            <FadeUp delay={0.1}>
              <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-8">
                Turning multi-source data into{" "}
                <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                  executive decisions
                </span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="space-y-5 text-[#94A3B8] leading-relaxed">
                <p>
                  I am a Data Analyst with approximately 14 months of experience spanning revenue accounting and legal data operations. I specialize in building automated reporting workflows and executive-ready dashboards.
                </p>
                <p>
                  At WNS Global Services, I automated recurring reporting workflows using Excel macros and SQL scripts—cutting data processing time by 30% and building real-time KPI dashboards for airline passenger revenue reconciliation.
                </p>
                <p>
                  At Kroll, I managed relational contract databases, validated legal claims data, and cleared critical backlogs while meeting strict SLA guidelines and ensuring compliance accuracy.
                </p>
              </div>
            </FadeUp>

            {/* Stats */}
            <FadeUp delay={0.3} className="grid grid-cols-2 gap-4 mt-10">
              {person.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#111827] border border-white/[0.07] rounded-2xl p-5"
                >
                  <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-sm text-[#64748B]">{stat.label}</p>
                </div>
              ))}
            </FadeUp>
          </div>

          {/* Right — Education + tools */}
          <div className="space-y-6">
            {/* Education */}
            <FadeUp delay={0.15}>
              <div>
                <p className="text-xs font-mono text-[#64748B] tracking-widest uppercase mb-4">Education</p>
                <div className="space-y-3">
                  {education.map((edu) => (
                    <div
                      key={edu.degree}
                      className="bg-[#111827] border border-white/[0.07] rounded-2xl p-5 hover:border-white/[0.12] transition-colors"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-white font-semibold text-[15px] mb-1">{edu.degree}</p>
                          <p className="text-[#94A3B8] text-sm">{edu.school}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-xs font-mono text-blue-400 mb-0.5">{edu.period}</p>
                          <p className="text-xs text-[#64748B]">{edu.gpa}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Core Competencies */}
            <FadeUp delay={0.25}>
              <div className="bg-[#111827] border border-white/[0.07] rounded-2xl p-6">
                <p className="text-xs font-mono text-[#64748B] tracking-widest uppercase mb-4">Core Competencies</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Power BI & DAX",
                    "Advanced Excel & Macros",
                    "Power Query & VLOOKUP",
                    "SQL (JOINs, CTEs, Window Functions)",
                    "Tableau Dashboards",
                    "Relational Schema Design",
                    "Data Cleaning & Validation",
                    "Trend & KPI Reporting",
                    "Revenue Accounting",
                    "Root Cause Analysis",
                    "Reporting Automation",
                    "Stakeholder Communication",
                  ].map((c) => (
                    <span
                      key={c}
                      className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.07] text-xs text-[#94A3B8] hover:text-white hover:border-white/[0.14] transition-colors"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Current focus */}
            <FadeUp delay={0.3}>
              <div className="rounded-2xl p-6 bg-gradient-to-br from-blue-600/[0.12] to-violet-600/[0.08] border border-blue-500/20">
                <p className="text-xs font-mono text-blue-400 tracking-widest uppercase mb-2">Professional Training</p>
                <p className="text-white font-medium mb-1">Data Science & AI Certification</p>
                <p className="text-[#94A3B8] text-sm leading-relaxed">
                  Completing advanced specialization in Data Science & Analytics with Artificial Intelligence at IT Vedant, Mumbai.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
