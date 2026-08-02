import { FiActivity, FiDroplet, FiThermometer, FiWind } from "react-icons/fi";
import HighlightCard from "./HighlightCard";
import { convertTemperature, temperatureSymbol } from "../../utils/temperature";

const formatValue = (value, unit, addSpace = false) =>
  value == null ? "—" : `${Math.round(value)}${addSpace ? " " : ""}${unit}`;

function WeatherHighlights({ weather, temperatureUnit }) {
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
      value: formatValue(convertTemperature(weather?.feelsLike, temperatureUnit), temperatureSymbol(temperatureUnit)),
      icon: FiThermometer,
    },
  ];

  return (
    <section aria-labelledby="weather-highlights-heading">
      <div className="mb-6 flex items-center justify-between sm:mb-7">
        <div>
        <p className="text-sm font-medium text-sky-700 dark:text-sky-300">At a glance</p>
          <h2
            id="weather-highlights-heading"
            className="mt-1 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-3xl"
          >
            Weather highlights
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
        {highlights.map(({ icon, label, value }) => (
          <HighlightCard key={label} icon={icon} label={label} value={value} />
        ))}
      </div>
    </section>
  );
}

export default WeatherHighlights;
