import { useState } from "react";
import {
  FiMenu,
  FiX,
  FiArrowUpRight,
} from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
  ];

  const handleLinkClick = (href) => {
    setActiveLink(href);
    setMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0b0b11]/85 shadow-2xl shadow-black/30 backdrop-blur-2xl">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/70 to-transparent" />

        <div className="flex h-[76px] items-center justify-between px-5 sm:px-7 lg:px-9">
          {/* Logo */}
          <a
            href="#home"
            onClick={() => handleLinkClick("#home")}
            className="group flex shrink-0 items-center"
          >
            <img
              src="/fAlogo.png"
              alt="Filza Akram Logo"
              className="h-12 w-auto object-contain transition duration-300 group-hover:scale-105 sm:h-14"
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden items-center gap-1 rounded-xl border border-white/[0.06] bg-white/[0.025] p-1.5 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`relative rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  activeLink === link.href
                    ? "bg-violet-500/15 text-violet-300"
                    : "text-gray-400 hover:bg-white/[0.05] hover:text-white"
                }`}
              >
                {link.name}

                {activeLink === link.href && (
                  <span className="absolute inset-x-5 -bottom-1 h-0.5 rounded-full bg-violet-400 shadow-[0_0_10px_#a78bfa]" />
                )}
              </a>
            ))}
          </div>

          {/* Contact Button */}
          <a
            href="#contact"
            onClick={() => handleLinkClick("#contact")}
            className="hidden items-center gap-2 rounded-xl border border-violet-400/30 bg-violet-500/10 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:border-violet-400/60 hover:bg-violet-500/20 hover:shadow-lg hover:shadow-violet-500/10 sm:flex"
          >
            Let's Talk
            <FiArrowUpRight className="text-lg text-violet-300 transition-transform duration-300" />
          </a>

          {/* Mobile Toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-xl text-white transition hover:border-violet-400/40 hover:bg-violet-500/10 lg:hidden"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`grid transition-all duration-300 ease-in-out lg:hidden ${
            menuOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-white/[0.08] px-5 pb-5 pt-4 sm:px-7">
              <div className="flex flex-col gap-2">
                {links.map((link, index) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm transition-all duration-200 ${
                      activeLink === link.href
                        ? "border border-violet-400/20 bg-violet-500/10 text-violet-300"
                        : "border border-transparent text-gray-400 hover:bg-white/[0.04] hover:text-white"
                    }`}
                    style={{
                      transitionDelay: menuOpen
                        ? `${index * 35}ms`
                        : "0ms",
                    }}
                  >
                    {link.name}
                    <FiArrowUpRight className="text-base opacity-60" />
                  </a>
                ))}

                <a
                  href="#contact"
                  onClick={() => handleLinkClick("#contact")}
                  className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-950/30 transition hover:from-violet-500 hover:to-indigo-500"
                >
                  Let's Talk
                  <FiArrowUpRight className="text-lg" />
                </a>
              </div>

              <p className="mt-5 text-center text-xs tracking-wide text-gray-600">
                CRAFTING DIGITAL EXPERIENCES
              </p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;