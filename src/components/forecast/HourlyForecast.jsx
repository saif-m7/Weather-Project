import ForecastCard from "./ForecastCard";
import { mapWeatherCode } from "../../utils/weatherMapper";
import { convertTemperature, temperatureSymbol } from "../../utils/temperature";

const formatTime = (time) => {
  if (!time) {
    return "—";
  }

  const hour = Number(time.slice(11, 13));
  const period = hour >= 12 ? "PM" : "AM";
  const displayHour = hour % 12 || 12;

  return `${displayHour} ${period}`;
};

function HourlyForecast({ forecast = [], currentTime, isLoading, temperatureUnit }) {
  const nextEightHours = forecast
    .filter(({ time }) => !currentTime || time >= currentTime)
    .slice(0, 8);

  return (
    <section aria-labelledby="hourly-forecast-heading">
      <div className="mb-6 sm:mb-7">
        <p className="text-sm font-medium text-sky-700 dark:text-sky-300">Today</p>
        <h2
          id="hourly-forecast-heading"
          className="mt-1 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-3xl"
        >
          Hourly forecast
        </h2>
      </div>

      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 md:grid md:grid-cols-4 md:gap-5 md:overflow-visible lg:grid-cols-8">
        {isLoading && nextEightHours.length === 0 && (
          <p className="text-sm text-slate-600 dark:text-slate-300">Loading hourly forecast...</p>
        )}

        {!isLoading && nextEightHours.length === 0 && (
          <p className="text-sm text-slate-600 dark:text-slate-300">Hourly forecast is unavailable.</p>
        )}

        {nextEightHours.map(({ time, temperature, weatherCode }) => (
          <div
            key={time}
            className="min-w-32 snap-start md:min-w-0"
          >
            <ForecastCard
              timeOrDay={formatTime(time)}
              temperature={
                temperature == null
                  ? "—"
                  : `${Math.round(convertTemperature(temperature, temperatureUnit))}${temperatureSymbol(temperatureUnit)}`
              }
              weatherIcon={mapWeatherCode(weatherCode).icon}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default HourlyForecast;
