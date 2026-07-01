import { useState, useEffect } from "react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#090909]/90 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="h-24 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            className="text-white uppercase tracking-[0.35em] text-lg font-light"
          >
            AKASH
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-16">

            {LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="uppercase tracking-[0.25em] text-xs text-zinc-300 hover:text-white transition duration-300"
              >
                {item.label}
              </a>
            ))}

          </nav>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-10">

            <a
              href="mailto:akashthakur9318@gmail.com"
              className="uppercase tracking-[0.25em] text-xs text-zinc-400 hover:text-white transition"
            >
              Email
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-zinc-700 px-6 py-3 uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-black transition duration-500"
            >
              Resume
            </a>

          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-3xl"
          >
            ☰
          </button>

        </div>
      </div>

      {/* Mobile Menu */}

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-[#090909] border-t border-white/10 px-8 py-8">

          {LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-4 uppercase tracking-[0.2em] text-sm text-zinc-300 hover:text-white"
            >
              {item.label}
            </a>
          ))}

          <div className="mt-8 space-y-4">

            <a
              href="mailto:akashthakur9318@gmail.com"
              className="block border border-zinc-700 text-center py-3 uppercase tracking-[0.2em] text-xs"
            >
              Email
            </a>

            <a
              href="/resume.pdf"
              className="block bg-white text-black text-center py-3 uppercase tracking-[0.2em] text-xs"
            >
              Resume
            </a>

          </div>

        </div>
      </div>
    </header>
  );
}
