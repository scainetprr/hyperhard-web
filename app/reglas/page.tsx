import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Nebula from "@/components/Nebula";

export default function ReglasPage() {
  const reglas = [
    { categoria: "COMPORTAMIENTO", color: "#ef4444", items: [
      "Está prohibido el uso de hacks, cheats o cualquier modificación que dé ventaja injusta.",
      "No se permite el spam, flood o publicidad de otros servidores en el chat.",
      "Respeta a todos los jugadores y al staff en todo momento.",
      "Está prohibido el acoso, insultos o discriminación de cualquier tipo.",
      "No se permite la suplantación de identidad de staff u otros jugadores.",
    ]},
    { categoria: "JUEGO LIMPIO", color: "#3b82f6", items: [
      "Prohibido el uso de bugs o exploits para obtener ventaja. Repórtalos al staff.",
      "No se permite el uso de macros o autoclickers.",
      "Está prohibido el trapping o trampas que destruyan el spawn o zonas seguras.",
      "No se permite el griefing en zonas protegidas.",
      "Los tradeos deben ser justos. El staff no se responsabiliza por malos tratos.",
    ]},
    { categoria: "CHAT Y COMUNICACIÓN", color: "#f59e0b", items: [
      "Prohibido el lenguaje ofensivo, racista o xenófobo.",
      "No compartas información personal propia ni de otros jugadores.",
      "Está prohibida la publicidad no autorizada.",
      "El idioma principal del servidor es el español.",
      "Reporta comportamientos inapropiados al staff mediante Discord.",
    ]},
    { categoria: "SANCIONES", color: "#8b5cf6", items: [
      "Las faltas leves resultan en advertencia o mute temporal.",
      "Las faltas graves resultan en ban temporal o permanente.",
      "Las apelaciones se realizan exclusivamente en nuestro Discord.",
      "El staff tiene la última palabra en todas las decisiones.",
      "El desconocimiento de las reglas no exime de su cumplimiento.",
    ]},
  ];

  return (
    <main style={{backgroundColor: "#000"}}>
      <Navbar />
      <section style={{padding: "140px 20px 100px", maxWidth: "900px", margin: "0 auto"}}>
                  <Nebula color1="#ef4444" color2="#3b82f6" />
        <div style={{textAlign: "center", marginBottom: "80px"}}>
          <p style={{color: "#ef4444", fontSize: "12px", letterSpacing: "6px", textTransform: "uppercase", fontWeight: "600", marginBottom: "16px"}}>— NORMAS DEL SERVIDOR —</p>
          <h1 style={{fontSize: "clamp(40px, 7vw, 72px)", fontWeight: "900", color: "white", letterSpacing: "-3px", margin: 0}}>REGLAS</h1>
          <div style={{width: "80px", height: "2px", background: "linear-gradient(90deg, transparent, #ef4444, transparent)", margin: "16px auto 0"}} />
          <p style={{color: "#4b5563", fontSize: "15px", marginTop: "16px"}}>El incumplimiento de estas reglas puede resultar en sanciones permanentes.</p>
        </div>

        <div style={{display: "flex", flexDirection: "column", gap: "32px"}}>
          {reglas.map((cat) => (
            <div key={cat.categoria} style={{backgroundColor: "#080808", border: `1px solid ${cat.color}20`, borderRadius: "16px", padding: "36px", position: "relative"}}>
              <div style={{position: "absolute", top: 0, left: "32px", width: "60px", height: "2px", background: cat.color}} />
              <h3 style={{color: cat.color, fontSize: "13px", fontWeight: "700", letterSpacing: "4px", marginBottom: "24px"}}>{cat.categoria}</h3>
              <div style={{display: "flex", flexDirection: "column", gap: "14px"}}>
                {cat.items.map((regla, i) => (
                  <div key={i} style={{display: "flex", gap: "14px", alignItems: "flex-start"}}>
                    <span style={{color: cat.color, fontWeight: "700", fontSize: "14px", flexShrink: 0, marginTop: "1px"}}>{i + 1}.</span>
                    <span style={{color: "#9ca3af", fontSize: "14px", lineHeight: "1.6"}}>{regla}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}