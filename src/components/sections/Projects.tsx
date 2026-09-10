import { useState } from "react";
import { ExternalLink, Github, BookOpen, ArrowRight, TrendingUp } from "lucide-react";
import { FadeUp } from "../animations/FadeUp";
import { projects, person } from "../../data/portfolio";
import type { Project } from "../../types";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <FadeUp delay={0.1 * index}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group relative bg-[#111827] border border-white/[0.07] rounded-3xl overflow-hidden hover:border-white/[0.14] transition-all duration-300 hover:shadow-2xl hover:shadow-black/40"
      >
        {/* Image */}
        <div className="relative h-52 overflow-hidden bg-[#0F1623]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent" />
          {/* Tech badges overlay */}
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-1.5">
            {project.tech.slice(0, 4).map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-md bg-[#0B0F19]/80 backdrop-blur-sm border border-white/[0.12] text-[10px] font-mono text-[#94A3B8]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-white font-bold text-xl mb-2 group-hover:text-blue-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-[#64748B] text-sm leading-relaxed mb-5">{project.description}</p>

          {/* Problem / Solution */}
          <div
            className="overflow-hidden transition-all duration-300"
            style={{ maxHeight: hovered ? "200px" : "0px", opacity: hovered ? 1 : 0 }}
          >
            <div className="space-y-3 mb-5 pt-1">
              <div>
                <p className="text-xs font-mono text-violet-400 uppercase tracking-widest mb-1">Problem</p>
                <p className="text-[#94A3B8] text-xs leading-relaxed">{project.problem}</p>
              </div>
              <div>
                <p className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-1">Solution</p>
                <p className="text-[#94A3B8] text-xs leading-relaxed">{project.solution}</p>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="grid grid-cols-2 gap-2 mb-5">
            {project.results.slice(0, 2).map((result) => (
              <div
                key={result}
                className="flex items-start gap-2 bg-emerald-500/[0.06] border border-emerald-500/[0.12] rounded-xl p-2.5"
              >
                <TrendingUp size={11} className="text-emerald-400 mt-0.5 shrink-0" />
                <span className="text-[10px] text-emerald-300 leading-snug">{result}</span>
              </div>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
            {project.github && (
              <a
                href={project.github}
                className="flex items-center gap-1.5 text-xs text-[#64748B] hover:text-white transition-colors"
              >
                <Github size={14} /> GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                className="flex items-center gap-1.5 text-xs text-[#64748B] hover:text-white transition-colors"
              >
                <ExternalLink size={14} /> Live Demo
              </a>
            )}
            {project.caseStudy && (
              <a
                href={project.caseStudy}
                className="flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 transition-colors ml-auto font-medium"
              >
                Case Study <ArrowRight size={12} />
              </a>
            )}
          </div>
        </div>
      </div>
    </FadeUp>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeUp>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-blue-400 tracking-widest uppercase">03 — Projects</span>
            <div className="h-px flex-1 bg-gradient-to-r from-white/[0.08] to-transparent" />
          </div>
        </FadeUp>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <FadeUp delay={0.1}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1]">
              Featured{" "}
              <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                Work
              </span>
            </h2>
            <p className="text-[#64748B] mt-3 max-w-md">
              End-to-end analytics projects spanning BI, predictive modeling, and data engineering.
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <a
              href={person.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#94A3B8] hover:text-white transition-colors"
            >
              <Github size={16} /> View all on GitHub <ArrowRight size={14} />
            </a>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
