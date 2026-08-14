import { motion } from "framer-motion";
import { ArrowRight, Share2, Linkedin, Mail } from "lucide-react";
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
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(52,126,181,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(88,178,255,0.14),_transparent_25%),linear-gradient(90deg,_#031926_0%,_#031d2b_30%,_#061c2d_100%)]" />

      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-[1280px] rounded-[2rem] border border-white/10 bg-[#021b2a]/90 px-6 py-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)] md:px-10 md:py-10"
        >
          <motion.div
            variants={itemVariants}
            className="mb-10 flex items-center justify-between text-white"
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

          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div variants={itemVariants} className="max-w-2xl px-2 py-6 md:py-10">
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
                  <Linkedin size={18} />
                </a>
                <a href="mailto:stephenilustre90@gmail.com" className="flex h-12 w-12 items-center justify-center rounded-full border border-sky-500/60 bg-[#0b2237] text-sky-300 transition hover:border-sky-400 hover:text-white">
                  <Mail size={18} />
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex justify-center lg:justify-end">
              <div className="relative flex h-[480px] w-[420px] items-center justify-center overflow-hidden rounded-[3rem] bg-transparent md:h-[560px] md:w-[500px]">
                <div className="absolute inset-0 rounded-[3rem] bg-[radial-gradient(circle_at_center,_rgba(64,211,255,0.18),_transparent_50%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(0,0,0,0.18),_transparent_35%,_rgba(0,0,0,0.2))]" />
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
                  alt="Stephen Ilustre"
                  className="relative h-full w-full object-cover grayscale-0"
                  style={{
                    filter: "saturate(0.9) contrast(1.05)",
                    clipPath: "ellipse(48% 51% at 50% 50%)",
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
