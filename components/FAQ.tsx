"use client";

import { useState } from "react";
import Nebula from "@/components/Nebula";
export default function FAQ() {
  const [abierto, setAbierto] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  const preguntas = [
    {
      p: "¿Cómo me conecto al servidor?",
      r: "Conectarte a HyperHard Network es muy fácil. En Minecraft Java Edition entra a 'Multijugador', presiona 'Agregar servidor' y coloca la IP: play.hyperhard.net. Si juegas desde Bedrock Edition utiliza la IP play.hyperhard.net y el puerto 30033."
    },
    {
      p: "¿El servidor es gratuito?",
      r: "¡Sí! HyperHard Network es completamente gratuito y puedes jugar tanto si tienes Minecraft Premium como No Premium."
    },
    {
      p: "¿Qué versión de Minecraft necesito?",
      r: "Actualmente recomendamos usar cualquier versión superior a la 1.20.x para disfrutar la mejor experiencia posible."
    },
    {
      p: "¿Cómo obtengo un rango?",
      r: "Puedes obtener rangos y beneficios exclusivos directamente desde nuestra tienda oficial: hyperhard.tebex.io"
    },
    {
      p: "¿Dónde reporto un bug o hacker?",
      r: "Puedes reportarlo directamente en nuestro Discord oficial: discord.hyperhard.space"
    },
    {
      p: "¿Con qué frecuencia hay eventos?",
      r: "Realizamos eventos semanalmente con recompensas y actividades especiales."
    },
    {
      p: "¿Puedo jugar desde cualquier país?",
      r: "Sí, todos los países son bienvenidos en HyperHard Network."
    },
    {
      p: "¿El servidor tiene protección antitrampas?",
      r: "Sí. El servidor está protegido por nuestro anticheat HYDRA."
    }
  ];

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(to bottom, #050505 0%, #090909 40%, #050505 100%)",
        padding: "120px 20px",
      }}
    >
      <Nebula color1="#ef4444" color2="#3b82f6" />
      <div
        style={{
    position: "absolute",
    top: "-300px",
    left: "-200px",
    width: "800px",
    height: "800px",
    background:
      "radial-gradient(circle, rgba(239,68,68,0.10) 0%, transparent 70%)",
    filter: "blur(120px)",
    pointerEvents: "none",
  }}
/>

<div
  style={{
    position: "absolute",
    bottom: "-300px",
    right: "-200px",
    width: "700px",
    height: "700px",
    background:
      "radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 70%)",
    filter: "blur(120px)",
    pointerEvents: "none",
  }}
/>

      <div
        style={{
          textAlign: "center",
          marginBottom: "80px"
        }}
      >
        <p
          style={{
            color: "#ef4444",
            fontSize: "12px",
            letterSpacing: "6px",
            textTransform: "uppercase",
            fontWeight: "600",
            marginBottom: "16px"
          }}
        >
          — PREGUNTAS FRECUENTES —
        </p>

        <h2
          style={{
            fontSize: "clamp(36px, 6vw, 64px)",
            fontWeight: "900",
            color: "white",
            letterSpacing: "-2px",
            margin: 0
          }}
        >
          FAQ
        </h2>
      </div>

      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "12px"
        }}
      >
        {preguntas.map((item, i) => {
          const abiertoAhora = abierto === i;

          return (
<div
  key={i}
  onMouseEnter={() => setHovered(i)}
  onMouseLeave={() => setHovered(null)}
onClick={() =>
  setAbierto(abiertoAhora ? null : i)
}
style={{
  position: "relative",
  background:
    "linear-gradient(180deg, rgba(18,18,18,0.96) 0%, rgba(8,8,8,0.98) 100%)",

  border:
    hovered === i
      ? "1px solid rgba(239,68,68,0.35)"
      : "1px solid rgba(255,255,255,0.05)",

  borderRadius: "20px",

  overflow: "hidden",

  cursor: "pointer",

  transition: "all 0.35s ease",

  transform:
    hovered === i
      ? "translateY(-5px)"
      : "translateY(0px)",

  boxShadow:
    hovered === i
      ? "0 0 50px rgba(239,68,68,0.12)"
      : "0 10px 40px rgba(0,0,0,0.4)",

  backdropFilter: "blur(20px)",
}}
            >
<div
  style={{
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at top, rgba(239,68,68,0.10), transparent 70%)",
    pointerEvents: "none",
  }}
/>
              <div
                style={{
                  padding: "20px 24px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <p
                  style={{
                    color: "white",
                    fontSize: "16px",
                    fontWeight: 700,
                    margin: 0
                  }}
                >
                  {item.p}
                </p>

                <span
                  style={{
                    color: "#ef4444",
                    fontSize: "28px",
                    fontWeight: "300",
                    textShadow: "0 0 20px rgba(239,68,68,0.7)",
                    transition: "0.3s",
                    transform: abiertoAhora
                      ? "rotate(45deg)"
                      : "rotate(0deg)"
                  }}
                >
                  +
                </span>
              </div>

              <div
                style={{
                  maxHeight: abiertoAhora ? "300px" : "0px",
                  opacity: abiertoAhora ? 1 : 0,
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  padding: abiertoAhora
                    ? "0 24px 24px"
                    : "0 24px"
                }}
              >
                <p
                  style={{
                    color: "#d4d4d8",
                    lineHeight: "1.7",
                    margin: 0
                  }}
                >
                  {item.r}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}