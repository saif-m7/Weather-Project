export const TEMPERATURE_UNITS = {
  celsius: "celsius",
  fahrenheit: "fahrenheit",
};

export const convertTemperature = (celsius, unit) => {
  if (celsius == null || unit === TEMPERATURE_UNITS.celsius) {
    return celsius;
  }

  return (celsius * 9) / 5 + 32;
};

export const temperatureSymbol = (unit) =>
  unit === TEMPERATURE_UNITS.fahrenheit ? "°F" : "°C";
