"use client";
import Nebula from "@/components/Nebula";

export default function Modalidades() {
  const modos = [
    {
      titulo: "Survival Custom",
      icono: "⚔",
      descripcion: "Experimenta el survival más hardcore con armaduras OP progresivas, encantamientos personalizados, dungeons épicos y una economía completamente personalizada.",
      features: ["Armaduras OP", "Encantamientos Custom", "Dungeons", "Economía", "Trabajos", "Battle Pass"],
      color: "#ef4444",
      glow: "rgba(239,68,68,0.3)"
    },
    {
      titulo: "Lifesteal",
      icono: "💀",
      descripcion: "El modo más brutal y adictivo. Roba corazones de tus enemigos al matarlos. Cada muerte cuenta. Solo los más fuertes sobreviven en este mundo sin piedad.",
      features: ["Roba Corazones", "PvP Extremo", "Kits", "Eventos PvP", "Apuestas", "Zonas PvP"],
      color: "#3b82f6",
      glow: "rgba(59,130,246,0.3)"
    }
  ];

  return (
    <section style={{backgroundColor: "#000", padding: "100px 20px", position: "relative", overflow: "hidden"}}>
      <Nebula color1="#ef4444" color2="#3b82f6" />
      <style>{`
        @keyframes cardFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        .modo-card:hover { transform: translateY(-12px) scale(1.02) !important; }
        .modo-card { transition: all 0.4s ease !important; }
        .feature-tag { transition: all 0.3s; }
        .feature-tag:hover { transform: scale(1.05); }
      `}</style>

      {/* Fondo decorativo */}
      <div style={{position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, #ef4444, transparent)"}} />

      {/* Título sección */}
      <div style={{textAlign: "center", marginBottom: "80px"}}>
        <p style={{color: "#ef4444", fontSize: "12px", letterSpacing: "6px", textTransform: "uppercase", fontWeight: "600", marginBottom: "16px"}}>— ELIGE TU DESTINO —</p>
        <h2 style={{fontSize: "clamp(36px, 6vw, 64px)", fontWeight: "900", color: "white", letterSpacing: "-2px", margin: 0}}>
          MODALIDADES
        </h2>
        <div style={{width: "80px", height: "2px", background: "linear-gradient(90deg, transparent, #ef4444, transparent)", margin: "16px auto 0"}} />
      </div>

      {/* Cards */}
      <div style={{display: "flex", gap: "32px", justifyContent: "center", flexWrap: "wrap", maxWidth: "1100px", margin: "0 auto"}}>
        {modos.map((modo) => (
          <div key={modo.titulo} className="modo-card" style={{
            backgroundColor: "#0a0a0a",
            border: `1px solid ${modo.color}30`,
            borderRadius: "16px",
            padding: "48px 40px",
            flex: "1",
            minWidth: "300px",
            maxWidth: "480px",
            position: "relative",
            boxShadow: `0 0 60px ${modo.glow}`,
            cursor: "default"
          }}>
            {/* Glow top */}
            <div style={{position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "60%", height: "1px", background: `linear-gradient(90deg, transparent, ${modo.color}, transparent)`}} />

            {/* Icono */}
            <div style={{fontSize: "56px", marginBottom: "24px"}}>{modo.icono}</div>

            {/* Titulo */}
            <h3 style={{fontSize: "28px", fontWeight: "900", color: "white", marginBottom: "16px", letterSpacing: "-1px"}}>{modo.titulo}</h3>

            {/* Descripcion */}
            <p style={{color: "#6b7280", fontSize: "15px", lineHeight: "1.7", marginBottom: "32px"}}>{modo.descripcion}</p>

            {/* Features */}
            <div style={{display: "flex", flexWrap: "wrap", gap: "8px"}}>
              {modo.features.map(f => (
                <span key={f} className="feature-tag" style={{
                  backgroundColor: `${modo.color}15`,
                  border: `1px solid ${modo.color}40`,
                  color: modo.color,
                  padding: "6px 14px",
                  borderRadius: "999px",
                  fontSize: "12px",
                  fontWeight: "600",
                  letterSpacing: "1px"
                }}>{f}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}