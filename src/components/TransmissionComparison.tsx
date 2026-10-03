import { useState } from "react";
import { ArrowRight, Cable, Check, Cpu, Info } from "lucide-react";
import { SectionTitle, DemoButton, Bits } from "./ui";

export default function TransmissionComparison() {
  const [run, setRun] = useState(0);
  return (
    <>
      <div className="split-heading">
        <SectionTitle
          number="01"
          title="Un mensaje. Dos formas de viajar."
          description="La diferencia está en cómo enviamos los bits de un dispositivo a otro."
        />
        <DemoButton onClick={() => setRun(run + 1)} playing={run > 0} />
      </div>
      <div className="grid two transmission" key={run}>
        {[
          {
            parallel: true,
            title: "Comunicación paralela",
            tag: "VARIOS CANALES",
            desc: "Varios bits al mismo tiempo.",
            points: [
              "Requiere múltiples líneas.",
              "Eficiente en distancias cortas.",
              "Mayor complejidad de cableado.",
            ],
            example: "Puerto paralelo de impresoras",
          },
          {
            parallel: false,
            title: "Comunicación en serie",
            tag: "UN CANAL LÓGICO",
            desc: "Un bit detrás de otro.",
            points: [
              "Menos cables y conexiones.",
              "Más adecuada para distancias mayores.",
              "Base de muchas tecnologías modernas.",
            ],
            example: "USB, SATA y PCIe",
          },
        ].map((c) => (
          <article
            className={`card transmission-card ${c.parallel ? "purple" : "blue"}`}
            key={c.title}
          >
            <div className="card-top">
              <span className="icon-tile">
                {c.parallel ? <Cable /> : <ArrowRight />}
              </span>
              <span className="tag">{c.tag}</span>
            </div>
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
            <div className="transmission-demo">
              <Cpu />
              <Bits parallel={c.parallel} playing={run > 0} />
              <Cpu />
            </div>
            <ul className="check-list">
              {c.points.map((p) => (
                <li key={p}>
                  <Check size={15} />
                  {p}
                </li>
              ))}
            </ul>
            <div className="example">
              <span>EJEMPLO</span>
              {c.example}
            </div>
          </article>
        ))}
      </div>
      <p className="small-note">
        <Info size={14} /> Más canales no siempre significa más velocidad:
        también influyen la frecuencia, la sincronización y el diseño.
      </p>
    </>
  );
}
