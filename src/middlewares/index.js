import axios from 'axios';
import { GET_WEATHER, registerWeather } from '../actions/weather';

axios.defaults.baseURL = '';

const ajax = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_WEATHER:
    {
      const state = store.getState();
			/* console.log(process.env.REACT_APP_API_KEY) */
      axios.get(`?lat=${state.Weather.lat}&lon=${state.Weather.lng}&units=metric&appid=32c2c653765448419370d96020a78ff3`,
			{
        baseURL: 'https://api.openweathermap.org/data/2.5/weather',
      })
        .then((response) => {
					store.dispatch(registerWeather(response.data.weather[0].main,Math.round(response.data.wind.speed*3.6),Math.round(response.data.main.temp),response.data.main.humidity,response.data.name))
				})
        .catch((error) => {
        });
      break;
    }
    default:
      next(action);
  }
};

export default ajax;