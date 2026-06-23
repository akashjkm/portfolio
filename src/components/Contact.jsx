export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 px-6 bg-[#0A0A0A] border-t border-[#1F1F1F]"
    >
      <div className="max-w-6xl mx-auto">

        <p className="font-mono text-sm text-[#7C9A92] mb-4">
          <span className="text-[#6B6864]">04.</span> contact
        </p>

        <h2 className="font-[Space_Grotesk] text-4xl md:text-5xl font-bold text-[#E8E6E1] mb-6">
          Let's Connect
        </h2>

        <p className="text-[#A8A5A0] max-w-2xl leading-relaxed mb-14">
          I'm currently open to frontend development opportunities,
          freelance projects and collaborations. Feel free to reach out.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Side */}
          <div className="space-y-6">

            <div className="border border-[#1F1F1F] rounded-2xl p-6">
              <h3 className="text-[#E8E6E1] font-semibold mb-2">
                Email
              </h3>

              <a
                href="mailto:akashthakur9318@gmail.com"
                className="text-[#7C9A92] hover:underline"
              >
                akashthakur9318@gmail.com
              </a>
            </div>

            <div className="border border-[#1F1F1F] rounded-2xl p-6">
              <h3 className="text-[#E8E6E1] font-semibold mb-2">
                Phone
              </h3>

              <p className="text-[#A8A5A0]">
                +91 9318388539
              </p>
            </div>

            <div className="border border-[#1F1F1F] rounded-2xl p-6">
              <h3 className="text-[#E8E6E1] font-semibold mb-2">
                GitHub
              </h3>

              <a
                href="https://github.com/akashjkm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7C9A92] hover:underline"
              >
                github.com/akashjkm
              </a>
            </div>

            <div className="border border-[#1F1F1F] rounded-2xl p-6">
              <h3 className="text-[#E8E6E1] font-semibold mb-2">
                Location
              </h3>

              <p className="text-[#A8A5A0]">
                India
              </p>
            </div>

          </div>

          {/* Right Side Form */}
          <div className="border border-[#1F1F1F] rounded-2xl p-8">

            <form className="space-y-5">

              <div>
                <label className="block text-sm text-[#A8A5A0] mb-2">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-[#111111] border border-[#1F1F1F] rounded-lg px-4 py-3 text-[#E8E6E1] outline-none focus:border-[#7C9A92]"
                />
              </div>

              <div>
                <label className="block text-sm text-[#A8A5A0] mb-2">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-[#111111] border border-[#1F1F1F] rounded-lg px-4 py-3 text-[#E8E6E1] outline-none focus:border-[#7C9A92]"
                />
              </div>

              <div>
                <label className="block text-sm text-[#A8A5A0] mb-2">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full bg-[#111111] border border-[#1F1F1F] rounded-lg px-4 py-3 text-[#E8E6E1] outline-none focus:border-[#7C9A92]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#7C9A92] text-black font-medium py-3 rounded-lg hover:bg-[#8FB0A7] transition-all"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
