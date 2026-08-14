import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-dark-800/30 py-20 md:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_18%,rgba(14,165,233,0.1),transparent_30%)]" />

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-[#061c2d]/60 px-6 py-10 shadow-[0_20px_60px_rgba(0,0,0,0.2)] sm:px-10 md:px-12"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
            About Me
          </p>
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
            A dependable partner for the details.
          </h2>
          <p className="text-base leading-relaxed text-slate-300 md:text-lg">
            I enjoy making work feel a little easier and more organized. I’m the kind of person who likes figuring things out, keeping track of the details, and finding better ways to get things done. I take my work seriously, but I’m also easy to work with and always willing to learn. My goal is simple: to be someone you can trust to handle things, stay on top of tasks, and make your day-to-day work a little smoother.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
