import Navbar from "@/components/Navbar";
import Comunidad from "@/components/Comunidad";
import Footer from "@/components/Footer";

export default function ComunidadPage() {
  return (
    <main style={{backgroundColor: "#000"}}>
      <Navbar />
      <div style={{paddingTop: "70px"}}>
        <Comunidad />
      </div>
      <Footer />
    </main>
  );
}