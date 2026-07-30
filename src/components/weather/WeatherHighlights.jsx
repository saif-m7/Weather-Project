import { FiActivity, FiDroplet, FiThermometer, FiWind } from "react-icons/fi";
import HighlightCard from "./HighlightCard";

const formatValue = (value, unit, addSpace = false) =>
  value == null ? "—" : `${Math.round(value)}${addSpace ? " " : ""}${unit}`;

function WeatherHighlights({ weather }) {
  const highlights = [
    {
      label: "Humidity",
      value: formatValue(weather?.humidity, "%"),
      icon: FiDroplet,
    },
    {
      label: "Wind Speed",
      value: formatValue(weather?.windSpeed, weather?.units?.windSpeed || "km/h", true),
      icon: FiWind,
    },
    {
      label: "Pressure",
      value: formatValue(weather?.pressure, weather?.units?.pressure || "hPa", true),
      icon: FiActivity,
    },
    {
      label: "Feels Like Temperature",
      value: formatValue(weather?.feelsLike, weather?.units?.temperature || "°C"),
      icon: FiThermometer,
    },
  ];

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
        {highlights.map(({ icon, label, value }) => (
          <HighlightCard key={label} icon={icon} label={label} value={value} />
        ))}
      </div>
    </section>
  );
}

export default WeatherHighlights;
