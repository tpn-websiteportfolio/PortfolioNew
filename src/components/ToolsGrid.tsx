import { useState } from "react";
import { motion } from "framer-motion";
import { toolCategories } from "../data/tools";
import { mapToolIcon } from "../utils/helpers";

export function ToolsGrid() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredTools =
    activeCategory === "all"
      ? toolCategories.flatMap((cat) => cat.tools)
      : toolCategories
          .find((cat) => cat.category === activeCategory)
          ?.tools.map((tool) => ({
            ...tool,
            category: activeCategory,
          })) || [];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      automation: "text-blue-400",
      communication: "text-purple-400",
      project: "text-green-400",
      data: "text-pink-400",
      content: "text-orange-400",
      ai: "text-cyan-400",
    };
    return colors[category] || "text-gray-400";
  };

  const getCategoryBgColor = (category: string) => {
    const colors: Record<string, string> = {
      automation: "bg-blue-500/10 border-blue-500/30",
      communication: "bg-purple-500/10 border-purple-500/30",
      project: "bg-green-500/10 border-green-500/30",
      data: "bg-pink-500/10 border-pink-500/30",
      content: "bg-orange-500/10 border-orange-500/30",
      ai: "bg-cyan-500/10 border-cyan-500/30",
    };
    return colors[category] || "bg-gray-500/10 border-gray-500/30";
  };

  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Tools I Master</h2>
          <p className="text-xl text-gray-300">
            18+ industry-leading tools to streamline your operations
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {[
            { id: "all", label: "All Tools" },
            ...toolCategories.map((cat) => ({
              id: cat.category,
              label: cat.name,
            })),
          ].map((cat) => (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg"
                  : "bg-dark-800 text-gray-300 hover:border-primary-500/50 border border-dark-700"
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Tools Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredTools.map((tool) => {
            const IconComponent = mapToolIcon(tool.icon);
            return (
              <motion.div
                key={tool.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-lg border transition-all ${getCategoryBgColor(tool.category)} hover:border-primary-400`}
              >
                <motion.div className={`mb-4 ${getCategoryColor(tool.category)}`}>
                  <IconComponent size={32} />
                </motion.div>
                <h3 className="text-lg font-bold text-white mb-2">{tool.name}</h3>
                <p className="text-sm text-gray-400 mb-3">{tool.description}</p>
                <div className="inline-block px-3 py-1 rounded-full bg-dark-700 border border-dark-600">
                  <span className={`text-xs font-semibold uppercase ${getCategoryColor(tool.category)}`}>
                    {tool.category}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
