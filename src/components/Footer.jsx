import React from "react";
import {
  FiArrowUpRight,
  FiArrowUp,
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiCode,
  FiHeart,
} from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: FiGithub,
      href: "https://github.com/toseefajmal",
      label: "GitHub",
    },
    {
      icon: FiLinkedin,
      href: "https://www.linkedin.com/in/falza-akram-251bb7290//",
      label: "LinkedIn",
    },
    {
      icon: FiInstagram,
      href: "https://www.instagram.com/",
      label: "Instagram",
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#08080c] px-5 pt-16 pb-8 sm:px-8 lg:px-12">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-violet-600/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Main Footer */}
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-3"
              aria-label="Back to home"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/30 bg-violet-500/10 text-violet-300 shadow-lg shadow-violet-500/10">
                <FiCode size={22} />
              </div>

              <div>
                <h2 className="text-xl font-bold tracking-tight text-white">
                  FALZA AKRAM<span className="text-violet-400">.</span>
                </h2>
                <p className="text-xs tracking-widest text-gray-500">
                  FRONTEND DEVELOPER
                </p>
              </div>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
              I build modern, responsive and user-friendly digital experiences
              with clean code and creative design.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-violet-300"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Quick Links
            </h3>

            <ul className="grid grid-cols-2 gap-x-5 gap-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-gray-400 transition-colors duration-300 hover:text-violet-300"
                  >
                    <span className="h-1 w-1 rounded-full bg-violet-500 transition-all group-hover:h-2 group-hover:w-2" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Let's Connect
            </h3>

            <p className="mb-6 text-sm leading-7 text-gray-400">
              Have a project in mind? Let's discuss how we can bring your
              ideas to life.
            </p>

            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-xl border border-violet-400/30 bg-violet-500/10 px-5 py-3 text-sm font-medium text-violet-200 transition-all duration-300 hover:border-violet-400/60 hover:bg-violet-500/20"
            >
              Start a Project
              <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-5 pt-7 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-gray-500">
            © {currentYear} Toseef Ajmal. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-xs text-gray-500">
            Designed & built with
            <FiHeart className="text-violet-400" size={13} />
            using React
          </p>

          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-violet-300"
          >
            <FiArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;