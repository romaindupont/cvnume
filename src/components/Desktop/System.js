import React from 'react';
import './style.scss';


const System = ({ setGetPage }) => {
  return (
		<div className="system">
			<span className="system-menu--goback" onClick={()=>setGetPage(0)}>&larr;</span>
			<div className="system-sys">
			<div className="system-menu">
				<ul className="system-menu-ul">
					<li className="system-menu-li" onClick={()=>setGetPage(0)}>Accueil</li>
					<li className="system-menu-li"><a href="#techno">Technologies</a></li>
					<li className="system-menu-li"><a href="#sys">Spécifications</a></li>
					<li className="system-menu-li"><a href="#info">Informations</a></li>
				</ul>
			</div>
			<div className="system-action" id="srollbarSys">
				<section className="system-action-section" id="techno">
					<h2 className="system-action-section-title">Technologies</h2>
					<p className="system-action-section-p">Les technologies utilisées pour la fabrication de ce site sont les suivantes :</p>
					<ul className="system-action-section-ul">
						<li className="system-action-section-li"><a href="https://fr.reactjs.org/" target="_blank" rel="noreferrer">ReactJs</a></li>
						<li className="system-action-section-li"><a href="https://redux.js.org/" target="_blank" rel="noreferrer">Redux</a></li>
						<li className="system-action-section-li"><a href="https://sass-lang.com/" target="_blank" rel="noreferrer">CSS/SASS</a></li>
						<li className="system-action-section-li"><a href="https://threejs.org/" target="_blank" rel="noreferrer">ThreeJs</a></li>
						<li className="system-action-section-li"><a href="https://www.npmjs.com/package/axios" target="_blank" rel="noreferrer">Axios</a></li>
						<li className="system-action-section-li"><a href="https://react-leaflet.js.org/" target="_blank" rel="noreferrer">react-leaflet</a></li>
						<li className="system-action-section-li"><a href="https://www.npmjs.com/package/react-calendar" target="_blank" rel="noreferrer">react-calendar</a></li>
						<li className="system-action-section-li"><a href="https://www.npmjs.com/package/classnames" target="_blank" rel="noreferrer">classnames</a></li>
					</ul>
				</section>
				<section className="system-action-section" id="sys">
					<h2 className="system-action-section-title">Spécifications</h2>
					<p className="system-action-section-p">Voici les spécifications de l'appareil</p>
					<span>Version navigateur : <span>{navigator.appVersion}</span></span><br></br>
					<span>Editeur : <span>Rdd professionnel edition</span></span><br></br>
					<span>Version : <span>V0.1-2021</span></span><br></br>
					<span>MAJ : <span>le 17/11/2021</span></span><br></br>
				</section>
				<section className="system-action-section" id="info">
					<h2 className="system-action-section-title">Informations</h2>
					<p className="system-action-section-p">Déclarer un bug :</p>
					<a href="mailto:rdt.romaindupont@gmail.com">rdt.romaindupont@gmail.com</a>
					<span></span><span></span>
				</section>
			</div>
			</div>
		</div>

  );
}

export default System;