export default function Experience() {
  return (
    <section
      id="experience"
      className="py-32 px-6 md:px-16 lg:px-24 bg-[#090909]"
    >
      <div className="max-w-7xl mx-auto">

        <p className="uppercase tracking-[8px] text-gray-500 text-sm mb-10">
          Since 2024
        </p>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-5xl md:text-7xl font-light leading-tight uppercase">
              Work
              <br />
              Experience
            </h2>
          </div>

          <div className="space-y-10">

            <div className="border-b border-gray-800 pb-8">

              <h3 className="text-3xl font-light">
                Web & Application Developer
              </h3>

              <p className="text-gray-400 mt-3">
                JK Global Services LLP
              </p>

              <p className="text-gray-500 mt-1">
                2024 – Present
              </p>

              <p className="text-gray-400 mt-6 leading-8">
                Building responsive websites and modern web applications using
                React, Tailwind CSS, JavaScript and PHP. Creating clean UI,
                reusable components and optimized user experiences.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}