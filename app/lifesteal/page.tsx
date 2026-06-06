import Navbar from "@/components/Navbar";
import Lifesteal from "@/components/Lifesteal";
import Footer from "@/components/Footer";

export default function LifestealPage() {
  return (
    <main style={{backgroundColor: "#000"}}>
      <Navbar />
      <div style={{paddingTop: "70px"}}>
        <Lifesteal />
      </div>
      <Footer />
    </main>
  );
}
