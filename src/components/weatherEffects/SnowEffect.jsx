const flakes = Array.from({ length: 52 }, (_, index) => ({
  id: index,
  left: `${(index * 31 + 5) % 100}%`,
  delay: `${(index % 11) * -0.45}s`,
  duration: `${4.5 + (index % 6) * 0.65}s`,
  size: `${2 + (index % 6)}px`,
  drift: `${-24 + (index % 7) * 8}px`,
}));

function SnowEffect() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {flakes.map((flake) => (
        <span
          key={flake.id}
          className="weather-effect-motion weather-snowflake absolute top-[-5%] rounded-full bg-white/80 dark:bg-sky-100/55"
          style={{
            left: flake.left,
            width: flake.size,
            height: flake.size,
            animationDelay: flake.delay,
            animationDuration: flake.duration,
            "--weather-drift": flake.drift,
          }}
        />
      ))}
    </div>
  );
}

export default SnowEffect;
