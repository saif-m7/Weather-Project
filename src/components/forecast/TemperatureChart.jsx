import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { convertTemperature, temperatureSymbol } from "../../utils/temperature";

const formatHour = (time) => {
  if (!time) return "—";

  const hour = Number(time.slice(11, 13));
  const period = hour >= 12 ? "PM" : "AM";
  return `${hour % 12 || 12} ${period}`;
};

function ChartTooltip({ active, payload, temperatureUnit }) {
  if (!active || !payload?.length) return null;

  const { hour, temperature } = payload[0].payload;

  return (
    <div className="rounded-xl border border-white/50 bg-white/90 px-3 py-2 shadow-lg shadow-sky-950/10 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/90 dark:shadow-slate-950/30">
      <p className="text-xs font-medium text-slate-500 dark:text-slate-400">{hour}</p>
      <p className="mt-0.5 text-sm font-semibold text-slate-900 dark:text-white">
        {Math.round(temperature)}{temperatureSymbol(temperatureUnit)}
      </p>
    </div>
  );
}

function TemperatureChart({ forecast = [], currentTime, temperatureUnit }) {
  const chartData = forecast
    .filter(({ time }) => !currentTime || time >= currentTime)
    .slice(0, 24)
    .map(({ time, temperature }) => ({
      hour: formatHour(time),
      temperature: convertTemperature(temperature, temperatureUnit),
    }));

  return (
    <section aria-labelledby="temperature-chart-heading">
      <div className="mb-6 sm:mb-7">
        <p className="text-sm font-medium text-sky-700 dark:text-sky-300">Next 24 hours</p>
        <h2
          id="temperature-chart-heading"
          className="mt-1 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-3xl"
        >
          Temperature trend
        </h2>
      </div>

      <article className="group h-72 rounded-3xl border border-slate-200/80 bg-white/75 p-5 shadow-xl shadow-sky-950/10 backdrop-blur-xl transition duration-300 hover:border-sky-500/30 hover:bg-white/85 hover:shadow-2xl hover:shadow-sky-950/15 [--chart-grid:#cbd5e1] [--chart-text:#64748b] [--chart-line:#0284c7] dark:border-slate-700/80 dark:bg-slate-900/75 dark:shadow-slate-950/30 dark:hover:border-sky-200/25 dark:hover:bg-slate-900/85 dark:[--chart-grid:#334155] dark:[--chart-text:#94a3b8] dark:[--chart-line:#7dd3fc] sm:h-80 sm:p-7">
        {chartData.length === 0 ? (
          <p className="grid h-full place-items-center text-sm text-slate-600 dark:text-slate-300">
            Hourly temperature data is unavailable.
          </p>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 12, right: 8, left: -20, bottom: 0 }}>
              <CartesianGrid stroke="var(--chart-grid)" strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="hour"
                stroke="var(--chart-text)"
                tick={{ fill: "var(--chart-text)", fontSize: 12 }}
                tickLine={false}
                axisLine={false}
                interval="preserveStartEnd"
              />
              <YAxis
                stroke="var(--chart-text)"
                tick={{ fill: "var(--chart-text)", fontSize: 12 }}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${Math.round(value)}°`}
              />
              <Tooltip content={<ChartTooltip temperatureUnit={temperatureUnit} />} cursor={{ stroke: "var(--chart-grid)", strokeWidth: 1 }} />
              <Line
                type="monotone"
                dataKey="temperature"
                stroke="var(--chart-line)"
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 5, fill: "var(--chart-line)", stroke: "white", strokeWidth: 2 }}
                isAnimationActive
                animationDuration={900}
                animationEasing="ease-out"
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </article>
    </section>
  );
}

export default TemperatureChart;
