import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Workflow Proof", href: "#workflow-proof" },
  { label: "VA Fit Check", href: "#fit-checker" },
  { label: "Tools", href: "#tools" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-dark-900/80 border-b border-dark-700">
      <nav className="container-custom py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center font-bold text-white text-lg">
            VA
          </div>
          <span className="font-bold text-lg text-white">Operations</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="hidden md:block px-6 py-2 bg-primary-600 hover:bg-primary-500 text-white rounded-lg font-semibold transition-colors"
        >
          Let's Talk
        </motion.button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-300 hover:text-white"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <motion.div
        animate={{ height: isOpen ? "auto" : 0 }}
        className="md:hidden overflow-hidden bg-dark-800 border-t border-dark-700"
      >
        <div className="container-custom py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="text-gray-300 hover:text-white transition-colors text-left font-medium py-2"
            >
              {item.label}
            </button>
          ))}
          <button className="w-full px-4 py-2 bg-primary-600 hover:bg-primary-500 text-white rounded-lg font-semibold transition-colors mt-4">
            Let's Talk
          </button>
        </div>
      </motion.div>
    </header>
  );
}
