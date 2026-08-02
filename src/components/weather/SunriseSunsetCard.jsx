import { FiSunrise, FiSunset } from "react-icons/fi";

const parseLocalTime = (value) => {
  if (!value) return null;

  const [date, time] = value.split("T");
  const [year, month, day] = date.split("-").map(Number);
  const [hour, minute] = time.split(":").map(Number);

  return new Date(year, month - 1, day, hour, minute);
};

const formatTime = (value) => {
  const date = parseLocalTime(value);
  if (!date) return "—";

  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
};

const formatDayLength = (sunrise, sunset) => {
  if (!sunrise || !sunset) return "—";

  const minutes = Math.max(0, Math.round((sunset - sunrise) / 60000));
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  return `${hours}h ${remainingMinutes}m`;
};

function SunriseSunsetCard({ day, currentTime }) {
  const sunrise = parseLocalTime(day?.sunrise);
  const sunset = parseLocalTime(day?.sunset);
  const current = parseLocalTime(currentTime);
  const isSameDay = current && sunrise && current.toDateString() === sunrise.toDateString();
  const progress = isSameDay && sunrise && sunset
    ? Math.min(100, Math.max(0, ((current - sunrise) / (sunset - sunrise)) * 100))
    : 0;

  return (
    <section aria-labelledby="sunrise-sunset-heading">
      <article className="group overflow-hidden rounded-3xl border border-slate-200/80 bg-white/75 p-6 shadow-xl shadow-sky-950/10 backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-orange-300/70 hover:bg-white/85 hover:shadow-2xl hover:shadow-orange-950/15 dark:border-slate-700/80 dark:bg-slate-900/75 dark:shadow-slate-950/30 dark:hover:border-orange-200/25 dark:hover:bg-slate-900/85 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-orange-700 dark:text-orange-200">Sun cycle</p>
            <h2 id="sunrise-sunset-heading" className="mt-1 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Sunrise &amp; Sunset
            </h2>
          </div>
          <span className="rounded-2xl bg-gradient-to-br from-amber-300 to-orange-500 p-3 text-white shadow-lg shadow-orange-500/25 transition-transform duration-300 group-hover:scale-110">
            <FiSunrise aria-hidden="true" className="text-2xl" />
          </span>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-5">
          <div className="rounded-2xl bg-amber-50/75 p-5 dark:bg-amber-300/10">
            <FiSunrise aria-hidden="true" className="text-xl text-amber-600 dark:text-amber-300" />
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Sunrise</p>
            <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-white sm:text-xl">{formatTime(day?.sunrise)}</p>
          </div>
          <div className="rounded-2xl bg-orange-50/75 p-5 dark:bg-orange-300/10">
            <FiSunset aria-hidden="true" className="text-xl text-orange-600 dark:text-orange-300" />
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Sunset</p>
            <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-white sm:text-xl">{formatTime(day?.sunset)}</p>
          </div>
        </div>

        <div className="mt-7">
          <div className="flex items-center justify-between gap-3 text-sm">
            <span className="font-medium text-slate-600 dark:text-slate-300">Day length</span>
            <span className="font-semibold text-slate-900 dark:text-white">{formatDayLength(sunrise, sunset)}</span>
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200/80 dark:bg-slate-700/80" aria-label={`Daylight progress: ${Math.round(progress)}%`} role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow={Math.round(progress)}>
            <div className="h-full rounded-full bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 transition-all duration-700" style={{ width: `${progress}%` }} />
          </div>
          <div className="mt-2 flex justify-between text-xs text-slate-500 dark:text-slate-400">
            <span>Sunrise</span>
            <span>Sunset</span>
          </div>
        </div>
      </article>
    </section>
  );
}

export default SunriseSunsetCard;
