import {
  FiActivity,
  FiBookOpen,
  FiShoppingBag,
  FiArrowUpRight,
} from "react-icons/fi";

const projects = [
  {
    id: "01",
    title: "Gym Website",
    category: "FITNESS WEBSITE",
    color: "#fb7185",
    icon: <FiActivity />,
    image: "/project3.PNG",
    link: "https://gym-website-tan-tau.vercel.app/",
  },
  {
    id: "02",
    title: "EduSphere",
    category: "LEARNING PLATFORM",
    color: "#a78bfa",
    icon: <FiBookOpen />,
    image: "/project4.PNG",
    link: "https://edu-sphere-4jinci9a6-toseefajmal07-3946s-projects.vercel.app/",
  },
  {
    id: "03",
    title: "FoodMart",
    category: "E-COMMERCE",
    color: "#67e8f9",
    icon: <FiShoppingBag />,
    image: "/project1.PNG",
    link: "https://food-mart-zvdx.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#07070B] px-5 py-20 text-white sm:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-20 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-violet-400">
            My Creative Universe
          </p>

          <h2 className="text-3xl font-bold sm:text-5xl">
            Projects I've{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Created
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-gray-400">
            Three ideas, three experiences, one passion for building the web.
          </p>
        </div>

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Glowing Line */}
          <div className="absolute left-[16.66%] right-[16.66%] top-5 hidden h-[2px] bg-gradient-to-r from-rose-400 via-violet-500 to-cyan-400 shadow-[0_0_15px_rgba(139,92,246,0.6)] md:block" />

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
            {projects.map((project) => (
              <div key={project.id} className="relative">
                {/* Timeline Dot */}
                <div className="relative z-10 mb-8 hidden h-10 items-center justify-center md:flex">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full border bg-[#0B0B14] text-lg"
                    style={{
                      borderColor: project.color,
                      color: project.color,
                      boxShadow: `0 0 20px ${project.color}55`,
                    }}
                  >
                    {project.icon}
                  </div>
                </div>

                {/* Project Card */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group block overflow-hidden rounded-2xl border border-white/10 bg-[#0D0D16] transition duration-300 hover:-translate-y-2 hover:border-white/25"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-52 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-60"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D16] via-transparent to-transparent" />

                    <span
                      className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-[10px] tracking-widest backdrop-blur-md"
                      style={{ color: project.color }}
                    >
                      PROJECT {project.id}
                    </span>

                    <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 transition group-hover:bg-white group-hover:text-black">
                      <FiArrowUpRight size={20} />
                    </span>
                  </div>

                  <div className="p-5">
                    <p
                      className="mb-2 text-[10px] font-semibold tracking-[0.25em]"
                      style={{ color: project.color }}
                    >
                      {project.category}
                    </p>

                    <h3 className="text-xl font-bold transition group-hover:text-violet-300">
                      {project.title}
                    </h3>

                    <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                      <span className="text-xs text-gray-500">
                        Explore Project
                      </span>
                      <FiArrowUpRight
                        style={{ color: project.color }}
                        size={18}
                      />
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="https://github.com/toseefajmal"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-violet-400/30 px-6 py-3 text-sm text-gray-300 transition hover:border-violet-400 hover:bg-violet-500/10 hover:text-white"
          >
            Explore My GitHub <FiArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;