import {
  ArrowDown,
  ArrowLeftRight,
  CircuitBoard,
  Monitor,
  Smartphone,
} from "lucide-react";
import { Label, Bits } from "./ui";

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-content">
        <Label>
          <span className="tiny-line" /> UNA CONEXIÓN, MUCHAS POSIBILIDADES
        </Label>
        <h1>
          Comparativa de
          <br />
          <span>comunicaciones.</span>
        </h1>
        <h3>Conceptos clave, evolución y tecnologías actuales</h3>
        <p>
          Desde un bit hasta una red completa. Descubre cómo los dispositivos
          intercambian información y qué hace diferente a cada conexión.
        </p>
        <a href="#basicos" className="primary-button">
          Explorar comunicaciones <ArrowDown size={17} />
        </a>
        <div className="hero-caption">
          <span className="status-dot" /> Visualiza. Compara. Comprende.
        </div>
      </div>
      <div
        className="hero-visual"
        aria-label="Computadora, teléfono y servidor intercambiando datos"
      >
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="hero-grid" />
        <div className="device desktop">
          <Monitor />
          <span>COMPUTADORA</span>
        </div>
        <div className="device phone">
          <Smartphone />
          <span>DISPOSITIVO</span>
        </div>
        <div className="device server">
          <CircuitBoard />
          <span>SISTEMA</span>
        </div>
        <div className="hub">
          <ArrowLeftRight />
          <span>DATOS</span>
        </div>
        <div className="hero-link link-one">
          <Bits />
        </div>
        <div className="hero-link link-two">
          <Bits reverse />
        </div>
        <div className="hero-link link-three">
          <Bits />
        </div>
        <span className="float-label binary">
          0101 <span>→</span> 1010
        </span>
        <span className="float-label connected">
          <span className="status-dot" /> Conexión estable
        </span>
        <span className="visual-caption">TODO EMPIEZA CON UN BIT.</span>
      </div>
      <div className="hero-bottom">
        <span>UN RECORRIDO POR LA COMUNICACIÓN DIGITAL</span>
        <span>
          10 conceptos · infinitas conexiones <ArrowDown size={15} />
        </span>
      </div>
    </section>
  );
}
