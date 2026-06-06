"use client";
import Nebula from "@/components/Nebula";
import { useState } from "react";

export default function Staff() {
  const [hovered, setHovered] = useState<number | null>(null);

  const miembros = [
    { nombre: "scainetprr_YT", rol: "Fundador", tags: ["Fundador", "Configurador", "Builder", "Desarrollador"], color: "#ef4444", glow: "rgba(239,68,68,0.2)", icono: "👑", descripcion: "Creador y cerebro detrás de HyperHard Network. Lleva el servidor desde sus inicios con pasión y dedicación total." },
    { nombre: "HadesAgogo", rol: "Desarrollador", tags: ["Desarrollador"], color: "#3b82f6", glow: "rgba(59,130,246,0.2)", icono: "⚙", descripcion: "Responsable del desarrollo técnico del servidor. Hace posible los sistemas más complejos de HyperHard." },
    { nombre: "Nelmo1226", rol: "CEO & Builder", tags: ["Builder", "CEO"], color: "#f59e0b", glow: "rgba(245,158,11,0.2)", icono: "🏗", descripcion: "Construye los mundos y estructuras épicas que hacen de HyperHard un servidor visualmente increíble." },
  ];

  return (
    <section style={{position: "relative", overflow: "hidden", background: "linear-gradient(to bottom, #000 0%, #05050a 50%, #000 100%)", padding: "100px 20px"}}>
      <style>{`
        .staff-card { transition: all 0.4s ease !important; }
        .tag { transition: all 0.3s !important; }
        .tag:hover { transform: scale(1.08) !important; }
      `}</style>

      <div style={{position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, #3b82f6, transparent)"}} />
      <div style={{position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, #3b82f6, transparent)"}} />
      <div style={{position: "absolute", top: "-100px", right: "-100px", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)", pointerEvents: "none"}} />
      <div style={{position: "absolute", bottom: "-100px", left: "-100px", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(239,68,68,0.05) 0%, transparent 70%)", pointerEvents: "none"}} />

      <div style={{textAlign: "center", marginBottom: "80px", position: "relative", zIndex: 1}}>
        <p style={{color: "#3b82f6", fontSize: "12px", letterSpacing: "6px", textTransform: "uppercase", fontWeight: "600", marginBottom: "16px"}}>— DETRÁS DEL SERVIDOR —</p>
        <h2 style={{fontSize: "clamp(36px, 6vw, 64px)", fontWeight: "900", color: "white", letterSpacing: "-2px", margin: 0}}>NUESTRO STAFF</h2>
        <div style={{width: "80px", height: "2px", background: "linear-gradient(90deg, transparent, #3b82f6, transparent)", margin: "16px auto 0"}} />
        <p style={{color: "#4b5563", fontSize: "15px", marginTop: "16px"}}>El equipo que hace posible HyperHard Network</p>
      </div>

      <div style={{display: "flex", gap: "32px", justifyContent: "center", flexWrap: "wrap", maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1}}>
        {miembros.map((m, i) => (
          <div key={m.nombre} className="staff-card"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: hovered === i ? "linear-gradient(180deg, #0f0f0f 0%, #080808 100%)" : "#080808",
              border: `1px solid ${hovered === i ? m.color + "60" : m.color + "20"}`,
              borderRadius: "20px",
              padding: "48px 36px",
              flex: "1",
              minWidth: "260px",
              maxWidth: "320px",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
              boxShadow: hovered === i ? `0 0 80px ${m.glow}` : `0 0 30px ${m.glow}`,
              transform: hovered === i ? "translateY(-12px) scale(1.02)" : "translateY(0) scale(1)",
            }}>

            <div style={{position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "60%", height: "1px", background: `linear-gradient(90deg, transparent, ${m.color}, transparent)`}} />
            <div style={{position: "absolute", inset: 0, background: `radial-gradient(circle at top, ${m.color}08, transparent 60%)`, pointerEvents: "none"}} />
            {hovered === i && <div style={{position: "absolute", inset: 0, background: `radial-gradient(circle at center, ${m.color}05, transparent 70%)`, pointerEvents: "none"}} />}

            <div style={{width: "80px", height: "80px", borderRadius: "50%", backgroundColor: `${m.color}15`, border: `2px solid ${m.color}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "36px", margin: "0 auto 24px", boxShadow: hovered === i ? `0 0 30px ${m.color}40` : "none", transition: "all 0.4s ease"}}>
              {m.icono}
            </div>

            <h3 style={{fontSize: "20px", fontWeight: "900", color: "white", marginBottom: "6px"}}>{m.nombre}</h3>
            <p style={{color: m.color, fontSize: "13px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px"}}>{m.rol}</p>
            <p style={{color: "#4b5563", fontSize: "14px", lineHeight: "1.6", marginBottom: "24px"}}>{m.descripcion}</p>

            <div style={{display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center"}}>
              {m.tags.map(tag => (
                <span key={tag} className="tag" style={{backgroundColor: `${m.color}15`, border: `1px solid ${m.color}40`, color: m.color, padding: "4px 12px", borderRadius: "999px", fontSize: "11px", fontWeight: "700", letterSpacing: "1px"}}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
