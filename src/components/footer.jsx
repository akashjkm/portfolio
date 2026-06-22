const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const SOCIALS = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Email", href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0A0A0A] border-t border-[#1F1F1F] px-6 pt-16 pb-8">
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-3 gap-10 pb-12">

          {/* identity */}
          <div>
            <p className="font-[Space_Grotesk] text-xl font-bold text-[#E8E6E1]">
              akash<span className="text-[#7C9A92]">.dev</span>
            </p>
            <p className="mt-3 text-sm text-[#6B6864] leading-relaxed max-w-xs">
              Frontend developer building fast, clean interfaces with React
              and Tailwind CSS.
            </p>
          </div>

          {/* nav */}
          <div>
            <p className="font-mono text-xs text-[#6B6864] uppercase tracking-wider mb-4">
              Navigate
            </p>
            <ul className="space-y-2 font-mono text-sm text-[#A8A5A0]">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-[#7C9A92] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* socials */}
          <div>
            <p className="font-mono text-xs text-[#6B6864] uppercase tracking-wider mb-4">
              Elsewhere
            </p>
            <ul className="space-y-2 font-mono text-sm text-[#A8A5A0]">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#7C9A92] transition-colors"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* bottom bar */}
        <div className="border-t border-[#1F1F1F] pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-mono text-xs text-[#6B6864]">
            © {year} Akash Singh. All rights reserved.
          </p>
          <p className="font-mono text-xs text-[#6B6864]">
            Built with React &amp; Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}