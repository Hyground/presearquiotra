import { type ReactNode, type CSSProperties } from "react";
import { Play } from "lucide-react";

export function Label({ children }: { children: ReactNode }) {
  return <div className="eyebrow">{children}</div>;
}

export function SectionTitle({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="section-title">
      <Label>
        <span className="section-number">{number}</span> CONCEPTOS EN ACCIÓN
      </Label>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export function Tip({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <span className="tip" tabIndex={0}>
      {children}
      <span role="tooltip">{label}</span>
    </span>
  );
}

export function DemoButton({
  onClick,
  playing = false,
}: {
  onClick: () => void;
  playing?: boolean;
}) {
  return (
    <button className="demo-button" onClick={onClick}>
      <Play size={14} fill="currentColor" />
      {playing ? "Repetir transmisión" : "Ver transmisión"}
    </button>
  );
}

export function Bits({
  parallel = false,
  playing = true,
  reverse = false,
}: {
  parallel?: boolean;
  playing?: boolean;
  reverse?: boolean;
}) {
  return (
    <div
      className={`bit-track ${parallel ? "parallel" : "serial"} ${playing ? "playing" : ""} ${reverse ? "reverse" : ""}`}
      aria-label={
        parallel
          ? "Bits simultáneos en cuatro canales"
          : "Bits secuenciales en un canal"
      }
    >
      {Array.from({ length: parallel ? 4 : 1 }, (_, i) => (
        <div className="wire" key={i}>
          {Array.from({ length: parallel ? 1 : 4 }, (_, j) => (
            <span
              className="bit"
              key={j}
              style={
                { "--delay": `${parallel ? 0 : j * 0.45}s` } as CSSProperties
              }
            >
              {(i + j) % 2}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
