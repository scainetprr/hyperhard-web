"use client";
import Nebula from "@/components/Nebula";

export default function Comunidad() {
  const redes = [
    {
      nombre: "Discord",
      descripcion: "Únete a nuestra comunidad. Soporte, eventos, anuncios y mucho más.",
      emoji: "💬",
      color: "#5865f2",
      glow: "rgba(88,101,242,0.25)",
      url: "https://discord.hyperhard.space",
      cta: "Unirse al Discord",
      stats: "Comunidad activa"
    },
    {
      nombre: "YouTube",
      descripcion: "Trailers épicos, eventos grabados y contenido exclusivo del servidor.",
      emoji: "▶",
      color: "#ff0000",
      glow: "rgba(255,0,0,0.2)",
      url: "https://www.youtube.com/@hyperhardnetwork",
      cta: "Ver Canal",
      stats: "Videos épicos"
    },
    {
      nombre: "Instagram",
      descripcion: "Fotos, clips y actualizaciones del servidor en tiempo real.",
      emoji: "📸",
      color: "#e1306c",
      glow: "rgba(225,48,108,0.2)",
      url: "https://www.instagram.com/hyperhard_network/",
      cta: "Seguir",
      stats: "Actualizaciones"
    },
    {
      nombre: "X / Twitter",
      descripcion: "Noticias, sorteos y anuncios oficiales de HyperHard Network.",
      emoji: "𝕏",
      color: "#ffffff",
      glow: "rgba(255,255,255,0.1)",
      url: "https://x.com/HyperHardMC",
      cta: "Seguir en X",
      stats: "Noticias oficiales"
    },
  ];

  return (
    <section style={{backgroundColor: "#000", padding: "100px 20px", position: "relative"}}>
        <Nebula color1="#5865f2" color2="#ef4444" />
      <style>{`
        .social-card:hover { transform: translateY(-8px) !important; }
        .social-card { transition: all 0.4s ease !important; }
        .social-cta:hover { opacity: 0.8 !important; }
        .social-cta { transition: opacity 0.3s !important; }
      `}</style>

      <div style={{position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, #5865f2, transparent)"}} />

      <div style={{textAlign: "center", marginBottom: "80px"}}>
        <p style={{color: "#5865f2", fontSize: "12px", letterSpacing: "6px", textTransform: "uppercase", fontWeight: "600", marginBottom: "16px"}}>— FORMA PARTE DE ALGO GRANDE —</p>
        <h2 style={{fontSize: "clamp(36px, 6vw, 64px)", fontWeight: "900", color: "white", letterSpacing: "-2px", margin: 0}}>COMUNIDAD</h2>
        <div style={{width: "80px", height: "2px", background: "linear-gradient(90deg, transparent, #5865f2, transparent)", margin: "16px auto 0"}} />
        <p style={{color: "#4b5563", fontSize: "15px", marginTop: "16px"}}>Síguenos en todas las plataformas y mantente al día</p>
      </div>

      <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px", maxWidth: "1100px", margin: "0 auto"}}>
        {redes.map((red) => (
          <div key={red.nombre} className="social-card" style={{
            backgroundColor: "#080808",
            border: `1px solid ${red.color}20`,
            borderRadius: "16px",
            padding: "36px 28px",
            boxShadow: `0 0 40px ${red.glow}`,
            position: "relative",
            textAlign: "center"
          }}>
            <div style={{position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "40%", height: "1px", background: `linear-gradient(90deg, transparent, ${red.color}, transparent)`}} />

            <div style={{fontSize: "48px", marginBottom: "16px"}}>{red.emoji}</div>
            <h3 style={{fontSize: "20px", fontWeight: "800", color: "white", marginBottom: "8px"}}>{red.nombre}</h3>
            <p style={{color: "#4b5563", fontSize: "14px", lineHeight: "1.6", marginBottom: "8px"}}>{red.descripcion}</p>
            <p style={{color: red.color, fontSize: "12px", fontWeight: "600", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "24px"}}>{red.stats}</p>

            <a href={red.url} target="_blank" rel="noopener noreferrer" className="social-cta"
              style={{display: "block", backgroundColor: `${red.color}15`, border: `1px solid ${red.color}40`, color: red.color, padding: "12px", borderRadius: "8px", fontWeight: "700", fontSize: "13px", letterSpacing: "1px", textDecoration: "none"}}>
              {red.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}