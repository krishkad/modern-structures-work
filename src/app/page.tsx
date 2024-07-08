"use client"
import About from "@/components/shared/about";
import Contact from "@/components/shared/contact";
import Footer from "@/components/shared/footer";
import Hero from "@/components/shared/hero";
import Loader from "@/components/shared/loader";
import Navbar from "@/components/shared/navbar";
import Projects from "@/components/shared/projects";
import { cn } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [load, setLoad] = useState(true);
  return (
    <main className={cn("w-full scroll-smooth relative", load && "overflow-hidden h-screen")}>
      <AnimatePresence>
        {load && <Loader load={load} setLoad={setLoad} />}
      </AnimatePresence>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
