"use client";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [temaEscuro, setTemaEscuro] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", temaEscuro);
  }, [temaEscuro]);

  return (
    <>
      {/* Sol (modo claro) */}
      <button
        onClick={() => setTemaEscuro(false)}
        className="absolute top-2 left-2 w-10 h-10 rounded-full overflow-hidden border"
        title="Modo Claro"
      >
        <img src="/claro.jpeg" alt="Sol" className="object-cover w-full h-full" />
      </button>

      {/* Lua (modo escuro) */}
      <button
        onClick={() => setTemaEscuro(true)}
        className="absolute top-2 right-2 w-10 h-10 rounded-full overflow-hidden border"
        title="Modo Escuro"
      >
        <img src="/escuro.jpg" alt="Lua" className="object-cover w-full h-full" />
      </button>
    </>
  );
}