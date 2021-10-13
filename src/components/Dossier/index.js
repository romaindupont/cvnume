import React from 'react';
import './style.scss';

const Dossier = ({ setActionDossier, name, clicFile, id, setOpenBig }) => {
	const openFile = () => {
		clicFile(name,id)
		setActionDossier('normal')
		setOpenBig('close')
	}
  return (
    <div className="dossier" onClick={openFile}>
      <div className="dossierDevant">
				<span className="dossierLanguette"></span>
			</div>
			<div className="dossierArriere"></div>
			<div className="papier">
				<p className="papierTitre">{name}</p>
			</div>
    </div>
  );
}

export default Dossier;
