import { motion, useReducedMotion } from "framer-motion";

function FogLayer({ className, duration, delay }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`absolute left-[-25%] w-[150%] rounded-full bg-slate-100/35 blur-3xl dark:bg-slate-300/10 ${className}`}
      animate={shouldReduceMotion ? undefined : { x: ["-5%", "8%", "-5%"] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

function FogEffect() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <FogLayer className="top-[20%] h-24" duration={16} delay={-5} />
      <FogLayer className="top-[50%] h-32 opacity-80" duration={21} delay={-12} />
      <FogLayer className="top-[78%] h-20 opacity-60" duration={18} delay={-8} />
    </div>
  );
}

export default FogEffect;
