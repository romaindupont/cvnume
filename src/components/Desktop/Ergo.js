import React from 'react';
import './style.scss';

const Ergo = ({setGetPage}) => {
	const changeSize = (e) => {
		const valueSizeText = document.querySelector('.input-textTaille--value');
		/* const value = document.querySelector('.input-textTaille--value'); */
		/* const min = e.target.value ? e.target.value */
		const val = e.target.value;
		const min = e.target.min ? e.target.min : 0;	
		const max = e.target.max ? e.target.max : 100;
		const newVal = Number(((val - min) * 100) / (max - min));
		/* console.log(newVal) */
		valueSizeText.innerHTML = e.target.value;
		/* console.log(newVal) */
		valueSizeText.style.left = `${newVal}%`;
		valueSizeText.style.zoom = `${newVal+50}%`;
	}
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
							<div className="inputValueText">
								<div className="input-textTaille--value">50</div>
								<input type="range" min="0" max="100" id="tailleText" step="1" onChange={changeSize} />
								<button type="submit">Appliquer</button>
							</div>
						</section>
						<section className="system-action-section" id="lumino">
							<h2 className="system-action-section-title">Luminosité</h2>
							<input type="range" min="0" max="100" />

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