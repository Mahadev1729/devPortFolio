import React from "react";

export default function Shimmer({
  className = "",
  style = {},
  children = null,
  label = "Loading",
}) {
  return (
    <div
      role="status"
      aria-label={label}
      className={`shimmer ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
