function ForecastCard({ timeOrDay, temperature, weatherIcon: WeatherIcon }) {
  return (
    <article className="group flex h-full min-h-36 flex-col items-center justify-between rounded-2xl border border-slate-200 bg-white/80 p-4 text-center shadow-lg shadow-sky-950/10 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-sky-500/30 hover:bg-white hover:shadow-xl hover:shadow-sky-950/20 dark:border-slate-700 dark:bg-slate-900/75 dark:shadow-slate-950/20 dark:hover:border-sky-200/30 dark:hover:bg-slate-800 dark:hover:shadow-sky-950/30 sm:rounded-3xl sm:p-5">
      <p className="text-sm font-medium text-slate-600 dark:text-slate-300 sm:text-base">
        {timeOrDay}
      </p>
      <WeatherIcon
        aria-hidden="true"
        className="my-3 text-3xl text-sky-700 transition-transform duration-300 group-hover:scale-110 dark:text-sky-200 sm:my-4 sm:text-4xl"
      />
      <p className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white sm:text-xl">
        {temperature}
      </p>
    </article>
  );
}

export default ForecastCard;
