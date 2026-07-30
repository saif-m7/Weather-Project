import { FiActivity, FiCloud, FiDroplet, FiWind } from "react-icons/fi";

const weatherDescriptions = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Foggy",
  48: "Foggy",
  51: "Light drizzle",
  53: "Drizzle",
  55: "Heavy drizzle",
  61: "Light rain",
  63: "Rain",
  65: "Heavy rain",
  71: "Light snow",
  73: "Snow",
  75: "Heavy snow",
  80: "Rain showers",
  81: "Rain showers",
  82: "Heavy rain showers",
  95: "Thunderstorm",
};

function WeatherCard({ weather }) {
  const currentWeather = weather || {
    location: { name: "Hyderabad", country: "India" },
    temperature: 29,
    feelsLike: 31,
    humidity: 70,
    windSpeed: 12,
    pressure: 1008,
    weatherCode: 0,
    units: { temperature: "°C", windSpeed: "km/h", pressure: "hPa" },
  };
  const { location, units } = currentWeather;
  const weatherDescription =
    weatherDescriptions[currentWeather.weatherCode] || "Current conditions";

  return (
    <article className="overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-5 text-white shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-sky-200">Current weather</p>
          <h2 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
            {location.name}
          </h2>
          <p className="mt-1 text-sm text-slate-300">{location.country}</p>
        </div>

        <span className="grid size-14 shrink-0 place-items-center rounded-2xl border border-sky-200/20 bg-sky-300/15 text-sky-200 sm:size-16">
          <FiCloud aria-hidden="true" className="text-3xl sm:text-4xl" />
        </span>
      </div>

      <div className="mt-8 flex items-end justify-between gap-4">
        <div className="flex items-start">
          <span className="text-6xl font-light leading-none tracking-tighter sm:text-7xl">
            {Math.round(currentWeather.temperature)}
          </span>
          <span className="mt-1 text-2xl font-light text-sky-100 sm:text-3xl">
            {units.temperature}
          </span>
        </div>
        <p className="pb-1 text-right text-base font-medium text-slate-200 sm:text-lg">
          {weatherDescription}
        </p>
      </div>

      <dl className="mt-8 grid grid-cols-2 gap-y-5 border-t border-white/10 pt-5 sm:grid-cols-4 sm:divide-x sm:divide-white/10 sm:gap-y-0">
        <div className="pr-3 sm:pr-4">
          <dt className="text-xs text-slate-400">Feels like</dt>
          <dd className="mt-2 text-sm font-semibold text-slate-100 sm:text-base">
            {Math.round(currentWeather.feelsLike)}{units.temperature}
          </dd>
        </div>
        <div className="pl-3 sm:px-4">
          <dt className="flex items-center gap-1.5 text-xs text-slate-400">
            <FiDroplet aria-hidden="true" className="text-sky-300" />
            Humidity
          </dt>
          <dd className="mt-2 text-sm font-semibold text-slate-100 sm:text-base">
            {currentWeather.humidity}%
          </dd>
        </div>
        <div className="pr-3 sm:px-4">
          <dt className="flex items-center gap-1.5 text-xs text-slate-400">
            <FiWind aria-hidden="true" className="text-sky-300" />
            Wind
          </dt>
          <dd className="mt-2 text-sm font-semibold text-slate-100 sm:text-base">
            {currentWeather.windSpeed} {units.windSpeed}
          </dd>
        </div>
        <div className="pl-3 sm:pl-4">
          <dt className="flex items-center gap-1.5 text-xs text-slate-400">
            <FiActivity aria-hidden="true" className="text-sky-300" />
            Pressure
          </dt>
          <dd className="mt-2 text-sm font-semibold text-slate-100 sm:text-base">
            {currentWeather.pressure} {units.pressure}
          </dd>
        </div>
      </dl>
    </article>
  );
}

export default WeatherCard;
