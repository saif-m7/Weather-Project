import { weatherHighlights } from "../../constants/weatherData";
import HighlightCard from "./HighlightCard";

function WeatherHighlights() {
  return (
    <section aria-labelledby="weather-highlights-heading">
      <div className="mb-5 flex items-center justify-between sm:mb-6">
        <div>
          <p className="text-sm font-medium text-sky-300">At a glance</p>
          <h2
            id="weather-highlights-heading"
            className="mt-1 text-2xl font-semibold tracking-tight text-white sm:text-3xl"
          >
            Weather highlights
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {weatherHighlights.map(({ icon, label, value }) => (
          <HighlightCard key={label} icon={icon} label={label} value={value} />
        ))}
      </div>
    </section>
  );
}

export default WeatherHighlights;
