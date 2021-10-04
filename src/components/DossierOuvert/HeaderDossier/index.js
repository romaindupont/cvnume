import React from 'react';
import './style.scss';

function HeaderDossier() {
  return (
		<div className="dossierOuvertHeader">
			<div className="dossierSmall">
				<div className="dossierSmall-file"></div>
			</div>
			<p className="dossierOuvertHeader-titre">A propos</p>
			<div className="dossierOuvertHeader-groupAction">
				<span className="dossierOuvertHeader-minus"></span>
				<span className="dossierOuvertHeader-big"></span>
				<span className="dossierOuvertHeader-close">
					<span className="dossierOuvertHeader-close--1"></span>
					<span className="dossierOuvertHeader-close--2"></span>
				</span>
			</div>
		</div>
  );
}

export default HeaderDossier;