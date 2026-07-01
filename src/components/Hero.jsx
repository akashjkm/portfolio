import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0A0A0A] px-6 py-24 text-[#E8E6E1] lg:py-0"
    >
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#7C9A92 1px, transparent 1px), linear-gradient(90deg, #7C9A92 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-1/4 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#7C9A92]/10 blur-[120px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left content */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#2A2A2A] bg-[#111111] px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <span className="text-sm text-[#A8A5A0]">Available for Work</span>
            </div>

            <p className="mb-4 font-mono text-sm tracking-wide text-[#7C9A92]">
              Hello, I&apos;m
            </p>

            <h1 className="text-5xl font-bold leading-[1.1] tracking-tight md:text-7xl">
              Akash <span className="text-[#7C9A92]">Singh</span>
            </h1>

<TypeAnimation
  sequence={[
    "Frontend Developer",
    2000,
    "React Developer",
    2000,
    "Next.js Developer",
    2000,
    "JavaScript Developer",
    2000,
    "UI Developer",
    2000,
  ]}
  wrapper="span"
  speed={50}
  repeat={Infinity}
  className="block mt-5 text-xl md:text-3xl font-medium text-[#7C9A92]"
/>


            <p className="mt-6 max-w-xl leading-relaxed text-[#A8A5A0]">
              I build modern, responsive and user-friendly web applications
              using React, Next.js, Tailwind CSS and JavaScript. Passionate
              about creating clean UI and smooth user experiences.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-lg bg-[#7C9A92] px-7 py-3 font-medium text-black transition-colors duration-200 hover:bg-[#8FB0A7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C9A92] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="rounded-lg border border-[#7C9A92] px-7 py-3 font-medium text-[#7C9A92] transition-colors duration-200 hover:bg-[#7C9A92] hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C9A92] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
              >
                Contact Me
              </a>
            </div>

            {/* Skills */}
            <ul className="mt-10 flex flex-wrap gap-3">
              {["React", "Next.js", "Tailwind", "JavaScript", "PHP", "MySQL"].map(
                (skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-[#2A2A2A] px-4 py-2 text-sm text-[#A8A5A0] transition-colors duration-200 hover:border-[#7C9A92]/50 hover:text-[#E8E6E1]"
                  >
                    {skill}
                  </li>
                )
              )}
            </ul>

            {/* Social */}
            <div className="mt-8 flex items-center gap-6">
              <a
                href="https://github.com/akashjkm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#A8A5A0] underline-offset-4 transition-colors duration-200 hover:text-[#7C9A92] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C9A92] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
              >
                GitHub
              </a>

              <span className="h-4 w-px bg-[#2A2A2A]" aria-hidden="true" />

              <a
                href="mailto:akashthakur9318@gmail.com"
                className="text-sm text-[#A8A5A0] underline-offset-4 transition-colors duration-200 hover:text-[#7C9A92] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C9A92] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
              >
                Email
              </a>
            </div>
          </div>

          {/* Right image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-[#7C9A92]/20 blur-3xl"
              />

              <img
                src="/profile.webp"
                alt="Portrait of Akash Singh"
                width={450}
                height={550}
                className="relative w-[300px] rounded-3xl border border-[#1F1F1F] shadow-2xl motion-safe:animate-[float_4s_ease-in-out_infinite] sm:w-[350px] md:w-[450px]"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .motion-safe\\:animate-\\[float_4s_ease-in-out_infinite\\] {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}