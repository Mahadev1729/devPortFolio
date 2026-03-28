import React from "react";
import { SiReact, SiJavascript, SiPython } from "react-icons/si";

const ICONS = [
  { Icon: SiReact, left: "8%", top: "18%", size: 36 },
  { Icon: SiJavascript, left: "20%", top: "72%", size: 34 },
  { Icon: SiPython, left: "82%", top: "28%", size: 36 },
  { Icon: SiReact, left: "62%", top: "62%", size: 30 },
  { Icon: SiJavascript, left: "44%", top: "36%", size: 28 },
];

export default function FloatingTech() {
  return (
    <div className="floating-tech" aria-hidden>
      {ICONS.map((it, i) => {
        const { Icon, left, top, size } = it;
        const delay = `${(i % 4) * 1.2}s`;
        const duration = `${8 + (i % 3) * 3}s`;
        return (
          <div
            key={i}
            className="floating-tech-item"
            style={{
              left,
              top,
              animationDelay: delay,
              animationDuration: duration,
            }}
          >
            <Icon size={size} className="tech-icon" />
          </div>
        );
      })}
    </div>
  );
}
