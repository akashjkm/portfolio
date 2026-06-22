import { useState, useEffect } from "react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 border-b transition-colors ${
        scrolled
          ? "bg-[#0A0A0A]/90 backdrop-blur-md border-[#1F1F1F]"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <a href="#" className="font-[Space_Grotesk] text-xl font-bold text-[#E8E6E1]">
          akash<span className="text-[#7C9A92]">.singh</span>
        </a>

        {/* desktop links */}
        <ul className="hidden md:flex items-center gap-8 font-mono text-sm text-[#A8A5A0]">
          {LINKS.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group inline-flex items-center gap-1 hover:text-[#7C9A92] transition-colors"
              >
                <span className="text-[#6B6864] group-hover:text-[#7C9A92] transition-colors">
                  0{i + 1}
                </span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden relative w-8 h-8 flex items-center justify-center text-[#E8E6E1]"
        >
          <span
            className={`absolute block w-5 h-[1.5px] bg-current transition-transform ${
              open ? "rotate-45" : "-translate-y-[5px]"
            }`}
          />
          <span
            className={`absolute block w-5 h-[1.5px] bg-current transition-transform ${
              open ? "-rotate-45" : "translate-y-[5px]"
            }`}
          />
        </button>
      </div>

      {/* mobile menu */}
      <div
        className={`md:hidden grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="flex flex-col gap-1 px-6 pb-6 font-mono text-sm text-[#A8A5A0] border-t border-[#1F1F1F] bg-[#0A0A0A]">
            {LINKS.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 py-3 hover:text-[#7C9A92] transition-colors"
                >
                  <span className="text-[#6B6864]">0{i + 1}</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}