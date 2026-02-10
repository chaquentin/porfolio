import { motion } from "motion/react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-primary dark:bg-[#2C3E50] p-6 md:p-12 py-16 text-secondary"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 mb-12"
        >
          <div>
            <h2 className="text-4xl md:text-5xl mb-6">
              Let's Work
              <br />
              Together
            </h2>
            <p className="text-xl mb-8 opacity-80">
              Got a project in mind? Let's create something amazing together.
            </p>
            <motion.a
              href="mailto:your.email@example.com"
              className="inline-block px-8 py-4 rounded-xl transition-all duration-300 bg-secondary dark:bg-accent text-primary dark:text-white"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(123, 165, 199, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl mb-6">Connect</h3>
            <div className="space-y-4">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-lg transition-colors duration-300 group text-secondary"
                whileHover={{ color: "#7BA5C7", x: 5 }}
              >
                <motion.div
                  className="p-3 rounded-xl transition-all duration-300 bg-secondary/20 dark:bg-secondary/10"
                  whileHover={{
                    backgroundColor: "rgba(123, 165, 199, 0.4)",
                    scale: 1.1,
                    rotate: 5,
                  }}
                >
                  <Github className="w-6 h-6" />
                </motion.div>
                <span>GitHub</span>
              </motion.a>

              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-lg transition-colors duration-300 group text-secondary"
                whileHover={{ color: "#7BA5C7", x: 5 }}
              >
                <motion.div
                  className="p-3 rounded-xl transition-all duration-300 bg-secondary/20 dark:bg-secondary/10"
                  whileHover={{
                    backgroundColor: "rgba(123, 165, 199, 0.4)",
                    scale: 1.1,
                    rotate: 5,
                  }}
                >
                  <Linkedin className="w-6 h-6" />
                </motion.div>
                <span>LinkedIn</span>
              </motion.a>

              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-lg transition-colors duration-300 group text-secondary"
                whileHover={{ color: "#7BA5C7", x: 5 }}
              >
                <motion.div
                  className="p-3 rounded-xl transition-all duration-300 bg-secondary/20 dark:bg-secondary/10"
                  whileHover={{
                    backgroundColor: "rgba(123, 165, 199, 0.4)",
                    scale: 1.1,
                    rotate: 5,
                  }}
                >
                  <Twitter className="w-6 h-6" />
                </motion.div>
                <span>Twitter</span>
              </motion.a>

              <motion.a
                href="mailto:your.email@example.com"
                className="flex items-center gap-4 text-lg transition-colors duration-300 group text-secondary"
                whileHover={{ color: "#7BA5C7", x: 5 }}
              >
                <motion.div
                  className="p-3 rounded-xl transition-all duration-300 bg-secondary/20 dark:bg-secondary/10"
                  whileHover={{
                    backgroundColor: "rgba(123, 165, 199, 0.4)",
                    scale: 1.1,
                    rotate: 5,
                  }}
                >
                  <Mail className="w-6 h-6" />
                </motion.div>
                <span>Email</span>
              </motion.a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-secondary/20"
        >
          <div className="text-secondary opacity-70">
            © {currentYear} Your Name. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-secondary opacity-70">
            <motion.a
              href="#"
              className="transition-colors duration-300"
              whileHover={{ color: "#7BA5C7", scale: 1.1 }}
            >
              Privacy
            </motion.a>
            <motion.a
              href="#"
              className="transition-colors duration-300"
              whileHover={{ color: "#7BA5C7", scale: 1.1 }}
            >
              Terms
            </motion.a>
            <motion.a
              href="#"
              className="transition-colors duration-300"
              whileHover={{ color: "#7BA5C7", scale: 1.1 }}
            >
              Sitemap
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
