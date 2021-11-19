import Sun from '../assets/img/sun.svg';
import Cloud from '../assets/img/cloud.svg';
import Fog from '../assets/img/fog.svg';
import Storm from '../assets/img/orage.svg';
import Rain from '../assets/img/rain.svg';
import Snow from '../assets/img/snow.svg';
import Tornado from '../assets/img/tornade.svg';

export const getLogoForWeather = (weather) => {
	switch (weather) {
		case 'Clear':
			return Sun;
		case 'Clouds':
			return Cloud;	
		case 'Rain':
			return Rain;	
		case 'Thunderstorm':
			return Storm;	
		case 'Drizzle':
			return Rain;
		case 'Snow':
			return Snow;				
		case 'Fog':
			return Fog;	
		case 'Mist':
			return Fog;			
		case 'Smoke':
			return Fog;	
		case 'Haze':
			return Fog;	
		case 'Dust':
			return Fog;	
		case 'Sand':
			return Fog;	
		case 'Ash':
			return Fog;	
		case 'Squall':
			return Tornado;	
		case 'Tornado':
			return Tornado;	
		default:
			return Sun;
	}
}