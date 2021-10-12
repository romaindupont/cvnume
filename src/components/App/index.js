import React, { useState } from 'react';
import './style.scss';
import Dossier from '../Dossier';
import DossierOuvert from '../DossierOuvert';
import Menu from '../Menu';
import CvPdf from '../cvPdf';
import InternetLogo from '../InternetLogo';
import Games from '../Games';

const App = () => {
	const [ actionDossier, setActionDossier ] = useState('close');
	const [ openBig, setOpenBig ] = useState('close');
  return (
		<div className="bureauBg">
			<Menu />
			<div className="mesDossiers">
				<Dossier setActionDossier={setActionDossier}/>
				<CvPdf />
				<InternetLogo openBig={openBig} setOpenBig={setOpenBig}/>
				<Games />
			</div>

			<DossierOuvert setActionDossier={setActionDossier} actionDossier={actionDossier}/>
		</div>
  );
}

export default App;
