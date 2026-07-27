import { hourlyForecast } from "../../constants/weatherData";
import ForecastCard from "./ForecastCard";

function HourlyForecast() {
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
        {hourlyForecast.map(({ timeOrDay, temperature, weatherIcon }) => (
          <div
            key={timeOrDay}
            className="min-w-32 snap-start md:min-w-0"
          >
            <ForecastCard
              timeOrDay={timeOrDay}
              temperature={temperature}
              weatherIcon={weatherIcon}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default HourlyForecast;
