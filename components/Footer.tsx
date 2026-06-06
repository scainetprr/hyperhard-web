"use client";

export default function Footer() {
  return (
    <footer style={{position: "relative", backgroundColor: "#050505", borderTop: "1px solid #1a1a1a", padding: "60px 20px 30px"}}>
      <div style={{maxWidth: "1200px", margin: "0 auto"}}>
        <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "40px", marginBottom: "48px"}}>

          <div>
            <a href="/" style={{textDecoration: "none", display: "inline-block", marginBottom: "16px"}}>
              <span style={{fontSize: "20px", fontWeight: "900", letterSpacing: "-1px"}}>
                <span style={{color: "white"}}>HYPER</span>
                <span style={{background: "linear-gradient(135deg, #ef4444, #991b1b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>HARD</span>
              </span>
            </a>
            <p style={{color: "#4b5563", fontSize: "13px", lineHeight: "1.7", marginTop: "8px"}}>
              Servidor de Minecraft Survival Custom y Lifesteal. Comunidad activa desde 2022.
            </p>
          </div>

          <div>
            <h4 style={{color: "white", fontSize: "13px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px"}}>Modalidades</h4>
            <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
              <a href="/survival" style={{color: "#6b7280", fontSize: "14px", textDecoration: "none", transition: "color 0.2s"}}>Survival Custom</a>
              <a href="/lifesteal" style={{color: "#6b7280", fontSize: "14px", textDecoration: "none", transition: "color 0.2s"}}>Lifesteal</a>
            </div>
          </div>

          <div>
            <h4 style={{color: "white", fontSize: "13px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px"}}>Información</h4>
            <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
              <a href="/comunidad" style={{color: "#6b7280", fontSize: "14px", textDecoration: "none", transition: "color 0.2s"}}>Comunidad</a>
              <a href="/reglas" style={{color: "#6b7280", fontSize: "14px", textDecoration: "none", transition: "color 0.2s"}}>Reglas</a>
              <a href="/resenas" style={{color: "#6b7280", fontSize: "14px", textDecoration: "none", transition: "color 0.2s"}}>Reseñas</a>
              <a href="/tienda" style={{color: "#6b7280", fontSize: "14px", textDecoration: "none", transition: "color 0.2s"}}>Tienda</a>
            </div>
          </div>

          <div>
            <h4 style={{color: "white", fontSize: "13px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px"}}>Comunidad</h4>
            <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
              <a href="https://discord.hyperhard.space" target="_blank" rel="noopener noreferrer" style={{color: "#6b7280", fontSize: "14px", textDecoration: "none", transition: "color 0.2s"}}>Discord</a>
              <a href="https://www.youtube.com/@hyperhardnetwork" target="_blank" rel="noopener noreferrer" style={{color: "#6b7280", fontSize: "14px", textDecoration: "none", transition: "color 0.2s"}}>YouTube</a>
              <a href="https://www.instagram.com/hyperhard_network/" target="_blank" rel="noopener noreferrer" style={{color: "#6b7280", fontSize: "14px", textDecoration: "none", transition: "color 0.2s"}}>Instagram</a>
              <a href="https://x.com/HyperHardMC" target="_blank" rel="noopener noreferrer" style={{color: "#6b7280", fontSize: "14px", textDecoration: "none", transition: "color 0.2s"}}>X / Twitter</a>
            </div>
          </div>

        </div>

        <div style={{borderTop: "1px solid #1a1a1a", paddingTop: "24px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "12px"}}>
          <p style={{color: "#374151", fontSize: "13px", margin: 0}}>
            &copy; 2024 HyperHard Network. Todos los derechos reservados.
          </p>
          <p style={{color: "#374151", fontSize: "13px", margin: 0}}>
            mc.hyperhard.space
          </p>
        </div>
      </div>
    </footer>
  );
}
