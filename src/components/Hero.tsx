import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { heroData } from "../data/hero";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px] fill-current">
      <path d="M13.7 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5H17V3.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2V10H7.8v3h2.7v8h3.2Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px] fill-current">
      <path d="M6.5 8.5A1.8 1.8 0 1 0 6.5 5a1.8 1.8 0 0 0 0 3.5ZM5 19h3V10H5v9Zm5 0h3v-5c0-1.3.2-2.5 1.8-2.5 1.6 0 1.7 1.5 1.7 2.6V19h3v-5.5c0-2.7-.6-4.8-3.8-4.8-1.5 0-2.5.8-2.9 1.6V10h-3v9Z" />
    </svg>
  );
}

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-20 pb-0">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,_#0a0a0a_0%,_#0d0d0d_30%,_#0a0a0a_100%)]" />

      <div className="container-custom h-full w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto h-full w-full px-3 py-0 md:px-6 lg:px-12"
        >
          <div className="grid h-full items-stretch gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
            <motion.div variants={itemVariants} className="flex flex-col justify-center max-w-3xl px-0 py-8 md:py-12">
              <h1 className="text-6xl font-bold leading-tight tracking-tight text-white md:text-8xl lg:text-7xl">
                {heroData.headline}
              </h1>
              <p className="mt-8 text-2xl font-medium text-sky-300 md:text-3xl lg:text-2xl">
                {heroData.role}
              </p>

              <p className="mt-8 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
                {heroData.subheadline}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=stephenilustre12@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-8 py-4 text-lg font-semibold text-white shadow-[0_10px_30px_rgba(14,165,233,0.45)] transition hover:bg-sky-400"
                >
                  {heroData.cta_primary}
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl border border-sky-500/70 bg-transparent px-8 py-4 text-lg font-semibold text-sky-300 transition hover:border-sky-400 hover:text-white"
                >
                  {heroData.cta_secondary}
                </a>
              </div>

              <div className="mt-12 flex items-center gap-4">
                <a aria-label="Facebook" href="https://www.facebook.com/share/1LKsR4fcdw/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border border-sky-500/60 bg-[#0b2237] text-sky-300 transition hover:border-sky-400 hover:text-white">
                  <FacebookIcon />
                </a>
                <a aria-label="LinkedIn" href="https://www.linkedin.com/in/stephen-ilustre-6649b8358?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border border-sky-500/60 bg-[#0b2237] text-sky-300 transition hover:border-sky-400 hover:text-white">
                  <LinkedInIcon />
                </a>
                <a aria-label="Email Stephen" href="https://mail.google.com/mail/?view=cm&fs=1&to=stephenilustre12@gmail.com" target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border border-sky-500/60 bg-[#0b2237] text-sky-300 transition hover:border-sky-400 hover:text-white">
                  <Mail size={18} />
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative h-full overflow-hidden -mr-12 -mb-0">
              <img
                src="/vfv.jpg"
                alt="Stephen Ilustre"
                className="h-[600px] w-[500px] object-cover object-top rounded-none border-0 shadow-none"
                style={{
                  WebkitMaskImage:
        "linear-gradient(to bottom, black 75%, transparent 100%)",
      maskImage:
        "linear-gradient(to bottom, black 75%, transparent 100%)",
      filter: "brightness(0.95) contrast(1.05)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#0a0a0a]/20" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
