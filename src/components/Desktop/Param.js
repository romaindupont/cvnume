import React, { useState } from 'react';
import './style.scss';
import System from './System';
import Personnalisation from './Personnalisation';

const Param = ({setParamOpen}) => {	
	const [ getPage, setGetPage ] = useState(0)
	const ParamClic = (e) => {
		setGetPage(parseInt(e.target.getAttribute("data-paramid")))
	}
  return (
		<div className="parametre">
				<span className="parametre--close" onClick={()=>setParamOpen(false) }>&#xD7;</span>
				<h2 className="parametre--title">Paramètres</h2>
				{getPage ===0 && (<div className="parametre-choix">
					<div className="parametre-systeme" data-paramid="1" onClick={ParamClic}>
							<span className="parametre-systeme-screen" data-paramid="1"></span>
							<span className="parametre-systeme-name" data-paramid="1">Système</span>
							<span className="parametre-systeme-infos" data-paramid="1">Technologies, spécifications, informations</span>
					</div>
					<div className="parametre-ecran" data-paramid="2" onClick={ParamClic}>
						<span className="parametre-ecran-screen" data-paramid="2"></span>
						<span className="parametre-ecran-name" data-paramid="2">Personnalisation</span>
						<span className="parametre-systeme-infos" data-paramid="2">Arrière-plan, couleurs</span>
					</div>
					<div className="parametre-ecran" data-paramid="3" onClick={ParamClic}>
						<span className="parametre-ecran-cadena" data-paramid="3"></span>
						<span className="parametre-ecran-name" data-paramid="3">Confidentialité</span>
						<span className="parametre-systeme-infos" data-paramid="3">Régles</span>
					</div>
					<div className="parametre-ecran" data-paramid="4" onClick={ParamClic}>
						<span className="parametre-ecran-ergo" data-paramid="4"></span>
						<span className="parametre-ecran-name" data-paramid="4">Option ergonomie</span>
						<span className="parametre-systeme-infos" data-paramid="4">Contraste, Cursor</span>
					</div>
					<div className="parametre-ecran" data-paramid="5" onClick={ParamClic}>
						<span className="parametre-ecran-maj" data-paramid="5"></span>
						<span className="parametre-ecran-name" data-paramid="5">Mise à jour et sécurité</span>
						<span className="parametre-systeme-infos" data-paramid="5">Sauvegarde, Update</span>
					</div>
				</div>)}
				{getPage === 1 && (<System setGetPage={setGetPage}/>)}
				{getPage === 2 && (<Personnalisation setGetPage={setGetPage}/>)}
		</div>
  );
}

export default Param;