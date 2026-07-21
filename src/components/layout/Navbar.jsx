import { FiCloud, FiSun } from "react-icons/fi";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/60 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8"
      >
        <a
          href="/"
          aria-label="WeatherNow home"
          className="group flex items-center gap-2.5 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400 sm:gap-3"
        >
          <span className="grid size-10 place-items-center rounded-2xl border border-sky-200/20 bg-gradient-to-br from-sky-300/30 to-blue-500/20 text-sky-200 shadow-lg shadow-sky-950/30 transition-transform duration-300 group-hover:scale-105 sm:size-11">
            <FiCloud aria-hidden="true" className="text-2xl sm:text-[1.65rem]" />
          </span>
          <span className="text-lg font-bold tracking-tight text-white sm:text-xl">
            WeatherNow
          </span>
        </a>

        <button
          type="button"
          aria-label="Toggle colour theme"
          title="Theme toggle coming soon"
          className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/10 text-amber-300 shadow-sm transition-colors duration-200 hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400 sm:size-11"
        >
          <FiSun aria-hidden="true" className="text-xl sm:text-[1.35rem]" />
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
