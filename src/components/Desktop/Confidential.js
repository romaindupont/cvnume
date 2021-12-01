import React from 'react';
import './style.scss';

const Confidential = ({ setGetPage }) => {
  return (
		<div className="confidential">
			<span className="system-menu--goback" onClick={()=>setGetPage(0)}>&larr;</span>
			<div className="system-sys">
			<div className="system-menu">
				<ul className="system-menu-ul">
					<li className="system-menu-li" onClick={()=>setGetPage(0)}>Accueil</li>
					<li className="system-menu-li"><a href="#confidential">Confidentialité</a></li>
				</ul>
			</div>
			<div className="system-action" id="srollbarSys">
				<section className="system-action-section" id="confidential">
					<h2 className="system-action-section-title">Confidentialité</h2>
					<p>Aucunes informations personnelles n'est utilisées par ce site, je ne récupére aucune informations de navigation, mise à part votre position pour le widget météo, données qui ne sont pas sauvegardées.</p>
				</section>
			</div>
			</div>
		</div>
  );
}

export default Confidential;