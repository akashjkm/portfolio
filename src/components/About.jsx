export default function About() {
  const focusAreas = [
    "React.js Development",
    "Next.js Applications",
    "Responsive Web Design",
    "Tailwind CSS",
    "JavaScript ES6+",
    "REST API Integration",
    "Performance Optimization",
    "UI Development",
  ];

  return (
    <section
      id="about"
      className="relative py-28 px-6 bg-[#0A0A0A] border-t border-[#1F1F1F]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <p className="font-mono text-sm text-[#7C9A92] mb-4">
          <span className="text-[#6B6864]">01.</span> about
        </p>

        <h2 className="font-[Space_Grotesk] text-4xl md:text-5xl font-bold text-[#E8E6E1] mb-14">
          About Me
        </h2>

        <div className="grid lg:grid-cols-[1.6fr_1fr] gap-16">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-[#E8E6E1] mb-8">
              Frontend Developer & Computer Science Graduate
            </h3>

            <div className="space-y-6 text-[#A8A5A0] leading-8">
              <p>
                Hey! I'm{" "}
                <span className="text-[#7C9A92] font-medium">
                  Akash Singh
                </span>
                , a Frontend Developer passionate about building modern,
                responsive and user-friendly web applications.
              </p>

              <p>
                My primary focus is on React.js, Next.js, Tailwind CSS and
                JavaScript. I enjoy transforming ideas into clean interfaces
                that are fast, accessible and easy to use.
              </p>

              <p>
                I completed my Diploma in Computer Science Engineering from
                Galgotias Educational Institutions and later pursued B.Tech in
                Computer Science & Engineering from Lloyd Institute of
                Engineering & Technology, graduating in 2025.
              </p>

              <p>
                Throughout my learning journey, I have worked on portfolio
                websites, PDF tools, landing pages and web applications while
                continuously improving my frontend development skills.
              </p>

              <p>
                I am passionate about learning new technologies, solving
                real-world problems and creating digital experiences that
                deliver value to users.
              </p>
            </div>

            {/* Focus Areas */}
            <div className="mt-14">
              <h4 className="text-[#E8E6E1] text-xl font-semibold mb-6">
                My Key Focus Areas
              </h4>

              <div className="grid sm:grid-cols-2 gap-4">
                {focusAreas.map((item) => (
                  <div
                    key={item}
                    className="border border-[#1F1F1F] rounded-xl p-4 text-[#A8A5A0] hover:border-[#7C9A92] hover:text-[#E8E6E1] transition-all duration-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:border-l border-[#1F1F1F] lg:pl-10">
            <h4 className="text-[#E8E6E1] text-xl font-semibold mb-8">
              Education
            </h4>

            <div className="space-y-10">
              <div>
                <p className="font-mono text-[#7C9A92] text-sm">2019</p>

                <h5 className="text-[#E8E6E1] font-medium mt-2">
                  10th Standard (CBSE)
                </h5>

                <p className="text-[#A8A5A0] text-sm mt-1">
                  Government Senior Secondary School
                </p>
              </div>

              <div>
                <p className="font-mono text-[#7C9A92] text-sm">2022</p>

                <h5 className="text-[#E8E6E1] font-medium mt-2">
                  Diploma in Computer Science Engineering
                </h5>

                <p className="text-[#A8A5A0] text-sm mt-1">
                  Galgotias Educational Institutions
                </p>
              </div>

              <div>
                <p className="font-mono text-[#7C9A92] text-sm">2025</p>

                <h5 className="text-[#E8E6E1] font-medium mt-2">
                  B.Tech in Computer Science & Engineering
                </h5>

                <p className="text-[#A8A5A0] text-sm mt-1">
                  Lloyd Institute of Engineering & Technology (AKTU)
                </p>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="mt-14">
              <h4 className="text-[#E8E6E1] text-xl font-semibold mb-6">
                Quick Facts
              </h4>

              <div className="space-y-4 text-[#A8A5A0]">
                <p>📍 India</p>
                <p>🎓 B.Tech CSE Graduate (2025)</p>
                <p>💻 Frontend Developer</p>
                <p>⚛️ React & Next.js Enthusiast</p>
                <p>🚀 Open to Opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
