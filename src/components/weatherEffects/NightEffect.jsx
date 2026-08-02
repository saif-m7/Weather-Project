import { motion, useReducedMotion } from "framer-motion";
import moon from "../../assets/weather/moon.svg";
import CloudEffect from "./CloudEffect";

const stars = Array.from({ length: 64 }, (_, index) => ({
  id: index,
  left: `${(index * 43 + 7) % 100}%`,
  top: `${(index * 23 + 4) % 82}%`,
  delay: `${(index % 11) * -0.43}s`,
  duration: `${1.8 + (index % 7) * 0.38}s`,
  size: `${1 + (index % 3)}px`,
}));

function NightEffect() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute -right-8 top-10 size-40 drop-shadow-[0_0_36px_rgba(224,231,255,0.7)] dark:drop-shadow-[0_0_36px_rgba(165,180,252,0.35)]"
        animate={shouldReduceMotion ? undefined : { y: [0, -12, 0], opacity: [0.75, 1, 0.75] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <img src={moon} alt="" className="size-full opacity-90 dark:opacity-80" />
      </motion.div>
      <CloudEffect />
      {stars.map((star) => (
        <span
          key={star.id}
          className="weather-effect-motion weather-star absolute rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.9)] dark:bg-sky-50"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}
    </div>
  );
}

export default NightEffect;
