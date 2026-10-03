import { useState } from "react";
import { Cpu, Info } from "lucide-react";
import { Label, Tip, DemoButton, Bits } from "./ui";

export default function UARTSection() {
  const [run, setRun] = useState(0);
  return (
    <div className="uart-section">
      <div>
        <Label>02 / CONEXIÓN DIRECTA</Label>
        <h2>
          UART<span className="title-dot">.</span>
        </h2>
        <p className="expanded-name">
          Universal Asynchronous Receiver-Transmitter
        </p>
        <p>
          Comunicación serie sin una señal de reloj compartida. Ambos
          dispositivos acuerdan la velocidad y el formato de los datos.
        </p>
        <div className="pill-row">
          <span>Microcontroladores</span>
          <span>Sensores</span>
          <span>Módulos</span>
        </div>
        <DemoButton onClick={() => setRun(run + 1)} playing={run > 0} />
      </div>
      <div className="uart-diagram" key={run}>
        <div className="uart-device">
          <Cpu />
          <strong>Dispositivo A</strong>
          <Tip label="TX = Transmit: transmitir">
            TX <Info size={12} />
          </Tip>
          <Tip label="RX = Receive: recibir">
            RX <Info size={12} />
          </Tip>
          <span>GND</span>
        </div>
        <div className="uart-wires">
          <Bits playing />
          <Bits reverse playing />
          <div className="ground-wire" />
          <span className="uart-note">TX se conecta a RX · tierra común</span>
        </div>
        <div className="uart-device">
          <Cpu />
          <strong>Dispositivo B</strong>
          <Tip label="RX = Receive: recibir">
            RX <Info size={12} />
          </Tip>
          <Tip label="TX = Transmit: transmitir">
            TX <Info size={12} />
          </Tip>
          <span>GND</span>
        </div>
      </div>
    </div>
  );
}
