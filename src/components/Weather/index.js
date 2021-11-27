import React, { useEffect} from 'react';
import './style.scss';
import HumidLogo from '../../assets/img/humidity.svg';
import TubeLogo from '../../assets/img/tubeWind.svg';
import { getHueFromTemperature } from '../../utils/temperatureColor';
import { getLogoForWeather } from '../../utils/weatherChoose';

const Weather = ({ weather, windSpeed, temperature, humidity, city, deg, getLatitudeLongitude, getWeather }) => {
	const hue = getHueFromTemperature(temperature);
	const imageWeather = getLogoForWeather(weather);
	useEffect(() => {
		if (!navigator.geolocation) {
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
				getLatitudeLongitude(position.coords.latitude,position.coords.longitude)
				getWeather()
				
      })}	
	}, [getLatitudeLongitude,getWeather])
  return (
		<div className="weather">
			<h3 className="weather-city">{city}</h3>
			<img src={imageWeather} alt="" className="weather-image-change" />
			<span className="weather-temp" style={{
					color: `hsl(${hue}, 100%, 50%)`
				}}>{temperature}°C</span>
			<img src={HumidLogo} alt="" className="weather-image" />
			<span className="weather-humidity">{humidity}</span>
			<img src={TubeLogo} alt="" className="weather-image-tube" style={{
					transform: `rotate(${deg}deg)`
				}}/>
			<span className="weather-wSpeed">{windSpeed} Km/h</span>
		</div>
  );
}

export default Weather;