import { FiActivity, FiCloud, FiDroplet, FiWind } from "react-icons/fi";

function WeatherCard() {
  return (
    <article className="overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-5 text-white shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-sky-200">Current weather</p>
          <h2 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
            Hyderabad
          </h2>
          <p className="mt-1 text-sm text-slate-300">India</p>
        </div>

        <span className="grid size-14 shrink-0 place-items-center rounded-2xl border border-sky-200/20 bg-sky-300/15 text-sky-200 sm:size-16">
          <FiCloud aria-hidden="true" className="text-3xl sm:text-4xl" />
        </span>
      </div>

      <div className="mt-8 flex items-end justify-between gap-4">
        <div className="flex items-start">
          <span className="text-6xl font-light leading-none tracking-tighter sm:text-7xl">
            29
          </span>
          <span className="mt-1 text-2xl font-light text-sky-100 sm:text-3xl">°</span>
        </div>
        <p className="pb-1 text-right text-base font-medium text-slate-200 sm:text-lg">
          Clear Sky
        </p>
      </div>

      <dl className="mt-8 grid grid-cols-2 gap-y-5 border-t border-white/10 pt-5 sm:grid-cols-4 sm:divide-x sm:divide-white/10 sm:gap-y-0">
        <div className="pr-3 sm:pr-4">
          <dt className="text-xs text-slate-400">Feels like</dt>
          <dd className="mt-2 text-sm font-semibold text-slate-100 sm:text-base">
            31°
          </dd>
        </div>
        <div className="pl-3 sm:px-4">
          <dt className="flex items-center gap-1.5 text-xs text-slate-400">
            <FiDroplet aria-hidden="true" className="text-sky-300" />
            Humidity
          </dt>
          <dd className="mt-2 text-sm font-semibold text-slate-100 sm:text-base">
            70%
          </dd>
        </div>
        <div className="pr-3 sm:px-4">
          <dt className="flex items-center gap-1.5 text-xs text-slate-400">
            <FiWind aria-hidden="true" className="text-sky-300" />
            Wind
          </dt>
          <dd className="mt-2 text-sm font-semibold text-slate-100 sm:text-base">
            12 km/h
          </dd>
        </div>
        <div className="pl-3 sm:pl-4">
          <dt className="flex items-center gap-1.5 text-xs text-slate-400">
            <FiActivity aria-hidden="true" className="text-sky-300" />
            Pressure
          </dt>
          <dd className="mt-2 text-sm font-semibold text-slate-100 sm:text-base">
            1008 hPa
          </dd>
        </div>
      </dl>
    </article>
  );
}

export default WeatherCard;
