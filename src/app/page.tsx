import About from "@/components/shared/about";
import Contact from "@/components/shared/contact";
import Footer from "@/components/shared/footer";
import Hero from "@/components/shared/hero";
import Navbar from "@/components/shared/navbar";
import Projects from "@/components/shared/projects";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
