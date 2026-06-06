import Navbar from "@/components/Navbar";
import SurvivalHero from "@/components/SurvivalHero";
import Features from "@/components/Features";
import Dungeons from "@/components/Dungeons";
import Footer from "@/components/Footer";

export default function SurvivalPage() {
  return (
    <main style={{ backgroundColor: "#000" }}>
      <Navbar />
      <div style={{paddingTop: "70px"}}>
        <SurvivalHero />
        <Features />
        <Dungeons />
      </div>
      <Footer />
    </main>
  );
}
