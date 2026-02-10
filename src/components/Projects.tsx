import { motion } from "motion/react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management and payment processing.",
    tech: ["React", "Node.js", "MongoDB"],
    color: "bg-secondary/20",
  },
  {
    id: 2,
    title: "Design System",
    description:
      "Comprehensive design system and component library for enterprise applications.",
    tech: ["React", "TypeScript", "Storybook"],
    color: "bg-accent/20",
  },
  {
    id: 3,
    title: "Mobile App",
    description:
      "Cross-platform mobile application for task management and team collaboration.",
    tech: ["React Native", "Firebase", "Redux"],
    color: "bg-primary/10",
  },
  {
    id: 4,
    title: "Data Visualization",
    description:
      "Interactive dashboard for real-time data analytics and business intelligence.",
    tech: ["D3.js", "Python", "PostgreSQL"],
    color: "bg-accent/20",
  },
];

export function Projects() {
  return (
    <section id="projects" className="min-h-screen p-6 md:p-12 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-block bg-primary/10 px-6 py-2 rounded-full mb-4">
            <span className="text-primary">02</span>
          </div>
          <h2 className="text-4xl md:text-6xl mb-4">Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A collection of my recent work and side projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className={`${project.color} h-48`}></div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-1 bg-muted rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="mt-4 text-primary hover:text-primary/80 transition-colors duration-200 group-hover:translate-x-2 transform transition-transform">
                  View Project →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
