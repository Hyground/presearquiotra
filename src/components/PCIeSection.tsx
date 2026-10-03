import { useState } from "react";
import {
  ArrowRight,
  Bluetooth,
  CircuitBoard,
  Cpu,
  Info,
  Wifi,
} from "lucide-react";
import { Label, SectionTitle, Tip } from "./ui";

export default function PCIeSection() {
  const [lanes, setLanes] = useState(4);
  return (
    <section id="buses" className="section">
      <SectionTitle
        number="05"
        title="Dentro del equipo, todo se conecta."
        description="Los buses transportan datos; los formatos físicos definen cómo encajan los dispositivos."
      />
      <div className="grid buses-grid">
        <article className="card pcie-card">
          <span className="icon-tile">
            <CircuitBoard />
          </span>
          <Label>LA AUTOPISTA DE LOS DATOS</Label>
          <h3>
            PCI Express <span>PCIe</span>
          </h3>
          <p>
            Interconexión serie de alta velocidad para tarjetas gráficas, redes,
            capturadoras y SSD NVMe.
          </p>
          <div
            className="lane-select"
            aria-label="Seleccionar cantidad de lanes"
          >
            {[1, 4, 8, 16].map((n) => (
              <button
                aria-pressed={n === lanes}
                className={n === lanes ? "selected" : ""}
                onClick={() => setLanes(n)}
                key={n}
              >
                x{n}
              </button>
            ))}
          </div>
          <div className="lane-visual">
            <span>CPU</span>
            <div>
              {Array.from({ length: lanes }, (_, i) => (
                <i key={i}>
                  <b style={{ animationDelay: `${i * 0.1}s` }} />
                </i>
              ))}
            </div>
            <span>PCIe</span>
          </div>
          <Tip label="xN = cantidad de lanes disponibles. Cada lane tiene un par de transmisión y uno de recepción.">
            <Info size={15} /> x{lanes} = {lanes}{" "}
            {lanes === 1 ? "lane" : "lanes"} disponibles
          </Tip>
          <p className="small-note">
            Más lanes, más ancho de banda a igual generación. El rendimiento
            depende de ambos extremos.
          </p>
        </article>
        <div className="compact-buses">
          <article className="card compact-bus">
            <div>
              <Label>EL PREDECESOR COMPACTO</Label>
              <h3>Mini PCIe</h3>
              <p>
                Formato compacto con PCIe y USB, habitual en laptops para Wi-Fi,
                Bluetooth y módems.
              </p>
              <span className="tag">GENERACIÓN ANTERIOR</span>
            </div>
            <div className="board mini-board">
              <Wifi />
              <span>MINI PCIe</span>
              <i />
            </div>
          </article>
          <article className="card compact-bus">
            <div>
              <Label>VERSÁTIL Y COMPACTO</Label>
              <h3>M.2</h3>
              <p>
                Formato físico para SSD, Wi-Fi y Bluetooth. Puede usar
                PCIe/NVMe, SATA o USB, según el dispositivo y la ranura.
              </p>
              <span className="tag green-text">FORMATO ≠ PROTOCOLO</span>
            </div>
            <div className="board m2-board">
              <Cpu />
              <span>M.2</span>
              <i />
            </div>
          </article>
          <div className="evolution-label">
            Mini PCIe <ArrowRight size={16} /> M.2{" "}
            <span>Una evolución del formato</span>
          </div>
        </div>
      </div>
      <div className="concept-note">
        <Info size={20} />
        <span>
          <strong>No todo M.2 es NVMe.</strong> Verifica el tamaño, la clave de
          la ranura y la interfaz compatible.
        </span>
      </div>
    </section>
  );
}
