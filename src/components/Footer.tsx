import { ArrowDown, ArrowLeftRight, Bluetooth } from "lucide-react";
import { Label } from "./ui";

export default function Footer() {
  return (
    <footer id="acerca">
      <div className="footer-main">
        <div>
          <a className="brand" href="#inicio">
            <span className="brand-mark">
              <ArrowLeftRight size={20} />
            </span>
            comuni<span>lab</span>
          </a>
          <p>
            Comprender la tecnología empieza
            <br />
            por ver cómo se conecta.
          </p>
        </div>
        <div>
          <Label>ACERCA DE ESTE PROYECTO</Label>
          <p>
            Comparativa de Comunicaciones:
            <br />
            Conceptos Clave y Evolución.
          </p>
          <span>Un recurso interactivo para exposiciones universitarias.</span>
        </div>
        <a className="back-top" href="#inicio">
          Volver al inicio <ArrowDown size={16} />
        </a>
      </div>
      <div className="footer-bottom">
        <span>Hecho para aprender, explorar y compartir conocimiento.</span>
        <span>
          Referencias:{" "}
          <a href="https://usb.org/usb4" target="_blank" rel="noreferrer">
            USB-IF
          </a>{" "}
          ·{" "}
          <a href="https://www.wi-fi.org/" target="_blank" rel="noreferrer">
            Wi-Fi Alliance
          </a>{" "}
          ·{" "}
          <a
            href="https://www.bluetooth.com/learn-about-bluetooth/tech-overview/"
            target="_blank"
            rel="noreferrer"
          >
            Bluetooth SIG
          </a>
        </span>
      </div>
    </footer>
  );
}
