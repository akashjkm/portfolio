export default function Hero() {
  return (
    <section className="min-h-screen relative flex items-center justify-center px-6 bg-[#0A0A0A] text-[#E8E6E1] overflow-hidden">

      {/* faint grid backdrop — subtle, not decorative noise */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#7C9A92 1px, transparent 1px), linear-gradient(90deg, #7C9A92 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">

        {/* avatar — notched ring instead of a plain border */}
        <div className="relative w-36 h-36 mx-auto mb-10">
          <svg viewBox="0 0 144 144" className="absolute inset-0 w-full h-full">
            <circle
              cx="72" cy="72" r="68"
              fill="none"
              stroke="#7C9A92"
              strokeWidth="1.5"
              strokeDasharray="3 6"
            />
          </svg>
          <img
            src="/profile.webp"
            alt="Akash Singh"
            onError={(e) => { e.currentTarget.style.display = "none"; }}
            className="absolute inset-[10px] w-[116px] h-[116px] rounded-full object-cover"
          />
        </div>

        {/* terminal-style eyebrow */}
        <p className="font-mono text-sm text-[#7C9A92] mb-5 tracking-tight">
          <span className="text-[#6B6864]">$</span> whoami{" "}
          <span className="inline-block w-[7px] h-[1em] bg-[#7C9A92] align-middle ml-1 animate-pulse" />
        </p>

        <h1 className="font-[Space_Grotesk] text-6xl md:text-8xl font-bold tracking-tight leading-[0.95]">
          Akash Singh
        </h1>

        <p className="mt-3 text-lg text-[#7C9A92] font-medium">
          Frontend Developer
        </p>

        <p className="mt-6 text-[#A8A5A0] max-w-xl mx-auto leading-relaxed">
          I build fast, responsive interfaces with React and Tailwind CSS —
          focused on clean code and details that hold up under real use.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <a
            href="#projects"
            className="bg-[#7C9A92] text-[#0A0A0A] font-semibold px-7 py-3 rounded-md hover:bg-[#8FB0A7] transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-[#2A2A2A] text-[#E8E6E1] px-7 py-3 rounded-md hover:border-[#7C9A92] hover:text-[#7C9A92] transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-xs text-[#6B6864] tracking-widest">
        SCROLL
      </div>
    </section>
  );
}