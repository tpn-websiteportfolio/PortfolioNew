import { motion } from "framer-motion";
import { ArrowRight, Share2, Globe, Mail } from "lucide-react";
import { heroData } from "../data/hero";

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
          <motion.div
            variants={itemVariants}
            className="mb-12 flex items-center justify-between text-white md:mb-16"
          >
            <div className="text-3xl font-bold tracking-tight">{heroData.name}</div>
            <div className="hidden items-center gap-8 md:flex">
              <a href="#home" className="text-sm text-slate-300 transition hover:text-white">Home</a>
              <a href="#about" className="text-sm text-slate-300 transition hover:text-white">About</a>
              <a href="#services" className="text-sm text-slate-300 transition hover:text-white">Services</a>
              <a href="#portfolio" className="text-sm text-slate-300 transition hover:text-white">Portfolio</a>
              <a href="#contact" className="text-sm text-slate-300 transition hover:text-white">Contact</a>
            </div>
          </motion.div>

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
                  href="mailto:stephenilustre90@gmail.com"
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
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border border-sky-500/60 bg-[#0b2237] text-sky-300 transition hover:border-sky-400 hover:text-white">
                  <Share2 size={18} />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border border-sky-500/60 bg-[#0b2237] text-sky-300 transition hover:border-sky-400 hover:text-white">
                  <Globe size={18} />
                </a>
                <a href="mailto:stephenilustre90@gmail.com" className="flex h-12 w-12 items-center justify-center rounded-full border border-sky-500/60 bg-[#0b2237] text-sky-300 transition hover:border-sky-400 hover:text-white">
                  <Mail size={18} />
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative h-full overflow-hidden -mr-12 -mb-0">
              <img
                src="/ggg.jpg"
                alt="Stephen Ilustre"
                className="h-full w-full object-cover"
                style={{
                  filter: "brightness(0.95) contrast(1.05)",
                  boxShadow: "inset -80px 0 120px rgba(0, 0, 0, 0.3)",
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
