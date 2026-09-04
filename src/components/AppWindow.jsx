import React from "react";

export default function AppWindow({ title, children, className = "" }) {
  return (
    <div
      className={`rounded-2xl shadow-xl border border-white/10 bg-white/6 backdrop-blur-lg overflow-hidden ${className} transition-transform duration-300 transform hover:scale-[1.01]`}
    >
      <div className="flex items-center gap-3 px-4 py-2 bg-white/4 border-b border-white/6">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-amber-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 text-center font-medium text-sm text-white/95">
          {title}
        </div>
        <div className="w-8" />
      </div>

      <div className="p-4 text-sm text-white/90">{children}</div>
    </div>
  );
}
