import { motion } from "motion/react";

const education = [
  {
    id: 1,
    degree: "Master of Science",
    field: "Computer Science",
    school: "Epitech Toulouse",
    year: "2024 - 2026",
    description:
      "Focus on advanced software engineering, AI, and DevOps practices. Developped during these 2 years an AI-powered project for language learning.",
  },
  {
    id: 2,
    degree: "Exchange Year",
    field: "Computer Science",
    school: "Chung-Ang University, South Korea",
    year: "2024 - 2025",
    description:
      "Studied software development and AI in an international environment, gaining cross-cultural experience.",
  },
  {
    id: 3,
    degree: "Bachelor of Science",
    field: "Software Engineering",
    school: "Epitech Toulouse",
    year: "2021 - 2024",
    description:
      "Start with low level programming and system architecture, then moved to software development and DevOps.",
  },
];


export function Education() {
  return (
    <section
      id="education"
      className="min-h-screen p-6 md:p-12 py-24 bg-muted/30"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-block bg-primary/10 px-6 py-2 rounded-full mb-4">
            <span className="text-primary">03</span>
          </div>
          <h2 className="text-4xl md:text-6xl mb-4">Education</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            My academic journey and professional certifications
          </p>
        </motion.div>

        <div className="space-y-6 mb-16">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-card rounded-2xl shadow-md p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-sm text-muted-foreground mb-2">
                    {edu.year}
                  </div>
                  <h3 className="text-2xl md:text-3xl mb-2">{edu.degree}</h3>
                  <div className="text-xl text-primary">{edu.field}</div>
                </div>
                <div className="md:col-span-2 border-l-4 border-accent/30 pl-6">
                  <div className="text-xl mb-4">{edu.school}</div>
                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
