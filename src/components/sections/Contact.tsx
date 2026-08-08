import { useState } from "react";
import { Mail, Phone, Linkedin, Github, MapPin, Send, CheckCircle } from "lucide-react";
import { FadeUp } from "../animations/FadeUp";
import { person } from "../../data/portfolio";

const contactItems = [
  { icon: Mail, label: "Email", value: person.email, href: `mailto:${person.email}` },
  { icon: Phone, label: "Phone", value: person.phone, href: `tel:${person.phone}` },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/deep-parulekar", href: person.linkedin },
  { icon: Github, label: "GitHub", value: "github.com/deep-parulekar", href: person.github },
  { icon: MapPin, label: "Location", value: person.location, href: null },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-28 bg-[#0D1120]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeUp>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-blue-400 tracking-widest uppercase">08 — Contact</span>
            <div className="h-px flex-1 bg-gradient-to-r from-white/[0.08] to-transparent" />
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — CTA */}
          <div>
            <FadeUp delay={0.1}>
              <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                Let&apos;s build something{" "}
                <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  impactful
                </span>
              </h2>
              <p className="text-[#94A3B8] text-lg leading-relaxed mb-10">
                Whether you need a BI overhaul, a predictive model, or a data strategy from scratch — I&apos;m open to new opportunities and collaborations.
              </p>
            </FadeUp>

            <div className="space-y-3">
              {contactItems.map((item, i) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-center gap-4 bg-[#111827] border border-white/[0.07] rounded-xl px-5 py-4 hover:border-white/[0.14] transition-all duration-200 group">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#64748B] group-hover:text-white transition-colors">
                      <Icon size={17} />
                    </div>
                    <div>
                      <p className="text-xs text-[#64748B] mb-0.5">{item.label}</p>
                      <p className="text-sm text-white font-medium">{item.value}</p>
                    </div>
                  </div>
                );
                return (
                  <FadeUp key={item.label} delay={0.1 + 0.05 * i}>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                        {content}
                      </a>
                    ) : content}
                  </FadeUp>
                );
              })}
            </div>

            {/* Availability callout */}
            <FadeUp delay={0.35} className="mt-8">
              <div className="flex items-center gap-3 rounded-2xl bg-emerald-500/[0.08] border border-emerald-500/20 px-5 py-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <div>
                  <p className="text-emerald-300 font-medium text-sm">Currently Available</p>
                  <p className="text-emerald-400/60 text-xs">Open to full-time roles and consulting engagements</p>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Right — Form */}
          <FadeUp delay={0.2}>
            <div className="bg-[#111827] border border-white/[0.08] rounded-3xl p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5">
                    <CheckCircle size={32} className="text-emerald-400" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                  <p className="text-[#94A3B8] text-sm">
                    Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-[#64748B] mb-2 uppercase tracking-widest font-mono">Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Jordan Lee"
                        className="w-full bg-[#0B0F19] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#475569] focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-[#64748B] mb-2 uppercase tracking-widest font-mono">Email</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full bg-[#0B0F19] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#475569] focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-[#64748B] mb-2 uppercase tracking-widest font-mono">Subject</label>
                    <input
                      type="text"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="Senior Data Analyst Opportunity"
                      className="w-full bg-[#0B0F19] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#475569] focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-[#64748B] mb-2 uppercase tracking-widest font-mono">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about the role, project, or opportunity..."
                      className="w-full bg-[#0B0F19] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#475569] focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center gap-2.5 w-full px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:-translate-y-0.5 disabled:translate-y-0"
                  >
                    {loading ? (
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <Send size={16} />
                    )}
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
