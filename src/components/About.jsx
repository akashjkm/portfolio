export default function About() {
  return (
    <section id="about" className="relative py-28 px-6 bg-[#0A0A0A]">
      <div className="max-w-5xl mx-auto">

        {/* section label — matches navbar's 0X system */}
        <p className="font-mono text-sm text-[#7C9A92] mb-4">
          <span className="text-[#6B6864]">01.</span> about
        </p>

        <h2 className="font-[Space_Grotesk] text-4xl md:text-5xl font-bold text-[#E8E6E1] mb-12">
          A bit about how I work
        </h2>

        <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 md:gap-16">

          {/* main copy */}
          <div className="space-y-5 text-[#A8A5A0] leading-relaxed">
            <p>
              I'm a frontend developer who enjoys turning rough ideas into
              interfaces that feel obvious to use. Most of my work is in
              React and Tailwind CSS — building things that load fast,
              hold up on a small screen, and don't make the user think
              twice about where to click.
            </p>
            <p>
              I pay close attention to the small stuff: spacing, loading
              states, what happens when something goes wrong. The
              difference between a good interface and a forgettable one
              is usually in details like that.
            </p>
            <p>
              Outside of layouts and components, I'm usually reading
              up on whatever's new in the React ecosystem, or rebuilding
              something I've already built — just to do it cleaner the
              second time.
            </p>
          </div>

          {/* quick facts — structured, not decorative */}
          <div className="border-l border-[#1F1F1F] pl-8 space-y-6">
            <div>
              <p className="font-mono text-xs text-[#6B6864] uppercase tracking-wider mb-1">
                Focus
              </p>
              <p className="text-[#E8E6E1]">React &amp; Tailwind CSS</p>
            </div>
            <div>
              <p className="font-mono text-xs text-[#6B6864] uppercase tracking-wider mb-1">
                Based in
              </p>
              <p className="text-[#E8E6E1]">India</p>
            </div>
            <div>
              <p className="font-mono text-xs text-[#6B6864] uppercase tracking-wider mb-1">
                Currently
              </p>
              <p className="text-[#E8E6E1]">Open to opportunities</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}