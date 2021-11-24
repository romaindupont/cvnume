import React from 'react';
import './style.scss';

const Ergo = ({setGetPage}) => {
  return (
		<div className="ergonomie">
			<span className="system-menu--goback" onClick={()=>setGetPage(0)}>&larr;</span>
					<div className="system-sys">
					<div className="system-menu">
						<ul className="system-menu-ul">
							<li className="system-menu-li" onClick={()=>setGetPage(0)}>Accueil</li>
							<li className="system-menu-li"><a href="#text">Taille Texte</a></li>
							<li className="system-menu-li"><a href="#lumino">Luminosité</a></li>
							<li className="system-menu-li"><a href="#cursor">Cursor</a></li>
						</ul>
					</div>
					<div className="system-action" id="srollbarSys">
						<section className="system-action-section" id="text">
							<h2 className="system-action-section-title">Taille Texte</h2>
						</section>
						<section className="system-action-section" id="lumino">
							<h2 className="system-action-section-title">Luminosité</h2>
						</section>
						<section className="system-action-section" id="cursor">
							<h2 className="system-action-section-title">Cursor</h2>
						</section>
					</div>
					</div>
		</div>
  );
}

export default Ergo;