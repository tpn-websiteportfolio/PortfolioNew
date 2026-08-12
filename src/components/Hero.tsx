import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute inset-0"
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(99, 102, 241, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(99, 102, 241, 0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-10 w-72 h-72 bg-primary-500 rounded-full blur-3xl opacity-5"
        />
        <motion.div
          animate={{ y: [0, 30, 0], x: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-20 left-10 w-96 h-96 bg-accent-500 rounded-full blur-3xl opacity-5"
        />
      </div>

      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Tagline */}
          <motion.div
            variants={itemVariants}
            className="inline-block mb-6 px-4 py-2 rounded-full bg-dark-800 border border-primary-500/30 backdrop-blur-sm"
          >
            <span className="text-primary-400 font-semibold text-sm">
              ✨ Virtual Assistant & Operations Specialist
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            {heroData.headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
          >
            {heroData.subheadline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 md:gap-6"
          >
            <button className="group px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white rounded-lg font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
              {heroData.cta_primary}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-dark-800 hover:bg-dark-700 border border-primary-500/50 hover:border-primary-400 text-white rounded-lg font-bold text-lg transition-all">
              {heroData.cta_secondary}
            </button>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="mt-12 text-gray-400 italic text-lg"
          >
            "{heroData.tagline}"
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
