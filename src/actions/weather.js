export const GET_LATITUDE_LONGITUDE = 'GET_LATITUDE_LONGITUDE';
export const getLatitudeLongitude = (lat, lng) => ({
  type: GET_LATITUDE_LONGITUDE,
	lat,
	lng,
});

export const GET_WEATHER = 'GET_WEATHER';
export const getWeather = () => ({
  type: GET_WEATHER,
});

export const REGISTER_WEATHER = 'REGISTER_WEATHER';
export const registerWeather = (weather, windSpeed, temperature, humidity, name, deg) => ({
  type: REGISTER_WEATHER,
	weather,
	windSpeed,
	temperature,
	humidity,
	name,
	deg
});
