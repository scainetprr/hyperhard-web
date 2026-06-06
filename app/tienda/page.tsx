import Navbar from "@/components/Navbar";
import Tienda from "@/components/Tienda";
import Footer from "@/components/Footer";

export default function TiendaPage() {
  return (
    <main style={{backgroundColor: "#000"}}>
      <Navbar />
      <div style={{paddingTop: "70px"}}>
        <Tienda />
      </div>
      <Footer />
    </main>
  );
}