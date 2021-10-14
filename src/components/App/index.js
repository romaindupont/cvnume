import React, { useState } from 'react';
import './style.scss';
import Dossier from '../../containers/Dossier';
import DossierOuvert from '../../containers/DossierOuvert';
import Menu from '../Menu';
import CvPdf from '../cvPdf';
import InternetLogo from '../../containers/InternetLogo';
import Games from '../Games';

const App = ({ listDossier }) => {
	const [ actionDossier, setActionDossier ] = useState('close');
  return (
		<div className="bureauBg">
			<Menu />
			<div className="mesDossiers">
				{listDossier.map((dossier,i)=><Dossier key={i} setActionDossier={setActionDossier} name={dossier.name} id={dossier.id} /> )}
				
				<CvPdf />
				<InternetLogo />
				<Games />
			</div>

			<DossierOuvert setActionDossier={setActionDossier} actionDossier={actionDossier} />
		</div>
  );
}

export default App;
