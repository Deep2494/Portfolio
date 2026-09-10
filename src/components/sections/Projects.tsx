import { useState, useEffect } from "react";
import { ExternalLink, Github, ArrowRight, TrendingUp, Maximize2, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { FadeUp } from "../animations/FadeUp";
import { projects, person } from "../../data/portfolio";
import type { Project } from "../../types";

function ProjectCard({
  project,
  index,
  onImageClick,
}: {
  project: Project;
  index: number;
  onImageClick: (project: Project) => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <FadeUp delay={0.1 * index}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group relative bg-[#111827] border border-white/[0.07] rounded-3xl overflow-hidden hover:border-white/[0.14] transition-all duration-300 hover:shadow-2xl hover:shadow-black/40"
      >
        {/* Image */}
        <div
          onClick={() => onImageClick(project)}
          className="relative h-52 overflow-hidden bg-[#0F1623] cursor-pointer group/img"
          title="Click to view image in full screen"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain transition-transform duration-500 group-hover/img:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent pointer-events-none" />

          {/* Hover backdrop overlay with zoom indicator */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-medium text-xs backdrop-blur-[2px]">
            <span className="px-3 py-1.5 rounded-full bg-white/20 border border-white/30 backdrop-blur-md flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover/img:translate-y-0 transition-transform duration-300">
              <Maximize2 size={14} /> Expand Image
            </span>
          </div>

          {/* Tech badges overlay */}
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-1.5 pointer-events-none">
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

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
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onImageClick={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>
      </div>

      {/* Image Modal Lightbox */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-10 select-none"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl max-h-[92vh] w-full bg-[#111827] border border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0F1623]">
                <div>
                  <h3 className="text-white font-bold text-lg sm:text-xl">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs font-mono text-blue-400 mt-0.5">
                    Click anywhere outside or press ESC to close
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-[#94A3B8] hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Body / Image */}
              <div className="relative flex-1 bg-[#090D16] p-4 sm:p-6 flex items-center justify-center overflow-auto max-h-[75vh]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
                />
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-3 border-t border-white/10 bg-[#0F1623] flex flex-wrap items-center justify-between gap-3 text-xs text-[#94A3B8]">
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-[#0B0F19] border border-white/10 font-mono text-[11px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="text-[#64748B] text-[11px]">
                  Full Resolution Preview
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
