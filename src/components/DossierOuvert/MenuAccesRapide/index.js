import React from 'react';
import './style.scss';



function MenuAccesRapide() {
  return (
		<div className="menuGauche">
			<div className="lienMenu--1">
				<span className="screen"></span>
				<p className="lienMenu--1-titre">Bureau</p>
			</div>
			<div className="lienMenu--1">
				<span className="dossierMenu"></span>
				<p className="lienMenu--1-titre">A propos</p>
			</div>
		</div>
  );
}

export default MenuAccesRapide;