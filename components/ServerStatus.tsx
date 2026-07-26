"use client";

import { useState, useEffect } from "react";

export default function ServerStatus() {
  const [players, setPlayers] = useState<number | null>(null);
  const [maxPlayers, setMaxPlayers] = useState<number | null>(null);
  const [status, setStatus] = useState<"online" | "offline" | "loading">("loading");

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await fetch("https://api.mcstatus.io/v2/status/java/us-1.av.supercores.host:25000");
        const data = await res.json();
        if (data.online) {
          setPlayers(data.players?.online ?? 0);
          setMaxPlayers(data.players?.max ?? 0);
          setStatus("online");
        } else {
          setStatus("offline");
        }
      } catch {
        setStatus("offline");
      }
    };

    fetchStatus();
    const interval = setInterval(fetchStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{display: "inline-flex", alignItems: "center", gap: "12px", backgroundColor: "rgba(0,0,0,0.6)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: "12px", padding: "12px 24px"}}>
      <div style={{width: "10px", height: "10px", borderRadius: "50%", backgroundColor: status === "online" ? "#4ade80" : status === "offline" ? "#ef4444" : "#f59e0b", boxShadow: status === "online" ? "0 0 10px #4ade80" : "none", animation: status === "loading" ? "blink 1s infinite" : "none"}} />
      <div>
        <div style={{color: "white", fontWeight: "700", fontSize: "18px"}}>
          {status === "loading" ? "..." : status === "offline" ? "Apagado" : `${players} jugadores`}
        </div>
        <div style={{color: "#6b7280", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase"}}>
          {status === "online" ? `de ${maxPlayers} máximo` : status === "loading" ? "Conectando..." : "Servidor apagado"}
        </div>
      </div>
    </div>
  );
}
