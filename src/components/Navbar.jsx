
import { useState, useEffect } from "react";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Me" },
  { href: "#projects", label: "Work & Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md shadow-lg"
          : "bg-black"
      } border-b border-cyan-500/30`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#"
            className="text-3xl font-bold text-cyan-400 hover:text-cyan-300 transition"
          >
            Akash Singh
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10 text-white font-medium">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-cyan-400 transition duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Buttons */}
          <div className="hidden md:flex items-center gap-4">
          <a
  href="mailto:akashthakur9318@gmail.com"
  className="px-5 py-2 border border-cyan-500 text-cyan-400 rounded-md hover:bg-cyan-500 hover:text-black transition"
>
  Mail Me
</a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-cyan-500 text-black rounded-md hover:bg-cyan-400 transition font-medium"
            >
              Download Resume
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-cyan-500/20">
          <ul className="flex flex-col p-6 gap-5 text-white">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-cyan-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="px-6 pb-6 flex flex-col gap-3">
            <a
              href="mailto:yourmail@gmail.com"
              className="border border-cyan-500 text-cyan-400 py-2 text-center rounded-md"
            >
              Mail Me
            </a>

            <a
              href="/resume.pdf"
              className="bg-cyan-500 text-black py-2 text-center rounded-md font-medium"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
