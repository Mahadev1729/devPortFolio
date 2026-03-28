import { useEffect, useState } from "react";
import LottiePlayer from "./LottiePlayer";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    function hide() {
      setVisible(false);
    }

    window.addEventListener("load", hide);
    const t = setTimeout(hide, 800);
    return () => {
      window.removeEventListener("load", hide);
      clearTimeout(t);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="loading-overlay">
      <div className="text-center">
        <LottiePlayer
          path="https://assets4.lottiefiles.com/private_files/lf30_editor_jd6sew4x.json"
          className="lottie-medium"
        />
        <p className="text-zinc-100 mt-4 text-sm">
          Mahadev — crafting ideas into reality
        </p>
      </div>
    </div>
  );
}
