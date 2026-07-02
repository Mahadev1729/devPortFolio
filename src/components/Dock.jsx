import React from "react";

const apps = [
  { key: "about", label: "About", emoji: "👤" },
  { key: "projects", label: "Projects", emoji: "📁" },
  { key: "skills", label: "Skills", emoji: "🛠️" },
  { key: "contact", label: "Contact", emoji: "✉️" },
];

export default function Dock() {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40">
      <div className="flex items-center gap-4 px-4 py-2 bg-white/6 backdrop-blur-xl rounded-full border border-white/10 shadow-lg">
        {apps.map((a) => (
          <div
            key={a.key}
            className="w-14 h-14 flex items-center justify-center rounded-lg bg-white/4 hover:bg-white/8 transform transition-all duration-200 hover:scale-110 cursor-pointer"
          >
            <div className="text-2xl select-none">{a.emoji}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
