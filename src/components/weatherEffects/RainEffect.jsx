const drops = Array.from({ length: 56 }, (_, index) => ({
  id: index,
  left: `${(index * 37 + 3) % 100}%`,
  delay: `${(index % 13) * -0.18}s`,
  duration: `${0.65 + (index % 6) * 0.11}s`,
  length: `${20 + (index % 5) * 7}px`,
  wind: `${-22 - (index % 4) * 7}px`,
}));

function RainEffect() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {drops.map((drop) => (
        <span
          key={drop.id}
          className="weather-effect-motion weather-raindrop absolute top-[-10%] w-[2px] rounded-full bg-sky-700/50 shadow-[0_0_3px_rgba(3,105,161,0.3)] dark:bg-sky-100/70 dark:shadow-[0_0_4px_rgba(224,242,254,0.4)]"
          style={{
            left: drop.left,
            height: drop.length,
            animationDelay: drop.delay,
            animationDuration: drop.duration,
            "--weather-wind": drop.wind,
          }}
        />
      ))}
    </div>
  );
}

export default RainEffect;
