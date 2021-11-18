import React, {useState, useEffect} from 'react';
import './style.scss';


const Weather = ({/* lat, lng, */ getLatitudeLongitude, getWeather}) => {
/* 	const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null); */
	const [status, setStatus] = useState(null);
	useEffect(() => {
		if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
				getLatitudeLongitude(position.coords.latitude,position.coords.longitude)
				getWeather()
      })}
			
	}, [getLatitudeLongitude,getWeather])
	/* console.log(lat,lng) */
  return (
		<div className="weather">
		</div>
  );
}

export default Weather;