import {
  Check,
  ChevronRight,
  Router,
  ShieldCheck,
  Wifi,
  Zap,
} from "lucide-react";

export default function WifiSection() {
  return (
    <div className="wifi-content">
      <div className="wifi-intro">
        <div>
          <span className="icon-tile">
            <Wifi />
          </span>
          <h3>Wi-Fi</h3>
          <p>
            Una puerta a la red.
            <br />
            Sin estar atado a un cable.
          </p>
        </div>
        <div className="wifi-visual">
          <div className="wave wave-1" />
          <div className="wave wave-2" />
          <div className="wave wave-3" />
          <Router />
          <span>RED LOCAL</span>
        </div>
      </div>
      <div className="wifi-timeline">
        {[
          ["4", "802.11n", "2,4 / 5 GHz"],
          ["5", "802.11ac", "5 GHz"],
          ["6 / 6E", "802.11ax", "6E añade 6 GHz"],
          ["7", "802.11be", "Conexiones multienlace"],
        ].map(([v, s, d]) => (
          <div key={v}>
            <span>
              Wi-Fi <strong>{v}</strong>
            </span>
            <small>{s}</small>
            <p>{d}</p>
          </div>
        ))}
      </div>
      <div className="grid three wifi-facts">
        <div>
          <h4>
            <Check size={17} /> Ventajas
          </h4>
          <p>
            Alta velocidad y acceso a redes.
            <br />
            Movilidad y un gran ecosistema.
          </p>
        </div>
        <div>
          <h4>
            <Zap size={17} /> Consideraciones
          </h4>
          <p>
            Interferencias, distancia y obstáculos.
            <br />
            Mayor consumo que algunas conexiones de corto alcance.
          </p>
        </div>
        <div>
          <h4>
            <ShieldCheck size={17} /> Seguridad
          </h4>
          <div className="security">
            <span>WEP</span>
            <ChevronRight />
            <span>WPA</span>
            <ChevronRight />
            <span>WPA2</span>
            <ChevronRight />
            <strong>WPA3</strong>
          </div>
          <p>
            WEP: obsoleto e inseguro.
            <br />
            WPA3: recomendado cuando está disponible.
          </p>
        </div>
      </div>
    </div>
  );
}
