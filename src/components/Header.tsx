import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work Experience", href: "#work-experience" },
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
    <header className="fixed inset-x-0 top-6 z-50 px-4 sm:px-6 lg:px-10">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-[2rem] border border-white/10 bg-[#061c2d]/90 px-6 py-4 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-3"
        >
          <span className="text-3xl font-bold tracking-tight text-white">Stephen</span>
        </motion.div>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="text-base font-medium text-slate-200 transition-colors hover:text-white"
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full border border-white/10 p-2 text-slate-200 transition hover:text-white md:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <motion.div
        animate={{ height: isOpen ? "auto" : 0 }}
        className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-[#061c2d]/95 md:hidden"
      >
        <div className="flex flex-col gap-4 px-5 py-4">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="text-left text-base font-medium text-slate-200 transition-colors hover:text-white"
            >
              {item.label}
            </button>
          ))}
        </div>
      </motion.div>
    </header>
  );
}
