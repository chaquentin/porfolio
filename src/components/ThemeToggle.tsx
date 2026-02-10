import { motion } from "motion/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors duration-200"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === "dark" ? 360 : 0,
          scale: theme === "dark" ? 1 : 0.8,
        }}
        transition={{ duration: 0.3 }}
      >
        {theme === "dark" ? (
          <Moon className="w-5 h-5 text-secondary" />
        ) : (
          <Sun className="w-5 h-5 text-primary" />
        )}
      </motion.div>
    </motion.button>
  );
}
