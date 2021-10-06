import React from 'react';
import './style.scss';

const Dossier = ({setActionDossier}) => {
	const openFile = () => {
		setActionDossier('normal')
	}
  return (
    <div className="dossier" onClick={openFile}>
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
