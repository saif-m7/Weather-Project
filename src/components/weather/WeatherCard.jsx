import { FiActivity, FiDroplet, FiStar, FiWind } from "react-icons/fi";
import { mapWeatherCode } from "../../utils/weatherMapper";
import { convertTemperature, temperatureSymbol } from "../../utils/temperature";

function WeatherCard({ weather, isFavorite, onToggleFavorite, temperatureUnit }) {
  const currentWeather = weather || {
    location: { name: "Hyderabad", country: "India" },
    temperature: 29,
    feelsLike: 31,
    humidity: 70,
    windSpeed: 12,
    pressure: 1008,
    weatherCode: 0,
    isDay: true,
    units: { temperature: "°C", windSpeed: "km/h", pressure: "hPa" },
  };
  const { location, units } = currentWeather;
  const temperature = convertTemperature(currentWeather.temperature, temperatureUnit);
  const feelsLike = convertTemperature(currentWeather.feelsLike, temperatureUnit);
  const unitSymbol = temperatureSymbol(temperatureUnit);
  const { description: weatherDescription, icon: WeatherIcon } = mapWeatherCode(
    currentWeather.weatherCode,
    currentWeather.isDay,
  );

  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200/80 bg-white/75 p-6 text-slate-900 shadow-xl shadow-sky-950/10 backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-sky-500/30 hover:bg-white/85 hover:shadow-2xl hover:shadow-sky-950/15 dark:border-slate-700/80 dark:bg-slate-900/75 dark:text-white dark:shadow-slate-950/30 dark:hover:border-sky-200/25 dark:hover:bg-slate-900/85 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-sky-700 dark:text-sky-200">Current weather</p>
          <div className="mt-1 flex items-center gap-2">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {location.name}
            </h2>
            <button
              type="button"
              onClick={onToggleFavorite}
              disabled={!weather}
              aria-label={isFavorite ? "Remove city from favorites" : "Add city to favorites"}
              aria-pressed={isFavorite}
              className="grid size-9 place-items-center rounded-full text-amber-500 transition-colors hover:bg-amber-400/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 disabled:cursor-not-allowed disabled:opacity-50 dark:text-amber-300"
            >
              <FiStar
                aria-hidden="true"
                className={isFavorite ? "fill-current text-xl" : "text-xl"}
              />
            </button>
          </div>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{location.country}</p>
        </div>

        <span className="grid size-14 shrink-0 place-items-center rounded-2xl border border-sky-500/20 bg-sky-500/15 text-sky-700 dark:border-sky-200/20 dark:bg-sky-300/15 dark:text-sky-200 sm:size-16">
          <WeatherIcon aria-hidden="true" className="text-3xl sm:text-4xl" />
        </span>
      </div>

      <div className="mt-8 flex items-end justify-between gap-4">
        <div className="flex items-start">
          <span className="text-6xl font-light leading-none tracking-tighter sm:text-7xl">
            {Math.round(temperature)}
          </span>
          <span className="mt-1 text-2xl font-light text-sky-700 dark:text-sky-100 sm:text-3xl">
            {unitSymbol}
          </span>
        </div>
        <p className="pb-1 text-right text-base font-medium text-slate-700 dark:text-slate-200 sm:text-lg">
          {weatherDescription}
        </p>
      </div>

      <dl className="mt-8 grid grid-cols-2 gap-y-5 border-t border-slate-200 pt-5 dark:border-slate-700 sm:grid-cols-4 sm:divide-x sm:divide-slate-200 dark:sm:divide-slate-700 sm:gap-y-0">
        <div className="pr-3 sm:pr-4">
          <dt className="text-xs text-slate-500 dark:text-slate-400">Feels like</dt>
          <dd className="mt-2 text-sm font-semibold text-slate-800 dark:text-slate-100 sm:text-base">
            {Math.round(feelsLike)}{unitSymbol}
          </dd>
        </div>
        <div className="pl-3 sm:px-4">
          <dt className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
            <FiDroplet aria-hidden="true" className="text-sky-600 dark:text-sky-300" />
            Humidity
          </dt>
          <dd className="mt-2 text-sm font-semibold text-slate-800 dark:text-slate-100 sm:text-base">
            {currentWeather.humidity}%
          </dd>
        </div>
        <div className="pr-3 sm:px-4">
          <dt className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
            <FiWind aria-hidden="true" className="text-sky-600 dark:text-sky-300" />
            Wind
          </dt>
          <dd className="mt-2 text-sm font-semibold text-slate-800 dark:text-slate-100 sm:text-base">
            {currentWeather.windSpeed} {units.windSpeed}
          </dd>
        </div>
        <div className="pl-3 sm:pl-4">
          <dt className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
            <FiActivity aria-hidden="true" className="text-sky-600 dark:text-sky-300" />
            Pressure
          </dt>
          <dd className="mt-2 text-sm font-semibold text-slate-800 dark:text-slate-100 sm:text-base">
            {currentWeather.pressure} {units.pressure}
          </dd>
        </div>
      </dl>
    </article>
  );
}

export default WeatherCard;
