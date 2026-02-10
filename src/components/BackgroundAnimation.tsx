import { motion } from "motion/react";

export function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute w-32 h-32 border-4 border-secondary"
        style={{ top: "10%", left: "5%" }}
        animate={{
          y: [0, 30, 0],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute w-24 h-24 bg-accent"
        style={{ top: "60%", right: "10%" }}
        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-40 h-40 border-4 border-accent"
        style={{ bottom: "15%", left: "15%" }}
        animate={{
          rotate: [0, 180, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute w-16 h-16 bg-secondary"
        style={{ top: "30%", right: "25%" }}
        animate={{
          y: [0, 50, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-20 h-20 border-4 border-secondary"
        style={{ bottom: "30%", right: "5%" }}
        animate={{
          x: [0, -30, 0],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
