function ForecastCard({ timeOrDay, temperature, weatherIcon: WeatherIcon }) {
  return (
    <article className="group flex h-full min-h-36 flex-col items-center justify-between rounded-2xl border border-white/15 bg-white/10 p-4 text-center shadow-lg shadow-slate-950/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-sky-200/30 hover:bg-white/15 hover:shadow-xl hover:shadow-sky-950/30 sm:rounded-3xl sm:p-5">
      <p className="text-sm font-medium text-slate-300 sm:text-base">
        {timeOrDay}
      </p>
      <WeatherIcon
        aria-hidden="true"
        className="my-3 text-3xl text-sky-200 transition-transform duration-300 group-hover:scale-110 sm:my-4 sm:text-4xl"
      />
      <p className="text-lg font-semibold tracking-tight text-white sm:text-xl">
        {temperature}
      </p>
    </article>
  );
}

export default ForecastCard;
