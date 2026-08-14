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
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-16">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,_#0a0a0a_0%,_#0d0d0d_30%,_#0a0a0a_100%)]" />

      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-[1080px] rounded-[1.25rem] border border-black/25 bg-[#151515]/60 px-3 py-3 shadow-[0_24px_70px_rgba(0,0,0,0.42)] backdrop-blur-[1px] md:px-5 md:py-4"
        >
          <motion.div
            variants={itemVariants}
            className="mb-6 flex items-center justify-between text-white md:mb-8"
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

          <div className="grid items-center gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6">
            <motion.div variants={itemVariants} className="max-w-2xl px-1 py-2 md:py-5">
              <h1 className="text-5xl font-bold leading-none tracking-tight text-white md:text-7xl">
                {heroData.headline}
              </h1>
              <p className="mt-6 text-xl font-medium text-sky-300 md:text-3xl">
                {heroData.role}
              </p>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
                {heroData.subheadline}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
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

              <div className="mt-10 flex items-center gap-4">
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

            <motion.div variants={itemVariants} className="flex justify-center lg:justify-end">
              <div className="relative flex h-[300px] w-[250px] items-center justify-center overflow-hidden rounded-[2rem] border border-black/20 bg-[#151515]/60 md:h-[360px] md:w-[300px] lg:h-[420px] lg:w-[350px]">
                <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.1),_transparent_54%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(0,0,0,0.1),_transparent_32%,_rgba(0,0,0,0.15))]" />
                <img
                  src="/stephen.jpg"
                  alt="Stephen Ilustre"
                  className="relative h-full w-full object-cover"
                  style={{
                    filter: "brightness(0.9) contrast(1.12) saturate(0.9) sepia(0.12)",
                    clipPath: "ellipse(49% 52% at 50% 52%)",
                    boxShadow: "0 18px 40px rgba(0,0,0,0.35)",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
