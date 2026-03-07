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
      <div 
        className="bg-cover bg-center bg-no-repeat"
 style={{
    backgroundImage: "url(/bgMain.svg)",
    backgroundColor: "#e2e2e2", 
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}      >
        <DNA />
        <Projects />
      </div>
      <Footer />
    </main>
  );
}
