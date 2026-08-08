import { Award, ExternalLink } from "lucide-react";
import { FadeUp } from "../animations/FadeUp";
import { certifications } from "../../data/portfolio";

export function Certifications() {
  return (
    <section id="certifications" className="py-28 bg-[#0D1120]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeUp>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-blue-400 tracking-widest uppercase">06 — Certifications</span>
            <div className="h-px flex-1 bg-gradient-to-r from-white/[0.08] to-transparent" />
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-12">
            Credentials &{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certifications.map((cert, i) => (
            <FadeUp key={cert.id} delay={0.1 * i}>
              <div className="group relative bg-[#111827] border border-white/[0.07] rounded-2xl p-6 hover:border-white/[0.14] transition-all duration-300 hover:shadow-xl hover:shadow-black/30 hover:-translate-y-1">
                {/* Color accent top bar */}
                <div
                  className="absolute top-0 left-6 right-6 h-0.5 rounded-full opacity-70"
                  style={{ background: `linear-gradient(90deg, ${cert.color}, transparent)` }}
                />

                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 mt-2"
                  style={{ backgroundColor: `${cert.color}18`, border: `1px solid ${cert.color}30` }}
                >
                  <Award size={20} style={{ color: cert.color }} />
                </div>

                <h3 className="text-white font-semibold text-sm leading-snug mb-2">{cert.name}</h3>
                <p className="text-[#64748B] text-xs mb-1">{cert.issuer}</p>
                <p className="text-xs font-mono" style={{ color: cert.color }}>Issued {cert.date}</p>

                {cert.credential && (
                  <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="text-xs text-[#475569] font-mono truncate">{cert.credential}</span>
                    <a
                      href="#"
                      className="text-[#64748B] hover:text-white transition-colors shrink-0 ml-2"
                      aria-label="View credential"
                    >
                      <ExternalLink size={13} />
                    </a>
                  </div>
                )}
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
