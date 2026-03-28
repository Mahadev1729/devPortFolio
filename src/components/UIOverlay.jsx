import React from "react";
import { motion } from "framer-motion";

export default function UIOverlay({ active, onClose, content }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: active ? 1 : 0, y: active ? 0 : 12 }}
      transition={{ duration: 0.45 }}
      className={`pointer-events-none fixed inset-0 z-50 flex items-center justify-center`}
    >
      <div
        className={`pointer-events-auto max-w-3xl w-[92%] p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md`}
      >
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-zinc-50">
            {content?.title || "Details"}
          </h3>
          <button onClick={onClose} className="text-zinc-300 text-sm">
            Close
          </button>
        </div>
        <div className="mt-4 text-sm text-zinc-200">{content?.body}</div>
      </div>
    </motion.div>
  );
}
