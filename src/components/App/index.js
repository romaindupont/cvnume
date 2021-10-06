import React, { useState } from 'react';
import './style.scss';
import Dossier from '../Dossier';
import DossierOuvert from '../DossierOuvert';
import Menu from '../Menu';

const App = () => {
	const [ actionDossier, setActionDossier ] = useState('normal')
  return (
		<div className="bureauBg">
			<Menu />
			<div className="mesDossiers">
				<Dossier setActionDossier={setActionDossier}/>
			</div>
			<DossierOuvert setActionDossier={setActionDossier} actionDossier={actionDossier}/>
		</div>
  );
}

export default App;
