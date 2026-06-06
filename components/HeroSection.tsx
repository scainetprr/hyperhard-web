"use client";

import { useState, useEffect } from "react";

export default function HeroSection() {
  const [copied, setCopied] = useState(false);
  const serverIP = "mc.hyperhard.space";


const copyIP = () => {
  try {
    navigator.clipboard.writeText(serverIP);
  } catch {
    const el = document.createElement("textarea");
    el.value = serverIP;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  }
  setCopied(true);
  setTimeout(() => setCopied(false), 2000);
};

  const particles = Array.from({length: 25}, (_, i) => ({
    id: i,
    left: `${(i * 37 + 10) % 100}%`,
    top: `${(i * 53 + 5) % 100}%`,
    size: i % 3 === 0 ? 3 : 2,
    color: i % 2 === 0 ? "#ef4444" : "#3b82f6",
    delay: `${(i * 0.3) % 3}s`,
    duration: `${3 + (i % 4)}s`,
  }));

  return (
    <section style={{minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#000", position: "relative", overflow: "hidden"}}>
      <style>{`
        @keyframes pulseGlow { 0%, 100% { opacity: 0.15; transform: translate(-50%, -50%) scale(1); } 50% { opacity: 0.35; transform: translate(-50%, -50%) scale(1.1); } }
        @keyframes pulseGlow2 { 0%, 100% { opacity: 0.08; transform: translate(-50%, -50%) scale(1); } 50% { opacity: 0.2; transform: translate(-50%, -50%) scale(1.15); } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes bounce { 0%, 100% { transform: translateX(-50%) translateY(0); } 50% { transform: translateX(-50%) translateY(10px); } }
        @keyframes blink { 0%, 100% { opacity: 1; box-shadow: 0 0 6px #4ade80; } 50% { opacity: 0.4; box-shadow: none; } }
        @keyframes floatUp { 0% { transform: translateY(0); opacity: 0.6; } 100% { transform: translateY(-120px); opacity: 0; } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes borderGlow { 0%, 100% { box-shadow: 0 0 30px rgba(220,38,38,0.4); } 50% { box-shadow: 0 0 60px rgba(220,38,38,0.8), 0 0 100px rgba(220,38,38,0.3); } }
        .hero-content { animation: fadeUp 1s ease forwards; }
        .glow-red { animation: pulseGlow 4s ease-in-out infinite; }
        .glow-blue { animation: pulseGlow2 3s ease-in-out infinite; }
        .btn-primary { animation: borderGlow 2s ease-in-out infinite; }
        .btn-primary:hover { transform: scale(1.07) translateY(-2px) !important; }
        .btn-secondary:hover { background: rgba(239,68,68,0.15) !important; color: white !important; transform: scale(1.05) translateY(-2px) !important; }
        .btn-primary, .btn-secondary { transition: transform 0.3s ease !important; }
        .particle { animation: floatUp var(--dur) ease-in infinite; animation-delay: var(--delay); }
        .title-shimmer {
          background: linear-gradient(90deg, #ef4444 0%, #ff6b6b 40%, #fff 50%, #ff6b6b 60%, #991b1b 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }
        .line-glow { animation: shimmer 2s linear infinite; background-size: 200% auto; }
        .stat-item:hover { transform: translateY(-4px) !important; }
        .stat-item { transition: transform 0.3s ease !important; }
      `}</style>

      <div className="glow-red" style={{position: "absolute", top: "50%", left: "50%", width: "800px", height: "800px", background: "radial-gradient(circle, rgba(220,38,38,0.2) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none"}} />
      <div className="glow-blue" style={{position: "absolute", top: "50%", left: "50%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none"}} />

      {/* Grid lines fondo */}
      <div style={{position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(239,68,68,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(239,68,68,0.03) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none"}} />

      {/* Partículas */}
      {particles.map(p => (
        <div key={p.id} className="particle" style={{
          position: "absolute",
          left: p.left,
          top: p.top,
          width: `${p.size}px`,
          height: `${p.size}px`,
          backgroundColor: p.color,
          borderRadius: "50%",
          boxShadow: `0 0 6px ${p.color}`,
          ["--dur" as any]: p.duration,
          ["--delay" as any]: p.delay,
          pointerEvents: "none",
        }} />
      ))}

      <div className="hero-content" style={{textAlign: "center", position: "relative", zIndex: 10, padding: "0 20px"}}>

        <div style={{display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "rgba(127,29,29,0.3)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: "999px", padding: "8px 20px", marginBottom: "32px"}}>
          <div style={{width: "8px", height: "8px", backgroundColor: "#4ade80", borderRadius: "50%", animation: "blink 1.5s infinite"}} />
          <span style={{color: "#fca5a5", fontSize: "12px", fontWeight: "600", letterSpacing: "3px", textTransform: "uppercase"}}>Servidor Online</span>
        </div>

        <h1 style={{fontSize: "clamp(60px, 13vw, 140px)", fontWeight: "900", letterSpacing: "-6px", margin: "0 0 16px 0", lineHeight: 0.9}}>
          <span style={{color: "white", textShadow: "0 0 80px rgba(255,255,255,0.1)"}}>HYPER</span>
          <span className="title-shimmer">HARD</span>
        </h1>

        <div style={{width: "150px", height: "2px", background: "linear-gradient(90deg, transparent, #ef4444, #ff6b6b, transparent)", margin: "20px auto 28px", animation: "shimmer 2s linear infinite", backgroundSize: "200% auto"}} />

        <p style={{color: "#6b7280", fontSize: "clamp(13px, 2vw, 16px)", marginBottom: "48px", letterSpacing: "5px", textTransform: "uppercase", fontWeight: "300"}}>
          Survival Custom · Lifesteal · Dungeons · Casino
        </p>

        <div style={{display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center", marginBottom: "64px"}}>
          <button onClick={copyIP} className="btn-primary"
            style={{backgroundColor: "#dc2626", color: "white", padding: "16px 40px", fontSize: "16px", fontWeight: "700", borderRadius: "10px", border: "none", cursor: "pointer", letterSpacing: "1px"}}>
            {copied ? "✓ IP Copiada!" : `⚔ ${serverIP}`}
          </button>
          <a href="https://hyperhard.tebex.io/" target="_blank" rel="noopener noreferrer" className="btn-secondary"
            style={{border: "1px solid rgba(239,68,68,0.5)", color: "#fca5a5", padding: "16px 40px", fontSize: "16px", fontWeight: "700", borderRadius: "10px", textDecoration: "none", letterSpacing: "1px", display: "inline-block", backdropFilter: "blur(10px)"}}>
            🛒 Tienda Oficial
          </a>
        </div>

        <div style={{display: "flex", gap: "56px", justifyContent: "center", flexWrap: "wrap"}}>
          {[
            {label: "Modalidades", value: "2+"},
            {label: "Jugadores Online", value: "🟢 Live"},
            {label: "Encantamientos", value: "50+"},
          ].map(stat => (
            <div key={stat.label} className="stat-item" style={{textAlign: "center", cursor: "default"}}>
              <div style={{fontSize: "32px", fontWeight: "900", color: "#ef4444", textShadow: "0 0 20px rgba(239,68,68,0.5)"}}>{stat.value}</div>
              <div style={{fontSize: "11px", color: "#4b5563", letterSpacing: "2px", textTransform: "uppercase", marginTop: "6px"}}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{position: "absolute", bottom: "32px", left: "50%", color: "#374151", animation: "bounce 2s infinite", fontSize: "24px"}}>↓</div>
    </section>
  );
}