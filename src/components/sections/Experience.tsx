import { MapPin, Calendar } from "lucide-react";
import { FadeUp } from "../animations/FadeUp";
import { experience } from "../../data/portfolio";

const companyColors: Record<string, { dot: string; ring: string; glow: string }> = {
  "wns-global": { dot: "bg-blue-500", ring: "border-blue-500/30", glow: "shadow-blue-500/20" },
  kroll: { dot: "bg-violet-500", ring: "border-violet-500/30", glow: "shadow-violet-500/20" },
};

export function Experience() {
  return (
    <section id="experience" className="py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeUp>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-blue-400 tracking-widest uppercase">05 — Experience</span>
            <div className="h-px flex-1 bg-gradient-to-r from-white/[0.08] to-transparent" />
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-16">
            Career{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Timeline
            </span>
          </h2>
        </FadeUp>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-6 lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-violet-500/20 to-transparent" />

          <div className="space-y-12">
            {experience.map((exp, i) => {
              const colors = companyColors[exp.id] || companyColors["wns-global"];
              const isLeft = i % 2 === 0;

              return (
                <FadeUp key={exp.id} delay={0.15 * i}>
                  <div className={`relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 ${isLeft ? "" : "lg:direction-rtl"}`}>
                    {/* Timeline dot */}
                    <div className="absolute left-6 lg:left-1/2 lg:-translate-x-1/2 w-4 h-4 -translate-x-1/2 lg:translate-x-0 top-6">
                      <div className={`w-4 h-4 rounded-full ${colors.dot} border-2 ${colors.ring} shadow-lg ${colors.glow}`} />
                    </div>

                    {/* Content card */}
                    <div className={`pl-14 lg:pl-0 ${isLeft ? "lg:pr-14 lg:text-right" : "lg:col-start-2 lg:pl-14"}`}>
                      <div className="bg-[#111827] border border-white/[0.07] rounded-2xl p-6 hover:border-white/[0.14] transition-all duration-300 hover:shadow-xl hover:shadow-black/20">
                        {/* Header */}
                        <div className={`flex flex-col ${isLeft ? "lg:items-end" : ""} mb-4`}>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-mono text-[#64748B] tracking-widest uppercase">{exp.type}</span>
                          </div>
                          <h3 className="text-white font-bold text-xl">{exp.role}</h3>
                          <p className="text-blue-400 font-semibold text-lg">{exp.company}</p>
                          <div className={`flex items-center gap-4 mt-2 text-xs text-[#64748B] ${isLeft ? "lg:justify-end" : ""}`}>
                            <span className="flex items-center gap-1.5">
                              <Calendar size={11} /> {exp.period}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <MapPin size={11} /> {exp.location}
                            </span>
                          </div>
                        </div>

                        <p className={`text-[#94A3B8] text-sm leading-relaxed mb-4 ${isLeft ? "lg:text-right" : ""}`}>
                          {exp.description}
                        </p>

                        <div className="space-y-2">
                          {exp.achievements.map((achievement) => (
                            <div
                              key={achievement}
                              className={`flex items-start gap-2.5 ${isLeft ? "lg:flex-row-reverse" : ""}`}
                            >
                              <div className={`w-1 h-1 rounded-full bg-blue-400 mt-1.5 shrink-0`} />
                              <p className={`text-xs text-[#64748B] leading-relaxed ${isLeft ? "lg:text-right" : ""}`}>
                                {achievement}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Empty column for alternating layout */}
                    {isLeft && <div className="hidden lg:block" />}
                    {!isLeft && <div className="hidden lg:block lg:row-start-1" />}
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
