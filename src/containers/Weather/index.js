import { connect } from 'react-redux';
// == Import : local
import Weather from '../../components/Weather';
import { getLatitudeLongitude, getWeather, registerWeather } from '../../actions/weather';


const mapStateToProps = (state) => ({
  lat: state.Weather.lat,
	lng: state.Weather.lng,
});

const mapDispatchToProps = (dispatch)=> ({
  getLatitudeLongitude: (lat, lng) => {
    dispatch(getLatitudeLongitude(lat, lng));
  },
	getWeather: () => {
    dispatch(getWeather());
	},
	registerWeather: (weather, windSpeed, temperature, humidity, name) => {
    dispatch(registerWeather(weather, windSpeed, temperature, humidity, name));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Weather);