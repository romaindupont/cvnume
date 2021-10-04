import React from 'react';
import './style.scss';

function MenuLine() {
  return (
		<div className="DossierOuvertSearchBar">
			<div className="lienDossier">
				<span className="lienDossier--1">Bureau</span>
				<span className="lienDossier--crochet">&#62;</span>
				<span className="lienDossier--2">a_propos</span>
			</div>
			<div className="mode">
				<div className="mode-liste"><span className="tooltip">Mode liste</span>
					<span className="mode-liste-trait--1"></span>
					<span className="mode-liste-trait--2"></span>
					<span className="mode-liste-trait--3"></span>
				</div>
				<div className="mode-icone"><span className="tooltip">Mode image</span>
					<span className="mode-icone-carre--1"></span>
					<span className="mode-icone-carre--2"></span>
					<span className="mode-icone-carre--3"></span>
					<span className="mode-icone-carre--4"></span>
				</div>
			</div>
				<div className="searchDossier">
					<div className="loupe">
						<span className="rond"></span>
						<span className="trait"></span>
					</div>
					<form className="formulaireRecherche">
						<input type="text" className="searchDossier-searchBar" placeholder="Rechercher dans Apropos"/>
					</form>
				</div>
		</div>



  );
}

export default MenuLine;