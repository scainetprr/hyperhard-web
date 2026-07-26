"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);
  const [modalidadesOpen, setModalidadesOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyIP = () => {
    navigator.clipboard.writeText("us-1.av.supercores.host");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <nav style={{position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, backgroundColor: scrolled ? "rgba(0,0,0,0.95)" : "transparent", borderBottom: scrolled ? "1px solid #1a1a1a" : "1px solid transparent", backdropFilter: scrolled ? "blur(20px)" : "none", transition: "all 0.3s ease", padding: "0 32px"}}>
      <style>{`
        .nav-link:hover { color: #ef4444 !important; }
        .nav-link { transition: color 0.3s !important; }
        .ip-btn:hover { background: rgba(239,68,68,0.2) !important; border-color: rgba(239,68,68,0.6) !important; }
        .ip-btn { transition: all 0.3s !important; }
        .dropdown-link:hover { background: rgba(239,68,68,0.1) !important; color: white !important; }
        .chevron { transition: transform 0.25s ease; display: inline-block; }
      `}</style>

      <div style={{maxWidth: "1200px", margin: "0 auto", height: "70px", display: "flex", alignItems: "center", justifyContent: "space-between"}}>

        <a href="/" style={{textDecoration: "none"}}>
          <span style={{fontSize: "22px", fontWeight: "900", letterSpacing: "-1px"}}>
            <span style={{color: "white"}}>HYPER</span>
            <span style={{background: "linear-gradient(135deg, #ef4444, #991b1b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>HARD</span>
          </span>
        </a>

        <div style={{display: "flex", gap: "8px", alignItems: "center"}}>

          <div style={{position: "relative"}} onMouseEnter={() => setModalidadesOpen(true)} onMouseLeave={() => setModalidadesOpen(false)}>
            <button className="nav-link" style={{color: "#9ca3af", fontSize: "14px", fontWeight: "600", letterSpacing: "1px", textTransform: "uppercase", background: "none", border: "none", cursor: "pointer", padding: "8px 12px", display: "flex", alignItems: "center", gap: "6px"}}>
              Modalidades
              <span className="chevron" style={{transform: modalidadesOpen ? "rotate(180deg)" : "rotate(0deg)", fontSize: "10px"}}>▾</span>
            </button>
            <div style={{position: "absolute", top: "calc(100% + 0px)", left: "50%", transform: "translateX(-50%)", backgroundColor: "#0a0a0a", border: "1px solid rgba(239,68,68,0.2)", borderRadius: "12px", padding: "8px", minWidth: "200px", opacity: modalidadesOpen ? 1 : 0, pointerEvents: modalidadesOpen ? "all" : "none", transition: "all 0.25s ease", boxShadow: "0 20px 60px rgba(0,0,0,0.8)", zIndex: 1001}}>
              <div style={{padding: "4px 16px 8px", borderBottom: "1px solid #1a1a1a", marginBottom: "4px"}}>
                <span style={{color: "#4b5563", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase"}}>Elige tu modalidad</span>
              </div>
              <a href="/survival" className="dropdown-link" style={{display: "block", padding: "10px 16px", color: "#ef4444", textDecoration: "none", fontSize: "14px", fontWeight: "600", borderRadius: "8px", transition: "all 0.2s ease"}}>⚔ Survival Custom</a>
              <a href="/lifesteal" className="dropdown-link" style={{display: "block", padding: "10px 16px", color: "#3b82f6", textDecoration: "none", fontSize: "14px", fontWeight: "600", borderRadius: "8px", transition: "all 0.2s ease"}}>💀 Lifesteal</a>
            </div>
          </div>

          <div style={{position: "relative"}} onMouseEnter={() => setInfoOpen(true)} onMouseLeave={() => setInfoOpen(false)}>
            <button className="nav-link" style={{color: "#9ca3af", fontSize: "14px", fontWeight: "600", letterSpacing: "1px", textTransform: "uppercase", background: "none", border: "none", cursor: "pointer", padding: "8px 12px", display: "flex", alignItems: "center", gap: "6px"}}>
              Información
              <span className="chevron" style={{transform: infoOpen ? "rotate(180deg)" : "rotate(0deg)", fontSize: "10px"}}>▾</span>
            </button>
            <div style={{position: "absolute", top: "calc(100% + 0px)", left: "50%", transform: "translateX(-50%)", backgroundColor: "#0a0a0a", border: "1px solid rgba(239,68,68,0.2)", borderRadius: "12px", padding: "8px", minWidth: "200px", opacity: infoOpen ? 1 : 0, pointerEvents: infoOpen ? "all" : "none", transition: "all 0.25s ease", boxShadow: "0 20px 60px rgba(0,0,0,0.8)", zIndex: 1001}}>
              <div style={{padding: "4px 16px 8px", borderBottom: "1px solid #1a1a1a", marginBottom: "4px"}}>
                <span style={{color: "#4b5563", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase"}}>Más info</span>
              </div>
              <a href="/comunidad" className="dropdown-link" style={{display: "block", padding: "10px 16px", color: "#9ca3af", textDecoration: "none", fontSize: "14px", fontWeight: "600", borderRadius: "8px", transition: "all 0.2s ease"}}>💬 Comunidad</a>
              <a href="/reglas" className="dropdown-link" style={{display: "block", padding: "10px 16px", color: "#9ca3af", textDecoration: "none", fontSize: "14px", fontWeight: "600", borderRadius: "8px", transition: "all 0.2s ease"}}>📜 Reglas</a>
              <a href="https://discord.hyperhard.space" target="_blank" rel="noopener noreferrer" className="dropdown-link" style={{display: "block", padding: "10px 16px", color: "#9ca3af", textDecoration: "none", fontSize: "14px", fontWeight: "600", borderRadius: "8px", transition: "all 0.2s ease"}}>🎮 Discord</a>
              <a href="/resenas" className="dropdown-link" style={{display: "block", padding: "10px 16px", color: "#9ca3af", textDecoration: "none", fontSize: "14px", fontWeight: "600", borderRadius: "8px", transition: "all 0.2s ease"}}>⭐ Reseñas</a>
            </div>
          </div>

          <a href="/tienda" className="nav-link" style={{color: "#9ca3af", fontSize: "14px", fontWeight: "600", textDecoration: "none", letterSpacing: "1px", textTransform: "uppercase", padding: "8px 12px"}}>Tienda</a>

        </div>

        <button onClick={copyIP} className="ip-btn" style={{backgroundColor: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", color: "#fca5a5", padding: "8px 20px", borderRadius: "8px", fontSize: "13px", fontWeight: "700", cursor: "pointer", fontFamily: "monospace", letterSpacing: "1px"}}>
          {copied ? "✓ Copiada!" : "us-1.av.supercores.host"}
        </button>
      </div>
    </nav>
  );
}