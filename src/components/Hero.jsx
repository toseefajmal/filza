import {
  FiArrowUpRight,
  FiGithub,
  FiCode,
  FiLayers,
  FiZap,
  FiMousePointer,
} from "react-icons/fi";

const Hero = () => {
  const skills = [
    "React.js",
    "JavaScript",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "Responsive Design",
    "Frontend Development",
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#08080c] px-5 pb-20 pt-28 text-white sm:px-8 lg:px-12"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-violet-600/15 blur-[110px]" />
      <div className="pointer-events-none absolute -right-20 top-32 h-80 w-80 rounded-full bg-indigo-500/10 blur-[110px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-14">
        {/* Left Content */}
        <div className="min-w-0">
          <div className="inline-flex max-w-full items-center gap-3 rounded-full border border-violet-400/20 bg-violet-500/[0.08] px-4 py-2">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>

            <span className="text-xs font-medium tracking-wide text-gray-300 sm:text-sm">
              Available for new opportunities
            </span>
          </div>

          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.25em] text-violet-400 sm:text-sm">
            Hello, I'm
          </p>

          <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            Falza
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-300 to-indigo-400 bg-clip-text text-transparent">
              Akram.
            </span>
          </h1>

          <h2 className="mt-4 text-lg font-medium text-gray-200 sm:text-xl">
            Frontend Developer
          </h2>

          <p className="mt-5 max-w-lg text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
            I create modern, responsive and visually engaging websites with
            clean code and thoughtful design. Turning creative ideas into
            meaningful digital experiences.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-xl bg-violet-600 px-5 py-3.5 text-sm font-semibold text-white shadow-xl shadow-violet-950/40 transition duration-300 hover:-translate-y-1 hover:bg-violet-500"
            >
              Explore My Work
              <FiArrowUpRight className="text-lg transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3.5 text-sm font-semibold text-gray-200 transition duration-300 hover:border-violet-400/40 hover:bg-white/[0.06]"
            >
              Let's Connect
              <FiMousePointer className="text-violet-400" />
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-7 flex items-center gap-5">
            <span className="text-xs uppercase tracking-widest text-gray-600">
              Find me on
            </span>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-xl text-gray-400 transition hover:text-white"
            >
              <FiGithub />
            </a>

            <a
              href="#contact"
              aria-label="Contact"
              className="text-xl text-gray-400 transition hover:text-violet-400"
            >
              <FiArrowUpRight />
            </a>
          </div>
        </div>

        {/* Right Visual - Compact */}
        <div className="relative mx-auto w-full min-w-0 max-w-sm lg:max-w-md">
          <div className="pointer-events-none absolute inset-12 rounded-full bg-violet-600/20 blur-[80px]" />

          <div className="relative rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.025] to-violet-500/[0.06] p-4 shadow-2xl shadow-black/40 sm:p-5">
            {/* Window Header */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              </div>

              <span className="text-xs tracking-wide text-gray-500">
                falza.jsx
              </span>

              <FiCode className="text-lg text-violet-400" />
            </div>

            {/* Code Window */}
            <div className="overflow-hidden py-6 font-mono text-[11px] leading-7 sm:px-2 sm:text-xs">
              <p className="text-gray-600">
                // Creating digital experiences
              </p>

              <p>
                <span className="text-fuchsia-400">const</span>{" "}
                <span className="text-sky-300">developer</span>{" "}
                <span className="text-gray-400">= {"{"}</span>
              </p>

              <p className="break-words pl-4 sm:pl-5">
                <span className="text-violet-300">name</span>
                <span className="text-gray-500">:</span>{" "}
                <span className="text-emerald-300">"Falza Akram"</span>,
              </p>

              <p className="break-words pl-4 sm:pl-5">
                <span className="text-violet-300">role</span>
                <span className="text-gray-500">:</span>{" "}
                <span className="text-emerald-300">"Frontend Developer"</span>,
              </p>

              <p className="break-words pl-4 sm:pl-5">
                <span className="text-violet-300">skills</span>
                <span className="text-gray-500">:</span>{" "}
                <span className="text-amber-200">["React", "CSS"]</span>,
              </p>

              <p className="pl-4 text-gray-400 sm:pl-5">passion: true</p>

              <p className="text-gray-400">{"};"}</p>

              <div className="mt-5 rounded-xl border border-violet-400/15 bg-violet-500/[0.06] p-3 sm:p-4">
                <div className="flex items-center gap-3">
                  <FiZap className="shrink-0 text-xl text-violet-300" />

                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-white sm:text-sm">
                      Ideas into reality
                    </p>
                    <p className="mt-1 text-[10px] text-gray-500 sm:text-xs">
                      Design · Develop · Deliver
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Tags */}
            <div className="flex flex-wrap gap-2 border-t border-white/[0.08] pt-4">
              {["React.js", "Tailwind CSS", "JavaScript"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-white/[0.08] bg-white/[0.04] px-2.5 py-1.5 text-[10px] text-gray-300 sm:text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Floating Card */}
          <div className="absolute -left-2 top-12 rounded-xl border border-white/10 bg-[#111119]/95 p-3 shadow-xl backdrop-blur-xl sm:-left-5">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/15 text-lg text-violet-300">
                <FiLayers />
              </div>

              <div>
                <p className="text-xs font-semibold text-white">Clean Code</p>
                <p className="mt-1 text-[10px] text-gray-500">
                  Built with purpose
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-4 right-1 rounded-xl border border-white/10 bg-[#111119]/95 px-4 py-3 shadow-xl backdrop-blur-xl sm:-right-3">
            <p className="text-[10px] text-gray-500">My Focus</p>
            <p className="mt-1 text-xs font-semibold text-white sm:text-sm">
              <span className="text-violet-400">✦</span> Modern Web Solutions
            </p>
          </div>
        </div>
      </div>

      {/* Skills Marquee */}
      <div className="absolute inset-x-0 bottom-0 overflow-hidden border-t border-white/[0.07] bg-white/[0.02] py-3">
        <div className="flex w-max animate-[marquee_24s_linear_infinite] items-center gap-7 whitespace-nowrap">
          {[...skills, ...skills].map((skill, index) => (
            <span
              key={`${skill}-${index}`}
              className="flex items-center gap-7 text-xs font-medium uppercase tracking-[0.15em] text-gray-500 sm:text-sm"
            >
              {skill}
              <span className="text-violet-400">✦</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;