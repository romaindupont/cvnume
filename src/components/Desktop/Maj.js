import React from 'react';
import './style.scss';

const Maj = ({ setGetPage }) => {
	  return (
		<div className="maj">
			<span className="system-menu--goback" onClick={()=>setGetPage(0)}>&larr;</span>
			<div className="system-sys">
				<div className="system-menu">
					<ul className="system-menu-ul">
						<li className="system-menu-li" onClick={()=>setGetPage(0)}>Accueil</li>
						<li className="system-menu-li"><a href="#update">Update System</a></li>
						<li className="system-menu-li"><a href="#essai">essai</a></li>
					</ul>
				</div>
				<div className="system-action" id="srollbarSys">
					<section className="system-action-section" id="update">
						<h2 className="system-action-section-title">Update System</h2>
						<p className="system-action-majtext"><span className="system-action-maj"></span> Mises à jour disponibles</p>
						<p className="system-action-statut"><span>Statut :</span> Téléchargement en attente</p>
						<p className="system-action-statut">Des mises à jour sont prêtes à être téléchargées</p>
						<button className="system-action-majbutton">Télécharger</button>
					</section>
				</div>
			</div>
		</div>
  );
}

export default Maj;