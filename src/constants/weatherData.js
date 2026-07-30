import {
  FiActivity,
  FiCloud,
  FiCloudRain,
  FiDroplet,
  FiEye,
  FiSun,
  FiThermometer,
  FiWind,
} from "react-icons/fi";

export const weatherHighlights = [
  { label: "Humidity", value: "70%", icon: FiDroplet },
  { label: "Wind Speed", value: "12 km/h", icon: FiWind },
  { label: "Pressure", value: "1008 hPa", icon: FiActivity },
  { label: "Visibility", value: "10 km", icon: FiEye },
  { label: "UV Index", value: "6 Moderate", icon: FiSun },
  { label: "Feels Like", value: "31°", icon: FiThermometer },
];

export const weeklyForecast = [
  { timeOrDay: "Mon", temperature: "32°", weatherIcon: FiSun },
  { timeOrDay: "Tue", temperature: "31°", weatherIcon: FiCloud },
  { timeOrDay: "Wed", temperature: "29°", weatherIcon: FiCloudRain },
  { timeOrDay: "Thu", temperature: "30°", weatherIcon: FiCloud },
  { timeOrDay: "Fri", temperature: "33°", weatherIcon: FiSun },
  { timeOrDay: "Sat", temperature: "32°", weatherIcon: FiCloud },
  { timeOrDay: "Sun", temperature: "30°", weatherIcon: FiCloudRain },
];

export const hourlyForecast = [
  { timeOrDay: "Now", temperature: "31°", weatherIcon: FiSun },
  { timeOrDay: "11 AM", temperature: "32°", weatherIcon: FiSun },
  { timeOrDay: "12 PM", temperature: "33°", weatherIcon: FiCloud },
  { timeOrDay: "1 PM", temperature: "33°", weatherIcon: FiCloud },
  { timeOrDay: "2 PM", temperature: "32°", weatherIcon: FiCloud },
  { timeOrDay: "3 PM", temperature: "31°", weatherIcon: FiCloudRain },
  { timeOrDay: "4 PM", temperature: "30°", weatherIcon: FiCloudRain },
  { timeOrDay: "5 PM", temperature: "29°", weatherIcon: FiCloud },
];
