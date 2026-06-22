const PROJECTS = [
  {
    title: "Quantum Talent Website",
    description: "Built and maintained the company website, handling enhancements, bug fixes, and ongoing feature support.",
    tags: ["React", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "JKM Global Website",
    description: "Developed and maintained the site end-to-end — from layout to deployment support.",
    tags: ["React", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Sapphire Softtech Website",
    description: "Built the company's web presence, with a focus on clean structure and easy upkeep.",
    tags: ["React", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "PC Driver Pro Website",
    description: "Developed the website with attention to performance and responsive layout across devices.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "#",
  },
  {
    title: "AI Chatbot using Ollama",
    description: "Built and integrated a chatbot powered by Ollama, connecting a local LLM to a usable interface.",
    tags: ["JavaScript", "Ollama", "AI"],
    link: "#",
  },
  {
    title: "Web Scraping Data Collection Tool",
    description: "Built an automated tool to scrape and collect structured data for downstream use.",
    tags: ["JavaScript", "Automation"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6 bg-[#0A0A0A] border-t border-[#1F1F1F]">
      <div className="max-w-6xl mx-auto">

        <p className="font-mono text-sm text-[#7C9A92] mb-4">
          <span className="text-[#6B6864]">03.</span> projects
        </p>

        <h2 className="font-[Space_Grotesk] text-4xl md:text-5xl font-bold text-[#E8E6E1] mb-14">
          Things I've built
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="group bg-[#0F0F0F] rounded-2xl p-8 border border-[#1F1F1F] hover:border-[#7C9A92] transition-colors"
            >
              <h3 className="font-[Space_Grotesk] text-2xl font-bold text-[#E8E6E1]">
                {project.title}
              </h3>

              <p className="text-[#A8A5A0] mt-3 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs text-[#7C9A92] bg-[#7C9A92]/10 px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 font-mono text-sm text-[#E8E6E1] group-hover:text-[#7C9A92] transition-colors"
              >
                View project
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}