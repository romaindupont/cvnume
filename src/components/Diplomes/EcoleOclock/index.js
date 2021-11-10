import React from 'react';
import './style.scss';
import { LogoOclock } from '../../../utils/logo';

const EcoleOclock = () => {
	return (
		<div className="ecoleOclock">
			<img src={LogoOclock()} alt="logo oclock" className="ecoleOclock-image"/>
			<p className="ecoleOclock-infos">
				Apprentissage durant 6 mois en téléprésentiel des langages et concept suivant : <br/>
				HTML - CSS - SASS - PHP - JS - LINUX - SQL - GIT - AJAX - LUMEN - POO - MVC - Mobile First - Composer - npm - yarn - webpack - REACT - REDUX - WORDPRESS - AWS - ...
			</p>
		</div>
  );
}

export default EcoleOclock;