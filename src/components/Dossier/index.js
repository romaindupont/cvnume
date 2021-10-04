import React from 'react';
import './style.scss';

function Dossier() {
  return (
    <div className="dossier">
      <div className="dossierDevant">
				<span className="dossierLanguette"></span>
			</div>
			<div className="dossierArriere"></div>
			<div className="papier">
				<p className="papierTitre">A propos</p>
			</div>
    </div>
  );
}

export default Dossier;
