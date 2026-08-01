const FAVORITES_STORAGE_KEY = "weather-now-favorites";

const getFavoriteId = ({ name, country = "", latitude, longitude }) =>
  `${name.toLocaleLowerCase()}|${country.toLocaleLowerCase()}|${latitude}|${longitude}`;

export const getSavedFavorites = () => {
  try {
    const savedFavorites = JSON.parse(localStorage.getItem(FAVORITES_STORAGE_KEY) || "[]");

    return Array.isArray(savedFavorites)
      ? savedFavorites
          .filter(
            ({ name, latitude, longitude }) =>
              typeof name === "string" && Number.isFinite(latitude) && Number.isFinite(longitude),
          )
          .map((favorite) => ({ ...favorite, id: getFavoriteId(favorite) }))
      : [];
  } catch {
    return [];
  }
};

export const saveFavorites = (favorites) => {
  localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
};

export const createFavorite = (location) => ({
  id: getFavoriteId(location),
  name: location.name,
  country: location.country || "",
  latitude: location.latitude,
  longitude: location.longitude,
});
