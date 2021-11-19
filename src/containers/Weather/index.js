import { connect } from 'react-redux';
// == Import : local
import Weather from '../../components/Weather';
import { getLatitudeLongitude, getWeather, registerWeather } from '../../actions/weather';


const mapStateToProps = (state) => ({
  lat: state.Weather.lat,
	lng: state.Weather.lng,
	weather: state.Weather.weather,
	windSpeed: state.Weather.windSpeed,
	temperature: state.Weather.temperature,
	humidity: state.Weather.humidity,
	city: state.Weather.city,
	deg: state.Weather.deg
});

const mapDispatchToProps = (dispatch)=> ({
  getLatitudeLongitude: (lat, lng) => {
    dispatch(getLatitudeLongitude(lat, lng));
  },
	getWeather: () => {
    dispatch(getWeather());
	},
	registerWeather: (weather, windSpeed, temperature, humidity, name, deg) => {
    dispatch(registerWeather(weather, windSpeed, temperature, humidity, name, deg));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Weather);