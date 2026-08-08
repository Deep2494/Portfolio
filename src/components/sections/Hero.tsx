import { useState, useEffect } from "react";
import { ArrowRight, Download, Github, Linkedin, Twitter, Mail, MapPin, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { person } from "../../data/portfolio";

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % person.roles.length);
        setVisible(true);
      }, 350);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const socials = [
    { icon: Github, href: person.github, label: "GitHub" },
    { icon: Linkedin, href: person.linkedin, label: "LinkedIn" },
    { icon: Twitter, href: person.twitter, label: "Twitter" },
    { icon: Mail, href: `mailto:${person.email}`, label: "Email" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Background mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-blue-600/[0.07] blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-violet-600/[0.07] blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-cyan-500/[0.03] blur-[140px]" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Content */}
          <div>
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/[0.08] text-emerald-400 text-xs font-medium mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for new opportunities
              <Sparkles size={11} />
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-[68px] font-bold tracking-tight leading-[1.05] text-white mb-2">
                Turning Data
                <br />
                Into{" "}
                <span
                  className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent inline-block transition-all duration-300"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(8px)",
                  }}
                >
                  {person.roles[roleIndex].split(" ")[0]}
                </span>
              </h1>
              <h1 className="text-5xl sm:text-6xl lg:text-[68px] font-bold tracking-tight leading-[1.05] text-white mb-8">
                Decisions
              </h1>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-[#94A3B8] text-lg leading-relaxed max-w-xl mb-10"
            >
              {person.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 hover:-translate-y-0.5"
              >
                View Projects <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/[0.12] bg-white/[0.04] hover:bg-white/[0.08] text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                <Download size={16} /> Contact / Hire Me
              </a>
            </motion.div>

            {/* Social icons + location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex items-center gap-3 flex-wrap"
            >
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-white/[0.1] bg-white/[0.04] flex items-center justify-center text-[#64748B] hover:text-white hover:border-white/20 hover:bg-white/[0.08] transition-all duration-200"
                >
                  <Icon size={17} />
                </a>
              ))}
              <div className="h-5 w-px bg-white/[0.1] mx-1" />
              <div className="flex items-center gap-1.5 text-xs text-[#64748B]">
                <MapPin size={13} />
                {person.location}
              </div>
            </motion.div>
          </div>

          {/* Right — Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 to-violet-600/30 blur-2xl scale-110" />
              {/* Avatar container */}
              <div className="relative w-72 h-72 lg:w-80 lg:h-80">
                <div className="w-full h-full rounded-full border-2 border-white/[0.12] bg-gradient-to-br from-[#151B2D] to-[#1E293B] flex items-center justify-center overflow-hidden shadow-2xl">
                  {"avatar" in person && person.avatar ? (
                    <img
                      src={person.avatar}
                      alt={person.name}
                      className="w-full h-full object-cover object-center"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-600/20 via-violet-600/30 to-slate-800 flex flex-col items-center justify-center text-center p-6">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white text-3xl font-bold mb-3 shadow-lg shadow-blue-500/30">
                        {person.initials}
                      </div>
                      <span className="text-white font-bold text-lg">{person.name}</span>
                      <span className="text-blue-400 text-xs mt-1 font-mono">{person.title}</span>
                    </div>
                  )}
                </div>
                {/* Decorative orbit ring */}
                <div className="absolute inset-[-12px] rounded-full border border-dashed border-white/[0.06] animate-[spin_20s_linear_infinite]" />
                {/* Stats floating cards */}
                <div className="absolute -left-8 top-1/2 -translate-y-1/2 bg-[#111827] border border-white/[0.1] rounded-2xl px-4 py-3 shadow-xl">
                  <p className="text-2xl font-bold text-white">{person.stats[0].value}</p>
                  <p className="text-xs text-[#64748B]">{person.stats[0].label}</p>
                </div>
                <div className="absolute -right-4 top-8 bg-[#111827] border border-white/[0.1] rounded-2xl px-4 py-3 shadow-xl">
                  <p className="text-2xl font-bold text-white">{person.stats[1].value}</p>
                  <p className="text-xs text-[#64748B]">{person.stats[1].label}</p>
                </div>
                <div className="absolute -right-2 bottom-8 bg-[#111827] border border-white/[0.1] rounded-2xl px-4 py-3 shadow-xl">
                  <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">{person.stats[2].value}</p>
                  <p className="text-xs text-[#64748B]">{person.stats[2].label}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
