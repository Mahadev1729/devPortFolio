import { useEffect, useRef } from "react";

export default function Cursor() {
  const el = useRef(null);
  const rafRef = useRef(null);
  const posRef = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  const targetRef = useRef({ x: posRef.current.x, y: posRef.current.y });

  useEffect(() => {
    const node = el.current;
    if (!node) return;

    function onMove(e) {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;
      // update CSS variables for global usage
      const pctX = (e.clientX / window.innerWidth) * 100;
      const pctY = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty("--mx", `${pctX}%`);
      document.documentElement.style.setProperty("--my", `${pctY}%`);
    }

    function loop() {
      const cur = posRef.current;
      const target = targetRef.current;
      // simple lerp
      cur.x += (target.x - cur.x) * 0.18;
      cur.y += (target.y - cur.y) * 0.18;
      node.style.transform = `translate(${cur.x}px, ${cur.y}px)`;
      rafRef.current = requestAnimationFrame(loop);
    }

    window.addEventListener("mousemove", onMove);
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div ref={el} className="cursor-spotlight" />
      <div className="global-light" aria-hidden />
    </>
  );
}
