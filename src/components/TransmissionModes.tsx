import { useState } from "react";
import { ArrowLeftRight, Headphones, Radio } from "lucide-react";
import { Label, DemoButton } from "./ui";

export default function TransmissionModes() {
  const [run, setRun] = useState(0);
  return (
    <div className="subsection">
      <div className="split-heading">
        <div>
          <Label>EL SENTIDO IMPORTA</Label>
          <h3 className="subheading">¿Quién puede hablar y cuándo?</h3>
        </div>
        <DemoButton onClick={() => setRun(run + 1)} playing={run > 0} />
      </div>
      <div className="grid three" key={run}>
        {[
          {
            title: "Simplex",
            kind: "simplex",
            text: "Una sola dirección. Uno transmite y el otro recibe.",
            example: "Radio / televisión tradicional",
            icon: Radio,
          },
          {
            title: "Half-duplex",
            kind: "half",
            text: "Ambos transmiten, pero se turnan. También llamado semidúplex.",
            example: "Walkie-talkie",
            icon: ArrowLeftRight,
          },
          {
            title: "Full-duplex",
            kind: "full",
            text: "Ambos transmiten y reciben simultáneamente.",
            example: "Llamada telefónica",
            icon: Headphones,
          },
        ].map((c) => (
          <article className={`card mode ${c.kind}`} key={c.kind}>
            <c.icon className="mode-icon" />
            <h3>{c.title}</h3>
            <div className="mode-demo">
              <span>A</span>
              <div className="directions">
                <div className="direction forward">
                  →<i />
                </div>
                {c.kind !== "simplex" && (
                  <div className="direction backward">
                    ←<i />
                  </div>
                )}
              </div>
              <span>B</span>
            </div>
            <p>{c.text}</p>
            <div className="mode-example">{c.example}</div>
          </article>
        ))}
      </div>
      <p className="small-note">
        Observa los pulsos: una dirección, turnos alternados o las dos
        direcciones al mismo tiempo.
      </p>
    </div>
  );
}
