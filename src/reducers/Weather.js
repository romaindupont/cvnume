import { GET_LATITUDE_LONGITUDE, REGISTER_WEATHER } from "../actions/weather";

const initialState = {
	lat:49.1745,
	lng:-0.3357,
	weather:'',
	temperature:null,
	humidity: null,
	windSpeed: null,
	city: '',
	deg:null
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
		case GET_LATITUDE_LONGITUDE:
			return {
				...state,
				lat: action.lat,
				lng: action.lng
			}
		case REGISTER_WEATHER:
			return {
				...state,
				weather:action.weather,
				temperature:action.temperature,
				humidity: action.humidity,
				windSpeed: action.windSpeed,
				city: action.name,
				deg: action.deg
			}
		
    default:
      return state;
  }
};

export default reducer; 