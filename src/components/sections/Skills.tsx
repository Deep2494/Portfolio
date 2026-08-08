import { useState } from "react";
import { FadeUp } from "../animations/FadeUp";
import { skills } from "../../data/portfolio";
import type { Skill } from "../../types";

const categories: { key: Skill["category"] | "all"; label: string }[] = [
  { key: "all", label: "All Skills" },
  { key: "data", label: "Data Engineering" },
  { key: "visualization", label: "Visualization" },
  { key: "programming", label: "Programming" },
  { key: "analytics", label: "Analytics & ML" },
];

const categoryColors: Record<Skill["category"], string> = {
  data: "from-cyan-500/20 to-cyan-500/5 border-cyan-500/20 text-cyan-400",
  visualization: "from-blue-500/20 to-blue-500/5 border-blue-500/20 text-blue-400",
  programming: "from-violet-500/20 to-violet-500/5 border-violet-500/20 text-violet-400",
  analytics: "from-emerald-500/20 to-emerald-500/5 border-emerald-500/20 text-emerald-400",
};

const categoryBars: Record<Skill["category"], string> = {
  data: "bg-gradient-to-r from-cyan-500 to-cyan-400",
  visualization: "bg-gradient-to-r from-blue-500 to-blue-400",
  programming: "bg-gradient-to-r from-violet-500 to-violet-400",
  analytics: "bg-gradient-to-r from-emerald-500 to-emerald-400",
};

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className={`rounded-2xl border bg-gradient-to-br p-5 hover:scale-[1.02] transition-transform duration-200 ${categoryColors[skill.category]}`}>
      <div className="flex items-center justify-between mb-4">
        <p className="text-white font-semibold text-sm">{skill.name}</p>
        <span className="text-xs font-mono opacity-70">{skill.level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/[0.08] overflow-hidden">
        <div
          className={`h-full rounded-full ${categoryBars[skill.category]} transition-all duration-1000`}
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<Skill["category"] | "all">("all");

  const filtered = activeCategory === "all" ? skills : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-28 bg-[#0D1120]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeUp>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-blue-400 tracking-widest uppercase">02 — Skills</span>
            <div className="h-px flex-1 bg-gradient-to-r from-white/[0.08] to-transparent" />
          </div>
        </FadeUp>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <FadeUp delay={0.1}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1]">
              Technical{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Arsenal
              </span>
            </h2>
          </FadeUp>

          {/* Filter tabs */}
          <FadeUp delay={0.15}>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                    activeCategory === cat.key
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                      : "bg-white/[0.04] border border-white/[0.08] text-[#94A3B8] hover:text-white hover:bg-white/[0.07]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((skill, i) => (
            <FadeUp key={skill.name} delay={0.05 * (i % 8)}>
              <SkillCard skill={skill} />
            </FadeUp>
          ))}
        </div>

        {/* Tools strip */}
        <FadeUp delay={0.3} className="mt-16">
          <div className="rounded-2xl border border-white/[0.07] bg-[#111827] p-6">
            <p className="text-xs font-mono text-[#64748B] tracking-widest uppercase mb-5">Tools & Platforms</p>
            <div className="flex flex-wrap gap-3">
              {[
                "PostgreSQL", "MySQL", "BigQuery", "Snowflake", "Azure SQL",
                "dbt", "Apache Airflow", "Power Automate", "Google Analytics",
                "Looker", "Metabase", "Jupyter", "VS Code", "Git", "Docker",
              ].map((tool) => (
                <span
                  key={tool}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-xs text-[#94A3B8] font-mono hover:text-white hover:border-white/[0.14] transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
