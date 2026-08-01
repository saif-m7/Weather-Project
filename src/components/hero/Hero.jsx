import { FiMapPin, FiSearch } from "react-icons/fi";
import { useState } from "react";

function Hero({ onSearch, onUseCurrentLocation, isLoading, isLocationLoading, error }) {
  const [cityName, setCityName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isLoading) {
      onSearch(cityName);
    }
  };

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden px-4 pb-16 pt-16 sm:px-6 sm:pb-24 sm:pt-24 lg:px-8 lg:pb-32 lg:pt-32"
    >
      <div className="absolute inset-0 -z-20 bg-transparent" />
      <div className="absolute -left-24 top-0 -z-10 size-80 rounded-full bg-sky-400/25 blur-3xl transition-colors duration-700 dark:bg-sky-500/20 sm:size-96" />
      <div className="absolute -right-28 top-24 -z-10 size-72 rounded-full bg-indigo-400/20 blur-3xl transition-colors duration-700 dark:bg-indigo-500/20 sm:size-96" />

      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-sky-700 transition-colors duration-300 dark:text-sky-300 sm:mb-5">
          Your daily forecast
        </p>
        <h1
          id="hero-heading"
          className="bg-gradient-to-b from-slate-900 via-sky-700 to-sky-500 bg-clip-text text-5xl font-bold tracking-tight text-transparent transition-colors duration-300 dark:from-white dark:via-sky-100 dark:to-sky-300 sm:text-6xl lg:text-7xl"
        >
          WeatherNow
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 transition-colors duration-300 dark:text-slate-300 sm:mt-6 sm:text-lg sm:leading-8">
          Check weather anywhere in the world
        </p>

        <form
          className="mx-auto mt-9 max-w-2xl sm:mt-10"
          role="search"
          onSubmit={handleSubmit}
        >
          <label htmlFor="city-search" className="sr-only">
            Search for a city
          </label>
          <div className="flex rounded-2xl border border-slate-200 bg-white/80 p-1.5 shadow-2xl shadow-sky-950/10 backdrop-blur-xl transition-colors duration-300 focus-within:border-sky-500/50 dark:border-slate-700 dark:bg-slate-900/75 dark:shadow-sky-950/30 dark:focus-within:border-sky-300/50 sm:p-2">
            <input
              id="city-search"
              type="search"
              placeholder="Enter city name..."
              value={cityName}
              onChange={(event) => setCityName(event.target.value)}
              className="min-w-0 flex-1 bg-transparent px-3 text-base text-slate-900 outline-none placeholder:text-slate-500 dark:text-white dark:placeholder:text-slate-400 sm:px-4"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-sky-400 px-4 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-sky-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-200 disabled:cursor-not-allowed disabled:opacity-70 sm:px-5"
            >
              {isLoading ? (
                <span
                  aria-hidden="true"
                  className="size-4 animate-spin rounded-full border-2 border-slate-950/30 border-t-slate-950"
                />
              ) : (
                <FiSearch aria-hidden="true" className="text-lg" />
              )}
              <span className="hidden sm:inline">
                {isLoading ? "Searching..." : "Search"}
              </span>
              <span className="sr-only sm:hidden">Search city</span>
            </button>
          </div>
        </form>

        {error && (
          <p className="mt-3 text-sm text-red-600 dark:text-red-300" role="alert">
            {error}
          </p>
        )}

        <button
          type="button"
          onClick={onUseCurrentLocation}
          disabled={isLoading}
          className="mt-5 inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-sky-700 transition-colors duration-300 hover:bg-sky-500/10 hover:text-sky-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 dark:text-sky-200 dark:hover:bg-white/10 dark:hover:text-white dark:focus-visible:outline-sky-300"
        >
          <FiMapPin aria-hidden="true" className="text-base" />
          {isLocationLoading ? "Locating..." : "Use My Location"}
        </button>
      </div>
    </section>
  );
}

export default Hero;
