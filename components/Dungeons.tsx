"use client";

import { motion } from "framer-motion";
import Nebula from "@/components/Nebula";

export default function Dungeons() {
  const cards = [
    { titulo: "Dungeons", icono: "🔥", descripcion: "Explora estructuras peligrosas llenas de mobs custom, trampas y loot legendario.", color: "#ef4444" },
    { titulo: "Bosses", icono: "☠", descripcion: "Enfréntate a bosses gigantes con habilidades especiales y recompensas únicas.", color: "#991b1b" },
    { titulo: "Encantamientos Custom", icono: "✨", descripcion: "Desbloquea habilidades especiales, efectos únicos y encantamientos imposibles.", color: "#3b82f6" },
    { titulo: "Armaduras OP", icono: "🛡", descripcion: "Obtén sets extremadamente poderosos con estadísticas superiores y habilidades especiales.", color: "#dc2626" },
    { titulo: "Casino & Apuestas", icono: "🎰", descripcion: "Apuesta dinero del juego, participa en ruletas y gana recompensas increíbles.", color: "#f59e0b" },
    { titulo: "BattlePass", icono: "🏆", descripcion: "Completa misiones, sube niveles y desbloquea recompensas exclusivas cada temporada.", color: "#8b5cf6" },
  ];

  return (
    <section style={{position: "relative", overflow: "hidden", background: "linear-gradient(to bottom, #080808 0%, #0d0505 50%, #080808 100%)", padding: "120px 20px"}}>
      <style>{`
        .dungeon-card:hover { transform: translateY(-10px) scale(1.02) !important; box-shadow: 0 0 80px var(--card-glow) !important; }
        .dungeon-card { transition: all 0.35s ease !important; }
      `}</style>

      <Nebula color1="#ef4444" color2="#3b82f6" />

      <div style={{position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, #ef4444, transparent)"}} />
      <div style={{position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, #3b82f6, transparent)"}} />

      <div style={{textAlign: "center", marginBottom: "80px", position: "relative", zIndex: 1}}>
        <p style={{color: "#ef4444", fontSize: "12px", letterSpacing: "6px", textTransform: "uppercase", fontWeight: "700", marginBottom: "16px"}}>— SURVIVAL CUSTOM —</p>
        <h2 style={{fontSize: "clamp(40px, 6vw, 72px)", fontWeight: "900", color: "white", margin: 0, letterSpacing: "-2px"}}>SURVIVAL EXPERIENCE</h2>
        <div style={{width: "80px", height: "2px", background: "linear-gradient(90deg, transparent, #ef4444, transparent)", margin: "16px auto 0"}} />
        <p style={{color: "#6b7280", maxWidth: "700px", margin: "24px auto 0", lineHeight: "1.8", fontSize: "16px"}}>
          Enfréntate a criaturas gigantescas, conquista dungeons infernales y consigue loot imposible dentro de HyperHard Network.
        </p>
      </div>

      <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px", maxWidth: "1300px", margin: "0 auto", position: "relative", zIndex: 1}}>
        {cards.map((card, i) => (
          <motion.div
            key={card.titulo}
            className="dungeon-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "24px",
              padding: "40px",
              background: "linear-gradient(180deg, rgba(22,22,22,0.97) 0%, rgba(10,10,10,0.99) 100%)",
              border: `1px solid ${card.color}40`,
              boxShadow: `0 0 40px ${card.color}15`,
              ["--card-glow" as any]: `${card.color}30`,
            }}
          >
            <div style={{position: "absolute", inset: 0, background: `radial-gradient(circle at top, ${card.color}18, transparent 65%)`, pointerEvents: "none"}} />
            <div style={{position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "50%", height: "1px", background: `linear-gradient(90deg, transparent, ${card.color}, transparent)`}} />
            <div style={{fontSize: "42px", marginBottom: "20px"}}>{card.icono}</div>
            <h3 style={{color: "white", fontSize: "22px", fontWeight: "800", marginBottom: "12px"}}>{card.titulo}</h3>
            <p style={{color: "#6b7280", lineHeight: "1.8", fontSize: "14px", margin: 0}}>{card.descripcion}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}