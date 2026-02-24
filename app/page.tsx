import Navbar from "@/Components/navbar";
import Hero from "@/Components/hero";
import DNA from "@/Components/dna";
import Footer from "@/Components/footer";
import Projects from "@/Components/projects";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <DNA />
      <Projects />
      <Footer />
    </main>
  );
}
