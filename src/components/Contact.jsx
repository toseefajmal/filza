import { useState } from "react";
import {
  FiMail,
  FiMapPin,
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiCheckCircle,
} from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, subject, message } = formData;

    const mailtoLink =
      `mailto:toseefajmal@example.com?subject=${encodeURIComponent(subject)}&body=` +
      encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

    window.location.href = mailtoLink;
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#09080D] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-20"
    >
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-violet-600/10 blur-[110px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-orange-400/[0.07] blur-[110px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-violet-300">
            Contact / 01
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Let's make your{" "}
            <span className="text-violet-300">next idea happen.</span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-400">
            Have something in mind? Let's talk about it.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-[#100E15] lg:grid-cols-[0.85fr_1.15fr]">
          {/* Contact Information */}
          <div className="flex flex-col justify-between border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-9">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-1.5 text-xs text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Available for work
              </div>

              <h3 className="text-2xl font-bold leading-snug sm:text-3xl">
                Let's build
                <span className="block text-gray-400">
                  something great.
                </span>
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-6 text-gray-400">
                I'm open to frontend opportunities, collaborations, and
                creative web projects. Send me a message!
              </p>

              <div className="mt-7 space-y-4">
                <a
                  href="mailto:toseefajmal@example.com"
                  className="group flex items-center gap-3"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-300/15 bg-violet-400/[0.08] text-lg text-violet-300 transition group-hover:bg-violet-400/15">
                    <FiMail />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-gray-500">
                      Drop me an email
                    </p>
                    <p className="mt-1 break-all text-sm text-gray-200 transition group-hover:text-violet-300">
                      falzaakram398@gmail.com
                    </p>
                  </div>

                  <FiArrowUpRight className="ml-auto shrink-0 text-gray-500 transition group-hover:text-violet-300" />
                </a>

                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-orange-300/15 bg-orange-300/[0.07] text-lg text-orange-300">
                    <FiMapPin />
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-gray-500">
                      Based in
                    </p>
                    <p className="mt-1 text-sm text-gray-200">
                      Punjab, Pakistan
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 border-t border-white/10 pt-5">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-medium text-gray-400">
                  Let's connect
                </p>

                <div className="flex gap-2">
                  <a
                    href="https://www.linkedin.com/in/falza-akram-251bb7290/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub profile"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-lg text-gray-300 transition hover:border-violet-300/40 hover:bg-violet-300/10 hover:text-white"
                  >
                    <FiGithub />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/falza-akram-251bb7290/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn profile"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-lg text-gray-300 transition hover:border-violet-300/40 hover:bg-violet-300/10 hover:text-white"
                  >
                    <FiLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#15121A] p-6 sm:p-8 lg:p-9">
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">
                Your message
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                Send a little hello <span className="text-orange-300">✦</span>
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                Tell me a little about what you're planning.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-medium text-gray-300"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/10 bg-[#0C0A10] px-3.5 py-3 text-sm outline-none transition placeholder:text-gray-600 focus:border-violet-400/60 focus:ring-2 focus:ring-violet-400/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-medium text-gray-300"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/10 bg-[#0C0A10] px-3.5 py-3 text-sm outline-none transition placeholder:text-gray-600 focus:border-violet-400/60 focus:ring-2 focus:ring-violet-400/10"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-xs font-medium text-gray-300"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Project collaboration"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/10 bg-[#0C0A10] px-3.5 py-3 text-sm outline-none transition placeholder:text-gray-600 focus:border-violet-400/60 focus:ring-2 focus:ring-violet-400/10"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-medium text-gray-300"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell me about your idea..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full resize-y rounded-xl border border-white/10 bg-[#0C0A10] px-3.5 py-3 text-sm leading-6 outline-none transition placeholder:text-gray-600 focus:border-violet-400/60 focus:ring-2 focus:ring-violet-400/10"
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-violet-400 px-5 py-3.5 text-sm font-semibold text-[#160F20] transition hover:bg-violet-300"
              >
                Send Message
                <FiArrowUpRight className="text-lg transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>

              <p className="flex items-center justify-center gap-2 text-center text-xs text-gray-500">
                <FiCheckCircle className="shrink-0 text-emerald-400" />
                Opens your default email application.
              </p>
            </form>
          </div>
        </div>

        <p className="mt-5 text-center text-xs text-gray-600">
          © {new Date().getFullYear()} Toseef Ajmal · Designed with care.
        </p>
      </div>
    </section>
  );
};

export default Contact;