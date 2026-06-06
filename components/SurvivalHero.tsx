"use client";

import { useState } from "react";
import Nebula from "@/components/Nebula";

export default function SurvivalHero() {
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

  return (
    <section style={{minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", background: "linear-gradient(to bottom, #000 0%, #0a0000 50%, #000 100%)"}}>
      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulseRed { 0%, 100% { opacity: 0.15; transform: translate(-50%, -50%) scale(1); } 50% { opacity: 0.35; transform: translate(-50%, -50%) scale(1.1); } }
        @keyframes borderGlow { 0%, 100% { box-shadow: 0 0 30px rgba(220,38,38,0.4); } 50% { box-shadow: 0 0 60px rgba(220,38,38,0.8), 0 0 100px rgba(220,38,38,0.3); } }
        @keyframes bounce { 0%, 100% { transform: translateX(-50%) translateY(0); } 50% { transform: translateX(-50%) translateY(10px); } }
        .sv-hero-fade { animation: fadeUp 1s ease forwards; }
        .sv-glow { animation: pulseRed 4s ease-in-out infinite; }
        .sv-btn { animation: borderGlow 2s ease-in-out infinite; transition: transform 0.3s ease !important; }
        .sv-btn:hover { transform: scale(1.07) translateY(-2px) !important; }
        .sv-cta:hover { opacity: 0.85 !important; transform: scale(1.05) translateY(-2px) !important; }
        .sv-cta { transition: all 0.3s ease !important; }
      `}</style>

      <Nebula color1="#ef4444" color2="#991b1b" />

      <div className="sv-glow" style={{position: "absolute", top: "50%", left: "50%", width: "800px", height: "800px", background: "radial-gradient(circle, rgba(220,38,38,0.2) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none"}} />

      <div style={{position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(239,68,68,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(239,68,68,0.03) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none"}} />

      <div className="sv-hero-fade" style={{textAlign: "center", position: "relative", zIndex: 10, padding: "120px 20px 80px"}}>
        <div style={{display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "rgba(127,29,29,0.3)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: "999px", padding: "8px 20px", marginBottom: "32px"}}>
          <span style={{fontSize: "14px"}}>⚔</span>
          <span style={{color: "#fca5a5", fontSize: "12px", fontWeight: "600", letterSpacing: "3px", textTransform: "uppercase"}}>Survival Custom Semi-OP</span>
        </div>

        <h1 style={{fontSize: "clamp(50px, 11vw, 120px)", fontWeight: "900", letterSpacing: "-4px", margin: "0 0 16px 0", lineHeight: 0.95}}>
          <span style={{color: "white", textShadow: "0 0 80px rgba(255,255,255,0.1)"}}>SURVIVAL</span>
          <span style={{background: "linear-gradient(135deg, #ef4444, #991b1b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>CUSTOM</span>
        </h1>

        <div style={{width: "150px", height: "2px", background: "linear-gradient(90deg, transparent, #ef4444, #ff6b6b, transparent)", margin: "20px auto 28px"}} />

        <p style={{color: "#6b7280", fontSize: "clamp(14px, 2vw, 18px)", marginBottom: "16px", letterSpacing: "4px", textTransform: "uppercase", fontWeight: "300"}}>
          Dungeons · Armaduras OP · Economía · Casino
        </p>
        <p style={{color: "#4b5563", fontSize: "15px", maxWidth: "600px", margin: "0 auto 48px", lineHeight: "1.7"}}>
          El survival más hardcore de HyperHard. Encantamientos custom, dungeons épicos, armaduras OP progresivas y una economía completamente personalizada.
        </p>

        <div style={{display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginBottom: "64px"}}>
          <button onClick={copyIP} className="sv-btn"
            style={{backgroundColor: "#dc2626", color: "white", padding: "16px 40px", fontSize: "16px", fontWeight: "700", borderRadius: "10px", border: "none", cursor: "pointer", letterSpacing: "1px"}}>
            {copied ? "✓ IP Copiada!" : "⚔ mc.hyperhard.space"}
          </button>
          <a href="https://hyperhard.tebex.io/" target="_blank" rel="noopener noreferrer" className="sv-cta"
            style={{border: "1px solid rgba(239,68,68,0.5)", color: "#fca5a5", padding: "16px 40px", fontSize: "16px", fontWeight: "700", borderRadius: "10px", textDecoration: "none", letterSpacing: "1px", display: "inline-block"}}>
            🛒 Tienda Oficial
          </a>
        </div>

        <div style={{display: "flex", gap: "48px", justifyContent: "center", flexWrap: "wrap"}}>
          {[
            {label: "Armaduras OP", value: "5+"},
            {label: "Dungeons", value: "∞"},
            {label: "Encantamientos", value: "50+"},
          ].map(stat => (
            <div key={stat.label} style={{textAlign: "center"}}>
              <div style={{fontSize: "32px", fontWeight: "900", color: "#ef4444", textShadow: "0 0 20px rgba(239,68,68,0.5)"}}>{stat.value}</div>
              <div style={{fontSize: "11px", color: "#4b5563", letterSpacing: "2px", textTransform: "uppercase", marginTop: "6px"}}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{position: "absolute", bottom: "32px", left: "50%", color: "#374151", fontSize: "24px", animation: "bounce 2s infinite"}}>↓</div>
    </section>
  );
}
