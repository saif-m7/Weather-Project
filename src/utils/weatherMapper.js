import {
  WiCloudy,
  WiDaySunny,
  WiDaySunnyOvercast,
  WiFog,
  WiNightClear,
  WiRain,
  WiShowers,
  WiSleet,
  WiSnow,
  WiSprinkle,
  WiThunderstorm,
} from "react-icons/wi";

const weatherDetails = (description, icon, theme) => ({
  description,
  icon,
  theme,
});

/**
 * Maps an Open-Meteo WMO weather code to display-ready weather details.
 * `isDay` is optional so current conditions can use the night variant for
 * clear skies while forecasts can continue to map from a weather code alone.
 */
export const mapWeatherCode = (weatherCode, isDay = true) => {
  switch (weatherCode) {
    case 0:
      return isDay
        ? weatherDetails("Clear Sky", WiDaySunny, "sunny")
        : weatherDetails("Clear Sky", WiNightClear, "night");
    case 1:
      return isDay
        ? weatherDetails("Mainly Clear", WiDaySunny, "sunny")
        : weatherDetails("Mainly Clear", WiNightClear, "night");
    case 2:
      return weatherDetails("Partly Cloudy", WiDaySunnyOvercast, "cloudy");
    case 3:
      return weatherDetails("Overcast", WiCloudy, "cloudy");
    case 45:
    case 48:
      return weatherDetails("Fog", WiFog, "fog");
    case 51:
    case 53:
    case 55:
      return weatherDetails("Drizzle", WiSprinkle, "rainy");
    case 56:
    case 57:
      return weatherDetails("Freezing Drizzle", WiSleet, "rainy");
    case 61:
    case 63:
    case 65:
      return weatherDetails("Rain", WiRain, "rainy");
    case 66:
    case 67:
      return weatherDetails("Freezing Rain", WiSleet, "rainy");
    case 71:
    case 73:
    case 75:
    case 77:
      return weatherDetails("Snow", WiSnow, "snowy");
    case 80:
    case 81:
    case 82:
      return weatherDetails("Rain Showers", WiShowers, "rainy");
    case 85:
    case 86:
      return weatherDetails("Snow Showers", WiSnow, "snowy");
    case 95:
    case 96:
    case 99:
      return weatherDetails("Thunderstorm", WiThunderstorm, "storm");
    default:
      return weatherDetails("Current Conditions", WiCloudy, "cloudy");
  }
};

export default mapWeatherCode;
