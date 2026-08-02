import { motion, useReducedMotion } from "framer-motion";
import cloud from "../../assets/weather/cloud.svg";

// Kept outside the component so the cloud field stays stable across renders.
const cloudField = [
  { id: 1, top: "6%", width: "13rem", start: "-18vw", duration: 72, opacity: "opacity-50" },
  { id: 2, top: "15%", width: "20rem", start: "18vw", duration: 104, opacity: "opacity-40" },
  { id: 3, top: "27%", width: "10rem", start: "52vw", duration: 58, opacity: "opacity-45" },
  { id: 4, top: "37%", width: "24rem", start: "76vw", duration: 122, opacity: "opacity-35" },
  { id: 5, top: "49%", width: "16rem", start: "-4vw", duration: 84, opacity: "opacity-50" },
  { id: 6, top: "61%", width: "12rem", start: "35vw", duration: 66, opacity: "opacity-45" },
  { id: 7, top: "70%", width: "22rem", start: "64vw", duration: 116, opacity: "opacity-35" },
  { id: 8, top: "81%", width: "14rem", start: "91vw", duration: 78, opacity: "opacity-45" },
  { id: 9, top: "88%", width: "18rem", start: "12vw", duration: 96, opacity: "opacity-40" },
];

function Cloud({ cloud: cloudConfig, shouldReduceMotion }) {
  return (
    <motion.div
      className="absolute will-change-transform"
      style={{ top: cloudConfig.top, width: cloudConfig.width }}
      initial={{ x: cloudConfig.start }}
      animate={shouldReduceMotion ? undefined : { x: "125vw" }}
      transition={{
        duration: cloudConfig.duration,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      }}
    >
      <img
        src={cloud}
        alt=""
        className={`w-full brightness-0 invert ${cloudConfig.opacity} drop-shadow-[0_10px_16px_rgba(71,85,105,0.16)] dark:opacity-75 dark:drop-shadow-[0_0_18px_rgba(224,242,254,0.32)]`}
      />
    </motion.div>
  );
}

function CloudEffect() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {cloudField.map((cloudConfig) => (
        <Cloud key={cloudConfig.id} cloud={cloudConfig} shouldReduceMotion={shouldReduceMotion} />
      ))}
    </div>
  );
}

export default CloudEffect;
