/* eslint-disable no-sequences */
import Paysage from '../assets/img/paysage.jpg';
import Mer from '../assets/img/mer.jpg';
import Sand from '../assets/img/sand.jpg';
import Jungle from '../assets/img/jungle.jpg';

export const backgroundChoose = (data) => {
	const choose = document.querySelector('.system-action-actualScreen');
	const backGroundGeneral = document.querySelector('.bureauBg');
	switch (data) {
		case 'Image1':
			return choose.style.backgroundImage = "linear-gradient(225deg, #2d5c01, #0069a7, #0400ff)", backGroundGeneral.style.backgroundImage = "linear-gradient(225deg, #2d5c01, #0069a7, #0400ff)";
		case 'Image2':
			return choose.style.backgroundImage = "linear-gradient(225deg, #befd84, #62bdf3, #5350f5)", backGroundGeneral.style.backgroundImage = "linear-gradient(225deg, #befd84, #62bdf3, #5350f5)";	
		case 'Image3':
			return choose.style.backgroundImage = "linear-gradient(225deg, #ff9c62, #a72902, #5a0101)", backGroundGeneral.style.backgroundImage = "linear-gradient(225deg, #ff9c62, #a72902, #5a0101)";	
		case 'Image4':
			return choose.style.backgroundImage = "linear-gradient(225deg, #fbe90b, #9b7a01, #5d6a07)", backGroundGeneral.style.backgroundImage = "linear-gradient(225deg, #fbe90b, #9b7a01, #5d6a07)";	
		case 'Image5':
			return choose.style.backgroundImage = `url(${Paysage})`, choose.style.backgroundSize = 'cover', backGroundGeneral.style.backgroundImage = `url(${Paysage})`, backGroundGeneral.style.backgroundSize = 'cover';
		case 'Image6':
			return choose.style.backgroundImage = `url(${Mer})`, choose.style.backgroundSize = 'cover', backGroundGeneral.style.backgroundImage = `url(${Mer})`, backGroundGeneral.style.backgroundSize = 'cover';
		case 'Image7':
			return choose.style.backgroundImage = `url(${Sand})`, choose.style.backgroundSize = 'cover', backGroundGeneral.style.backgroundImage = `url(${Sand})`, backGroundGeneral.style.backgroundSize = 'cover';
		case 'Image8':
			return choose.style.backgroundImage = `url(${Jungle})`, choose.style.backgroundSize = 'cover', backGroundGeneral.style.backgroundImage = `url(${Jungle})`, backGroundGeneral.style.backgroundSize = 'cover';
		default:
			return choose.style.backgroundImage = "linear-gradient(225deg, #2d5c01, #0069a7, #0400ff)", backGroundGeneral.style.backgroundImage = "linear-gradient(225deg, #2d5c01, #0069a7, #0400ff)";
	}
}