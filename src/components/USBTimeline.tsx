import { useState } from "react";
import { ArrowRight, Info, Usb } from "lucide-react";
import { SectionTitle } from "./ui";

const usbVersions = [
  {
    name: "USB 1.x",
    year: "1996–1998",
    speed: "12 Mbps",
    width: 5,
    detail:
      "USB 1.0 y 1.1: hasta 12 Mbps. Una conexión común para teclados, ratones y periféricos.",
    gens: ["Low Speed · 1,5 Mbps", "Full Speed · 12 Mbps"],
  },
  {
    name: "USB 2.0",
    year: "2000",
    speed: "480 Mbps",
    width: 18,
    detail:
      "Un gran salto para memorias USB, impresoras y cámaras. Mantiene compatibilidad con USB 1.x.",
    gens: ["High Speed · 480 Mbps"],
  },
  {
    name: "USB 3.x",
    year: "2008–2017",
    speed: "20 Gbps",
    width: 55,
    detail:
      "Generaciones más rápidas para almacenamiento y transferencia de archivos grandes.",
    gens: [
      "USB 3.2 Gen 1 · 5 Gbps",
      "USB 3.2 Gen 2 · 10 Gbps",
      "USB 3.2 Gen 2×2 · 20 Gbps",
    ],
  },
  {
    name: "USB4",
    year: "2019 →",
    speed: "40 / 80 Gbps",
    width: 100,
    detail:
      "Hasta 40 Gbps inicialmente. USB4 versión 2.0 admite hasta 80 Gbps; también contempla 120/40 Gbps asimétricos.",
    gens: ["USB4 inicial · hasta 40 Gbps", "USB4 v2.0 · hasta 80 Gbps"],
  },
];

export default function USBTimeline() {
  const [selected, setSelected] = useState(2);
  return (
    <div className="subsection">
      <SectionTitle
        number="03"
        title="USB: cada generación, un salto."
        description="La misma idea, cada vez más posibilidades. Selecciona una generación para explorar."
      />
      <div
        className="usb-timeline"
        role="tablist"
        aria-label="Generaciones USB"
      >
        {usbVersions.map((v, i) => (
          <button
            id={`usb-tab-${i}`}
            aria-controls="usb-panel"
            role="tab"
            tabIndex={i === selected ? 0 : -1}
            aria-selected={i === selected}
            className={i === selected ? "selected" : ""}
            key={v.name}
            onClick={() => setSelected(i)}
            onMouseEnter={() => setSelected(i)}
            onKeyDown={(event) => {
              const next =
                event.key === "ArrowRight"
                  ? (i + 1) % 4
                  : event.key === "ArrowLeft"
                    ? (i + 3) % 4
                    : event.key === "Home"
                      ? 0
                      : event.key === "End"
                        ? 3
                        : null;
              if (next !== null) {
                event.preventDefault();
                setSelected(next);
                document.getElementById(`usb-tab-${next}`)?.focus();
              }
            }}
          >
            <span>{v.year}</span>
            <i>
              <Usb size={19} />
            </i>
            <strong>{v.name}</strong>
            <small>{v.speed}</small>
          </button>
        ))}
      </div>
      <div
        className="card usb-detail"
        id="usb-panel"
        role="tabpanel"
        aria-labelledby={`usb-tab-${selected}`}
      >
        <div>
          <span className="tag blue-text">GENERACIÓN SELECCIONADA</span>
          <h3>{usbVersions[selected].name}</h3>
          <p>{usbVersions[selected].detail}</p>
        </div>
        <div className="speed-bars">
          {usbVersions.map((v, i) => (
            <div className={i === selected ? "highlight" : ""} key={v.name}>
              <span>{v.name}</span>
              <div className="bar-track">
                <i style={{ width: `${v.width}%` }} />
              </div>
              <strong>{v.speed}</strong>
            </div>
          ))}
          <small>
            Barras ilustrativas, escala no lineal. Máximos teóricos; la
            velocidad real depende del equipo y del cable.
          </small>
        </div>
        <div className="usb-generations">
          {usbVersions[selected].gens.map((g) => (
            <span key={g}>{g}</span>
          ))}
        </div>
      </div>
      <div className="connector-panel">
        <div>
          <Info size={22} />
          <h3>
            Versión USB <span>≠</span> tipo de conector
          </h3>
          <p>
            USB-C describe el conector físico. Por sí solo, no garantiza una
            velocidad determinada.
          </p>
        </div>
        <div className="connectors">
          {["Type-A", "Type-B", "Micro-USB", "Type-C"].map((c, i) => (
            <div key={c}>
              <div className={`connector shape-${i}`}>
                <i />
              </div>
              <span>USB {c}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
