const weatherBackgrounds = {
  sunny:
    "bg-gradient-to-br from-amber-100 via-sky-100 to-blue-200 dark:from-slate-950 dark:via-sky-950 dark:to-amber-950",
  cloudy:
    "bg-gradient-to-br from-slate-100 via-sky-100 to-slate-200 dark:from-slate-950 dark:via-slate-900 dark:to-sky-950",
  rainy:
    "bg-gradient-to-br from-slate-200 via-blue-200 to-cyan-200 dark:from-slate-950 dark:via-blue-950 dark:to-cyan-950",
  snowy:
    "bg-gradient-to-br from-slate-50 via-sky-100 to-blue-100 dark:from-slate-950 dark:via-sky-950 dark:to-blue-950",
  storm:
    "bg-gradient-to-br from-slate-400 via-indigo-500 to-slate-600 dark:from-slate-950 dark:via-indigo-950 dark:to-slate-900",
  fog:
    "bg-gradient-to-br from-slate-200 via-slate-300 to-zinc-200 dark:from-slate-950 dark:via-slate-800 dark:to-zinc-900",
  night:
    "bg-gradient-to-br from-indigo-200 via-slate-300 to-blue-300 dark:from-slate-950 dark:via-indigo-950 dark:to-blue-950",
};

export const getWeatherBackground = (weatherTheme) =>
  weatherBackgrounds[weatherTheme] || weatherBackgrounds.cloudy;

export default weatherBackgrounds;
