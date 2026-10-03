import { useState, useEffect } from "react";
import { ArrowLeftRight, Menu, X } from "lucide-react";

const nav = [
  ["inicio", "Inicio"],
  ["basicos", "Básicos"],
  ["cableados", "Cableados"],
  ["buses", "Buses"],
  ["inalambricos", "Inalámbricos"],
  ["acerca", "Acerca de"],
];

export default function Navbar() {
  const [active, setActive] = useState("inicio");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const updateActive = () => {
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 4
      ) {
        setActive("acerca");
        return;
      }
      const current = [...nav].reverse().find(([id]) => {
        const el = document.getElementById(id);
        return el && el.getBoundingClientRect().top <= 160;
      });
      setActive(current?.[0] ?? "inicio");
    };
    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    return () => window.removeEventListener("scroll", updateActive);
  }, []);
  return (
    <header className="navbar">
      <div className="nav-inner">
        <a className="brand" href="#inicio" aria-label="ComuniLab, inicio">
          <span className="brand-mark">
            <ArrowLeftRight size={20} />
          </span>
          comuni<span>lab</span>
          <span className="brand-dot" />
        </a>
        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar navegación" : "Abrir navegación"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav className={open ? "open" : ""} aria-label="Navegación principal">
          {nav.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? "active" : ""}
              aria-current={active === id ? "location" : undefined}
              onClick={() => {
                setActive(id);
                setOpen(false);
              }}
            >
              {label}
            </a>
          ))}
        </nav>
        <span className="nav-tag">
          <span /> APRENDE EXPLORANDO
        </span>
      </div>
    </header>
  );
}
