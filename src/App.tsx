import { BackgroundAnimation } from "./components/BackgroundAnimation";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Hobbies } from "./components/Hobbies";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen">
        <BackgroundAnimation />
        <Navigation />
        <main className="pt-20">
          <Hero />
          <Projects />
          <Education />
          <Hobbies />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
