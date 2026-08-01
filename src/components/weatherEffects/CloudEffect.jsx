import { motion, useReducedMotion } from "framer-motion";
import cloud from "../../assets/weather/cloud.svg";

function Cloud({ className, duration, delay }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ x: "-12vw" }}
      animate={shouldReduceMotion ? undefined : { x: "112vw" }}
      transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
    >
      <img src={cloud} alt="" className="size-full opacity-75 drop-shadow-lg dark:opacity-45" />
    </motion.div>
  );
}

function CloudEffect() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <Cloud className="top-[8%] h-24 w-72" duration={62} delay={-36} />
      <Cloud className="top-[21%] h-16 w-52 opacity-80" duration={46} delay={-9} />
      <Cloud className="top-[38%] h-28 w-80 opacity-90" duration={74} delay={-52} />
      <Cloud className="top-[52%] h-20 w-64 opacity-75" duration={55} delay={-25} />
      <Cloud className="top-[68%] h-32 w-96 opacity-85" duration={86} delay={-64} />
      <Cloud className="top-[82%] h-14 w-48 opacity-65" duration={39} delay={-17} />
    </div>
  );
}

export default CloudEffect;
