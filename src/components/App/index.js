import React, { useState } from 'react';
import './style.scss';
import Dossier from '../Dossier';
import DossierOuvert from '../DossierOuvert';
import Menu from '../Menu';
import CvPdf from '../cvPdf';

const App = () => {
	const [ actionDossier, setActionDossier ] = useState('close')
  return (
		<div className="bureauBg">
			<Menu />
			<div className="mesDossiers">
				<Dossier setActionDossier={setActionDossier}/>
				<CvPdf />
			</div>

			<DossierOuvert setActionDossier={setActionDossier} actionDossier={actionDossier}/>
		</div>
  );
}

export default App;
