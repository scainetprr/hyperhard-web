"use client";

import { useState, useEffect } from "react";
import Nebula from "@/components/Nebula";

export default function Stats() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [players, setPlayers] = useState<number | null>(null);
  const [serverOnline, setServerOnline] = useState<boolean | null>(null);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await fetch("https://api.mcstatus.io/v2/status/java/us-1.av.supercores.host:25000");
        const data = await res.json();
        if (data.online) {
          setPlayers(data.players?.online ?? 0);
          setServerOnline(true);
        } else {
          setPlayers(null);
          setServerOnline(false);
        }
      } catch {
        setPlayers(null);
        setServerOnline(false);
      }
    };
    fetchStatus();
    const interval = setInterval(fetchStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { valor: "40+", label: "Jugadores Registrados", icono: "👥", color: "#ef4444" },
    { valor: "2", label: "Modalidades Activas", icono: "⚔", color: "#3b82f6" },
    { valor: "50+", label: "Encantamientos Custom", icono: "✨", color: "#8b5cf6" },
    { valor: serverOnline === null ? "..." : serverOnline ? "🟢 Online" : "🔴 Apagado", label: "Servidor", icono: serverOnline === true ? "🟢" : "🔴", color: serverOnline === true ? "#10b981" : "#ef4444" },
    { valor: "3", label: "Rangos Disponibles", icono: "👑", color: "#f59e0b" },
    { valor: "3+", label: "Años Activos", icono: "🏆", color: "#ef4444" },
  ];

  return (
    <section style={{position: "relative", overflow: "hidden", background: "linear-gradient(to bottom, #000 0%, #080808 50%, #000 100%)", padding: "80px 20px"}}>
      <style>{`
        .stat-card { transition: all 0.3s ease !important; }
        .stat-card:hover { transform: translateY(-8px) scale(1.03) !important; }
        @keyframes countUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
            <Nebula color1="#ef4444" color2="#3b82f6" />
      <div style={{position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, #ef4444, #3b82f6, transparent)"}} />
      <div style={{position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, #3b82f6, #ef4444, transparent)"}} />
      <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "600px", height: "200px", background: "radial-gradient(ellipse, rgba(239,68,68,0.04) 0%, transparent 70%)", pointerEvents: "none"}} />

      <div style={{maxWidth: "1200px", margin: "0 auto"}}>
        <div style={{textAlign: "center", marginBottom: "60px"}}>
          <h2 style={{fontSize: "clamp(32px, 5vw, 56px)", fontWeight: "900", color: "white", letterSpacing: "-2px", margin: 0}}>
            HYPERHARD EN <span style={{background: "linear-gradient(135deg, #ef4444, #991b1b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>NÚMEROS</span>
          </h2>
          <div style={{width: "80px", height: "2px", background: "linear-gradient(90deg, transparent, #ef4444, transparent)", margin: "16px auto 0"}} />
        </div>

        <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "20px"}}>
          {stats.map((s, i) => (
            <div key={s.label} className="stat-card"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                backgroundColor: hovered === i ? "#0f0f0f" : "#0a0a0a",
                border: `1px solid ${hovered === i ? s.color + "50" : "#1a1a1a"}`,
                borderRadius: "16px",
                padding: "32px 20px",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
                boxShadow: hovered === i ? `0 0 40px ${s.color}20` : "none",
                cursor: "default",
              }}>
              <div style={{position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: hovered === i ? "80%" : "0%", height: "1px", background: `linear-gradient(90deg, transparent, ${s.color}, transparent)`, transition: "width 0.4s ease"}} />
              <div style={{fontSize: "36px", marginBottom: "12px"}}>{s.icono}</div>
              <div style={{fontSize: "36px", fontWeight: "900", color: s.color, marginBottom: "8px", textShadow: hovered === i ? `0 0 20px ${s.color}` : "none", transition: "text-shadow 0.3s"}}>{s.valor}</div>
              <div style={{fontSize: "11px", color: "#4b5563", letterSpacing: "1px", textTransform: "uppercase", lineHeight: "1.4"}}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
