import React from 'react';
import './style.scss';
import Dossier from '../Dossier';
import DossierOuvert from '../DossierOuvert';

function App() {
  return (
		<div className="bureauBg">
			<div className="mesDossiers">
				<Dossier />
			</div>
			<DossierOuvert />
		</div>
  );
}

export default App;
