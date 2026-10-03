import { ArrowRight, Bluetooth } from "lucide-react";
import { Label } from "./ui";

const legacy = [
  {
    name: "Paralelo / LPT",
    kind: "lpt",
    use: "Impresoras y periféricos.",
    importance: "Enviaba varios bits simultáneamente.",
    replacement: "USB y conexiones de red",
  },
  {
    name: "Serie RS-232",
    kind: "rs232",
    use: "Módems, equipos industriales y periféricos.",
    importance: "Una interfaz duradera para comunicación serie.",
    replacement: "USB; sigue vigente en industria",
  },
  {
    name: "PS/2",
    kind: "ps2",
    use: "Teclados y ratones.",
    importance: "Conectores dedicados y simples.",
    replacement: "USB y Bluetooth",
  },
  {
    name: "FireWire",
    kind: "firewire",
    use: "Cámaras, audio y dispositivos multimedia.",
    importance: "Transferencia rápida y sensible al tiempo.",
    replacement: "USB y Thunderbolt",
  },
];

export default function LegacyPorts() {
  return (
    <div className="subsection legacy-section">
      <div className="split-heading">
        <div>
          <Label>04 / MUSEO DE CONEXIONES</Label>
          <h2>Antes de lo universal.</h2>
          <p>Conexiones que marcaron una época y abrieron el camino.</p>
        </div>
        <span className="museum-label">PEQUEÑAS PIEZAS DE HISTORIA</span>
      </div>
      <div className="grid four">
        {legacy.map((c) => (
          <article className="card legacy-card" key={c.name}>
            <span className="legacy-badge">LEGACY</span>
            <div className={`port-art ${c.kind}`}>
              {Array.from({ length: c.kind === "ps2" ? 6 : 12 }, (_, i) => (
                <i key={i} />
              ))}
            </div>
            <h3>{c.name}</h3>
            {c.kind === "firewire" && (
              <span className="standard">IEEE 1394</span>
            )}
            <p>{c.use}</p>
            <p className="legacy-importance">{c.importance}</p>
            <div className="replacement">
              <ArrowRight size={14} />
              <span>{c.replacement}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
