import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";
import { person } from "../../data/portfolio";

export function Footer() {
  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ];

  const socials = [
    { icon: Github, href: person.github, label: "GitHub" },
    { icon: Linkedin, href: person.linkedin, label: "LinkedIn" },
    { icon: Twitter, href: person.twitter, label: "Twitter" },
    { icon: Mail, href: `mailto:${person.email}`, label: "Email" },
  ];

  return (
    <footer className="border-t border-white/[0.06] bg-[#080C14]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white text-sm font-bold">
                {person.initials}
              </div>
              <span className="text-white font-semibold">{person.name}</span>
            </div>
            <p className="text-[#64748B] text-sm leading-relaxed max-w-xs">
              Data Analyst turning multi-source data into executive decisions.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs text-[#64748B] uppercase tracking-widest font-medium mb-4">Navigation</p>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#94A3B8] hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs text-[#64748B] uppercase tracking-widest font-medium mb-4">Connect</p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-[#64748B] hover:text-white hover:border-white/20 hover:bg-white/[0.07] transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm text-[#64748B]">{person.email}</p>
            <p className="text-sm text-[#64748B]">{person.location}</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/[0.06] gap-4">
          <p className="text-xs text-[#475569]">
            © 2024 {person.name}. Built with React & Tailwind CSS.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-xs text-[#64748B] hover:text-white transition-colors group"
          >
            Back to top
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
