import { motion } from "motion/react";
import { Atom, Code2, Dumbbell, Footprints, Gamepad2, Mountain, Music, Palette, Plane } from "lucide-react";

const hobbies = [
  {
    id: 1,
    name: "Science",
    description:
      "Discovering and learning about every scientific based topic, from physics to biology.",
    icon: Atom,
    color: "bg-primary/10",
    iconColor: "text-primary/10",
  },
  {
    id: 2,
    name: "Gaming",
    description:
      "Strategy games and indie titles. Love analyzing game design and mechanics.",
    icon: Gamepad2,
    color: "bg-secondary/20",
    iconColor: "text-primary",
  },
  {
    id: 3,
    name: "Travelling",
    description:
      "Exploring new places, cultures, and finding inspiration around the world.",
    icon: Plane,
    color: "bg-accent/20",
    iconColor: "text-accent",
  },
  {
    id: 4,
    name: "Sports",
    description:
      "More than climbing and running, I also enjoy playing every kind of sport",
    icon: Dumbbell,
    color: "bg-primary/10",
    iconColor: "text-primary/10",
  },
  {
    id: 5,
    name: "Running",
    description:
      "Running is my go-to for clearing my mind, feeling refreshed and energized.",
    icon: Footprints,
    color: "bg-accent/20",
    iconColor: "text-accent",
  },
  {
    id: 6,
    name: "Climing",
    description:
      "Mostly bouldering indoor but also outdoor. Both practicing and watching climbing competitions.",
    icon: Mountain,
    color: "bg-accent/20 dark:bg-accent/10",
    iconColor: "text-accent",
  }
];

export function Hobbies() {
  return (
    <section id="hobbies" className="scroll-mt-20 min-h-screen p-6 md:p-12 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-block bg-primary/10 px-6 py-2 rounded-full mb-4">
            <span className="text-primary">04</span>
          </div>
          <h2 className="text-4xl md:text-6xl mb-4">Hobbies & Interests</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            What I love to do outside of work
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hobbies.map((hobby, index) => {
            const Icon = hobby.icon;
            return (
              <motion.div
                key={hobby.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-card rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                <div
                  className={`${hobby.color} p-8 flex items-center justify-center h-32`}
                >
                  <Icon
                    className={`w-16 h-16 ${hobby.iconColor}`}
                    strokeWidth={1.5}
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl">{hobby.name}</h3>
                  <p className="text-muted-foreground">{hobby.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
