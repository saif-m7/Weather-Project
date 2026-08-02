import ForecastCard from "./ForecastCard";
import { mapWeatherCode } from "../../utils/weatherMapper";
import { convertTemperature, temperatureSymbol } from "../../utils/temperature";

const formatDay = (date) =>
  date
    ? new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
        weekday: "short",
      })
    : "—";

const formatTemperature = (temperature, unit) =>
  temperature == null ? "—" : `${Math.round(temperature)}${unit}`;

function WeeklyForecast({ forecast = [], isLoading, temperatureUnit }) {
  return (
    <section aria-labelledby="weekly-forecast-heading">
      <div className="mb-6 sm:mb-7">
        <p className="text-sm font-medium text-sky-700 dark:text-sky-300">The week ahead</p>
        <h2
          id="weekly-forecast-heading"
          className="mt-1 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-3xl"
        >
          Weekly forecast
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5 lg:grid-cols-7">
        {isLoading && forecast.length === 0 && (
          <p className="text-sm text-slate-600 dark:text-slate-300">Loading weekly forecast...</p>
        )}

        {!isLoading && forecast.length === 0 && (
          <p className="text-sm text-slate-600 dark:text-slate-300">Weekly forecast is unavailable.</p>
        )}

        {forecast.map((day) => (
          <ForecastCard
            key={day.date}
            timeOrDay={formatDay(day.date)}
            temperature={`Max ${formatTemperature(convertTemperature(day.temperatureMax, temperatureUnit), temperatureSymbol(temperatureUnit))} / Min ${formatTemperature(convertTemperature(day.temperatureMin, temperatureUnit), temperatureSymbol(temperatureUnit))}`}
            weatherIcon={mapWeatherCode(day.weatherCode).icon}
          />
        ))}
      </div>
    </section>
  );
}

export default WeeklyForecast;
