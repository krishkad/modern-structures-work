import About from "@/components/shared/about";
import Contact from "@/components/shared/contact";
import Hero from "@/components/shared/hero";
import Navbar from "@/components/shared/navbar";
import Projects from "@/components/shared/projects";

export default function Home() {
  return (
    <main className="w-full scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
