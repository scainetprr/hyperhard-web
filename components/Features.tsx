"use client";

import type { CSSProperties } from "react";
import Nebula from "@/components/Nebula";

export default function Features() {
  const features = [
    { icono: "🏰", titulo: "Dungeons", descripcion: "Explora mazmorras épicas llenas de trampas, monstruos y loot legendario. Cada dungeon es único y desafiante.", color: "#ef4444" },
    { icono: "⚔", titulo: "PvP Zones", descripcion: "Zonas de combate extremo donde solo los más fuertes sobreviven. Gana recompensas únicas por dominar el campo de batalla.", color: "#3b82f6" },
    { icono: "🎰", titulo: "Casino", descripcion: "Apuesta tus riquezas en ruletas, slots y juegos de azar. La fortuna favorece a los valientes en HyperHard.", color: "#f59e0b" },
    { icono: "💎", titulo: "Armaduras OP", descripcion: "Consigue equipamiento progresivo con stats imposibles. Encantamientos custom que no encontrarás en ningún otro servidor.", color: "#8b5cf6" },
    { icono: "📜", titulo: "Battle Pass", descripcion: "Sistema de recompensas por temporadas. Completa misiones, sube de nivel y desbloquea ítems exclusivos.", color: "#10b981" },
    { icono: "💰", titulo: "Economía", descripcion: "Sistema económico completo con trabajos, tradeos, mercado y apuestas. Hazte rico o muere en el intento.", color: "#ef4444" },
    { icono: "🗺", titulo: "Minas", descripcion: "Minas personalizadas con recursos únicos y raros. Explora niveles más profundos para encontrar materiales legendarios.", color: "#3b82f6" },
    { icono: "🎭", titulo: "Eventos", descripcion: "Eventos especiales semanales con premios exclusivos. Torneos PvP, carreras de progresión y mucho más.", color: "#f59e0b" },
  ];

  return (
    <section style={{backgroundColor: "#000", padding: "100px 20px", position: "relative"}}>
      <Nebula color1="#3b82f6" color2="#8b5cf6" />
      <style>{`
        .feat-card:hover { border-color: var(--card-color) !important; box-shadow: 0 0 40px var(--card-glow) !important; transform: translateY(-6px) !important; }
        .feat-card { transition: all 0.3s ease !important; }
      `}</style>

      <div style={{position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, #3b82f6, transparent)"}} />

      <div style={{textAlign: "center", marginBottom: "80px"}}>
        <p style={{color: "#3b82f6", fontSize: "12px", letterSpacing: "6px", textTransform: "uppercase", fontWeight: "600", marginBottom: "16px"}}>— LO QUE NOS HACE ÚNICOS —</p>
        <h2 style={{fontSize: "clamp(36px, 6vw, 64px)", fontWeight: "900", color: "white", letterSpacing: "-2px", margin: 0}}>
          CARACTERÍSTICAS
        </h2>
        <div style={{width: "80px", height: "2px", background: "linear-gradient(90deg, transparent, #3b82f6, transparent)", margin: "16px auto 0"}} />
      </div>

      <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px", maxWidth: "1200px", margin: "0 auto"}}>
        {features.map((feature) => (
          <div
            key={feature.titulo}
            className="feat-card"
            style={{
              backgroundColor: "#111",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "24px",
              padding: "28px",
              position: "relative",
              overflow: "hidden",
              minHeight: "240px",
              boxShadow: "0 0 20px rgba(0,0,0,0.3)",
              borderColor: feature.color,
              ["--card-color"]: feature.color,
              ["--card-glow"]: `${feature.color}33`,
            } as CSSProperties}
          >
            <div style={{fontSize: "36px", marginBottom: "18px"}}>{feature.icono}</div>
            <h3 style={{color: "white", fontSize: "22px", margin: "0 0 12px", lineHeight: 1.1}}>{feature.titulo}</h3>
            <p style={{color: "#ddd", margin: 0, lineHeight: 1.8}}>{feature.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
