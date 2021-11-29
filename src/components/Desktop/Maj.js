import React, { useEffect } from 'react';
import './style.scss';

const Maj = ({ setGetPage }) => {
	const spaceBar = (e) => {
		if(e.keyCode === 32){
			setTimeout(()=>document.querySelector('.barre-1').style.background='#ffd267',1000);
			setTimeout(()=>document.querySelector('.barre-2').style.background='#ffcb4d',1500);
			setTimeout(()=>document.querySelector('.barre-3').style.background='#ffc334',2000);
			setTimeout(()=>document.querySelector('.barre-4').style.background='#ffbc1a',2500);
			setTimeout(()=>document.querySelector('.barre-5').style.background='#ffb401',3000);
			setTimeout(()=>document.querySelector('.barre-6').style.background='#f39a05',3500);
			setTimeout(()=>document.querySelector('.barre-7').style.background='#e57505',4000);
			setTimeout(()=>document.querySelector('.barre-8').style.background='#d34b08',4500);
			setTimeout(()=>document.querySelector('.barre-9').style.background='#c2240b',5000);
			setTimeout(()=>document.querySelector('.barre-10').style.background='#b70b0d',5500);
		}
	/* 	if(e.keyCode === ''){
			console.log('je stoppe')
		} */
	}
	const stopAction = (e) => {
		if(e.keyCode === 32){
			console.log('je stoppe')
		}
	}
	useEffect(() => {
		document.addEventListener("keydown", (e) => spaceBar(e));
		document.addEventListener("keyup", (e) => stopAction(e));
  });
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
					<section className="system-action-section" id="essai">
						<h2 className="system-action-section-title">essai</h2>
						<div className="barres">
							<div className="barre-1"></div>
							<div className="barre-2"></div>
							<div className="barre-3"></div>
							<div className="barre-4"></div>
							<div className="barre-5"></div>
							<div className="barre-6"></div>
							<div className="barre-7"></div>
							<div className="barre-8"></div>
							<div className="barre-9"></div>
							<div className="barre-10"></div>
						</div>
					</section>
				</div>
			</div>
		</div>
  );
}

export default Maj;