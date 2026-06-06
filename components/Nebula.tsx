"use client";

import { useEffect, useState } from "react";

export default function Nebula({ color1 = "#ef4444", color2 = "#3b82f6" }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const particles = [
    { left: "5%", top: "10%" }, { left: "15%", top: "80%" },
    { left: "25%", top: "30%" }, { left: "35%", top: "60%" },
    { left: "45%", top: "15%" }, { left: "55%", top: "75%" },
    { left: "65%", top: "40%" }, { left: "75%", top: "20%" },
    { left: "85%", top: "55%" }, { left: "92%", top: "85%" },
    { left: "10%", top: "45%" }, { left: "20%", top: "90%" },
    { left: "40%", top: "50%" }, { left: "70%", top: "70%" },
    { left: "90%", top: "25%" },
  ];

  return (
    <>
      <div className="nebula-grid" style={{position: "absolute", inset: 0, backgroundImage: `linear-gradient(${color1}06 1px, transparent 1px), linear-gradient(90deg, ${color1}06 1px, transparent 1px)`, backgroundSize: "60px 60px", pointerEvents: "none"}} />
      <div className="nebula-1" style={{position: "absolute", top: "30%", left: "15%", width: "600px", height: "600px", background: `radial-gradient(circle, ${color1}18 0%, transparent 70%)`, filter: "blur(60px)", pointerEvents: "none"}} />
      <div className="nebula-2" style={{position: "absolute", bottom: "20%", right: "10%", width: "500px", height: "500px", background: `radial-gradient(circle, ${color2}15 0%, transparent 70%)`, filter: "blur(80px)", pointerEvents: "none"}} />
      <div className="nebula-3" style={{position: "absolute", top: "50%", left: "50%", width: "800px", height: "300px", background: `radial-gradient(ellipse, ${color1}06 0%, transparent 70%)`, filter: "blur(40px)", pointerEvents: "none"}} />
      {mounted && particles.map((p, i) => (
        <div key={i} className="nebula-particle" style={{position: "absolute", left: p.left, top: p.top, width: i % 3 === 0 ? "3px" : "2px", height: i % 3 === 0 ? "3px" : "2px", backgroundColor: i % 2 === 0 ? color1 : color2, borderRadius: "50%", boxShadow: `0 0 6px ${i % 2 === 0 ? color1 : color2}`, animationDelay: `${(i * 0.4) % 4}s`, animationDuration: `${3 + (i % 4)}s`, pointerEvents: "none"}} />
      ))}
    </>
  );
}