import { useEffect, useRef } from "react";

export default function LottiePlayer({
  path,
  loop = true,
  autoplay = true,
  className = "",
}) {
  const container = useRef(null);

  useEffect(() => {
    if (!container.current) return;
    let anim;
    let canceled = false;

    // dynamic import so lottie-web isn't bundled into initial JS
    import("lottie-web").then((mod) => {
      if (canceled) return;
      const lottie = mod.default || mod;
      anim = lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop,
        autoplay,
        path,
      });
    });

    return () => {
      canceled = true;
      if (anim && anim.destroy) anim.destroy();
    };
  }, [path, loop, autoplay]);

  return <div ref={container} className={className} />;
}
