
import {
  FiCode,
  FiLayout,
  FiSmartphone,
  FiDatabase,
  FiShoppingBag,
  FiZap,
  FiArrowUpRight,
  FiCheck,
} from "react-icons/fi";

const services = [
  {
    number: "01",
    icon: <FiCode />,
    title: "Web Development",
    description:
      "Modern websites built with clean code, reusable components and powerful web technologies.",
    features: ["React Development", "Reusable Components", "Clean Code"],
    color: "violet",
  },
  {
    number: "02",
    icon: <FiLayout />,
    title: "UI Development",
    description:
      "Beautiful interfaces with polished details, modern layouts and consistent visual design.",
    features: ["Modern Interfaces", "Pixel-Perfect Layouts", "Visual Consistency"],
    color: "fuchsia",
  },
  {
    number: "03",
    icon: <FiSmartphone />,
    title: "Responsive Design",
    description:
      "Smooth browsing experiences that adapt to mobiles, tablets, laptops and desktop screens.",
    features: ["Mobile-First Design", "Flexible Layouts", "Cross-Device Support"],
    color: "cyan",
  },
  {
    number: "04",
    icon: <FiDatabase />,
    title: "API Integration",
    description:
      "Connect interfaces with APIs to display dynamic data and create interactive experiences.",
    features: ["REST API Integration", "Data Fetching", "Error Handling"],
    color: "blue",
  },
  {
    number: "05",
    icon: <FiShoppingBag />,
    title: "E-Commerce UI",
    description:
      "Modern shopping interfaces with product listings, detail pages and intuitive navigation.",
    features: ["Product Catalogs", "Product Detail Pages", "Shopping UI"],
    color: "orange",
  },
  {
    number: "06",
    icon: <FiZap />,
    title: "Website Optimization",
    description:
      "Improve website usability with cleaner layouts, efficient components and responsive fixes.",
    features: ["Code Improvements", "UI Refinement", "Responsive Fixes"],
    color: "emerald",
  },
];

const Services = () => {
  const duplicatedServices = [...services, ...services];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#08080d] py-24 text-white sm:py-28 lg:py-32"
    >
      <style>{`
        @keyframes services-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .services-track {
          animation: services-marquee 38s linear infinite;
          width: max-content;
        }

        .services-track:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .services-track {
            animation: none;
          }
        }
      `}</style>

      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-32 h-96 w-96 rounded-full bg-violet-600/10 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-fuchsia-600/[0.08] blur-[140px]" />

      <div className="relative">
        {/* Heading */}
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-violet-300">
            <FiZap />
            What I Offer
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Services That
            <span className="mt-2 block bg-gradient-to-r from-violet-400 via-fuchsia-300 to-indigo-400 bg-clip-text text-transparent">
              Bring Ideas to Life.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
            Creative, responsive and functional digital solutions designed
            to turn ideas into polished web experiences.
          </p>
        </div>

        {/* Scrolling Services */}
        <div className="relative mt-14 overflow-hidden sm:mt-16">
          {/* Side Fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#08080d] to-transparent sm:w-20 lg:w-32" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#08080d] to-transparent sm:w-20 lg:w-32" />

          <div className="services-track flex gap-5 px-3 sm:gap-6 sm:px-4">
            {duplicatedServices.map((service, index) => (
              <article
                key={`${service.number}-${index}`}
                className="group relative flex min-h-[390px] w-[290px] shrink-0 flex-col overflow-hidden rounded-3xl border border-white/[0.09] bg-gradient-to-br from-[#171521] via-[#101017] to-[#0c0c12] p-6 shadow-[0_15px_60px_rgba(0,0,0,0.25)] transition-all duration-500 hover:-translate-y-2 hover:border-violet-400/40 hover:shadow-[0_20px_65px_rgba(109,40,217,0.16)] sm:w-[330px] sm:p-7"
              >
                {/* Card Glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-500/[0.04] blur-[65px] transition duration-500 group-hover:bg-violet-500/20" />

                {/* Top Accent */}
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent opacity-40 transition duration-500 group-hover:opacity-100" />

                {/* Card Header */}
                <div className="relative flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-2xl text-violet-300 shadow-inner shadow-white/[0.03] transition duration-500 group-hover:scale-110 group-hover:border-violet-400/40 group-hover:bg-violet-500/10 group-hover:text-fuchsia-300">
                    {service.icon}
                  </div>

                  <span className="rounded-full border border-white/[0.07] bg-white/[0.03] px-3 py-1.5 text-xs font-medium tracking-[0.2em] text-gray-500 transition group-hover:border-violet-400/20 group-hover:text-violet-300">
                    / {service.number}
                  </span>
                </div>

                {/* Card Content */}
                <h3 className="relative mt-7 text-xl font-bold tracking-tight text-white transition group-hover:text-violet-200 sm:text-2xl">
                  {service.title}
                </h3>

                <p className="relative mt-3 text-sm leading-7 text-gray-400">
                  {service.description}
                </p>

                {/* Divider */}
                <div className="my-5 h-px bg-gradient-to-r from-violet-400/25 via-white/[0.07] to-transparent" />

                {/* Features */}
                <div className="relative space-y-3">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-sm text-gray-400 transition group-hover:text-gray-300"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-violet-400/25 bg-violet-500/10 text-[11px] text-violet-300">
                        <FiCheck />
                      </span>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Bottom Link */}
                <a
                  href="#contact"
                  className="relative mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-violet-300 transition hover:text-white"
                >
                  Discuss Your Project
                  <FiArrowUpRight className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>

                {/* Bottom Accent */}
                <div className="absolute inset-x-7 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-violet-500 via-fuchsia-400 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              </article>
            ))}
          </div>
        </div>

        {/* Scroll Hint */}
        <p className="mt-5 text-center text-xs tracking-wide text-gray-600">
          <span className="mr-2 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
          Explore services · Hover to pause
        </p>

       
      </div>
    </section>
  );
};

export default Services;
