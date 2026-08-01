import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import RainEffect from "./RainEffect";
import lightning from "../../assets/weather/lightning.svg";

function StormEffect() {
  const shouldReduceMotion = useReducedMotion();
  const [isFlashing, setIsFlashing] = useState(false);
  const [lightningPosition, setLightningPosition] = useState({ left: "68%", top: "12%" });

  useEffect(() => {
    if (shouldReduceMotion) {
      return undefined;
    }

    let nextFlashTimer;
    let flashTimer;

    const scheduleFlash = () => {
      nextFlashTimer = window.setTimeout(() => {
        setLightningPosition({
          left: `${25 + Math.round(Math.random() * 50)}%`,
          top: `${8 + Math.round(Math.random() * 28)}%`,
        });
        setIsFlashing(true);
        flashTimer = window.setTimeout(() => setIsFlashing(false), 480);
        scheduleFlash();
      }, 2800 + Math.random() * 4200);
    };

    scheduleFlash();

    return () => {
      window.clearTimeout(nextFlashTimer);
      window.clearTimeout(flashTimer);
    };
  }, [shouldReduceMotion]);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <RainEffect />
      <motion.img
        src={lightning}
        alt=""
        className="absolute w-20 drop-shadow-[0_0_24px_rgba(254,249,195,0.8)] sm:w-28"
        style={lightningPosition}
        initial={{ opacity: 0 }}
        animate={
          isFlashing
            ? { opacity: [0, 0.55, 0.1, 0.7, 0], scale: [0.9, 1, 0.96, 1.04, 1] }
            : { opacity: 0 }
        }
        transition={{ duration: 0.48, ease: "easeOut" }}
      />
      <motion.div
        className="absolute inset-0 bg-white mix-blend-overlay"
        animate={isFlashing ? { opacity: [0, 0.08, 0, 0.12, 0] } : { opacity: 0 }}
        transition={{ duration: 0.48, ease: "easeOut" }}
      />
    </div>
  );
}

export default StormEffect;
