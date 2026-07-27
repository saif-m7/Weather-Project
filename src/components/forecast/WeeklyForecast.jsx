import { weeklyForecast } from "../../constants/weatherData";
import ForecastCard from "./ForecastCard";

function WeeklyForecast() {
  return (
    <section aria-labelledby="weekly-forecast-heading">
      <div className="mb-5 sm:mb-6">
        <p className="text-sm font-medium text-sky-300">The week ahead</p>
        <h2
          id="weekly-forecast-heading"
          className="mt-1 text-2xl font-semibold tracking-tight text-white sm:text-3xl"
        >
          Weekly forecast
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-7">
        {weeklyForecast.map(({ timeOrDay, temperature, weatherIcon }) => (
          <ForecastCard
            key={timeOrDay}
            timeOrDay={timeOrDay}
            temperature={temperature}
            weatherIcon={weatherIcon}
          />
        ))}
      </div>
    </section>
  );
}

export default WeeklyForecast;
