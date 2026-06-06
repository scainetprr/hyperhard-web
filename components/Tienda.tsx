"use client";

import { useState } from "react";
import Nebula from "@/components/Nebula";

export default function Tienda() {
const [hovered, setHovered] = useState<number | null>(null);
  const packs = [
    {
      nombre: "GUARDIAN",
      precio: "$3.99",
      mes: "/ mes",
      color: "#f59e0b",
      glow: "rgba(245,158,11,0.2)",
      items: ["Prefijo Guardian en el chat", "Formato de colores en chat", "No expulsado por AFK", "/kit guardian", "/enderchest y /ec", "1 pwarp permanente", "Hasta 2 sethomes", "y mucho más..."],
      popular: false,
    },
    {
      nombre: "DESTRUCTOR",
      precio: "$6.99",
      mes: "/ mes",
      color: "#ef4444",
      glow: "rgba(239,68,68,0.25)",
      items: ["Prefijo Destructor en el chat", "Formato de colores en chat", "No expulsado por AFK", "Tradeos exclusivos", "/kit destructor", "2 pwarp permanentes", "Hasta 3 sethomes", "/fly en zonas seguras", "y mucho más..."],
      popular: true,
    },
    {
      nombre: "INMORTAL",
      precio: "$11.00",
      mes: "/ mes",
      color: "#3b82f6",
      glow: "rgba(59,130,246,0.25)",
      items: ["Prefijo Inmortal en el chat", "Formato de colores en chat", "No expulsado por AFK", "/kit inmortal", "3 pwarp permanentes", "Hasta 4 sethomes", "3 mochilas con /pv", "y mucho más..."],
      popular: false,
    },
  ];

  return (
<section
  style={{
    position: "relative",
    overflow: "hidden",
    background:
      "linear-gradient(to bottom, #050505 0%, #080808 40%, #0b0707 100%)",
    padding: "120px 20px",
  }}
>
  <Nebula color1="#f59e0b" color2="#3b82f6" />
  <div
    style={{
      position: "absolute",
      top: "-200px",
      left: "-200px",
    width: "700px",
    height: "700px",
    background:
      "radial-gradient(circle, rgba(239,68,68,0.16) 0%, transparent 70%)",
    filter: "blur(80px)",
    pointerEvents: "none",
  }}
/>

<div
  style={{
    position: "absolute",
    bottom: "-300px",
    right: "-200px",
    width: "800px",
    height: "800px",
    background:
      "radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 70%)",
    filter: "blur(100px)",
    pointerEvents: "none",
  }}
/>

      <div style={{position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, #f59e0b, transparent)"}} />

      <div style={{textAlign: "center", marginBottom: "80px"}}>
        <p style={{color: "#f59e0b", fontSize: "12px", letterSpacing: "6px", textTransform: "uppercase", fontWeight: "600", marginBottom: "16px"}}>— POTENCIA TU EXPERIENCIA —</p>
        <h2 style={{fontSize: "clamp(36px, 6vw, 64px)", fontWeight: "900", color: "white", letterSpacing: "-2px", margin: 0}}>TIENDA OFICIAL</h2>
        <div style={{width: "80px", height: "2px", background: "linear-gradient(90deg, transparent, #f59e0b, transparent)", margin: "16px auto 0"}} />
        <p style={{color: "#4b5563", fontSize: "15px", marginTop: "16px"}}>Consigue ventajas exclusivas y apoya el servidor</p>
      </div>

      <div style={{display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap", maxWidth: "1100px", margin: "0 auto 48px"}}>
        {packs.map((pack, i) => (
          <div
  key={pack.nombre}
  onMouseEnter={() => setHovered(i)}
  onMouseLeave={() => setHovered(null)}
  style={{
    position: "relative",
    background:
      hovered === i
        ? "linear-gradient(180deg, rgba(28,28,28,0.98) 0%, rgba(10,10,10,1) 100%)"
        : "linear-gradient(180deg, rgba(18,18,18,0.95) 0%, rgba(8,8,8,0.98) 100%)",
    border: `1px solid ${
      hovered === i ? pack.color : `${pack.color}40`
    }`,
    borderRadius: "24px",
    padding: "40px 32px",
    flex: "1",
    minWidth: "260px",
    maxWidth: "320px",
    overflow: "hidden",
    textAlign: "center",
    backdropFilter: "blur(20px)",
    transform:
      hovered === i
        ? "translateY(-12px) scale(1.03)"
        : "translateY(0px) scale(1)",
    transition:
  "transform 0.35s ease, box-shadow 0.35s ease, border 0.35s ease, background 0.35s ease",
    boxShadow:
      hovered === i
        ? `0 0 80px ${pack.glow}`
        : `0 0 40px ${pack.glow}`,
  }}
>

{pack.popular && (
  <>
    <div
      style={{
        position: "absolute",
        inset: 0,
        background:
          "radial-gradient(circle at top, rgba(239,68,68,0.14), transparent 65%)",
        pointerEvents: "none",
      }}
    />

    <div
      style={{
        position: "absolute",
        top: "2px",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "#ef4444",
        color: "white",
        fontSize: "11px",
        fontWeight: "700",
        letterSpacing: "2px",
        padding: "6px 18px",
        borderRadius: "999px",
        boxShadow: "0 0 20px rgba(239,68,68,0.7)",
        zIndex: 5,
      }}
    >
      MÁS POPULAR
    </div>
  </>
)}  

            <div style={{position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "50%", height: "1px", background: `linear-gradient(90deg, transparent, ${pack.color}, transparent)`}} />

            <h3 style={{fontSize: "20px", fontWeight: "900", color: pack.color, letterSpacing: "3px", marginBottom: "8px"}}>{pack.nombre}</h3>

            <div style={{marginBottom: "32px"}}>
              <span style={{fontSize: "42px", fontWeight: "900", color: "white"}}>{pack.precio}</span>
              <span style={{fontSize: "14px", color: "#4b5563", marginLeft: "6px"}}>{pack.mes}</span>
            </div>

            <div style={{display: "flex", flexDirection: "column", gap: "10px", marginBottom: "32px", textAlign: "left"}}>
              {pack.items.map((item) => (
                <div key={item} style={{display: "flex", alignItems: "center", gap: "10px"}}>
                  <span style={{color: pack.color, fontSize: "14px"}}>✓</span>
                  <span style={{color: "#9ca3af", fontSize: "14px"}}>{item}</span>
                </div>
              ))}
            </div>

            <a href="https://hyperhard.tebex.io/" target="_blank" rel="noopener noreferrer"
              style={{display: "block", backgroundColor: pack.popular ? pack.color : "transparent", border: `1px solid ${pack.color}`, color: pack.popular ? "white" : pack.color, padding: "14px", borderRadius: "8px", fontWeight: "700", fontSize: "14px", letterSpacing: "1px", textDecoration: "none"}}>
              COMPRAR AHORA
            </a>
          </div>
        ))}
      </div>

      <div style={{textAlign: "center"}}>
        <a href="https://hyperhard.tebex.io/" target="_blank" rel="noopener noreferrer"
          style={{color: "#4b5563", fontSize: "14px", textDecoration: "none", borderBottom: "1px solid #1f2937", paddingBottom: "2px"}}>
          Ver todos los productos en la tienda →
        </a>
      </div>
    </section>
  );
}