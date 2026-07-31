import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/hero/Hero";
import HourlyForecast from "../components/forecast/HourlyForecast";
import WeeklyForecast from "../components/forecast/WeeklyForecast";
import WeatherCard from "../components/weather/WeatherCard";
import WeatherHighlights from "../components/weather/WeatherHighlights";

import {
  getCoordinates,
  getCurrentWeather,
  getHourlyForecast,
  getWeeklyForecast,
} from "../services/weatherApi";
import { validateCityName } from "../utils/searchValidation";

const getSearchErrorMessage = (error) => {
  if (/no location found/i.test(error?.message)) {
    return "City not found. Please try another city.";
  }

  return "Unable to load weather right now. Please try again.";
};

function Home() {
  const [weather, setWeather] = useState(null);
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [weeklyForecast, setWeeklyForecast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

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
      const [currentWeather, hourlyData, weeklyData] = await Promise.all([
        getCurrentWeather(location.latitude, location.longitude),
        getHourlyForecast(location.latitude, location.longitude),
        getWeeklyForecast(location.latitude, location.longitude),
      ]);

      setWeather({ ...currentWeather, location });
      setHourlyForecast(hourlyData);
      setWeeklyForecast(weeklyData);
      setError("");
    } catch (requestError) {
      setError(getSearchErrorMessage(requestError));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero onSearch={handleCitySearch} isLoading={isLoading} error={error} />
      <WeatherCard weather={weather} />
      <WeatherHighlights weather={weather} />
      <HourlyForecast
        forecast={hourlyForecast}
        currentTime={weather?.time}
        isLoading={isLoading}
      />
      <WeeklyForecast forecast={weeklyForecast} isLoading={isLoading} />
    </main>
  );
}

export default Home;
