import React from 'react';
import './style.scss';

const Param = ({setParamOpen}) => {	
  return (
		<div className="parametre">
				<span className="parametre--close" onClick={()=>setParamOpen(false) }>&#xD7;</span>
				<h2 className="parametre--title">Paramètres</h2>
				<div className="parametre-choix">
					<div className="parametre-systeme">
							<span className="parametre-systeme-screen"></span>
							<span className="parametre-systeme-name">Système</span>
					</div>
					<div className="parametre-ecran">
						<span className="parametre-ecran-screen"></span>
						<span className="parametre-ecran-name">Personnalisation</span>
					</div>
				</div>
		</div>
  );
}

export default Param;