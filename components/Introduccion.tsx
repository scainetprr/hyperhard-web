"use client";
import Nebula from "@/components/Nebula";
export default function Introduccion() {
  return (
    <section style={{backgroundColor: "#000", padding: "100px 20px", position: "relative", overflow: "hidden"}}>
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        .intro-text { animation: fadeInUp 1s ease forwards; }
        .intro-card:hover { border-color: rgba(239,68,68,0.4) !important; transform: translateY(-4px) !important; }
        .intro-card { transition: all 0.3s ease !important; }
      `}</style>
            <Nebula color1="#ef4444" color2="#3b82f6" />
      <div style={{position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, #ef4444, transparent)"}} />
      <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "800px", height: "400px", background: "radial-gradient(ellipse, rgba(239,68,68,0.04) 0%, transparent 70%)", pointerEvents: "none"}} />

      <div style={{maxWidth: "1100px", margin: "0 auto"}}>

        <div style={{textAlign: "center", marginBottom: "80px"}} className="intro-text">
          <p style={{color: "#ef4444", fontSize: "12px", letterSpacing: "6px", textTransform: "uppercase", fontWeight: "600", marginBottom: "16px"}}>— BIENVENIDO A —</p>
          <h2 style={{fontSize: "clamp(36px, 6vw, 64px)", fontWeight: "900", color: "white", letterSpacing: "-2px", margin: "0 0 24px 0"}}>
            HYPER<span style={{background: "linear-gradient(135deg, #ef4444, #991b1b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>HARD</span> NETWORK
          </h2>
          <div style={{width: "80px", height: "2px", background: "linear-gradient(90deg, transparent, #ef4444, transparent)", margin: "0 auto 32px"}} />
          <p style={{color: "#6b7280", fontSize: "clamp(15px, 2vw, 18px)", lineHeight: "1.8", maxWidth: "700px", margin: "0 auto"}}>
            Somos una comunidad con más de <span style={{color: "#ef4444", fontWeight: "700"}}>3 años de historia</span>, construida por jugadores apasionados que querían algo diferente. No somos el servidor más grande, pero sí uno de los más dedicados. Cada actualización, cada evento y cada mejora nace del amor por Minecraft y por nuestra comunidad.
          </p>
        </div>

        <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginBottom: "64px"}}>
          {[
            {
              icono: "⚔",
              titulo: "Modalidades Únicas",
              descripcion: "Survival Custom Semi-OP y Lifesteal — dos experiencias completamente distintas con sistemas propios, encantamientos custom, armaduras progresivas y mucho contenido exclusivo.",
              color: "#ef4444"
            },
            {
              icono: "👥",
              titulo: "Staff Activo y Dedicado",
              descripcion: "Nuestro equipo de staff está presente constantemente, escuchando sugerencias, resolviendo problemas y asegurando que cada jugador tenga la mejor experiencia posible.",
              color: "#3b82f6"
            },
            {
              icono: "🔥",
              titulo: "Contenido Constante",
              descripcion: "Trabajamos continuamente para traer nuevas actualizaciones, eventos semanales, nuevas modalidades y sorpresas. Siempre hay algo nuevo por descubrir en HyperHard.",
              color: "#f59e0b"
            },
            {
              icono: "📱",
              titulo: "Comunidad en Redes",
              descripcion: "Generamos contenido en YouTube, TikTok, Instagram y X para que nunca te pierdas nada. Clips épicos, trailers, eventos y más — síguenos y forma parte de la historia.",
              color: "#8b5cf6"
            },
            {
              icono: "🌎",
              titulo: "Para Todos",
              descripcion: "Abierto a jugadores de toda Latinoamérica y España, con soporte para cuentas Premium y No Premium. HyperHard es para todos los que aman el Minecraft hardcore.",
              color: "#10b981"
            },
            {
              icono: "🚀",
              titulo: "Grandes Aspiraciones",
              descripcion: "Somos una comunidad pequeña con sueños enormes. Cada día trabajamos para crecer, mejorar y convertirnos en referente del Minecraft competitivo en español.",
              color: "#ef4444"
            },
          ].map((item) => (
            <div key={item.titulo} className="intro-card" style={{backgroundColor: "#080808", border: "1px solid #1a1a1a", borderRadius: "16px", padding: "32px 28px", position: "relative"}}>
              <div style={{position: "absolute", top: 0, left: "24px", width: "40px", height: "2px", background: item.color}} />
              <div style={{fontSize: "36px", marginBottom: "16px"}}>{item.icono}</div>
              <h3 style={{fontSize: "16px", fontWeight: "800", color: "white", marginBottom: "10px"}}>{item.titulo}</h3>
              <p style={{color: "#4b5563", fontSize: "14px", lineHeight: "1.7", margin: 0}}>{item.descripcion}</p>
            </div>
          ))}
        </div>

        <div style={{textAlign: "center", backgroundColor: "#080808", border: "1px solid rgba(239,68,68,0.2)", borderRadius: "16px", padding: "48px 32px", position: "relative"}}>
          <div style={{position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "100px", height: "1px", background: "linear-gradient(90deg, transparent, #ef4444, transparent)"}} />
          <p style={{color: "#ef4444", fontSize: "12px", letterSpacing: "6px", textTransform: "uppercase", fontWeight: "600", marginBottom: "16px"}}>— NUESTRA MISIÓN —</p>
          <p style={{color: "#9ca3af", fontSize: "clamp(16px, 2vw, 20px)", lineHeight: "1.8", maxWidth: "600px", margin: "0 auto 32px", fontStyle: "italic"}}>
            "Crear el servidor de Minecraft más épico, justo y entretenido de habla hispana. Un lugar donde cada jugador encuentre su hogar."
          </p>
          <a href="https://discord.hyperhard.space" target="_blank" rel="noopener noreferrer"
            style={{display: "inline-block", backgroundColor: "#ef4444", color: "white", padding: "14px 32px", borderRadius: "8px", fontWeight: "700", fontSize: "14px", letterSpacing: "1px", textDecoration: "none"}}>
            ÚNETE A LA COMUNIDAD
          </a>
        </div>
      </div>
    </section>
  );
}   