import { useState } from "react";
import {
  Bluetooth,
  Headphones,
  Keyboard,
  Mouse,
  Smartphone,
  Watch,
  Zap,
} from "lucide-react";
import { Label } from "./ui";

export default function BluetoothSection() {
  const [scan, setScan] = useState(0);
  return (
    <div className="bluetooth-section">
      <div className="bluetooth-radar" key={scan}>
        <div className="radar-ring r1" />
        <div className="radar-ring r2" />
        <div className="radar-ring r3" />
        <div className="radar-phone">
          <Smartphone />
          <Bluetooth size={16} />
        </div>
        {[
          { icon: Headphones, label: "Audífonos", pos: "a" },
          { icon: Watch, label: "Smartwatch", pos: "b" },
          { icon: Mouse, label: "Mouse", pos: "c" },
          { icon: Keyboard, label: "Teclado", pos: "d" },
        ].map((d, i) => (
          <div
            className={`radar-device radar-${d.pos}`}
            style={{ animationDelay: `${i * 0.3}s` }}
            key={d.label}
          >
            <d.icon />
            <span>{d.label}</span>
            <i />
          </div>
        ))}
      </div>
      <div>
        <Label>07 / CONEXIONES CERCANAS</Label>
        <h3>
          <Bluetooth /> Bluetooth
        </h3>
        <p>
          Comunicación inalámbrica de corto alcance para periféricos y
          dispositivos: audífonos, controles, wearables y sensores.
        </p>
        <div className="pill-row">
          <span>Bajo consumo</span>
          <span>Conexión directa</span>
          <span>Corto alcance</span>
        </div>
        <div className="ble-note">
          <Zap size={21} />
          <p>
            <strong>Pequeña energía, grandes posibilidades.</strong>
            <br />
            Bluetooth Low Energy (BLE) permite conectar sensores y dispositivos
            con bajo consumo. El alcance depende del equipo y del entorno.
          </p>
        </div>
        <button className="demo-button" onClick={() => setScan(scan + 1)}>
          <Bluetooth size={15} /> Detectar dispositivos
        </button>
        <span className="sr-only" aria-live="polite">
          {scan > 0
            ? "Cuatro dispositivos encontrados en esta simulación."
            : ""}
        </span>
      </div>
    </div>
  );
}
