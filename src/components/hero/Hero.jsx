import { FiMapPin, FiSearch } from "react-icons/fi";

function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden px-4 pb-16 pt-16 sm:px-6 sm:pb-24 sm:pt-24 lg:px-8 lg:pb-32 lg:pt-32"
    >
      <div className="absolute inset-0 -z-20 bg-slate-950" />
      <div className="absolute -left-24 top-0 -z-10 size-80 rounded-full bg-sky-500/20 blur-3xl sm:size-96" />
      <div className="absolute -right-28 top-24 -z-10 size-72 rounded-full bg-indigo-500/20 blur-3xl sm:size-96" />

      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-sky-300 sm:mb-5">
          Your daily forecast
        </p>
        <h1
          id="hero-heading"
          className="bg-gradient-to-b from-white via-sky-100 to-sky-300 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl lg:text-7xl"
        >
          WeatherNow
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8">
          Check weather anywhere in the world
        </p>

        <form className="mx-auto mt-9 max-w-2xl sm:mt-10" role="search">
          <label htmlFor="city-search" className="sr-only">
            Search for a city
          </label>
          <div className="flex rounded-2xl border border-white/15 bg-white/10 p-1.5 shadow-2xl shadow-sky-950/30 backdrop-blur-xl transition-colors focus-within:border-sky-300/50 sm:p-2">
            <input
              id="city-search"
              type="search"
              placeholder="Enter city name..."
              className="min-w-0 flex-1 bg-transparent px-3 text-base text-white outline-none placeholder:text-slate-400 sm:px-4"
            />
            <button
              type="submit"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-sky-400 px-4 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-sky-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-200 sm:px-5"
            >
              <FiSearch aria-hidden="true" className="text-lg" />
              <span className="hidden sm:inline">Search</span>
              <span className="sr-only sm:hidden">Search city</span>
            </button>
          </div>
        </form>

        <button
          type="button"
          className="mt-5 inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-sky-200 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
        >
          <FiMapPin aria-hidden="true" className="text-base" />
          Use Current Location
        </button>
      </div>
    </section>
  );
}

export default Hero;
