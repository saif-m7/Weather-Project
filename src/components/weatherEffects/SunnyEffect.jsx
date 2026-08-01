import { motion, useReducedMotion } from "framer-motion";
import sun from "../../assets/weather/sun.svg";

const particles = Array.from({ length: 12 }, (_, index) => ({
  id: index,
  left: `${(index * 19 + 6) % 100}%`,
  top: `${(index * 29 + 8) % 78}%`,
  delay: `${index * -0.7}s`,
}));

function SunnyEffect() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute -right-10 -top-10 size-52 drop-shadow-[0_0_45px_rgba(251,191,36,0.45)]"
        animate={shouldReduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
      >
        <img src={sun} alt="" className="size-full opacity-80 dark:opacity-60" />
      </motion.div>
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="weather-effect-motion weather-light-particle absolute size-1.5 rounded-full bg-amber-200/80 blur-[1px] dark:bg-amber-100/50"
          style={{ left: particle.left, top: particle.top, animationDelay: particle.delay }}
        />
      ))}
    </div>
  );
}

export default SunnyEffect;
