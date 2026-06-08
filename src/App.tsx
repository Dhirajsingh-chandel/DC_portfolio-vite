import { Navbar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Experience } from "@/sections/Experience";
import { Projects } from "@/sections/Projects";
import { AIExpertise } from "@/sections/AIExpertise";
import { Services } from "@/sections/Services";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <AIExpertise />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
