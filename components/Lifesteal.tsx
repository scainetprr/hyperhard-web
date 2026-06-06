"use client";

import { useState } from "react";
import Nebula from "@/components/Nebula";

export default function Lifesteal() {
  const [hovered, setHovered] = useState<number | null>(null);

  const features = [
    { icono: "💀", titulo: "Sistema de Vidas", descripcion: "Si pierdes todos tus corazones serás baneado 12 horas. Cada muerte cuenta. Juega con cuidado o pierde todo.", color: "#ef4444" },
    { icono: "⚔", titulo: "PvP por Zonas", descripcion: "Zonas especializadas para cada estilo: Mazopvp, Clásico, Crystal y Combinado. Domina cada una.", color: "#3b82f6" },
    { icono: "⛏", titulo: "Minas con PvP", descripcion: "Minas creadas con plugins avanzados donde el PvP está activo. Farmea recursos bajo el riesgo de ser atacado.", color: "#f59e0b" },
    { icono: "🗺", titulo: "Items Ocultos", descripcion: "Explora el mapa en busca de items secretos escondidos. Los más curiosos serán recompensados.", color: "#8b5cf6" },
    { icono: "🏆", titulo: "KoTH", descripcion: "Controla la colina y defiéndela del resto de jugadores para ganar recompensas exclusivas y gloria.", color: "#ef4444" },
    { icono: "📦", titulo: "Cajas y Tops", descripcion: "Abre cajas con loot exclusivo y compite en los tops para demostrar quién domina el servidor.", color: "#10b981" },
    { icono: "📜", titulo: "Misiones", descripcion: "Completa misiones diarias y semanales para obtener recompensas únicas y subir en el ranking.", color: "#3b82f6" },
    { icono: "🎖", titulo: "Pase de Batalla", descripcion: "Sistema de progresión por temporadas con recompensas exclusivas al completar cada nivel.", color: "#f59e0b" },
    { icono: "📈", titulo: "Rankup", descripcion: "Sube de rango ganando experiencia y demostrando tu habilidad. Cada rango desbloquea nuevos beneficios.", color: "#8b5cf6" },
  ];

  const pvpZones = [
    { nombre: "Mazopvp", descripcion: "Combate cuerpo a cuerpo con mazas. El más brutal y directo.", color: "#ef4444", icono: "🪓" },
    { nombre: "Clásico", descripcion: "PvP tradicional con espada y arco. La prueba de habilidad pura.", color: "#3b82f6", icono: "⚔" },
    { nombre: "Crystal", descripcion: "Combate con cristales de end. El más técnico y explosivo.", color: "#8b5cf6", icono: "💎" },
    { nombre: "Combinado", descripcion: "Mezcla de todos los estilos. Solo los más completos sobreviven.", color: "#f59e0b", icono: "🔥" },
  ];

  return (
    <>
      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes heartbeat { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.15); } }
        @keyframes borderPulse { 0%, 100% { box-shadow: 0 0 30px rgba(59,130,246,0.4); } 50% { box-shadow: 0 0 80px rgba(59,130,246,0.8); } }
        @keyframes bounce { 0%, 100% { transform: translateX(-50%) translateY(0); } 50% { transform: translateX(-50%) translateY(10px); } }
        .hero-fade { animation: fadeUp 1s ease forwards; }
        .heart-icon { animation: heartbeat 1.5s ease-in-out infinite; display: inline-block; }
        .ls-btn { animation: borderPulse 2s ease-in-out infinite; }
        .ls-btn:hover { transform: scale(1.07) translateY(-2px) !important; transition: transform 0.3s ease !important; }
        .feat-card:hover { transform: translateY(-8px) scale(1.02) !important; border-color: rgba(139,92,246,0.5) !important; }
        .feat-card { transition: all 0.35s ease !important; }
        .pvp-card:hover { transform: translateY(-6px) !important; }
        .pvp-card { transition: all 0.3s ease !important; }
        .cta-btn:hover { opacity: 0.85 !important; transform: scale(1.04) !important; }
        .cta-btn { transition: all 0.3s ease !important; }
      `}</style>

      {/* HERO */}
      <section style={{minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", background: "linear-gradient(to bottom, #000 0%, #050010 50%, #000 100%)"}}>
        <Nebula color1="#3b82f6" color2="#8b5cf6" />
        <div style={{position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, #3b82f6, transparent)"}} />

        <div className="hero-fade" style={{textAlign: "center", position: "relative", zIndex: 10, padding: "120px 20px 80px"}}>
          <div style={{display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "rgba(29,78,216,0.2)", border: "1px solid rgba(59,130,246,0.3)", borderRadius: "999px", padding: "8px 20px", marginBottom: "32px"}}>
            <span className="heart-icon">❤</span>
            <span style={{color: "#93c5fd", fontSize: "12px", fontWeight: "600", letterSpacing: "3px", textTransform: "uppercase"}}>Lifesteal Mode</span>
          </div>

          <h1 style={{fontSize: "clamp(50px, 11vw, 120px)", fontWeight: "900", letterSpacing: "-4px", margin: "0 0 16px 0", lineHeight: 0.95}}>
            <span style={{color: "white"}}>LIFE</span>
            <span style={{background: "linear-gradient(135deg, #3b82f6, #1d4ed8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>STEAL</span>
          </h1>

          <div style={{width: "120px", height: "2px", background: "linear-gradient(90deg, transparent, #3b82f6, transparent)", margin: "20px auto 28px"}} />

          <p style={{color: "#6b7280", fontSize: "clamp(14px, 2vw, 18px)", marginBottom: "16px", letterSpacing: "4px", textTransform: "uppercase", fontWeight: "300"}}>
            Mata · Roba Corazones · Domina
          </p>
          <p style={{color: "#4b5563", fontSize: "15px", maxWidth: "600px", margin: "0 auto 48px", lineHeight: "1.7"}}>
            El modo más brutal de HyperHard. Roba corazones de tus enemigos al matarlos. Si pierdes todos los tuyos, serás baneado <span style={{color: "#ef4444", fontWeight: "700"}}>12 horas</span>. Cada muerte cuenta.
          </p>

          <div style={{display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginBottom: "64px"}}>
            <button
              onClick={() => { try { navigator.clipboard.writeText("mc.hyperhard.space"); } catch { const el = document.createElement("textarea"); el.value = "mc.hyperhard.space"; document.body.appendChild(el); el.select(); document.execCommand("copy"); document.body.removeChild(el); } }}
              className="ls-btn"
              style={{backgroundColor: "#1d4ed8", color: "white", padding: "16px 40px", fontSize: "16px", fontWeight: "700", borderRadius: "10px", border: "none", cursor: "pointer", letterSpacing: "1px"}}>
              💀 Entrar al Servidor
            </button>
            <a href="https://hyperhard.tebex.io/" target="_blank" rel="noopener noreferrer" className="cta-btn"
              style={{border: "1px solid rgba(59,130,246,0.5)", color: "#93c5fd", padding: "16px 40px", fontSize: "16px", fontWeight: "700", borderRadius: "10px", textDecoration: "none", letterSpacing: "1px", display: "inline-block"}}>
              🛒 Tienda Oficial
            </a>
          </div>

          <div style={{display: "flex", gap: "48px", justifyContent: "center", flexWrap: "wrap"}}>
            {[
              {label: "Ban si mueres", value: "12h"},
              {label: "Zonas PvP", value: "4"},
              {label: "Modos de juego", value: "∞"},
            ].map(stat => (
              <div key={stat.label} style={{textAlign: "center"}}>
                <div style={{fontSize: "32px", fontWeight: "900", color: "#3b82f6", textShadow: "0 0 20px rgba(59,130,246,0.5)"}}>{stat.value}</div>
                <div style={{fontSize: "11px", color: "#4b5563", letterSpacing: "2px", textTransform: "uppercase", marginTop: "6px"}}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{position: "absolute", bottom: "32px", left: "50%", color: "#374151", fontSize: "24px", animation: "bounce 2s infinite"}}>↓</div>
      </section>

      {/* ZONAS PVP */}
      <section style={{position: "relative", overflow: "hidden", background: "linear-gradient(to bottom, #000 0%, #050510 50%, #000 100%)", padding: "100px 20px"}}>
        <div style={{position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, #3b82f6, transparent)"}} />

        <div style={{textAlign: "center", marginBottom: "80px", position: "relative", zIndex: 1}}>
          <p style={{color: "#3b82f6", fontSize: "12px", letterSpacing: "6px", textTransform: "uppercase", fontWeight: "600", marginBottom: "16px"}}>— ELIGE TU ESTILO —</p>
          <h2 style={{fontSize: "clamp(36px, 6vw, 64px)", fontWeight: "900", color: "white", letterSpacing: "-2px", margin: 0}}>ZONAS DE PVP</h2>
          <div style={{width: "80px", height: "2px", background: "linear-gradient(90deg, transparent, #3b82f6, transparent)", margin: "16px auto 0"}} />
        </div>

        <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px", maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1}}>
          {pvpZones.map((zone, i) => (
            <div key={zone.nombre} className="pvp-card"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{backgroundColor: hovered === i ? "#0f0f0f" : "#080808", border: `1px solid ${hovered === i ? zone.color + "60" : zone.color + "25"}`, borderRadius: "16px", padding: "36px 28px", textAlign: "center", position: "relative", overflow: "hidden", boxShadow: hovered === i ? `0 0 60px ${zone.color}25` : "none"}}>
              <div style={{position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "60%", height: "1px", background: `linear-gradient(90deg, transparent, ${zone.color}, transparent)`}} />
              <div style={{fontSize: "48px", marginBottom: "16px"}}>{zone.icono}</div>
              <h3 style={{fontSize: "20px", fontWeight: "900", color: zone.color, marginBottom: "12px", letterSpacing: "1px"}}>{zone.nombre}</h3>
              <p style={{color: "#4b5563", fontSize: "14px", lineHeight: "1.6", margin: 0}}>{zone.descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CARACTERÍSTICAS */}
      <section style={{position: "relative", overflow: "hidden", background: "linear-gradient(to bottom, #000 0%, #050505 50%, #000 100%)", padding: "100px 20px"}}>
        <div style={{position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, #8b5cf6, transparent)"}} />

        <div style={{textAlign: "center", marginBottom: "80px", position: "relative", zIndex: 1}}>
          <p style={{color: "#8b5cf6", fontSize: "12px", letterSpacing: "6px", textTransform: "uppercase", fontWeight: "600", marginBottom: "16px"}}>— TODO LO QUE OFRECE —</p>
          <h2 style={{fontSize: "clamp(36px, 6vw, 64px)", fontWeight: "900", color: "white", letterSpacing: "-2px", margin: 0}}>CARACTERÍSTICAS</h2>
          <div style={{width: "80px", height: "2px", background: "linear-gradient(90deg, transparent, #8b5cf6, transparent)", margin: "16px auto 0"}} />
        </div>

        <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1}}>
          {features.map((f) => (
            <div key={f.titulo} className="feat-card" style={{backgroundColor: "#080808", border: `1px solid ${f.color}25`, borderRadius: "16px", padding: "32px 28px", position: "relative", overflow: "hidden"}}>
              <div style={{position: "absolute", top: 0, left: "24px", width: "40px", height: "2px", background: f.color}} />
              <div style={{position: "absolute", inset: 0, background: `radial-gradient(circle at top right, ${f.color}08, transparent 60%)`, pointerEvents: "none"}} />
              <div style={{fontSize: "36px", marginBottom: "16px"}}>{f.icono}</div>
              <h3 style={{fontSize: "17px", fontWeight: "800", color: "white", marginBottom: "10px"}}>{f.titulo}</h3>
              <p style={{color: "#4b5563", fontSize: "14px", lineHeight: "1.7", margin: 0}}>{f.descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{position: "relative", overflow: "hidden", backgroundColor: "#000", padding: "80px 20px"}}>
        <div style={{maxWidth: "700px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1}}>
          <h2 style={{fontSize: "clamp(32px, 5vw, 56px)", fontWeight: "900", color: "white", marginBottom: "16px", letterSpacing: "-2px"}}>
            ¿Listo para <span style={{background: "linear-gradient(135deg, #3b82f6, #1d4ed8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>sobrevivir?</span>
          </h2>
          <p style={{color: "#6b7280", fontSize: "16px", marginBottom: "40px", lineHeight: "1.7"}}>
            Únete a HyperHard Network y demuestra que tienes lo necesario para dominar el Lifesteal.
          </p>
          <div style={{display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap"}}>
            <a href="https://discord.hyperhard.space" target="_blank" rel="noopener noreferrer" className="cta-btn"
              style={{backgroundColor: "#1d4ed8", color: "white", padding: "14px 36px", borderRadius: "8px", fontWeight: "700", fontSize: "15px", textDecoration: "none", letterSpacing: "1px", boxShadow: "0 0 30px rgba(59,130,246,0.4)"}}>
              💬 Unirse al Discord
            </a>
            <a href="https://hyperhard.tebex.io/" target="_blank" rel="noopener noreferrer" className="cta-btn"
              style={{border: "1px solid rgba(59,130,246,0.4)", color: "#93c5fd", padding: "14px 36px", borderRadius: "8px", fontWeight: "700", fontSize: "15px", textDecoration: "none", letterSpacing: "1px"}}>
              🛒 Ver Tienda
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
