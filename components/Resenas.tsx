"use client";
import Nebula from "@/components/Nebula";

export default function Resenas() {
  const resenas = [
{ nombre: "mathiclipp", rango: "GUARDIAN", texto: "Un server muy bueno y con muchos eventos y minijuegos entretenidos como por ejemplo el de apostar. Me parece un buen server por su survival op que está muy entretenido.", estrellas: 5, modalidad: "Survival Custom" },
{ nombre: "el_polo", rango: "DESTRUCTOR", texto: "Es muy buen server la verdad llevo muy buen tiempo jugando y esta de lo mejor.", estrellas: 5, modalidad: "Survival Custom" },
    { nombre: "CrimsonWolf99", rango: "GUARDIAN", texto: "El casino y las apuestas son adictivos jaja. La economía está muy bien pensada. Ya llevo 200 horas y sigo descubriendo cosas nuevas.", estrellas: 5, modalidad: "Survival Custom" },
    { nombre: "NightFury2024", rango: "INMORTAL", texto: "Los eventos son épicos. Los bosses de las dungeons me volaron la cabeza la primera vez. Una comunidad increíble y un servidor premium.", estrellas: 5, modalidad: "Lifesteal" },
    { nombre: "IronPhoenix_", rango: "DESTRUCTOR", texto: "Vine por curiosidad y me quedé por la comunidad. El Battle Pass está muy bien hecho y siempre hay algo nuevo que conseguir.", estrellas: 5, modalidad: "Survival Custom" },
    { nombre: "VoidReaper__", rango: "GUARDIAN", texto: "La mejor experiencia Minecraft que he tenido en años. El equipo detrás del servidor se nota que le pone mucho amor. Excelente trabajo.", estrellas: 5, modalidad: "Lifesteal" },
  ];

  const rangoColor: Record<string, string> = {
    "INMORTAL": "#3b82f6",
    "DESTRUCTOR": "#ef4444",
    "GUARDIAN": "#f59e0b",
  };

  return (
    <section style={{backgroundColor: "#000", padding: "100px 20px", position: "relative"}}>
      <Nebula color1="#f59e0b" color2="#ef4444" />
      <style>{`
        .resena-card:hover { border-color: rgba(239,68,68,0.3) !important; transform: translateY(-6px) !important; }
        .resena-card { transition: all 0.4s ease !important; }
      `}</style>

      <div style={{position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, #f59e0b, transparent)"}} />

      <div style={{textAlign: "center", marginBottom: "80px"}}>
        <p style={{color: "#f59e0b", fontSize: "12px", letterSpacing: "6px", textTransform: "uppercase", fontWeight: "600", marginBottom: "16px"}}>— LO QUE DICEN LOS JUGADORES —</p>
        <h2 style={{fontSize: "clamp(36px, 6vw, 64px)", fontWeight: "900", color: "white", letterSpacing: "-2px", margin: 0}}>RESEÑAS</h2>
        <div style={{width: "80px", height: "2px", background: "linear-gradient(90deg, transparent, #f59e0b, transparent)", margin: "16px auto 0"}} />
      </div>

      <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", maxWidth: "1200px", margin: "0 auto"}}>
        {resenas.map((r) => (
          <div key={r.nombre} className="resena-card" style={{backgroundColor: "#080808", border: "1px solid #1a1a1a", borderRadius: "16px", padding: "32px 28px"}}>

            {/* Estrellas */}
            <div style={{marginBottom: "16px"}}>
              {"★★★★★".split("").map((s, i) => (
                <span key={i} style={{color: "#f59e0b", fontSize: "16px"}}>{s}</span>
              ))}
            </div>

            {/* Texto */}
            <p style={{color: "#9ca3af", fontSize: "14px", lineHeight: "1.7", marginBottom: "24px", fontStyle: "italic"}}>"{r.texto}"</p>

            {/* Divider */}
            <div style={{height: "1px", backgroundColor: "#1a1a1a", marginBottom: "20px"}} />

            {/* Usuario */}
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
              <div style={{display: "flex", alignItems: "center", gap: "12px"}}>
                <div style={{width: "40px", height: "40px", borderRadius: "8px", backgroundColor: "#1a1a1a", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px"}}>
                  🎮
                </div>
                <div>
                  <div style={{color: "white", fontWeight: "700", fontSize: "14px"}}>{r.nombre}</div>
                  <div style={{color: "#4b5563", fontSize: "12px"}}>{r.modalidad}</div>
                </div>
              </div>
              <span style={{backgroundColor: `${rangoColor[r.rango]}15`, border: `1px solid ${rangoColor[r.rango]}40`, color: rangoColor[r.rango], padding: "4px 12px", borderRadius: "999px", fontSize: "11px", fontWeight: "700", letterSpacing: "1px"}}>
                {r.rango}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}