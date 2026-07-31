const cityNamePattern = /^[\p{L}]+(?:[ .'-][\p{L}]+)*$/u;

export const validateCityName = (value) => {
  const cityName = value.trim();

  if (!cityName) {
    return { isValid: false, error: "Please enter a city name." };
  }

  if (cityName.length < 2 || !cityNamePattern.test(cityName)) {
    return { isValid: false, error: "Please enter a valid city name." };
  }

  return { isValid: true, value: cityName };
};
