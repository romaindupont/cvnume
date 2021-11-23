import React, { useState } from 'react';
import './style.scss';
import Dossier from '../../containers/Dossier';
import DossierOuvert from '../../containers/DossierOuvert';
import Menu from '../../containers/Menu';
import CvPdf from '../cvPdf';
import InternetLogo from '../../containers/InternetLogo';
import Games from '../Games';
import BoiteMail from '../../containers/BoiteMail';
import Weather from '../../containers/Weather';
import Desktop from '../../containers/Desktop';

const App = ({ listDossier, theme }) => {
	const [ actionDossier, setActionDossier ] = useState('close');
  return (
		<div className={`bureauBg ${theme}`}>
			<Menu />
			<div className="mesDossiers">
				{listDossier.map((dossier,i)=><Dossier key={i} setActionDossier={setActionDossier} name={dossier.name} id={dossier.id} /> )}
				<CvPdf />
				<InternetLogo />
				<Games />
				<Weather />
				<Desktop />
			</div>
			<BoiteMail />
			<DossierOuvert setActionDossier={setActionDossier} actionDossier={actionDossier} />
		</div>
  );
}

export default App;
