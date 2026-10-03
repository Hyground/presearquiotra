import { useState } from "react";
import {
  Bluetooth,
  Check,
  Headphones,
  Laptop,
  Monitor,
  Mouse,
  Router,
  Watch,
  Wifi,
} from "lucide-react";
import { Label, SectionTitle } from "./ui";

const needs = [
  {
    name: "Audífonos",
    icon: Headphones,
    type: "Bluetooth",
    why: "Bluetooth permite enviar audio directamente desde tu teléfono sin depender de una red Wi-Fi.",
  },
  {
    name: "Laptop a Internet",
    icon: Laptop,
    type: "Wi-Fi",
    why: "Wi-Fi conecta la laptop a una red local cuyo router puede ofrecer acceso a Internet.",
  },
  {
    name: "Smartwatch",
    icon: Watch,
    type: "Bluetooth",
    why: "Bluetooth Low Energy suele sincronizar el reloj con el teléfono ahorrando batería.",
  },
  {
    name: "PC a router",
    icon: Monitor,
    type: "Wi-Fi",
    why: "Wi-Fi permite conectar el PC al router sin cables. Ethernet es otra opción si buscas una conexión cableada.",
  },
  {
    name: "Mouse inalámbrico",
    icon: Mouse,
    type: "Bluetooth",
    why: "Bluetooth conecta periféricos con poco consumo. Algunos ratones usan un receptor de radio propio de 2,4 GHz.",
  },
];

export default function WifiVsBluetooth() {
  const [choice, setChoice] = useState(0);
  return (
    <div className="subsection comparison">
      <SectionTitle
        number="08"
        title="La mejor conexión depende de ti."
        description="Wi-Fi y Bluetooth se complementan. Cada uno tiene su lugar."
      />
      <div
        className="comparison-table"
        role="table"
        aria-label="Comparación de Wi-Fi y Bluetooth"
      >
        <div className="comparison-row table-heading" role="row">
          <span role="columnheader">Característica</span>
          <span role="columnheader">
            <Wifi /> Wi-Fi
          </span>
          <span role="columnheader">
            <Bluetooth /> Bluetooth
          </span>
        </div>
        {[
          ["Uso principal", "Redes / Internet", "Periféricos / dispositivos"],
          ["Alcance", "Generalmente mayor", "Generalmente menor"],
          ["Velocidad", "Alta", "Generalmente menor"],
          ["Consumo", "Habitualmente mayor", "Bajo, especialmente BLE"],
          ["Ejemplo", "Router ↔ laptop", "Teléfono ↔ audífonos"],
        ].map((row) => (
          <div className="comparison-row" role="row" key={row[0]}>
            {row.map((c, i) => (
              <span role={i === 0 ? "rowheader" : "cell"} key={c}>
                {c}
              </span>
            ))}
          </div>
        ))}
      </div>
      <div className="connection-selector">
        <Label>PONLO EN PRÁCTICA</Label>
        <h3>¿Qué necesito conectar?</h3>
        <div className="choice-buttons">
          {needs.map((n, i) => (
            <button
              aria-pressed={choice === i}
              className={choice === i ? "selected" : ""}
              onClick={() => setChoice(i)}
              key={n.name}
            >
              <n.icon size={19} />
              {n.name}
            </button>
          ))}
        </div>
        <div
          className={`recommendation ${needs[choice].type === "Wi-Fi" ? "recommend-wifi" : ""}`}
          aria-live="polite"
        >
          {needs[choice].type === "Wi-Fi" ? <Wifi /> : <Bluetooth />}
          <div>
            <strong>{needs[choice].type} es una buena elección</strong>
            <p>{needs[choice].why}</p>
          </div>
          <Check size={20} />
        </div>
      </div>
    </div>
  );
}
