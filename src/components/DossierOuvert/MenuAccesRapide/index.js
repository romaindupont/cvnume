import React from 'react';
import './style.scss';

const MenuAccesRapide = ({ list, clicFile }) => {
  return (
		<div className="menuGauche">
			<div className="lienMenu--1">
				<span className="screen"></span>
				<p className="lienMenu--1-titre">Bureau</p>
			</div>
			{list.map((dossier, i)=> 
				<div className="lienMenu--1" key={i} onClick={()=>clicFile(dossier.name, dossier.id)}>
					<span className="dossierMenu"></span>
					<p className="lienMenu--1-titre">{dossier.name}</p>
				</div>
		 	)}
		</div>
  );
}

export default MenuAccesRapide;