import { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/hero/Hero";
import HourlyForecast from "../components/forecast/HourlyForecast";
import TemperatureChart from "../components/forecast/TemperatureChart";
import WeeklyForecast from "../components/forecast/WeeklyForecast";
import WeatherCard from "../components/weather/WeatherCard";
import WeatherHighlights from "../components/weather/WeatherHighlights";
import SunriseSunsetCard from "../components/weather/SunriseSunsetCard";
import WeatherBackground from "../components/weatherEffects/WeatherBackground";
import { TEMPERATURE_UNITS } from "../utils/temperature";

import {
  getCoordinates,
  getCurrentWeather,
  getHourlyForecast,
  getWeeklyForecast,
} from "../services/weatherApi";
import { validateCityName } from "../utils/searchValidation";
import { createFavorite, getSavedFavorites, saveFavorites } from "../utils/favorites";
import {
  addRecentSearch,
  clearRecentSearches,
  getSavedRecentSearches,
  saveRecentSearches,
} from "../utils/recentSearches";

const getSearchErrorMessage = (error) => {
  switch (error?.weatherErrorType) {
    case "city-not-found":
      return "City not found. Please try another city.";
    case "network":
      return "Network connection issue. Check your connection and try again.";
    case "timeout":
      return "The request timed out. Please try again.";
    case "api":
      return "The weather service could not complete your request. Please try again.";
    default:
      return "Unable to load weather right now. Please try again.";
  }
};

const getLocationErrorMessage = (error) => {
  switch (error.code) {
    case 1:
      return "Location permission was denied. Please enable it and try again.";
    case 2:
      return "Your location is unavailable. Please try again.";
    case 3:
      return "Location request timed out. Please try again.";
    default:
      return "Unable to get your location. Please try again.";
  }
};

const getCurrentPosition = () =>
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: false,
      timeout: 10000,
      maximumAge: 300000,
    });
  });

function Home() {
  const [theme, setTheme] = useState(() => localStorage.getItem("weather-now-theme") || "dark");
  const [temperatureUnit, setTemperatureUnit] = useState(() => {
    const savedUnit = localStorage.getItem("weather-now-temperature-unit");
    return savedUnit === TEMPERATURE_UNITS.fahrenheit
      ? TEMPERATURE_UNITS.fahrenheit
      : TEMPERATURE_UNITS.celsius;
  });
  const [favorites, setFavorites] = useState(getSavedFavorites);
  const [recentSearches, setRecentSearches] = useState(getSavedRecentSearches);
  const [weather, setWeather] = useState(null);
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [weeklyForecast, setWeeklyForecast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLocationLoading, setIsLocationLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("weather-now-theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("weather-now-temperature-unit", temperatureUnit);
  }, [temperatureUnit]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  const loadWeatherForLocation = async (location) => {
    const [currentWeather, hourlyData, weeklyData] = await Promise.all([
      getCurrentWeather(location.latitude, location.longitude),
      getHourlyForecast(location.latitude, location.longitude),
      getWeeklyForecast(location.latitude, location.longitude),
    ]);

    setWeather({ ...currentWeather, location });
    setHourlyForecast(hourlyData);
    setWeeklyForecast(weeklyData);
  };

  const handleCitySearch = async (searchTerm) => {
    if (isLoading) {
      return;
    }

    const validation = validateCityName(searchTerm);

    if (!validation.isValid) {
      setError(validation.error);
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const location = await getCoordinates(validation.value);
      await loadWeatherForLocation(location);
      const updatedSearches = addRecentSearch(recentSearches, location);
      setRecentSearches(updatedSearches);
      saveRecentSearches(updatedSearches);
      setError("");
    } catch (requestError) {
      setError(getSearchErrorMessage(requestError));
    } finally {
      setIsLoading(false);
    }
  };

  const handleFavoriteSelect = async (favorite) => {
    if (isLoading) {
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      await loadWeatherForLocation(favorite);
      setError("");
    } catch (requestError) {
      setError(getSearchErrorMessage(requestError));
    } finally {
      setIsLoading(false);
    }
  };

  const clearSearchHistory = () => {
    setRecentSearches([]);
    clearRecentSearches();
  };

  const toggleFavorite = () => {
    if (!weather?.location) {
      return;
    }

    const favorite = createFavorite(weather.location);
    const updatedFavorites = favorites.some(({ id }) => id === favorite.id)
      ? favorites.filter(({ id }) => id !== favorite.id)
      : [...favorites, favorite];

    setFavorites(updatedFavorites);
    saveFavorites(updatedFavorites);
  };

  const handleCurrentLocation = async () => {
    if (isLoading) {
      return;
    }

    if (!("geolocation" in navigator)) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    setIsLoading(true);
    setIsLocationLoading(true);
    setError("");

    try {
      const position = await getCurrentPosition();
      const { latitude, longitude } = position.coords;
      await loadWeatherForLocation({
        name: "Current Location",
        country: "",
        latitude,
        longitude,
      });
      setError("");
    } catch (requestError) {
      setError(
        typeof requestError?.code === "number"
          ? getLocationErrorMessage(requestError)
          : getSearchErrorMessage(requestError),
      );
    } finally {
      setIsLocationLoading(false);
      setIsLoading(false);
    }
  };

  return (
    <main className="relative isolate min-h-screen overflow-hidden text-slate-900 dark:text-white">
      <WeatherBackground weather={weather} />
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        temperatureUnit={temperatureUnit}
        onTemperatureUnitChange={setTemperatureUnit}
        favorites={favorites}
        onSelectFavorite={handleFavoriteSelect}
        recentSearches={recentSearches}
        onSelectRecentSearch={handleFavoriteSelect}
        onClearRecentSearches={clearSearchHistory}
      />
      <Hero
        onSearch={handleCitySearch}
        onUseCurrentLocation={handleCurrentLocation}
        isLoading={isLoading}
        isLocationLoading={isLocationLoading}
        error={error}
      />
      <div className="relative z-0 mx-auto max-w-7xl space-y-10 px-4 pb-12 sm:space-y-12 sm:px-6 sm:pb-16 lg:space-y-14 lg:px-8 lg:pb-20">
        <WeatherCard
          weather={weather}
          temperatureUnit={temperatureUnit}
          isFavorite={Boolean(
            weather?.location && favorites.some(({ id }) => id === createFavorite(weather.location).id),
          )}
          onToggleFavorite={toggleFavorite}
        />
        <WeatherHighlights weather={weather} temperatureUnit={temperatureUnit} />
        <SunriseSunsetCard day={weeklyForecast[0]} currentTime={weather?.time} />
        <HourlyForecast
          forecast={hourlyForecast}
          currentTime={weather?.time}
          isLoading={isLoading}
          temperatureUnit={temperatureUnit}
        />
        <TemperatureChart
          forecast={hourlyForecast}
          currentTime={weather?.time}
          temperatureUnit={temperatureUnit}
        />
        <WeeklyForecast
          forecast={weeklyForecast}
          isLoading={isLoading}
          temperatureUnit={temperatureUnit}
        />
      </div>
      <Footer />
    </main>
  );
}

export default Home;
