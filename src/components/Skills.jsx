const GROUPS = [
  {
    label: "Languages & Markup",
    items: ["HTML", "CSS", "JavaScript", "PHP"],
  },
  {
    label: "Frameworks & Libraries",
    items: ["React", "Tailwind CSS", "Bootstrap"],
  },
  {
    label: "Data",
    items: ["MySQL"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6 bg-[#0A0A0A] border-t border-[#1F1F1F]">
      <div className="max-w-5xl mx-auto">

        <p className="font-mono text-sm text-[#7C9A92] mb-4">
          <span className="text-[#6B6864]">02.</span> skills
        </p>

        <h2 className="font-[Space_Grotesk] text-4xl md:text-5xl font-bold text-[#E8E6E1] mb-14">
          Tools I build with
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {GROUPS.map((group) => (
            <div key={group.label}>
              <p className="font-mono text-xs text-[#6B6864] uppercase tracking-wider mb-5">
                {group.label}
              </p>

              <ul className="space-y-3">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 text-[#E8E6E1] py-2 border-b border-[#1F1F1F] last:border-b-0"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C9A92] shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}