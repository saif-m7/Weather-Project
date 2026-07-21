import {
  FiActivity,
  FiDroplet,
  FiEye,
  FiSun,
  FiThermometer,
  FiWind,
} from "react-icons/fi";

const highlights = [
  { label: "Humidity", value: "70%", icon: FiDroplet },
  { label: "Wind Speed", value: "12 km/h", icon: FiWind },
  { label: "Pressure", value: "1008 hPa", icon: FiActivity },
  { label: "Visibility", value: "10 km", icon: FiEye },
  { label: "UV Index", value: "6 Moderate", icon: FiSun },
  { label: "Feels Like", value: "31°", icon: FiThermometer },
];

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
        {highlights.map(({ label, value, icon: Icon }) => (
          <article
            key={label}
            className="group rounded-2xl border border-white/15 bg-white/10 p-4 shadow-lg shadow-slate-950/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-sky-200/30 hover:bg-white/15 hover:shadow-xl hover:shadow-sky-950/30 sm:rounded-3xl sm:p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <span className="grid size-10 place-items-center rounded-xl bg-sky-300/15 text-sky-200 transition-transform duration-300 group-hover:scale-110 sm:size-11 sm:rounded-2xl">
                <Icon aria-hidden="true" className="text-xl sm:text-2xl" />
              </span>
              <p className="text-right text-xs font-medium text-slate-400 sm:text-sm">
                {label}
              </p>
            </div>
            <p className="mt-6 text-lg font-semibold tracking-tight text-white sm:mt-7 sm:text-xl">
              {value}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default WeatherHighlights;
