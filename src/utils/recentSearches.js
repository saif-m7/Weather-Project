const RECENT_SEARCHES_STORAGE_KEY = "weather-now-recent-searches";
const MAX_RECENT_SEARCHES = 5;

const getSearchId = ({ name, country = "" }) =>
  `${name.toLocaleLowerCase()}|${country.toLocaleLowerCase()}`;

export const getSavedRecentSearches = () => {
  try {
    const savedSearches = JSON.parse(localStorage.getItem(RECENT_SEARCHES_STORAGE_KEY) || "[]");

    return Array.isArray(savedSearches)
      ? savedSearches
          .filter(
            ({ name, latitude, longitude }) =>
              typeof name === "string" && Number.isFinite(latitude) && Number.isFinite(longitude),
          )
          .slice(0, MAX_RECENT_SEARCHES)
          .map((search) => ({ ...search, id: getSearchId(search) }))
      : [];
  } catch {
    return [];
  }
};

export const addRecentSearch = (searches, location) => {
  const recentSearch = {
    id: getSearchId(location),
    name: location.name,
    country: location.country || "",
    latitude: location.latitude,
    longitude: location.longitude,
  };

  return [recentSearch, ...searches.filter(({ id }) => id !== recentSearch.id)].slice(
    0,
    MAX_RECENT_SEARCHES,
  );
};

export const saveRecentSearches = (searches) => {
  localStorage.setItem(RECENT_SEARCHES_STORAGE_KEY, JSON.stringify(searches));
};

export const clearRecentSearches = () => {
  localStorage.removeItem(RECENT_SEARCHES_STORAGE_KEY);
};
