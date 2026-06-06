"use client";

import { useState } from "react";
import Nebula from "@/components/Nebula";

export default function SurvivalGuide() {
  const [copied, setCopied] = useState(false);

  const copyIP = () => {
    try {
      navigator.clipboard.writeText("mc.hyperhard.space");
    } catch {
      const el = document.createElement("textarea");
      el.value = "mc.hyperhard.space";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const steps = [
    {
      num: "01",
      title: "Conéctate al servidor",
      desc: 'Abre Minecraft Java Edition (1.8 - 1.21) y añade la IP "mc.hyperhard.space" en Multiplayer > Add Server. Dale a "Join Server" y listo.',
    },
    {
      num: "02",
      title: "Elige tu clase",
      desc: "Al entrar allobby, usa el comando /clase para elegir entre guerrero, minero o explorador. Cada clase tiene habilidades y bonuses únicos.",
    },
    {
      num: "03",
      title: "Explora y recolecta",
      desc: "Sal del lobby y comienza a explorar el mundo. Recolecta recursos, arma tu equipo y prepárate para enfrentar las primeras mazmorras.",
    },
    {
      num: "04",
      title: "Enfréntate a dungeons",
      desc: "Usa /dungeon para acceder a las mazmorras. Cada una tiene mobs custom, jefes finales y recompensas que no conseguirás en ningún otro lado.",
    },
    {
      num: "05",
      title: "Mejora tu equipo",
      desc: "Con el loot que obtengas, forja armaduras OP, desbloquea encantamientos custom y escala de nivel para enfrentar dungeons más difíciles.",
    },
    {
      num: "06",
      title: "Domina la economía",
      desc: "Usa /casino para apostar, /trade para intercambiar con otros jugadores y /battlepass para completar misiones semanales con recompensas exclusivas.",
    },
  ];

  return (
    <section style={{ backgroundColor: "#000", padding: "100px 20px", position: "relative" }}>
      <Nebula color1="#ef4444" color2="#7f1d1d" />

      <style>{`
        .guide-step:hover { border-color: #ef4444 !important; box-shadow: 0 0 40px rgba(239,68,68,0.15) !important; transform: translateY(-4px) !important; }
        .guide-step { transition: all 0.3s ease !important; }
        .guide-num { font-size: 48px; font-weight: 900; color: rgba(239,68,68,0.12); line-height: 1; }
        .guide-intro { max-width: 800px; margin: 0 auto; text-align: center; }
        .guide-intro h2 { font-size: clamp(28px, 4vw, 42px); font-weight: 800; color: white; margin: 0 0 20px; letter-spacing: -1px; }
        .guide-intro p { color: #9ca3af; font-size: 17px; line-height: 1.8; max-width: 700px; margin: 0 auto 60px; }
        .guide-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; max-width: 1000px; margin: 0 auto; }
        .step-title { color: white; font-size: 18px; font-weight: 700; margin: 0 0 8px; }
        .step-desc { color: #9ca3af; font-size: 14px; line-height: 1.7; margin: 0; }
        .step-num { color: #ef4444; font-size: 12px; font-weight: 700; letter-spacing: 3px; margin-bottom: 8px; }
      `}</style>

      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, #ef4444, transparent)" }} />

      <div className="guide-intro">
        <p style={{ color: "#ef4444", fontSize: "12px", letterSpacing: "6px", textTransform: "uppercase", fontWeight: "600", marginBottom: "16px" }}>
          — COMO EMPEZAR —
        </p>
        <h2>Tu aventura comienza aquí</h2>
        <p>
          HyperHard Survival no es un survival común. Aquí encontrarás dungeons épicos con mobs custom, armaduras OP con encantamientos imposibles, un sistema económico completo y eventos que cambiarán la forma en que juegas Minecraft. Sigue estos pasos para empezar.
        </p>
      </div>

      <div className="guide-grid">
        {steps.map((step) => (
          <div
            key={step.num}
            className="guide-step"
            style={{
              backgroundColor: "#0a0a0a",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "16px",
              padding: "28px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div className="guide-num">{step.num}</div>
            <div className="step-title">{step.title}</div>
            <p className="step-desc">{step.desc}</p>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "60px" }}>
        <button
          onClick={copyIP}
          style={{
            backgroundColor: "#dc2626",
            color: "white",
            padding: "16px 40px",
            fontSize: "16px",
            fontWeight: "700",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
            letterSpacing: "1px",
            transition: "all 0.3s ease",
          }}
        >
          {copied ? "✓ IP Copiada!" : "⚔ Unirme ahora — mc.hyperhard.space"}
        </button>
      </div>
    </section>
  );
}
