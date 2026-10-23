import {
  FiUser,
  FiCode,
  FiLayers,
  FiAward,
  FiArrowUpRight,
  FiCheckCircle,
} from "react-icons/fi";

const About = () => {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Tailwind CSS",
    "Responsive Design",
    "Git & GitHub",
    "UI Development",
  ];

  const stats = [
    { number: "03+", label: "Projects Built" },
    { number: "06+", label: "Months Learning" },
    { number: "08+", label: "Core Skills" },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0b0b11] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-32 h-72 w-72 rounded-full bg-violet-600/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-16 h-72 w-72 rounded-full bg-indigo-600/10 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
            <FiUser />
            Get To Know Me
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            More Than Just
            <span className="mt-2 block bg-gradient-to-r from-violet-400 via-fuchsia-300 to-indigo-400 bg-clip-text text-transparent">
              Writing Code.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            I combine creativity and technology to build digital experiences
            that look beautiful, work smoothly and solve real problems.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left Visual */}
          <div className="relative mx-auto w-full max-w-sm">
            <div className="pointer-events-none absolute inset-10 rounded-full bg-violet-600/20 blur-[75px]" />

            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-violet-500/10 via-[#111119] to-indigo-500/[0.08] p-5 sm:p-7">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-gray-500 sm:text-xs">
                    A Little About Me
                  </p>
                  <h3 className="mt-2 text-xl font-bold sm:text-2xl">
                    Creative. Curious.
                    <span className="block text-violet-400">Driven.</span>
                  </h3>
                </div>

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-xl text-violet-300">
                  <FiCode />
                </div>
              </div>

              {/* Profile Monogram */}
              <div className="relative my-8 flex justify-center py-2">
                <div className="absolute h-48 w-48 rounded-full border border-violet-400/20 sm:h-52 sm:w-52" />
                <div className="absolute h-40 w-40 rounded-full border border-dashed border-fuchsia-400/25 sm:h-44 sm:w-44" />

                <div className="relative flex h-40 w-40 items-center justify-center rounded-full border border-violet-400/30 bg-gradient-to-br from-violet-500/30 via-[#171321] to-indigo-500/20 shadow-2xl shadow-violet-950/50 sm:h-44 sm:w-44">
                  <span className="bg-gradient-to-br from-white via-violet-200 to-violet-500 bg-clip-text text-7xl font-black tracking-tighter text-transparent">
                    FA
                  </span>
                </div>

                <div className="absolute right-2 top-1 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#17131f] text-lg text-violet-300 shadow-xl sm:right-5">
                  <FiLayers />
                </div>

                <div className="absolute bottom-1 left-2 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#17131f] text-lg text-fuchsia-300 shadow-xl sm:left-5">
                  <FiAward />
                </div>
              </div>

              {/* Name */}
              <div className="mb-5 text-center">
                <h3 className="text-xl font-bold tracking-wide text-white">
                  Falza Akram
                </h3>
                <p className="mt-1 text-xs tracking-widest text-violet-300">
                  FRONTEND DEVELOPER
                </p>
              </div>

              {/* Availability */}
              <div className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-black/20 p-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-lg text-emerald-400">
                  <FiCheckCircle />
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-semibold text-white">
                    Always Learning, Always Building
                  </p>
                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    Growing through creativity and code
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-400 sm:text-sm">
              Who I Am
            </p>

            <h3 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-300 bg-clip-text text-transparent">
                Falza Akram
              </span>
            </h3>

            <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
              I'm passionate about frontend development and creating modern
              web applications. I enjoy turning ideas into responsive,
              attractive interfaces using React, JavaScript and Tailwind CSS.
            </p>

            <p className="mt-3 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
              My goal is to write clean code, keep learning new technologies
              and build websites that deliver a smooth experience across
              different screen sizes.
            </p>

            {/* Skills */}
            <div className="mt-7">
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-300 sm:text-sm">
                Technologies I Work With
              </h4>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-white/[0.035] px-3 py-2 text-xs text-gray-300 transition duration-300 hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-violet-300 sm:text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="min-w-0 rounded-xl border border-white/[0.08] bg-white/[0.025] p-3 transition hover:border-violet-400/30 sm:p-4"
                >
                  <h4 className="text-xl font-bold text-violet-400 sm:text-2xl">
                    {stat.number}
                  </h4>
                  <p className="mt-2 break-words text-[10px] leading-4 text-gray-500 sm:text-xs sm:leading-5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="group mt-7 inline-flex max-w-full items-center gap-3 rounded-xl border border-violet-400/30 bg-violet-500/10 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:border-violet-400/60 hover:bg-violet-500/20"
            >
              Let's Work Together
              <FiArrowUpRight className="shrink-0 text-lg text-violet-300 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;