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
          className="weather-effect-motion weather-raindrop absolute top-[-10%] w-px rounded-full bg-sky-100/80 dark:bg-sky-200/50"
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
