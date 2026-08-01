import { mapWeatherCode } from "../../utils/weatherMapper";
import { getWeatherBackground } from "../../constants/weatherBackgrounds";
import CloudEffect from "./CloudEffect";
import FogEffect from "./FogEffect";
import NightEffect from "./NightEffect";
import RainEffect from "./RainEffect";
import SnowEffect from "./SnowEffect";
import StormEffect from "./StormEffect";
import SunnyEffect from "./SunnyEffect";

const weatherEffects = {
  sunny: SunnyEffect,
  cloudy: CloudEffect,
  rainy: RainEffect,
  snowy: SnowEffect,
  storm: StormEffect,
  fog: FogEffect,
  night: NightEffect,
};

function WeatherBackground({ weather }) {
  const weatherTheme = mapWeatherCode(weather?.weatherCode, weather?.isDay).theme;
  const Effect = weatherEffects[weatherTheme] || CloudEffect;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden transition-all duration-700 ${getWeatherBackground(weatherTheme)}`}
    >
      <Effect />
    </div>
  );
}

export default WeatherBackground;
