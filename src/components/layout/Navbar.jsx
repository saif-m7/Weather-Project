import { FiChevronDown, FiClock, FiCloud, FiMoon, FiStar, FiSun } from "react-icons/fi";
import { useState } from "react";

function Navbar({
  theme,
  onToggleTheme,
  favorites,
  onSelectFavorite,
  recentSearches,
  onSelectRecentSearch,
  onClearRecentSearches,
}) {
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [isRecentSearchesOpen, setIsRecentSearchesOpen] = useState(false);

  const handleFavoriteSelect = (favorite) => {
    setIsFavoritesOpen(false);
    onSelectFavorite(favorite);
  };

  const handleRecentSearchSelect = (search) => {
    setIsRecentSearchesOpen(false);
    onSelectRecentSearch(search);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900/75">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8"
      >
        <a
          href="/"
          aria-label="WeatherNow home"
          className="group flex items-center gap-2.5 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400 sm:gap-3"
        >
          <span className="grid size-10 place-items-center rounded-2xl border border-sky-500/20 bg-gradient-to-br from-sky-300/40 to-blue-500/20 text-sky-700 shadow-lg shadow-sky-500/15 transition-transform duration-300 group-hover:scale-105 dark:border-sky-200/20 dark:from-sky-300/30 dark:text-sky-200 dark:shadow-sky-950/30 sm:size-11">
            <FiCloud aria-hidden="true" className="text-2xl sm:text-[1.65rem]" />
          </span>
          <span className="text-lg font-bold tracking-tight text-slate-900 transition-colors duration-300 dark:text-white sm:text-xl">
            WeatherNow
          </span>
        </a>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsRecentSearchesOpen((isOpen) => !isOpen)}
              aria-label="Show recent searches"
              aria-expanded={isRecentSearchesOpen}
              aria-haspopup="menu"
              className="inline-flex h-10 items-center gap-1.5 rounded-full border border-slate-200 bg-slate-100 px-3 text-sm font-medium text-slate-700 shadow-sm transition-colors duration-300 hover:bg-sky-500/10 hover:text-sky-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 dark:hover:text-sky-200 dark:focus-visible:outline-sky-400 sm:h-11"
            >
              <FiClock aria-hidden="true" className="text-sky-600 dark:text-sky-300" />
              <span className="hidden sm:inline">Recent</span>
              <FiChevronDown aria-hidden="true" className="text-base" />
            </button>

            {isRecentSearchesOpen && (
              <div
                role="menu"
                aria-label="Recent searches"
                className="absolute right-0 mt-2 w-60 overflow-hidden rounded-2xl border border-slate-200 bg-white p-1.5 shadow-xl shadow-slate-900/10 transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900 dark:shadow-slate-950/40"
              >
                <div className="flex items-center justify-between px-3 py-2">
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Recent searches
                  </span>
                  {recentSearches.length > 0 && (
                    <button
                      type="button"
                      onClick={onClearRecentSearches}
                      className="text-xs font-medium text-sky-700 hover:text-sky-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 dark:text-sky-300 dark:hover:text-sky-100"
                    >
                      Clear History
                    </button>
                  )}
                </div>

                {recentSearches.length === 0 ? (
                  <p className="px-3 py-2 text-sm text-slate-600 dark:text-slate-400">
                    No recent searches yet.
                  </p>
                ) : (
                  recentSearches.map((search) => (
                    <button
                      key={search.id}
                      type="button"
                      role="menuitem"
                      onClick={() => handleRecentSearchSelect(search)}
                      className="w-full rounded-xl px-3 py-2 text-left text-sm text-slate-700 transition-colors hover:bg-sky-50 hover:text-sky-800 focus-visible:outline-2 focus-visible:outline-sky-500 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-sky-200"
                    >
                      <span className="block font-medium">{search.name}</span>
                      {search.country && (
                        <span className="block text-xs text-slate-500 dark:text-slate-400">
                          {search.country}
                        </span>
                      )}
                    </button>
                  ))
                )}
              </div>
            )}
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={() => setIsFavoritesOpen((isOpen) => !isOpen)}
              aria-label="Show favorite cities"
              aria-expanded={isFavoritesOpen}
              aria-haspopup="menu"
              className="inline-flex h-10 items-center gap-1.5 rounded-full border border-slate-200 bg-slate-100 px-3 text-sm font-medium text-slate-700 shadow-sm transition-colors duration-300 hover:bg-sky-500/10 hover:text-sky-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 dark:hover:text-sky-200 dark:focus-visible:outline-sky-400 sm:h-11"
            >
              <FiStar aria-hidden="true" className="text-amber-500 dark:text-amber-300" />
              <span className="hidden sm:inline">Favorites</span>
              <FiChevronDown aria-hidden="true" className="text-base" />
            </button>

            {isFavoritesOpen && (
              <div
                role="menu"
                aria-label="Favorite cities"
                className="absolute right-0 mt-2 w-60 overflow-hidden rounded-2xl border border-slate-200 bg-white p-1.5 shadow-xl shadow-slate-900/10 transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900 dark:shadow-slate-950/40"
              >
                {favorites.length === 0 ? (
                  <p className="px-3 py-2 text-sm text-slate-600 dark:text-slate-400">
                    No favorite cities yet.
                  </p>
                ) : (
                  favorites.map((favorite) => (
                    <button
                      key={favorite.id}
                      type="button"
                      role="menuitem"
                      onClick={() => handleFavoriteSelect(favorite)}
                      className="w-full rounded-xl px-3 py-2 text-left text-sm text-slate-700 transition-colors hover:bg-sky-50 hover:text-sky-800 focus-visible:outline-2 focus-visible:outline-sky-500 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-sky-200"
                    >
                      <span className="block font-medium">{favorite.name}</span>
                      {favorite.country && (
                        <span className="block text-xs text-slate-500 dark:text-slate-400">
                          {favorite.country}
                        </span>
                      )}
                    </button>
                  ))
                )}
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="grid size-10 place-items-center rounded-full border border-slate-200 bg-slate-100 text-slate-700 shadow-sm transition-colors duration-300 hover:bg-sky-500/10 hover:text-sky-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500 dark:border-slate-700 dark:bg-slate-800 dark:text-amber-300 dark:hover:bg-slate-700 dark:focus-visible:outline-sky-400 sm:size-11"
          >
            {theme === "dark" ? (
              <FiSun aria-hidden="true" className="text-xl sm:text-[1.35rem]" />
            ) : (
              <FiMoon aria-hidden="true" className="text-xl sm:text-[1.35rem]" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
