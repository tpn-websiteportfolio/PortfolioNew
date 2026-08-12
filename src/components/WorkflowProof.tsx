import { motion } from "framer-motion";
import { workflowProofs } from "../data/workflows";

export function WorkflowProof() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="workflow-proof" className="py-20 md:py-32 bg-dark-800/30">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Workflow Proof
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Real results from comprehensive workflow implementations and
            automations.
          </p>
        </motion.div>

        {/* Proof Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {workflowProofs.map((proof) => (
            <motion.div
              key={proof.id}
              variants={itemVariants}
              className="group relative p-8 rounded-xl bg-gradient-to-r from-dark-800/80 to-dark-700/80 border border-dark-700 hover:border-primary-500/30 transition-all overflow-hidden"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600/5 to-accent-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                {/* Header */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                      {proof.title}
                    </h3>
                    <p className="text-primary-400 text-sm font-semibold">
                      {proof.timeframe}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {proof.tools.map((tool) => (
                      <span
                        key={tool}
                        className="inline-block px-3 py-1 rounded-full bg-dark-700 text-primary-400 text-xs font-semibold border border-dark-600"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <p className="text-gray-400 text-sm mb-2 uppercase tracking-wider font-semibold">
                      Challenge
                    </p>
                    <p className="text-gray-200">{proof.challenge}</p>
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm mb-2 uppercase tracking-wider font-semibold">
                      Solution
                    </p>
                    <p className="text-gray-200">{proof.solution}</p>
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm mb-2 uppercase tracking-wider font-semibold">
                      Result
                    </p>
                    <p className="text-gray-200">{proof.result}</p>
                  </div>
                </div>

                {/* Impact */}
                <div className="pt-6 border-t border-dark-600">
                  <p className="text-gray-400 text-sm mb-1 uppercase tracking-wider font-semibold">
                    Impact
                  </p>
                  <p className="text-primary-400 font-bold text-lg">
                    {proof.impact}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
