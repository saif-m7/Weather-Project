import { FiCloud, FiCloudRain, FiSun } from "react-icons/fi";
import ForecastCard from "./ForecastCard";

const getWeatherIcon = (weatherCode) => {
  if ([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(weatherCode)) {
    return FiCloudRain;
  }

  if ([0, 1].includes(weatherCode)) {
    return FiSun;
  }

  return FiCloud;
};

const formatTime = (time) => {
  if (!time) {
    return "—";
  }

  const hour = Number(time.slice(11, 13));
  const period = hour >= 12 ? "PM" : "AM";
  const displayHour = hour % 12 || 12;

  return `${displayHour} ${period}`;
};

function HourlyForecast({ forecast = [], currentTime, isLoading }) {
  const nextEightHours = forecast
    .filter(({ time }) => !currentTime || time >= currentTime)
    .slice(0, 8);

  return (
    <section aria-labelledby="hourly-forecast-heading">
      <div className="mb-5 sm:mb-6">
        <p className="text-sm font-medium text-sky-300">Today</p>
        <h2
          id="hourly-forecast-heading"
          className="mt-1 text-2xl font-semibold tracking-tight text-white sm:text-3xl"
        >
          Hourly forecast
        </h2>
      </div>

      <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 md:grid md:grid-cols-4 md:gap-4 md:overflow-visible lg:grid-cols-8">
        {isLoading && nextEightHours.length === 0 && (
          <p className="text-sm text-slate-300">Loading hourly forecast...</p>
        )}

        {!isLoading && nextEightHours.length === 0 && (
          <p className="text-sm text-slate-300">Hourly forecast is unavailable.</p>
        )}

        {nextEightHours.map(({ time, temperature, weatherCode, units }) => (
          <div
            key={time}
            className="min-w-32 snap-start md:min-w-0"
          >
            <ForecastCard
              timeOrDay={formatTime(time)}
              temperature={
                temperature == null
                  ? "—"
                  : `${Math.round(temperature)}${units?.temperature || "°C"}`
              }
              weatherIcon={getWeatherIcon(weatherCode)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default HourlyForecast;
