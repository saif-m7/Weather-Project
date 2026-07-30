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

function Home() {
  const [weather, setWeather] = useState(null);
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [weeklyForecast, setWeeklyForecast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCitySearch = async (cityName) => {
    setIsLoading(true);
    setError("");
    setHourlyForecast([]);
    setWeeklyForecast([]);

    try {
      const location = await getCoordinates(cityName);
      const currentWeather = await getCurrentWeather(
        location.latitude,
        location.longitude,
      );

      const weatherData = { ...currentWeather, location };
      setWeather(weatherData);

      const [hourlyData, weeklyData] = await Promise.all([
        getHourlyForecast(location.latitude, location.longitude),
        getWeeklyForecast(location.latitude, location.longitude),
      ]);
      setHourlyForecast(hourlyData);
      setWeeklyForecast(weeklyData);
    } catch (requestError) {
      setError(requestError.message || "Unable to load weather for this city.");
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
