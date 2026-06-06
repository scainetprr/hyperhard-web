import Navbar from "@/components/Navbar";
import Modalidades from "@/components/Modalidades";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Dungeons from "@/components/Dungeons";

export default function ModalidadesPage() {
  return (
    <main style={{backgroundColor: "#000"}}>
      <Navbar />
      <div style={{paddingTop: "70px"}}>
        <Modalidades />
        <Features />
        <Dungeons />
      </div>
      <Footer />
    </main>
  );
}