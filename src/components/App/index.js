import React, { useState } from 'react';
import './style.scss';
import Dossier from '../../containers/Dossier';
import DossierOuvert from '../../containers/DossierOuvert';
import Menu from '../Menu';
import CvPdf from '../cvPdf';
import InternetLogo from '../InternetLogo';
import Games from '../Games';

const App = ({ listDossier }) => {
	const [ actionDossier, setActionDossier ] = useState('close');
	const [ openBig, setOpenBig ] = useState('close');
  return (
		<div className="bureauBg">
			<Menu />
			<div className="mesDossiers">
				{listDossier.map((dossier,i)=><Dossier key={i} setActionDossier={setActionDossier} name={dossier.name} id={dossier.id} setOpenBig={setOpenBig}/> )}
				
				<CvPdf />
				<InternetLogo openBig={openBig} setOpenBig={setOpenBig}/>
				<Games />
			</div>

			<DossierOuvert setActionDossier={setActionDossier} actionDossier={actionDossier} setOpenBig={setOpenBig}/>
		</div>
  );
}

export default App;
