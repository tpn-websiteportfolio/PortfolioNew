import { useState } from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { services } from "../data/services";

const categories = [
  { id: "all", label: "All Services" },
  { id: "operations", label: "Operations" },
  { id: "automation", label: "Automation" },
  { id: "admin", label: "Administration" },
  { id: "strategy", label: "Strategy" },
];

export function Services() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((s) => s.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const getIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as React.ComponentType<any>;
    return IconComponent ? <IconComponent size={32} /> : null;
  };

  return (
    <section id="services" className="py-20 md:py-32 relative">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Services That Transform Your Business
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Specialized solutions designed to streamline your operations and free
            up your time for what matters most.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                activeCategory === cat.id
                  ? "bg-primary-600 text-white shadow-lg shadow-primary-500/50"
                  : "bg-dark-800 text-gray-300 hover:bg-dark-700 border border-dark-600"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group relative p-6 rounded-xl bg-dark-800/50 border border-dark-700 hover:border-primary-500/50 transition-all hover:shadow-lg hover:shadow-primary-500/10 overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-accent-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Content */}
              <div className="relative z-10">
                <div className="inline-block p-3 bg-dark-700 rounded-lg mb-4 text-primary-400 group-hover:text-accent-400 transition-colors">
                  {getIcon(service.icon)}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-400 mb-4 text-sm">
                  {service.description}
                </p>

                {/* Benefits List */}
                <div className="space-y-2">
                  {service.benefits.slice(0, 2).map((benefit) => (
                    <div key={benefit} className="flex items-start gap-2">
                      <span className="text-primary-400 mt-1 text-xs">✓</span>
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Border Animation */}
              <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-primary-500/30 transition-colors pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
