import { Quote } from "lucide-react";
import { FadeUp } from "../animations/FadeUp";
import { testimonials } from "../../data/portfolio";

const avatarColors = ["from-blue-500 to-violet-600", "from-emerald-500 to-cyan-600", "from-violet-500 to-pink-600"];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeUp>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-blue-400 tracking-widest uppercase">07 — Testimonials</span>
            <div className="h-px flex-1 bg-gradient-to-r from-white/[0.08] to-transparent" />
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-4">
            What{" "}
            <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
              Leaders Say
            </span>
          </h2>
          <p className="text-[#64748B] mb-12 max-w-lg">
            From VPs and CEOs who&apos;ve worked directly with me across data and analytics engagements.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeUp key={t.id} delay={0.1 * i}>
              <div className="group relative bg-[#111827] border border-white/[0.07] rounded-2xl p-7 hover:border-white/[0.14] transition-all duration-300 hover:shadow-xl hover:shadow-black/20 flex flex-col h-full">
                {/* Quote mark */}
                <div className="flex items-center justify-between mb-6">
                  <Quote size={28} className="text-white/10 group-hover:text-blue-500/30 transition-colors" />
                  {/* Stars */}
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <svg key={j} width="12" height="12" viewBox="0 0 12 12" fill="#F59E0B">
                        <path d="M6 1l1.2 3.6H11L8.4 6.8l.9 3.6L6 8.4l-3.3 2 .9-3.6L1 4.6h3.8z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-[#CBD5E1] text-sm leading-relaxed flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Person */}
                <div className="flex items-center gap-3 pt-5 border-t border-white/[0.06]">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarColors[i % avatarColors.length]} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-[#64748B] text-xs">{t.role} · {t.company}</p>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
