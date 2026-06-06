import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Introduccion from "@/components/Introduccion";
import Stats from "@/components/Stats";
import Staff from "@/components/Staff";
import Tienda from "@/components/Tienda";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{backgroundColor: "#000"}}>
      <Navbar />
      <HeroSection />
      <Introduccion />
      <Stats />
      <Staff />
      <Tienda />
      <FAQ />
      <Footer />
    </main>
  );
}