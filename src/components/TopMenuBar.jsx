import React from "react";

export default function TopMenuBar() {
  return (
    <div className="fixed top-0 left-0 right-0 h-8 flex items-center justify-between px-4 bg-white/5 backdrop-blur-md border-b border-white/5 text-white text-sm z-40">
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-full bg-white/30 flex items-center justify-center text-xs font-medium">
          MA
        </div>
        <div className="font-medium">Mahadev Athani</div>
      </div>

      <div className="flex items-center gap-4 text-xs opacity-95">
        <div className="px-2 py-0.5 rounded-md bg-white/3">English</div>
        <div className="flex items-center gap-2">
          <span className="text-sm">⚙️</span>
          <span className="ml-1">
            {new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>
      </div>
    </div>
  );
}
