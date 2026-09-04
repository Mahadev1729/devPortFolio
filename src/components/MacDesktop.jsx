import React from "react";
import TopMenuBar from "./TopMenuBar";
import Dock from "./Dock";
import AppWindow from "./AppWindow";

export default function MacDesktop() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-sky-800">
      <TopMenuBar />

      <div className="pt-12 px-8 pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-6">
          <AppWindow title="About" className="min-h-[220px]">
            <p className="mb-2">
              Hi — I'm Mahadev, a frontend developer focused on delightful UX
              and clean code.
            </p>
            <p className="text-xs text-white/70">
              This window is a styled mock; content is placeholder to showcase
              layout.
            </p>
          </AppWindow>

          <AppWindow title="Projects" className="min-h-[220px]">
            <ul className="list-disc pl-5 text-sm text-white/90">
              <li>Project A — Interactive portfolio</li>
              <li>Project B — 3D experiments</li>
            </ul>
          </AppWindow>

          <AppWindow title="Skills" className="min-h-[220px]">
            <div className="flex gap-3 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-white/6">React</span>
              <span className="px-3 py-1 rounded-full bg-white/6">
                Tailwind
              </span>
              <span className="px-3 py-1 rounded-full bg-white/6">
                Three.js
              </span>
            </div>
          </AppWindow>

          <AppWindow title="Contact" className="min-h-[220px]">
            <p>Email: hello@example.com</p>
          </AppWindow>
        </div>
      </div>

      <Dock />
    </div>
  );
}
