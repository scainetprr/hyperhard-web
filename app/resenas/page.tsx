import Navbar from "@/components/Navbar";
import Resenas from "@/components/Resenas";
import Footer from "@/components/Footer";

export default function ResenasPage() {
  return (
    <main style={{backgroundColor: "#000"}}>
      <Navbar />
      <div style={{paddingTop: "70px"}}>
        <Resenas />
      </div>
      <Footer />
    </main>
  );
}