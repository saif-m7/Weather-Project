import axios from "axios";

const weatherApi = axios.create({
  baseURL: "https://api.open-meteo.com/v1",
  timeout: 10000,
});

const geocodingApi = axios.create({
  baseURL: "https://geocoding-api.open-meteo.com/v1",
  timeout: 10000,
});

const createRequestError = (type, message) => {
  const error = new Error(message);
  error.weatherErrorType = type;
  return error;
};

const handleApiError = (error, fallbackMessage) => {
  if (error.weatherErrorType) {
    throw error;
  }

  if (error.code === "ECONNABORTED" || error.code === "ETIMEDOUT") {
    throw createRequestError("timeout", "The weather request timed out.");
  }

  if (error.request && !error.response) {
    throw createRequestError("network", "Unable to reach the weather service.");
  }

  const message = error.response?.data?.reason || fallbackMessage;
  throw createRequestError("api", message);
};

export const getCoordinates = async (cityName) => {
  try {
    const { data } = await geocodingApi.get("/search", {
      params: { name: cityName, count: 1, language: "en", format: "json" },
    });

    const location = data.results?.[0];

    if (!location) {
      throw createRequestError("city-not-found", `No location found for "${cityName}".`);
    }

    return {
      name: location.name,
      latitude: location.latitude,
      longitude: location.longitude,
      country: location.country,
      state: location.admin1 || null,
      timezone: location.timezone,
    };
  } catch (error) {
    handleApiError(error, "Unable to find the requested location.");
  }
};

export const getCurrentWeather = async (latitude, longitude) => {
  try {
    const { data } = await weatherApi.get("/forecast", {
      params: {
        latitude,
        longitude,
        current: [
          "temperature_2m",
          "relative_humidity_2m",
          "apparent_temperature",
          "is_day",
          "weather_code",
          "surface_pressure",
          "wind_speed_10m",
          "wind_direction_10m",
        ].join(","),
        timezone: "auto",
      },
    });

    const current = data.current;

    return {
      time: current.time,
      temperature: current.temperature_2m,
      feelsLike: current.apparent_temperature,
      humidity: current.relative_humidity_2m,
      pressure: current.surface_pressure,
      windSpeed: current.wind_speed_10m,
      windDirection: current.wind_direction_10m,
      weatherCode: current.weather_code,
      isDay: Boolean(current.is_day),
      units: {
        temperature: data.current_units.temperature_2m,
        windSpeed: data.current_units.wind_speed_10m,
        pressure: data.current_units.surface_pressure,
      },
    };
  } catch (error) {
    handleApiError(error, "Unable to load current weather.");
  }
};

export const getHourlyForecast = async (latitude, longitude) => {
  try {
    const { data } = await weatherApi.get("/forecast", {
      params: {
        latitude,
        longitude,
        hourly: "temperature_2m,apparent_temperature,precipitation_probability,weather_code,wind_speed_10m",
        forecast_days: 2,
        timezone: "auto",
      },
    });

    const { hourly, hourly_units: units } = data;

    return hourly.time.map((time, index) => ({
      time,
      temperature: hourly.temperature_2m[index],
      feelsLike: hourly.apparent_temperature[index],
      precipitationProbability: hourly.precipitation_probability[index],
      weatherCode: hourly.weather_code[index],
      windSpeed: hourly.wind_speed_10m[index],
      units: {
        temperature: units.temperature_2m,
        windSpeed: units.wind_speed_10m,
        precipitationProbability: units.precipitation_probability,
      },
    }));
  } catch (error) {
    handleApiError(error, "Unable to load the hourly forecast.");
  }
};

export const getWeeklyForecast = async (latitude, longitude) => {
  try {
    const { data } = await weatherApi.get("/forecast", {
      params: {
        latitude,
        longitude,
        daily: "weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,sunrise,sunset",
        forecast_days: 7,
        timezone: "auto",
      },
    });

    const { daily, daily_units: units } = data;

    return daily.time.map((date, index) => ({
      date,
      weatherCode: daily.weather_code[index],
      temperatureMax: daily.temperature_2m_max[index],
      temperatureMin: daily.temperature_2m_min[index],
      precipitationProbability: daily.precipitation_probability_max[index],
      sunrise: daily.sunrise[index],
      sunset: daily.sunset[index],
      units: {
        temperature: units.temperature_2m_max,
        precipitationProbability: units.precipitation_probability_max,
      },
    }));
  } catch (error) {
    handleApiError(error, "Unable to load the weekly forecast.");
  }
};
