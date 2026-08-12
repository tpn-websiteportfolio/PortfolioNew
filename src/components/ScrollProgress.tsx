import { motion } from "framer-motion";
import { useScrollProgress } from "../hooks/useScrollProgress";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-16 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 origin-left z-50"
      style={{
        scaleX: progress / 100,
      }}
      initial={{ scaleX: 0 }}
    />
  );
}
