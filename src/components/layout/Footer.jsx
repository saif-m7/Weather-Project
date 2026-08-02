import { FiCloud } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="relative z-0 rounded-t-3xl border-x border-t border-slate-200/80 bg-white/75 text-slate-700 shadow-xl shadow-sky-950/10 backdrop-blur-xl transition-colors duration-300 dark:border-slate-700/80 dark:bg-slate-900/75 dark:text-slate-300 sm:rounded-t-[2rem]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 sm:py-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12 lg:px-8">
        <div>
          <a
            href="/"
            aria-label="WeatherNow home"
            className="group inline-flex items-center gap-2.5 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500 dark:focus-visible:outline-sky-300"
          >
            <span className="grid size-10 place-items-center rounded-2xl border border-sky-500/20 bg-gradient-to-br from-sky-300/30 to-blue-500/20 text-sky-600 shadow-lg shadow-sky-500/15 transition-transform duration-300 group-hover:scale-105 dark:border-sky-200/20 dark:text-sky-200 dark:shadow-sky-950/30">
              <FiCloud aria-hidden="true" className="text-2xl" />
            </span>
            <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
              WeatherNow
            </span>
          </a>

          <p className="mt-4 max-w-md text-sm leading-6 text-slate-600 dark:text-slate-300">
            Clear, beautiful forecasts to help you plan every moment with
            confidence.
          </p>
        </div>

        <div className="flex items-center gap-3 lg:justify-self-end">
          <a
            href="#"
            aria-label="WeatherNow on GitHub"
            title="GitHub link placeholder"
            className="grid size-11 place-items-center rounded-full border border-slate-200 bg-slate-100 text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:border-sky-500/30 hover:bg-sky-500/10 hover:text-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-sky-200/30 dark:hover:bg-slate-700 dark:hover:text-sky-200 dark:focus-visible:outline-sky-300"
          >
            <FaGithub aria-hidden="true" className="text-xl" />
          </a>
          <a
            href="#"
            aria-label="WeatherNow on LinkedIn"
            title="LinkedIn link placeholder"
            className="grid size-11 place-items-center rounded-full border border-slate-200 bg-slate-100 text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:border-sky-500/30 hover:bg-sky-500/10 hover:text-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-sky-200/30 dark:hover:bg-slate-700 dark:hover:text-sky-200 dark:focus-visible:outline-sky-300"
          >
            <FaLinkedinIn aria-hidden="true" className="text-xl" />
          </a>
        </div>
      </div>

      <div className="border-t border-slate-200 px-4 py-5 text-center text-xs text-slate-500 dark:border-slate-700 dark:text-slate-400 sm:px-6 lg:px-8">
        © {currentYear} WeatherNow. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
