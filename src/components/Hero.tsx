import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center p-6 md:p-12">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-card p-12 md:p-16 rounded-2xl shadow-lg"
        >
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block bg-secondary/20 px-6 py-2 rounded-full"
            >
              <span className="text-primary">Available for work</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-5xl md:text-7xl tracking-tight"
            >
              Quentin Challon
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              <div className="bg-accent/10 text-accent px-6 py-3 rounded-full">
                <span>Developer</span>
              </div>
              <div className="bg-accent/10 text-accent px-6 py-3 rounded-full">
                <span>Designer</span>
              </div>
              <div className="bg-accent/10 text-accent px-6 py-3 rounded-full">
                <span>Creator</span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-xl md:text-2xl max-w-3xl text-muted-foreground leading-relaxed"
            >
              I'm a passionate developer and designer who loves creating
              beautiful, functional experiences. I specialize in web
              development, UI/UX design, and bringing ideas to life through
              code.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex gap-4 pt-4"
            >
              <a
                href="#projects"
                className="bg-primary dark:bg-[#2C3E50] text-secondary px-8 py-4 rounded-xl hover:bg-primary/90 dark:hover:bg-[#3d5568] hover:shadow-lg transition-all duration-200 dark:border dark:border-secondary/30"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="bg-background text-primary px-8 py-4 rounded-xl border border-primary/20 hover:bg-primary/5 hover:shadow-md transition-all duration-200"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
