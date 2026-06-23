const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/akashjkm",
  },
  {
    label: "Email",
    href: "mailto:akashthakur9318@gmail.com",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0A0A0A] border-t border-[#1F1F1F]">

      {/* CTA Section */}
      <div className="max-w-6xl mx-auto px-6 py-20 text-center border-b border-[#1F1F1F]">

        <p className="font-mono text-sm text-[#7C9A92] mb-4">
          Ready to collaborate?
        </p>

        <h2 className="font-[Space_Grotesk] text-4xl md:text-6xl font-bold text-[#E8E6E1] leading-tight">
          Let's Build Something
          <span className="text-[#7C9A92]"> Amazing Together</span>
        </h2>

        <p className="mt-6 text-[#A8A5A0] max-w-2xl mx-auto leading-relaxed">
          I'm always interested in new opportunities, exciting ideas
          and meaningful projects. Let's connect and create something great.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <a
            href="mailto:akashthakur9318@gmail.com"
            className="bg-[#7C9A92] text-black px-8 py-3 rounded-lg font-medium hover:bg-[#8FB0A7] transition-all duration-300"
          >
            Get In Touch
          </a>

          <a
            href="https://github.com/akashjkm"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#7C9A92] text-[#7C9A92] px-8 py-3 rounded-lg hover:bg-[#7C9A92] hover:text-black transition-all duration-300"
          >
            View GitHub
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <h3 className="font-[Space_Grotesk] text-3xl font-bold text-[#E8E6E1]">
              Akash Singh
            </h3>

            <p className="mt-2 text-[#7C9A92] text-sm font-mono">
              Frontend Developer
            </p>

            <p className="mt-5 text-[#6B6864] leading-relaxed max-w-sm">
              Passionate Frontend Developer specializing in React,
              Next.js and Tailwind CSS. Building modern,
              responsive and user-friendly web applications.
            </p>

            <div className="flex gap-3 mt-6">
              <a
                href="https://github.com/akashjkm"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm border border-[#1F1F1F] rounded-lg text-[#A8A5A0] hover:border-[#7C9A92] hover:text-[#7C9A92] transition-all"
              >
                GitHub
              </a>

              <a
                href="mailto:akashthakur9318@gmail.com"
                className="px-4 py-2 text-sm border border-[#1F1F1F] rounded-lg text-[#A8A5A0] hover:border-[#7C9A92] hover:text-[#7C9A92] transition-all"
              >
                Email
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-[#6B6864] mb-5">
              Navigation
            </p>

            <ul className="space-y-3">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#A8A5A0] hover:text-[#7C9A92] transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-[#6B6864] mb-5">
              Contact
            </p>

            <div className="space-y-4 text-[#A8A5A0]">
              <p>📍 India</p>
              <p>📧 akashthakur9318@gmail.com</p>
              <p>💻 Frontend Developer</p>
              <p>🚀 Open to Opportunities</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1F1F1F] mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="font-mono text-xs text-[#6B6864]">
            © {year} Akash Singh. All rights reserved.
          </p>

          <p className="font-mono text-xs text-[#6B6864]">
            Built with React • Next.js • Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
}
